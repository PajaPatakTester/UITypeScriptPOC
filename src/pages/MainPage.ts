import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  private urlExtension = "https://floroxroosendaalacc.z6.web.core.windows.net/";

  public async openApp(): Promise<void> {
    await this.goTo(this.urlExtension);
  }


  // ToDo: delete since developed only for practice testing methods
  public async goToGoogle(): Promise<void> {
    await this.goTo("https://www.google.com");
  }

  public async goToSelectorWebsite() : Promise<void> {
    await this.goTo("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html");
  }

  public async verifyOnGooglePage(): Promise<boolean> {
    return await this.verifyOnPage("Google");
  }

  public async selectDropdownOnDemoSite(valueToSelect : string) : Promise<void> {
    await this.selectDropdown("#select-demo", valueToSelect);
  }
}
