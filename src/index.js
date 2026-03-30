const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

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
const CACHE_TTL = 30000;
const DATA_FILE = path.join('/tmp', 'bfl_data.json');

function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {}
  return {
    matches: [
      { result:'WIN', map:'Clubhouse', opp:'vs VORTEX', date:'MAR 28', mode:'Competitive', score:'4–2' },
      { result:'WIN', map:'Villa', opp:'vs HEXCLAN', date:'MAR 26', mode:'Scrim', score:'4–1' },
      { result:'LOSS', map:'Border', opp:'vs NIGHTFX', date:'MAR 24', mode:'Competitive', score:'2–4' },
      { result:'WIN', map:'Kafe', opp:'vs 0GRAVITY', date:'MAR 21', mode:'Scrim', score:'4–3' },
      { result:'DRAW', map:'Coastline', opp:'vs RDRUSH', date:'MAR 19', mode:'Ranked', score:'3–3' },
    ],
    announcements: [
      { title: 'Welcome to BFL ESPORTS', body: 'The clan platform is now live.', date: 'MAR 30 2026' }
    ],
    applications: []
  };
}

function saveData(data) {
  try { fs.writeFileSync(DATA_FILE, JSON.stringify(data)); } catch (e) {}
}

let db = loadData();

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

app.get('/data', (req, res) => {
  res.json(db);
});

app.post('/data', (req, res) => {
  const { key, value, pass } = req.body;
  if (pass !== process.env.OWNER_PASS) return res.status(403).json({ error: 'Forbidden' });
  if (!['matches', 'announcements', 'applications'].includes(key)) return res.status(400).json({ error: 'Invalid key' });
  db[key] = value;
  saveData(db);
  res.json({ ok: true });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', bot: client.user?.tag || 'not ready' });
});

client.once('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
app.listen(PORT, () => console.log(`API on port ${PORT}`));
