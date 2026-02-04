import { chromium } from "playwright";

const pages = [
  { name: "Homepage", url: "http://localhost:3000" },
  { name: "About", url: "http://localhost:3000/about" },
  { name: "Contact", url: "http://localhost:3000/contact" },
  { name: "Products", url: "http://localhost:3000/products" },
  { name: "EWA", url: "http://localhost:3000/products/ewa" },
  { name: "Payroll", url: "http://localhost:3000/products/payroll" },
  {
    name: "Workforce Management",
    url: "http://localhost:3000/products/workforce-management",
  },
  { name: "Retail Industry", url: "http://localhost:3000/industries/retail" },
  {
    name: "Hospitality Industry",
    url: "http://localhost:3000/industries/hospitality",
  },
  {
    name: "Multisite Industry",
    url: "http://localhost:3000/industries/multisite",
  },
  {
    name: "Franchise Industry",
    url: "http://localhost:3000/industries/franchise",
  },
  { name: "Security", url: "http://localhost:3000/security" },
];

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();

  console.log("\n🔍 Testing Refactored Pages:\n");

  for (const testPage of pages) {
    try {
      console.log(`📄 Loading: ${testPage.name}`);
      await page.goto(testPage.url, {
        waitUntil: "networkidle",
        timeout: 10000,
      });

      // Check for MarketingHeader
      const header = await page.locator("header").count();

      // Check for MarketingFooter
      const footer = await page.locator("footer").count();

      // Check for consistent spacing
      const heroSection = await page.locator("section").first();
      const heroClasses = await heroSection.getAttribute("class");

      console.log(`   ✓ Header: ${header > 0 ? "✓" : "✗"}`);
      console.log(`   ✓ Footer: ${footer > 0 ? "✓" : "✗"}`);
      console.log(`   ✓ Hero section classes: ${heroClasses || "N/A"}`);
      console.log(`   ✓ Page loaded successfully\n`);

      // Wait a bit to see the page
      await page.waitForTimeout(1500);
    } catch (error) {
      console.error(`   ✗ Error loading ${testPage.name}: ${error.message}\n`);
    }
  }

  console.log(
    "✅ All pages tested! Keeping browser open for manual inspection...\n",
  );
  console.log("Press Ctrl+C to close the browser and exit.\n");

  // Keep the browser open for manual inspection
  await page.waitForTimeout(300000); // Wait 5 minutes
  await browser.close();
})();
