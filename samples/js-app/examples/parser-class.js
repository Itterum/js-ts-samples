import { chromium } from 'playwright';

class BaseParser {
    constructor(url, selector, name) {
        this.name = name;
        this.url = url;
        this.selector = selector;
    }

    async parse(element) { return { ...element }; }

    async run() {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();

        try {
            await page.route(/(png|jpeg|jpg|gif|svg|webp|ico)$/, route => route.abort());
            await page.goto(this.url);
            await page.screenshot({ path: `${this.name}.png`, fullPage: true });
            await page.waitForTimeout(1000);

            const elements = await page.$$(this.selector);

            console.log(await Promise.all(elements.map(element => this.parse(element))));
        } catch (error) {
            console.error('Error occurred:', error);
        } finally {
            await browser.close();
        }
    }

    async getTextContent(element, selector) {
        const el = await element.$(selector);
        return (await el?.textContent())?.trim().replace(/\s+/g, " ") || "";
    }

    async getAttributeValue(element, selector, attribute) {
        const el = await element.$(selector);
        return await el?.getAttribute(attribute) || "";
    }

    async getParsedNumber(element, selector) {
        const text = await this.getTextContent(element, selector);
        return parseInt(text.replace(",", "") || "0");
    }
}

class GithubExtractor extends BaseParser {
    async parse(element) {
        return {
            title: await this.getTextContent(element, ".h3"),
            url: new URL(await this.getAttributeValue(element, ".h3 > a", "href"), `https://github.com`).href,
            description: await this.getTextContent(element, ".col-9"),
            language: await this.getTextContent(element, "[itemprop='programmingLanguage']"),
            countAllStars: await this.getParsedNumber(element, "a.Link[href$='/stargazers']"),
            countStarsToday: await this.getParsedNumber(element, "span.d-inline-block.float-sm-right"),
            countForks: await this.getParsedNumber(element, "a.Link[href$='/forks']"),
        };
    }
}

const parser = new GithubExtractor("https://github.com/trending", ".Box-row", "Github");
parser.run();
