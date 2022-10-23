import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";

test.describe("TC002", () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("Add One Item to Basket", async ({homePage, allRestauratsPage, restaurantPage}) => {

     /**
     * #TC008
     * Scenario: Create basket as a guest user
     * Given the user in restaurant page as a guest
     * When the user clicks on item from items list
     * And the item doesn’t require any extras
     * And the user clicks on “add item to basket”
     * Then the basket should be created for the guest user
     */
    
    await homePage.locationSearch(testConfig.location);
    await allRestauratsPage.getFirstResturant(testConfig.restaurantName);
    await restaurantPage.addItemToBasket();
    expect(await restaurantPage.getGoToCheckoutText()).toContain(
      "Go to checkout"
    );
  });

  test("Clear the basket when it contains single item && quantity = 1", async ({homePage, allRestauratsPage, restaurantPage}) => {

    /**
     * #TC009
     * Scenario: Clear basket with (1 item && quantity = 1) as a guest user
     * Given the user in restaurant page as a guest
     * And the basket already created before with (1 item && quantity = 1)
     * When the user clicks on decrease quantity button
     * Then the basket should be cleared for the guest user
     */
    
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
