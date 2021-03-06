/* eslint-disable max-classes-per-file, class-methods-use-this, no-use-before-define */
export class Ok<T, E> {
  public constructor(public readonly value: T) {
    this.value = value;
  }

  public isOk(): this is Ok<T, E> {
    return true;
  }

  public isErr(): this is Err<T, E> {
    return false;
  }
}

export class Err<T, E> {
  public constructor(public readonly error: E) {
    this.error = error;
  }

  public isOk(): this is Ok<T, E> {
    return false;
  }

  public isErr(): this is Err<T, E> {
    return true;
  }
}

export type Result<T, E> = Ok<T, E> | Err<T, E>

/**
 * Construct a new Ok result value.
 */
export const ok = <T, E>(value: T): Ok<T, E> => new Ok(value);

/**
 * Construct a new Err result value.
 */
export const err = <T, E>(error: E): Err<T, E> => new Err(error);
