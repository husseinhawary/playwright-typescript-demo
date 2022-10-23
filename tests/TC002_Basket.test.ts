import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";

test.describe("TC002", () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("Add One Item to Basket", async ({homePage, allRestauratsPage, restaurantPage}) => {
    
    await homePage.locationSearch(testConfig.location);
    await allRestauratsPage.getFirstResturant(testConfig.restaurantName);
    await restaurantPage.addItemToBasket();
    expect(await restaurantPage.getGoToCheckoutText()).toContain(
      "Go to checkout"
    );
  });

  test("Clear the basket when it contains 1 item && 1 quantity", async ({homePage, allRestauratsPage, restaurantPage}) => {
    
    await homePage.locationSearch("UK-LON-R7, Handyside Street, London, UK");
    await allRestauratsPage.getFirstResturant("Wagamama");
    await restaurantPage.addItemToBasket();
    expect(await restaurantPage.getGoToCheckoutText()).toContain(
      "Go to checkout"
    );
    await restaurantPage.decreaseBasketQuantity();
    expect(await restaurantPage.getEmptyBasketLabel()).toContain("Your basket is empty");
  });
});
