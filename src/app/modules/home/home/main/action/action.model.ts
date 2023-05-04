
export interface Action {
  title: MainActions;
  url: string;
  action: string;

  visible?: boolean;
  disable?: boolean;
}

export enum MainActions {
  VIEW_PETS = 'View Pets',
  CREATE_PETS = 'Create Pets',
}