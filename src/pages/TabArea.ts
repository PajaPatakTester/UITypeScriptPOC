import { BasePage } from "./BasePage";

export class TabArea extends BasePage {
  private tab1: string = "#uncontrolled-tab-example-tab-tab1";
  private tab2: string = "#uncontrolled-tab-example-tab-tab2";
  private tab3: string = "#uncontrolled-tab-example-tab-tab3";
  private tabContent: string = ".tab-content";

  async tab1Click(): Promise<void> {
    await page.waitForSelector(this.tab1, { timeout: 2000 });
    await this.clickOnButton(this.tab1);
  }

  async tab2Click(): Promise<void> {
    await this.clickOnButton(this.tab2);
  }

  async tab3Click(): Promise<void> {
    await this.clickOnButton(this.tab3);
  }

  async verifyTextInTab(expectedText: string) : Promise<boolean> {
   return await this.verifyText(this.tabContent, expectedText);
  }
}
