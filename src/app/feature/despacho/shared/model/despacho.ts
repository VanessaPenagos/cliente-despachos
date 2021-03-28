import { Medicamento } from "src/app/feature/medicamento/shared/model/medicamento";

export class Despacho {
    id ?: string;
    fechaCreacion?: string;
    medicamento ?: Medicamento;
    cantidad ?: string;
    costoTotal ?: string;
    direccion ?: string;
}