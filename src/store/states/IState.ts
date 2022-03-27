export default interface IState {
    state?: iDataState
    errorMessage?: String
}

export enum iDataState {
    initial = 'INITIAL',
    loading = 'LOADING',
    loaded = 'LOADED',
    error = 'ERROR'
}