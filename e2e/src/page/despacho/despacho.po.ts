import { by, element } from 'protractor';

export class DespachoPage {

    //listar medicamentos
    //private linkCrearDespacho = element(by.id('linkCrearDespacho')); 
    private listarMedicamento = element.all(by.css('.medicamentos')).all(by.css('.itemMedicamento'));
    linkDespacho = element(by.xpath('/html/body/app-root/table/nav/div/div/ul/div[1]/li/a'));

    //crear despacho
    private linkAceptarCrearDespacho = element(by.id('linkAceptarCrearDespacho'));
    private linkAceptarActualizarDespacho = element(by.id('linkAceptarActualizarMedicamento'));
    private inputNombreCrearDespacho = element(by.id('nombreMedicamentoCrearDespacho'));
    private inputFechaCrearDespacho = element(by.id('fechaMedicamentoCrearDespacho'));
    private inputCostoCrearDespacho = element(by.id('costoMedicamentoCrearDespacho'));
    private inputCantidadCrearDespacho = element(by.id('cantidadCrearDespacho'));
    private inputDireccionDespacho = element(by.id('direccionCrearDespacho'));
    private inputDireccionActualizarDespacho = element(by.id('direccionActualizarDespacho'));

    //funciones para crear un despacho
    //Medicamento
    async clickLinkAceptarCrearMedicamento(){
        await this.linkAceptarCrearDespacho.click();  
    }

    // validaciones
    async contarMedicamento(){
            return await this.listarMedicamento.count();
    }

    //funciones para crear despachos

    async clickLinkCrearDespacho(){
        await (element(by.id('linkCrearDespacho'))).click();
    }
      //funciones html crear medicamentos
    async ingresarNombreCrearDespacho(nombre){
        await this.inputNombreCrearDespacho.sendKeys(nombre);
    }

    async ingresarFechaCrearDespacho(fecha){
        await this.inputFechaCrearDespacho.sendKeys(fecha);
    }

    async ingresarCostoCrearDespacho(costo){
        await this.inputCostoCrearDespacho.sendKeys(costo);
    }

    
    async ingresarCantidadCrearDespacho(cantidad){
        await this.inputCantidadCrearDespacho.sendKeys(cantidad);
    }

    async ingresarDireccionCrearDespacho(direccion){
        await this.inputDireccionDespacho.sendKeys(direccion);
    }

    async clickLinkActualizarDespacho(){
        await this.linkAceptarActualizarDespacho.click();  
    }

    async ingresarDireccionActualizarDespacho(direccion){
        await this.inputDireccionActualizarDespacho.sendKeys(direccion);
    }
}
