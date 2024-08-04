import { Atividade } from "../classes/atividade";
import { Horario } from "./horario";

export interface DiaAtividade {

    idAtividade: Atividade;
    idHorarioInicio: Horario;
    idHorarioFim: Horario;

}