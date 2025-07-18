
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Nissan
 * 
 */
export type Nissan = $Result.DefaultSelection<Prisma.$NissanPayload>
/**
 * Model Gm
 * 
 */
export type Gm = $Result.DefaultSelection<Prisma.$GmPayload>
/**
 * Model Ford
 * 
 */
export type Ford = $Result.DefaultSelection<Prisma.$FordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Type: {
  FORD: 'FORD',
  GM: 'GM',
  NISSAN: 'NISSAN'
};

export type Type = (typeof Type)[keyof typeof Type]

}

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nissan`: Exposes CRUD operations for the **Nissan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nissans
    * const nissans = await prisma.nissan.findMany()
    * ```
    */
  get nissan(): Prisma.NissanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gm`: Exposes CRUD operations for the **Gm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gms
    * const gms = await prisma.gm.findMany()
    * ```
    */
  get gm(): Prisma.GmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ford`: Exposes CRUD operations for the **Ford** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fords
    * const fords = await prisma.ford.findMany()
    * ```
    */
  get ford(): Prisma.FordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Token: 'Token',
    Nissan: 'Nissan',
    Gm: 'Gm',
    Ford: 'Ford'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "token" | "nissan" | "gm" | "ford"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Nissan: {
        payload: Prisma.$NissanPayload<ExtArgs>
        fields: Prisma.NissanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NissanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NissanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>
          }
          findFirst: {
            args: Prisma.NissanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NissanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>
          }
          findMany: {
            args: Prisma.NissanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>[]
          }
          create: {
            args: Prisma.NissanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>
          }
          createMany: {
            args: Prisma.NissanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NissanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>[]
          }
          delete: {
            args: Prisma.NissanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>
          }
          update: {
            args: Prisma.NissanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>
          }
          deleteMany: {
            args: Prisma.NissanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NissanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NissanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>[]
          }
          upsert: {
            args: Prisma.NissanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NissanPayload>
          }
          aggregate: {
            args: Prisma.NissanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNissan>
          }
          groupBy: {
            args: Prisma.NissanGroupByArgs<ExtArgs>
            result: $Utils.Optional<NissanGroupByOutputType>[]
          }
          count: {
            args: Prisma.NissanCountArgs<ExtArgs>
            result: $Utils.Optional<NissanCountAggregateOutputType> | number
          }
        }
      }
      Gm: {
        payload: Prisma.$GmPayload<ExtArgs>
        fields: Prisma.GmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>
          }
          findFirst: {
            args: Prisma.GmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>
          }
          findMany: {
            args: Prisma.GmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>[]
          }
          create: {
            args: Prisma.GmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>
          }
          createMany: {
            args: Prisma.GmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>[]
          }
          delete: {
            args: Prisma.GmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>
          }
          update: {
            args: Prisma.GmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>
          }
          deleteMany: {
            args: Prisma.GmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>[]
          }
          upsert: {
            args: Prisma.GmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GmPayload>
          }
          aggregate: {
            args: Prisma.GmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGm>
          }
          groupBy: {
            args: Prisma.GmGroupByArgs<ExtArgs>
            result: $Utils.Optional<GmGroupByOutputType>[]
          }
          count: {
            args: Prisma.GmCountArgs<ExtArgs>
            result: $Utils.Optional<GmCountAggregateOutputType> | number
          }
        }
      }
      Ford: {
        payload: Prisma.$FordPayload<ExtArgs>
        fields: Prisma.FordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>
          }
          findFirst: {
            args: Prisma.FordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>
          }
          findMany: {
            args: Prisma.FordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>[]
          }
          create: {
            args: Prisma.FordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>
          }
          createMany: {
            args: Prisma.FordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>[]
          }
          delete: {
            args: Prisma.FordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>
          }
          update: {
            args: Prisma.FordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>
          }
          deleteMany: {
            args: Prisma.FordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>[]
          }
          upsert: {
            args: Prisma.FordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FordPayload>
          }
          aggregate: {
            args: Prisma.FordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFord>
          }
          groupBy: {
            args: Prisma.FordGroupByArgs<ExtArgs>
            result: $Utils.Optional<FordGroupByOutputType>[]
          }
          count: {
            args: Prisma.FordCountArgs<ExtArgs>
            result: $Utils.Optional<FordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    token?: TokenOmit
    nissan?: NissanOmit
    gm?: GmOmit
    ford?: FordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    nissanToken: number
    gmToken: number
    fordToken: number
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nissanToken?: boolean | UserCountOutputTypeCountNissanTokenArgs
    gmToken?: boolean | UserCountOutputTypeCountGmTokenArgs
    fordToken?: boolean | UserCountOutputTypeCountFordTokenArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNissanTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NissanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGmTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GmWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFordTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    shopifyId: number | null
    nissanCount: number | null
    gmCount: number | null
    fordCount: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    shopifyId: number | null
    nissanCount: number | null
    gmCount: number | null
    fordCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    shopifyId: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    company: string | null
    software: boolean | null
    nissanCount: number | null
    gmCount: number | null
    fordCount: number | null
    passthrough: string | null
    fordName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    shopifyId: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    company: string | null
    software: boolean | null
    nissanCount: number | null
    gmCount: number | null
    fordCount: number | null
    passthrough: string | null
    fordName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    shopifyId: number
    firstname: number
    lastname: number
    email: number
    phone: number
    company: number
    software: number
    nissanCount: number
    gmCount: number
    fordCount: number
    passthrough: number
    fordName: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    shopifyId?: true
    nissanCount?: true
    gmCount?: true
    fordCount?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    shopifyId?: true
    nissanCount?: true
    gmCount?: true
    fordCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    shopifyId?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    company?: true
    software?: true
    nissanCount?: true
    gmCount?: true
    fordCount?: true
    passthrough?: true
    fordName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    shopifyId?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    company?: true
    software?: true
    nissanCount?: true
    gmCount?: true
    fordCount?: true
    passthrough?: true
    fordName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    shopifyId?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    company?: true
    software?: true
    nissanCount?: true
    gmCount?: true
    fordCount?: true
    passthrough?: true
    fordName?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company: string | null
    software: boolean
    nissanCount: number
    gmCount: number
    fordCount: number
    passthrough: string | null
    fordName: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyId?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    software?: boolean
    nissanCount?: boolean
    gmCount?: boolean
    fordCount?: boolean
    passthrough?: boolean
    fordName?: boolean
    nissanToken?: boolean | User$nissanTokenArgs<ExtArgs>
    gmToken?: boolean | User$gmTokenArgs<ExtArgs>
    fordToken?: boolean | User$fordTokenArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyId?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    software?: boolean
    nissanCount?: boolean
    gmCount?: boolean
    fordCount?: boolean
    passthrough?: boolean
    fordName?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyId?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    software?: boolean
    nissanCount?: boolean
    gmCount?: boolean
    fordCount?: boolean
    passthrough?: boolean
    fordName?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    shopifyId?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    software?: boolean
    nissanCount?: boolean
    gmCount?: boolean
    fordCount?: boolean
    passthrough?: boolean
    fordName?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopifyId" | "firstname" | "lastname" | "email" | "phone" | "company" | "software" | "nissanCount" | "gmCount" | "fordCount" | "passthrough" | "fordName", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nissanToken?: boolean | User$nissanTokenArgs<ExtArgs>
    gmToken?: boolean | User$gmTokenArgs<ExtArgs>
    fordToken?: boolean | User$fordTokenArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      nissanToken: Prisma.$NissanPayload<ExtArgs>[]
      gmToken: Prisma.$GmPayload<ExtArgs>[]
      fordToken: Prisma.$FordPayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopifyId: number
      firstname: string
      lastname: string
      email: string
      phone: string
      company: string | null
      software: boolean
      nissanCount: number
      gmCount: number
      fordCount: number
      passthrough: string | null
      fordName: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nissanToken<T extends User$nissanTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$nissanTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gmToken<T extends User$gmTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$gmTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fordToken<T extends User$fordTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$fordTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly shopifyId: FieldRef<"User", 'Int'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly company: FieldRef<"User", 'String'>
    readonly software: FieldRef<"User", 'Boolean'>
    readonly nissanCount: FieldRef<"User", 'Int'>
    readonly gmCount: FieldRef<"User", 'Int'>
    readonly fordCount: FieldRef<"User", 'Int'>
    readonly passthrough: FieldRef<"User", 'String'>
    readonly fordName: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.nissanToken
   */
  export type User$nissanTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    where?: NissanWhereInput
    orderBy?: NissanOrderByWithRelationInput | NissanOrderByWithRelationInput[]
    cursor?: NissanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NissanScalarFieldEnum | NissanScalarFieldEnum[]
  }

  /**
   * User.gmToken
   */
  export type User$gmTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    where?: GmWhereInput
    orderBy?: GmOrderByWithRelationInput | GmOrderByWithRelationInput[]
    cursor?: GmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GmScalarFieldEnum | GmScalarFieldEnum[]
  }

  /**
   * User.fordToken
   */
  export type User$fordTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    where?: FordWhereInput
    orderBy?: FordOrderByWithRelationInput | FordOrderByWithRelationInput[]
    cursor?: FordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FordScalarFieldEnum | FordScalarFieldEnum[]
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    ownerId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    ownerId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    purchasedAt: Date | null
    ownerId: number | null
    type: $Enums.Type | null
    valid: boolean | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    purchasedAt: Date | null
    ownerId: number | null
    type: $Enums.Type | null
    valid: boolean | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    orderNumber: number
    purchasedAt: number
    ownerId: number
    type: number
    valid: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    orderNumber?: true
    ownerId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    orderNumber?: true
    ownerId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
    type?: true
    valid?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
    type?: true
    valid?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
    type?: true
    valid?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    orderNumber: number
    purchasedAt: Date
    ownerId: number
    type: $Enums.Type
    valid: boolean
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    type?: boolean
    valid?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    type?: boolean
    valid?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    type?: boolean
    valid?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    type?: boolean
    valid?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "purchasedAt" | "ownerId" | "type" | "valid", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderNumber: number
      purchasedAt: Date
      ownerId: number
      type: $Enums.Type
      valid: boolean
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly orderNumber: FieldRef<"Token", 'Int'>
    readonly purchasedAt: FieldRef<"Token", 'DateTime'>
    readonly ownerId: FieldRef<"Token", 'Int'>
    readonly type: FieldRef<"Token", 'Type'>
    readonly valid: FieldRef<"Token", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model Nissan
   */

  export type AggregateNissan = {
    _count: NissanCountAggregateOutputType | null
    _avg: NissanAvgAggregateOutputType | null
    _sum: NissanSumAggregateOutputType | null
    _min: NissanMinAggregateOutputType | null
    _max: NissanMaxAggregateOutputType | null
  }

  export type NissanAvgAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    ownerId: number | null
  }

  export type NissanSumAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    ownerId: number | null
  }

  export type NissanMinAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    purchasedAt: Date | null
    ownerId: number | null
  }

  export type NissanMaxAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    purchasedAt: Date | null
    ownerId: number | null
  }

  export type NissanCountAggregateOutputType = {
    id: number
    orderNumber: number
    purchasedAt: number
    ownerId: number
    _all: number
  }


  export type NissanAvgAggregateInputType = {
    id?: true
    orderNumber?: true
    ownerId?: true
  }

  export type NissanSumAggregateInputType = {
    id?: true
    orderNumber?: true
    ownerId?: true
  }

  export type NissanMinAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
  }

  export type NissanMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
  }

  export type NissanCountAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
    _all?: true
  }

  export type NissanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nissan to aggregate.
     */
    where?: NissanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nissans to fetch.
     */
    orderBy?: NissanOrderByWithRelationInput | NissanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NissanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nissans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nissans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nissans
    **/
    _count?: true | NissanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NissanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NissanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NissanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NissanMaxAggregateInputType
  }

  export type GetNissanAggregateType<T extends NissanAggregateArgs> = {
        [P in keyof T & keyof AggregateNissan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNissan[P]>
      : GetScalarType<T[P], AggregateNissan[P]>
  }




  export type NissanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NissanWhereInput
    orderBy?: NissanOrderByWithAggregationInput | NissanOrderByWithAggregationInput[]
    by: NissanScalarFieldEnum[] | NissanScalarFieldEnum
    having?: NissanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NissanCountAggregateInputType | true
    _avg?: NissanAvgAggregateInputType
    _sum?: NissanSumAggregateInputType
    _min?: NissanMinAggregateInputType
    _max?: NissanMaxAggregateInputType
  }

  export type NissanGroupByOutputType = {
    id: number
    orderNumber: number
    purchasedAt: Date
    ownerId: number
    _count: NissanCountAggregateOutputType | null
    _avg: NissanAvgAggregateOutputType | null
    _sum: NissanSumAggregateOutputType | null
    _min: NissanMinAggregateOutputType | null
    _max: NissanMaxAggregateOutputType | null
  }

  type GetNissanGroupByPayload<T extends NissanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NissanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NissanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NissanGroupByOutputType[P]>
            : GetScalarType<T[P], NissanGroupByOutputType[P]>
        }
      >
    >


  export type NissanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nissan"]>

  export type NissanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nissan"]>

  export type NissanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nissan"]>

  export type NissanSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
  }

  export type NissanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "purchasedAt" | "ownerId", ExtArgs["result"]["nissan"]>
  export type NissanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NissanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NissanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NissanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nissan"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderNumber: number
      purchasedAt: Date
      ownerId: number
    }, ExtArgs["result"]["nissan"]>
    composites: {}
  }

  type NissanGetPayload<S extends boolean | null | undefined | NissanDefaultArgs> = $Result.GetResult<Prisma.$NissanPayload, S>

  type NissanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NissanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NissanCountAggregateInputType | true
    }

  export interface NissanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nissan'], meta: { name: 'Nissan' } }
    /**
     * Find zero or one Nissan that matches the filter.
     * @param {NissanFindUniqueArgs} args - Arguments to find a Nissan
     * @example
     * // Get one Nissan
     * const nissan = await prisma.nissan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NissanFindUniqueArgs>(args: SelectSubset<T, NissanFindUniqueArgs<ExtArgs>>): Prisma__NissanClient<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nissan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NissanFindUniqueOrThrowArgs} args - Arguments to find a Nissan
     * @example
     * // Get one Nissan
     * const nissan = await prisma.nissan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NissanFindUniqueOrThrowArgs>(args: SelectSubset<T, NissanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NissanClient<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nissan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NissanFindFirstArgs} args - Arguments to find a Nissan
     * @example
     * // Get one Nissan
     * const nissan = await prisma.nissan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NissanFindFirstArgs>(args?: SelectSubset<T, NissanFindFirstArgs<ExtArgs>>): Prisma__NissanClient<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nissan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NissanFindFirstOrThrowArgs} args - Arguments to find a Nissan
     * @example
     * // Get one Nissan
     * const nissan = await prisma.nissan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NissanFindFirstOrThrowArgs>(args?: SelectSubset<T, NissanFindFirstOrThrowArgs<ExtArgs>>): Prisma__NissanClient<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nissans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NissanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nissans
     * const nissans = await prisma.nissan.findMany()
     * 
     * // Get first 10 Nissans
     * const nissans = await prisma.nissan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nissanWithIdOnly = await prisma.nissan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NissanFindManyArgs>(args?: SelectSubset<T, NissanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nissan.
     * @param {NissanCreateArgs} args - Arguments to create a Nissan.
     * @example
     * // Create one Nissan
     * const Nissan = await prisma.nissan.create({
     *   data: {
     *     // ... data to create a Nissan
     *   }
     * })
     * 
     */
    create<T extends NissanCreateArgs>(args: SelectSubset<T, NissanCreateArgs<ExtArgs>>): Prisma__NissanClient<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nissans.
     * @param {NissanCreateManyArgs} args - Arguments to create many Nissans.
     * @example
     * // Create many Nissans
     * const nissan = await prisma.nissan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NissanCreateManyArgs>(args?: SelectSubset<T, NissanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nissans and returns the data saved in the database.
     * @param {NissanCreateManyAndReturnArgs} args - Arguments to create many Nissans.
     * @example
     * // Create many Nissans
     * const nissan = await prisma.nissan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nissans and only return the `id`
     * const nissanWithIdOnly = await prisma.nissan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NissanCreateManyAndReturnArgs>(args?: SelectSubset<T, NissanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nissan.
     * @param {NissanDeleteArgs} args - Arguments to delete one Nissan.
     * @example
     * // Delete one Nissan
     * const Nissan = await prisma.nissan.delete({
     *   where: {
     *     // ... filter to delete one Nissan
     *   }
     * })
     * 
     */
    delete<T extends NissanDeleteArgs>(args: SelectSubset<T, NissanDeleteArgs<ExtArgs>>): Prisma__NissanClient<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nissan.
     * @param {NissanUpdateArgs} args - Arguments to update one Nissan.
     * @example
     * // Update one Nissan
     * const nissan = await prisma.nissan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NissanUpdateArgs>(args: SelectSubset<T, NissanUpdateArgs<ExtArgs>>): Prisma__NissanClient<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nissans.
     * @param {NissanDeleteManyArgs} args - Arguments to filter Nissans to delete.
     * @example
     * // Delete a few Nissans
     * const { count } = await prisma.nissan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NissanDeleteManyArgs>(args?: SelectSubset<T, NissanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nissans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NissanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nissans
     * const nissan = await prisma.nissan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NissanUpdateManyArgs>(args: SelectSubset<T, NissanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nissans and returns the data updated in the database.
     * @param {NissanUpdateManyAndReturnArgs} args - Arguments to update many Nissans.
     * @example
     * // Update many Nissans
     * const nissan = await prisma.nissan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nissans and only return the `id`
     * const nissanWithIdOnly = await prisma.nissan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NissanUpdateManyAndReturnArgs>(args: SelectSubset<T, NissanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nissan.
     * @param {NissanUpsertArgs} args - Arguments to update or create a Nissan.
     * @example
     * // Update or create a Nissan
     * const nissan = await prisma.nissan.upsert({
     *   create: {
     *     // ... data to create a Nissan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nissan we want to update
     *   }
     * })
     */
    upsert<T extends NissanUpsertArgs>(args: SelectSubset<T, NissanUpsertArgs<ExtArgs>>): Prisma__NissanClient<$Result.GetResult<Prisma.$NissanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nissans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NissanCountArgs} args - Arguments to filter Nissans to count.
     * @example
     * // Count the number of Nissans
     * const count = await prisma.nissan.count({
     *   where: {
     *     // ... the filter for the Nissans we want to count
     *   }
     * })
    **/
    count<T extends NissanCountArgs>(
      args?: Subset<T, NissanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NissanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nissan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NissanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NissanAggregateArgs>(args: Subset<T, NissanAggregateArgs>): Prisma.PrismaPromise<GetNissanAggregateType<T>>

    /**
     * Group by Nissan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NissanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NissanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NissanGroupByArgs['orderBy'] }
        : { orderBy?: NissanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NissanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNissanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nissan model
   */
  readonly fields: NissanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nissan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NissanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nissan model
   */
  interface NissanFieldRefs {
    readonly id: FieldRef<"Nissan", 'Int'>
    readonly orderNumber: FieldRef<"Nissan", 'Int'>
    readonly purchasedAt: FieldRef<"Nissan", 'DateTime'>
    readonly ownerId: FieldRef<"Nissan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Nissan findUnique
   */
  export type NissanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * Filter, which Nissan to fetch.
     */
    where: NissanWhereUniqueInput
  }

  /**
   * Nissan findUniqueOrThrow
   */
  export type NissanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * Filter, which Nissan to fetch.
     */
    where: NissanWhereUniqueInput
  }

  /**
   * Nissan findFirst
   */
  export type NissanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * Filter, which Nissan to fetch.
     */
    where?: NissanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nissans to fetch.
     */
    orderBy?: NissanOrderByWithRelationInput | NissanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nissans.
     */
    cursor?: NissanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nissans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nissans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nissans.
     */
    distinct?: NissanScalarFieldEnum | NissanScalarFieldEnum[]
  }

  /**
   * Nissan findFirstOrThrow
   */
  export type NissanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * Filter, which Nissan to fetch.
     */
    where?: NissanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nissans to fetch.
     */
    orderBy?: NissanOrderByWithRelationInput | NissanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nissans.
     */
    cursor?: NissanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nissans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nissans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nissans.
     */
    distinct?: NissanScalarFieldEnum | NissanScalarFieldEnum[]
  }

  /**
   * Nissan findMany
   */
  export type NissanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * Filter, which Nissans to fetch.
     */
    where?: NissanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nissans to fetch.
     */
    orderBy?: NissanOrderByWithRelationInput | NissanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nissans.
     */
    cursor?: NissanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nissans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nissans.
     */
    skip?: number
    distinct?: NissanScalarFieldEnum | NissanScalarFieldEnum[]
  }

  /**
   * Nissan create
   */
  export type NissanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * The data needed to create a Nissan.
     */
    data: XOR<NissanCreateInput, NissanUncheckedCreateInput>
  }

  /**
   * Nissan createMany
   */
  export type NissanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nissans.
     */
    data: NissanCreateManyInput | NissanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nissan createManyAndReturn
   */
  export type NissanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * The data used to create many Nissans.
     */
    data: NissanCreateManyInput | NissanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nissan update
   */
  export type NissanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * The data needed to update a Nissan.
     */
    data: XOR<NissanUpdateInput, NissanUncheckedUpdateInput>
    /**
     * Choose, which Nissan to update.
     */
    where: NissanWhereUniqueInput
  }

  /**
   * Nissan updateMany
   */
  export type NissanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nissans.
     */
    data: XOR<NissanUpdateManyMutationInput, NissanUncheckedUpdateManyInput>
    /**
     * Filter which Nissans to update
     */
    where?: NissanWhereInput
    /**
     * Limit how many Nissans to update.
     */
    limit?: number
  }

  /**
   * Nissan updateManyAndReturn
   */
  export type NissanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * The data used to update Nissans.
     */
    data: XOR<NissanUpdateManyMutationInput, NissanUncheckedUpdateManyInput>
    /**
     * Filter which Nissans to update
     */
    where?: NissanWhereInput
    /**
     * Limit how many Nissans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nissan upsert
   */
  export type NissanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * The filter to search for the Nissan to update in case it exists.
     */
    where: NissanWhereUniqueInput
    /**
     * In case the Nissan found by the `where` argument doesn't exist, create a new Nissan with this data.
     */
    create: XOR<NissanCreateInput, NissanUncheckedCreateInput>
    /**
     * In case the Nissan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NissanUpdateInput, NissanUncheckedUpdateInput>
  }

  /**
   * Nissan delete
   */
  export type NissanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
    /**
     * Filter which Nissan to delete.
     */
    where: NissanWhereUniqueInput
  }

  /**
   * Nissan deleteMany
   */
  export type NissanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nissans to delete
     */
    where?: NissanWhereInput
    /**
     * Limit how many Nissans to delete.
     */
    limit?: number
  }

  /**
   * Nissan without action
   */
  export type NissanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nissan
     */
    select?: NissanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nissan
     */
    omit?: NissanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NissanInclude<ExtArgs> | null
  }


  /**
   * Model Gm
   */

  export type AggregateGm = {
    _count: GmCountAggregateOutputType | null
    _avg: GmAvgAggregateOutputType | null
    _sum: GmSumAggregateOutputType | null
    _min: GmMinAggregateOutputType | null
    _max: GmMaxAggregateOutputType | null
  }

  export type GmAvgAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    ownerId: number | null
  }

  export type GmSumAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    ownerId: number | null
  }

  export type GmMinAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    purchasedAt: Date | null
    ownerId: number | null
  }

  export type GmMaxAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    purchasedAt: Date | null
    ownerId: number | null
  }

  export type GmCountAggregateOutputType = {
    id: number
    orderNumber: number
    purchasedAt: number
    ownerId: number
    _all: number
  }


  export type GmAvgAggregateInputType = {
    id?: true
    orderNumber?: true
    ownerId?: true
  }

  export type GmSumAggregateInputType = {
    id?: true
    orderNumber?: true
    ownerId?: true
  }

  export type GmMinAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
  }

  export type GmMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
  }

  export type GmCountAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
    _all?: true
  }

  export type GmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gm to aggregate.
     */
    where?: GmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gms to fetch.
     */
    orderBy?: GmOrderByWithRelationInput | GmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gms
    **/
    _count?: true | GmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GmMaxAggregateInputType
  }

  export type GetGmAggregateType<T extends GmAggregateArgs> = {
        [P in keyof T & keyof AggregateGm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGm[P]>
      : GetScalarType<T[P], AggregateGm[P]>
  }




  export type GmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GmWhereInput
    orderBy?: GmOrderByWithAggregationInput | GmOrderByWithAggregationInput[]
    by: GmScalarFieldEnum[] | GmScalarFieldEnum
    having?: GmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GmCountAggregateInputType | true
    _avg?: GmAvgAggregateInputType
    _sum?: GmSumAggregateInputType
    _min?: GmMinAggregateInputType
    _max?: GmMaxAggregateInputType
  }

  export type GmGroupByOutputType = {
    id: number
    orderNumber: number
    purchasedAt: Date
    ownerId: number
    _count: GmCountAggregateOutputType | null
    _avg: GmAvgAggregateOutputType | null
    _sum: GmSumAggregateOutputType | null
    _min: GmMinAggregateOutputType | null
    _max: GmMaxAggregateOutputType | null
  }

  type GetGmGroupByPayload<T extends GmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GmGroupByOutputType[P]>
            : GetScalarType<T[P], GmGroupByOutputType[P]>
        }
      >
    >


  export type GmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gm"]>

  export type GmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gm"]>

  export type GmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gm"]>

  export type GmSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
  }

  export type GmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "purchasedAt" | "ownerId", ExtArgs["result"]["gm"]>
  export type GmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gm"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderNumber: number
      purchasedAt: Date
      ownerId: number
    }, ExtArgs["result"]["gm"]>
    composites: {}
  }

  type GmGetPayload<S extends boolean | null | undefined | GmDefaultArgs> = $Result.GetResult<Prisma.$GmPayload, S>

  type GmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GmCountAggregateInputType | true
    }

  export interface GmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gm'], meta: { name: 'Gm' } }
    /**
     * Find zero or one Gm that matches the filter.
     * @param {GmFindUniqueArgs} args - Arguments to find a Gm
     * @example
     * // Get one Gm
     * const gm = await prisma.gm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GmFindUniqueArgs>(args: SelectSubset<T, GmFindUniqueArgs<ExtArgs>>): Prisma__GmClient<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GmFindUniqueOrThrowArgs} args - Arguments to find a Gm
     * @example
     * // Get one Gm
     * const gm = await prisma.gm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GmFindUniqueOrThrowArgs>(args: SelectSubset<T, GmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GmClient<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmFindFirstArgs} args - Arguments to find a Gm
     * @example
     * // Get one Gm
     * const gm = await prisma.gm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GmFindFirstArgs>(args?: SelectSubset<T, GmFindFirstArgs<ExtArgs>>): Prisma__GmClient<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmFindFirstOrThrowArgs} args - Arguments to find a Gm
     * @example
     * // Get one Gm
     * const gm = await prisma.gm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GmFindFirstOrThrowArgs>(args?: SelectSubset<T, GmFindFirstOrThrowArgs<ExtArgs>>): Prisma__GmClient<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gms
     * const gms = await prisma.gm.findMany()
     * 
     * // Get first 10 Gms
     * const gms = await prisma.gm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gmWithIdOnly = await prisma.gm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GmFindManyArgs>(args?: SelectSubset<T, GmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gm.
     * @param {GmCreateArgs} args - Arguments to create a Gm.
     * @example
     * // Create one Gm
     * const Gm = await prisma.gm.create({
     *   data: {
     *     // ... data to create a Gm
     *   }
     * })
     * 
     */
    create<T extends GmCreateArgs>(args: SelectSubset<T, GmCreateArgs<ExtArgs>>): Prisma__GmClient<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gms.
     * @param {GmCreateManyArgs} args - Arguments to create many Gms.
     * @example
     * // Create many Gms
     * const gm = await prisma.gm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GmCreateManyArgs>(args?: SelectSubset<T, GmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gms and returns the data saved in the database.
     * @param {GmCreateManyAndReturnArgs} args - Arguments to create many Gms.
     * @example
     * // Create many Gms
     * const gm = await prisma.gm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gms and only return the `id`
     * const gmWithIdOnly = await prisma.gm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GmCreateManyAndReturnArgs>(args?: SelectSubset<T, GmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gm.
     * @param {GmDeleteArgs} args - Arguments to delete one Gm.
     * @example
     * // Delete one Gm
     * const Gm = await prisma.gm.delete({
     *   where: {
     *     // ... filter to delete one Gm
     *   }
     * })
     * 
     */
    delete<T extends GmDeleteArgs>(args: SelectSubset<T, GmDeleteArgs<ExtArgs>>): Prisma__GmClient<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gm.
     * @param {GmUpdateArgs} args - Arguments to update one Gm.
     * @example
     * // Update one Gm
     * const gm = await prisma.gm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GmUpdateArgs>(args: SelectSubset<T, GmUpdateArgs<ExtArgs>>): Prisma__GmClient<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gms.
     * @param {GmDeleteManyArgs} args - Arguments to filter Gms to delete.
     * @example
     * // Delete a few Gms
     * const { count } = await prisma.gm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GmDeleteManyArgs>(args?: SelectSubset<T, GmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gms
     * const gm = await prisma.gm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GmUpdateManyArgs>(args: SelectSubset<T, GmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gms and returns the data updated in the database.
     * @param {GmUpdateManyAndReturnArgs} args - Arguments to update many Gms.
     * @example
     * // Update many Gms
     * const gm = await prisma.gm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gms and only return the `id`
     * const gmWithIdOnly = await prisma.gm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GmUpdateManyAndReturnArgs>(args: SelectSubset<T, GmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gm.
     * @param {GmUpsertArgs} args - Arguments to update or create a Gm.
     * @example
     * // Update or create a Gm
     * const gm = await prisma.gm.upsert({
     *   create: {
     *     // ... data to create a Gm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gm we want to update
     *   }
     * })
     */
    upsert<T extends GmUpsertArgs>(args: SelectSubset<T, GmUpsertArgs<ExtArgs>>): Prisma__GmClient<$Result.GetResult<Prisma.$GmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmCountArgs} args - Arguments to filter Gms to count.
     * @example
     * // Count the number of Gms
     * const count = await prisma.gm.count({
     *   where: {
     *     // ... the filter for the Gms we want to count
     *   }
     * })
    **/
    count<T extends GmCountArgs>(
      args?: Subset<T, GmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GmAggregateArgs>(args: Subset<T, GmAggregateArgs>): Prisma.PrismaPromise<GetGmAggregateType<T>>

    /**
     * Group by Gm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GmGroupByArgs['orderBy'] }
        : { orderBy?: GmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gm model
   */
  readonly fields: GmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gm model
   */
  interface GmFieldRefs {
    readonly id: FieldRef<"Gm", 'Int'>
    readonly orderNumber: FieldRef<"Gm", 'Int'>
    readonly purchasedAt: FieldRef<"Gm", 'DateTime'>
    readonly ownerId: FieldRef<"Gm", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Gm findUnique
   */
  export type GmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * Filter, which Gm to fetch.
     */
    where: GmWhereUniqueInput
  }

  /**
   * Gm findUniqueOrThrow
   */
  export type GmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * Filter, which Gm to fetch.
     */
    where: GmWhereUniqueInput
  }

  /**
   * Gm findFirst
   */
  export type GmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * Filter, which Gm to fetch.
     */
    where?: GmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gms to fetch.
     */
    orderBy?: GmOrderByWithRelationInput | GmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gms.
     */
    cursor?: GmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gms.
     */
    distinct?: GmScalarFieldEnum | GmScalarFieldEnum[]
  }

  /**
   * Gm findFirstOrThrow
   */
  export type GmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * Filter, which Gm to fetch.
     */
    where?: GmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gms to fetch.
     */
    orderBy?: GmOrderByWithRelationInput | GmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gms.
     */
    cursor?: GmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gms.
     */
    distinct?: GmScalarFieldEnum | GmScalarFieldEnum[]
  }

  /**
   * Gm findMany
   */
  export type GmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * Filter, which Gms to fetch.
     */
    where?: GmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gms to fetch.
     */
    orderBy?: GmOrderByWithRelationInput | GmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gms.
     */
    cursor?: GmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gms.
     */
    skip?: number
    distinct?: GmScalarFieldEnum | GmScalarFieldEnum[]
  }

  /**
   * Gm create
   */
  export type GmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * The data needed to create a Gm.
     */
    data: XOR<GmCreateInput, GmUncheckedCreateInput>
  }

  /**
   * Gm createMany
   */
  export type GmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gms.
     */
    data: GmCreateManyInput | GmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gm createManyAndReturn
   */
  export type GmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * The data used to create many Gms.
     */
    data: GmCreateManyInput | GmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gm update
   */
  export type GmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * The data needed to update a Gm.
     */
    data: XOR<GmUpdateInput, GmUncheckedUpdateInput>
    /**
     * Choose, which Gm to update.
     */
    where: GmWhereUniqueInput
  }

  /**
   * Gm updateMany
   */
  export type GmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gms.
     */
    data: XOR<GmUpdateManyMutationInput, GmUncheckedUpdateManyInput>
    /**
     * Filter which Gms to update
     */
    where?: GmWhereInput
    /**
     * Limit how many Gms to update.
     */
    limit?: number
  }

  /**
   * Gm updateManyAndReturn
   */
  export type GmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * The data used to update Gms.
     */
    data: XOR<GmUpdateManyMutationInput, GmUncheckedUpdateManyInput>
    /**
     * Filter which Gms to update
     */
    where?: GmWhereInput
    /**
     * Limit how many Gms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gm upsert
   */
  export type GmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * The filter to search for the Gm to update in case it exists.
     */
    where: GmWhereUniqueInput
    /**
     * In case the Gm found by the `where` argument doesn't exist, create a new Gm with this data.
     */
    create: XOR<GmCreateInput, GmUncheckedCreateInput>
    /**
     * In case the Gm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GmUpdateInput, GmUncheckedUpdateInput>
  }

  /**
   * Gm delete
   */
  export type GmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
    /**
     * Filter which Gm to delete.
     */
    where: GmWhereUniqueInput
  }

  /**
   * Gm deleteMany
   */
  export type GmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gms to delete
     */
    where?: GmWhereInput
    /**
     * Limit how many Gms to delete.
     */
    limit?: number
  }

  /**
   * Gm without action
   */
  export type GmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gm
     */
    select?: GmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gm
     */
    omit?: GmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GmInclude<ExtArgs> | null
  }


  /**
   * Model Ford
   */

  export type AggregateFord = {
    _count: FordCountAggregateOutputType | null
    _avg: FordAvgAggregateOutputType | null
    _sum: FordSumAggregateOutputType | null
    _min: FordMinAggregateOutputType | null
    _max: FordMaxAggregateOutputType | null
  }

  export type FordAvgAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    ownerId: number | null
  }

  export type FordSumAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    ownerId: number | null
  }

  export type FordMinAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    purchasedAt: Date | null
    ownerId: number | null
  }

  export type FordMaxAggregateOutputType = {
    id: number | null
    orderNumber: number | null
    purchasedAt: Date | null
    ownerId: number | null
  }

  export type FordCountAggregateOutputType = {
    id: number
    orderNumber: number
    purchasedAt: number
    ownerId: number
    _all: number
  }


  export type FordAvgAggregateInputType = {
    id?: true
    orderNumber?: true
    ownerId?: true
  }

  export type FordSumAggregateInputType = {
    id?: true
    orderNumber?: true
    ownerId?: true
  }

  export type FordMinAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
  }

  export type FordMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
  }

  export type FordCountAggregateInputType = {
    id?: true
    orderNumber?: true
    purchasedAt?: true
    ownerId?: true
    _all?: true
  }

  export type FordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ford to aggregate.
     */
    where?: FordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fords to fetch.
     */
    orderBy?: FordOrderByWithRelationInput | FordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fords
    **/
    _count?: true | FordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FordMaxAggregateInputType
  }

  export type GetFordAggregateType<T extends FordAggregateArgs> = {
        [P in keyof T & keyof AggregateFord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFord[P]>
      : GetScalarType<T[P], AggregateFord[P]>
  }




  export type FordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FordWhereInput
    orderBy?: FordOrderByWithAggregationInput | FordOrderByWithAggregationInput[]
    by: FordScalarFieldEnum[] | FordScalarFieldEnum
    having?: FordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FordCountAggregateInputType | true
    _avg?: FordAvgAggregateInputType
    _sum?: FordSumAggregateInputType
    _min?: FordMinAggregateInputType
    _max?: FordMaxAggregateInputType
  }

  export type FordGroupByOutputType = {
    id: number
    orderNumber: number
    purchasedAt: Date
    ownerId: number
    _count: FordCountAggregateOutputType | null
    _avg: FordAvgAggregateOutputType | null
    _sum: FordSumAggregateOutputType | null
    _min: FordMinAggregateOutputType | null
    _max: FordMaxAggregateOutputType | null
  }

  type GetFordGroupByPayload<T extends FordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FordGroupByOutputType[P]>
            : GetScalarType<T[P], FordGroupByOutputType[P]>
        }
      >
    >


  export type FordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ford"]>

  export type FordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ford"]>

  export type FordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ford"]>

  export type FordSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    purchasedAt?: boolean
    ownerId?: boolean
  }

  export type FordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "purchasedAt" | "ownerId", ExtArgs["result"]["ford"]>
  export type FordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ford"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderNumber: number
      purchasedAt: Date
      ownerId: number
    }, ExtArgs["result"]["ford"]>
    composites: {}
  }

  type FordGetPayload<S extends boolean | null | undefined | FordDefaultArgs> = $Result.GetResult<Prisma.$FordPayload, S>

  type FordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FordCountAggregateInputType | true
    }

  export interface FordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ford'], meta: { name: 'Ford' } }
    /**
     * Find zero or one Ford that matches the filter.
     * @param {FordFindUniqueArgs} args - Arguments to find a Ford
     * @example
     * // Get one Ford
     * const ford = await prisma.ford.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FordFindUniqueArgs>(args: SelectSubset<T, FordFindUniqueArgs<ExtArgs>>): Prisma__FordClient<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ford that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FordFindUniqueOrThrowArgs} args - Arguments to find a Ford
     * @example
     * // Get one Ford
     * const ford = await prisma.ford.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FordFindUniqueOrThrowArgs>(args: SelectSubset<T, FordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FordClient<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ford that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FordFindFirstArgs} args - Arguments to find a Ford
     * @example
     * // Get one Ford
     * const ford = await prisma.ford.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FordFindFirstArgs>(args?: SelectSubset<T, FordFindFirstArgs<ExtArgs>>): Prisma__FordClient<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ford that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FordFindFirstOrThrowArgs} args - Arguments to find a Ford
     * @example
     * // Get one Ford
     * const ford = await prisma.ford.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FordFindFirstOrThrowArgs>(args?: SelectSubset<T, FordFindFirstOrThrowArgs<ExtArgs>>): Prisma__FordClient<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fords
     * const fords = await prisma.ford.findMany()
     * 
     * // Get first 10 Fords
     * const fords = await prisma.ford.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fordWithIdOnly = await prisma.ford.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FordFindManyArgs>(args?: SelectSubset<T, FordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ford.
     * @param {FordCreateArgs} args - Arguments to create a Ford.
     * @example
     * // Create one Ford
     * const Ford = await prisma.ford.create({
     *   data: {
     *     // ... data to create a Ford
     *   }
     * })
     * 
     */
    create<T extends FordCreateArgs>(args: SelectSubset<T, FordCreateArgs<ExtArgs>>): Prisma__FordClient<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fords.
     * @param {FordCreateManyArgs} args - Arguments to create many Fords.
     * @example
     * // Create many Fords
     * const ford = await prisma.ford.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FordCreateManyArgs>(args?: SelectSubset<T, FordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fords and returns the data saved in the database.
     * @param {FordCreateManyAndReturnArgs} args - Arguments to create many Fords.
     * @example
     * // Create many Fords
     * const ford = await prisma.ford.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fords and only return the `id`
     * const fordWithIdOnly = await prisma.ford.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FordCreateManyAndReturnArgs>(args?: SelectSubset<T, FordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ford.
     * @param {FordDeleteArgs} args - Arguments to delete one Ford.
     * @example
     * // Delete one Ford
     * const Ford = await prisma.ford.delete({
     *   where: {
     *     // ... filter to delete one Ford
     *   }
     * })
     * 
     */
    delete<T extends FordDeleteArgs>(args: SelectSubset<T, FordDeleteArgs<ExtArgs>>): Prisma__FordClient<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ford.
     * @param {FordUpdateArgs} args - Arguments to update one Ford.
     * @example
     * // Update one Ford
     * const ford = await prisma.ford.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FordUpdateArgs>(args: SelectSubset<T, FordUpdateArgs<ExtArgs>>): Prisma__FordClient<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fords.
     * @param {FordDeleteManyArgs} args - Arguments to filter Fords to delete.
     * @example
     * // Delete a few Fords
     * const { count } = await prisma.ford.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FordDeleteManyArgs>(args?: SelectSubset<T, FordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fords
     * const ford = await prisma.ford.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FordUpdateManyArgs>(args: SelectSubset<T, FordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fords and returns the data updated in the database.
     * @param {FordUpdateManyAndReturnArgs} args - Arguments to update many Fords.
     * @example
     * // Update many Fords
     * const ford = await prisma.ford.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fords and only return the `id`
     * const fordWithIdOnly = await prisma.ford.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FordUpdateManyAndReturnArgs>(args: SelectSubset<T, FordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ford.
     * @param {FordUpsertArgs} args - Arguments to update or create a Ford.
     * @example
     * // Update or create a Ford
     * const ford = await prisma.ford.upsert({
     *   create: {
     *     // ... data to create a Ford
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ford we want to update
     *   }
     * })
     */
    upsert<T extends FordUpsertArgs>(args: SelectSubset<T, FordUpsertArgs<ExtArgs>>): Prisma__FordClient<$Result.GetResult<Prisma.$FordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FordCountArgs} args - Arguments to filter Fords to count.
     * @example
     * // Count the number of Fords
     * const count = await prisma.ford.count({
     *   where: {
     *     // ... the filter for the Fords we want to count
     *   }
     * })
    **/
    count<T extends FordCountArgs>(
      args?: Subset<T, FordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ford.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FordAggregateArgs>(args: Subset<T, FordAggregateArgs>): Prisma.PrismaPromise<GetFordAggregateType<T>>

    /**
     * Group by Ford.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FordGroupByArgs['orderBy'] }
        : { orderBy?: FordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ford model
   */
  readonly fields: FordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ford.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ford model
   */
  interface FordFieldRefs {
    readonly id: FieldRef<"Ford", 'Int'>
    readonly orderNumber: FieldRef<"Ford", 'Int'>
    readonly purchasedAt: FieldRef<"Ford", 'DateTime'>
    readonly ownerId: FieldRef<"Ford", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ford findUnique
   */
  export type FordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * Filter, which Ford to fetch.
     */
    where: FordWhereUniqueInput
  }

  /**
   * Ford findUniqueOrThrow
   */
  export type FordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * Filter, which Ford to fetch.
     */
    where: FordWhereUniqueInput
  }

  /**
   * Ford findFirst
   */
  export type FordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * Filter, which Ford to fetch.
     */
    where?: FordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fords to fetch.
     */
    orderBy?: FordOrderByWithRelationInput | FordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fords.
     */
    cursor?: FordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fords.
     */
    distinct?: FordScalarFieldEnum | FordScalarFieldEnum[]
  }

  /**
   * Ford findFirstOrThrow
   */
  export type FordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * Filter, which Ford to fetch.
     */
    where?: FordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fords to fetch.
     */
    orderBy?: FordOrderByWithRelationInput | FordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fords.
     */
    cursor?: FordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fords.
     */
    distinct?: FordScalarFieldEnum | FordScalarFieldEnum[]
  }

  /**
   * Ford findMany
   */
  export type FordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * Filter, which Fords to fetch.
     */
    where?: FordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fords to fetch.
     */
    orderBy?: FordOrderByWithRelationInput | FordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fords.
     */
    cursor?: FordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fords.
     */
    skip?: number
    distinct?: FordScalarFieldEnum | FordScalarFieldEnum[]
  }

  /**
   * Ford create
   */
  export type FordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * The data needed to create a Ford.
     */
    data: XOR<FordCreateInput, FordUncheckedCreateInput>
  }

  /**
   * Ford createMany
   */
  export type FordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fords.
     */
    data: FordCreateManyInput | FordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ford createManyAndReturn
   */
  export type FordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * The data used to create many Fords.
     */
    data: FordCreateManyInput | FordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ford update
   */
  export type FordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * The data needed to update a Ford.
     */
    data: XOR<FordUpdateInput, FordUncheckedUpdateInput>
    /**
     * Choose, which Ford to update.
     */
    where: FordWhereUniqueInput
  }

  /**
   * Ford updateMany
   */
  export type FordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fords.
     */
    data: XOR<FordUpdateManyMutationInput, FordUncheckedUpdateManyInput>
    /**
     * Filter which Fords to update
     */
    where?: FordWhereInput
    /**
     * Limit how many Fords to update.
     */
    limit?: number
  }

  /**
   * Ford updateManyAndReturn
   */
  export type FordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * The data used to update Fords.
     */
    data: XOR<FordUpdateManyMutationInput, FordUncheckedUpdateManyInput>
    /**
     * Filter which Fords to update
     */
    where?: FordWhereInput
    /**
     * Limit how many Fords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ford upsert
   */
  export type FordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * The filter to search for the Ford to update in case it exists.
     */
    where: FordWhereUniqueInput
    /**
     * In case the Ford found by the `where` argument doesn't exist, create a new Ford with this data.
     */
    create: XOR<FordCreateInput, FordUncheckedCreateInput>
    /**
     * In case the Ford was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FordUpdateInput, FordUncheckedUpdateInput>
  }

  /**
   * Ford delete
   */
  export type FordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
    /**
     * Filter which Ford to delete.
     */
    where: FordWhereUniqueInput
  }

  /**
   * Ford deleteMany
   */
  export type FordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fords to delete
     */
    where?: FordWhereInput
    /**
     * Limit how many Fords to delete.
     */
    limit?: number
  }

  /**
   * Ford without action
   */
  export type FordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ford
     */
    select?: FordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ford
     */
    omit?: FordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    shopifyId: 'shopifyId',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    company: 'company',
    software: 'software',
    nissanCount: 'nissanCount',
    gmCount: 'gmCount',
    fordCount: 'fordCount',
    passthrough: 'passthrough',
    fordName: 'fordName'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    purchasedAt: 'purchasedAt',
    ownerId: 'ownerId',
    type: 'type',
    valid: 'valid'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const NissanScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    purchasedAt: 'purchasedAt',
    ownerId: 'ownerId'
  };

  export type NissanScalarFieldEnum = (typeof NissanScalarFieldEnum)[keyof typeof NissanScalarFieldEnum]


  export const GmScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    purchasedAt: 'purchasedAt',
    ownerId: 'ownerId'
  };

  export type GmScalarFieldEnum = (typeof GmScalarFieldEnum)[keyof typeof GmScalarFieldEnum]


  export const FordScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    purchasedAt: 'purchasedAt',
    ownerId: 'ownerId'
  };

  export type FordScalarFieldEnum = (typeof FordScalarFieldEnum)[keyof typeof FordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    shopifyId?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    company?: StringNullableFilter<"User"> | string | null
    software?: BoolFilter<"User"> | boolean
    nissanCount?: IntFilter<"User"> | number
    gmCount?: IntFilter<"User"> | number
    fordCount?: IntFilter<"User"> | number
    passthrough?: StringNullableFilter<"User"> | string | null
    fordName?: StringNullableFilter<"User"> | string | null
    nissanToken?: NissanListRelationFilter
    gmToken?: GmListRelationFilter
    fordToken?: FordListRelationFilter
    tokens?: TokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    shopifyId?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrderInput | SortOrder
    software?: SortOrder
    nissanCount?: SortOrder
    gmCount?: SortOrder
    fordCount?: SortOrder
    passthrough?: SortOrderInput | SortOrder
    fordName?: SortOrderInput | SortOrder
    nissanToken?: NissanOrderByRelationAggregateInput
    gmToken?: GmOrderByRelationAggregateInput
    fordToken?: FordOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shopifyId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    company?: StringNullableFilter<"User"> | string | null
    software?: BoolFilter<"User"> | boolean
    nissanCount?: IntFilter<"User"> | number
    gmCount?: IntFilter<"User"> | number
    fordCount?: IntFilter<"User"> | number
    passthrough?: StringNullableFilter<"User"> | string | null
    fordName?: StringNullableFilter<"User"> | string | null
    nissanToken?: NissanListRelationFilter
    gmToken?: GmListRelationFilter
    fordToken?: FordListRelationFilter
    tokens?: TokenListRelationFilter
  }, "id" | "shopifyId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    shopifyId?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrderInput | SortOrder
    software?: SortOrder
    nissanCount?: SortOrder
    gmCount?: SortOrder
    fordCount?: SortOrder
    passthrough?: SortOrderInput | SortOrder
    fordName?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    shopifyId?: IntWithAggregatesFilter<"User"> | number
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    company?: StringNullableWithAggregatesFilter<"User"> | string | null
    software?: BoolWithAggregatesFilter<"User"> | boolean
    nissanCount?: IntWithAggregatesFilter<"User"> | number
    gmCount?: IntWithAggregatesFilter<"User"> | number
    fordCount?: IntWithAggregatesFilter<"User"> | number
    passthrough?: StringNullableWithAggregatesFilter<"User"> | string | null
    fordName?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    orderNumber?: IntFilter<"Token"> | number
    purchasedAt?: DateTimeFilter<"Token"> | Date | string
    ownerId?: IntFilter<"Token"> | number
    type?: EnumTypeFilter<"Token"> | $Enums.Type
    valid?: BoolFilter<"Token"> | boolean
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    valid?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderNumber?: number
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    purchasedAt?: DateTimeFilter<"Token"> | Date | string
    ownerId?: IntFilter<"Token"> | number
    type?: EnumTypeFilter<"Token"> | $Enums.Type
    valid?: BoolFilter<"Token"> | boolean
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "orderNumber">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    valid?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    orderNumber?: IntWithAggregatesFilter<"Token"> | number
    purchasedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Token"> | number
    type?: EnumTypeWithAggregatesFilter<"Token"> | $Enums.Type
    valid?: BoolWithAggregatesFilter<"Token"> | boolean
  }

  export type NissanWhereInput = {
    AND?: NissanWhereInput | NissanWhereInput[]
    OR?: NissanWhereInput[]
    NOT?: NissanWhereInput | NissanWhereInput[]
    id?: IntFilter<"Nissan"> | number
    orderNumber?: IntFilter<"Nissan"> | number
    purchasedAt?: DateTimeFilter<"Nissan"> | Date | string
    ownerId?: IntFilter<"Nissan"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NissanOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type NissanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderNumber?: number
    AND?: NissanWhereInput | NissanWhereInput[]
    OR?: NissanWhereInput[]
    NOT?: NissanWhereInput | NissanWhereInput[]
    purchasedAt?: DateTimeFilter<"Nissan"> | Date | string
    ownerId?: IntFilter<"Nissan"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "orderNumber">

  export type NissanOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    _count?: NissanCountOrderByAggregateInput
    _avg?: NissanAvgOrderByAggregateInput
    _max?: NissanMaxOrderByAggregateInput
    _min?: NissanMinOrderByAggregateInput
    _sum?: NissanSumOrderByAggregateInput
  }

  export type NissanScalarWhereWithAggregatesInput = {
    AND?: NissanScalarWhereWithAggregatesInput | NissanScalarWhereWithAggregatesInput[]
    OR?: NissanScalarWhereWithAggregatesInput[]
    NOT?: NissanScalarWhereWithAggregatesInput | NissanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nissan"> | number
    orderNumber?: IntWithAggregatesFilter<"Nissan"> | number
    purchasedAt?: DateTimeWithAggregatesFilter<"Nissan"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Nissan"> | number
  }

  export type GmWhereInput = {
    AND?: GmWhereInput | GmWhereInput[]
    OR?: GmWhereInput[]
    NOT?: GmWhereInput | GmWhereInput[]
    id?: IntFilter<"Gm"> | number
    orderNumber?: IntFilter<"Gm"> | number
    purchasedAt?: DateTimeFilter<"Gm"> | Date | string
    ownerId?: IntFilter<"Gm"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GmOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type GmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderNumber?: number
    AND?: GmWhereInput | GmWhereInput[]
    OR?: GmWhereInput[]
    NOT?: GmWhereInput | GmWhereInput[]
    purchasedAt?: DateTimeFilter<"Gm"> | Date | string
    ownerId?: IntFilter<"Gm"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "orderNumber">

  export type GmOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    _count?: GmCountOrderByAggregateInput
    _avg?: GmAvgOrderByAggregateInput
    _max?: GmMaxOrderByAggregateInput
    _min?: GmMinOrderByAggregateInput
    _sum?: GmSumOrderByAggregateInput
  }

  export type GmScalarWhereWithAggregatesInput = {
    AND?: GmScalarWhereWithAggregatesInput | GmScalarWhereWithAggregatesInput[]
    OR?: GmScalarWhereWithAggregatesInput[]
    NOT?: GmScalarWhereWithAggregatesInput | GmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gm"> | number
    orderNumber?: IntWithAggregatesFilter<"Gm"> | number
    purchasedAt?: DateTimeWithAggregatesFilter<"Gm"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Gm"> | number
  }

  export type FordWhereInput = {
    AND?: FordWhereInput | FordWhereInput[]
    OR?: FordWhereInput[]
    NOT?: FordWhereInput | FordWhereInput[]
    id?: IntFilter<"Ford"> | number
    orderNumber?: IntFilter<"Ford"> | number
    purchasedAt?: DateTimeFilter<"Ford"> | Date | string
    ownerId?: IntFilter<"Ford"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FordOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type FordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderNumber?: number
    AND?: FordWhereInput | FordWhereInput[]
    OR?: FordWhereInput[]
    NOT?: FordWhereInput | FordWhereInput[]
    purchasedAt?: DateTimeFilter<"Ford"> | Date | string
    ownerId?: IntFilter<"Ford"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "orderNumber">

  export type FordOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    _count?: FordCountOrderByAggregateInput
    _avg?: FordAvgOrderByAggregateInput
    _max?: FordMaxOrderByAggregateInput
    _min?: FordMinOrderByAggregateInput
    _sum?: FordSumOrderByAggregateInput
  }

  export type FordScalarWhereWithAggregatesInput = {
    AND?: FordScalarWhereWithAggregatesInput | FordScalarWhereWithAggregatesInput[]
    OR?: FordScalarWhereWithAggregatesInput[]
    NOT?: FordScalarWhereWithAggregatesInput | FordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ford"> | number
    orderNumber?: IntWithAggregatesFilter<"Ford"> | number
    purchasedAt?: DateTimeWithAggregatesFilter<"Ford"> | Date | string
    ownerId?: IntWithAggregatesFilter<"Ford"> | number
  }

  export type UserCreateInput = {
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    nissanToken?: NissanCreateNestedManyWithoutOwnerInput
    gmToken?: GmCreateNestedManyWithoutOwnerInput
    fordToken?: FordCreateNestedManyWithoutOwnerInput
    tokens?: TokenCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    nissanToken?: NissanUncheckedCreateNestedManyWithoutOwnerInput
    gmToken?: GmUncheckedCreateNestedManyWithoutOwnerInput
    fordToken?: FordUncheckedCreateNestedManyWithoutOwnerInput
    tokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    nissanToken?: NissanUpdateManyWithoutOwnerNestedInput
    gmToken?: GmUpdateManyWithoutOwnerNestedInput
    fordToken?: FordUpdateManyWithoutOwnerNestedInput
    tokens?: TokenUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    nissanToken?: NissanUncheckedUpdateManyWithoutOwnerNestedInput
    gmToken?: GmUncheckedUpdateManyWithoutOwnerNestedInput
    fordToken?: FordUncheckedUpdateManyWithoutOwnerNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
  }

  export type UserUpdateManyMutationInput = {
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateInput = {
    orderNumber: number
    purchasedAt?: Date | string
    type: $Enums.Type
    valid?: boolean
    owner: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    ownerId: number
    type: $Enums.Type
    valid?: boolean
  }

  export type TokenUpdateInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    valid?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenCreateManyInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    ownerId: number
    type: $Enums.Type
    valid?: boolean
  }

  export type TokenUpdateManyMutationInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NissanCreateInput = {
    orderNumber: number
    purchasedAt?: Date | string
    owner: UserCreateNestedOneWithoutNissanTokenInput
  }

  export type NissanUncheckedCreateInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    ownerId: number
  }

  export type NissanUpdateInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNissanTokenNestedInput
  }

  export type NissanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type NissanCreateManyInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    ownerId: number
  }

  export type NissanUpdateManyMutationInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NissanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type GmCreateInput = {
    orderNumber: number
    purchasedAt?: Date | string
    owner: UserCreateNestedOneWithoutGmTokenInput
  }

  export type GmUncheckedCreateInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    ownerId: number
  }

  export type GmUpdateInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGmTokenNestedInput
  }

  export type GmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type GmCreateManyInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    ownerId: number
  }

  export type GmUpdateManyMutationInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type FordCreateInput = {
    orderNumber: number
    purchasedAt?: Date | string
    owner: UserCreateNestedOneWithoutFordTokenInput
  }

  export type FordUncheckedCreateInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    ownerId: number
  }

  export type FordUpdateInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFordTokenNestedInput
  }

  export type FordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type FordCreateManyInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    ownerId: number
  }

  export type FordUpdateManyMutationInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NissanListRelationFilter = {
    every?: NissanWhereInput
    some?: NissanWhereInput
    none?: NissanWhereInput
  }

  export type GmListRelationFilter = {
    every?: GmWhereInput
    some?: GmWhereInput
    none?: GmWhereInput
  }

  export type FordListRelationFilter = {
    every?: FordWhereInput
    some?: FordWhereInput
    none?: FordWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NissanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    shopifyId?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    software?: SortOrder
    nissanCount?: SortOrder
    gmCount?: SortOrder
    fordCount?: SortOrder
    passthrough?: SortOrder
    fordName?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    shopifyId?: SortOrder
    nissanCount?: SortOrder
    gmCount?: SortOrder
    fordCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    shopifyId?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    software?: SortOrder
    nissanCount?: SortOrder
    gmCount?: SortOrder
    fordCount?: SortOrder
    passthrough?: SortOrder
    fordName?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    shopifyId?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    software?: SortOrder
    nissanCount?: SortOrder
    gmCount?: SortOrder
    fordCount?: SortOrder
    passthrough?: SortOrder
    fordName?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    shopifyId?: SortOrder
    nissanCount?: SortOrder
    gmCount?: SortOrder
    fordCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    valid?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    valid?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
    type?: SortOrder
    valid?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NissanCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type NissanAvgOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type NissanMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type NissanMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type NissanSumOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type GmCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type GmAvgOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type GmMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type GmMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type GmSumOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type FordCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type FordAvgOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type FordMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type FordMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    purchasedAt?: SortOrder
    ownerId?: SortOrder
  }

  export type FordSumOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type NissanCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NissanCreateWithoutOwnerInput, NissanUncheckedCreateWithoutOwnerInput> | NissanCreateWithoutOwnerInput[] | NissanUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NissanCreateOrConnectWithoutOwnerInput | NissanCreateOrConnectWithoutOwnerInput[]
    createMany?: NissanCreateManyOwnerInputEnvelope
    connect?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
  }

  export type GmCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GmCreateWithoutOwnerInput, GmUncheckedCreateWithoutOwnerInput> | GmCreateWithoutOwnerInput[] | GmUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GmCreateOrConnectWithoutOwnerInput | GmCreateOrConnectWithoutOwnerInput[]
    createMany?: GmCreateManyOwnerInputEnvelope
    connect?: GmWhereUniqueInput | GmWhereUniqueInput[]
  }

  export type FordCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FordCreateWithoutOwnerInput, FordUncheckedCreateWithoutOwnerInput> | FordCreateWithoutOwnerInput[] | FordUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FordCreateOrConnectWithoutOwnerInput | FordCreateOrConnectWithoutOwnerInput[]
    createMany?: FordCreateManyOwnerInputEnvelope
    connect?: FordWhereUniqueInput | FordWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TokenCreateWithoutOwnerInput, TokenUncheckedCreateWithoutOwnerInput> | TokenCreateWithoutOwnerInput[] | TokenUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutOwnerInput | TokenCreateOrConnectWithoutOwnerInput[]
    createMany?: TokenCreateManyOwnerInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type NissanUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NissanCreateWithoutOwnerInput, NissanUncheckedCreateWithoutOwnerInput> | NissanCreateWithoutOwnerInput[] | NissanUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NissanCreateOrConnectWithoutOwnerInput | NissanCreateOrConnectWithoutOwnerInput[]
    createMany?: NissanCreateManyOwnerInputEnvelope
    connect?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
  }

  export type GmUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GmCreateWithoutOwnerInput, GmUncheckedCreateWithoutOwnerInput> | GmCreateWithoutOwnerInput[] | GmUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GmCreateOrConnectWithoutOwnerInput | GmCreateOrConnectWithoutOwnerInput[]
    createMany?: GmCreateManyOwnerInputEnvelope
    connect?: GmWhereUniqueInput | GmWhereUniqueInput[]
  }

  export type FordUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FordCreateWithoutOwnerInput, FordUncheckedCreateWithoutOwnerInput> | FordCreateWithoutOwnerInput[] | FordUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FordCreateOrConnectWithoutOwnerInput | FordCreateOrConnectWithoutOwnerInput[]
    createMany?: FordCreateManyOwnerInputEnvelope
    connect?: FordWhereUniqueInput | FordWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TokenCreateWithoutOwnerInput, TokenUncheckedCreateWithoutOwnerInput> | TokenCreateWithoutOwnerInput[] | TokenUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutOwnerInput | TokenCreateOrConnectWithoutOwnerInput[]
    createMany?: TokenCreateManyOwnerInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NissanUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NissanCreateWithoutOwnerInput, NissanUncheckedCreateWithoutOwnerInput> | NissanCreateWithoutOwnerInput[] | NissanUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NissanCreateOrConnectWithoutOwnerInput | NissanCreateOrConnectWithoutOwnerInput[]
    upsert?: NissanUpsertWithWhereUniqueWithoutOwnerInput | NissanUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NissanCreateManyOwnerInputEnvelope
    set?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
    disconnect?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
    delete?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
    connect?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
    update?: NissanUpdateWithWhereUniqueWithoutOwnerInput | NissanUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NissanUpdateManyWithWhereWithoutOwnerInput | NissanUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NissanScalarWhereInput | NissanScalarWhereInput[]
  }

  export type GmUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GmCreateWithoutOwnerInput, GmUncheckedCreateWithoutOwnerInput> | GmCreateWithoutOwnerInput[] | GmUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GmCreateOrConnectWithoutOwnerInput | GmCreateOrConnectWithoutOwnerInput[]
    upsert?: GmUpsertWithWhereUniqueWithoutOwnerInput | GmUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GmCreateManyOwnerInputEnvelope
    set?: GmWhereUniqueInput | GmWhereUniqueInput[]
    disconnect?: GmWhereUniqueInput | GmWhereUniqueInput[]
    delete?: GmWhereUniqueInput | GmWhereUniqueInput[]
    connect?: GmWhereUniqueInput | GmWhereUniqueInput[]
    update?: GmUpdateWithWhereUniqueWithoutOwnerInput | GmUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GmUpdateManyWithWhereWithoutOwnerInput | GmUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GmScalarWhereInput | GmScalarWhereInput[]
  }

  export type FordUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FordCreateWithoutOwnerInput, FordUncheckedCreateWithoutOwnerInput> | FordCreateWithoutOwnerInput[] | FordUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FordCreateOrConnectWithoutOwnerInput | FordCreateOrConnectWithoutOwnerInput[]
    upsert?: FordUpsertWithWhereUniqueWithoutOwnerInput | FordUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FordCreateManyOwnerInputEnvelope
    set?: FordWhereUniqueInput | FordWhereUniqueInput[]
    disconnect?: FordWhereUniqueInput | FordWhereUniqueInput[]
    delete?: FordWhereUniqueInput | FordWhereUniqueInput[]
    connect?: FordWhereUniqueInput | FordWhereUniqueInput[]
    update?: FordUpdateWithWhereUniqueWithoutOwnerInput | FordUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FordUpdateManyWithWhereWithoutOwnerInput | FordUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FordScalarWhereInput | FordScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TokenCreateWithoutOwnerInput, TokenUncheckedCreateWithoutOwnerInput> | TokenCreateWithoutOwnerInput[] | TokenUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutOwnerInput | TokenCreateOrConnectWithoutOwnerInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutOwnerInput | TokenUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TokenCreateManyOwnerInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutOwnerInput | TokenUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutOwnerInput | TokenUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type NissanUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NissanCreateWithoutOwnerInput, NissanUncheckedCreateWithoutOwnerInput> | NissanCreateWithoutOwnerInput[] | NissanUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NissanCreateOrConnectWithoutOwnerInput | NissanCreateOrConnectWithoutOwnerInput[]
    upsert?: NissanUpsertWithWhereUniqueWithoutOwnerInput | NissanUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NissanCreateManyOwnerInputEnvelope
    set?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
    disconnect?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
    delete?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
    connect?: NissanWhereUniqueInput | NissanWhereUniqueInput[]
    update?: NissanUpdateWithWhereUniqueWithoutOwnerInput | NissanUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NissanUpdateManyWithWhereWithoutOwnerInput | NissanUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NissanScalarWhereInput | NissanScalarWhereInput[]
  }

  export type GmUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GmCreateWithoutOwnerInput, GmUncheckedCreateWithoutOwnerInput> | GmCreateWithoutOwnerInput[] | GmUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GmCreateOrConnectWithoutOwnerInput | GmCreateOrConnectWithoutOwnerInput[]
    upsert?: GmUpsertWithWhereUniqueWithoutOwnerInput | GmUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GmCreateManyOwnerInputEnvelope
    set?: GmWhereUniqueInput | GmWhereUniqueInput[]
    disconnect?: GmWhereUniqueInput | GmWhereUniqueInput[]
    delete?: GmWhereUniqueInput | GmWhereUniqueInput[]
    connect?: GmWhereUniqueInput | GmWhereUniqueInput[]
    update?: GmUpdateWithWhereUniqueWithoutOwnerInput | GmUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GmUpdateManyWithWhereWithoutOwnerInput | GmUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GmScalarWhereInput | GmScalarWhereInput[]
  }

  export type FordUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FordCreateWithoutOwnerInput, FordUncheckedCreateWithoutOwnerInput> | FordCreateWithoutOwnerInput[] | FordUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FordCreateOrConnectWithoutOwnerInput | FordCreateOrConnectWithoutOwnerInput[]
    upsert?: FordUpsertWithWhereUniqueWithoutOwnerInput | FordUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FordCreateManyOwnerInputEnvelope
    set?: FordWhereUniqueInput | FordWhereUniqueInput[]
    disconnect?: FordWhereUniqueInput | FordWhereUniqueInput[]
    delete?: FordWhereUniqueInput | FordWhereUniqueInput[]
    connect?: FordWhereUniqueInput | FordWhereUniqueInput[]
    update?: FordUpdateWithWhereUniqueWithoutOwnerInput | FordUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FordUpdateManyWithWhereWithoutOwnerInput | FordUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FordScalarWhereInput | FordScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TokenCreateWithoutOwnerInput, TokenUncheckedCreateWithoutOwnerInput> | TokenCreateWithoutOwnerInput[] | TokenUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutOwnerInput | TokenCreateOrConnectWithoutOwnerInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutOwnerInput | TokenUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TokenCreateManyOwnerInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutOwnerInput | TokenUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutOwnerInput | TokenUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserCreateNestedOneWithoutNissanTokenInput = {
    create?: XOR<UserCreateWithoutNissanTokenInput, UserUncheckedCreateWithoutNissanTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutNissanTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNissanTokenNestedInput = {
    create?: XOR<UserCreateWithoutNissanTokenInput, UserUncheckedCreateWithoutNissanTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutNissanTokenInput
    upsert?: UserUpsertWithoutNissanTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNissanTokenInput, UserUpdateWithoutNissanTokenInput>, UserUncheckedUpdateWithoutNissanTokenInput>
  }

  export type UserCreateNestedOneWithoutGmTokenInput = {
    create?: XOR<UserCreateWithoutGmTokenInput, UserUncheckedCreateWithoutGmTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutGmTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGmTokenNestedInput = {
    create?: XOR<UserCreateWithoutGmTokenInput, UserUncheckedCreateWithoutGmTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutGmTokenInput
    upsert?: UserUpsertWithoutGmTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGmTokenInput, UserUpdateWithoutGmTokenInput>, UserUncheckedUpdateWithoutGmTokenInput>
  }

  export type UserCreateNestedOneWithoutFordTokenInput = {
    create?: XOR<UserCreateWithoutFordTokenInput, UserUncheckedCreateWithoutFordTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutFordTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFordTokenNestedInput = {
    create?: XOR<UserCreateWithoutFordTokenInput, UserUncheckedCreateWithoutFordTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutFordTokenInput
    upsert?: UserUpsertWithoutFordTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFordTokenInput, UserUpdateWithoutFordTokenInput>, UserUncheckedUpdateWithoutFordTokenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NissanCreateWithoutOwnerInput = {
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type NissanUncheckedCreateWithoutOwnerInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type NissanCreateOrConnectWithoutOwnerInput = {
    where: NissanWhereUniqueInput
    create: XOR<NissanCreateWithoutOwnerInput, NissanUncheckedCreateWithoutOwnerInput>
  }

  export type NissanCreateManyOwnerInputEnvelope = {
    data: NissanCreateManyOwnerInput | NissanCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type GmCreateWithoutOwnerInput = {
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type GmUncheckedCreateWithoutOwnerInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type GmCreateOrConnectWithoutOwnerInput = {
    where: GmWhereUniqueInput
    create: XOR<GmCreateWithoutOwnerInput, GmUncheckedCreateWithoutOwnerInput>
  }

  export type GmCreateManyOwnerInputEnvelope = {
    data: GmCreateManyOwnerInput | GmCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FordCreateWithoutOwnerInput = {
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type FordUncheckedCreateWithoutOwnerInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type FordCreateOrConnectWithoutOwnerInput = {
    where: FordWhereUniqueInput
    create: XOR<FordCreateWithoutOwnerInput, FordUncheckedCreateWithoutOwnerInput>
  }

  export type FordCreateManyOwnerInputEnvelope = {
    data: FordCreateManyOwnerInput | FordCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutOwnerInput = {
    orderNumber: number
    purchasedAt?: Date | string
    type: $Enums.Type
    valid?: boolean
  }

  export type TokenUncheckedCreateWithoutOwnerInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    type: $Enums.Type
    valid?: boolean
  }

  export type TokenCreateOrConnectWithoutOwnerInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutOwnerInput, TokenUncheckedCreateWithoutOwnerInput>
  }

  export type TokenCreateManyOwnerInputEnvelope = {
    data: TokenCreateManyOwnerInput | TokenCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type NissanUpsertWithWhereUniqueWithoutOwnerInput = {
    where: NissanWhereUniqueInput
    update: XOR<NissanUpdateWithoutOwnerInput, NissanUncheckedUpdateWithoutOwnerInput>
    create: XOR<NissanCreateWithoutOwnerInput, NissanUncheckedCreateWithoutOwnerInput>
  }

  export type NissanUpdateWithWhereUniqueWithoutOwnerInput = {
    where: NissanWhereUniqueInput
    data: XOR<NissanUpdateWithoutOwnerInput, NissanUncheckedUpdateWithoutOwnerInput>
  }

  export type NissanUpdateManyWithWhereWithoutOwnerInput = {
    where: NissanScalarWhereInput
    data: XOR<NissanUpdateManyMutationInput, NissanUncheckedUpdateManyWithoutOwnerInput>
  }

  export type NissanScalarWhereInput = {
    AND?: NissanScalarWhereInput | NissanScalarWhereInput[]
    OR?: NissanScalarWhereInput[]
    NOT?: NissanScalarWhereInput | NissanScalarWhereInput[]
    id?: IntFilter<"Nissan"> | number
    orderNumber?: IntFilter<"Nissan"> | number
    purchasedAt?: DateTimeFilter<"Nissan"> | Date | string
    ownerId?: IntFilter<"Nissan"> | number
  }

  export type GmUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GmWhereUniqueInput
    update: XOR<GmUpdateWithoutOwnerInput, GmUncheckedUpdateWithoutOwnerInput>
    create: XOR<GmCreateWithoutOwnerInput, GmUncheckedCreateWithoutOwnerInput>
  }

  export type GmUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GmWhereUniqueInput
    data: XOR<GmUpdateWithoutOwnerInput, GmUncheckedUpdateWithoutOwnerInput>
  }

  export type GmUpdateManyWithWhereWithoutOwnerInput = {
    where: GmScalarWhereInput
    data: XOR<GmUpdateManyMutationInput, GmUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GmScalarWhereInput = {
    AND?: GmScalarWhereInput | GmScalarWhereInput[]
    OR?: GmScalarWhereInput[]
    NOT?: GmScalarWhereInput | GmScalarWhereInput[]
    id?: IntFilter<"Gm"> | number
    orderNumber?: IntFilter<"Gm"> | number
    purchasedAt?: DateTimeFilter<"Gm"> | Date | string
    ownerId?: IntFilter<"Gm"> | number
  }

  export type FordUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FordWhereUniqueInput
    update: XOR<FordUpdateWithoutOwnerInput, FordUncheckedUpdateWithoutOwnerInput>
    create: XOR<FordCreateWithoutOwnerInput, FordUncheckedCreateWithoutOwnerInput>
  }

  export type FordUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FordWhereUniqueInput
    data: XOR<FordUpdateWithoutOwnerInput, FordUncheckedUpdateWithoutOwnerInput>
  }

  export type FordUpdateManyWithWhereWithoutOwnerInput = {
    where: FordScalarWhereInput
    data: XOR<FordUpdateManyMutationInput, FordUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FordScalarWhereInput = {
    AND?: FordScalarWhereInput | FordScalarWhereInput[]
    OR?: FordScalarWhereInput[]
    NOT?: FordScalarWhereInput | FordScalarWhereInput[]
    id?: IntFilter<"Ford"> | number
    orderNumber?: IntFilter<"Ford"> | number
    purchasedAt?: DateTimeFilter<"Ford"> | Date | string
    ownerId?: IntFilter<"Ford"> | number
  }

  export type TokenUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutOwnerInput, TokenUncheckedUpdateWithoutOwnerInput>
    create: XOR<TokenCreateWithoutOwnerInput, TokenUncheckedCreateWithoutOwnerInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutOwnerInput, TokenUncheckedUpdateWithoutOwnerInput>
  }

  export type TokenUpdateManyWithWhereWithoutOwnerInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    orderNumber?: IntFilter<"Token"> | number
    purchasedAt?: DateTimeFilter<"Token"> | Date | string
    ownerId?: IntFilter<"Token"> | number
    type?: EnumTypeFilter<"Token"> | $Enums.Type
    valid?: BoolFilter<"Token"> | boolean
  }

  export type UserCreateWithoutTokensInput = {
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    nissanToken?: NissanCreateNestedManyWithoutOwnerInput
    gmToken?: GmCreateNestedManyWithoutOwnerInput
    fordToken?: FordCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    nissanToken?: NissanUncheckedCreateNestedManyWithoutOwnerInput
    gmToken?: GmUncheckedCreateNestedManyWithoutOwnerInput
    fordToken?: FordUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    nissanToken?: NissanUpdateManyWithoutOwnerNestedInput
    gmToken?: GmUpdateManyWithoutOwnerNestedInput
    fordToken?: FordUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    nissanToken?: NissanUncheckedUpdateManyWithoutOwnerNestedInput
    gmToken?: GmUncheckedUpdateManyWithoutOwnerNestedInput
    fordToken?: FordUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutNissanTokenInput = {
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    gmToken?: GmCreateNestedManyWithoutOwnerInput
    fordToken?: FordCreateNestedManyWithoutOwnerInput
    tokens?: TokenCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutNissanTokenInput = {
    id?: number
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    gmToken?: GmUncheckedCreateNestedManyWithoutOwnerInput
    fordToken?: FordUncheckedCreateNestedManyWithoutOwnerInput
    tokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutNissanTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNissanTokenInput, UserUncheckedCreateWithoutNissanTokenInput>
  }

  export type UserUpsertWithoutNissanTokenInput = {
    update: XOR<UserUpdateWithoutNissanTokenInput, UserUncheckedUpdateWithoutNissanTokenInput>
    create: XOR<UserCreateWithoutNissanTokenInput, UserUncheckedCreateWithoutNissanTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNissanTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNissanTokenInput, UserUncheckedUpdateWithoutNissanTokenInput>
  }

  export type UserUpdateWithoutNissanTokenInput = {
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    gmToken?: GmUpdateManyWithoutOwnerNestedInput
    fordToken?: FordUpdateManyWithoutOwnerNestedInput
    tokens?: TokenUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutNissanTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    gmToken?: GmUncheckedUpdateManyWithoutOwnerNestedInput
    fordToken?: FordUncheckedUpdateManyWithoutOwnerNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutGmTokenInput = {
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    nissanToken?: NissanCreateNestedManyWithoutOwnerInput
    fordToken?: FordCreateNestedManyWithoutOwnerInput
    tokens?: TokenCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutGmTokenInput = {
    id?: number
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    nissanToken?: NissanUncheckedCreateNestedManyWithoutOwnerInput
    fordToken?: FordUncheckedCreateNestedManyWithoutOwnerInput
    tokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutGmTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGmTokenInput, UserUncheckedCreateWithoutGmTokenInput>
  }

  export type UserUpsertWithoutGmTokenInput = {
    update: XOR<UserUpdateWithoutGmTokenInput, UserUncheckedUpdateWithoutGmTokenInput>
    create: XOR<UserCreateWithoutGmTokenInput, UserUncheckedCreateWithoutGmTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGmTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGmTokenInput, UserUncheckedUpdateWithoutGmTokenInput>
  }

  export type UserUpdateWithoutGmTokenInput = {
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    nissanToken?: NissanUpdateManyWithoutOwnerNestedInput
    fordToken?: FordUpdateManyWithoutOwnerNestedInput
    tokens?: TokenUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGmTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    nissanToken?: NissanUncheckedUpdateManyWithoutOwnerNestedInput
    fordToken?: FordUncheckedUpdateManyWithoutOwnerNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutFordTokenInput = {
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    nissanToken?: NissanCreateNestedManyWithoutOwnerInput
    gmToken?: GmCreateNestedManyWithoutOwnerInput
    tokens?: TokenCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutFordTokenInput = {
    id?: number
    shopifyId: number
    firstname: string
    lastname: string
    email: string
    phone: string
    company?: string | null
    software?: boolean
    nissanCount?: number
    gmCount?: number
    fordCount?: number
    passthrough?: string | null
    fordName?: string | null
    nissanToken?: NissanUncheckedCreateNestedManyWithoutOwnerInput
    gmToken?: GmUncheckedCreateNestedManyWithoutOwnerInput
    tokens?: TokenUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutFordTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFordTokenInput, UserUncheckedCreateWithoutFordTokenInput>
  }

  export type UserUpsertWithoutFordTokenInput = {
    update: XOR<UserUpdateWithoutFordTokenInput, UserUncheckedUpdateWithoutFordTokenInput>
    create: XOR<UserCreateWithoutFordTokenInput, UserUncheckedCreateWithoutFordTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFordTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFordTokenInput, UserUncheckedUpdateWithoutFordTokenInput>
  }

  export type UserUpdateWithoutFordTokenInput = {
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    nissanToken?: NissanUpdateManyWithoutOwnerNestedInput
    gmToken?: GmUpdateManyWithoutOwnerNestedInput
    tokens?: TokenUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutFordTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopifyId?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    software?: BoolFieldUpdateOperationsInput | boolean
    nissanCount?: IntFieldUpdateOperationsInput | number
    gmCount?: IntFieldUpdateOperationsInput | number
    fordCount?: IntFieldUpdateOperationsInput | number
    passthrough?: NullableStringFieldUpdateOperationsInput | string | null
    fordName?: NullableStringFieldUpdateOperationsInput | string | null
    nissanToken?: NissanUncheckedUpdateManyWithoutOwnerNestedInput
    gmToken?: GmUncheckedUpdateManyWithoutOwnerNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type NissanCreateManyOwnerInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type GmCreateManyOwnerInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type FordCreateManyOwnerInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
  }

  export type TokenCreateManyOwnerInput = {
    id?: number
    orderNumber: number
    purchasedAt?: Date | string
    type: $Enums.Type
    valid?: boolean
  }

  export type NissanUpdateWithoutOwnerInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NissanUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NissanUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GmUpdateWithoutOwnerInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GmUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GmUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FordUpdateWithoutOwnerInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FordUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FordUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutOwnerInput = {
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    valid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    valid?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}