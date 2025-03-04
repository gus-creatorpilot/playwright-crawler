# Web Scraper with Playwright

This project demonstrates how to deploy a web scraper that collects all the links from a given webpage using Playwright in a Node.js environment. It's designed to be used with Leapcell (leapcell.io), and the goal is to help users learn how to deploy projects that depend on web scraping.

## Prerequisites

Before running the application, you need to prepare the Playwright environment. To do so, execute the following script:

```bash
sh prepare_playwright_env.sh
```

This will:

1. Install Playwright and its dependencies (including Chromium) with the specified version.
2. Install the required Node.js modules by running `npm install`.

## Project Structure

```plaintext
.
├── LICENSE                           # License file for the project
├── package.json                      # Contains metadata and dependencies for the Node.js project
├── prepare_playwright_env.sh          # Script for setting up the Playwright environment
└── src
    ├── app.js                        # Main application entry point using Express and Playwright
    └── views
        ├── error.ejs                 # Error page template displayed when something goes wrong
        ├── partials
        │   └── header.ejs            # Header template shared across pages
        └── success.ejs               # Success page template, showing the scraped links
```

## Running the Application

Once you've prepared the environment, you can start the web service with the following command:

```bash
npm start
```

The service will be available on `http://localhost:3000`, and you can input the URL of the page you want to scrape. It will return a list of all links on that page.

---

### Explanation of `prepare_playwright_env.sh`

This script is responsible for setting up the environment necessary for Playwright to run. Here's a breakdown of what each line does:

```bash
#!/bin/sh

# Install playwright and its dependencies
npx -y playwright@1.50.1 install --with-deps chromium

# Install node modules
npm install
```

- `npx -y playwright@1.50.1 install --with-deps chromium`: This command installs Playwright version 1.50.1 and its necessary dependencies (including Chromium). It ensures the correct environment for the web scraping tasks.
- `npm install`: Installs the Node.js modules specified in `package.json`.

---

## Contact Support

If you have any issues or questions, feel free to reach out to support@leapcell.io.
