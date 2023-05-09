import { IPetSchedule } from "./scheduel/schedule.model";

export interface IPet {
    id: number;
    name: string;
    breed: string;
    type: string;
    dob: Date;
    colour: string;
    size: string;
    
    schedules: IPetSchedule;
}