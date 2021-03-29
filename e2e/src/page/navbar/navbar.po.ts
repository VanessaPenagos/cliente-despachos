import { by, element } from 'protractor';

export class NavbarPage {
    linkMedicamento = element(by.xpath('/html/body/app-root/app-navbar/nav/div/div/ul/div[1]/li/a'));
    linkBuscarDespacho = element(by.id('linkCrearMedicamento'));

    async clickBotonMedicamentos() {
        await this.linkMedicamento.click();
    }

    async clickBotonDespacho(id:String) {
        await (element(by.id('linkBuscarDespacho'+id))).click();
    }
}
