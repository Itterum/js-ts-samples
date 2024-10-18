import {chromium} from 'playwright';

class BaseParser {
    constructor(url, selector, name) {
        this.name = name;
        this.url = url;
        this.selector = selector;
    }

    async parse(element) {
        return {...element};
    }

    async run() {
        const browser = await chromium.launch({headless: false});
        const page = await browser.newPage();

        try {
            await page.route(/(png|jpeg|jpg|gif|svg|webp|ico)$/, route => route.abort());
            await page.goto(this.url);
            await page.screenshot({path: `${this.name}.png`, fullPage: true});
            await page.waitForTimeout(1000);

            const result = await page.$$eval(this.selector, (elements) => {
                return elements.map((element) => this.parse(element));
            });

            console.log(await Promise.all(result));
        } catch (error) {
            console.error('Error occurred:', error);
        } finally {
            await browser.close();
        }
    }
}

class CentrsvyaziParser extends BaseParser {
    async parse(element) {
        const title = element.querySelector('a.product_link > h3')?.textContent || 'No title';
        const price = element.querySelector('.price_cart > .doubleprice > .newprice')?.textContent || 'No stars';

        return {title, price};
    }
}

const parser = new CentrsvyaziParser(url, selector, 'centrsvyazi');
parser.run();