export class TestBase {
  static screenshotOnFailure = async (testDescription: string) => {
    await page.screenshot({
      path: `../UI/src/screenshots/FailedTest - ${testDescription}.png`,
    });
  };

  static async runAssertion(assertion, onFailure) {
    try {
      await assertion();
    } catch (exception) {
      await onFailure();
      throw exception;
    }
  }

  static async getTestDescription(currentTest: any): Promise<string> {
    return currentTest.description;
  }
}
