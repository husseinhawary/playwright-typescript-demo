import AllRestaurants from "../pages/AllRestaurants.page";
import HomePage from "../pages/Home.page";
import Restaurant from "../pages/Restaurant.page";

import { test as baseTest } from "@playwright/test";

const test  = baseTest.extend<{
     homePage: HomePage;
   allRestauratsPage: AllRestaurants;
   restaurantPage: Restaurant;
}>({
    homePage: async ({ page }, use) => {
        await use(new HomePage (page))
    },

    allRestauratsPage: async ({ page }, use) => {
        await use(new AllRestaurants (page))
    },

    restaurantPage: async ({ page }, use) => {
        await use(new Restaurant (page))
    },
});

export default test;
export const expect = test.expect;