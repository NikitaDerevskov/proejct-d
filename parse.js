const puppeteer = require('puppeteer');

const tutuGetHtml = async url => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = await page.goto(url).then(() => page.content());
    return {html, browser};
}

const tutuGetData = async url => {
    // TODO Launch browser and send it to getfirstPage.
    // 26.02.2021 - this can help you to better parse
    let tutuData = await tutuGetHtml(url)
    return tutuData.html;
}

const parse = async ({url, parseFn}) => {
    return await parseFn(url);
}

const main = async () => {
    const resourses = {
        tutu: {url: "https://www.tutu.ru/", parseFn: tutuGetData},
        ali: {}, // TODO
        ps4Store: {} // TODO
    }

    /*
    *  We have some resources (tutu, ali, ps4Strore and etc).
    *  All things in project - just modules.
    *
    *
    * */

    const tutuData = await parse(resourses.tutu)

    console.log(tutuData)
    console.log('hey boy')
}

main();
