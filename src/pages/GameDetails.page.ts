import { Page } from "@playwright/test";

import { WebActions } from "../base/WebActions";
let webActions: WebActions;

export default class GameDetails {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async getGameDetailsPageURL(): Promise<string> {
    return await this.page.url();
  }
}
