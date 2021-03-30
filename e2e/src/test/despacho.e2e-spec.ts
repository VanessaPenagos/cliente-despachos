import { AppPage } from "../app.po";
import { NavbarPage } from "../page/navbar/navbar.po";
//import { MedicamentoPage } from "../page/medicamento/medicamento.po";
import { DespachoPage } from "../page/despacho/despacho.po";

describe('workspace-project Despacho', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    //let medicamento: MedicamentoPage;
    let despacho: DespachoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        //medicamento = new MedicamentoPage();
        despacho = new DespachoPage();
    });

    it('A Crear Despacho', () => {
        const nombre = "Vitamina D";
        const costo = "15000";
        const fechaVencimiento = "2021-05-19 00:00:00";
        const cantidad  = "1";
        const direccion = "direccion prueba e2e";
    
        page.navigateTo();
        navBar.clickBotonMedicamentos();
        page.navigateTo();
        despacho.clickLinkCrearDespacho();
        despacho.ingresarNombreCrearDespacho(nombre);
        despacho.ingresarFechaCrearDespacho(fechaVencimiento);
        despacho.ingresarCostoCrearDespacho(costo);
        despacho.ingresarCantidadCrearDespacho(cantidad);
        despacho.ingresarDireccionCrearDespacho(direccion);
        despacho.clickLinkAceptarCrearMedicamento();
        page.navigateTo();
        navBar.clickBotonMedicamentos();
      });

      
      
    it('B Buscar Despacho', () => {

        const id = "2";
        
        page.navigateTo();
        navBar.ingresarIdBuscarDespacho(id);
        navBar.clickBotonDespacho();
      });


      it('C Actualizar Despacho', () => {

        const id = "2";
        const direccion = "direccion actualizada prueba e2e";
        
        page.navigateTo();
        navBar.ingresarIdBuscarDespacho(id);
        navBar.clickBotonDespacho();
        despacho.ingresarDireccionActualizarDespacho(direccion);
        despacho.clickLinkActualizarDespacho();
      });

});