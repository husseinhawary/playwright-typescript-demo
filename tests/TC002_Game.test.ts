import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";
import testData from "../src/testData/userData.json"

test.describe("TC001", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("Open First Game Details Page", async ({ homePage, allGames, gameDetails}) => {

    /**
     * #TC002
     * Scenario: Open game details page for the first page
     * Given the user is registered successfully
     * And the user click on "Games" link
     * When the user clicks on "Discover" button for the first game
     * Then game details page should be opened successfully
     */

     await homePage.registerNewUserWithValidData();
     expect(await allGames.getRegistrationConfirmationMsg()).toContain(testData.user.email);
     await allGames.openGameDetailsPage();
     expect(await gameDetails.getGameDetailsPageURL()).toContain("details");
  });
});
