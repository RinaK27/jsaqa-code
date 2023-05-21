let page;
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  it("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 120000);

  it("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 120000);

  it("The page contains Sign in button", async () => { 
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 120000);
});

  describe("Github test1", () => {
    beforeEach(async () => {
      page = await browser.newPage();
      await page.goto("https://github.com/security");
    });
    afterEach(() => {
      page.close();
    });
    test("The h1 should contain 'Trusted by millions of developers'", async () => {
      const expected = "Trusted by millions of developers";
      const actual = await page.$eval("h1", (link) => link.textContent);
      expect(actual).toContain(expected);
      });
  });

  describe("Github test2", () => {
    beforeEach(async () => {
      page = await browser.newPage();
      await page.goto("https://github.com/enterprise");
    });
    afterEach(() => {
      page.close();
    });
    test("The h1 should contain 'Build like the best'", async () => {
      const expected = "Build like the best";
      const actual = await page.$eval("h1", (link) => link.textContent);
      expect(actual).toContain(expected);
      });
  });

  describe("Github test3", () => {
    beforeEach(async () => {
      page = await browser.newPage();
      await page.goto("https://github.com/features");
    });
    afterEach(() => {
      page.close();
    });
    test("The h1 should contain 'The tools you need to build what you want.'", async () => {
      const expected = "The tools you need to build what you want.";
      const actual = await page.$eval("h1", (link) => link.textContent);
      expect(actual).toContain(expected);
      });
  })
