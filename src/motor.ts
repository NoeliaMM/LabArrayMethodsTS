import { Pacientes, NumeroPacientesPorEspecialidad,pacientes } from './model';

export const obtenPacientesAsignadosAPediatria : Pacientes[] = pacientes.filter(paciente=>paciente.especialidad==="Pediatra");

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios : Pacientes[] = pacientes.filter(paciente=>paciente.especialidad === "Pediatra" && paciente.edad < 10);

export const activarProtocoloUrgencia : boolean = pacientes.some(paciente=>paciente.frecuenciaCardiaca >100 && paciente.temperatura >39);

export const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.map(paciente =>
        paciente.especialidad === "Pediatra"
            ? { ...paciente, especialidad: "Medico de familia" }
            : paciente 
    );
};

export const HayPacientesDePediatria : boolean = pacientes.some(paciente=>paciente.especialidad ==="Pediatra");

export const cuentaPacientesPorEspecialidad : NumeroPacientesPorEspecialidad = pacientes.reduce((totalEspecialidad, paciente)=>{
    switch (paciente.especialidad) {
        case "Medico de familia":
            totalEspecialidad.medicoDeFamilia++;
            break;
        case "Pediatra":
            totalEspecialidad.pediatria++;
            break;
        case "Cardiólogo":
            totalEspecialidad.cardiologia++;
            break;
    }
    return totalEspecialidad;

},{

    medicoDeFamilia:0,
    pediatria:0,
    cardiologia:0
}
);

