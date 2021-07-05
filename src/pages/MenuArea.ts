import { BasePage } from "./BasePage";

export class MenuArea extends BasePage {

    private menuLocator : string = '.muted-text';
    mapBtn : string = 'Map weergave';
    listBtn : string = 'Lijst weergave';
    bulkBtn : string = 'Bulk toevoegen';


  async mapWeergaveClick() : Promise<void> {
      await this.clickOnElementContainingText(this.menuLocator, this.mapBtn);
  }

  async lijstWeergaveClick() : Promise<void> {
      await this.clickOnElementContainingText(this.menuLocator, this.listBtn);
  }

  async bulkToevoegenClick() : Promise<void> {
    await this.clickOnElementContainingText(this.menuLocator, this.bulkBtn);
}
}
