import { test as baseTest } from "@playwright/test";

import HomePage from "../pages/Home.page";
import AjaxPage from "../pages/Ajax.page";
import DynamicIdPage from "../pages/DynamicID.page";
import ShadowDomPage from "../pages/ShadowDom.page";

const test = baseTest.extend<{
  homePage: HomePage;
  ajaxPage: AjaxPage;
  shadowDomPage: ShadowDomPage;
  dynamicIdPage: DynamicIdPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  ajaxPage: async ({ page }, use) => {
    await use(new AjaxPage(page));
  },

  shadowDomPage: async ({ page }, use) => {
    await use(new ShadowDomPage(page));
  },

  dynamicIdPage: async ({ page }, use) => {
    await use(new DynamicIdPage(page));
  },
});

export default test;
export const expect = test.expect;
