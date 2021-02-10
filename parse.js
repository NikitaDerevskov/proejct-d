const puppeteer = require('puppeteer');
const url = 'https://www.reddit.com';


const main = async () => {
    const state = {}
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const html = await page.goto(url).then(() => page.content())
        state.html = html;
    } catch (e) {
        throw new Error(e)
    }
    console.log('html', state)
}

main()
