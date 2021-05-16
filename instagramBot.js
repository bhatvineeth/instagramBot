const puppeteer = require('puppeteer')

const BASE_URL = 'https://www.instagram.com/'

let browser
let page

const initialize = async () => {
	browser = await puppeteer.launch({
		headless: false
		// executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
	});

	page = await browser.newPage()
}

const login = async (username, password) => {

	// load instagram page
	await page.goto(BASE_URL, {waitUntil: 'networkidle2'})

	// accept cookies
	await page.click("body > div.RnEpo.Yx5HN._4Yzd2 > div > div > button.aOOlW.bIiDR")
  
	// increase the size of the page
	await page.setViewport({ width: 1366, height: 768});
	
	// entre username and password
	await page.type('input[name="username"]',username, {delay: 50})
	await page.type('input[name="password"]',password, {delay: 50})
	
	// click on login button
  await page.click("#loginForm > div > div:nth-child(3) > button")

	// wait for the page to load to new url and click on "Not now" to save password
	await page.waitForNavigation({waitUntil: 'networkidle2'})
	await page.click("#react-root > section > main > div > div > div > div > button")
	
}


module.exports = {initialize,login}