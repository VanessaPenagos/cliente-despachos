import { AppPage } from "../app.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { MedicamentoPage } from "../page/medicamento/medicamento.po";

describe('workspace-project Medicamento', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let medicamento: MedicamentoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        medicamento = new MedicamentoPage();
    });

    it('D Listar medicamentos', () => {
        page.navigateTo();
        navBar.clickBotonMedicamentos();
    
        expect(4).toBe(medicamento.contarMedicamento());
      });

      it('E Crear Medicamento', () => {
        const nombre = "Ibuprofeno";
        const costo = "300";
        const fechaVencimiento = "2021-05-19 00:00:00";
    
        page.navigateTo();
        navBar.clickBotonMedicamentos();
        medicamento.clickLinkCrearMedicamento();
        medicamento.ingresarNombreCrearMedicamento(nombre);
        medicamento.ingresarFechaCrearMedicamento(fechaVencimiento);
        medicamento.ingresarCostoCrearMedicamento(costo);
        medicamento.clickLinkAceptarCrearMedicamento();
        page.navigateTo();
        navBar.clickBotonMedicamentos();
    
        expect(5).toBe(medicamento.contarMedicamento());
      });

});    