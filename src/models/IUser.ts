interface roles {
    id: number
    value: string
    description: string
}


export interface IUser {
    email: string
    id: number
    roles: roles[]
    banned: boolean,
    banReason: string | null
}
