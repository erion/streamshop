interface IGenere {
    name: string
}

export interface IMovie {
    id: number,
    title: string,
    image: string,
    genres: IGenere[]
}


interface ISession {
    price: number,
    time: string
}

interface IRoomType {
    name: string
}

export interface IRoom {
    name: string,
    types: IRoomType[],
    sessions: ISession[]
}

export interface IEvent {
    id: number,
    eventId: number,
    name: string,
    address: string,
    addressComplement: string,
    rooms: IRoom[]
}