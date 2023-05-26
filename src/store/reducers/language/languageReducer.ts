import { ILanguageAction, LanguageActionTypes } from "store/types/langaugeTypes";
import { SupportedLanguages } from "translations";

export interface LanguageReducerState {
    currentLanguage: SupportedLanguages | null;
}

const initialState: LanguageReducerState = {
    currentLanguage: null,
};

const languageReducer = (state: LanguageReducerState = initialState, action: ILanguageAction): LanguageReducerState => {
    switch (action.type) {
        case LanguageActionTypes.SWITCH_LANGUAGE:
            return {
                currentLanguage: action.payload.language,
            };
        default:
            return state;
    }
};

export default languageReducer;
