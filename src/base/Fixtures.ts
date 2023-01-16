import { test as baseTest } from "@playwright/test";

import HomePage from "../pages/Home.page";
import AllGames from "../pages/AllGames.page";
import GameDetails from "../pages/GameDetails.page";

const test = baseTest.extend<{
  homePage: HomePage;
  allGames: AllGames;
  gameDetails: GameDetails;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  allGames: async ({ page }, use) => {
    await use(new AllGames(page));
  },

  gameDetails: async ({ page }, use) => {
    await use(new GameDetails(page));
  },
});

export default test;
export const expect = test.expect;
