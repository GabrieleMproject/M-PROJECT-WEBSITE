/**
 * Script Keep-Alive per Supabase (M Project SRL)
 * Esegue richieste HTTP agli endpoint di Supabase per registrare attività
 * e prevenire la sospensione automatica del database sui piani gratuiti (inattività > 7 giorni).
 */

const SUPABASE_PROJECT_REF = process.env.SUPABASE_PROJECT_REF || 'ifbgavdvupgyfvmyesie';
const SUPABASE_URL = process.env.SUPABASE_URL || `https://${SUPABASE_PROJECT_REF}.supabase.co`;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

const endpoints = [
  { name: 'Auth Health Endpoint', url: `${SUPABASE_URL}/auth/v1/health` },
  { name: 'REST Root Endpoint', url: `${SUPABASE_URL}/rest/v1/` },
  { name: 'Storage Status Endpoint', url: `${SUPABASE_URL}/storage/v1/status` },
];

async function pingEndpoint(endpoint) {
  const headers = {
    'User-Agent': 'M-Project-KeepAlive/1.0',
    ...(SUPABASE_ANON_KEY ? {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
    } : {})
  };

  try {
    const startTime = Date.now();
    const response = await fetch(endpoint.url, {
      method: 'GET',
      headers,
    });
    const duration = Date.now() - startTime;

    console.log(`✅ [${endpoint.name}] Status: ${response.status} ${response.statusText} (${duration}ms) -> ${endpoint.url}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ [${endpoint.name}] Error connecting to ${endpoint.url}: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log(`\n======================================================`);
  console.log(`🚀 Avvio Supabase Keep-Alive Ping`);
  console.log(`📅 Timestamp: ${new Date().toISOString()}`);
  console.log(`🔗 Target URL: ${SUPABASE_URL}`);
  console.log(`🆔 Project Ref: ${SUPABASE_PROJECT_REF}`);
  console.log(`======================================================\n`);

  let successCount = 0;
  for (const ep of endpoints) {
    const ok = await pingEndpoint(ep);
    if (ok) successCount++;
  }

  console.log(`\n======================================================`);
  console.log(`📊 Risultato: ${successCount}/${endpoints.length} endpoint contattati.`);
  console.log(`✨ Attività registrata su Supabase. Progetto mantenuto attivo!`);
  console.log(`======================================================\n`);
}

main();
