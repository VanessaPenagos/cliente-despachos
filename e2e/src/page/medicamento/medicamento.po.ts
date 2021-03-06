import { by, element } from 'protractor';

export class MedicamentoPage {

    //listar medicamentos
    private linkCrearMedicamento = element(by.id('linkCrearMedicamento')); 
    private listarMedicamento = element.all(by.css('.medicamentos')).all(by.css('.itemMedicamento'));

    //Crear medicamento
    private linkAceptarCrearMedicamento = element(by.id('linkAceptarCrearMedicamento'));
    private inputNombreCrearMedicamento = element(by.id('nombreCrearMedicamento'));
    private inputFechaCrearMedicamento = element(by.id('fechaCrearMedicamento'));
    private inputCostoCrearMedicamento = element(by.id('CostoCrearMedicamento'));

    //funciones para listar medicamentos
    async clickLinkCrearMedicamento(){
        await this.linkCrearMedicamento.click();  
    }

    // validaciones
    async contarMedicamento(){
        return await this.listarMedicamento.count();
    }

      //funciones html crear medicamentos
  async ingresarNombreCrearMedicamento(nombre){
    await this.inputNombreCrearMedicamento.sendKeys(nombre);
  }

  async ingresarFechaCrearMedicamento(fecha){
    await this.inputFechaCrearMedicamento.sendKeys(fecha);
  }

  async ingresarCostoCrearMedicamento(costo){
    await this.inputCostoCrearMedicamento.sendKeys(costo);
  }

  async clickLinkAceptarCrearMedicamento(){
    await this.linkAceptarCrearMedicamento.click();  
  }
}
