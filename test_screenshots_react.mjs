import puppeteer from 'puppeteer-core';

(async () => {
  console.log("Launching browser for React...");
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    defaultViewport: { width: 1280, height: 1600 }
  });

  const page = await browser.newPage();
  
  // Test React Site
  console.log("Navigating to React site...");
  await page.goto('http://localhost:5174/condofast', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: '/Users/gabrielemaesani/.gemini/antigravity/brain/40dd9b5e-3ee8-4cf4-9eb6-400c1a1e26a8/react_monthly.png' });
  
  // Click Annuale
  console.log("Clicking Annuale on React site...");
  // In React I didn't set IDs for the buttons, but I can find it by text.
  const buttons = await page.$$('button');
  for (let btn of buttons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('Annuale')) {
      await btn.click();
      break;
    }
  }
  
  await new Promise(r => setTimeout(r, 500)); // wait for transition
  await page.screenshot({ path: '/Users/gabrielemaesani/.gemini/antigravity/brain/40dd9b5e-3ee8-4cf4-9eb6-400c1a1e26a8/react_annual.png' });
  
  await browser.close();
  console.log("Done React.");
})();
