import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";

test.describe("TC001", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("Search On Rest Resatruant", async ({homePage, allRestauratsPage, restaurantPage}) => {
    await homePage.locationSearch(testConfig.location);
    expect(await allRestauratsPage.getDeliveringToMsg()).toContain("Delivering to");
    await allRestauratsPage.getFirstResturant(testConfig.restaurantName);
    expect(await restaurantPage.getRestaurantName()).toContain("Wagamama");
  });
});
