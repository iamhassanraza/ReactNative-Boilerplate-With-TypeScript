import { ADD_ATTRIBUTE, ADD_MACHINE, Attribute, DELETE_ATTRIBUTE, DELETE_MACHINE, EDIT_ATTRIBUTE, EDIT_MACHINE, IMachine, IMachineType, MachineActions, } from 'store/types/machineType';
import { EDIT_Machine_Type, ADD_Machine_Type, DELETE_Machine_Type } from 'store/types/machineType';



export class MachineTypeActions {
    public static addMachineType = (machineType: IMachineType): MachineActions => ({
        type: ADD_Machine_Type,
        payload: { machineType },
    });


    public static deleteMachineType = (machineTypeId: string): MachineActions => ({
        type: DELETE_Machine_Type,
        payload: { machineTypeId },
    });


    public static editMachineType = (machineTypeId: string, machineType: Partial<IMachineType>): MachineActions => ({
        type: EDIT_Machine_Type,
        payload: {
            machineTypeId,
            machineType,
        },
    });

    public static addAttribute = (machineTypeId: string, attribute: Attribute): MachineActions => ({
        type: ADD_ATTRIBUTE,
        payload: {
            machineTypeId,
            attribute,
        },
    });

    public static deleteAttribute = (machineTypeId: string, attributeId: string): MachineActions => ({
        type: DELETE_ATTRIBUTE,
        payload: {
            machineTypeId,
            attributeId,
        },
    });

    public static editAttribute = (typeId: string, attributeId: string, attribute: Attribute): MachineActions => {
        return {
            type: EDIT_ATTRIBUTE,
            payload: {
                typeId,
                attributeId,
                attribute
            }
        };
    };

    public static addMachine(machine: IMachine): MachineActions {
        return {
            type: ADD_MACHINE,
            payload: machine,
        };
    }
    
    public static editMachine(id: string, updates: Partial<IMachine>): MachineActions {
        return {
            type: EDIT_MACHINE,
            payload: { id, updates },
        };
    }
    
    public static deleteMachine(id: string): MachineActions {
        return {
            type: DELETE_MACHINE,
            payload: { id },
        };
    }
}