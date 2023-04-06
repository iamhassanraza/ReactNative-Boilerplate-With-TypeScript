import {
    IMachinesState, MachineActions, ADD_Machine_Type,
    EDIT_Machine_Type,
    DELETE_Machine_Type,
    ADD_MACHINE,
    EDIT_MACHINE,
    DELETE_MACHINE,
    ADD_ATTRIBUTE,
    DELETE_ATTRIBUTE,
    EDIT_ATTRIBUTE,
    InputTypes
} from "store/types";

const initialState: IMachinesState = {
    types: [],
    machines: [],
};

export default function machinesReducer(state: IMachinesState = initialState, action: MachineActions): IMachinesState {
    switch (action.type) {
        case ADD_Machine_Type:
            return {
                ...state,
                types: [...state.types, action.payload.machineType]
            };
        case EDIT_Machine_Type:
            return {
                ...state,
                types: state.types.map((type) =>
                    type.id === action.payload.machineTypeId
                        ? {
                            ...type,
                            categoryName: action.payload.machineType.categoryName || '',
                            titleAttribute: action.payload.machineType.titleAttribute || type.titleAttribute,
                            attributes: action.payload.machineType.attributes || type.attributes
                        }
                        : type
                ),
            };
        case DELETE_Machine_Type:
            return {
                ...state,
                types: state.types.filter((type) => type.id !== action.payload.machineTypeId),
            };
        case ADD_ATTRIBUTE:
            return {
                ...state,
                types: state.types.map((type) => {
                    if (type.id === action.payload.machineTypeId) {
                        return {
                            ...type,
                            attributes: [...type.attributes, action.payload.attribute],
                        };
                    }
                    return type;
                }),
            };
        case DELETE_ATTRIBUTE:
            return {
                ...state,
                types: state.types.map((type) => {
                    if (type.id === action.payload.machineTypeId) {
                        return {
                            ...type,
                            attributes: type.attributes.filter(
                                (attr) => attr.id !== action.payload.attributeId
                            ),
                        };
                    }
                    return type;
                }),
            };
        case EDIT_ATTRIBUTE:
            return {
                ...state,
                types: state.types.map((type) => {
                    if (type.id === action.payload.typeId) {
                        return {
                            ...type,
                            attributes: type.attributes.map((attr) => {
                                if (attr.id === action.payload.attributeId) {
                                    return {
                                        ...attr,
                                        ...action.payload.attribute
                                    }
                                }
                                return attr;
                            })
                        }
                    }
                    return type;
                }),
                machines: state.machines.map((machine) => {
                    if (machine.typeId === action.payload.typeId) {
                        machine.attributes = { ...machine.attributes, [action.payload.attributeId]: getDefaultValue(action.payload.attribute.type) }
                    }
                    return machine
                })
            };
        case ADD_MACHINE:
            return {
                ...state,
                machines: [...state.machines, action.payload],
            };
        case EDIT_MACHINE:
            return {
                ...state,
                machines: state.machines.map((machine) =>
                    machine.id === action.payload.id
                        ? { ...machine, ...action.payload.updates }
                        : machine
                ),
            };
        case DELETE_MACHINE:
            return {
                ...state,
                machines: state.machines.filter((machine) => machine.id !== action.payload.id),
            };
        default:
            return state;
    }
}

const getDefaultValue = (type: InputTypes) => {
    switch (type) {
        case "CheckBox":
            return false

        case "Date":
            return new Date()

        case "Number":
            return 0

        case "Text":
            return ''

        default:
            return ''
    }
}