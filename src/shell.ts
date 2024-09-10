import { pintarPacientes, mostrarActivarProtocolo, mostrarIrACasa, pintarEspecialidadPacientes } from './ui';
import {pacientes}from './model';
import {
    obtenPacientesAsignadosAPediatria,
    obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
    activarProtocoloUrgencia,
    reasignaPacientesAMedicoFamilia,
    HayPacientesDePediatria,
    cuentaPacientesPorEspecialidad
} from './motor';

const iniciar = () => {
    pintarPacientes(obtenPacientesAsignadosAPediatria, "pacientes_pediatria");
    pintarPacientes(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios, "pacientes_pediatria_menor10");
    mostrarActivarProtocolo(activarProtocoloUrgencia, "activar_protocolo");
    pintarPacientes(reasignaPacientesAMedicoFamilia(pacientes), "pacientes_cambio_especialidad");
    mostrarIrACasa(HayPacientesDePediatria, "ir_a_casa");
    pintarEspecialidadPacientes(cuentaPacientesPorEspecialidad, "pacientes_especialidad");
};
document.addEventListener("DOMContentLoaded", iniciar);