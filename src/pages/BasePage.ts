import IBasePage from "../interfaces/IBasePage";

export class BasePage implements IBasePage {
  async takeScreenshot(description: string): Promise<void> {
    await page.screenshot({
      path: `../UI/src/screenshots/${description}.png`,
    });
  }

  async goTo(urlExtension: string): Promise<void> {
    await page.goto(urlExtension, { waitUntil: "networkidle0" });
  }

  async clickOnButton(cssLocator: string): Promise<void> {
    await page.click(cssLocator);
  }

  async clickOnElementContainingText(
    cssSelector: string,
    txt: string
  ): Promise<void> {
    page.waitForSelector(cssSelector, { timeout: 1000 });
    var listOfElements = await page.$$(cssSelector);
    if (listOfElements.length === 0) {
      console.log(`Check selector: ${cssSelector}! Didn't find any element.`);
      return;
    }

    // loop to find element containing text
    for (let eleme of listOfElements) {
      let elemeText = await eleme.evaluate((el) => el.textContent);

      // console.log("Element text is: " + elemeText + ' and should be: ' + txt);

      if (elemeText === txt) {
        //  console.log("Element text that should be clicked is: " + elemeText );

        await eleme.click();
        return;
      }
    }
    console.log(
      `Check text: ${txt}! Didn't find that element among ${listOfElements.length} elements that are fetched using selector: ${cssSelector}`
    );
  }

  async verifyText(
    cssSelector: string,
    textToVerify: string
  ): Promise<boolean> {
    await page.waitFor(cssSelector, { timeout: 1000 });
    let element = await page.$(cssSelector);
    let fetchedText = await page.evaluate(
      (element) => element.innerText,
      element
    );
    //let a = fetchedText === text;
    return fetchedText === textToVerify;
  }

  async insertText(cssSelector: string, textToInput: string): Promise<void> {
    let element = await page.$(cssSelector);

    await element.type(textToInput);
  }

  async hitEnter(cssSelector: string): Promise<void> {
    let element = await page.$(cssSelector);
    await element.press('Enter');
  }

  async verifyOnPage(pageTitle: string): Promise<boolean> {
    return (await page.title()) === pageTitle;
  }

  async selectDropdown(cssSelector: string, selectValue: string): Promise<void> {
    await page.select(cssSelector, selectValue);
  }
}
