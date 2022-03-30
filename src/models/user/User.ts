import CommonModel from "../CommonModel"

export default interface User extends CommonModel {
    email: string
    name: string
    gender: string
    birthday: string | Date
    profile_pic: string
}

