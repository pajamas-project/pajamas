export type Optional<T> = T | undefined

export type Nullable<T> = Optional<T | null>

export type Many<T> = T | T[]
