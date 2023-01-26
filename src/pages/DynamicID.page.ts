import { Page } from "@playwright/test";

import { WebActions } from "../base/WebActions";
let webActions: WebActions;

export default class DynamicIdPage {
  readonly page: Page;

  //Locators
  readonly pageTitle = '//div[@class="container"]//h3';

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async getPageTitle(): Promise<string> {
    return await webActions.getElementText(this.pageTitle);
  }
}
