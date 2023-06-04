export interface IUserState {
    isUserPageLoading: boolean,
    userData: IUserData,
}

export interface IUserData {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
}

export interface IUserApiResponse {
    status: number,
    data: IUserData,
}