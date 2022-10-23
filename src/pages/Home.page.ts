import { Locator, Page } from "@playwright/test";

import { WebActions } from "../base/WebActions";
let webActions: WebActions;

export default class HomePage {

  readonly page: Page;
  readonly acceptBrowserCookiesBtn = ("id=onetrust-accept-btn-handler");
  readonly locationTxtBox = "id=location-search";
  readonly searchLocationBtn = "//li[@class='ccl-ee4ea4aaab604785']//button";
  

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page)
  }

   async locationSearch(location: string): Promise<void>{
    await webActions.clickElement(this.acceptBrowserCookiesBtn).catch(() => {});
    await webActions.enterElementText(this.locationTxtBox, location);
    await webActions.clickElement(this.searchLocationBtn);
  }
}
