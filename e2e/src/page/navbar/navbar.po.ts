import { by, element } from 'protractor';

export class NavbarPage {
    linkMedicamento = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/div[1]/li/a'));
    linkBuscarDespacho = element(by.id('linkBuscarDespacho'));
    private inputIdBuscarDespacho = element(by.id('inputIdBuscarDespacho'));

    async clickBotonMedicamentos() {
        await this.linkMedicamento.click();
    }

    async clickBotonDespacho() {
        await this.linkBuscarDespacho.click();
    }

    async ingresarIdBuscarDespacho(id){
        await this.inputIdBuscarDespacho.sendKeys(id);
      }
}
