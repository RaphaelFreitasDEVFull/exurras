
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Beat
 * 
 */
export type Beat = $Result.DefaultSelection<Prisma.$BeatPayload>
/**
 * Model SectionAudio
 * 
 */
export type SectionAudio = $Result.DefaultSelection<Prisma.$SectionAudioPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  OGA: 'OGA',
  SAMBA: 'SAMBA',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Linha: {
  OGUM: 'OGUM',
  OXOSSI: 'OXOSSI',
  XANGO: 'XANGO',
  OXALA: 'OXALA',
  IEMANJA: 'IEMANJA',
  OXUM: 'OXUM',
  IANSA: 'IANSA',
  NANA: 'NANA',
  OMOLU: 'OMOLU',
  PRETO_VELHO: 'PRETO_VELHO',
  ERE: 'ERE',
  EXU_MIRIM: 'EXU_MIRIM',
  BOIADEIRO: 'BOIADEIRO',
  CABOCLA: 'CABOCLA',
  MARINHEIRO: 'MARINHEIRO',
  CIGANO: 'CIGANO',
  CIGANA: 'CIGANA',
  BAIANO: 'BAIANO',
  POMBA_GIRA: 'POMBA_GIRA',
  EXU: 'EXU',
  OUTROS: 'OUTROS'
};

export type Linha = (typeof Linha)[keyof typeof Linha]


export const PointType: {
  ABERTURA: 'ABERTURA',
  CHAMADA: 'CHAMADA',
  FIRMA: 'FIRMA',
  DEFUMACAO: 'DEFUMACAO',
  ENCERRAMENTO: 'ENCERRAMENTO',
  CURA: 'CURA',
  PROTECAO: 'PROTECAO',
  OUTRO: 'OUTRO'
};

