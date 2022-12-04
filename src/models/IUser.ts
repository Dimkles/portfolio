export interface IRoles {
    id: number
    value: string
    description: string
}


export interface IUser {
    email: string
    id: number
    roles: IRoles[]
    banned: boolean,
    banReason: string | null
}
