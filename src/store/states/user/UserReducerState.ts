import User from "models/user/User"
import IState from "../IState"

export default interface UserState extends IState {
    user?: User,
}

