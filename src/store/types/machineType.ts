
export const ADD_Machine_Type = 'ADD_Machine_Type';
export const EDIT_Machine_Type = 'EDIT_Machine_Type';
export const DELETE_Machine_Type = 'DELETE_Machine_Type';
export const ADD_MACHINE = "ADD_MACHINE";
export const EDIT_MACHINE = "EDIT_MACHINE";
export const DELETE_MACHINE = "DELETE_MACHINE";

export const ADD_ATTRIBUTE = "ADD_ATTRIBUTE";
export const DELETE_ATTRIBUTE = "DELETE_ATTRIBUTE";
export const EDIT_ATTRIBUTE = 'EDIT_ATTRIBUTE';





export interface IMachine {
    id: string;
    typeId: string;
    attributes: Record<string, string | number | boolean | Date>;
}

export interface Attribute {
    id: string;
    label: string;
    type: InputTypes

}


export interface IMachineType {
    id: string;
    categoryName: string;
    titleAttribute: string
    attributes: Attribute[];
}

export interface IMachinesState {
    types: IMachineType[];
    machines: IMachine[];
}



export type InputTypes = "Text" | "Number" | "CheckBox" | "Date"






export interface AddMachineTypeAction {
    type: typeof ADD_Machine_Type;
    payload: {
        machineType: IMachineType;
    };
}

export interface EditMachineTypeAction {
    type: typeof EDIT_Machine_Type;
    payload: {
        machineTypeId: string;
        machineType: Partial<IMachineType>;
    };
}

export interface DeleteMachineTypeAction {
    type: typeof DELETE_Machine_Type;
    payload: {
        machineTypeId: string;
    };
}




interface AddMachineAction {
    type: typeof ADD_MACHINE;
    payload: IMachine;
}

interface EditMachineAction {
    type: typeof EDIT_MACHINE;
    payload: { id: string; updates: Partial<IMachine> };
}

interface DeleteMachineAction {
    type: typeof DELETE_MACHINE;
    payload: { id: string };
}

interface AddAttributeAction {
    type: typeof ADD_ATTRIBUTE;
    payload: {
        machineTypeId: string;
        attribute: Attribute;
    };
}

export interface DeleteAttributeAction {
    type: typeof DELETE_ATTRIBUTE;
    payload: {
        machineTypeId: string;
        attributeId: string;
    };
}

export interface EditAttributeAction {
    type: typeof EDIT_ATTRIBUTE;
    payload: {
        typeId: string;
        attributeId: string;
        attribute: Attribute;
    };
}




export type MachineActions =
    | AddMachineTypeAction
    | EditMachineTypeAction
    | DeleteMachineTypeAction
    | AddMachineAction
    | EditMachineAction
    | DeleteMachineAction
    | AddAttributeAction
    | EditAttributeAction
    | DeleteAttributeAction;