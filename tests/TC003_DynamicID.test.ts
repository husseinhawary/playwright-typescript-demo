import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";

test.describe("TC003", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("Open Dynamic Id Page", async ({ homePage, dynamicIdPage }) => {
    await homePage.openDynamicIdPage();
    expect(await dynamicIdPage.getPageTitle()).toContain("Dynamic ID");
  });
});
