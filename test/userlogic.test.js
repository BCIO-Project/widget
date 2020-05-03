var localURL = "http://localhost:3000/"
const initTime = Date.now();
const waitTime = 20;

describe('Widget detect user and save cookies properly', () => {
    beforeAll(async () => {
        const client = await page.target().createCDPSession();
        await client.send('Network.clearBrowserCookies');
    });
    it('should create a firstVisit cookie the first visit', async () => {
        //prepare
        
        //run
        await page.goto(localURL);
        await page.waitFor(waitTime);
        const finalCookies = await page.cookies();
        //validate
        expect(finalCookies[0].name).toBe('bcioFirstVisit');
        expect(finalCookies.length).toBe(1);
        expect(parseInt(finalCookies[0].value)).toBeGreaterThan(parseInt(initTime));
    });
    it('should not create a firstVisit cookie if already have', async () => {
        //prepare
        
        let cookies = await page.cookies();
        cookies.push({
            name: 'bcioFirstVisit',
            value: initTime.toString(),
            domain: 'localhost',
            path: '/',
            expires: 1783639060,
            size: 27,
            httpOnly: false,
            secure: false,
            session: false
        });
        await page.setCookie(...cookies);
        await page.goto(localURL);
        await page.waitFor(waitTime);
        const finalCookies = await page.cookies();
        expect(finalCookies[0].name).toBe('bcioFirstVisit');
        expect(parseInt(finalCookies[0].value)).toBe(parseInt(initTime));
    });
    it('should not create a status cookie if is same day first visit', async () => {
        //prepare
        
        let cookies = await page.cookies();
        cookies.push({
            name: 'bcioFirstVisit',
            value: initTime.toString(),
            domain: 'localhost',
            path: '/',
            expires: 1783639060,
            size: 27,
            httpOnly: false,
            secure: false,
            session: false
        });
        await page.setCookie(...cookies);
        //run
        await page.goto(localURL);
        await page.waitFor(waitTime);
        const finalCookies = await page.cookies();
        //Validate
        expect(finalCookies[0].name).toBe('bcioFirstVisit');
        expect(finalCookies.length).toBe(1);
    });
    it('should create a status cookie if first visit is older than target time', async () => {
        //prepare
        
        let cookies = await page.cookies();
        cookies.push({
            name: 'bcioFirstVisit',
            value: "1234",
            domain: 'localhost',
            path: '/',
            expires: 1783639060,
            size: 27,
            httpOnly: false,
            secure: false,
            session: false
        });
        await page.setCookie(...cookies);
        //run
        await page.goto(localURL);
        await page.waitFor(waitTime);
        const finalCookies = await page.cookies();
        //Validate
        expect(finalCookies[1].name).toBe('bcioFirstVisit');
        expect(finalCookies[0].name).toBe('bcioStatus');
        expect(finalCookies.length).toBe(2);
    });
    it('should mantain the uuid in the status cookie if already exist', async () => {
        //prepare

        let cookies = await page.cookies();
        cookies.push({
            name: 'bcioFirstVisit',
            value: "1234",
            domain: 'localhost',
            path: '/',
            expires: 1783639060,
            size: 27,
            httpOnly: false,
            secure: false,
            session: false
        },);

        cookies.push({
            name: 'bcioStatus',
            value: "2bc4a03a-ee38-4798-8a57-2612860119bb",
            domain: 'localhost',
            path: '/',
            expires: 1783639060,
            size: 27,
            httpOnly: false,
            secure: false,
            session: false
        });
        await page.setCookie(...cookies);
        //run
        await page.goto(localURL);
        await page.waitFor(waitTime);
        const finalCookies = await page.cookies();
        //Validate
        expect(finalCookies[1].name).toBe('bcioFirstVisit');
        expect(finalCookies[0].value).toBe('2bc4a03a-ee38-4798-8a57-2612860119bb');
    });

});
describe('Widget detect user and choose the correct type of assignation', () => {
    beforeAll(async () => {
        const client = await page.target().createCDPSession();
        await client.send('Network.clearBrowserCookies');
    });
    //assignationType
    it('should do fast assignation the first visit', async () => {
        //prepare

        //run

        await page.goto(localURL);
        await page.waitFor(waitTime);
        var assignationType = await page.evaluate("assignationType")
        //validate
        expect(assignationType).toBe('fast');
    });
    it('should do fast assignation if is same day that first visit', async () => {
        //prepare
        let cookies = await page.cookies();
        cookies.push({
            name: 'bcioFirstVisit',
            value: initTime.toString(),
            domain: 'localhost',
            path: '/',
            expires: 1783639060,
            size: 27,
            httpOnly: false,
            secure: false,
            session: false
        });
        await page.setCookie(...cookies);
        //run
        await page.goto(localURL);
        await page.waitFor(waitTime);
        var assignationType = await page.evaluate("assignationType")
        //validate
        expect(assignationType).toBe('fast');
    });
    it('should do smart assignation if first visit is older than target time', async () => {
        //prepare
        let cookies = await page.cookies();
        cookies.push({
            name: 'bcioFirstVisit',
            value: "1234",
            domain: 'localhost',
            path: '/',
            expires: 1783639060,
            size: 27,
            httpOnly: false,
            secure: false,
            session: false
        });
        await page.setCookie(...cookies);
        //run
        await page.goto(localURL);
        await page.waitFor(waitTime);
        var assignationType = await page.evaluate("assignationType")
        //validate
        expect(assignationType).toBe('smart');
    });
});

//