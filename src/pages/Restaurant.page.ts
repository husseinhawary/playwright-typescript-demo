import { Locator, Page } from "@playwright/test";

import { WebActions } from "../base/WebActions";

let webActions: WebActions;

export default class Restaurant {
  readonly page: Page;

  // Locators && some locators need to revisit
  readonly restaurantName = "//div[contains(@class,'MenuHeader')]//h1";
  readonly itemsList = "//div[@class='MenuItemCard-a927b3314fc88b17'] >> nth=0";
  readonly addItemToBasketBtn = "//button[@class='ccl-388f3fb1d79d6a36 ccl-6d2d597727bd7bab ccl-59eced23a4d9e077 ccl-7be8185d0a980278'] >> nth=-1";
  readonly goToCheckoutLabel = "//div[@class='Basket-b2356c56643bf0c6']//span[@class='ccl-bc70252bc472695a']";
  readonly decreaseBasketQuantityBtn = "button[class='ccl-4704108cacc54616 ccl-8cbd6e52f5095feb'] >> nth=0";
  readonly emptyBasketLabel = "//p[contains(@class,'ccl-f88600790342ab98')]";

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async getRestaurantName(): Promise<string> {
    return await webActions.getElementText(this.restaurantName);
  }

  async addItemToBasket(): Promise<void> {
    await webActions.clickElement(this.itemsList);
    await webActions.clickElement(this.addItemToBasketBtn);
  }

  async getGoToCheckoutText(): Promise<string> {
    return await webActions.getElementText(this.goToCheckoutLabel);
  }

  async decreaseBasketQuantity(): Promise<void> {
    await webActions.clickElement(this.decreaseBasketQuantityBtn);
  }

  async getEmptyBasketLabel(): Promise<string> {
    return await webActions.getElementText(this.emptyBasketLabel);
  }
}
