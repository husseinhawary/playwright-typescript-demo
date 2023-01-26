import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";

test.describe("TC001", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("Open Ajax Page", async ({ homePage, ajaxPage }) => {
    await homePage.openAjaxPage();
    expect(await ajaxPage.getPageTitle()).toContain("AJAX Data");
  });
});
