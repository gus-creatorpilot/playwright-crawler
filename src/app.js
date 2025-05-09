const express = require('express');
const { chromium } = require('playwright');

const app = express();

// Endpoint to get page source
app.get('/source', async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).json({ error: 'Missing "url" query parameter' });
    }

    let finalUrl = url;
    if (!finalUrl.startsWith('http')) {
        finalUrl = 'https://' + finalUrl;
    }

    let browser;
    try {
        browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(finalUrl, { waitUntil: 'load', timeout: 15000 });

        const content = await page.content();  // Get page HTML
        res.set('Content-Type', 'text/html');
        res.send(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
