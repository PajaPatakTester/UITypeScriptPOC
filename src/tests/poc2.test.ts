import { MainPage } from "../pages/MainPage";
import { MenuArea } from "../pages/MenuArea";
import { TabArea } from "../pages/TabArea";
import { TestBase } from "./TestBase";

var mainPage: MainPage = new MainPage();
var menuArea: MenuArea = new MenuArea();
var tabs: TabArea = new TabArea();

// beforeAll(() => {
//   jest.setTimeout(35000);
// });

describe("POC tests on POC page", () => {
  let tc01 = it("should open application and click on Map and List links", async () => {
    await mainPage.openApp();
    await mainPage.takeScreenshot("MainPageShot");
    await menuArea.mapWeergaveClick();
    await mainPage.takeScreenshot("MapShot");
    await menuArea.lijstWeergaveClick();
    await mainPage.takeScreenshot("ListShot");
    await menuArea.bulkToevoegenClick();
  });

  let tc02 = it("should click on tabs 1, 2 and 3 and provide pictures as a proof", async () => {
    await mainPage.openApp();
    await menuArea.mapWeergaveClick();
    await tabs.tab1Click();
    await mainPage.takeScreenshot("Tab1Shot");
    await tabs.tab2Click();
    await mainPage.takeScreenshot("Tab2Shot");
    await tabs.tab3Click();
    await mainPage.takeScreenshot("Tab3Shot");
  });

  let tc03: any = it("should verify text on Tab 1", async () => {
    await mainPage.openApp();
    await menuArea.mapWeergaveClick();
    let result = await tabs.verifyTextInTab("Test");

    await TestBase.runAssertion(
      async () => {
        expect(await tabs.verifyTextInTab("Test")).toBe(true);
      },
      async () => {
        await TestBase.screenshotOnFailure(tc03.description);
      }
    );
  });

  let tc04: any = it("should fail asserting the text on Tab 1", async () => {
    await mainPage.openApp();
    await menuArea.mapWeergaveClick();
    await TestBase.runAssertion(
      async () => {
        expect(await tabs.verifyTextInTab("Wrong Text")).toBe(true);
      },
      async () => {
        await TestBase.screenshotOnFailure(tc04.description);
      }
    );
  });

  let tc05: any = it("should verify title on google home page", async () => {
    await mainPage.goToGoogle();
    await mainPage.insertText(".gLFyf.gsfi", "branko sikirica");
    await mainPage.takeScreenshot("branko");
    await TestBase.runAssertion(
      async () => {
        expect(await mainPage.verifyOnGooglePage()).toBe(true);
      },
      async () => {
        await TestBase.screenshotOnFailure(tc05.description);
      }
    );
  });

  let tc06: any = it("should select Monday", async () => {
    await mainPage.goToSelectorWebsite();
    await mainPage.selectDropdownOnDemoSite("Monday");

    await mainPage.takeScreenshot("Monday");
  });
});
