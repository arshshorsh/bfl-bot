const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
  ]
});

const ROLE_NAME = process.env.CLAN_ROLE || 'BFL';
const PORT = process.env.PORT || 3000;
const CACHE_TTL = 30000; // refresh every 30 seconds

let membersCache = null;
let cacheTime = 0;

async function fetchMembers() {
  const guild = client.guilds.cache.first();
  if (!guild) throw new Error('Bot not in any server');

  await guild.members.fetch();

  const role = guild.roles.cache.find(r => r.name === ROLE_NAME);
  if (!role) throw new Error(`Role "${ROLE_NAME}" not found`);

  return role.members.map(member => ({
    id: member.id,
    username: member.user.username,
    displayName: member.displayName,
    avatar: member.user.displayAvatarURL({ size: 64, extension: 'png' }),
    online: member.presence?.status === 'online',
    status: member.presence?.status || 'offline',
    roles: member.roles.cache
      .filter(r => r.name !== '@everyone' && r.name !== ROLE_NAME)
      .map(r => r.name),
  }));
}

app.get('/members', async (req, res) => {
  try {
    const now = Date.now();
    if (!membersCache || now - cacheTime > CACHE_TTL) {
      membersCache = await fetchMembers();
      cacheTime = now;
    }
    res.json({ members: membersCache, count: membersCache.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', bot: client.user?.tag || 'not ready' });
});

client.once('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
app.listen(PORT, () => console.log(`API on port ${PORT}`));
