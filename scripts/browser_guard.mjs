// scripts/browser_guard.mjs
// Runner protetto per automazione browser isolata per MPROJECT_WEBSITE
import fs from 'fs';
import path from 'path';
import os from 'os';

// Tenta di risolvere puppeteer-core sia localmente che nel progetto CondoAI2
let puppeteer;
try {
  puppeteer = (await import('puppeteer-core')).default;
} catch (e) {
  try {
    puppeteer = (await import('../../CONDOFAST.IT/Software/CondoAI2/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js')).default;
  } catch (e2) {
    console.error('❌ Impossibile caricare puppeteer-core:', e2.message);
    process.exit(1);
  }
}

// 1. Whitelist di Sicurezza
export const ALLOWED_DOMAIN_PATTERNS = [
  /^https?:\/\/localhost(:\d+)?(\/.*)?$/,
  /^https?:\/\/127\.0\.0\.1(:\d+)?(\/.*)?$/,
  /^https:\/\/(.*\.)?mprojectsrl\.it(\/.*)?$/,
  /^https:\/\/(.*\.)?condofast\.it(\/.*)?$/,
  /^https:\/\/(.*\.)?condofast\.app(\/.*)?$/,
  /^https:\/\/.*\.vercel\.app(\/.*)?$/,
  /^https:\/\/.*\.supabase\.co(\/.*)?$/,
  /^https:\/\/www\.google\.com\/recaptcha\/.*$/,
  /^https:\/\/www\.gstatic\.com\/recaptcha\/.*$/,
  /^https:\/\/fonts\.googleapis\.com(\/.*)?$/,
  /^https:\/\/fonts\.gstatic\.com(\/.*)?$/
];

export function isUrlAllowed(url) {
  if (!url) return false;
  if (url.startsWith('data:') || url.startsWith('blob:') || url.startsWith('about:blank')) {
    return true;
  }
  return ALLOWED_DOMAIN_PATTERNS.some(pattern => pattern.test(url));
}

export function getChromeExecutable() {
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser'
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('Google Chrome non trovato nelle posizioni standard.');
}

export async function launchIsolatedBrowser(options = {}) {
  const chromePath = getChromeExecutable();
  const sandboxDir = fs.mkdtempSync(path.join(os.tmpdir(), 'agy_isolated_website_'));
  const headless = options.headless ?? false;

  console.log(`🔒 Avvio browser in Sandbox isolata per M Project Website: ${sandboxDir}`);
  console.log(`🛡️ Whitelist di sicurezza attiva.`);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: headless,
    userDataDir: sandboxDir,
    defaultViewport: options.viewport || { width: 1440, height: 900 },
    args: [
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-extensions',
      '--disable-default-apps',
      '--disable-sync'
    ]
  });

  const originalClose = browser.close.bind(browser);
  browser.close = async () => {
    try {
      await originalClose();
    } catch (e) {
      // ignore
    }
    try {
      if (fs.existsSync(sandboxDir)) {
        fs.rmSync(sandboxDir, { recursive: true, force: true });
        console.log(`🧹 Sandbox temporanea pulita: ${sandboxDir}`);
      }
    } catch (err) {
      console.warn(`⚠️ Impossibile rimuovere sandboxDir: ${err.message}`);
    }
  };

  return { browser, sandboxDir };
}

export async function createProtectedPage(browser) {
  const page = await browser.newPage();
  await page.setRequestInterception(true);

  const errors = [];
  const blockedRequests = [];

  page.on('request', req => {
    const url = req.url();
    if (isUrlAllowed(url)) {
      req.continue();
    } else {
      blockedRequests.push(url);
      console.warn(`🛑 [BLOCKED_BY_WHITELIST] Richiesta bloccata verso: ${url}`);
      req.abort('blockedbyclient');
    }
  });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push({ type: 'console.error', text: msg.text() });
      console.error(`❌ Console Error: ${msg.text()}`);
    }
  });

  page.on('pageerror', err => {
    errors.push({ type: 'pageerror', text: err.message });
    console.error(`💥 Uncaught Exception: ${err.message}`);
  });

  return {
    page,
    getErrors: () => errors,
    getBlockedRequests: () => blockedRequests
  };
}

if (process.argv[1] && process.argv[1].endsWith('browser_guard.mjs')) {
  const targetArg = process.argv.find(a => a.startsWith('--target='));
  const targetUrl = targetArg ? targetArg.split('=')[1] : 'http://localhost:5174';

  if (!isUrlAllowed(targetUrl)) {
    console.error(`⛔ ERRORE: L'URL ${targetUrl} non è presente nella Whitelist autorizzata.`);
    console.error(`Per accedere a questo URL è richiesta l'autorizzazione preventiva dell'utente.`);
    process.exit(1);
  }

  (async () => {
    const { browser } = await launchIsolatedBrowser({ headless: false });
    const { page, getErrors, getBlockedRequests } = await createProtectedPage(browser);

    try {
      console.log(`🌐 Navigazione sicura verso: ${targetUrl}`);
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      console.log(`✅ Pagina caricata correttamente.`);
      
      await new Promise(r => setTimeout(r, 3000));

      const errors = getErrors();
      const blocked = getBlockedRequests();

      console.log('--- REPORT DI COLLAUDO SICURO ---');
      console.log(`Errori JavaScript riscontrati: ${errors.length}`);
      console.log(`Richieste esterne bloccate: ${blocked.length}`);
      if (errors.length === 0) {
        console.log(`🎉 Risultato: Pagina integra e priva di errori!`);
      } else {
        console.log(`⚠️ Attenzione: verificare i log degli errori sopra.`);
      }
    } catch (e) {
      console.error(`❌ Errore durante il collaudo: ${e.message}`);
    } finally {
      await browser.close();
    }
  })();
}
