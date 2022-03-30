import CommonModel from "../CommonModel"

export default interface Post extends CommonModel {
    userId: number
    id: number
    title: string
    body: string
}
