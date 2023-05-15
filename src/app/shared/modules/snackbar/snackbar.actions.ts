
export class ShowSuccessMessage {
    static readonly type = '[SnackBar] ShowSuccessMessage';
    constructor(public message: string) {}
}


export class ShowWarningMessage {
    static readonly type = '[SnackBar] ShowWarningMessage';
    constructor(public message: string) {}
}


export class ShowErrorMessage {
    static readonly type = '[SnackBar] ShowErrorMessage';
    constructor(public message: string) {}
}

export class DismissSnackBar {
    static readonly type = '[SnackBar] DismissSnackBar';
    constructor() {}
}

