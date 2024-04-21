export interface email {
    email: string,
    id: string
}

export interface usertype {
    username: string | null,
    email: string | null,
    password: string | null,
    isVerifyed: boolean | null,
    userid: string | null,
    cash: number | null,
    createdAt: Date | null,
    updatedAt: Date | null
}