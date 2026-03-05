const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Try AI avatar generation sites
  const sites = [
    { name: 'Fiverr Pro Artists', url: 'https://www.fiverr.com/search/gigs?query=corporate%20cartoon%20avatar' },
    { name: 'Canva Avatar', url: 'https://www.canva.com/create/avatars/' },
    { name: '99designs', url: 'https://99designs.com/logo-maker' }
  ];

  for (const site of sites) {
    console.log(`Opening ${site.name}...`);
    try {
      await page.goto(site.url, { timeout: 30000, waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(1500);
      console.log(`  ${site.name} loaded`);
    } catch (e) {
      console.log(`  Error loading ${site.name}: ${e.message.split('\n')[0]}`);
    }
  }

  console.log('\nSites opened. Browse and find an artist or create avatars.');
  console.log('Browser will stay open for 5 minutes.');
  await page.waitForTimeout(300000);

  await browser.close();
  console.log('Done');
})();
