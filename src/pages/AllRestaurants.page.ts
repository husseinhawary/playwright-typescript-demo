import { Page } from "@playwright/test";
import { WebActions } from "../base/WebActions";

let webActions: WebActions;

export default class AllRestaurants {
  readonly page: Page;

  // Locators && some locators need to revisit
  readonly deliveringToMessage = "//div[@class='HomeSummary-1b36ea64056bc6b2']//h3";
  readonly acceptOfferBtn = "//button[@class='ccl-388f3fb1d79d6a36 ccl-6d2d597727bd7bab ccl-59eced23a4d9e077 ccl-7be8185d0a980278']";
  readonly restSearchTxtBox = 'input[name="search"] >> nth=0';
  readonly restSearchList = 'a[class="HomeSuggestionRow-a076e6c92509b9fa"] >> nth=0';

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async getDeliveringToMsg(): Promise<string> {
    return await webActions.getElementText(this.deliveringToMessage);
  }

  async acceptOffer(): Promise<void> {
    try {
      await webActions.verifyElementIsDisplayed(this.acceptOfferBtn);
      await webActions.clickElement(this.acceptOfferBtn);
    } catch (error) {}
  }

  async getFirstResturant(restaurantName: string): Promise<void> {
    await this.acceptOffer();
    await webActions.enterElementText(this.restSearchTxtBox, restaurantName);
    await webActions.clickElement(this.restSearchList);
  }
}
