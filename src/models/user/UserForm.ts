export enum formTypes {
    Input = "text",
    RadioButton = "radio",
    Image = "image",
    DOB = "date"
}

export interface RadioButtonOptions {
    id: number,
    label: string,
    key: string
}

export interface RadioButton extends BaseFormObject {
    type: formTypes.RadioButton,
    options: RadioButtonOptions[]
}

interface BaseFormObject {
    id: number,
    key: string,
    type: string,
    label: string,
    required: boolean,

}

interface Input extends BaseFormObject {
    type: formTypes.Input,
    placeholder: string,
}

interface BirthDate extends BaseFormObject {
    type: formTypes.DOB,
    placeholder: string
}

interface Image extends BaseFormObject {
    type: formTypes.Image
}

export type UserFrom = Array<RadioButton | Input | BirthDate | Image>