export type PointType = (typeof PointType)[keyof typeof PointType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Linha = $Enums.Linha

export const Linha: typeof $Enums.Linha

export type PointType = $Enums.PointType

export const PointType: typeof $Enums.PointType

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beat`: Exposes CRUD operations for the **Beat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beats
    * const beats = await prisma.beat.findMany()
    * ```
    */
  get beat(): Prisma.BeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectionAudio`: Exposes CRUD operations for the **SectionAudio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionAudios
    * const sectionAudios = await prisma.sectionAudio.findMany()
    * ```
    */
  get sectionAudio(): Prisma.SectionAudioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Point: 'Point',
    Section: 'Section',
    Beat: 'Beat',
    SectionAudio: 'SectionAudio',
    Favorite: 'Favorite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "point" | "section" | "beat" | "sectionAudio" | "favorite"
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
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Beat: {
        payload: Prisma.$BeatPayload<ExtArgs>
        fields: Prisma.BeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>
          }
          findFirst: {
            args: Prisma.BeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>
          }
          findMany: {
            args: Prisma.BeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>[]
          }
          create: {
            args: Prisma.BeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>
          }
          createMany: {
            args: Prisma.BeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>[]
          }
          delete: {
            args: Prisma.BeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>
          }
          update: {
            args: Prisma.BeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>
          }
          deleteMany: {
            args: Prisma.BeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BeatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>[]
          }
          upsert: {
            args: Prisma.BeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeatPayload>
          }
          aggregate: {
            args: Prisma.BeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeat>
          }
          groupBy: {
            args: Prisma.BeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeatCountArgs<ExtArgs>
            result: $Utils.Optional<BeatCountAggregateOutputType> | number
          }
        }
      }
      SectionAudio: {
        payload: Prisma.$SectionAudioPayload<ExtArgs>
        fields: Prisma.SectionAudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionAudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionAudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>
          }
          findFirst: {
            args: Prisma.SectionAudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionAudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>
          }
          findMany: {
            args: Prisma.SectionAudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>[]
          }
          create: {
            args: Prisma.SectionAudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>
          }
          createMany: {
            args: Prisma.SectionAudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionAudioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>[]
          }
          delete: {
            args: Prisma.SectionAudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>
          }
          update: {
            args: Prisma.SectionAudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>
          }
          deleteMany: {
            args: Prisma.SectionAudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionAudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionAudioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>[]
          }
          upsert: {
            args: Prisma.SectionAudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionAudioPayload>
          }
          aggregate: {
            args: Prisma.SectionAudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionAudio>
          }
          groupBy: {
            args: Prisma.SectionAudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionAudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionAudioCountArgs<ExtArgs>
            result: $Utils.Optional<SectionAudioCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    point?: PointOmit
    section?: SectionOmit
    beat?: BeatOmit
    sectionAudio?: SectionAudioOmit
    favorite?: FavoriteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    pointsCreated: number
    sectionAudios: number
    favorites: number
    approvals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pointsCreated?: boolean | UserCountOutputTypeCountPointsCreatedArgs
    sectionAudios?: boolean | UserCountOutputTypeCountSectionAudiosArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    approvals?: boolean | UserCountOutputTypeCountApprovalsArgs
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
  export type UserCountOutputTypeCountPointsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSectionAudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionAudioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }


  /**
   * Count Type PointCountOutputType
   */

  export type PointCountOutputType = {
    sections: number
    favorites: number
  }

  export type PointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | PointCountOutputTypeCountSectionsArgs
    favorites?: boolean | PointCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointCountOutputType
     */
    select?: PointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    beats: number
    audios: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beats?: boolean | SectionCountOutputTypeCountBeatsArgs
    audios?: boolean | SectionCountOutputTypeCountAudiosArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountBeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeatWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountAudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionAudioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    username: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    pointsCreated?: boolean | User$pointsCreatedArgs<ExtArgs>
    sectionAudios?: boolean | User$sectionAudiosArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pointsCreated?: boolean | User$pointsCreatedArgs<ExtArgs>
    sectionAudios?: boolean | User$sectionAudiosArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    approvals?: boolean | User$approvalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pointsCreated: Prisma.$PointPayload<ExtArgs>[]
      sectionAudios: Prisma.$SectionAudioPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      approvals: Prisma.$PointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      username: string
      password: string
      role: $Enums.Role
      createdAt: Date
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
    pointsCreated<T extends User$pointsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sectionAudios<T extends User$sectionAudiosArgs<ExtArgs> = {}>(args?: Subset<T, User$sectionAudiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvals<T extends User$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.pointsCreated
   */
  export type User$pointsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * User.sectionAudios
   */
  export type User$sectionAudiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    where?: SectionAudioWhereInput
    orderBy?: SectionAudioOrderByWithRelationInput | SectionAudioOrderByWithRelationInput[]
    cursor?: SectionAudioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionAudioScalarFieldEnum | SectionAudioScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.approvals
   */
  export type User$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
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
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    linha: $Enums.Linha | null
    type: $Enums.PointType | null
    createdAt: Date | null
    createdById: string | null
    approved: boolean | null
    approvedAt: Date | null
    approvedById: string | null
    audioUrl: string | null
    youtubeUrl: string | null
  }

  export type PointMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    linha: $Enums.Linha | null
    type: $Enums.PointType | null
    createdAt: Date | null
    createdById: string | null
    approved: boolean | null
    approvedAt: Date | null
    approvedById: string | null
    audioUrl: string | null
    youtubeUrl: string | null
  }

  export type PointCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    linha: number
    type: number
    createdAt: number
    createdById: number
    approved: number
    approvedAt: number
    approvedById: number
    audioUrl: number
    youtubeUrl: number
    _all: number
  }


  export type PointMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    linha?: true
    type?: true
    createdAt?: true
    createdById?: true
    approved?: true
    approvedAt?: true
    approvedById?: true
    audioUrl?: true
    youtubeUrl?: true
  }

  export type PointMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    linha?: true
    type?: true
    createdAt?: true
    createdById?: true
    approved?: true
    approvedAt?: true
    approvedById?: true
    audioUrl?: true
    youtubeUrl?: true
  }

  export type PointCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    linha?: true
    type?: true
    createdAt?: true
    createdById?: true
    approved?: true
    approvedAt?: true
    approvedById?: true
    audioUrl?: true
    youtubeUrl?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    linha: $Enums.Linha
    type: $Enums.PointType
    createdAt: Date
    createdById: string
    approved: boolean
    approvedAt: Date | null
    approvedById: string | null
    audioUrl: string | null
    youtubeUrl: string | null
    _count: PointCountAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    linha?: boolean
    type?: boolean
    createdAt?: boolean
    createdById?: boolean
    approved?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    audioUrl?: boolean
    youtubeUrl?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Point$approvedByArgs<ExtArgs>
    sections?: boolean | Point$sectionsArgs<ExtArgs>
    favorites?: boolean | Point$favoritesArgs<ExtArgs>
    _count?: boolean | PointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    linha?: boolean
    type?: boolean
    createdAt?: boolean
    createdById?: boolean
    approved?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    audioUrl?: boolean
    youtubeUrl?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Point$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    linha?: boolean
    type?: boolean
    createdAt?: boolean
    createdById?: boolean
    approved?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    audioUrl?: boolean
    youtubeUrl?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Point$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    linha?: boolean
    type?: boolean
    createdAt?: boolean
    createdById?: boolean
    approved?: boolean
    approvedAt?: boolean
    approvedById?: boolean
    audioUrl?: boolean
    youtubeUrl?: boolean
  }

  export type PointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "linha" | "type" | "createdAt" | "createdById" | "approved" | "approvedAt" | "approvedById" | "audioUrl" | "youtubeUrl", ExtArgs["result"]["point"]>
  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Point$approvedByArgs<ExtArgs>
    sections?: boolean | Point$sectionsArgs<ExtArgs>
    favorites?: boolean | Point$favoritesArgs<ExtArgs>
    _count?: boolean | PointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Point$approvedByArgs<ExtArgs>
  }
  export type PointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Point$approvedByArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      approvedBy: Prisma.$UserPayload<ExtArgs> | null
      sections: Prisma.$SectionPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      linha: $Enums.Linha
      type: $Enums.PointType
      createdAt: Date
      createdById: string
      approved: boolean
      approvedAt: Date | null
      approvedById: string | null
      audioUrl: string | null
      youtubeUrl: string | null
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointWithIdOnly = await prisma.point.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointUpdateManyAndReturnArgs>(args: SelectSubset<T, PointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
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
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends Point$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, Point$approvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sections<T extends Point$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Point$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Point$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Point$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Point model
   */
  interface PointFieldRefs {
    readonly id: FieldRef<"Point", 'String'>
    readonly title: FieldRef<"Point", 'String'>
    readonly slug: FieldRef<"Point", 'String'>
    readonly description: FieldRef<"Point", 'String'>
    readonly linha: FieldRef<"Point", 'Linha'>
    readonly type: FieldRef<"Point", 'PointType'>
    readonly createdAt: FieldRef<"Point", 'DateTime'>
    readonly createdById: FieldRef<"Point", 'String'>
    readonly approved: FieldRef<"Point", 'Boolean'>
    readonly approvedAt: FieldRef<"Point", 'DateTime'>
    readonly approvedById: FieldRef<"Point", 'String'>
    readonly audioUrl: FieldRef<"Point", 'String'>
    readonly youtubeUrl: FieldRef<"Point", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Point updateManyAndReturn
   */
  export type PointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Point.approvedBy
   */
  export type Point$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Point.sections
   */
  export type Point$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Point.favorites
   */
  export type Point$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    order: number | null
  }

  export type SectionSumAggregateOutputType = {
    order: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    order: number | null
    text: string | null
    pointId: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    order: number | null
    text: string | null
    pointId: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    order: number
    text: number
    pointId: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    order?: true
  }

  export type SectionSumAggregateInputType = {
    order?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    order?: true
    text?: true
    pointId?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    order?: true
    text?: true
    pointId?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    order?: true
    text?: true
    pointId?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    order: number
    text: string
    pointId: string
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    text?: boolean
    pointId?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
    beats?: boolean | Section$beatsArgs<ExtArgs>
    audios?: boolean | Section$audiosArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    text?: boolean
    pointId?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    text?: boolean
    pointId?: boolean
    point?: boolean | PointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    order?: boolean
    text?: boolean
    pointId?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "text" | "pointId", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
    beats?: boolean | Section$beatsArgs<ExtArgs>
    audios?: boolean | Section$audiosArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point?: boolean | PointDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      point: Prisma.$PointPayload<ExtArgs>
      beats: Prisma.$BeatPayload<ExtArgs>[]
      audios: Prisma.$SectionAudioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      text: string
      pointId: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    point<T extends PointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PointDefaultArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    beats<T extends Section$beatsArgs<ExtArgs> = {}>(args?: Subset<T, Section$beatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audios<T extends Section$audiosArgs<ExtArgs> = {}>(args?: Subset<T, Section$audiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly order: FieldRef<"Section", 'Int'>
    readonly text: FieldRef<"Section", 'String'>
    readonly pointId: FieldRef<"Section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.beats
   */
  export type Section$beatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    where?: BeatWhereInput
    orderBy?: BeatOrderByWithRelationInput | BeatOrderByWithRelationInput[]
    cursor?: BeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeatScalarFieldEnum | BeatScalarFieldEnum[]
  }

  /**
   * Section.audios
   */
  export type Section$audiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    where?: SectionAudioWhereInput
    orderBy?: SectionAudioOrderByWithRelationInput | SectionAudioOrderByWithRelationInput[]
    cursor?: SectionAudioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionAudioScalarFieldEnum | SectionAudioScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Beat
   */

  export type AggregateBeat = {
    _count: BeatCountAggregateOutputType | null
    _avg: BeatAvgAggregateOutputType | null
    _sum: BeatSumAggregateOutputType | null
    _min: BeatMinAggregateOutputType | null
    _max: BeatMaxAggregateOutputType | null
  }

  export type BeatAvgAggregateOutputType = {
    order: number | null
  }

  export type BeatSumAggregateOutputType = {
    order: number | null
  }

  export type BeatMinAggregateOutputType = {
    id: string | null
    pattern: string | null
    order: number | null
    sectionId: string | null
  }

  export type BeatMaxAggregateOutputType = {
    id: string | null
    pattern: string | null
    order: number | null
    sectionId: string | null
  }

  export type BeatCountAggregateOutputType = {
    id: number
    pattern: number
    order: number
    sectionId: number
    _all: number
  }


  export type BeatAvgAggregateInputType = {
    order?: true
  }

  export type BeatSumAggregateInputType = {
    order?: true
  }

  export type BeatMinAggregateInputType = {
    id?: true
    pattern?: true
    order?: true
    sectionId?: true
  }

  export type BeatMaxAggregateInputType = {
    id?: true
    pattern?: true
    order?: true
    sectionId?: true
  }

  export type BeatCountAggregateInputType = {
    id?: true
    pattern?: true
    order?: true
    sectionId?: true
    _all?: true
  }

  export type BeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beat to aggregate.
     */
    where?: BeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beats to fetch.
     */
    orderBy?: BeatOrderByWithRelationInput | BeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beats
    **/
    _count?: true | BeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeatMaxAggregateInputType
  }

  export type GetBeatAggregateType<T extends BeatAggregateArgs> = {
        [P in keyof T & keyof AggregateBeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeat[P]>
      : GetScalarType<T[P], AggregateBeat[P]>
  }




  export type BeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeatWhereInput
    orderBy?: BeatOrderByWithAggregationInput | BeatOrderByWithAggregationInput[]
    by: BeatScalarFieldEnum[] | BeatScalarFieldEnum
    having?: BeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeatCountAggregateInputType | true
    _avg?: BeatAvgAggregateInputType
    _sum?: BeatSumAggregateInputType
    _min?: BeatMinAggregateInputType
    _max?: BeatMaxAggregateInputType
  }

  export type BeatGroupByOutputType = {
    id: string
    pattern: string
    order: number
    sectionId: string
    _count: BeatCountAggregateOutputType | null
    _avg: BeatAvgAggregateOutputType | null
    _sum: BeatSumAggregateOutputType | null
    _min: BeatMinAggregateOutputType | null
    _max: BeatMaxAggregateOutputType | null
  }

  type GetBeatGroupByPayload<T extends BeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeatGroupByOutputType[P]>
            : GetScalarType<T[P], BeatGroupByOutputType[P]>
        }
      >
    >


  export type BeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pattern?: boolean
    order?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beat"]>

  export type BeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pattern?: boolean
    order?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beat"]>

  export type BeatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pattern?: boolean
    order?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beat"]>

  export type BeatSelectScalar = {
    id?: boolean
    pattern?: boolean
    order?: boolean
    sectionId?: boolean
  }

  export type BeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pattern" | "order" | "sectionId", ExtArgs["result"]["beat"]>
  export type BeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type BeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type BeatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $BeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beat"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pattern: string
      order: number
      sectionId: string
    }, ExtArgs["result"]["beat"]>
    composites: {}
  }

  type BeatGetPayload<S extends boolean | null | undefined | BeatDefaultArgs> = $Result.GetResult<Prisma.$BeatPayload, S>

  type BeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeatCountAggregateInputType | true
    }

  export interface BeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Beat'], meta: { name: 'Beat' } }
    /**
     * Find zero or one Beat that matches the filter.
     * @param {BeatFindUniqueArgs} args - Arguments to find a Beat
     * @example
     * // Get one Beat
     * const beat = await prisma.beat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeatFindUniqueArgs>(args: SelectSubset<T, BeatFindUniqueArgs<ExtArgs>>): Prisma__BeatClient<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Beat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeatFindUniqueOrThrowArgs} args - Arguments to find a Beat
     * @example
     * // Get one Beat
     * const beat = await prisma.beat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeatFindUniqueOrThrowArgs>(args: SelectSubset<T, BeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeatClient<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeatFindFirstArgs} args - Arguments to find a Beat
     * @example
     * // Get one Beat
     * const beat = await prisma.beat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeatFindFirstArgs>(args?: SelectSubset<T, BeatFindFirstArgs<ExtArgs>>): Prisma__BeatClient<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeatFindFirstOrThrowArgs} args - Arguments to find a Beat
     * @example
     * // Get one Beat
     * const beat = await prisma.beat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeatFindFirstOrThrowArgs>(args?: SelectSubset<T, BeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeatClient<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beats
     * const beats = await prisma.beat.findMany()
     * 
     * // Get first 10 Beats
     * const beats = await prisma.beat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beatWithIdOnly = await prisma.beat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeatFindManyArgs>(args?: SelectSubset<T, BeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Beat.
     * @param {BeatCreateArgs} args - Arguments to create a Beat.
     * @example
     * // Create one Beat
     * const Beat = await prisma.beat.create({
     *   data: {
     *     // ... data to create a Beat
     *   }
     * })
     * 
     */
    create<T extends BeatCreateArgs>(args: SelectSubset<T, BeatCreateArgs<ExtArgs>>): Prisma__BeatClient<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beats.
     * @param {BeatCreateManyArgs} args - Arguments to create many Beats.
     * @example
     * // Create many Beats
     * const beat = await prisma.beat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeatCreateManyArgs>(args?: SelectSubset<T, BeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beats and returns the data saved in the database.
     * @param {BeatCreateManyAndReturnArgs} args - Arguments to create many Beats.
     * @example
     * // Create many Beats
     * const beat = await prisma.beat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beats and only return the `id`
     * const beatWithIdOnly = await prisma.beat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BeatCreateManyAndReturnArgs>(args?: SelectSubset<T, BeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Beat.
     * @param {BeatDeleteArgs} args - Arguments to delete one Beat.
     * @example
     * // Delete one Beat
     * const Beat = await prisma.beat.delete({
     *   where: {
     *     // ... filter to delete one Beat
     *   }
     * })
     * 
     */
    delete<T extends BeatDeleteArgs>(args: SelectSubset<T, BeatDeleteArgs<ExtArgs>>): Prisma__BeatClient<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Beat.
     * @param {BeatUpdateArgs} args - Arguments to update one Beat.
     * @example
     * // Update one Beat
     * const beat = await prisma.beat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeatUpdateArgs>(args: SelectSubset<T, BeatUpdateArgs<ExtArgs>>): Prisma__BeatClient<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beats.
     * @param {BeatDeleteManyArgs} args - Arguments to filter Beats to delete.
     * @example
     * // Delete a few Beats
     * const { count } = await prisma.beat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeatDeleteManyArgs>(args?: SelectSubset<T, BeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beats
     * const beat = await prisma.beat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeatUpdateManyArgs>(args: SelectSubset<T, BeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beats and returns the data updated in the database.
     * @param {BeatUpdateManyAndReturnArgs} args - Arguments to update many Beats.
     * @example
     * // Update many Beats
     * const beat = await prisma.beat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Beats and only return the `id`
     * const beatWithIdOnly = await prisma.beat.updateManyAndReturn({
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
    updateManyAndReturn<T extends BeatUpdateManyAndReturnArgs>(args: SelectSubset<T, BeatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Beat.
     * @param {BeatUpsertArgs} args - Arguments to update or create a Beat.
     * @example
     * // Update or create a Beat
     * const beat = await prisma.beat.upsert({
     *   create: {
     *     // ... data to create a Beat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beat we want to update
     *   }
     * })
     */
    upsert<T extends BeatUpsertArgs>(args: SelectSubset<T, BeatUpsertArgs<ExtArgs>>): Prisma__BeatClient<$Result.GetResult<Prisma.$BeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeatCountArgs} args - Arguments to filter Beats to count.
     * @example
     * // Count the number of Beats
     * const count = await prisma.beat.count({
     *   where: {
     *     // ... the filter for the Beats we want to count
     *   }
     * })
    **/
    count<T extends BeatCountArgs>(
      args?: Subset<T, BeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeatAggregateArgs>(args: Subset<T, BeatAggregateArgs>): Prisma.PrismaPromise<GetBeatAggregateType<T>>

    /**
     * Group by Beat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeatGroupByArgs} args - Group by arguments.
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
      T extends BeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeatGroupByArgs['orderBy'] }
        : { orderBy?: BeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Beat model
   */
  readonly fields: BeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Beat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Beat model
   */
  interface BeatFieldRefs {
    readonly id: FieldRef<"Beat", 'String'>
    readonly pattern: FieldRef<"Beat", 'String'>
    readonly order: FieldRef<"Beat", 'Int'>
    readonly sectionId: FieldRef<"Beat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Beat findUnique
   */
  export type BeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * Filter, which Beat to fetch.
     */
    where: BeatWhereUniqueInput
  }

  /**
   * Beat findUniqueOrThrow
   */
  export type BeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * Filter, which Beat to fetch.
     */
    where: BeatWhereUniqueInput
  }

  /**
   * Beat findFirst
   */
  export type BeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * Filter, which Beat to fetch.
     */
    where?: BeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beats to fetch.
     */
    orderBy?: BeatOrderByWithRelationInput | BeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beats.
     */
    cursor?: BeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beats.
     */
    distinct?: BeatScalarFieldEnum | BeatScalarFieldEnum[]
  }

  /**
   * Beat findFirstOrThrow
   */
  export type BeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * Filter, which Beat to fetch.
     */
    where?: BeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beats to fetch.
     */
    orderBy?: BeatOrderByWithRelationInput | BeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beats.
     */
    cursor?: BeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beats.
     */
    distinct?: BeatScalarFieldEnum | BeatScalarFieldEnum[]
  }

  /**
   * Beat findMany
   */
  export type BeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * Filter, which Beats to fetch.
     */
    where?: BeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beats to fetch.
     */
    orderBy?: BeatOrderByWithRelationInput | BeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beats.
     */
    cursor?: BeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beats.
     */
    skip?: number
    distinct?: BeatScalarFieldEnum | BeatScalarFieldEnum[]
  }

  /**
   * Beat create
   */
  export type BeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Beat.
     */
    data: XOR<BeatCreateInput, BeatUncheckedCreateInput>
  }

  /**
   * Beat createMany
   */
  export type BeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beats.
     */
    data: BeatCreateManyInput | BeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Beat createManyAndReturn
   */
  export type BeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * The data used to create many Beats.
     */
    data: BeatCreateManyInput | BeatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Beat update
   */
  export type BeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Beat.
     */
    data: XOR<BeatUpdateInput, BeatUncheckedUpdateInput>
    /**
     * Choose, which Beat to update.
     */
    where: BeatWhereUniqueInput
  }

  /**
   * Beat updateMany
   */
  export type BeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beats.
     */
    data: XOR<BeatUpdateManyMutationInput, BeatUncheckedUpdateManyInput>
    /**
     * Filter which Beats to update
     */
    where?: BeatWhereInput
    /**
     * Limit how many Beats to update.
     */
    limit?: number
  }

  /**
   * Beat updateManyAndReturn
   */
  export type BeatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * The data used to update Beats.
     */
    data: XOR<BeatUpdateManyMutationInput, BeatUncheckedUpdateManyInput>
    /**
     * Filter which Beats to update
     */
    where?: BeatWhereInput
    /**
     * Limit how many Beats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Beat upsert
   */
  export type BeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Beat to update in case it exists.
     */
    where: BeatWhereUniqueInput
    /**
     * In case the Beat found by the `where` argument doesn't exist, create a new Beat with this data.
     */
    create: XOR<BeatCreateInput, BeatUncheckedCreateInput>
    /**
     * In case the Beat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeatUpdateInput, BeatUncheckedUpdateInput>
  }

  /**
   * Beat delete
   */
  export type BeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
    /**
     * Filter which Beat to delete.
     */
    where: BeatWhereUniqueInput
  }

  /**
   * Beat deleteMany
   */
  export type BeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beats to delete
     */
    where?: BeatWhereInput
    /**
     * Limit how many Beats to delete.
     */
    limit?: number
  }

  /**
   * Beat without action
   */
  export type BeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beat
     */
    select?: BeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beat
     */
    omit?: BeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeatInclude<ExtArgs> | null
  }


  /**
   * Model SectionAudio
   */

  export type AggregateSectionAudio = {
    _count: SectionAudioCountAggregateOutputType | null
    _min: SectionAudioMinAggregateOutputType | null
    _max: SectionAudioMaxAggregateOutputType | null
  }

  export type SectionAudioMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    approved: boolean | null
    sectionId: string | null
    uploadedById: string | null
  }

  export type SectionAudioMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    approved: boolean | null
    sectionId: string | null
    uploadedById: string | null
  }

  export type SectionAudioCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    approved: number
    sectionId: number
    uploadedById: number
    _all: number
  }


  export type SectionAudioMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    approved?: true
    sectionId?: true
    uploadedById?: true
  }

  export type SectionAudioMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    approved?: true
    sectionId?: true
    uploadedById?: true
  }

  export type SectionAudioCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    approved?: true
    sectionId?: true
    uploadedById?: true
    _all?: true
  }

  export type SectionAudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionAudio to aggregate.
     */
    where?: SectionAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionAudios to fetch.
     */
    orderBy?: SectionAudioOrderByWithRelationInput | SectionAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionAudios
    **/
    _count?: true | SectionAudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionAudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionAudioMaxAggregateInputType
  }

  export type GetSectionAudioAggregateType<T extends SectionAudioAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionAudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionAudio[P]>
      : GetScalarType<T[P], AggregateSectionAudio[P]>
  }




  export type SectionAudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionAudioWhereInput
    orderBy?: SectionAudioOrderByWithAggregationInput | SectionAudioOrderByWithAggregationInput[]
    by: SectionAudioScalarFieldEnum[] | SectionAudioScalarFieldEnum
    having?: SectionAudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionAudioCountAggregateInputType | true
    _min?: SectionAudioMinAggregateInputType
    _max?: SectionAudioMaxAggregateInputType
  }

  export type SectionAudioGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    approved: boolean
    sectionId: string
    uploadedById: string
    _count: SectionAudioCountAggregateOutputType | null
    _min: SectionAudioMinAggregateOutputType | null
    _max: SectionAudioMaxAggregateOutputType | null
  }

  type GetSectionAudioGroupByPayload<T extends SectionAudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionAudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionAudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionAudioGroupByOutputType[P]>
            : GetScalarType<T[P], SectionAudioGroupByOutputType[P]>
        }
      >
    >


  export type SectionAudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    approved?: boolean
    sectionId?: boolean
    uploadedById?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionAudio"]>

  export type SectionAudioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    approved?: boolean
    sectionId?: boolean
    uploadedById?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionAudio"]>

  export type SectionAudioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    approved?: boolean
    sectionId?: boolean
    uploadedById?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionAudio"]>

  export type SectionAudioSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    approved?: boolean
    sectionId?: boolean
    uploadedById?: boolean
  }

  export type SectionAudioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "approved" | "sectionId" | "uploadedById", ExtArgs["result"]["sectionAudio"]>
  export type SectionAudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SectionAudioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SectionAudioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SectionAudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionAudio"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      uploadedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      approved: boolean
      sectionId: string
      uploadedById: string
    }, ExtArgs["result"]["sectionAudio"]>
    composites: {}
  }

  type SectionAudioGetPayload<S extends boolean | null | undefined | SectionAudioDefaultArgs> = $Result.GetResult<Prisma.$SectionAudioPayload, S>

  type SectionAudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionAudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionAudioCountAggregateInputType | true
    }

  export interface SectionAudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionAudio'], meta: { name: 'SectionAudio' } }
    /**
     * Find zero or one SectionAudio that matches the filter.
     * @param {SectionAudioFindUniqueArgs} args - Arguments to find a SectionAudio
     * @example
     * // Get one SectionAudio
     * const sectionAudio = await prisma.sectionAudio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionAudioFindUniqueArgs>(args: SelectSubset<T, SectionAudioFindUniqueArgs<ExtArgs>>): Prisma__SectionAudioClient<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectionAudio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionAudioFindUniqueOrThrowArgs} args - Arguments to find a SectionAudio
     * @example
     * // Get one SectionAudio
     * const sectionAudio = await prisma.sectionAudio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionAudioFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionAudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionAudioClient<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionAudio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAudioFindFirstArgs} args - Arguments to find a SectionAudio
     * @example
     * // Get one SectionAudio
     * const sectionAudio = await prisma.sectionAudio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionAudioFindFirstArgs>(args?: SelectSubset<T, SectionAudioFindFirstArgs<ExtArgs>>): Prisma__SectionAudioClient<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionAudio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAudioFindFirstOrThrowArgs} args - Arguments to find a SectionAudio
     * @example
     * // Get one SectionAudio
     * const sectionAudio = await prisma.sectionAudio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionAudioFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionAudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionAudioClient<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectionAudios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionAudios
     * const sectionAudios = await prisma.sectionAudio.findMany()
     * 
     * // Get first 10 SectionAudios
     * const sectionAudios = await prisma.sectionAudio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionAudioWithIdOnly = await prisma.sectionAudio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionAudioFindManyArgs>(args?: SelectSubset<T, SectionAudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectionAudio.
     * @param {SectionAudioCreateArgs} args - Arguments to create a SectionAudio.
     * @example
     * // Create one SectionAudio
     * const SectionAudio = await prisma.sectionAudio.create({
     *   data: {
     *     // ... data to create a SectionAudio
     *   }
     * })
     * 
     */
    create<T extends SectionAudioCreateArgs>(args: SelectSubset<T, SectionAudioCreateArgs<ExtArgs>>): Prisma__SectionAudioClient<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectionAudios.
     * @param {SectionAudioCreateManyArgs} args - Arguments to create many SectionAudios.
     * @example
     * // Create many SectionAudios
     * const sectionAudio = await prisma.sectionAudio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionAudioCreateManyArgs>(args?: SelectSubset<T, SectionAudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionAudios and returns the data saved in the database.
     * @param {SectionAudioCreateManyAndReturnArgs} args - Arguments to create many SectionAudios.
     * @example
     * // Create many SectionAudios
     * const sectionAudio = await prisma.sectionAudio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionAudios and only return the `id`
     * const sectionAudioWithIdOnly = await prisma.sectionAudio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionAudioCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionAudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SectionAudio.
     * @param {SectionAudioDeleteArgs} args - Arguments to delete one SectionAudio.
     * @example
     * // Delete one SectionAudio
     * const SectionAudio = await prisma.sectionAudio.delete({
     *   where: {
     *     // ... filter to delete one SectionAudio
     *   }
     * })
     * 
     */
    delete<T extends SectionAudioDeleteArgs>(args: SelectSubset<T, SectionAudioDeleteArgs<ExtArgs>>): Prisma__SectionAudioClient<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectionAudio.
     * @param {SectionAudioUpdateArgs} args - Arguments to update one SectionAudio.
     * @example
     * // Update one SectionAudio
     * const sectionAudio = await prisma.sectionAudio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionAudioUpdateArgs>(args: SelectSubset<T, SectionAudioUpdateArgs<ExtArgs>>): Prisma__SectionAudioClient<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectionAudios.
     * @param {SectionAudioDeleteManyArgs} args - Arguments to filter SectionAudios to delete.
     * @example
     * // Delete a few SectionAudios
     * const { count } = await prisma.sectionAudio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionAudioDeleteManyArgs>(args?: SelectSubset<T, SectionAudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionAudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionAudios
     * const sectionAudio = await prisma.sectionAudio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionAudioUpdateManyArgs>(args: SelectSubset<T, SectionAudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionAudios and returns the data updated in the database.
     * @param {SectionAudioUpdateManyAndReturnArgs} args - Arguments to update many SectionAudios.
     * @example
     * // Update many SectionAudios
     * const sectionAudio = await prisma.sectionAudio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SectionAudios and only return the `id`
     * const sectionAudioWithIdOnly = await prisma.sectionAudio.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionAudioUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionAudioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SectionAudio.
     * @param {SectionAudioUpsertArgs} args - Arguments to update or create a SectionAudio.
     * @example
     * // Update or create a SectionAudio
     * const sectionAudio = await prisma.sectionAudio.upsert({
     *   create: {
     *     // ... data to create a SectionAudio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionAudio we want to update
     *   }
     * })
     */
    upsert<T extends SectionAudioUpsertArgs>(args: SelectSubset<T, SectionAudioUpsertArgs<ExtArgs>>): Prisma__SectionAudioClient<$Result.GetResult<Prisma.$SectionAudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectionAudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAudioCountArgs} args - Arguments to filter SectionAudios to count.
     * @example
     * // Count the number of SectionAudios
     * const count = await prisma.sectionAudio.count({
     *   where: {
     *     // ... the filter for the SectionAudios we want to count
     *   }
     * })
    **/
    count<T extends SectionAudioCountArgs>(
      args?: Subset<T, SectionAudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionAudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionAudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAudioAggregateArgs>(args: Subset<T, SectionAudioAggregateArgs>): Prisma.PrismaPromise<GetSectionAudioAggregateType<T>>

    /**
     * Group by SectionAudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAudioGroupByArgs} args - Group by arguments.
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
      T extends SectionAudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionAudioGroupByArgs['orderBy'] }
        : { orderBy?: SectionAudioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionAudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionAudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionAudio model
   */
  readonly fields: SectionAudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionAudio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionAudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SectionAudio model
   */
  interface SectionAudioFieldRefs {
    readonly id: FieldRef<"SectionAudio", 'String'>
    readonly url: FieldRef<"SectionAudio", 'String'>
    readonly createdAt: FieldRef<"SectionAudio", 'DateTime'>
    readonly approved: FieldRef<"SectionAudio", 'Boolean'>
    readonly sectionId: FieldRef<"SectionAudio", 'String'>
    readonly uploadedById: FieldRef<"SectionAudio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SectionAudio findUnique
   */
  export type SectionAudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * Filter, which SectionAudio to fetch.
     */
    where: SectionAudioWhereUniqueInput
  }

  /**
   * SectionAudio findUniqueOrThrow
   */
  export type SectionAudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * Filter, which SectionAudio to fetch.
     */
    where: SectionAudioWhereUniqueInput
  }

  /**
   * SectionAudio findFirst
   */
  export type SectionAudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * Filter, which SectionAudio to fetch.
     */
    where?: SectionAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionAudios to fetch.
     */
    orderBy?: SectionAudioOrderByWithRelationInput | SectionAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionAudios.
     */
    cursor?: SectionAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionAudios.
     */
    distinct?: SectionAudioScalarFieldEnum | SectionAudioScalarFieldEnum[]
  }

  /**
   * SectionAudio findFirstOrThrow
   */
  export type SectionAudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * Filter, which SectionAudio to fetch.
     */
    where?: SectionAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionAudios to fetch.
     */
    orderBy?: SectionAudioOrderByWithRelationInput | SectionAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionAudios.
     */
    cursor?: SectionAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionAudios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionAudios.
     */
    distinct?: SectionAudioScalarFieldEnum | SectionAudioScalarFieldEnum[]
  }

  /**
   * SectionAudio findMany
   */
  export type SectionAudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * Filter, which SectionAudios to fetch.
     */
    where?: SectionAudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionAudios to fetch.
     */
    orderBy?: SectionAudioOrderByWithRelationInput | SectionAudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionAudios.
     */
    cursor?: SectionAudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionAudios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionAudios.
     */
    skip?: number
    distinct?: SectionAudioScalarFieldEnum | SectionAudioScalarFieldEnum[]
  }

  /**
   * SectionAudio create
   */
  export type SectionAudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionAudio.
     */
    data: XOR<SectionAudioCreateInput, SectionAudioUncheckedCreateInput>
  }

  /**
   * SectionAudio createMany
   */
  export type SectionAudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionAudios.
     */
    data: SectionAudioCreateManyInput | SectionAudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionAudio createManyAndReturn
   */
  export type SectionAudioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * The data used to create many SectionAudios.
     */
    data: SectionAudioCreateManyInput | SectionAudioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionAudio update
   */
  export type SectionAudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionAudio.
     */
    data: XOR<SectionAudioUpdateInput, SectionAudioUncheckedUpdateInput>
    /**
     * Choose, which SectionAudio to update.
     */
    where: SectionAudioWhereUniqueInput
  }

  /**
   * SectionAudio updateMany
   */
  export type SectionAudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionAudios.
     */
    data: XOR<SectionAudioUpdateManyMutationInput, SectionAudioUncheckedUpdateManyInput>
    /**
     * Filter which SectionAudios to update
     */
    where?: SectionAudioWhereInput
    /**
     * Limit how many SectionAudios to update.
     */
    limit?: number
  }

  /**
   * SectionAudio updateManyAndReturn
   */
  export type SectionAudioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * The data used to update SectionAudios.
     */
    data: XOR<SectionAudioUpdateManyMutationInput, SectionAudioUncheckedUpdateManyInput>
    /**
     * Filter which SectionAudios to update
     */
    where?: SectionAudioWhereInput
    /**
     * Limit how many SectionAudios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionAudio upsert
   */
  export type SectionAudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionAudio to update in case it exists.
     */
    where: SectionAudioWhereUniqueInput
    /**
     * In case the SectionAudio found by the `where` argument doesn't exist, create a new SectionAudio with this data.
     */
    create: XOR<SectionAudioCreateInput, SectionAudioUncheckedCreateInput>
    /**
     * In case the SectionAudio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionAudioUpdateInput, SectionAudioUncheckedUpdateInput>
  }

  /**
   * SectionAudio delete
   */
  export type SectionAudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
    /**
     * Filter which SectionAudio to delete.
     */
    where: SectionAudioWhereUniqueInput
  }

  /**
   * SectionAudio deleteMany
   */
  export type SectionAudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionAudios to delete
     */
    where?: SectionAudioWhereInput
    /**
     * Limit how many SectionAudios to delete.
     */
    limit?: number
  }

  /**
   * SectionAudio without action
   */
  export type SectionAudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionAudio
     */
    select?: SectionAudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionAudio
     */
    omit?: SectionAudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionAudioInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    userId: string | null
    pointId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    userId: string | null
    pointId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    userId: number
    pointId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    userId?: true
    pointId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    userId?: true
    pointId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    userId?: true
    pointId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    userId: string
    pointId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    pointId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    pointId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    pointId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    userId?: boolean
    pointId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "pointId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    point?: boolean | PointDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      point: Prisma.$PointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      pointId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `userId`
     * const favoriteWithUserIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    point<T extends PointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PointDefaultArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly pointId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
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
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PointScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    linha: 'linha',
    type: 'type',
    createdAt: 'createdAt',
    createdById: 'createdById',
    approved: 'approved',
    approvedAt: 'approvedAt',
    approvedById: 'approvedById',
    audioUrl: 'audioUrl',
    youtubeUrl: 'youtubeUrl'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    order: 'order',
    text: 'text',
    pointId: 'pointId'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const BeatScalarFieldEnum: {
    id: 'id',
    pattern: 'pattern',
    order: 'order',
    sectionId: 'sectionId'
  };

  export type BeatScalarFieldEnum = (typeof BeatScalarFieldEnum)[keyof typeof BeatScalarFieldEnum]


  export const SectionAudioScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    approved: 'approved',
    sectionId: 'sectionId',
    uploadedById: 'uploadedById'
  };

  export type SectionAudioScalarFieldEnum = (typeof SectionAudioScalarFieldEnum)[keyof typeof SectionAudioScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    userId: 'userId',
    pointId: 'pointId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Linha'
   */
  export type EnumLinhaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Linha'>
    


  /**
   * Reference to a field of type 'Linha[]'
   */
  export type ListEnumLinhaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Linha[]'>
    


  /**
   * Reference to a field of type 'PointType'
   */
  export type EnumPointTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointType'>
    


  /**
   * Reference to a field of type 'PointType[]'
   */
  export type ListEnumPointTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    pointsCreated?: PointListRelationFilter
    sectionAudios?: SectionAudioListRelationFilter
    favorites?: FavoriteListRelationFilter
    approvals?: PointListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    pointsCreated?: PointOrderByRelationAggregateInput
    sectionAudios?: SectionAudioOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    approvals?: PointOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    pointsCreated?: PointListRelationFilter
    sectionAudios?: SectionAudioListRelationFilter
    favorites?: FavoriteListRelationFilter
    approvals?: PointListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    id?: StringFilter<"Point"> | string
    title?: StringFilter<"Point"> | string
    slug?: StringFilter<"Point"> | string
    description?: StringNullableFilter<"Point"> | string | null
    linha?: EnumLinhaFilter<"Point"> | $Enums.Linha
    type?: EnumPointTypeFilter<"Point"> | $Enums.PointType
    createdAt?: DateTimeFilter<"Point"> | Date | string
    createdById?: StringFilter<"Point"> | string
    approved?: BoolFilter<"Point"> | boolean
    approvedAt?: DateTimeNullableFilter<"Point"> | Date | string | null
    approvedById?: StringNullableFilter<"Point"> | string | null
    audioUrl?: StringNullableFilter<"Point"> | string | null
    youtubeUrl?: StringNullableFilter<"Point"> | string | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sections?: SectionListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type PointOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    linha?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    approved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    youtubeUrl?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
    sections?: SectionOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    title?: StringFilter<"Point"> | string
    description?: StringNullableFilter<"Point"> | string | null
    linha?: EnumLinhaFilter<"Point"> | $Enums.Linha
    type?: EnumPointTypeFilter<"Point"> | $Enums.PointType
    createdAt?: DateTimeFilter<"Point"> | Date | string
    createdById?: StringFilter<"Point"> | string
    approved?: BoolFilter<"Point"> | boolean
    approvedAt?: DateTimeNullableFilter<"Point"> | Date | string | null
    approvedById?: StringNullableFilter<"Point"> | string | null
    audioUrl?: StringNullableFilter<"Point"> | string | null
    youtubeUrl?: StringNullableFilter<"Point"> | string | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    sections?: SectionListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id" | "slug">

  export type PointOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    linha?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    approved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    audioUrl?: SortOrderInput | SortOrder
    youtubeUrl?: SortOrderInput | SortOrder
    _count?: PointCountOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Point"> | string
    title?: StringWithAggregatesFilter<"Point"> | string
    slug?: StringWithAggregatesFilter<"Point"> | string
    description?: StringNullableWithAggregatesFilter<"Point"> | string | null
    linha?: EnumLinhaWithAggregatesFilter<"Point"> | $Enums.Linha
    type?: EnumPointTypeWithAggregatesFilter<"Point"> | $Enums.PointType
    createdAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    createdById?: StringWithAggregatesFilter<"Point"> | string
    approved?: BoolWithAggregatesFilter<"Point"> | boolean
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Point"> | Date | string | null
    approvedById?: StringNullableWithAggregatesFilter<"Point"> | string | null
    audioUrl?: StringNullableWithAggregatesFilter<"Point"> | string | null
    youtubeUrl?: StringNullableWithAggregatesFilter<"Point"> | string | null
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    order?: IntFilter<"Section"> | number
    text?: StringFilter<"Section"> | string
    pointId?: StringFilter<"Section"> | string
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
    beats?: BeatListRelationFilter
    audios?: SectionAudioListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    text?: SortOrder
    pointId?: SortOrder
    point?: PointOrderByWithRelationInput
    beats?: BeatOrderByRelationAggregateInput
    audios?: SectionAudioOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pointId_order?: SectionPointIdOrderCompoundUniqueInput
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    order?: IntFilter<"Section"> | number
    text?: StringFilter<"Section"> | string
    pointId?: StringFilter<"Section"> | string
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
    beats?: BeatListRelationFilter
    audios?: SectionAudioListRelationFilter
  }, "id" | "pointId_order">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    text?: SortOrder
    pointId?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    order?: IntWithAggregatesFilter<"Section"> | number
    text?: StringWithAggregatesFilter<"Section"> | string
    pointId?: StringWithAggregatesFilter<"Section"> | string
  }

  export type BeatWhereInput = {
    AND?: BeatWhereInput | BeatWhereInput[]
    OR?: BeatWhereInput[]
    NOT?: BeatWhereInput | BeatWhereInput[]
    id?: StringFilter<"Beat"> | string
    pattern?: StringFilter<"Beat"> | string
    order?: IntFilter<"Beat"> | number
    sectionId?: StringFilter<"Beat"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type BeatOrderByWithRelationInput = {
    id?: SortOrder
    pattern?: SortOrder
    order?: SortOrder
    sectionId?: SortOrder
    section?: SectionOrderByWithRelationInput
  }

  export type BeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sectionId_order?: BeatSectionIdOrderCompoundUniqueInput
    AND?: BeatWhereInput | BeatWhereInput[]
    OR?: BeatWhereInput[]
    NOT?: BeatWhereInput | BeatWhereInput[]
    pattern?: StringFilter<"Beat"> | string
    order?: IntFilter<"Beat"> | number
    sectionId?: StringFilter<"Beat"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id" | "sectionId_order">

  export type BeatOrderByWithAggregationInput = {
    id?: SortOrder
    pattern?: SortOrder
    order?: SortOrder
    sectionId?: SortOrder
    _count?: BeatCountOrderByAggregateInput
    _avg?: BeatAvgOrderByAggregateInput
    _max?: BeatMaxOrderByAggregateInput
    _min?: BeatMinOrderByAggregateInput
    _sum?: BeatSumOrderByAggregateInput
  }

  export type BeatScalarWhereWithAggregatesInput = {
    AND?: BeatScalarWhereWithAggregatesInput | BeatScalarWhereWithAggregatesInput[]
    OR?: BeatScalarWhereWithAggregatesInput[]
    NOT?: BeatScalarWhereWithAggregatesInput | BeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Beat"> | string
    pattern?: StringWithAggregatesFilter<"Beat"> | string
    order?: IntWithAggregatesFilter<"Beat"> | number
    sectionId?: StringWithAggregatesFilter<"Beat"> | string
  }

  export type SectionAudioWhereInput = {
    AND?: SectionAudioWhereInput | SectionAudioWhereInput[]
    OR?: SectionAudioWhereInput[]
    NOT?: SectionAudioWhereInput | SectionAudioWhereInput[]
    id?: StringFilter<"SectionAudio"> | string
    url?: StringFilter<"SectionAudio"> | string
    createdAt?: DateTimeFilter<"SectionAudio"> | Date | string
    approved?: BoolFilter<"SectionAudio"> | boolean
    sectionId?: StringFilter<"SectionAudio"> | string
    uploadedById?: StringFilter<"SectionAudio"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SectionAudioOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    approved?: SortOrder
    sectionId?: SortOrder
    uploadedById?: SortOrder
    section?: SectionOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
  }

  export type SectionAudioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionAudioWhereInput | SectionAudioWhereInput[]
    OR?: SectionAudioWhereInput[]
    NOT?: SectionAudioWhereInput | SectionAudioWhereInput[]
    url?: StringFilter<"SectionAudio"> | string
    createdAt?: DateTimeFilter<"SectionAudio"> | Date | string
    approved?: BoolFilter<"SectionAudio"> | boolean
    sectionId?: StringFilter<"SectionAudio"> | string
    uploadedById?: StringFilter<"SectionAudio"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SectionAudioOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    approved?: SortOrder
    sectionId?: SortOrder
    uploadedById?: SortOrder
    _count?: SectionAudioCountOrderByAggregateInput
    _max?: SectionAudioMaxOrderByAggregateInput
    _min?: SectionAudioMinOrderByAggregateInput
  }

  export type SectionAudioScalarWhereWithAggregatesInput = {
    AND?: SectionAudioScalarWhereWithAggregatesInput | SectionAudioScalarWhereWithAggregatesInput[]
    OR?: SectionAudioScalarWhereWithAggregatesInput[]
    NOT?: SectionAudioScalarWhereWithAggregatesInput | SectionAudioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SectionAudio"> | string
    url?: StringWithAggregatesFilter<"SectionAudio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SectionAudio"> | Date | string
    approved?: BoolWithAggregatesFilter<"SectionAudio"> | boolean
    sectionId?: StringWithAggregatesFilter<"SectionAudio"> | string
    uploadedById?: StringWithAggregatesFilter<"SectionAudio"> | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    pointId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    userId?: SortOrder
    pointId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    point?: PointOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    userId_pointId?: FavoriteUserIdPointIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    pointId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    point?: XOR<PointScalarRelationFilter, PointWhereInput>
  }, "userId_pointId">

  export type FavoriteOrderByWithAggregationInput = {
    userId?: SortOrder
    pointId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    pointId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pointsCreated?: PointCreateNestedManyWithoutCreatedByInput
    sectionAudios?: SectionAudioCreateNestedManyWithoutUploadedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    approvals?: PointCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pointsCreated?: PointUncheckedCreateNestedManyWithoutCreatedByInput
    sectionAudios?: SectionAudioUncheckedCreateNestedManyWithoutUploadedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    approvals?: PointUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsCreated?: PointUpdateManyWithoutCreatedByNestedInput
    sectionAudios?: SectionAudioUpdateManyWithoutUploadedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    approvals?: PointUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsCreated?: PointUncheckedUpdateManyWithoutCreatedByNestedInput
    sectionAudios?: SectionAudioUncheckedUpdateManyWithoutUploadedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    approvals?: PointUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    approved?: boolean
    approvedAt?: Date | string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    createdBy: UserCreateNestedOneWithoutPointsCreatedInput
    approvedBy?: UserCreateNestedOneWithoutApprovalsInput
    sections?: SectionCreateNestedManyWithoutPointInput
    favorites?: FavoriteCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    createdById: string
    approved?: boolean
    approvedAt?: Date | string | null
    approvedById?: string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    sections?: SectionUncheckedCreateNestedManyWithoutPointInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneRequiredWithoutPointsCreatedNestedInput
    approvedBy?: UserUpdateOneWithoutApprovalsNestedInput
    sections?: SectionUpdateManyWithoutPointNestedInput
    favorites?: FavoriteUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: SectionUncheckedUpdateManyWithoutPointNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPointNestedInput
  }

  export type PointCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    createdById: string
    approved?: boolean
    approvedAt?: Date | string | null
    approvedById?: string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
  }

  export type PointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SectionCreateInput = {
    id?: string
    order: number
    text: string
    point: PointCreateNestedOneWithoutSectionsInput
    beats?: BeatCreateNestedManyWithoutSectionInput
    audios?: SectionAudioCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    order: number
    text: string
    pointId: string
    beats?: BeatUncheckedCreateNestedManyWithoutSectionInput
    audios?: SectionAudioUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    point?: PointUpdateOneRequiredWithoutSectionsNestedInput
    beats?: BeatUpdateManyWithoutSectionNestedInput
    audios?: SectionAudioUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    beats?: BeatUncheckedUpdateManyWithoutSectionNestedInput
    audios?: SectionAudioUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    order: number
    text: string
    pointId: string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
  }

  export type BeatCreateInput = {
    id?: string
    pattern: string
    order: number
    section: SectionCreateNestedOneWithoutBeatsInput
  }

  export type BeatUncheckedCreateInput = {
    id?: string
    pattern: string
    order: number
    sectionId: string
  }

  export type BeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pattern?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutBeatsNestedInput
  }

  export type BeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pattern?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type BeatCreateManyInput = {
    id?: string
    pattern: string
    order: number
    sectionId: string
  }

  export type BeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pattern?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pattern?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionAudioCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    section: SectionCreateNestedOneWithoutAudiosInput
    uploadedBy: UserCreateNestedOneWithoutSectionAudiosInput
  }

  export type SectionAudioUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    sectionId: string
    uploadedById: string
  }

  export type SectionAudioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    section?: SectionUpdateOneRequiredWithoutAudiosNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutSectionAudiosNestedInput
  }

  export type SectionAudioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    sectionId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
  }

  export type SectionAudioCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    sectionId: string
    uploadedById: string
  }

  export type SectionAudioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SectionAudioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    sectionId?: StringFieldUpdateOperationsInput | string
    uploadedById?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    point: PointCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    userId: string
    pointId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    point?: PointUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    userId: string
    pointId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type SectionAudioListRelationFilter = {
    every?: SectionAudioWhereInput
    some?: SectionAudioWhereInput
    none?: SectionAudioWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionAudioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumLinhaFilter<$PrismaModel = never> = {
    equals?: $Enums.Linha | EnumLinhaFieldRefInput<$PrismaModel>
    in?: $Enums.Linha[] | ListEnumLinhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Linha[] | ListEnumLinhaFieldRefInput<$PrismaModel>
    not?: NestedEnumLinhaFilter<$PrismaModel> | $Enums.Linha
  }

  export type EnumPointTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointType | EnumPointTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointType[] | ListEnumPointTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointType[] | ListEnumPointTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointTypeFilter<$PrismaModel> | $Enums.PointType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    linha?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    approved?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
    audioUrl?: SortOrder
    youtubeUrl?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    linha?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    approved?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
    audioUrl?: SortOrder
    youtubeUrl?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    linha?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    approved?: SortOrder
    approvedAt?: SortOrder
    approvedById?: SortOrder
    audioUrl?: SortOrder
    youtubeUrl?: SortOrder
  }

  export type EnumLinhaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Linha | EnumLinhaFieldRefInput<$PrismaModel>
    in?: $Enums.Linha[] | ListEnumLinhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Linha[] | ListEnumLinhaFieldRefInput<$PrismaModel>
    not?: NestedEnumLinhaWithAggregatesFilter<$PrismaModel> | $Enums.Linha
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinhaFilter<$PrismaModel>
    _max?: NestedEnumLinhaFilter<$PrismaModel>
  }

  export type EnumPointTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointType | EnumPointTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointType[] | ListEnumPointTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointType[] | ListEnumPointTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointTypeFilter<$PrismaModel>
    _max?: NestedEnumPointTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type PointScalarRelationFilter = {
    is?: PointWhereInput
    isNot?: PointWhereInput
  }

  export type BeatListRelationFilter = {
    every?: BeatWhereInput
    some?: BeatWhereInput
    none?: BeatWhereInput
  }

  export type BeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionPointIdOrderCompoundUniqueInput = {
    pointId: string
    order: number
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    text?: SortOrder
    pointId?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    text?: SortOrder
    pointId?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    text?: SortOrder
    pointId?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type BeatSectionIdOrderCompoundUniqueInput = {
    sectionId: string
    order: number
  }

  export type BeatCountOrderByAggregateInput = {
    id?: SortOrder
    pattern?: SortOrder
    order?: SortOrder
    sectionId?: SortOrder
  }

  export type BeatAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BeatMaxOrderByAggregateInput = {
    id?: SortOrder
    pattern?: SortOrder
    order?: SortOrder
    sectionId?: SortOrder
  }

  export type BeatMinOrderByAggregateInput = {
    id?: SortOrder
    pattern?: SortOrder
    order?: SortOrder
    sectionId?: SortOrder
  }

  export type BeatSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SectionAudioCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    approved?: SortOrder
    sectionId?: SortOrder
    uploadedById?: SortOrder
  }

  export type SectionAudioMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    approved?: SortOrder
    sectionId?: SortOrder
    uploadedById?: SortOrder
  }

  export type SectionAudioMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    approved?: SortOrder
    sectionId?: SortOrder
    uploadedById?: SortOrder
  }

  export type FavoriteUserIdPointIdCompoundUniqueInput = {
    userId: string
    pointId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    userId?: SortOrder
    pointId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    userId?: SortOrder
    pointId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    userId?: SortOrder
    pointId?: SortOrder
    createdAt?: SortOrder
  }

  export type PointCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PointCreateWithoutCreatedByInput, PointUncheckedCreateWithoutCreatedByInput> | PointCreateWithoutCreatedByInput[] | PointUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PointCreateOrConnectWithoutCreatedByInput | PointCreateOrConnectWithoutCreatedByInput[]
    createMany?: PointCreateManyCreatedByInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type SectionAudioCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<SectionAudioCreateWithoutUploadedByInput, SectionAudioUncheckedCreateWithoutUploadedByInput> | SectionAudioCreateWithoutUploadedByInput[] | SectionAudioUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: SectionAudioCreateOrConnectWithoutUploadedByInput | SectionAudioCreateOrConnectWithoutUploadedByInput[]
    createMany?: SectionAudioCreateManyUploadedByInputEnvelope
    connect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type PointCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<PointCreateWithoutApprovedByInput, PointUncheckedCreateWithoutApprovedByInput> | PointCreateWithoutApprovedByInput[] | PointUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: PointCreateOrConnectWithoutApprovedByInput | PointCreateOrConnectWithoutApprovedByInput[]
    createMany?: PointCreateManyApprovedByInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type PointUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PointCreateWithoutCreatedByInput, PointUncheckedCreateWithoutCreatedByInput> | PointCreateWithoutCreatedByInput[] | PointUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PointCreateOrConnectWithoutCreatedByInput | PointCreateOrConnectWithoutCreatedByInput[]
    createMany?: PointCreateManyCreatedByInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type SectionAudioUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<SectionAudioCreateWithoutUploadedByInput, SectionAudioUncheckedCreateWithoutUploadedByInput> | SectionAudioCreateWithoutUploadedByInput[] | SectionAudioUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: SectionAudioCreateOrConnectWithoutUploadedByInput | SectionAudioCreateOrConnectWithoutUploadedByInput[]
    createMany?: SectionAudioCreateManyUploadedByInputEnvelope
    connect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type PointUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<PointCreateWithoutApprovedByInput, PointUncheckedCreateWithoutApprovedByInput> | PointCreateWithoutApprovedByInput[] | PointUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: PointCreateOrConnectWithoutApprovedByInput | PointCreateOrConnectWithoutApprovedByInput[]
    createMany?: PointCreateManyApprovedByInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PointUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PointCreateWithoutCreatedByInput, PointUncheckedCreateWithoutCreatedByInput> | PointCreateWithoutCreatedByInput[] | PointUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PointCreateOrConnectWithoutCreatedByInput | PointCreateOrConnectWithoutCreatedByInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutCreatedByInput | PointUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PointCreateManyCreatedByInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutCreatedByInput | PointUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PointUpdateManyWithWhereWithoutCreatedByInput | PointUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type SectionAudioUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<SectionAudioCreateWithoutUploadedByInput, SectionAudioUncheckedCreateWithoutUploadedByInput> | SectionAudioCreateWithoutUploadedByInput[] | SectionAudioUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: SectionAudioCreateOrConnectWithoutUploadedByInput | SectionAudioCreateOrConnectWithoutUploadedByInput[]
    upsert?: SectionAudioUpsertWithWhereUniqueWithoutUploadedByInput | SectionAudioUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: SectionAudioCreateManyUploadedByInputEnvelope
    set?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    disconnect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    delete?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    connect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    update?: SectionAudioUpdateWithWhereUniqueWithoutUploadedByInput | SectionAudioUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: SectionAudioUpdateManyWithWhereWithoutUploadedByInput | SectionAudioUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: SectionAudioScalarWhereInput | SectionAudioScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type PointUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<PointCreateWithoutApprovedByInput, PointUncheckedCreateWithoutApprovedByInput> | PointCreateWithoutApprovedByInput[] | PointUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: PointCreateOrConnectWithoutApprovedByInput | PointCreateOrConnectWithoutApprovedByInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutApprovedByInput | PointUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: PointCreateManyApprovedByInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutApprovedByInput | PointUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: PointUpdateManyWithWhereWithoutApprovedByInput | PointUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type PointUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PointCreateWithoutCreatedByInput, PointUncheckedCreateWithoutCreatedByInput> | PointCreateWithoutCreatedByInput[] | PointUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PointCreateOrConnectWithoutCreatedByInput | PointCreateOrConnectWithoutCreatedByInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutCreatedByInput | PointUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PointCreateManyCreatedByInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutCreatedByInput | PointUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PointUpdateManyWithWhereWithoutCreatedByInput | PointUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type SectionAudioUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<SectionAudioCreateWithoutUploadedByInput, SectionAudioUncheckedCreateWithoutUploadedByInput> | SectionAudioCreateWithoutUploadedByInput[] | SectionAudioUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: SectionAudioCreateOrConnectWithoutUploadedByInput | SectionAudioCreateOrConnectWithoutUploadedByInput[]
    upsert?: SectionAudioUpsertWithWhereUniqueWithoutUploadedByInput | SectionAudioUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: SectionAudioCreateManyUploadedByInputEnvelope
    set?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    disconnect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    delete?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    connect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    update?: SectionAudioUpdateWithWhereUniqueWithoutUploadedByInput | SectionAudioUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: SectionAudioUpdateManyWithWhereWithoutUploadedByInput | SectionAudioUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: SectionAudioScalarWhereInput | SectionAudioScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type PointUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<PointCreateWithoutApprovedByInput, PointUncheckedCreateWithoutApprovedByInput> | PointCreateWithoutApprovedByInput[] | PointUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: PointCreateOrConnectWithoutApprovedByInput | PointCreateOrConnectWithoutApprovedByInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutApprovedByInput | PointUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: PointCreateManyApprovedByInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutApprovedByInput | PointUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: PointUpdateManyWithWhereWithoutApprovedByInput | PointUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPointsCreatedInput = {
    create?: XOR<UserCreateWithoutPointsCreatedInput, UserUncheckedCreateWithoutPointsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    connect?: UserWhereUniqueInput
  }

  export type SectionCreateNestedManyWithoutPointInput = {
    create?: XOR<SectionCreateWithoutPointInput, SectionUncheckedCreateWithoutPointInput> | SectionCreateWithoutPointInput[] | SectionUncheckedCreateWithoutPointInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutPointInput | SectionCreateOrConnectWithoutPointInput[]
    createMany?: SectionCreateManyPointInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutPointInput = {
    create?: XOR<FavoriteCreateWithoutPointInput, FavoriteUncheckedCreateWithoutPointInput> | FavoriteCreateWithoutPointInput[] | FavoriteUncheckedCreateWithoutPointInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPointInput | FavoriteCreateOrConnectWithoutPointInput[]
    createMany?: FavoriteCreateManyPointInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutPointInput = {
    create?: XOR<SectionCreateWithoutPointInput, SectionUncheckedCreateWithoutPointInput> | SectionCreateWithoutPointInput[] | SectionUncheckedCreateWithoutPointInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutPointInput | SectionCreateOrConnectWithoutPointInput[]
    createMany?: SectionCreateManyPointInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutPointInput = {
    create?: XOR<FavoriteCreateWithoutPointInput, FavoriteUncheckedCreateWithoutPointInput> | FavoriteCreateWithoutPointInput[] | FavoriteUncheckedCreateWithoutPointInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPointInput | FavoriteCreateOrConnectWithoutPointInput[]
    createMany?: FavoriteCreateManyPointInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type EnumLinhaFieldUpdateOperationsInput = {
    set?: $Enums.Linha
  }

  export type EnumPointTypeFieldUpdateOperationsInput = {
    set?: $Enums.PointType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPointsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutPointsCreatedInput, UserUncheckedCreateWithoutPointsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsCreatedInput
    upsert?: UserUpsertWithoutPointsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsCreatedInput, UserUpdateWithoutPointsCreatedInput>, UserUncheckedUpdateWithoutPointsCreatedInput>
  }

  export type UserUpdateOneWithoutApprovalsNestedInput = {
    create?: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovalsInput
    upsert?: UserUpsertWithoutApprovalsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovalsInput, UserUpdateWithoutApprovalsInput>, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type SectionUpdateManyWithoutPointNestedInput = {
    create?: XOR<SectionCreateWithoutPointInput, SectionUncheckedCreateWithoutPointInput> | SectionCreateWithoutPointInput[] | SectionUncheckedCreateWithoutPointInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutPointInput | SectionCreateOrConnectWithoutPointInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutPointInput | SectionUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: SectionCreateManyPointInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutPointInput | SectionUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutPointInput | SectionUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutPointNestedInput = {
    create?: XOR<FavoriteCreateWithoutPointInput, FavoriteUncheckedCreateWithoutPointInput> | FavoriteCreateWithoutPointInput[] | FavoriteUncheckedCreateWithoutPointInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPointInput | FavoriteCreateOrConnectWithoutPointInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPointInput | FavoriteUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: FavoriteCreateManyPointInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPointInput | FavoriteUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPointInput | FavoriteUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutPointNestedInput = {
    create?: XOR<SectionCreateWithoutPointInput, SectionUncheckedCreateWithoutPointInput> | SectionCreateWithoutPointInput[] | SectionUncheckedCreateWithoutPointInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutPointInput | SectionCreateOrConnectWithoutPointInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutPointInput | SectionUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: SectionCreateManyPointInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutPointInput | SectionUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutPointInput | SectionUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutPointNestedInput = {
    create?: XOR<FavoriteCreateWithoutPointInput, FavoriteUncheckedCreateWithoutPointInput> | FavoriteCreateWithoutPointInput[] | FavoriteUncheckedCreateWithoutPointInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutPointInput | FavoriteCreateOrConnectWithoutPointInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutPointInput | FavoriteUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: FavoriteCreateManyPointInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutPointInput | FavoriteUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutPointInput | FavoriteUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type PointCreateNestedOneWithoutSectionsInput = {
    create?: XOR<PointCreateWithoutSectionsInput, PointUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: PointCreateOrConnectWithoutSectionsInput
    connect?: PointWhereUniqueInput
  }

  export type BeatCreateNestedManyWithoutSectionInput = {
    create?: XOR<BeatCreateWithoutSectionInput, BeatUncheckedCreateWithoutSectionInput> | BeatCreateWithoutSectionInput[] | BeatUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BeatCreateOrConnectWithoutSectionInput | BeatCreateOrConnectWithoutSectionInput[]
    createMany?: BeatCreateManySectionInputEnvelope
    connect?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
  }

  export type SectionAudioCreateNestedManyWithoutSectionInput = {
    create?: XOR<SectionAudioCreateWithoutSectionInput, SectionAudioUncheckedCreateWithoutSectionInput> | SectionAudioCreateWithoutSectionInput[] | SectionAudioUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionAudioCreateOrConnectWithoutSectionInput | SectionAudioCreateOrConnectWithoutSectionInput[]
    createMany?: SectionAudioCreateManySectionInputEnvelope
    connect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
  }

  export type BeatUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<BeatCreateWithoutSectionInput, BeatUncheckedCreateWithoutSectionInput> | BeatCreateWithoutSectionInput[] | BeatUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BeatCreateOrConnectWithoutSectionInput | BeatCreateOrConnectWithoutSectionInput[]
    createMany?: BeatCreateManySectionInputEnvelope
    connect?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
  }

  export type SectionAudioUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<SectionAudioCreateWithoutSectionInput, SectionAudioUncheckedCreateWithoutSectionInput> | SectionAudioCreateWithoutSectionInput[] | SectionAudioUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionAudioCreateOrConnectWithoutSectionInput | SectionAudioCreateOrConnectWithoutSectionInput[]
    createMany?: SectionAudioCreateManySectionInputEnvelope
    connect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PointUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<PointCreateWithoutSectionsInput, PointUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: PointCreateOrConnectWithoutSectionsInput
    upsert?: PointUpsertWithoutSectionsInput
    connect?: PointWhereUniqueInput
    update?: XOR<XOR<PointUpdateToOneWithWhereWithoutSectionsInput, PointUpdateWithoutSectionsInput>, PointUncheckedUpdateWithoutSectionsInput>
  }

  export type BeatUpdateManyWithoutSectionNestedInput = {
    create?: XOR<BeatCreateWithoutSectionInput, BeatUncheckedCreateWithoutSectionInput> | BeatCreateWithoutSectionInput[] | BeatUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BeatCreateOrConnectWithoutSectionInput | BeatCreateOrConnectWithoutSectionInput[]
    upsert?: BeatUpsertWithWhereUniqueWithoutSectionInput | BeatUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: BeatCreateManySectionInputEnvelope
    set?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
    disconnect?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
    delete?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
    connect?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
    update?: BeatUpdateWithWhereUniqueWithoutSectionInput | BeatUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: BeatUpdateManyWithWhereWithoutSectionInput | BeatUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: BeatScalarWhereInput | BeatScalarWhereInput[]
  }

  export type SectionAudioUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SectionAudioCreateWithoutSectionInput, SectionAudioUncheckedCreateWithoutSectionInput> | SectionAudioCreateWithoutSectionInput[] | SectionAudioUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionAudioCreateOrConnectWithoutSectionInput | SectionAudioCreateOrConnectWithoutSectionInput[]
    upsert?: SectionAudioUpsertWithWhereUniqueWithoutSectionInput | SectionAudioUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SectionAudioCreateManySectionInputEnvelope
    set?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    disconnect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    delete?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    connect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    update?: SectionAudioUpdateWithWhereUniqueWithoutSectionInput | SectionAudioUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SectionAudioUpdateManyWithWhereWithoutSectionInput | SectionAudioUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SectionAudioScalarWhereInput | SectionAudioScalarWhereInput[]
  }

  export type BeatUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<BeatCreateWithoutSectionInput, BeatUncheckedCreateWithoutSectionInput> | BeatCreateWithoutSectionInput[] | BeatUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BeatCreateOrConnectWithoutSectionInput | BeatCreateOrConnectWithoutSectionInput[]
    upsert?: BeatUpsertWithWhereUniqueWithoutSectionInput | BeatUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: BeatCreateManySectionInputEnvelope
    set?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
    disconnect?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
    delete?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
    connect?: BeatWhereUniqueInput | BeatWhereUniqueInput[]
    update?: BeatUpdateWithWhereUniqueWithoutSectionInput | BeatUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: BeatUpdateManyWithWhereWithoutSectionInput | BeatUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: BeatScalarWhereInput | BeatScalarWhereInput[]
  }

  export type SectionAudioUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SectionAudioCreateWithoutSectionInput, SectionAudioUncheckedCreateWithoutSectionInput> | SectionAudioCreateWithoutSectionInput[] | SectionAudioUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionAudioCreateOrConnectWithoutSectionInput | SectionAudioCreateOrConnectWithoutSectionInput[]
    upsert?: SectionAudioUpsertWithWhereUniqueWithoutSectionInput | SectionAudioUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SectionAudioCreateManySectionInputEnvelope
    set?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    disconnect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    delete?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    connect?: SectionAudioWhereUniqueInput | SectionAudioWhereUniqueInput[]
    update?: SectionAudioUpdateWithWhereUniqueWithoutSectionInput | SectionAudioUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SectionAudioUpdateManyWithWhereWithoutSectionInput | SectionAudioUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SectionAudioScalarWhereInput | SectionAudioScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutBeatsInput = {
    create?: XOR<SectionCreateWithoutBeatsInput, SectionUncheckedCreateWithoutBeatsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutBeatsInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutBeatsNestedInput = {
    create?: XOR<SectionCreateWithoutBeatsInput, SectionUncheckedCreateWithoutBeatsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutBeatsInput
    upsert?: SectionUpsertWithoutBeatsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutBeatsInput, SectionUpdateWithoutBeatsInput>, SectionUncheckedUpdateWithoutBeatsInput>
  }

  export type SectionCreateNestedOneWithoutAudiosInput = {
    create?: XOR<SectionCreateWithoutAudiosInput, SectionUncheckedCreateWithoutAudiosInput>
    connectOrCreate?: SectionCreateOrConnectWithoutAudiosInput
    connect?: SectionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSectionAudiosInput = {
    create?: XOR<UserCreateWithoutSectionAudiosInput, UserUncheckedCreateWithoutSectionAudiosInput>
    connectOrCreate?: UserCreateOrConnectWithoutSectionAudiosInput
    connect?: UserWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutAudiosNestedInput = {
    create?: XOR<SectionCreateWithoutAudiosInput, SectionUncheckedCreateWithoutAudiosInput>
    connectOrCreate?: SectionCreateOrConnectWithoutAudiosInput
    upsert?: SectionUpsertWithoutAudiosInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutAudiosInput, SectionUpdateWithoutAudiosInput>, SectionUncheckedUpdateWithoutAudiosInput>
  }

  export type UserUpdateOneRequiredWithoutSectionAudiosNestedInput = {
    create?: XOR<UserCreateWithoutSectionAudiosInput, UserUncheckedCreateWithoutSectionAudiosInput>
    connectOrCreate?: UserCreateOrConnectWithoutSectionAudiosInput
    upsert?: UserUpsertWithoutSectionAudiosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSectionAudiosInput, UserUpdateWithoutSectionAudiosInput>, UserUncheckedUpdateWithoutSectionAudiosInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type PointCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<PointCreateWithoutFavoritesInput, PointUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: PointCreateOrConnectWithoutFavoritesInput
    connect?: PointWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type PointUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<PointCreateWithoutFavoritesInput, PointUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: PointCreateOrConnectWithoutFavoritesInput
    upsert?: PointUpsertWithoutFavoritesInput
    connect?: PointWhereUniqueInput
    update?: XOR<XOR<PointUpdateToOneWithWhereWithoutFavoritesInput, PointUpdateWithoutFavoritesInput>, PointUncheckedUpdateWithoutFavoritesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumLinhaFilter<$PrismaModel = never> = {
    equals?: $Enums.Linha | EnumLinhaFieldRefInput<$PrismaModel>
    in?: $Enums.Linha[] | ListEnumLinhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Linha[] | ListEnumLinhaFieldRefInput<$PrismaModel>
    not?: NestedEnumLinhaFilter<$PrismaModel> | $Enums.Linha
  }

  export type NestedEnumPointTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointType | EnumPointTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointType[] | ListEnumPointTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointType[] | ListEnumPointTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointTypeFilter<$PrismaModel> | $Enums.PointType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLinhaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Linha | EnumLinhaFieldRefInput<$PrismaModel>
    in?: $Enums.Linha[] | ListEnumLinhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Linha[] | ListEnumLinhaFieldRefInput<$PrismaModel>
    not?: NestedEnumLinhaWithAggregatesFilter<$PrismaModel> | $Enums.Linha
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinhaFilter<$PrismaModel>
    _max?: NestedEnumLinhaFilter<$PrismaModel>
  }

  export type NestedEnumPointTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointType | EnumPointTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointType[] | ListEnumPointTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointType[] | ListEnumPointTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointTypeFilter<$PrismaModel>
    _max?: NestedEnumPointTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type PointCreateWithoutCreatedByInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    approved?: boolean
    approvedAt?: Date | string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    approvedBy?: UserCreateNestedOneWithoutApprovalsInput
    sections?: SectionCreateNestedManyWithoutPointInput
    favorites?: FavoriteCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    approved?: boolean
    approvedAt?: Date | string | null
    approvedById?: string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    sections?: SectionUncheckedCreateNestedManyWithoutPointInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutCreatedByInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutCreatedByInput, PointUncheckedCreateWithoutCreatedByInput>
  }

  export type PointCreateManyCreatedByInputEnvelope = {
    data: PointCreateManyCreatedByInput | PointCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SectionAudioCreateWithoutUploadedByInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    section: SectionCreateNestedOneWithoutAudiosInput
  }

  export type SectionAudioUncheckedCreateWithoutUploadedByInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    sectionId: string
  }

  export type SectionAudioCreateOrConnectWithoutUploadedByInput = {
    where: SectionAudioWhereUniqueInput
    create: XOR<SectionAudioCreateWithoutUploadedByInput, SectionAudioUncheckedCreateWithoutUploadedByInput>
  }

  export type SectionAudioCreateManyUploadedByInputEnvelope = {
    data: SectionAudioCreateManyUploadedByInput | SectionAudioCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    createdAt?: Date | string
    point: PointCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    pointId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointCreateWithoutApprovedByInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    approved?: boolean
    approvedAt?: Date | string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    createdBy: UserCreateNestedOneWithoutPointsCreatedInput
    sections?: SectionCreateNestedManyWithoutPointInput
    favorites?: FavoriteCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutApprovedByInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    createdById: string
    approved?: boolean
    approvedAt?: Date | string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    sections?: SectionUncheckedCreateNestedManyWithoutPointInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutApprovedByInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutApprovedByInput, PointUncheckedCreateWithoutApprovedByInput>
  }

  export type PointCreateManyApprovedByInputEnvelope = {
    data: PointCreateManyApprovedByInput | PointCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type PointUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutCreatedByInput, PointUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PointCreateWithoutCreatedByInput, PointUncheckedCreateWithoutCreatedByInput>
  }

  export type PointUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutCreatedByInput, PointUncheckedUpdateWithoutCreatedByInput>
  }

  export type PointUpdateManyWithWhereWithoutCreatedByInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    id?: StringFilter<"Point"> | string
    title?: StringFilter<"Point"> | string
    slug?: StringFilter<"Point"> | string
    description?: StringNullableFilter<"Point"> | string | null
    linha?: EnumLinhaFilter<"Point"> | $Enums.Linha
    type?: EnumPointTypeFilter<"Point"> | $Enums.PointType
    createdAt?: DateTimeFilter<"Point"> | Date | string
    createdById?: StringFilter<"Point"> | string
    approved?: BoolFilter<"Point"> | boolean
    approvedAt?: DateTimeNullableFilter<"Point"> | Date | string | null
    approvedById?: StringNullableFilter<"Point"> | string | null
    audioUrl?: StringNullableFilter<"Point"> | string | null
    youtubeUrl?: StringNullableFilter<"Point"> | string | null
  }

  export type SectionAudioUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: SectionAudioWhereUniqueInput
    update: XOR<SectionAudioUpdateWithoutUploadedByInput, SectionAudioUncheckedUpdateWithoutUploadedByInput>
    create: XOR<SectionAudioCreateWithoutUploadedByInput, SectionAudioUncheckedCreateWithoutUploadedByInput>
  }

  export type SectionAudioUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: SectionAudioWhereUniqueInput
    data: XOR<SectionAudioUpdateWithoutUploadedByInput, SectionAudioUncheckedUpdateWithoutUploadedByInput>
  }

  export type SectionAudioUpdateManyWithWhereWithoutUploadedByInput = {
    where: SectionAudioScalarWhereInput
    data: XOR<SectionAudioUpdateManyMutationInput, SectionAudioUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type SectionAudioScalarWhereInput = {
    AND?: SectionAudioScalarWhereInput | SectionAudioScalarWhereInput[]
    OR?: SectionAudioScalarWhereInput[]
    NOT?: SectionAudioScalarWhereInput | SectionAudioScalarWhereInput[]
    id?: StringFilter<"SectionAudio"> | string
    url?: StringFilter<"SectionAudio"> | string
    createdAt?: DateTimeFilter<"SectionAudio"> | Date | string
    approved?: BoolFilter<"SectionAudio"> | boolean
    sectionId?: StringFilter<"SectionAudio"> | string
    uploadedById?: StringFilter<"SectionAudio"> | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    pointId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type PointUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutApprovedByInput, PointUncheckedUpdateWithoutApprovedByInput>
    create: XOR<PointCreateWithoutApprovedByInput, PointUncheckedCreateWithoutApprovedByInput>
  }

  export type PointUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutApprovedByInput, PointUncheckedUpdateWithoutApprovedByInput>
  }

  export type PointUpdateManyWithWhereWithoutApprovedByInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type UserCreateWithoutPointsCreatedInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    sectionAudios?: SectionAudioCreateNestedManyWithoutUploadedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    approvals?: PointCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutPointsCreatedInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    sectionAudios?: SectionAudioUncheckedCreateNestedManyWithoutUploadedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    approvals?: PointUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutPointsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsCreatedInput, UserUncheckedCreateWithoutPointsCreatedInput>
  }

  export type UserCreateWithoutApprovalsInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pointsCreated?: PointCreateNestedManyWithoutCreatedByInput
    sectionAudios?: SectionAudioCreateNestedManyWithoutUploadedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovalsInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pointsCreated?: PointUncheckedCreateNestedManyWithoutCreatedByInput
    sectionAudios?: SectionAudioUncheckedCreateNestedManyWithoutUploadedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
  }

  export type SectionCreateWithoutPointInput = {
    id?: string
    order: number
    text: string
    beats?: BeatCreateNestedManyWithoutSectionInput
    audios?: SectionAudioCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutPointInput = {
    id?: string
    order: number
    text: string
    beats?: BeatUncheckedCreateNestedManyWithoutSectionInput
    audios?: SectionAudioUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutPointInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutPointInput, SectionUncheckedCreateWithoutPointInput>
  }

  export type SectionCreateManyPointInputEnvelope = {
    data: SectionCreateManyPointInput | SectionCreateManyPointInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutPointInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutPointInput = {
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutPointInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutPointInput, FavoriteUncheckedCreateWithoutPointInput>
  }

  export type FavoriteCreateManyPointInputEnvelope = {
    data: FavoriteCreateManyPointInput | FavoriteCreateManyPointInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPointsCreatedInput = {
    update: XOR<UserUpdateWithoutPointsCreatedInput, UserUncheckedUpdateWithoutPointsCreatedInput>
    create: XOR<UserCreateWithoutPointsCreatedInput, UserUncheckedCreateWithoutPointsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsCreatedInput, UserUncheckedUpdateWithoutPointsCreatedInput>
  }

  export type UserUpdateWithoutPointsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionAudios?: SectionAudioUpdateManyWithoutUploadedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    approvals?: PointUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionAudios?: SectionAudioUncheckedUpdateManyWithoutUploadedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    approvals?: PointUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUpsertWithoutApprovalsInput = {
    update: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
    create: XOR<UserCreateWithoutApprovalsInput, UserUncheckedCreateWithoutApprovalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovalsInput, UserUncheckedUpdateWithoutApprovalsInput>
  }

  export type UserUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsCreated?: PointUpdateManyWithoutCreatedByNestedInput
    sectionAudios?: SectionAudioUpdateManyWithoutUploadedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsCreated?: PointUncheckedUpdateManyWithoutCreatedByNestedInput
    sectionAudios?: SectionAudioUncheckedUpdateManyWithoutUploadedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SectionUpsertWithWhereUniqueWithoutPointInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutPointInput, SectionUncheckedUpdateWithoutPointInput>
    create: XOR<SectionCreateWithoutPointInput, SectionUncheckedCreateWithoutPointInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutPointInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutPointInput, SectionUncheckedUpdateWithoutPointInput>
  }

  export type SectionUpdateManyWithWhereWithoutPointInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutPointInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    order?: IntFilter<"Section"> | number
    text?: StringFilter<"Section"> | string
    pointId?: StringFilter<"Section"> | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutPointInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutPointInput, FavoriteUncheckedUpdateWithoutPointInput>
    create: XOR<FavoriteCreateWithoutPointInput, FavoriteUncheckedCreateWithoutPointInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutPointInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutPointInput, FavoriteUncheckedUpdateWithoutPointInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutPointInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutPointInput>
  }

  export type PointCreateWithoutSectionsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    approved?: boolean
    approvedAt?: Date | string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    createdBy: UserCreateNestedOneWithoutPointsCreatedInput
    approvedBy?: UserCreateNestedOneWithoutApprovalsInput
    favorites?: FavoriteCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutSectionsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    createdById: string
    approved?: boolean
    approvedAt?: Date | string | null
    approvedById?: string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    favorites?: FavoriteUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutSectionsInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutSectionsInput, PointUncheckedCreateWithoutSectionsInput>
  }

  export type BeatCreateWithoutSectionInput = {
    id?: string
    pattern: string
    order: number
  }

  export type BeatUncheckedCreateWithoutSectionInput = {
    id?: string
    pattern: string
    order: number
  }

  export type BeatCreateOrConnectWithoutSectionInput = {
    where: BeatWhereUniqueInput
    create: XOR<BeatCreateWithoutSectionInput, BeatUncheckedCreateWithoutSectionInput>
  }

  export type BeatCreateManySectionInputEnvelope = {
    data: BeatCreateManySectionInput | BeatCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type SectionAudioCreateWithoutSectionInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    uploadedBy: UserCreateNestedOneWithoutSectionAudiosInput
  }

  export type SectionAudioUncheckedCreateWithoutSectionInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    uploadedById: string
  }

  export type SectionAudioCreateOrConnectWithoutSectionInput = {
    where: SectionAudioWhereUniqueInput
    create: XOR<SectionAudioCreateWithoutSectionInput, SectionAudioUncheckedCreateWithoutSectionInput>
  }

  export type SectionAudioCreateManySectionInputEnvelope = {
    data: SectionAudioCreateManySectionInput | SectionAudioCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type PointUpsertWithoutSectionsInput = {
    update: XOR<PointUpdateWithoutSectionsInput, PointUncheckedUpdateWithoutSectionsInput>
    create: XOR<PointCreateWithoutSectionsInput, PointUncheckedCreateWithoutSectionsInput>
    where?: PointWhereInput
  }

  export type PointUpdateToOneWithWhereWithoutSectionsInput = {
    where?: PointWhereInput
    data: XOR<PointUpdateWithoutSectionsInput, PointUncheckedUpdateWithoutSectionsInput>
  }

  export type PointUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneRequiredWithoutPointsCreatedNestedInput
    approvedBy?: UserUpdateOneWithoutApprovalsNestedInput
    favorites?: FavoriteUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: FavoriteUncheckedUpdateManyWithoutPointNestedInput
  }

  export type BeatUpsertWithWhereUniqueWithoutSectionInput = {
    where: BeatWhereUniqueInput
    update: XOR<BeatUpdateWithoutSectionInput, BeatUncheckedUpdateWithoutSectionInput>
    create: XOR<BeatCreateWithoutSectionInput, BeatUncheckedCreateWithoutSectionInput>
  }

  export type BeatUpdateWithWhereUniqueWithoutSectionInput = {
    where: BeatWhereUniqueInput
    data: XOR<BeatUpdateWithoutSectionInput, BeatUncheckedUpdateWithoutSectionInput>
  }

  export type BeatUpdateManyWithWhereWithoutSectionInput = {
    where: BeatScalarWhereInput
    data: XOR<BeatUpdateManyMutationInput, BeatUncheckedUpdateManyWithoutSectionInput>
  }

  export type BeatScalarWhereInput = {
    AND?: BeatScalarWhereInput | BeatScalarWhereInput[]
    OR?: BeatScalarWhereInput[]
    NOT?: BeatScalarWhereInput | BeatScalarWhereInput[]
    id?: StringFilter<"Beat"> | string
    pattern?: StringFilter<"Beat"> | string
    order?: IntFilter<"Beat"> | number
    sectionId?: StringFilter<"Beat"> | string
  }

  export type SectionAudioUpsertWithWhereUniqueWithoutSectionInput = {
    where: SectionAudioWhereUniqueInput
    update: XOR<SectionAudioUpdateWithoutSectionInput, SectionAudioUncheckedUpdateWithoutSectionInput>
    create: XOR<SectionAudioCreateWithoutSectionInput, SectionAudioUncheckedCreateWithoutSectionInput>
  }

  export type SectionAudioUpdateWithWhereUniqueWithoutSectionInput = {
    where: SectionAudioWhereUniqueInput
    data: XOR<SectionAudioUpdateWithoutSectionInput, SectionAudioUncheckedUpdateWithoutSectionInput>
  }

  export type SectionAudioUpdateManyWithWhereWithoutSectionInput = {
    where: SectionAudioScalarWhereInput
    data: XOR<SectionAudioUpdateManyMutationInput, SectionAudioUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionCreateWithoutBeatsInput = {
    id?: string
    order: number
    text: string
    point: PointCreateNestedOneWithoutSectionsInput
    audios?: SectionAudioCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutBeatsInput = {
    id?: string
    order: number
    text: string
    pointId: string
    audios?: SectionAudioUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutBeatsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutBeatsInput, SectionUncheckedCreateWithoutBeatsInput>
  }

  export type SectionUpsertWithoutBeatsInput = {
    update: XOR<SectionUpdateWithoutBeatsInput, SectionUncheckedUpdateWithoutBeatsInput>
    create: XOR<SectionCreateWithoutBeatsInput, SectionUncheckedCreateWithoutBeatsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutBeatsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutBeatsInput, SectionUncheckedUpdateWithoutBeatsInput>
  }

  export type SectionUpdateWithoutBeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    point?: PointUpdateOneRequiredWithoutSectionsNestedInput
    audios?: SectionAudioUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutBeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    audios?: SectionAudioUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateWithoutAudiosInput = {
    id?: string
    order: number
    text: string
    point: PointCreateNestedOneWithoutSectionsInput
    beats?: BeatCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutAudiosInput = {
    id?: string
    order: number
    text: string
    pointId: string
    beats?: BeatUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutAudiosInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutAudiosInput, SectionUncheckedCreateWithoutAudiosInput>
  }

  export type UserCreateWithoutSectionAudiosInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pointsCreated?: PointCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    approvals?: PointCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutSectionAudiosInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pointsCreated?: PointUncheckedCreateNestedManyWithoutCreatedByInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    approvals?: PointUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutSectionAudiosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSectionAudiosInput, UserUncheckedCreateWithoutSectionAudiosInput>
  }

  export type SectionUpsertWithoutAudiosInput = {
    update: XOR<SectionUpdateWithoutAudiosInput, SectionUncheckedUpdateWithoutAudiosInput>
    create: XOR<SectionCreateWithoutAudiosInput, SectionUncheckedCreateWithoutAudiosInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutAudiosInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutAudiosInput, SectionUncheckedUpdateWithoutAudiosInput>
  }

  export type SectionUpdateWithoutAudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    point?: PointUpdateOneRequiredWithoutSectionsNestedInput
    beats?: BeatUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutAudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    pointId?: StringFieldUpdateOperationsInput | string
    beats?: BeatUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type UserUpsertWithoutSectionAudiosInput = {
    update: XOR<UserUpdateWithoutSectionAudiosInput, UserUncheckedUpdateWithoutSectionAudiosInput>
    create: XOR<UserCreateWithoutSectionAudiosInput, UserUncheckedCreateWithoutSectionAudiosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSectionAudiosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSectionAudiosInput, UserUncheckedUpdateWithoutSectionAudiosInput>
  }

  export type UserUpdateWithoutSectionAudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsCreated?: PointUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    approvals?: PointUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSectionAudiosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsCreated?: PointUncheckedUpdateManyWithoutCreatedByNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    approvals?: PointUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pointsCreated?: PointCreateNestedManyWithoutCreatedByInput
    sectionAudios?: SectionAudioCreateNestedManyWithoutUploadedByInput
    approvals?: PointCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name?: string | null
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    pointsCreated?: PointUncheckedCreateNestedManyWithoutCreatedByInput
    sectionAudios?: SectionAudioUncheckedCreateNestedManyWithoutUploadedByInput
    approvals?: PointUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type PointCreateWithoutFavoritesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    approved?: boolean
    approvedAt?: Date | string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    createdBy: UserCreateNestedOneWithoutPointsCreatedInput
    approvedBy?: UserCreateNestedOneWithoutApprovalsInput
    sections?: SectionCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    createdById: string
    approved?: boolean
    approvedAt?: Date | string | null
    approvedById?: string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
    sections?: SectionUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutFavoritesInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutFavoritesInput, PointUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsCreated?: PointUpdateManyWithoutCreatedByNestedInput
    sectionAudios?: SectionAudioUpdateManyWithoutUploadedByNestedInput
    approvals?: PointUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsCreated?: PointUncheckedUpdateManyWithoutCreatedByNestedInput
    sectionAudios?: SectionAudioUncheckedUpdateManyWithoutUploadedByNestedInput
    approvals?: PointUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type PointUpsertWithoutFavoritesInput = {
    update: XOR<PointUpdateWithoutFavoritesInput, PointUncheckedUpdateWithoutFavoritesInput>
    create: XOR<PointCreateWithoutFavoritesInput, PointUncheckedCreateWithoutFavoritesInput>
    where?: PointWhereInput
  }

  export type PointUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: PointWhereInput
    data: XOR<PointUpdateWithoutFavoritesInput, PointUncheckedUpdateWithoutFavoritesInput>
  }

  export type PointUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneRequiredWithoutPointsCreatedNestedInput
    approvedBy?: UserUpdateOneWithoutApprovalsNestedInput
    sections?: SectionUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: SectionUncheckedUpdateManyWithoutPointNestedInput
  }

  export type PointCreateManyCreatedByInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    approved?: boolean
    approvedAt?: Date | string | null
    approvedById?: string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
  }

  export type SectionAudioCreateManyUploadedByInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    sectionId: string
  }

  export type FavoriteCreateManyUserInput = {
    pointId: string
    createdAt?: Date | string
  }

  export type PointCreateManyApprovedByInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    linha: $Enums.Linha
    type?: $Enums.PointType
    createdAt?: Date | string
    createdById: string
    approved?: boolean
    approvedAt?: Date | string | null
    audioUrl?: string | null
    youtubeUrl?: string | null
  }

  export type PointUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: UserUpdateOneWithoutApprovalsNestedInput
    sections?: SectionUpdateManyWithoutPointNestedInput
    favorites?: FavoriteUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: SectionUncheckedUpdateManyWithoutPointNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SectionAudioUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    section?: SectionUpdateOneRequiredWithoutAudiosNestedInput
  }

  export type SectionAudioUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionAudioUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: PointUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    pointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    pointId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneRequiredWithoutPointsCreatedNestedInput
    sections?: SectionUpdateManyWithoutPointNestedInput
    favorites?: FavoriteUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: SectionUncheckedUpdateManyWithoutPointNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateManyWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    linha?: EnumLinhaFieldUpdateOperationsInput | $Enums.Linha
    type?: EnumPointTypeFieldUpdateOperationsInput | $Enums.PointType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SectionCreateManyPointInput = {
    id?: string
    order: number
    text: string
  }

  export type FavoriteCreateManyPointInput = {
    userId: string
    createdAt?: Date | string
  }

  export type SectionUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    beats?: BeatUpdateManyWithoutSectionNestedInput
    audios?: SectionAudioUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    beats?: BeatUncheckedUpdateManyWithoutSectionNestedInput
    audios?: SectionAudioUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUpdateWithoutPointInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutPointInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutPointInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeatCreateManySectionInput = {
    id?: string
    pattern: string
    order: number
  }

  export type SectionAudioCreateManySectionInput = {
    id?: string
    url: string
    createdAt?: Date | string
    approved?: boolean
    uploadedById: string
  }

  export type BeatUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pattern?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BeatUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pattern?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type BeatUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pattern?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SectionAudioUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    uploadedBy?: UserUpdateOneRequiredWithoutSectionAudiosNestedInput
  }

  export type SectionAudioUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    uploadedById?: StringFieldUpdateOperationsInput | string
  }

  export type SectionAudioUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    uploadedById?: StringFieldUpdateOperationsInput | string
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