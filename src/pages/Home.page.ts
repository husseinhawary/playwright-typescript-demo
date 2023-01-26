import { Page } from "@playwright/test";

import { WebActions } from "../base/WebActions";
let webActions: WebActions;

export default class HomePage {
  readonly page: Page;

  readonly ajaxLink = '//a[@href="/ajax"]';
  readonly shadowDomLink = '//a[@href="/shadowdom"]';
  readonly dynamicIDLink = '//a[@href="/dynamicid"]';

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async openAjaxPage(): Promise<void> {
    await webActions.clickElement(this.ajaxLink);
  }

  async openShadowDomPage(): Promise<void> {
    await webActions.clickElement(this.shadowDomLink);
  }

  async openDynamicIdPage(): Promise<void> {
    await webActions.clickElement(this.dynamicIDLink);
  }
}
