export default interface IBasePage {

  // Actions
  goTo(urlExtension: string): Promise<void>;
  clickOnButton(cssLocator: string): Promise<void>;
  clickOnElementContainingText(cssLocator: string, txt: string): Promise<void>;
  insertText(cssLocator: string, textToInsert: string): Promise<void>;
  selectDropdown(cssLocator: string, selectValue : string);

  // Validations
  verifyOnPage(pageTitle : string): Promise<boolean>;
  verifyText(cssLocator: string, textToVerify: string): Promise<boolean>;

  // ScreenShot
  takeScreenshot(pageObjectModel: string): Promise<void>;
}
