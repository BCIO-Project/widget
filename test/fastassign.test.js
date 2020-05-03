var localURL = "http://localhost:3000/"
const initTime = Date.now();
const waitTime = 20;

describe('Fast assignworks properly', () => {
    beforeAll(async () => {
        const client = await page.target().createCDPSession();
        await client.send('Network.clearBrowserCookies');
    });
    it('should execute fast if run fast', async () => {
        //prepare
        await page.goto(localURL);
        await page.waitFor(waitTime);
        //mocking
        const campaignData= {
            "name": "Campaign Data JSON 1.0",
                "Creation Date": 2.1341324123414322e+27,
                    "campaigns": [
                        {
                            "name": "Campaña 2",
                            "url": "https://lajklsadjklkdjsfajkldsfa.com",
                            "offers": [
                                {
                                    "name": "mi oferta 1",
                                    "clicks": 2222222,
                                    "target": 100000000000,
                                    "htlm": "PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KPHRpdGxlPlBhZ2UgVGl0bGU8L3RpdGxlPgo8L2hlYWQ+Cjxib2R5PgoKPGgxPlRoaXMgaXMgYSBIZWFkaW5nPC9oMT4KPHA+VGhpcyBpcyBhIHBhcmFncmFwaC48L3A+Cgo8L2JvZHk+CjwvaHRtbD4=",
                                    "tags": [
                                        "politica",
                                        "deporte",
                                        "aventura"
                                    ],
                                    "isComplete": false
                                },
                                {
                                    "name": "mi oferta 2",
                                    "clicks": 2222222,
                                    "target": 100000000000,
                                    "htlm": "PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KPHRpdGxlPlBhZ2UgVGl0bGU8L3RpdGxlPgo8L2hlYWQ+Cjxib2R5PgoKPGgxPlRoaXMgaXMgYSBIZWFkaW5nPC9oMT4KPHA+VGhpcyBpcyBhIHBhcmFncmFwaC48L3A+Cgo8L2JvZHk+CjwvaHRtbD4=",
                                    "tags": [
                                        "sociedad",
                                        "famosos",
                                        "moda"
                                    ],
                                    "isComplete": false
                                },
                                {
                                    "name": "mi oferta 3",
                                    "clicks": 15423525323,
                                    "target": 1000000,
                                    "htlm": "PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KPHRpdGxlPlBhZ2UgVGl0bGU8L3RpdGxlPgo8L2hlYWQ+Cjxib2R5PgoKPGgxPlRoaXMgaXMgYSBIZWFkaW5nPC9oMT4KPHA+VGhpcyBpcyBhIHBhcmFncmFwaC48L3A+Cgo8L2JvZHk+CjwvaHRtbD4=",
                                    "tags": [
                                        "tech",
                                        "movil",
                                        "juegos"
                                    ],
                                    "isComplete": true
                                }
                            ]
                        }
                    ]
        }
        await page.evaluate((campaignData) => {
            console.log(campaignData); 
        });
        //run 
        await page.evaluate("fastAssignation()");
        await page.waitFor(waitTime);
        //validate
        var assignationType = await page.evaluate("assignationType");
        var assignationResult = await page.evaluate("assignationResult");
        //validate
        expect(assignationType).toBe('fast');
        expect(assignationResult).toHaveProperty('offer');
        expect(assignationResult).toHaveProperty('campaign');
        console.log(assignationResult.campaign.name)
    });


});
