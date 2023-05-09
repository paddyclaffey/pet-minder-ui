
export interface IPetSchedule {
    id: number;
    petId: number;
    category: string;
    description?: string;
    startTime: string;
    frequencyInterval: number;
    active: boolean;
}

export interface IPetScheduleRequest {
    id: number;
    petId: number;
    category: string;
    description?: string;
    startTime: string;
    frequency: {
        hours: number;
        minutes: number;
    };
    active: boolean;
}

export enum SCHEDULE_CATEGORY {
    FEEDING = 'FEEDING',
    MEDICATION = 'MEDICATION',
}
