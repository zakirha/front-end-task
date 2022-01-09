export enum ActionType {
    SHOW_VIEW,
    NO_OF_PROJECTS
}

export interface Action {
    type: ActionType,
    payload: any
}

