import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";

test.describe("TC001", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("Opening Restaurant Page", async ({homePage, allRestauratsPage, restaurantPage}) => {
    /**
     * #TC004
     * Scenario: Go to restaurant page
     * Given the user in restaurants list page
     * And the user enters a restaurant name already exists (I.E “Wagamama”)
     * When the user clicks on the restaurant name from result list
     * Then restaurant page should be opened
     */
    await homePage.locationSearch(testConfig.location);
    expect(await allRestauratsPage.getDeliveringToMsg()).toContain("Delivering to");
    await allRestauratsPage.getFirstResturant(testConfig.restaurantName);
    expect(await restaurantPage.getRestaurantName()).toContain("Wagamama");
  });
});
