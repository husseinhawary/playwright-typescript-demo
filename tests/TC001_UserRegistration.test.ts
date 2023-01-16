import test, { expect } from "../src/base/Fixtures";
import { testConfig } from "../testConfig";
import testData from "../src/testData/userData.json"

test.describe("TC001", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testConfig.URL);
  });

  test("User Registration With Valid Data", async ({ homePage, allGames}) => {

    /**
     * #TC001
     * Scenario: User registration with valid data
     * Given the user in signup page
     * And the user selects email address form
     * And the user fills all fields with valid data 
     * When the user clicks on Signup button
     * Then the user should be registered successfully
     * And OTP token should be sent to the user
     */

     await homePage.registerNewUserWithValidData();
     expect(await allGames.getRegistrationConfirmationMsg()).toContain(testData.user.email);
  });
});
