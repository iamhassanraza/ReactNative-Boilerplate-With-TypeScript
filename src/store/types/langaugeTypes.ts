import { SupportedLanguages } from "translations";

export enum LanguageActionTypes {
    SWITCH_LANGUAGE = 'SWITCH_LANGUAGE',
}

export interface ISwitchLanguageAction {
    type: LanguageActionTypes.SWITCH_LANGUAGE;
    payload: {
        language: SupportedLanguages;
    };
}

export type ILanguageAction = ISwitchLanguageAction;