const puppeteer = require('puppeteer');

const getHtml = async url => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = await page.goto(url).then(() => page.content());
    return html;
}

const main = async () => {
    const url = 'https://www.reddit.com';
    console.log('html', await getHtml(url).catch(x => console.log('error', x)));
}

main();
