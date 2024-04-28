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

export interface SpendingChart {
    date: string,
    amount: number
}

export interface EarningFrom {
    id: string,
    source: string,
    userid: string,
    createdAt: string,
    updatedAt: string
}

export interface SpendOn {
    id: string,
    spendOn: string,
    userid: string,
    createdAt: string,
    updatedAt: string
}

export interface InvestIn {
    id: string,
    company: string,
    userid: string,
    createdAt: string,
    updatedAt: string
}