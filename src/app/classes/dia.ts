import { DiaALimento } from "../interface/diaAlimento";
import { DiaAtividade } from "../interface/diaAtividade";
import { Status } from "../interface/status";

export class Dia {

    id!: number;	
	dia!: Date;	
	valorGasto!: number;	
	whey!: Status;	
	creatina!: Status;		
	alimentos!: DiaALimento[];
    atividades!: DiaAtividade[];
}