import { Optional } from './union'

export interface Dictionary<T = unknown> {
  [key: string]: Optional<T>
}

export type AnyArray<T = unknown> = Array<T>

export type AnyArrayLike<T = unknown> = ArrayLike<T>
