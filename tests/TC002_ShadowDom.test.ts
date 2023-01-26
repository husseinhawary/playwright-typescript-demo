import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";

test.describe("TC002", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("Open Shadow DOM Page", async ({ homePage, shadowDomPage }) => {
    await homePage.openShadowDomPage();
    expect(await shadowDomPage.getPageTitle()).toContain("Shadow DOM");
  });
});
