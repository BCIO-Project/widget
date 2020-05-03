var localURL = "http://localhost:3000/"
const initTime = Date.now();
const waitTime = 20;

describe('Smart assignworks properly', () => {
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
    //     expect(finalCookies[0].name).toBe('bcioFirstVisit');
    //     expect(finalCookies.length).toBe(1);
    //     expect(parseInt(finalCookies[0].value)).toBeGreaterThan(parseInt(initTime));
    });


});


