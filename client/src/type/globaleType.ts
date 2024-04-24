export interface Earnings {
    id: string,
    amount: number,
    source: string,
    userid: string,
    createdAt: string,
    updatedAt: string
}

export interface Spendings {
    id: string,
    amount: number,
    spendOn: string,
    userid: string,
    createdAt: string,
    updatedAt: string
}
export interface Goal {
    id: string,
    amount: number,
    goal: string,
    createdAt: string,
    updatedAt: string
}
export interface Investment {
    id: string,
    goal: string,
    capital: number,
    company: string,
    userid: string,
    createdAt: string,
    updatedAt: string
}