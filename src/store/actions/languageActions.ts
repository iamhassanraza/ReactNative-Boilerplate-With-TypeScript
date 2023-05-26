import { ILanguageAction, LanguageActionTypes } from 'store/types/langaugeTypes';
import { SupportedLanguages } from 'translations';



export class LanguageActions {
    public static switchLanguage = (lang: SupportedLanguages): ILanguageAction => ({
        type: LanguageActionTypes.SWITCH_LANGUAGE,
        payload: { language: lang },
    });
}