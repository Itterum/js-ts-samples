import {chromium} from 'playwright';
import fs from 'fs';

const url = 'https://news.ycombinator.com/';
const selector = '.athing';

const parse = async (element) => {
    const title = await element.$('.title > span > a');

    return {
        title: await title?.textContent(),
        url: await title?.getAttribute('href'),
    };
};

const writeDataToFile = (data) => {
    try {
        fs.writeFileSync('data.json', JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
};

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    try {
        await page.route(/(png|jpeg|jpg|gif|svg|webp|ico)$/, route => route.abort());
        await page.goto(url);
        await page.waitForTimeout(1000);

        await page.evaluate(async () => {
            await new Promise(resolve => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });

        const elements = await page.$$(selector);

        const result = await Promise.all(elements.map(element => parse(element)));

        await writeDataToFile(result);
    } catch (error) {
        console.error(error);
    } finally {
        await page.screenshot({path: 'example.png', fullPage: true});
        await page.close();
        await browser.close();
    }
})();
