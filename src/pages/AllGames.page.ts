import { Page } from "@playwright/test";
import { WebActions } from "../base/WebActions";

let webActions: WebActions;

export default class AllGames {
  readonly page: Page;

  // Locators && some locators need to be revisited
  readonly gamesLink = '//app-header//div[@routerlink="/games"]';
  readonly openGameDetailsBtn =
    '//button[@routerlink="/games/details"] >> nth=0';
  readonly confirmRegistrationMsg =
    '//div[@class="mt-3 text-base subtitle-color ng-star-inserted"]';

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async getRegistrationConfirmationMsg(): Promise<string> {
    return await webActions.getElementText(this.confirmRegistrationMsg);
  }

  async openGameDetailsPage(): Promise<void> {
    await webActions.clickElement(this.gamesLink);
    await webActions.clickElement(this.openGameDetailsBtn);
  }
}
