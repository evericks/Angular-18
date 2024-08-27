export interface Student {
    id: string,
    name: string,
    age: number,
    email: string,
    phone: string
}

export interface StudentCreate {
    name: string,
    age: number,
    email: string,
    phone: string
}

export interface StudentUpdate {
    name: string,
    age: number,
    phone: string
}