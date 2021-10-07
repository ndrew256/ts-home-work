interface Id {
id: number
}

interface Name {
name: string
}

type IdorName<T> = T extends Id ? number : T extends Name ? string : T;