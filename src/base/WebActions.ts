import { Page, expect } from "@playwright/test";
import { testConfig } from "../../testConfig";

export class WebActions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToURL(url: string) {
    this.page.goto(url);
  }

  async clickElement(locator: string): Promise<void> {
    await this.page.click(locator);
  }

  async enterElementText(locator: string, text: string): Promise<void> {
    await this.page.fill(locator, text);
  }
  async getElementText(locator: string): Promise<string> {
    return await this.page.locator(locator).innerText();;
}
  async verifyElementContainsText(
    locator: string,
    text: string
  ): Promise<void> {
    await expect(this.page.locator(locator)).toContainText(text);
  }

  async verifyElementIsDisplayed(
    locator: string,
  ): Promise<void> {
    await this.page
      .waitForSelector(locator, {
        state: `visible`,
        timeout: testConfig.waitForElement,
      })
  }

  async expectToBeTrue(status: boolean, errorMessage: string): Promise<void> {
    expect(status, `${errorMessage}`).toBe(true);
  }

  async expectToBeValue(
    expectedValue: string,
    actualValue: string,
    errorMessage: string
  ): Promise<void> {
    expect(expectedValue.trim(), `${errorMessage}`).toBe(actualValue);
  }
}
