const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

app.get('/screenshot', async (req, res) => {
  // Launch a headless browser
  const browser = await puppeteer.launch({
    headless: "new"
  });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a URL
  await page.goto('https://example.com');

  // Take a screenshot
  const screenshot = await page.screenshot();

  // Close the browser
  await browser.close();

  // Send the screenshot as the response
  res.type('image/png').send(screenshot);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});