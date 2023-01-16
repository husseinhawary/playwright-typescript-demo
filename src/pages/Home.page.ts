import { Page } from "@playwright/test";

import { WebActions } from "../base/WebActions";
import testData from "../testData/userData.json";
import RandomString from "../utils/RandomString";
let webActions: WebActions;

export default class HomePage {
  readonly page: Page;

  // Locators
  readonly signUpBtn = '//div[@routerlink="/sign-up/by/phone"]';
  readonly signUpWithEmailForm = "id=mat-tab-link-2";
  readonly emailTxtBox = "id=mat-input-3";
  readonly passwordTxtBox = "id=mat-input-4";
  readonly nameTxtBox = "id=mat-input-5";
  readonly countrySelect = '//div[@class="iti__selected-flag dropdown-toggle"]';
  readonly selectEgypt = "id=iti-0__item-eg";
  readonly phoneTxtBox = "id=phone";
  readonly termsCheckBox = "id=mat-checkbox-2";
  readonly submitBtn = '//button[@type="submit"]';

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async registerNewUserWithValidData(): Promise<void> {
    await webActions.clickElement(this.signUpBtn);
    await webActions.clickElement(this.signUpWithEmailForm);
    await webActions.enterElementText(this.emailTxtBox, RandomString()+testData.user.email);
    await webActions.enterElementText(this.passwordTxtBox, testData.user.password);
    await webActions.enterElementText(this.nameTxtBox, testData.user.name);
    await webActions.clickElement(this.countrySelect);
    await webActions.clickElement(this.selectEgypt);
    await webActions.enterElementText(this.phoneTxtBox, testData.user.phone);
    await webActions.clickElement(this.termsCheckBox);
    await webActions.clickElement(this.submitBtn);
  }
}
