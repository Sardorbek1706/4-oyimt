
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Profiles
 * 
 */
export type Profiles = $Result.DefaultSelection<Prisma.$ProfilesPayload>
/**
 * Model Subscription_plans
 * 
 */
export type Subscription_plans = $Result.DefaultSelection<Prisma.$Subscription_plansPayload>
/**
 * Model User_subscriptions
 * 
 */
export type User_subscriptions = $Result.DefaultSelection<Prisma.$User_subscriptionsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Movies
 * 
 */
export type Movies = $Result.DefaultSelection<Prisma.$MoviesPayload>
/**
 * Model Movie_categories
 * 
 */
export type Movie_categories = $Result.DefaultSelection<Prisma.$Movie_categoriesPayload>
/**
 * Model Movie_files
 * 
 */
export type Movie_files = $Result.DefaultSelection<Prisma.$Movie_filesPayload>
/**
 * Model Favorites
 * 
 */
export type Favorites = $Result.DefaultSelection<Prisma.$FavoritesPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Watch_history
 * 
 */
export type Watch_history = $Result.DefaultSelection<Prisma.$Watch_historyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  user: 'user',
  admin: 'admin',
  superadmin: 'superadmin'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const Status: {
  active: 'active',
  inactive: 'inactive'
};

export type Status = (typeof Status)[keyof typeof Status]


export const SubsStatus: {
  active: 'active',
  expired: 'expired',
  canceled: 'canceled',
  pending_payment: 'pending_payment'
};

export type SubsStatus = (typeof SubsStatus)[keyof typeof SubsStatus]


export const PaymentMethod: {
  card: 'card',
  paypal: 'paypal',
  bank_transfer: 'bank_transfer',
  crypto: 'crypto'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed',
  refunded: 'refunded'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const SubscriptionType: {
  free: 'free',
  premium: 'premium'
};

export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType]


export const Quality: {
  RES_240p: '240p',
  RES_360p: '360p',
  RES_480p: '480p',
  RES_720p: '720p',
  RES_1080p: '1080p',
  RES_4K: '4K'
};

export type Quality = (typeof Quality)[keyof typeof Quality]


export const Languages: {
  uz: 'uz',
  en: 'en',
  ru: 'ru'
};

export type Languages = (typeof Languages)[keyof typeof Languages]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type SubsStatus = $Enums.SubsStatus

export const SubsStatus: typeof $Enums.SubsStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SubscriptionType = $Enums.SubscriptionType

export const SubscriptionType: typeof $Enums.SubscriptionType

export type Quality = $Enums.Quality

export const Quality: typeof $Enums.Quality

export type Languages = $Enums.Languages

export const Languages: typeof $Enums.Languages

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **Profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.ProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription_plans`: Exposes CRUD operations for the **Subscription_plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscription_plans
    * const subscription_plans = await prisma.subscription_plans.findMany()
    * ```
    */
  get subscription_plans(): Prisma.Subscription_plansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_subscriptions`: Exposes CRUD operations for the **User_subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_subscriptions
    * const user_subscriptions = await prisma.user_subscriptions.findMany()
    * ```
    */
  get user_subscriptions(): Prisma.User_subscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **Movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.MoviesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie_categories`: Exposes CRUD operations for the **Movie_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movie_categories
    * const movie_categories = await prisma.movie_categories.findMany()
    * ```
    */
  get movie_categories(): Prisma.Movie_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie_files`: Exposes CRUD operations for the **Movie_files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movie_files
    * const movie_files = await prisma.movie_files.findMany()
    * ```
    */
  get movie_files(): Prisma.Movie_filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorites`: Exposes CRUD operations for the **Favorites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorites.findMany()
    * ```
    */
  get favorites(): Prisma.FavoritesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watch_history`: Exposes CRUD operations for the **Watch_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watch_histories
    * const watch_histories = await prisma.watch_history.findMany()
    * ```
    */
  get watch_history(): Prisma.Watch_historyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
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
    Users: 'Users',
    Profiles: 'Profiles',
    Subscription_plans: 'Subscription_plans',
    User_subscriptions: 'User_subscriptions',
    Payments: 'Payments',
    Categories: 'Categories',
    Movies: 'Movies',
    Movie_categories: 'Movie_categories',
    Movie_files: 'Movie_files',
    Favorites: 'Favorites',
    Reviews: 'Reviews',
    Watch_history: 'Watch_history'
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
      modelProps: "users" | "profiles" | "subscription_plans" | "user_subscriptions" | "payments" | "categories" | "movies" | "movie_categories" | "movie_files" | "favorites" | "reviews" | "watch_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Profiles: {
        payload: Prisma.$ProfilesPayload<ExtArgs>
        fields: Prisma.ProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findFirst: {
            args: Prisma.ProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          findMany: {
            args: Prisma.ProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          create: {
            args: Prisma.ProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          createMany: {
            args: Prisma.ProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          delete: {
            args: Prisma.ProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          update: {
            args: Prisma.ProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          deleteMany: {
            args: Prisma.ProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>[]
          }
          upsert: {
            args: Prisma.ProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.ProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      Subscription_plans: {
        payload: Prisma.$Subscription_plansPayload<ExtArgs>
        fields: Prisma.Subscription_plansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Subscription_plansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Subscription_plansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>
          }
          findFirst: {
            args: Prisma.Subscription_plansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Subscription_plansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>
          }
          findMany: {
            args: Prisma.Subscription_plansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>[]
          }
          create: {
            args: Prisma.Subscription_plansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>
          }
          createMany: {
            args: Prisma.Subscription_plansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Subscription_plansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>[]
          }
          delete: {
            args: Prisma.Subscription_plansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>
          }
          update: {
            args: Prisma.Subscription_plansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>
          }
          deleteMany: {
            args: Prisma.Subscription_plansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Subscription_plansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Subscription_plansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>[]
          }
          upsert: {
            args: Prisma.Subscription_plansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Subscription_plansPayload>
          }
          aggregate: {
            args: Prisma.Subscription_plansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription_plans>
          }
          groupBy: {
            args: Prisma.Subscription_plansGroupByArgs<ExtArgs>
            result: $Utils.Optional<Subscription_plansGroupByOutputType>[]
          }
          count: {
            args: Prisma.Subscription_plansCountArgs<ExtArgs>
            result: $Utils.Optional<Subscription_plansCountAggregateOutputType> | number
          }
        }
      }
      User_subscriptions: {
        payload: Prisma.$User_subscriptionsPayload<ExtArgs>
        fields: Prisma.User_subscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_subscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_subscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>
          }
          findFirst: {
            args: Prisma.User_subscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_subscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>
          }
          findMany: {
            args: Prisma.User_subscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>[]
          }
          create: {
            args: Prisma.User_subscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>
          }
          createMany: {
            args: Prisma.User_subscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_subscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>[]
          }
          delete: {
            args: Prisma.User_subscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>
          }
          update: {
            args: Prisma.User_subscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.User_subscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_subscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_subscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.User_subscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_subscriptionsPayload>
          }
          aggregate: {
            args: Prisma.User_subscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_subscriptions>
          }
          groupBy: {
            args: Prisma.User_subscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_subscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_subscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<User_subscriptionsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Movies: {
        payload: Prisma.$MoviesPayload<ExtArgs>
        fields: Prisma.MoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findFirst: {
            args: Prisma.MoviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findMany: {
            args: Prisma.MoviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          create: {
            args: Prisma.MoviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          createMany: {
            args: Prisma.MoviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoviesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          delete: {
            args: Prisma.MoviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          update: {
            args: Prisma.MoviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          deleteMany: {
            args: Prisma.MoviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoviesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          upsert: {
            args: Prisma.MoviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.MoviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoviesCountArgs<ExtArgs>
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
      Movie_categories: {
        payload: Prisma.$Movie_categoriesPayload<ExtArgs>
        fields: Prisma.Movie_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Movie_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Movie_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>
          }
          findFirst: {
            args: Prisma.Movie_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Movie_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>
          }
          findMany: {
            args: Prisma.Movie_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>[]
          }
          create: {
            args: Prisma.Movie_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>
          }
          createMany: {
            args: Prisma.Movie_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Movie_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>[]
          }
          delete: {
            args: Prisma.Movie_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>
          }
          update: {
            args: Prisma.Movie_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.Movie_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Movie_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Movie_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.Movie_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Movie_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie_categories>
          }
          groupBy: {
            args: Prisma.Movie_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Movie_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Movie_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Movie_categoriesCountAggregateOutputType> | number
          }
        }
      }
      Movie_files: {
        payload: Prisma.$Movie_filesPayload<ExtArgs>
        fields: Prisma.Movie_filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Movie_filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Movie_filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>
          }
          findFirst: {
            args: Prisma.Movie_filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Movie_filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>
          }
          findMany: {
            args: Prisma.Movie_filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>[]
          }
          create: {
            args: Prisma.Movie_filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>
          }
          createMany: {
            args: Prisma.Movie_filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Movie_filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>[]
          }
          delete: {
            args: Prisma.Movie_filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>
          }
          update: {
            args: Prisma.Movie_filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>
          }
          deleteMany: {
            args: Prisma.Movie_filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Movie_filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Movie_filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>[]
          }
          upsert: {
            args: Prisma.Movie_filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Movie_filesPayload>
          }
          aggregate: {
            args: Prisma.Movie_filesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie_files>
          }
          groupBy: {
            args: Prisma.Movie_filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Movie_filesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Movie_filesCountArgs<ExtArgs>
            result: $Utils.Optional<Movie_filesCountAggregateOutputType> | number
          }
        }
      }
      Favorites: {
        payload: Prisma.$FavoritesPayload<ExtArgs>
        fields: Prisma.FavoritesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          findFirst: {
            args: Prisma.FavoritesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          findMany: {
            args: Prisma.FavoritesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>[]
          }
          create: {
            args: Prisma.FavoritesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          createMany: {
            args: Prisma.FavoritesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>[]
          }
          delete: {
            args: Prisma.FavoritesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          update: {
            args: Prisma.FavoritesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          deleteMany: {
            args: Prisma.FavoritesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoritesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>[]
          }
          upsert: {
            args: Prisma.FavoritesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritesPayload>
          }
          aggregate: {
            args: Prisma.FavoritesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorites>
          }
          groupBy: {
            args: Prisma.FavoritesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritesCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritesCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Watch_history: {
        payload: Prisma.$Watch_historyPayload<ExtArgs>
        fields: Prisma.Watch_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Watch_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Watch_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>
          }
          findFirst: {
            args: Prisma.Watch_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Watch_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>
          }
          findMany: {
            args: Prisma.Watch_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>[]
          }
          create: {
            args: Prisma.Watch_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>
          }
          createMany: {
            args: Prisma.Watch_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Watch_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>[]
          }
          delete: {
            args: Prisma.Watch_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>
          }
          update: {
            args: Prisma.Watch_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>
          }
          deleteMany: {
            args: Prisma.Watch_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Watch_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Watch_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>[]
          }
          upsert: {
            args: Prisma.Watch_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Watch_historyPayload>
          }
          aggregate: {
            args: Prisma.Watch_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatch_history>
          }
          groupBy: {
            args: Prisma.Watch_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Watch_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.Watch_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Watch_historyCountAggregateOutputType> | number
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
    users?: UsersOmit
    profiles?: ProfilesOmit
    subscription_plans?: Subscription_plansOmit
    user_subscriptions?: User_subscriptionsOmit
    payments?: PaymentsOmit
    categories?: CategoriesOmit
    movies?: MoviesOmit
    movie_categories?: Movie_categoriesOmit
    movie_files?: Movie_filesOmit
    favorites?: FavoritesOmit
    reviews?: ReviewsOmit
    watch_history?: Watch_historyOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    profiles: number
    user_subscriptions: number
    movies: number
    favorites: number
    reviews: number
    watch_history: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | UsersCountOutputTypeCountProfilesArgs
    user_subscriptions?: boolean | UsersCountOutputTypeCountUser_subscriptionsArgs
    movies?: boolean | UsersCountOutputTypeCountMoviesArgs
    favorites?: boolean | UsersCountOutputTypeCountFavoritesArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    watch_history?: boolean | UsersCountOutputTypeCountWatch_historyArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_subscriptionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWatch_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Watch_historyWhereInput
  }


  /**
   * Count Type Subscription_plansCountOutputType
   */

  export type Subscription_plansCountOutputType = {
    user_subscriptions: number
  }

  export type Subscription_plansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_subscriptions?: boolean | Subscription_plansCountOutputTypeCountUser_subscriptionsArgs
  }

  // Custom InputTypes
  /**
   * Subscription_plansCountOutputType without action
   */
  export type Subscription_plansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plansCountOutputType
     */
    select?: Subscription_plansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Subscription_plansCountOutputType without action
   */
  export type Subscription_plansCountOutputTypeCountUser_subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_subscriptionsWhereInput
  }


  /**
   * Count Type User_subscriptionsCountOutputType
   */

  export type User_subscriptionsCountOutputType = {
    payments: number
  }

  export type User_subscriptionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | User_subscriptionsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * User_subscriptionsCountOutputType without action
   */
  export type User_subscriptionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptionsCountOutputType
     */
    select?: User_subscriptionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_subscriptionsCountOutputType without action
   */
  export type User_subscriptionsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    movie_categories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie_categories?: boolean | CategoriesCountOutputTypeCountMovie_categoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountMovie_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Movie_categoriesWhereInput
  }


  /**
   * Count Type MoviesCountOutputType
   */

  export type MoviesCountOutputType = {
    movie_categories: number
    movie_files: number
    favorites: number
    reviews: number
    watch_history: number
  }

  export type MoviesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie_categories?: boolean | MoviesCountOutputTypeCountMovie_categoriesArgs
    movie_files?: boolean | MoviesCountOutputTypeCountMovie_filesArgs
    favorites?: boolean | MoviesCountOutputTypeCountFavoritesArgs
    reviews?: boolean | MoviesCountOutputTypeCountReviewsArgs
    watch_history?: boolean | MoviesCountOutputTypeCountWatch_historyArgs
  }

  // Custom InputTypes
  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCountOutputType
     */
    select?: MoviesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountMovie_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Movie_categoriesWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountMovie_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Movie_filesWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritesWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountWatch_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Watch_historyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Roles | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Roles | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    role: number
    avatar_url: number
    created_at: number
    updated_at: number
    status: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    role?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    role?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    role?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    status?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    email: string
    password_hash: string
    role: $Enums.Roles
    avatar_url: string
    created_at: Date
    updated_at: Date
    status: $Enums.Status
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    profiles?: boolean | Users$profilesArgs<ExtArgs>
    user_subscriptions?: boolean | Users$user_subscriptionsArgs<ExtArgs>
    movies?: boolean | Users$moviesArgs<ExtArgs>
    favorites?: boolean | Users$favoritesArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    watch_history?: boolean | Users$watch_historyArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "role" | "avatar_url" | "created_at" | "updated_at" | "status", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | Users$profilesArgs<ExtArgs>
    user_subscriptions?: boolean | Users$user_subscriptionsArgs<ExtArgs>
    movies?: boolean | Users$moviesArgs<ExtArgs>
    favorites?: boolean | Users$favoritesArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    watch_history?: boolean | Users$watch_historyArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      profiles: Prisma.$ProfilesPayload<ExtArgs>[]
      user_subscriptions: Prisma.$User_subscriptionsPayload<ExtArgs>[]
      movies: Prisma.$MoviesPayload<ExtArgs>[]
      favorites: Prisma.$FavoritesPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      watch_history: Prisma.$Watch_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password_hash: string
      role: $Enums.Roles
      avatar_url: string
      created_at: Date
      updated_at: Date
      status: $Enums.Status
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends Users$profilesArgs<ExtArgs> = {}>(args?: Subset<T, Users$profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_subscriptions<T extends Users$user_subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$user_subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movies<T extends Users$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Users$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Users$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Users$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watch_history<T extends Users$watch_historyArgs<ExtArgs> = {}>(args?: Subset<T, Users$watch_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password_hash: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Roles'>
    readonly avatar_url: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
    readonly status: FieldRef<"Users", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.profiles
   */
  export type Users$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    where?: ProfilesWhereInput
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    cursor?: ProfilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Users.user_subscriptions
   */
  export type Users$user_subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    where?: User_subscriptionsWhereInput
    orderBy?: User_subscriptionsOrderByWithRelationInput | User_subscriptionsOrderByWithRelationInput[]
    cursor?: User_subscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_subscriptionsScalarFieldEnum | User_subscriptionsScalarFieldEnum[]
  }

  /**
   * Users.movies
   */
  export type Users$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    cursor?: MoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Users.favorites
   */
  export type Users$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    where?: FavoritesWhereInput
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    cursor?: FavoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * Users.reviews
   */
  export type Users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users.watch_history
   */
  export type Users$watch_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    where?: Watch_historyWhereInput
    orderBy?: Watch_historyOrderByWithRelationInput | Watch_historyOrderByWithRelationInput[]
    cursor?: Watch_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    full_name: string | null
    phone: string | null
    country: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    full_name: string | null
    phone: string | null
    country: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    user_id: number
    full_name: number
    phone: number
    country: number
    created_at: number
    updated_at: number
    status: number
    _all: number
  }


  export type ProfilesMinAggregateInputType = {
    id?: true
    user_id?: true
    full_name?: true
    phone?: true
    country?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    user_id?: true
    full_name?: true
    phone?: true
    country?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    user_id?: true
    full_name?: true
    phone?: true
    country?: true
    created_at?: true
    updated_at?: true
    status?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to aggregate.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type ProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilesWhereInput
    orderBy?: ProfilesOrderByWithAggregationInput | ProfilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: ProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: string
    user_id: string
    full_name: string
    phone: string
    country: string
    created_at: Date
    updated_at: Date
    status: $Enums.Status
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type ProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    full_name?: boolean
    phone?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    full_name?: boolean
    phone?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    full_name?: boolean
    phone?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type ProfilesSelectScalar = {
    id?: boolean
    user_id?: boolean
    full_name?: boolean
    phone?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
  }

  export type ProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "full_name" | "phone" | "country" | "created_at" | "updated_at" | "status", ExtArgs["result"]["profiles"]>
  export type ProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profiles"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      full_name: string
      phone: string
      country: string
      created_at: Date
      updated_at: Date
      status: $Enums.Status
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type ProfilesGetPayload<S extends boolean | null | undefined | ProfilesDefaultArgs> = $Result.GetResult<Prisma.$ProfilesPayload, S>

  type ProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface ProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profiles'], meta: { name: 'Profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {ProfilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilesFindUniqueArgs>(args: SelectSubset<T, ProfilesFindUniqueArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilesFindFirstArgs>(args?: SelectSubset<T, ProfilesFindFirstArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilesFindManyArgs>(args?: SelectSubset<T, ProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {ProfilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends ProfilesCreateArgs>(args: SelectSubset<T, ProfilesCreateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilesCreateManyArgs>(args?: SelectSubset<T, ProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {ProfilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends ProfilesDeleteArgs>(args: SelectSubset<T, ProfilesDeleteArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {ProfilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilesUpdateArgs>(args: SelectSubset<T, ProfilesUpdateArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilesDeleteManyArgs>(args?: SelectSubset<T, ProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilesUpdateManyArgs>(args: SelectSubset<T, ProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {ProfilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends ProfilesUpsertArgs>(args: SelectSubset<T, ProfilesUpsertArgs<ExtArgs>>): Prisma__ProfilesClient<$Result.GetResult<Prisma.$ProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfilesCountArgs>(
      args?: Subset<T, ProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
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
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profiles model
   */
  readonly fields: ProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profiles model
   */
  interface ProfilesFieldRefs {
    readonly id: FieldRef<"Profiles", 'String'>
    readonly user_id: FieldRef<"Profiles", 'String'>
    readonly full_name: FieldRef<"Profiles", 'String'>
    readonly phone: FieldRef<"Profiles", 'String'>
    readonly country: FieldRef<"Profiles", 'String'>
    readonly created_at: FieldRef<"Profiles", 'DateTime'>
    readonly updated_at: FieldRef<"Profiles", 'DateTime'>
    readonly status: FieldRef<"Profiles", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Profiles findUnique
   */
  export type ProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findUniqueOrThrow
   */
  export type ProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles findFirst
   */
  export type ProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findFirstOrThrow
   */
  export type ProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles findMany
   */
  export type ProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfilesOrderByWithRelationInput | ProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * Profiles create
   */
  export type ProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Profiles.
     */
    data: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
  }

  /**
   * Profiles createMany
   */
  export type ProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profiles createManyAndReturn
   */
  export type ProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfilesCreateManyInput | ProfilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profiles update
   */
  export type ProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Profiles.
     */
    data: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
    /**
     * Choose, which Profiles to update.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles updateMany
   */
  export type ProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profiles updateManyAndReturn
   */
  export type ProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profiles upsert
   */
  export type ProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Profiles to update in case it exists.
     */
    where: ProfilesWhereUniqueInput
    /**
     * In case the Profiles found by the `where` argument doesn't exist, create a new Profiles with this data.
     */
    create: XOR<ProfilesCreateInput, ProfilesUncheckedCreateInput>
    /**
     * In case the Profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilesUpdateInput, ProfilesUncheckedUpdateInput>
  }

  /**
   * Profiles delete
   */
  export type ProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
    /**
     * Filter which Profiles to delete.
     */
    where: ProfilesWhereUniqueInput
  }

  /**
   * Profiles deleteMany
   */
  export type ProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfilesWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profiles without action
   */
  export type ProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profiles
     */
    select?: ProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profiles
     */
    omit?: ProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilesInclude<ExtArgs> | null
  }


  /**
   * Model Subscription_plans
   */

  export type AggregateSubscription_plans = {
    _count: Subscription_plansCountAggregateOutputType | null
    _avg: Subscription_plansAvgAggregateOutputType | null
    _sum: Subscription_plansSumAggregateOutputType | null
    _min: Subscription_plansMinAggregateOutputType | null
    _max: Subscription_plansMaxAggregateOutputType | null
  }

  export type Subscription_plansAvgAggregateOutputType = {
    price: Decimal | null
    duration_days: number | null
  }

  export type Subscription_plansSumAggregateOutputType = {
    price: Decimal | null
    duration_days: number | null
  }

  export type Subscription_plansMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    duration_days: number | null
    is_active: boolean | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Subscription_plansMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    duration_days: number | null
    is_active: boolean | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Subscription_plansCountAggregateOutputType = {
    id: number
    name: number
    price: number
    duration_days: number
    features: number
    is_active: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Subscription_plansAvgAggregateInputType = {
    price?: true
    duration_days?: true
  }

  export type Subscription_plansSumAggregateInputType = {
    price?: true
    duration_days?: true
  }

  export type Subscription_plansMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration_days?: true
    is_active?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Subscription_plansMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration_days?: true
    is_active?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type Subscription_plansCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration_days?: true
    features?: true
    is_active?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Subscription_plansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription_plans to aggregate.
     */
    where?: Subscription_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscription_plans to fetch.
     */
    orderBy?: Subscription_plansOrderByWithRelationInput | Subscription_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Subscription_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscription_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscription_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscription_plans
    **/
    _count?: true | Subscription_plansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Subscription_plansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Subscription_plansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Subscription_plansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Subscription_plansMaxAggregateInputType
  }

  export type GetSubscription_plansAggregateType<T extends Subscription_plansAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription_plans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription_plans[P]>
      : GetScalarType<T[P], AggregateSubscription_plans[P]>
  }




  export type Subscription_plansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Subscription_plansWhereInput
    orderBy?: Subscription_plansOrderByWithAggregationInput | Subscription_plansOrderByWithAggregationInput[]
    by: Subscription_plansScalarFieldEnum[] | Subscription_plansScalarFieldEnum
    having?: Subscription_plansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Subscription_plansCountAggregateInputType | true
    _avg?: Subscription_plansAvgAggregateInputType
    _sum?: Subscription_plansSumAggregateInputType
    _min?: Subscription_plansMinAggregateInputType
    _max?: Subscription_plansMaxAggregateInputType
  }

  export type Subscription_plansGroupByOutputType = {
    id: string
    name: string
    price: Decimal
    duration_days: number
    features: JsonValue
    is_active: boolean
    status: $Enums.Status
    created_at: Date
    updated_at: Date
    _count: Subscription_plansCountAggregateOutputType | null
    _avg: Subscription_plansAvgAggregateOutputType | null
    _sum: Subscription_plansSumAggregateOutputType | null
    _min: Subscription_plansMinAggregateOutputType | null
    _max: Subscription_plansMaxAggregateOutputType | null
  }

  type GetSubscription_plansGroupByPayload<T extends Subscription_plansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Subscription_plansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Subscription_plansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Subscription_plansGroupByOutputType[P]>
            : GetScalarType<T[P], Subscription_plansGroupByOutputType[P]>
        }
      >
    >


  export type Subscription_plansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration_days?: boolean
    features?: boolean
    is_active?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_subscriptions?: boolean | Subscription_plans$user_subscriptionsArgs<ExtArgs>
    _count?: boolean | Subscription_plansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription_plans"]>

  export type Subscription_plansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration_days?: boolean
    features?: boolean
    is_active?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["subscription_plans"]>

  export type Subscription_plansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration_days?: boolean
    features?: boolean
    is_active?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["subscription_plans"]>

  export type Subscription_plansSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    duration_days?: boolean
    features?: boolean
    is_active?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type Subscription_plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "duration_days" | "features" | "is_active" | "status" | "created_at" | "updated_at", ExtArgs["result"]["subscription_plans"]>
  export type Subscription_plansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_subscriptions?: boolean | Subscription_plans$user_subscriptionsArgs<ExtArgs>
    _count?: boolean | Subscription_plansCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Subscription_plansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Subscription_plansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Subscription_plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription_plans"
    objects: {
      user_subscriptions: Prisma.$User_subscriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: Prisma.Decimal
      duration_days: number
      features: Prisma.JsonValue
      is_active: boolean
      status: $Enums.Status
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subscription_plans"]>
    composites: {}
  }

  type Subscription_plansGetPayload<S extends boolean | null | undefined | Subscription_plansDefaultArgs> = $Result.GetResult<Prisma.$Subscription_plansPayload, S>

  type Subscription_plansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Subscription_plansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Subscription_plansCountAggregateInputType | true
    }

  export interface Subscription_plansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription_plans'], meta: { name: 'Subscription_plans' } }
    /**
     * Find zero or one Subscription_plans that matches the filter.
     * @param {Subscription_plansFindUniqueArgs} args - Arguments to find a Subscription_plans
     * @example
     * // Get one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Subscription_plansFindUniqueArgs>(args: SelectSubset<T, Subscription_plansFindUniqueArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription_plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Subscription_plansFindUniqueOrThrowArgs} args - Arguments to find a Subscription_plans
     * @example
     * // Get one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Subscription_plansFindUniqueOrThrowArgs>(args: SelectSubset<T, Subscription_plansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_plansFindFirstArgs} args - Arguments to find a Subscription_plans
     * @example
     * // Get one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Subscription_plansFindFirstArgs>(args?: SelectSubset<T, Subscription_plansFindFirstArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription_plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_plansFindFirstOrThrowArgs} args - Arguments to find a Subscription_plans
     * @example
     * // Get one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Subscription_plansFindFirstOrThrowArgs>(args?: SelectSubset<T, Subscription_plansFindFirstOrThrowArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscription_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_plansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findMany()
     * 
     * // Get first 10 Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscription_plansWithIdOnly = await prisma.subscription_plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Subscription_plansFindManyArgs>(args?: SelectSubset<T, Subscription_plansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription_plans.
     * @param {Subscription_plansCreateArgs} args - Arguments to create a Subscription_plans.
     * @example
     * // Create one Subscription_plans
     * const Subscription_plans = await prisma.subscription_plans.create({
     *   data: {
     *     // ... data to create a Subscription_plans
     *   }
     * })
     * 
     */
    create<T extends Subscription_plansCreateArgs>(args: SelectSubset<T, Subscription_plansCreateArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscription_plans.
     * @param {Subscription_plansCreateManyArgs} args - Arguments to create many Subscription_plans.
     * @example
     * // Create many Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Subscription_plansCreateManyArgs>(args?: SelectSubset<T, Subscription_plansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscription_plans and returns the data saved in the database.
     * @param {Subscription_plansCreateManyAndReturnArgs} args - Arguments to create many Subscription_plans.
     * @example
     * // Create many Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscription_plans and only return the `id`
     * const subscription_plansWithIdOnly = await prisma.subscription_plans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Subscription_plansCreateManyAndReturnArgs>(args?: SelectSubset<T, Subscription_plansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription_plans.
     * @param {Subscription_plansDeleteArgs} args - Arguments to delete one Subscription_plans.
     * @example
     * // Delete one Subscription_plans
     * const Subscription_plans = await prisma.subscription_plans.delete({
     *   where: {
     *     // ... filter to delete one Subscription_plans
     *   }
     * })
     * 
     */
    delete<T extends Subscription_plansDeleteArgs>(args: SelectSubset<T, Subscription_plansDeleteArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription_plans.
     * @param {Subscription_plansUpdateArgs} args - Arguments to update one Subscription_plans.
     * @example
     * // Update one Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Subscription_plansUpdateArgs>(args: SelectSubset<T, Subscription_plansUpdateArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscription_plans.
     * @param {Subscription_plansDeleteManyArgs} args - Arguments to filter Subscription_plans to delete.
     * @example
     * // Delete a few Subscription_plans
     * const { count } = await prisma.subscription_plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Subscription_plansDeleteManyArgs>(args?: SelectSubset<T, Subscription_plansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_plansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Subscription_plansUpdateManyArgs>(args: SelectSubset<T, Subscription_plansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscription_plans and returns the data updated in the database.
     * @param {Subscription_plansUpdateManyAndReturnArgs} args - Arguments to update many Subscription_plans.
     * @example
     * // Update many Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscription_plans and only return the `id`
     * const subscription_plansWithIdOnly = await prisma.subscription_plans.updateManyAndReturn({
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
    updateManyAndReturn<T extends Subscription_plansUpdateManyAndReturnArgs>(args: SelectSubset<T, Subscription_plansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription_plans.
     * @param {Subscription_plansUpsertArgs} args - Arguments to update or create a Subscription_plans.
     * @example
     * // Update or create a Subscription_plans
     * const subscription_plans = await prisma.subscription_plans.upsert({
     *   create: {
     *     // ... data to create a Subscription_plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription_plans we want to update
     *   }
     * })
     */
    upsert<T extends Subscription_plansUpsertArgs>(args: SelectSubset<T, Subscription_plansUpsertArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_plansCountArgs} args - Arguments to filter Subscription_plans to count.
     * @example
     * // Count the number of Subscription_plans
     * const count = await prisma.subscription_plans.count({
     *   where: {
     *     // ... the filter for the Subscription_plans we want to count
     *   }
     * })
    **/
    count<T extends Subscription_plansCountArgs>(
      args?: Subset<T, Subscription_plansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Subscription_plansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_plansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Subscription_plansAggregateArgs>(args: Subset<T, Subscription_plansAggregateArgs>): Prisma.PrismaPromise<GetSubscription_plansAggregateType<T>>

    /**
     * Group by Subscription_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subscription_plansGroupByArgs} args - Group by arguments.
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
      T extends Subscription_plansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Subscription_plansGroupByArgs['orderBy'] }
        : { orderBy?: Subscription_plansGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Subscription_plansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscription_plansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription_plans model
   */
  readonly fields: Subscription_plansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription_plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Subscription_plansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_subscriptions<T extends Subscription_plans$user_subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription_plans$user_subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription_plans model
   */
  interface Subscription_plansFieldRefs {
    readonly id: FieldRef<"Subscription_plans", 'String'>
    readonly name: FieldRef<"Subscription_plans", 'String'>
    readonly price: FieldRef<"Subscription_plans", 'Decimal'>
    readonly duration_days: FieldRef<"Subscription_plans", 'Int'>
    readonly features: FieldRef<"Subscription_plans", 'Json'>
    readonly is_active: FieldRef<"Subscription_plans", 'Boolean'>
    readonly status: FieldRef<"Subscription_plans", 'Status'>
    readonly created_at: FieldRef<"Subscription_plans", 'DateTime'>
    readonly updated_at: FieldRef<"Subscription_plans", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription_plans findUnique
   */
  export type Subscription_plansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * Filter, which Subscription_plans to fetch.
     */
    where: Subscription_plansWhereUniqueInput
  }

  /**
   * Subscription_plans findUniqueOrThrow
   */
  export type Subscription_plansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * Filter, which Subscription_plans to fetch.
     */
    where: Subscription_plansWhereUniqueInput
  }

  /**
   * Subscription_plans findFirst
   */
  export type Subscription_plansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * Filter, which Subscription_plans to fetch.
     */
    where?: Subscription_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscription_plans to fetch.
     */
    orderBy?: Subscription_plansOrderByWithRelationInput | Subscription_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscription_plans.
     */
    cursor?: Subscription_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscription_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscription_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscription_plans.
     */
    distinct?: Subscription_plansScalarFieldEnum | Subscription_plansScalarFieldEnum[]
  }

  /**
   * Subscription_plans findFirstOrThrow
   */
  export type Subscription_plansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * Filter, which Subscription_plans to fetch.
     */
    where?: Subscription_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscription_plans to fetch.
     */
    orderBy?: Subscription_plansOrderByWithRelationInput | Subscription_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscription_plans.
     */
    cursor?: Subscription_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscription_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscription_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscription_plans.
     */
    distinct?: Subscription_plansScalarFieldEnum | Subscription_plansScalarFieldEnum[]
  }

  /**
   * Subscription_plans findMany
   */
  export type Subscription_plansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * Filter, which Subscription_plans to fetch.
     */
    where?: Subscription_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscription_plans to fetch.
     */
    orderBy?: Subscription_plansOrderByWithRelationInput | Subscription_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscription_plans.
     */
    cursor?: Subscription_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscription_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscription_plans.
     */
    skip?: number
    distinct?: Subscription_plansScalarFieldEnum | Subscription_plansScalarFieldEnum[]
  }

  /**
   * Subscription_plans create
   */
  export type Subscription_plansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription_plans.
     */
    data: XOR<Subscription_plansCreateInput, Subscription_plansUncheckedCreateInput>
  }

  /**
   * Subscription_plans createMany
   */
  export type Subscription_plansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscription_plans.
     */
    data: Subscription_plansCreateManyInput | Subscription_plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription_plans createManyAndReturn
   */
  export type Subscription_plansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * The data used to create many Subscription_plans.
     */
    data: Subscription_plansCreateManyInput | Subscription_plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription_plans update
   */
  export type Subscription_plansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription_plans.
     */
    data: XOR<Subscription_plansUpdateInput, Subscription_plansUncheckedUpdateInput>
    /**
     * Choose, which Subscription_plans to update.
     */
    where: Subscription_plansWhereUniqueInput
  }

  /**
   * Subscription_plans updateMany
   */
  export type Subscription_plansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscription_plans.
     */
    data: XOR<Subscription_plansUpdateManyMutationInput, Subscription_plansUncheckedUpdateManyInput>
    /**
     * Filter which Subscription_plans to update
     */
    where?: Subscription_plansWhereInput
    /**
     * Limit how many Subscription_plans to update.
     */
    limit?: number
  }

  /**
   * Subscription_plans updateManyAndReturn
   */
  export type Subscription_plansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * The data used to update Subscription_plans.
     */
    data: XOR<Subscription_plansUpdateManyMutationInput, Subscription_plansUncheckedUpdateManyInput>
    /**
     * Filter which Subscription_plans to update
     */
    where?: Subscription_plansWhereInput
    /**
     * Limit how many Subscription_plans to update.
     */
    limit?: number
  }

  /**
   * Subscription_plans upsert
   */
  export type Subscription_plansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription_plans to update in case it exists.
     */
    where: Subscription_plansWhereUniqueInput
    /**
     * In case the Subscription_plans found by the `where` argument doesn't exist, create a new Subscription_plans with this data.
     */
    create: XOR<Subscription_plansCreateInput, Subscription_plansUncheckedCreateInput>
    /**
     * In case the Subscription_plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Subscription_plansUpdateInput, Subscription_plansUncheckedUpdateInput>
  }

  /**
   * Subscription_plans delete
   */
  export type Subscription_plansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
    /**
     * Filter which Subscription_plans to delete.
     */
    where: Subscription_plansWhereUniqueInput
  }

  /**
   * Subscription_plans deleteMany
   */
  export type Subscription_plansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription_plans to delete
     */
    where?: Subscription_plansWhereInput
    /**
     * Limit how many Subscription_plans to delete.
     */
    limit?: number
  }

  /**
   * Subscription_plans.user_subscriptions
   */
  export type Subscription_plans$user_subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    where?: User_subscriptionsWhereInput
    orderBy?: User_subscriptionsOrderByWithRelationInput | User_subscriptionsOrderByWithRelationInput[]
    cursor?: User_subscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_subscriptionsScalarFieldEnum | User_subscriptionsScalarFieldEnum[]
  }

  /**
   * Subscription_plans without action
   */
  export type Subscription_plansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription_plans
     */
    select?: Subscription_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription_plans
     */
    omit?: Subscription_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Subscription_plansInclude<ExtArgs> | null
  }


  /**
   * Model User_subscriptions
   */

  export type AggregateUser_subscriptions = {
    _count: User_subscriptionsCountAggregateOutputType | null
    _min: User_subscriptionsMinAggregateOutputType | null
    _max: User_subscriptionsMaxAggregateOutputType | null
  }

  export type User_subscriptionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    plan_id: string | null
    start_date: Date | null
    end_date: Date | null
    status: $Enums.SubsStatus | null
    auto_renew: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_subscriptionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    plan_id: string | null
    start_date: Date | null
    end_date: Date | null
    status: $Enums.SubsStatus | null
    auto_renew: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_subscriptionsCountAggregateOutputType = {
    id: number
    user_id: number
    plan_id: number
    start_date: number
    end_date: number
    status: number
    auto_renew: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_subscriptionsMinAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    status?: true
    auto_renew?: true
    created_at?: true
    updated_at?: true
  }

  export type User_subscriptionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    status?: true
    auto_renew?: true
    created_at?: true
    updated_at?: true
  }

  export type User_subscriptionsCountAggregateInputType = {
    id?: true
    user_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    status?: true
    auto_renew?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_subscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_subscriptions to aggregate.
     */
    where?: User_subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_subscriptions to fetch.
     */
    orderBy?: User_subscriptionsOrderByWithRelationInput | User_subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_subscriptions
    **/
    _count?: true | User_subscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_subscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_subscriptionsMaxAggregateInputType
  }

  export type GetUser_subscriptionsAggregateType<T extends User_subscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_subscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_subscriptions[P]>
      : GetScalarType<T[P], AggregateUser_subscriptions[P]>
  }




  export type User_subscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_subscriptionsWhereInput
    orderBy?: User_subscriptionsOrderByWithAggregationInput | User_subscriptionsOrderByWithAggregationInput[]
    by: User_subscriptionsScalarFieldEnum[] | User_subscriptionsScalarFieldEnum
    having?: User_subscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_subscriptionsCountAggregateInputType | true
    _min?: User_subscriptionsMinAggregateInputType
    _max?: User_subscriptionsMaxAggregateInputType
  }

  export type User_subscriptionsGroupByOutputType = {
    id: string
    user_id: string
    plan_id: string
    start_date: Date
    end_date: Date
    status: $Enums.SubsStatus
    auto_renew: boolean
    created_at: Date
    updated_at: Date
    _count: User_subscriptionsCountAggregateOutputType | null
    _min: User_subscriptionsMinAggregateOutputType | null
    _max: User_subscriptionsMaxAggregateOutputType | null
  }

  type GetUser_subscriptionsGroupByPayload<T extends User_subscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_subscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_subscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_subscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], User_subscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type User_subscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    auto_renew?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | Subscription_plansDefaultArgs<ExtArgs>
    payments?: boolean | User_subscriptions$paymentsArgs<ExtArgs>
    _count?: boolean | User_subscriptionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_subscriptions"]>

  export type User_subscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    auto_renew?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | Subscription_plansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_subscriptions"]>

  export type User_subscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    auto_renew?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | Subscription_plansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_subscriptions"]>

  export type User_subscriptionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    auto_renew?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type User_subscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "plan_id" | "start_date" | "end_date" | "status" | "auto_renew" | "created_at" | "updated_at", ExtArgs["result"]["user_subscriptions"]>
  export type User_subscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | Subscription_plansDefaultArgs<ExtArgs>
    payments?: boolean | User_subscriptions$paymentsArgs<ExtArgs>
    _count?: boolean | User_subscriptionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type User_subscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | Subscription_plansDefaultArgs<ExtArgs>
  }
  export type User_subscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    plan?: boolean | Subscription_plansDefaultArgs<ExtArgs>
  }

  export type $User_subscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_subscriptions"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      plan: Prisma.$Subscription_plansPayload<ExtArgs>
      payments: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      plan_id: string
      start_date: Date
      end_date: Date
      status: $Enums.SubsStatus
      auto_renew: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user_subscriptions"]>
    composites: {}
  }

  type User_subscriptionsGetPayload<S extends boolean | null | undefined | User_subscriptionsDefaultArgs> = $Result.GetResult<Prisma.$User_subscriptionsPayload, S>

  type User_subscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_subscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_subscriptionsCountAggregateInputType | true
    }

  export interface User_subscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_subscriptions'], meta: { name: 'User_subscriptions' } }
    /**
     * Find zero or one User_subscriptions that matches the filter.
     * @param {User_subscriptionsFindUniqueArgs} args - Arguments to find a User_subscriptions
     * @example
     * // Get one User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_subscriptionsFindUniqueArgs>(args: SelectSubset<T, User_subscriptionsFindUniqueArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_subscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_subscriptionsFindUniqueOrThrowArgs} args - Arguments to find a User_subscriptions
     * @example
     * // Get one User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_subscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, User_subscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subscriptionsFindFirstArgs} args - Arguments to find a User_subscriptions
     * @example
     * // Get one User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_subscriptionsFindFirstArgs>(args?: SelectSubset<T, User_subscriptionsFindFirstArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subscriptionsFindFirstOrThrowArgs} args - Arguments to find a User_subscriptions
     * @example
     * // Get one User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_subscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, User_subscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.findMany()
     * 
     * // Get first 10 User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_subscriptionsWithIdOnly = await prisma.user_subscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_subscriptionsFindManyArgs>(args?: SelectSubset<T, User_subscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_subscriptions.
     * @param {User_subscriptionsCreateArgs} args - Arguments to create a User_subscriptions.
     * @example
     * // Create one User_subscriptions
     * const User_subscriptions = await prisma.user_subscriptions.create({
     *   data: {
     *     // ... data to create a User_subscriptions
     *   }
     * })
     * 
     */
    create<T extends User_subscriptionsCreateArgs>(args: SelectSubset<T, User_subscriptionsCreateArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_subscriptions.
     * @param {User_subscriptionsCreateManyArgs} args - Arguments to create many User_subscriptions.
     * @example
     * // Create many User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_subscriptionsCreateManyArgs>(args?: SelectSubset<T, User_subscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_subscriptions and returns the data saved in the database.
     * @param {User_subscriptionsCreateManyAndReturnArgs} args - Arguments to create many User_subscriptions.
     * @example
     * // Create many User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_subscriptions and only return the `id`
     * const user_subscriptionsWithIdOnly = await prisma.user_subscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_subscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, User_subscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_subscriptions.
     * @param {User_subscriptionsDeleteArgs} args - Arguments to delete one User_subscriptions.
     * @example
     * // Delete one User_subscriptions
     * const User_subscriptions = await prisma.user_subscriptions.delete({
     *   where: {
     *     // ... filter to delete one User_subscriptions
     *   }
     * })
     * 
     */
    delete<T extends User_subscriptionsDeleteArgs>(args: SelectSubset<T, User_subscriptionsDeleteArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_subscriptions.
     * @param {User_subscriptionsUpdateArgs} args - Arguments to update one User_subscriptions.
     * @example
     * // Update one User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_subscriptionsUpdateArgs>(args: SelectSubset<T, User_subscriptionsUpdateArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_subscriptions.
     * @param {User_subscriptionsDeleteManyArgs} args - Arguments to filter User_subscriptions to delete.
     * @example
     * // Delete a few User_subscriptions
     * const { count } = await prisma.user_subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_subscriptionsDeleteManyArgs>(args?: SelectSubset<T, User_subscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_subscriptionsUpdateManyArgs>(args: SelectSubset<T, User_subscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_subscriptions and returns the data updated in the database.
     * @param {User_subscriptionsUpdateManyAndReturnArgs} args - Arguments to update many User_subscriptions.
     * @example
     * // Update many User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_subscriptions and only return the `id`
     * const user_subscriptionsWithIdOnly = await prisma.user_subscriptions.updateManyAndReturn({
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
    updateManyAndReturn<T extends User_subscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, User_subscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_subscriptions.
     * @param {User_subscriptionsUpsertArgs} args - Arguments to update or create a User_subscriptions.
     * @example
     * // Update or create a User_subscriptions
     * const user_subscriptions = await prisma.user_subscriptions.upsert({
     *   create: {
     *     // ... data to create a User_subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_subscriptions we want to update
     *   }
     * })
     */
    upsert<T extends User_subscriptionsUpsertArgs>(args: SelectSubset<T, User_subscriptionsUpsertArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subscriptionsCountArgs} args - Arguments to filter User_subscriptions to count.
     * @example
     * // Count the number of User_subscriptions
     * const count = await prisma.user_subscriptions.count({
     *   where: {
     *     // ... the filter for the User_subscriptions we want to count
     *   }
     * })
    **/
    count<T extends User_subscriptionsCountArgs>(
      args?: Subset<T, User_subscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_subscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_subscriptionsAggregateArgs>(args: Subset<T, User_subscriptionsAggregateArgs>): Prisma.PrismaPromise<GetUser_subscriptionsAggregateType<T>>

    /**
     * Group by User_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_subscriptionsGroupByArgs} args - Group by arguments.
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
      T extends User_subscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_subscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: User_subscriptionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_subscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_subscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_subscriptions model
   */
  readonly fields: User_subscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_subscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends Subscription_plansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Subscription_plansDefaultArgs<ExtArgs>>): Prisma__Subscription_plansClient<$Result.GetResult<Prisma.$Subscription_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends User_subscriptions$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User_subscriptions$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User_subscriptions model
   */
  interface User_subscriptionsFieldRefs {
    readonly id: FieldRef<"User_subscriptions", 'String'>
    readonly user_id: FieldRef<"User_subscriptions", 'String'>
    readonly plan_id: FieldRef<"User_subscriptions", 'String'>
    readonly start_date: FieldRef<"User_subscriptions", 'DateTime'>
    readonly end_date: FieldRef<"User_subscriptions", 'DateTime'>
    readonly status: FieldRef<"User_subscriptions", 'SubsStatus'>
    readonly auto_renew: FieldRef<"User_subscriptions", 'Boolean'>
    readonly created_at: FieldRef<"User_subscriptions", 'DateTime'>
    readonly updated_at: FieldRef<"User_subscriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_subscriptions findUnique
   */
  export type User_subscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which User_subscriptions to fetch.
     */
    where: User_subscriptionsWhereUniqueInput
  }

  /**
   * User_subscriptions findUniqueOrThrow
   */
  export type User_subscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which User_subscriptions to fetch.
     */
    where: User_subscriptionsWhereUniqueInput
  }

  /**
   * User_subscriptions findFirst
   */
  export type User_subscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which User_subscriptions to fetch.
     */
    where?: User_subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_subscriptions to fetch.
     */
    orderBy?: User_subscriptionsOrderByWithRelationInput | User_subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_subscriptions.
     */
    cursor?: User_subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_subscriptions.
     */
    distinct?: User_subscriptionsScalarFieldEnum | User_subscriptionsScalarFieldEnum[]
  }

  /**
   * User_subscriptions findFirstOrThrow
   */
  export type User_subscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which User_subscriptions to fetch.
     */
    where?: User_subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_subscriptions to fetch.
     */
    orderBy?: User_subscriptionsOrderByWithRelationInput | User_subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_subscriptions.
     */
    cursor?: User_subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_subscriptions.
     */
    distinct?: User_subscriptionsScalarFieldEnum | User_subscriptionsScalarFieldEnum[]
  }

  /**
   * User_subscriptions findMany
   */
  export type User_subscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which User_subscriptions to fetch.
     */
    where?: User_subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_subscriptions to fetch.
     */
    orderBy?: User_subscriptionsOrderByWithRelationInput | User_subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_subscriptions.
     */
    cursor?: User_subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_subscriptions.
     */
    skip?: number
    distinct?: User_subscriptionsScalarFieldEnum | User_subscriptionsScalarFieldEnum[]
  }

  /**
   * User_subscriptions create
   */
  export type User_subscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a User_subscriptions.
     */
    data: XOR<User_subscriptionsCreateInput, User_subscriptionsUncheckedCreateInput>
  }

  /**
   * User_subscriptions createMany
   */
  export type User_subscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_subscriptions.
     */
    data: User_subscriptionsCreateManyInput | User_subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_subscriptions createManyAndReturn
   */
  export type User_subscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many User_subscriptions.
     */
    data: User_subscriptionsCreateManyInput | User_subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_subscriptions update
   */
  export type User_subscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a User_subscriptions.
     */
    data: XOR<User_subscriptionsUpdateInput, User_subscriptionsUncheckedUpdateInput>
    /**
     * Choose, which User_subscriptions to update.
     */
    where: User_subscriptionsWhereUniqueInput
  }

  /**
   * User_subscriptions updateMany
   */
  export type User_subscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_subscriptions.
     */
    data: XOR<User_subscriptionsUpdateManyMutationInput, User_subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which User_subscriptions to update
     */
    where?: User_subscriptionsWhereInput
    /**
     * Limit how many User_subscriptions to update.
     */
    limit?: number
  }

  /**
   * User_subscriptions updateManyAndReturn
   */
  export type User_subscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update User_subscriptions.
     */
    data: XOR<User_subscriptionsUpdateManyMutationInput, User_subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which User_subscriptions to update
     */
    where?: User_subscriptionsWhereInput
    /**
     * Limit how many User_subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_subscriptions upsert
   */
  export type User_subscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the User_subscriptions to update in case it exists.
     */
    where: User_subscriptionsWhereUniqueInput
    /**
     * In case the User_subscriptions found by the `where` argument doesn't exist, create a new User_subscriptions with this data.
     */
    create: XOR<User_subscriptionsCreateInput, User_subscriptionsUncheckedCreateInput>
    /**
     * In case the User_subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_subscriptionsUpdateInput, User_subscriptionsUncheckedUpdateInput>
  }

  /**
   * User_subscriptions delete
   */
  export type User_subscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
    /**
     * Filter which User_subscriptions to delete.
     */
    where: User_subscriptionsWhereUniqueInput
  }

  /**
   * User_subscriptions deleteMany
   */
  export type User_subscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_subscriptions to delete
     */
    where?: User_subscriptionsWhereInput
    /**
     * Limit how many User_subscriptions to delete.
     */
    limit?: number
  }

  /**
   * User_subscriptions.payments
   */
  export type User_subscriptions$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * User_subscriptions without action
   */
  export type User_subscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_subscriptions
     */
    select?: User_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_subscriptions
     */
    omit?: User_subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_subscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    user_subscription_id: string | null
    amount: Decimal | null
    payment_method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    external_transaction_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    user_subscription_id: string | null
    amount: Decimal | null
    payment_method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    external_transaction_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    user_subscription_id: number
    amount: number
    payment_method: number
    payment_details: number
    status: number
    external_transaction_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    user_subscription_id?: true
    amount?: true
    payment_method?: true
    status?: true
    external_transaction_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    user_subscription_id?: true
    amount?: true
    payment_method?: true
    status?: true
    external_transaction_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    user_subscription_id?: true
    amount?: true
    payment_method?: true
    payment_details?: true
    status?: true
    external_transaction_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    user_subscription_id: string
    amount: Decimal
    payment_method: $Enums.PaymentMethod
    payment_details: JsonValue
    status: $Enums.PaymentStatus
    external_transaction_id: string
    created_at: Date
    updated_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_subscription_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_details?: boolean
    status?: boolean
    external_transaction_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_subscription?: boolean | User_subscriptionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_subscription_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_details?: boolean
    status?: boolean
    external_transaction_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_subscription?: boolean | User_subscriptionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_subscription_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_details?: boolean
    status?: boolean
    external_transaction_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_subscription?: boolean | User_subscriptionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    user_subscription_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_details?: boolean
    status?: boolean
    external_transaction_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_subscription_id" | "amount" | "payment_method" | "payment_details" | "status" | "external_transaction_id" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_subscription?: boolean | User_subscriptionsDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_subscription?: boolean | User_subscriptionsDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_subscription?: boolean | User_subscriptionsDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      user_subscription: Prisma.$User_subscriptionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_subscription_id: string
      amount: Prisma.Decimal
      payment_method: $Enums.PaymentMethod
      payment_details: Prisma.JsonValue
      status: $Enums.PaymentStatus
      external_transaction_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_subscription<T extends User_subscriptionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, User_subscriptionsDefaultArgs<ExtArgs>>): Prisma__User_subscriptionsClient<$Result.GetResult<Prisma.$User_subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'String'>
    readonly user_subscription_id: FieldRef<"Payments", 'String'>
    readonly amount: FieldRef<"Payments", 'Decimal'>
    readonly payment_method: FieldRef<"Payments", 'PaymentMethod'>
    readonly payment_details: FieldRef<"Payments", 'Json'>
    readonly status: FieldRef<"Payments", 'PaymentStatus'>
    readonly external_transaction_id: FieldRef<"Payments", 'String'>
    readonly created_at: FieldRef<"Payments", 'DateTime'>
    readonly updated_at: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    status: $Enums.Status | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    status: $Enums.Status | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    status: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    status?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    status?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    status?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    status: $Enums.Status
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    status?: boolean
    movie_categories?: boolean | Categories$movie_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    status?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    status?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    status?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "status", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie_categories?: boolean | Categories$movie_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      movie_categories: Prisma.$Movie_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      status: $Enums.Status
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie_categories<T extends Categories$movie_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$movie_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'String'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly slug: FieldRef<"Categories", 'String'>
    readonly description: FieldRef<"Categories", 'String'>
    readonly status: FieldRef<"Categories", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.movie_categories
   */
  export type Categories$movie_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    where?: Movie_categoriesWhereInput
    orderBy?: Movie_categoriesOrderByWithRelationInput | Movie_categoriesOrderByWithRelationInput[]
    cursor?: Movie_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Movie_categoriesScalarFieldEnum | Movie_categoriesScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    release_year: number | null
    duration_minutes: number | null
    rating: Decimal | null
    view_count: number | null
  }

  export type MoviesSumAggregateOutputType = {
    release_year: number | null
    duration_minutes: number | null
    rating: Decimal | null
    view_count: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    release_year: number | null
    duration_minutes: number | null
    poster_url: string | null
    rating: Decimal | null
    subscription_type: $Enums.SubscriptionType | null
    view_count: number | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    release_year: number | null
    duration_minutes: number | null
    poster_url: string | null
    rating: Decimal | null
    subscription_type: $Enums.SubscriptionType | null
    view_count: number | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    release_year: number
    duration_minutes: number
    poster_url: number
    rating: number
    subscription_type: number
    view_count: number
    created_by: number
    created_at: number
    updated_at: number
    status: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    release_year?: true
    duration_minutes?: true
    rating?: true
    view_count?: true
  }

  export type MoviesSumAggregateInputType = {
    release_year?: true
    duration_minutes?: true
    rating?: true
    view_count?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    release_year?: true
    duration_minutes?: true
    poster_url?: true
    rating?: true
    subscription_type?: true
    view_count?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    release_year?: true
    duration_minutes?: true
    poster_url?: true
    rating?: true
    subscription_type?: true
    view_count?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    release_year?: true
    duration_minutes?: true
    poster_url?: true
    rating?: true
    subscription_type?: true
    view_count?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    status?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to aggregate.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type MoviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithAggregationInput | MoviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: MoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal
    subscription_type: $Enums.SubscriptionType
    view_count: number
    created_by: string
    created_at: Date
    updated_at: Date
    status: $Enums.Status
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends MoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type MoviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    release_year?: boolean
    duration_minutes?: boolean
    poster_url?: boolean
    rating?: boolean
    subscription_type?: boolean
    view_count?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    movie_categories?: boolean | Movies$movie_categoriesArgs<ExtArgs>
    movie_files?: boolean | Movies$movie_filesArgs<ExtArgs>
    favorites?: boolean | Movies$favoritesArgs<ExtArgs>
    reviews?: boolean | Movies$reviewsArgs<ExtArgs>
    watch_history?: boolean | Movies$watch_historyArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    release_year?: boolean
    duration_minutes?: boolean
    poster_url?: boolean
    rating?: boolean
    subscription_type?: boolean
    view_count?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    release_year?: boolean
    duration_minutes?: boolean
    poster_url?: boolean
    rating?: boolean
    subscription_type?: boolean
    view_count?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    release_year?: boolean
    duration_minutes?: boolean
    poster_url?: boolean
    rating?: boolean
    subscription_type?: boolean
    view_count?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
  }

  export type MoviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "release_year" | "duration_minutes" | "poster_url" | "rating" | "subscription_type" | "view_count" | "created_by" | "created_at" | "updated_at" | "status", ExtArgs["result"]["movies"]>
  export type MoviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie_categories?: boolean | Movies$movie_categoriesArgs<ExtArgs>
    movie_files?: boolean | Movies$movie_filesArgs<ExtArgs>
    favorites?: boolean | Movies$favoritesArgs<ExtArgs>
    reviews?: boolean | Movies$reviewsArgs<ExtArgs>
    watch_history?: boolean | Movies$watch_historyArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MoviesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MoviesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MoviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movies"
    objects: {
      movie_categories: Prisma.$Movie_categoriesPayload<ExtArgs>[]
      movie_files: Prisma.$Movie_filesPayload<ExtArgs>[]
      favorites: Prisma.$FavoritesPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      watch_history: Prisma.$Watch_historyPayload<ExtArgs>[]
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string
      release_year: number
      duration_minutes: number
      poster_url: string
      rating: Prisma.Decimal
      subscription_type: $Enums.SubscriptionType
      view_count: number
      created_by: string
      created_at: Date
      updated_at: Date
      status: $Enums.Status
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }

  type MoviesGetPayload<S extends boolean | null | undefined | MoviesDefaultArgs> = $Result.GetResult<Prisma.$MoviesPayload, S>

  type MoviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface MoviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movies'], meta: { name: 'Movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {MoviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoviesFindUniqueArgs>(args: SelectSubset<T, MoviesFindUniqueArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoviesFindUniqueOrThrowArgs>(args: SelectSubset<T, MoviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoviesFindFirstArgs>(args?: SelectSubset<T, MoviesFindFirstArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoviesFindFirstOrThrowArgs>(args?: SelectSubset<T, MoviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoviesFindManyArgs>(args?: SelectSubset<T, MoviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movies.
     * @param {MoviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
     */
    create<T extends MoviesCreateArgs>(args: SelectSubset<T, MoviesCreateArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MoviesCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoviesCreateManyArgs>(args?: SelectSubset<T, MoviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MoviesCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoviesCreateManyAndReturnArgs>(args?: SelectSubset<T, MoviesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movies.
     * @param {MoviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
     */
    delete<T extends MoviesDeleteArgs>(args: SelectSubset<T, MoviesDeleteArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movies.
     * @param {MoviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoviesUpdateArgs>(args: SelectSubset<T, MoviesUpdateArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MoviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoviesDeleteManyArgs>(args?: SelectSubset<T, MoviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoviesUpdateManyArgs>(args: SelectSubset<T, MoviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MoviesUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoviesUpdateManyAndReturnArgs>(args: SelectSubset<T, MoviesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movies.
     * @param {MoviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
     */
    upsert<T extends MoviesUpsertArgs>(args: SelectSubset<T, MoviesUpsertArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MoviesCountArgs>(
      args?: Subset<T, MoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesGroupByArgs} args - Group by arguments.
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
      T extends MoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesGroupByArgs['orderBy'] }
        : { orderBy?: MoviesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movies model
   */
  readonly fields: MoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie_categories<T extends Movies$movie_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Movies$movie_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movie_files<T extends Movies$movie_filesArgs<ExtArgs> = {}>(args?: Subset<T, Movies$movie_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Movies$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Movies$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Movies$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Movies$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watch_history<T extends Movies$watch_historyArgs<ExtArgs> = {}>(args?: Subset<T, Movies$watch_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movies model
   */
  interface MoviesFieldRefs {
    readonly id: FieldRef<"Movies", 'String'>
    readonly title: FieldRef<"Movies", 'String'>
    readonly slug: FieldRef<"Movies", 'String'>
    readonly description: FieldRef<"Movies", 'String'>
    readonly release_year: FieldRef<"Movies", 'Int'>
    readonly duration_minutes: FieldRef<"Movies", 'Int'>
    readonly poster_url: FieldRef<"Movies", 'String'>
    readonly rating: FieldRef<"Movies", 'Decimal'>
    readonly subscription_type: FieldRef<"Movies", 'SubscriptionType'>
    readonly view_count: FieldRef<"Movies", 'Int'>
    readonly created_by: FieldRef<"Movies", 'String'>
    readonly created_at: FieldRef<"Movies", 'DateTime'>
    readonly updated_at: FieldRef<"Movies", 'DateTime'>
    readonly status: FieldRef<"Movies", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Movies findUnique
   */
  export type MoviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findUniqueOrThrow
   */
  export type MoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findFirst
   */
  export type MoviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findFirstOrThrow
   */
  export type MoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findMany
   */
  export type MoviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies create
   */
  export type MoviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a Movies.
     */
    data: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
  }

  /**
   * Movies createMany
   */
  export type MoviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movies createManyAndReturn
   */
  export type MoviesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movies update
   */
  export type MoviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a Movies.
     */
    data: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
    /**
     * Choose, which Movies to update.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies updateMany
   */
  export type MoviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movies updateManyAndReturn
   */
  export type MoviesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movies upsert
   */
  export type MoviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the Movies to update in case it exists.
     */
    where: MoviesWhereUniqueInput
    /**
     * In case the Movies found by the `where` argument doesn't exist, create a new Movies with this data.
     */
    create: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
    /**
     * In case the Movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
  }

  /**
   * Movies delete
   */
  export type MoviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter which Movies to delete.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies deleteMany
   */
  export type MoviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MoviesWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movies.movie_categories
   */
  export type Movies$movie_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    where?: Movie_categoriesWhereInput
    orderBy?: Movie_categoriesOrderByWithRelationInput | Movie_categoriesOrderByWithRelationInput[]
    cursor?: Movie_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Movie_categoriesScalarFieldEnum | Movie_categoriesScalarFieldEnum[]
  }

  /**
   * Movies.movie_files
   */
  export type Movies$movie_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    where?: Movie_filesWhereInput
    orderBy?: Movie_filesOrderByWithRelationInput | Movie_filesOrderByWithRelationInput[]
    cursor?: Movie_filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Movie_filesScalarFieldEnum | Movie_filesScalarFieldEnum[]
  }

  /**
   * Movies.favorites
   */
  export type Movies$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    where?: FavoritesWhereInput
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    cursor?: FavoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * Movies.reviews
   */
  export type Movies$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Movies.watch_history
   */
  export type Movies$watch_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    where?: Watch_historyWhereInput
    orderBy?: Watch_historyOrderByWithRelationInput | Watch_historyOrderByWithRelationInput[]
    cursor?: Watch_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * Movies without action
   */
  export type MoviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movies
     */
    omit?: MoviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
  }


  /**
   * Model Movie_categories
   */

  export type AggregateMovie_categories = {
    _count: Movie_categoriesCountAggregateOutputType | null
    _min: Movie_categoriesMinAggregateOutputType | null
    _max: Movie_categoriesMaxAggregateOutputType | null
  }

  export type Movie_categoriesMinAggregateOutputType = {
    id: string | null
    movie_id: string | null
    category_id: string | null
  }

  export type Movie_categoriesMaxAggregateOutputType = {
    id: string | null
    movie_id: string | null
    category_id: string | null
  }

  export type Movie_categoriesCountAggregateOutputType = {
    id: number
    movie_id: number
    category_id: number
    _all: number
  }


  export type Movie_categoriesMinAggregateInputType = {
    id?: true
    movie_id?: true
    category_id?: true
  }

  export type Movie_categoriesMaxAggregateInputType = {
    id?: true
    movie_id?: true
    category_id?: true
  }

  export type Movie_categoriesCountAggregateInputType = {
    id?: true
    movie_id?: true
    category_id?: true
    _all?: true
  }

  export type Movie_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie_categories to aggregate.
     */
    where?: Movie_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_categories to fetch.
     */
    orderBy?: Movie_categoriesOrderByWithRelationInput | Movie_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Movie_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movie_categories
    **/
    _count?: true | Movie_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Movie_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Movie_categoriesMaxAggregateInputType
  }

  export type GetMovie_categoriesAggregateType<T extends Movie_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie_categories[P]>
      : GetScalarType<T[P], AggregateMovie_categories[P]>
  }




  export type Movie_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Movie_categoriesWhereInput
    orderBy?: Movie_categoriesOrderByWithAggregationInput | Movie_categoriesOrderByWithAggregationInput[]
    by: Movie_categoriesScalarFieldEnum[] | Movie_categoriesScalarFieldEnum
    having?: Movie_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Movie_categoriesCountAggregateInputType | true
    _min?: Movie_categoriesMinAggregateInputType
    _max?: Movie_categoriesMaxAggregateInputType
  }

  export type Movie_categoriesGroupByOutputType = {
    id: string
    movie_id: string
    category_id: string
    _count: Movie_categoriesCountAggregateOutputType | null
    _min: Movie_categoriesMinAggregateOutputType | null
    _max: Movie_categoriesMaxAggregateOutputType | null
  }

  type GetMovie_categoriesGroupByPayload<T extends Movie_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Movie_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Movie_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Movie_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Movie_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type Movie_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movie_id?: boolean
    category_id?: boolean
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie_categories"]>

  export type Movie_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movie_id?: boolean
    category_id?: boolean
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie_categories"]>

  export type Movie_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movie_id?: boolean
    category_id?: boolean
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie_categories"]>

  export type Movie_categoriesSelectScalar = {
    id?: boolean
    movie_id?: boolean
    category_id?: boolean
  }

  export type Movie_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movie_id" | "category_id", ExtArgs["result"]["movie_categories"]>
  export type Movie_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type Movie_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type Movie_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $Movie_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie_categories"
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>
      categories: Prisma.$CategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      movie_id: string
      category_id: string
    }, ExtArgs["result"]["movie_categories"]>
    composites: {}
  }

  type Movie_categoriesGetPayload<S extends boolean | null | undefined | Movie_categoriesDefaultArgs> = $Result.GetResult<Prisma.$Movie_categoriesPayload, S>

  type Movie_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Movie_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Movie_categoriesCountAggregateInputType | true
    }

  export interface Movie_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie_categories'], meta: { name: 'Movie_categories' } }
    /**
     * Find zero or one Movie_categories that matches the filter.
     * @param {Movie_categoriesFindUniqueArgs} args - Arguments to find a Movie_categories
     * @example
     * // Get one Movie_categories
     * const movie_categories = await prisma.movie_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Movie_categoriesFindUniqueArgs>(args: SelectSubset<T, Movie_categoriesFindUniqueArgs<ExtArgs>>): Prisma__Movie_categoriesClient<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Movie_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Movie_categories
     * @example
     * // Get one Movie_categories
     * const movie_categories = await prisma.movie_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Movie_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, Movie_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Movie_categoriesClient<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_categoriesFindFirstArgs} args - Arguments to find a Movie_categories
     * @example
     * // Get one Movie_categories
     * const movie_categories = await prisma.movie_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Movie_categoriesFindFirstArgs>(args?: SelectSubset<T, Movie_categoriesFindFirstArgs<ExtArgs>>): Prisma__Movie_categoriesClient<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_categoriesFindFirstOrThrowArgs} args - Arguments to find a Movie_categories
     * @example
     * // Get one Movie_categories
     * const movie_categories = await prisma.movie_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Movie_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, Movie_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Movie_categoriesClient<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movie_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movie_categories
     * const movie_categories = await prisma.movie_categories.findMany()
     * 
     * // Get first 10 Movie_categories
     * const movie_categories = await prisma.movie_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movie_categoriesWithIdOnly = await prisma.movie_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Movie_categoriesFindManyArgs>(args?: SelectSubset<T, Movie_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie_categories.
     * @param {Movie_categoriesCreateArgs} args - Arguments to create a Movie_categories.
     * @example
     * // Create one Movie_categories
     * const Movie_categories = await prisma.movie_categories.create({
     *   data: {
     *     // ... data to create a Movie_categories
     *   }
     * })
     * 
     */
    create<T extends Movie_categoriesCreateArgs>(args: SelectSubset<T, Movie_categoriesCreateArgs<ExtArgs>>): Prisma__Movie_categoriesClient<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movie_categories.
     * @param {Movie_categoriesCreateManyArgs} args - Arguments to create many Movie_categories.
     * @example
     * // Create many Movie_categories
     * const movie_categories = await prisma.movie_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Movie_categoriesCreateManyArgs>(args?: SelectSubset<T, Movie_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movie_categories and returns the data saved in the database.
     * @param {Movie_categoriesCreateManyAndReturnArgs} args - Arguments to create many Movie_categories.
     * @example
     * // Create many Movie_categories
     * const movie_categories = await prisma.movie_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movie_categories and only return the `id`
     * const movie_categoriesWithIdOnly = await prisma.movie_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Movie_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, Movie_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie_categories.
     * @param {Movie_categoriesDeleteArgs} args - Arguments to delete one Movie_categories.
     * @example
     * // Delete one Movie_categories
     * const Movie_categories = await prisma.movie_categories.delete({
     *   where: {
     *     // ... filter to delete one Movie_categories
     *   }
     * })
     * 
     */
    delete<T extends Movie_categoriesDeleteArgs>(args: SelectSubset<T, Movie_categoriesDeleteArgs<ExtArgs>>): Prisma__Movie_categoriesClient<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie_categories.
     * @param {Movie_categoriesUpdateArgs} args - Arguments to update one Movie_categories.
     * @example
     * // Update one Movie_categories
     * const movie_categories = await prisma.movie_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Movie_categoriesUpdateArgs>(args: SelectSubset<T, Movie_categoriesUpdateArgs<ExtArgs>>): Prisma__Movie_categoriesClient<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movie_categories.
     * @param {Movie_categoriesDeleteManyArgs} args - Arguments to filter Movie_categories to delete.
     * @example
     * // Delete a few Movie_categories
     * const { count } = await prisma.movie_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Movie_categoriesDeleteManyArgs>(args?: SelectSubset<T, Movie_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movie_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movie_categories
     * const movie_categories = await prisma.movie_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Movie_categoriesUpdateManyArgs>(args: SelectSubset<T, Movie_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movie_categories and returns the data updated in the database.
     * @param {Movie_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Movie_categories.
     * @example
     * // Update many Movie_categories
     * const movie_categories = await prisma.movie_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movie_categories and only return the `id`
     * const movie_categoriesWithIdOnly = await prisma.movie_categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends Movie_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, Movie_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie_categories.
     * @param {Movie_categoriesUpsertArgs} args - Arguments to update or create a Movie_categories.
     * @example
     * // Update or create a Movie_categories
     * const movie_categories = await prisma.movie_categories.upsert({
     *   create: {
     *     // ... data to create a Movie_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie_categories we want to update
     *   }
     * })
     */
    upsert<T extends Movie_categoriesUpsertArgs>(args: SelectSubset<T, Movie_categoriesUpsertArgs<ExtArgs>>): Prisma__Movie_categoriesClient<$Result.GetResult<Prisma.$Movie_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movie_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_categoriesCountArgs} args - Arguments to filter Movie_categories to count.
     * @example
     * // Count the number of Movie_categories
     * const count = await prisma.movie_categories.count({
     *   where: {
     *     // ... the filter for the Movie_categories we want to count
     *   }
     * })
    **/
    count<T extends Movie_categoriesCountArgs>(
      args?: Subset<T, Movie_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Movie_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Movie_categoriesAggregateArgs>(args: Subset<T, Movie_categoriesAggregateArgs>): Prisma.PrismaPromise<GetMovie_categoriesAggregateType<T>>

    /**
     * Group by Movie_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_categoriesGroupByArgs} args - Group by arguments.
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
      T extends Movie_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Movie_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: Movie_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Movie_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovie_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie_categories model
   */
  readonly fields: Movie_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Movie_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movie_categories model
   */
  interface Movie_categoriesFieldRefs {
    readonly id: FieldRef<"Movie_categories", 'String'>
    readonly movie_id: FieldRef<"Movie_categories", 'String'>
    readonly category_id: FieldRef<"Movie_categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movie_categories findUnique
   */
  export type Movie_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_categories to fetch.
     */
    where: Movie_categoriesWhereUniqueInput
  }

  /**
   * Movie_categories findUniqueOrThrow
   */
  export type Movie_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_categories to fetch.
     */
    where: Movie_categoriesWhereUniqueInput
  }

  /**
   * Movie_categories findFirst
   */
  export type Movie_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_categories to fetch.
     */
    where?: Movie_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_categories to fetch.
     */
    orderBy?: Movie_categoriesOrderByWithRelationInput | Movie_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movie_categories.
     */
    cursor?: Movie_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movie_categories.
     */
    distinct?: Movie_categoriesScalarFieldEnum | Movie_categoriesScalarFieldEnum[]
  }

  /**
   * Movie_categories findFirstOrThrow
   */
  export type Movie_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_categories to fetch.
     */
    where?: Movie_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_categories to fetch.
     */
    orderBy?: Movie_categoriesOrderByWithRelationInput | Movie_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movie_categories.
     */
    cursor?: Movie_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movie_categories.
     */
    distinct?: Movie_categoriesScalarFieldEnum | Movie_categoriesScalarFieldEnum[]
  }

  /**
   * Movie_categories findMany
   */
  export type Movie_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_categories to fetch.
     */
    where?: Movie_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_categories to fetch.
     */
    orderBy?: Movie_categoriesOrderByWithRelationInput | Movie_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movie_categories.
     */
    cursor?: Movie_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_categories.
     */
    skip?: number
    distinct?: Movie_categoriesScalarFieldEnum | Movie_categoriesScalarFieldEnum[]
  }

  /**
   * Movie_categories create
   */
  export type Movie_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie_categories.
     */
    data: XOR<Movie_categoriesCreateInput, Movie_categoriesUncheckedCreateInput>
  }

  /**
   * Movie_categories createMany
   */
  export type Movie_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movie_categories.
     */
    data: Movie_categoriesCreateManyInput | Movie_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie_categories createManyAndReturn
   */
  export type Movie_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Movie_categories.
     */
    data: Movie_categoriesCreateManyInput | Movie_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie_categories update
   */
  export type Movie_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie_categories.
     */
    data: XOR<Movie_categoriesUpdateInput, Movie_categoriesUncheckedUpdateInput>
    /**
     * Choose, which Movie_categories to update.
     */
    where: Movie_categoriesWhereUniqueInput
  }

  /**
   * Movie_categories updateMany
   */
  export type Movie_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movie_categories.
     */
    data: XOR<Movie_categoriesUpdateManyMutationInput, Movie_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which Movie_categories to update
     */
    where?: Movie_categoriesWhereInput
    /**
     * Limit how many Movie_categories to update.
     */
    limit?: number
  }

  /**
   * Movie_categories updateManyAndReturn
   */
  export type Movie_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update Movie_categories.
     */
    data: XOR<Movie_categoriesUpdateManyMutationInput, Movie_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which Movie_categories to update
     */
    where?: Movie_categoriesWhereInput
    /**
     * Limit how many Movie_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie_categories upsert
   */
  export type Movie_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie_categories to update in case it exists.
     */
    where: Movie_categoriesWhereUniqueInput
    /**
     * In case the Movie_categories found by the `where` argument doesn't exist, create a new Movie_categories with this data.
     */
    create: XOR<Movie_categoriesCreateInput, Movie_categoriesUncheckedCreateInput>
    /**
     * In case the Movie_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Movie_categoriesUpdateInput, Movie_categoriesUncheckedUpdateInput>
  }

  /**
   * Movie_categories delete
   */
  export type Movie_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
    /**
     * Filter which Movie_categories to delete.
     */
    where: Movie_categoriesWhereUniqueInput
  }

  /**
   * Movie_categories deleteMany
   */
  export type Movie_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie_categories to delete
     */
    where?: Movie_categoriesWhereInput
    /**
     * Limit how many Movie_categories to delete.
     */
    limit?: number
  }

  /**
   * Movie_categories without action
   */
  export type Movie_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_categories
     */
    select?: Movie_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_categories
     */
    omit?: Movie_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model Movie_files
   */

  export type AggregateMovie_files = {
    _count: Movie_filesCountAggregateOutputType | null
    _min: Movie_filesMinAggregateOutputType | null
    _max: Movie_filesMaxAggregateOutputType | null
  }

  export type Movie_filesMinAggregateOutputType = {
    id: string | null
    movie_id: string | null
    file_url: string | null
    quality: $Enums.Quality | null
    language: $Enums.Languages | null
    status: $Enums.Status | null
  }

  export type Movie_filesMaxAggregateOutputType = {
    id: string | null
    movie_id: string | null
    file_url: string | null
    quality: $Enums.Quality | null
    language: $Enums.Languages | null
    status: $Enums.Status | null
  }

  export type Movie_filesCountAggregateOutputType = {
    id: number
    movie_id: number
    file_url: number
    quality: number
    language: number
    status: number
    _all: number
  }


  export type Movie_filesMinAggregateInputType = {
    id?: true
    movie_id?: true
    file_url?: true
    quality?: true
    language?: true
    status?: true
  }

  export type Movie_filesMaxAggregateInputType = {
    id?: true
    movie_id?: true
    file_url?: true
    quality?: true
    language?: true
    status?: true
  }

  export type Movie_filesCountAggregateInputType = {
    id?: true
    movie_id?: true
    file_url?: true
    quality?: true
    language?: true
    status?: true
    _all?: true
  }

  export type Movie_filesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie_files to aggregate.
     */
    where?: Movie_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_files to fetch.
     */
    orderBy?: Movie_filesOrderByWithRelationInput | Movie_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Movie_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movie_files
    **/
    _count?: true | Movie_filesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Movie_filesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Movie_filesMaxAggregateInputType
  }

  export type GetMovie_filesAggregateType<T extends Movie_filesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie_files]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie_files[P]>
      : GetScalarType<T[P], AggregateMovie_files[P]>
  }




  export type Movie_filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Movie_filesWhereInput
    orderBy?: Movie_filesOrderByWithAggregationInput | Movie_filesOrderByWithAggregationInput[]
    by: Movie_filesScalarFieldEnum[] | Movie_filesScalarFieldEnum
    having?: Movie_filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Movie_filesCountAggregateInputType | true
    _min?: Movie_filesMinAggregateInputType
    _max?: Movie_filesMaxAggregateInputType
  }

  export type Movie_filesGroupByOutputType = {
    id: string
    movie_id: string
    file_url: string
    quality: $Enums.Quality
    language: $Enums.Languages
    status: $Enums.Status
    _count: Movie_filesCountAggregateOutputType | null
    _min: Movie_filesMinAggregateOutputType | null
    _max: Movie_filesMaxAggregateOutputType | null
  }

  type GetMovie_filesGroupByPayload<T extends Movie_filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Movie_filesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Movie_filesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Movie_filesGroupByOutputType[P]>
            : GetScalarType<T[P], Movie_filesGroupByOutputType[P]>
        }
      >
    >


  export type Movie_filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movie_id?: boolean
    file_url?: boolean
    quality?: boolean
    language?: boolean
    status?: boolean
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie_files"]>

  export type Movie_filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movie_id?: boolean
    file_url?: boolean
    quality?: boolean
    language?: boolean
    status?: boolean
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie_files"]>

  export type Movie_filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movie_id?: boolean
    file_url?: boolean
    quality?: boolean
    language?: boolean
    status?: boolean
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie_files"]>

  export type Movie_filesSelectScalar = {
    id?: boolean
    movie_id?: boolean
    file_url?: boolean
    quality?: boolean
    language?: boolean
    status?: boolean
  }

  export type Movie_filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movie_id" | "file_url" | "quality" | "language" | "status", ExtArgs["result"]["movie_files"]>
  export type Movie_filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type Movie_filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type Movie_filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }

  export type $Movie_filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie_files"
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      movie_id: string
      file_url: string
      quality: $Enums.Quality
      language: $Enums.Languages
      status: $Enums.Status
    }, ExtArgs["result"]["movie_files"]>
    composites: {}
  }

  type Movie_filesGetPayload<S extends boolean | null | undefined | Movie_filesDefaultArgs> = $Result.GetResult<Prisma.$Movie_filesPayload, S>

  type Movie_filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Movie_filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Movie_filesCountAggregateInputType | true
    }

  export interface Movie_filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie_files'], meta: { name: 'Movie_files' } }
    /**
     * Find zero or one Movie_files that matches the filter.
     * @param {Movie_filesFindUniqueArgs} args - Arguments to find a Movie_files
     * @example
     * // Get one Movie_files
     * const movie_files = await prisma.movie_files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Movie_filesFindUniqueArgs>(args: SelectSubset<T, Movie_filesFindUniqueArgs<ExtArgs>>): Prisma__Movie_filesClient<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie_files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Movie_filesFindUniqueOrThrowArgs} args - Arguments to find a Movie_files
     * @example
     * // Get one Movie_files
     * const movie_files = await prisma.movie_files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Movie_filesFindUniqueOrThrowArgs>(args: SelectSubset<T, Movie_filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Movie_filesClient<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_filesFindFirstArgs} args - Arguments to find a Movie_files
     * @example
     * // Get one Movie_files
     * const movie_files = await prisma.movie_files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Movie_filesFindFirstArgs>(args?: SelectSubset<T, Movie_filesFindFirstArgs<ExtArgs>>): Prisma__Movie_filesClient<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie_files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_filesFindFirstOrThrowArgs} args - Arguments to find a Movie_files
     * @example
     * // Get one Movie_files
     * const movie_files = await prisma.movie_files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Movie_filesFindFirstOrThrowArgs>(args?: SelectSubset<T, Movie_filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Movie_filesClient<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movie_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movie_files
     * const movie_files = await prisma.movie_files.findMany()
     * 
     * // Get first 10 Movie_files
     * const movie_files = await prisma.movie_files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movie_filesWithIdOnly = await prisma.movie_files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Movie_filesFindManyArgs>(args?: SelectSubset<T, Movie_filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie_files.
     * @param {Movie_filesCreateArgs} args - Arguments to create a Movie_files.
     * @example
     * // Create one Movie_files
     * const Movie_files = await prisma.movie_files.create({
     *   data: {
     *     // ... data to create a Movie_files
     *   }
     * })
     * 
     */
    create<T extends Movie_filesCreateArgs>(args: SelectSubset<T, Movie_filesCreateArgs<ExtArgs>>): Prisma__Movie_filesClient<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movie_files.
     * @param {Movie_filesCreateManyArgs} args - Arguments to create many Movie_files.
     * @example
     * // Create many Movie_files
     * const movie_files = await prisma.movie_files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Movie_filesCreateManyArgs>(args?: SelectSubset<T, Movie_filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movie_files and returns the data saved in the database.
     * @param {Movie_filesCreateManyAndReturnArgs} args - Arguments to create many Movie_files.
     * @example
     * // Create many Movie_files
     * const movie_files = await prisma.movie_files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movie_files and only return the `id`
     * const movie_filesWithIdOnly = await prisma.movie_files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Movie_filesCreateManyAndReturnArgs>(args?: SelectSubset<T, Movie_filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie_files.
     * @param {Movie_filesDeleteArgs} args - Arguments to delete one Movie_files.
     * @example
     * // Delete one Movie_files
     * const Movie_files = await prisma.movie_files.delete({
     *   where: {
     *     // ... filter to delete one Movie_files
     *   }
     * })
     * 
     */
    delete<T extends Movie_filesDeleteArgs>(args: SelectSubset<T, Movie_filesDeleteArgs<ExtArgs>>): Prisma__Movie_filesClient<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie_files.
     * @param {Movie_filesUpdateArgs} args - Arguments to update one Movie_files.
     * @example
     * // Update one Movie_files
     * const movie_files = await prisma.movie_files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Movie_filesUpdateArgs>(args: SelectSubset<T, Movie_filesUpdateArgs<ExtArgs>>): Prisma__Movie_filesClient<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movie_files.
     * @param {Movie_filesDeleteManyArgs} args - Arguments to filter Movie_files to delete.
     * @example
     * // Delete a few Movie_files
     * const { count } = await prisma.movie_files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Movie_filesDeleteManyArgs>(args?: SelectSubset<T, Movie_filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movie_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movie_files
     * const movie_files = await prisma.movie_files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Movie_filesUpdateManyArgs>(args: SelectSubset<T, Movie_filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movie_files and returns the data updated in the database.
     * @param {Movie_filesUpdateManyAndReturnArgs} args - Arguments to update many Movie_files.
     * @example
     * // Update many Movie_files
     * const movie_files = await prisma.movie_files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movie_files and only return the `id`
     * const movie_filesWithIdOnly = await prisma.movie_files.updateManyAndReturn({
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
    updateManyAndReturn<T extends Movie_filesUpdateManyAndReturnArgs>(args: SelectSubset<T, Movie_filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie_files.
     * @param {Movie_filesUpsertArgs} args - Arguments to update or create a Movie_files.
     * @example
     * // Update or create a Movie_files
     * const movie_files = await prisma.movie_files.upsert({
     *   create: {
     *     // ... data to create a Movie_files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie_files we want to update
     *   }
     * })
     */
    upsert<T extends Movie_filesUpsertArgs>(args: SelectSubset<T, Movie_filesUpsertArgs<ExtArgs>>): Prisma__Movie_filesClient<$Result.GetResult<Prisma.$Movie_filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movie_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_filesCountArgs} args - Arguments to filter Movie_files to count.
     * @example
     * // Count the number of Movie_files
     * const count = await prisma.movie_files.count({
     *   where: {
     *     // ... the filter for the Movie_files we want to count
     *   }
     * })
    **/
    count<T extends Movie_filesCountArgs>(
      args?: Subset<T, Movie_filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Movie_filesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_filesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Movie_filesAggregateArgs>(args: Subset<T, Movie_filesAggregateArgs>): Prisma.PrismaPromise<GetMovie_filesAggregateType<T>>

    /**
     * Group by Movie_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movie_filesGroupByArgs} args - Group by arguments.
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
      T extends Movie_filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Movie_filesGroupByArgs['orderBy'] }
        : { orderBy?: Movie_filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Movie_filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovie_filesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie_files model
   */
  readonly fields: Movie_filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie_files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Movie_filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movie_files model
   */
  interface Movie_filesFieldRefs {
    readonly id: FieldRef<"Movie_files", 'String'>
    readonly movie_id: FieldRef<"Movie_files", 'String'>
    readonly file_url: FieldRef<"Movie_files", 'String'>
    readonly quality: FieldRef<"Movie_files", 'Quality'>
    readonly language: FieldRef<"Movie_files", 'Languages'>
    readonly status: FieldRef<"Movie_files", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Movie_files findUnique
   */
  export type Movie_filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_files to fetch.
     */
    where: Movie_filesWhereUniqueInput
  }

  /**
   * Movie_files findUniqueOrThrow
   */
  export type Movie_filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_files to fetch.
     */
    where: Movie_filesWhereUniqueInput
  }

  /**
   * Movie_files findFirst
   */
  export type Movie_filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_files to fetch.
     */
    where?: Movie_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_files to fetch.
     */
    orderBy?: Movie_filesOrderByWithRelationInput | Movie_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movie_files.
     */
    cursor?: Movie_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movie_files.
     */
    distinct?: Movie_filesScalarFieldEnum | Movie_filesScalarFieldEnum[]
  }

  /**
   * Movie_files findFirstOrThrow
   */
  export type Movie_filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_files to fetch.
     */
    where?: Movie_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_files to fetch.
     */
    orderBy?: Movie_filesOrderByWithRelationInput | Movie_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movie_files.
     */
    cursor?: Movie_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movie_files.
     */
    distinct?: Movie_filesScalarFieldEnum | Movie_filesScalarFieldEnum[]
  }

  /**
   * Movie_files findMany
   */
  export type Movie_filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * Filter, which Movie_files to fetch.
     */
    where?: Movie_filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movie_files to fetch.
     */
    orderBy?: Movie_filesOrderByWithRelationInput | Movie_filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movie_files.
     */
    cursor?: Movie_filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movie_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movie_files.
     */
    skip?: number
    distinct?: Movie_filesScalarFieldEnum | Movie_filesScalarFieldEnum[]
  }

  /**
   * Movie_files create
   */
  export type Movie_filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie_files.
     */
    data: XOR<Movie_filesCreateInput, Movie_filesUncheckedCreateInput>
  }

  /**
   * Movie_files createMany
   */
  export type Movie_filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movie_files.
     */
    data: Movie_filesCreateManyInput | Movie_filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie_files createManyAndReturn
   */
  export type Movie_filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * The data used to create many Movie_files.
     */
    data: Movie_filesCreateManyInput | Movie_filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie_files update
   */
  export type Movie_filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie_files.
     */
    data: XOR<Movie_filesUpdateInput, Movie_filesUncheckedUpdateInput>
    /**
     * Choose, which Movie_files to update.
     */
    where: Movie_filesWhereUniqueInput
  }

  /**
   * Movie_files updateMany
   */
  export type Movie_filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movie_files.
     */
    data: XOR<Movie_filesUpdateManyMutationInput, Movie_filesUncheckedUpdateManyInput>
    /**
     * Filter which Movie_files to update
     */
    where?: Movie_filesWhereInput
    /**
     * Limit how many Movie_files to update.
     */
    limit?: number
  }

  /**
   * Movie_files updateManyAndReturn
   */
  export type Movie_filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * The data used to update Movie_files.
     */
    data: XOR<Movie_filesUpdateManyMutationInput, Movie_filesUncheckedUpdateManyInput>
    /**
     * Filter which Movie_files to update
     */
    where?: Movie_filesWhereInput
    /**
     * Limit how many Movie_files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie_files upsert
   */
  export type Movie_filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie_files to update in case it exists.
     */
    where: Movie_filesWhereUniqueInput
    /**
     * In case the Movie_files found by the `where` argument doesn't exist, create a new Movie_files with this data.
     */
    create: XOR<Movie_filesCreateInput, Movie_filesUncheckedCreateInput>
    /**
     * In case the Movie_files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Movie_filesUpdateInput, Movie_filesUncheckedUpdateInput>
  }

  /**
   * Movie_files delete
   */
  export type Movie_filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
    /**
     * Filter which Movie_files to delete.
     */
    where: Movie_filesWhereUniqueInput
  }

  /**
   * Movie_files deleteMany
   */
  export type Movie_filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie_files to delete
     */
    where?: Movie_filesWhereInput
    /**
     * Limit how many Movie_files to delete.
     */
    limit?: number
  }

  /**
   * Movie_files without action
   */
  export type Movie_filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie_files
     */
    select?: Movie_filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie_files
     */
    omit?: Movie_filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Movie_filesInclude<ExtArgs> | null
  }


  /**
   * Model Favorites
   */

  export type AggregateFavorites = {
    _count: FavoritesCountAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  export type FavoritesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    movie_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FavoritesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    movie_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FavoritesCountAggregateOutputType = {
    id: number
    user_id: number
    movie_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FavoritesMinAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FavoritesMaxAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FavoritesCountAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FavoritesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to aggregate.
     */
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritesWhereUniqueInput
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
    _count?: true | FavoritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritesMaxAggregateInputType
  }

  export type GetFavoritesAggregateType<T extends FavoritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorites[P]>
      : GetScalarType<T[P], AggregateFavorites[P]>
  }




  export type FavoritesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritesWhereInput
    orderBy?: FavoritesOrderByWithAggregationInput | FavoritesOrderByWithAggregationInput[]
    by: FavoritesScalarFieldEnum[] | FavoritesScalarFieldEnum
    having?: FavoritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritesCountAggregateInputType | true
    _min?: FavoritesMinAggregateInputType
    _max?: FavoritesMaxAggregateInputType
  }

  export type FavoritesGroupByOutputType = {
    id: string
    user_id: string
    movie_id: string
    created_at: Date
    updated_at: Date
    _count: FavoritesCountAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  type GetFavoritesGroupByPayload<T extends FavoritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
        }
      >
    >


  export type FavoritesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorites"]>

  export type FavoritesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorites"]>

  export type FavoritesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorites"]>

  export type FavoritesSelectScalar = {
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FavoritesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "movie_id" | "created_at" | "updated_at", ExtArgs["result"]["favorites"]>
  export type FavoritesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type FavoritesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type FavoritesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }

  export type $FavoritesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorites"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      movies: Prisma.$MoviesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      movie_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["favorites"]>
    composites: {}
  }

  type FavoritesGetPayload<S extends boolean | null | undefined | FavoritesDefaultArgs> = $Result.GetResult<Prisma.$FavoritesPayload, S>

  type FavoritesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritesCountAggregateInputType | true
    }

  export interface FavoritesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorites'], meta: { name: 'Favorites' } }
    /**
     * Find zero or one Favorites that matches the filter.
     * @param {FavoritesFindUniqueArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritesFindUniqueArgs>(args: SelectSubset<T, FavoritesFindUniqueArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritesFindUniqueOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritesFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesFindFirstArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritesFindFirstArgs>(args?: SelectSubset<T, FavoritesFindFirstArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesFindFirstOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritesFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorites.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritesWithIdOnly = await prisma.favorites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritesFindManyArgs>(args?: SelectSubset<T, FavoritesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorites.
     * @param {FavoritesCreateArgs} args - Arguments to create a Favorites.
     * @example
     * // Create one Favorites
     * const Favorites = await prisma.favorites.create({
     *   data: {
     *     // ... data to create a Favorites
     *   }
     * })
     * 
     */
    create<T extends FavoritesCreateArgs>(args: SelectSubset<T, FavoritesCreateArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoritesCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorites = await prisma.favorites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritesCreateManyArgs>(args?: SelectSubset<T, FavoritesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoritesCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorites = await prisma.favorites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoritesWithIdOnly = await prisma.favorites.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritesCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorites.
     * @param {FavoritesDeleteArgs} args - Arguments to delete one Favorites.
     * @example
     * // Delete one Favorites
     * const Favorites = await prisma.favorites.delete({
     *   where: {
     *     // ... filter to delete one Favorites
     *   }
     * })
     * 
     */
    delete<T extends FavoritesDeleteArgs>(args: SelectSubset<T, FavoritesDeleteArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorites.
     * @param {FavoritesUpdateArgs} args - Arguments to update one Favorites.
     * @example
     * // Update one Favorites
     * const favorites = await prisma.favorites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritesUpdateArgs>(args: SelectSubset<T, FavoritesUpdateArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoritesDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritesDeleteManyArgs>(args?: SelectSubset<T, FavoritesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorites = await prisma.favorites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritesUpdateManyArgs>(args: SelectSubset<T, FavoritesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoritesUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorites = await prisma.favorites.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoritesWithIdOnly = await prisma.favorites.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavoritesUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoritesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorites.
     * @param {FavoritesUpsertArgs} args - Arguments to update or create a Favorites.
     * @example
     * // Update or create a Favorites
     * const favorites = await prisma.favorites.upsert({
     *   create: {
     *     // ... data to create a Favorites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorites we want to update
     *   }
     * })
     */
    upsert<T extends FavoritesUpsertArgs>(args: SelectSubset<T, FavoritesUpsertArgs<ExtArgs>>): Prisma__FavoritesClient<$Result.GetResult<Prisma.$FavoritesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorites.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoritesCountArgs>(
      args?: Subset<T, FavoritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritesAggregateArgs>(args: Subset<T, FavoritesAggregateArgs>): Prisma.PrismaPromise<GetFavoritesAggregateType<T>>

    /**
     * Group by Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesGroupByArgs} args - Group by arguments.
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
      T extends FavoritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritesGroupByArgs['orderBy'] }
        : { orderBy?: FavoritesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorites model
   */
  readonly fields: FavoritesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movies<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favorites model
   */
  interface FavoritesFieldRefs {
    readonly id: FieldRef<"Favorites", 'String'>
    readonly user_id: FieldRef<"Favorites", 'String'>
    readonly movie_id: FieldRef<"Favorites", 'String'>
    readonly created_at: FieldRef<"Favorites", 'DateTime'>
    readonly updated_at: FieldRef<"Favorites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorites findUnique
   */
  export type FavoritesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where: FavoritesWhereUniqueInput
  }

  /**
   * Favorites findUniqueOrThrow
   */
  export type FavoritesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where: FavoritesWhereUniqueInput
  }

  /**
   * Favorites findFirst
   */
  export type FavoritesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoritesWhereUniqueInput
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
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * Favorites findFirstOrThrow
   */
  export type FavoritesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoritesWhereUniqueInput
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
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * Favorites findMany
   */
  export type FavoritesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoritesOrderByWithRelationInput | FavoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoritesWhereUniqueInput
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
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }

  /**
   * Favorites create
   */
  export type FavoritesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorites.
     */
    data: XOR<FavoritesCreateInput, FavoritesUncheckedCreateInput>
  }

  /**
   * Favorites createMany
   */
  export type FavoritesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoritesCreateManyInput | FavoritesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorites createManyAndReturn
   */
  export type FavoritesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoritesCreateManyInput | FavoritesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorites update
   */
  export type FavoritesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorites.
     */
    data: XOR<FavoritesUpdateInput, FavoritesUncheckedUpdateInput>
    /**
     * Choose, which Favorites to update.
     */
    where: FavoritesWhereUniqueInput
  }

  /**
   * Favorites updateMany
   */
  export type FavoritesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoritesWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorites updateManyAndReturn
   */
  export type FavoritesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoritesWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorites upsert
   */
  export type FavoritesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorites to update in case it exists.
     */
    where: FavoritesWhereUniqueInput
    /**
     * In case the Favorites found by the `where` argument doesn't exist, create a new Favorites with this data.
     */
    create: XOR<FavoritesCreateInput, FavoritesUncheckedCreateInput>
    /**
     * In case the Favorites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritesUpdateInput, FavoritesUncheckedUpdateInput>
  }

  /**
   * Favorites delete
   */
  export type FavoritesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
    /**
     * Filter which Favorites to delete.
     */
    where: FavoritesWhereUniqueInput
  }

  /**
   * Favorites deleteMany
   */
  export type FavoritesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoritesWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorites without action
   */
  export type FavoritesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorites
     */
    select?: FavoritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorites
     */
    omit?: FavoritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritesInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    movie_id: string | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    movie_id: string | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    user_id: number
    movie_id: number
    rating: number
    comment: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    rating?: true
    comment?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: string
    user_id: string
    movie_id: string
    rating: number
    comment: string
    created_at: Date
    updated_at: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "movie_id" | "rating" | "comment" | "created_at" | "updated_at", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      movies: Prisma.$MoviesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      movie_id: string
      rating: number
      comment: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movies<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'String'>
    readonly user_id: FieldRef<"Reviews", 'String'>
    readonly movie_id: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly created_at: FieldRef<"Reviews", 'DateTime'>
    readonly updated_at: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Watch_history
   */

  export type AggregateWatch_history = {
    _count: Watch_historyCountAggregateOutputType | null
    _avg: Watch_historyAvgAggregateOutputType | null
    _sum: Watch_historySumAggregateOutputType | null
    _min: Watch_historyMinAggregateOutputType | null
    _max: Watch_historyMaxAggregateOutputType | null
  }

  export type Watch_historyAvgAggregateOutputType = {
    watched_duration: number | null
    watched_percentage: Decimal | null
  }

  export type Watch_historySumAggregateOutputType = {
    watched_duration: number | null
    watched_percentage: Decimal | null
  }

  export type Watch_historyMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    movie_id: string | null
    watched_duration: number | null
    watched_percentage: Decimal | null
    last_watched: Date | null
  }

  export type Watch_historyMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    movie_id: string | null
    watched_duration: number | null
    watched_percentage: Decimal | null
    last_watched: Date | null
  }

  export type Watch_historyCountAggregateOutputType = {
    id: number
    user_id: number
    movie_id: number
    watched_duration: number
    watched_percentage: number
    last_watched: number
    _all: number
  }


  export type Watch_historyAvgAggregateInputType = {
    watched_duration?: true
    watched_percentage?: true
  }

  export type Watch_historySumAggregateInputType = {
    watched_duration?: true
    watched_percentage?: true
  }

  export type Watch_historyMinAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    watched_duration?: true
    watched_percentage?: true
    last_watched?: true
  }

  export type Watch_historyMaxAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    watched_duration?: true
    watched_percentage?: true
    last_watched?: true
  }

  export type Watch_historyCountAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    watched_duration?: true
    watched_percentage?: true
    last_watched?: true
    _all?: true
  }

  export type Watch_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watch_history to aggregate.
     */
    where?: Watch_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watch_histories to fetch.
     */
    orderBy?: Watch_historyOrderByWithRelationInput | Watch_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Watch_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watch_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watch_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watch_histories
    **/
    _count?: true | Watch_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Watch_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Watch_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Watch_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Watch_historyMaxAggregateInputType
  }

  export type GetWatch_historyAggregateType<T extends Watch_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateWatch_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatch_history[P]>
      : GetScalarType<T[P], AggregateWatch_history[P]>
  }




  export type Watch_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Watch_historyWhereInput
    orderBy?: Watch_historyOrderByWithAggregationInput | Watch_historyOrderByWithAggregationInput[]
    by: Watch_historyScalarFieldEnum[] | Watch_historyScalarFieldEnum
    having?: Watch_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Watch_historyCountAggregateInputType | true
    _avg?: Watch_historyAvgAggregateInputType
    _sum?: Watch_historySumAggregateInputType
    _min?: Watch_historyMinAggregateInputType
    _max?: Watch_historyMaxAggregateInputType
  }

  export type Watch_historyGroupByOutputType = {
    id: string
    user_id: string
    movie_id: string
    watched_duration: number
    watched_percentage: Decimal
    last_watched: Date
    _count: Watch_historyCountAggregateOutputType | null
    _avg: Watch_historyAvgAggregateOutputType | null
    _sum: Watch_historySumAggregateOutputType | null
    _min: Watch_historyMinAggregateOutputType | null
    _max: Watch_historyMaxAggregateOutputType | null
  }

  type GetWatch_historyGroupByPayload<T extends Watch_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Watch_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Watch_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Watch_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Watch_historyGroupByOutputType[P]>
        }
      >
    >


  export type Watch_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    watched_duration?: boolean
    watched_percentage?: boolean
    last_watched?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watch_history"]>

  export type Watch_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    watched_duration?: boolean
    watched_percentage?: boolean
    last_watched?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watch_history"]>

  export type Watch_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    watched_duration?: boolean
    watched_percentage?: boolean
    last_watched?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watch_history"]>

  export type Watch_historySelectScalar = {
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    watched_duration?: boolean
    watched_percentage?: boolean
    last_watched?: boolean
  }

  export type Watch_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "movie_id" | "watched_duration" | "watched_percentage" | "last_watched", ExtArgs["result"]["watch_history"]>
  export type Watch_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type Watch_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }
  export type Watch_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    movies?: boolean | MoviesDefaultArgs<ExtArgs>
  }

  export type $Watch_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watch_history"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      movies: Prisma.$MoviesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      movie_id: string
      watched_duration: number
      watched_percentage: Prisma.Decimal
      last_watched: Date
    }, ExtArgs["result"]["watch_history"]>
    composites: {}
  }

  type Watch_historyGetPayload<S extends boolean | null | undefined | Watch_historyDefaultArgs> = $Result.GetResult<Prisma.$Watch_historyPayload, S>

  type Watch_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Watch_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Watch_historyCountAggregateInputType | true
    }

  export interface Watch_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watch_history'], meta: { name: 'Watch_history' } }
    /**
     * Find zero or one Watch_history that matches the filter.
     * @param {Watch_historyFindUniqueArgs} args - Arguments to find a Watch_history
     * @example
     * // Get one Watch_history
     * const watch_history = await prisma.watch_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Watch_historyFindUniqueArgs>(args: SelectSubset<T, Watch_historyFindUniqueArgs<ExtArgs>>): Prisma__Watch_historyClient<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watch_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Watch_historyFindUniqueOrThrowArgs} args - Arguments to find a Watch_history
     * @example
     * // Get one Watch_history
     * const watch_history = await prisma.watch_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Watch_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, Watch_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Watch_historyClient<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watch_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watch_historyFindFirstArgs} args - Arguments to find a Watch_history
     * @example
     * // Get one Watch_history
     * const watch_history = await prisma.watch_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Watch_historyFindFirstArgs>(args?: SelectSubset<T, Watch_historyFindFirstArgs<ExtArgs>>): Prisma__Watch_historyClient<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watch_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watch_historyFindFirstOrThrowArgs} args - Arguments to find a Watch_history
     * @example
     * // Get one Watch_history
     * const watch_history = await prisma.watch_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Watch_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, Watch_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__Watch_historyClient<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watch_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watch_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watch_histories
     * const watch_histories = await prisma.watch_history.findMany()
     * 
     * // Get first 10 Watch_histories
     * const watch_histories = await prisma.watch_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watch_historyWithIdOnly = await prisma.watch_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Watch_historyFindManyArgs>(args?: SelectSubset<T, Watch_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watch_history.
     * @param {Watch_historyCreateArgs} args - Arguments to create a Watch_history.
     * @example
     * // Create one Watch_history
     * const Watch_history = await prisma.watch_history.create({
     *   data: {
     *     // ... data to create a Watch_history
     *   }
     * })
     * 
     */
    create<T extends Watch_historyCreateArgs>(args: SelectSubset<T, Watch_historyCreateArgs<ExtArgs>>): Prisma__Watch_historyClient<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watch_histories.
     * @param {Watch_historyCreateManyArgs} args - Arguments to create many Watch_histories.
     * @example
     * // Create many Watch_histories
     * const watch_history = await prisma.watch_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Watch_historyCreateManyArgs>(args?: SelectSubset<T, Watch_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watch_histories and returns the data saved in the database.
     * @param {Watch_historyCreateManyAndReturnArgs} args - Arguments to create many Watch_histories.
     * @example
     * // Create many Watch_histories
     * const watch_history = await prisma.watch_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watch_histories and only return the `id`
     * const watch_historyWithIdOnly = await prisma.watch_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Watch_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, Watch_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watch_history.
     * @param {Watch_historyDeleteArgs} args - Arguments to delete one Watch_history.
     * @example
     * // Delete one Watch_history
     * const Watch_history = await prisma.watch_history.delete({
     *   where: {
     *     // ... filter to delete one Watch_history
     *   }
     * })
     * 
     */
    delete<T extends Watch_historyDeleteArgs>(args: SelectSubset<T, Watch_historyDeleteArgs<ExtArgs>>): Prisma__Watch_historyClient<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watch_history.
     * @param {Watch_historyUpdateArgs} args - Arguments to update one Watch_history.
     * @example
     * // Update one Watch_history
     * const watch_history = await prisma.watch_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Watch_historyUpdateArgs>(args: SelectSubset<T, Watch_historyUpdateArgs<ExtArgs>>): Prisma__Watch_historyClient<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watch_histories.
     * @param {Watch_historyDeleteManyArgs} args - Arguments to filter Watch_histories to delete.
     * @example
     * // Delete a few Watch_histories
     * const { count } = await prisma.watch_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Watch_historyDeleteManyArgs>(args?: SelectSubset<T, Watch_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watch_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watch_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watch_histories
     * const watch_history = await prisma.watch_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Watch_historyUpdateManyArgs>(args: SelectSubset<T, Watch_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watch_histories and returns the data updated in the database.
     * @param {Watch_historyUpdateManyAndReturnArgs} args - Arguments to update many Watch_histories.
     * @example
     * // Update many Watch_histories
     * const watch_history = await prisma.watch_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watch_histories and only return the `id`
     * const watch_historyWithIdOnly = await prisma.watch_history.updateManyAndReturn({
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
    updateManyAndReturn<T extends Watch_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, Watch_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watch_history.
     * @param {Watch_historyUpsertArgs} args - Arguments to update or create a Watch_history.
     * @example
     * // Update or create a Watch_history
     * const watch_history = await prisma.watch_history.upsert({
     *   create: {
     *     // ... data to create a Watch_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watch_history we want to update
     *   }
     * })
     */
    upsert<T extends Watch_historyUpsertArgs>(args: SelectSubset<T, Watch_historyUpsertArgs<ExtArgs>>): Prisma__Watch_historyClient<$Result.GetResult<Prisma.$Watch_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watch_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watch_historyCountArgs} args - Arguments to filter Watch_histories to count.
     * @example
     * // Count the number of Watch_histories
     * const count = await prisma.watch_history.count({
     *   where: {
     *     // ... the filter for the Watch_histories we want to count
     *   }
     * })
    **/
    count<T extends Watch_historyCountArgs>(
      args?: Subset<T, Watch_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Watch_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watch_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watch_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Watch_historyAggregateArgs>(args: Subset<T, Watch_historyAggregateArgs>): Prisma.PrismaPromise<GetWatch_historyAggregateType<T>>

    /**
     * Group by Watch_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Watch_historyGroupByArgs} args - Group by arguments.
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
      T extends Watch_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Watch_historyGroupByArgs['orderBy'] }
        : { orderBy?: Watch_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Watch_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatch_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watch_history model
   */
  readonly fields: Watch_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watch_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Watch_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movies<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Watch_history model
   */
  interface Watch_historyFieldRefs {
    readonly id: FieldRef<"Watch_history", 'String'>
    readonly user_id: FieldRef<"Watch_history", 'String'>
    readonly movie_id: FieldRef<"Watch_history", 'String'>
    readonly watched_duration: FieldRef<"Watch_history", 'Int'>
    readonly watched_percentage: FieldRef<"Watch_history", 'Decimal'>
    readonly last_watched: FieldRef<"Watch_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watch_history findUnique
   */
  export type Watch_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which Watch_history to fetch.
     */
    where: Watch_historyWhereUniqueInput
  }

  /**
   * Watch_history findUniqueOrThrow
   */
  export type Watch_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which Watch_history to fetch.
     */
    where: Watch_historyWhereUniqueInput
  }

  /**
   * Watch_history findFirst
   */
  export type Watch_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which Watch_history to fetch.
     */
    where?: Watch_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watch_histories to fetch.
     */
    orderBy?: Watch_historyOrderByWithRelationInput | Watch_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watch_histories.
     */
    cursor?: Watch_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watch_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watch_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watch_histories.
     */
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * Watch_history findFirstOrThrow
   */
  export type Watch_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which Watch_history to fetch.
     */
    where?: Watch_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watch_histories to fetch.
     */
    orderBy?: Watch_historyOrderByWithRelationInput | Watch_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watch_histories.
     */
    cursor?: Watch_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watch_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watch_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watch_histories.
     */
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * Watch_history findMany
   */
  export type Watch_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * Filter, which Watch_histories to fetch.
     */
    where?: Watch_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watch_histories to fetch.
     */
    orderBy?: Watch_historyOrderByWithRelationInput | Watch_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watch_histories.
     */
    cursor?: Watch_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watch_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watch_histories.
     */
    skip?: number
    distinct?: Watch_historyScalarFieldEnum | Watch_historyScalarFieldEnum[]
  }

  /**
   * Watch_history create
   */
  export type Watch_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a Watch_history.
     */
    data: XOR<Watch_historyCreateInput, Watch_historyUncheckedCreateInput>
  }

  /**
   * Watch_history createMany
   */
  export type Watch_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watch_histories.
     */
    data: Watch_historyCreateManyInput | Watch_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watch_history createManyAndReturn
   */
  export type Watch_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * The data used to create many Watch_histories.
     */
    data: Watch_historyCreateManyInput | Watch_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watch_history update
   */
  export type Watch_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a Watch_history.
     */
    data: XOR<Watch_historyUpdateInput, Watch_historyUncheckedUpdateInput>
    /**
     * Choose, which Watch_history to update.
     */
    where: Watch_historyWhereUniqueInput
  }

  /**
   * Watch_history updateMany
   */
  export type Watch_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watch_histories.
     */
    data: XOR<Watch_historyUpdateManyMutationInput, Watch_historyUncheckedUpdateManyInput>
    /**
     * Filter which Watch_histories to update
     */
    where?: Watch_historyWhereInput
    /**
     * Limit how many Watch_histories to update.
     */
    limit?: number
  }

  /**
   * Watch_history updateManyAndReturn
   */
  export type Watch_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * The data used to update Watch_histories.
     */
    data: XOR<Watch_historyUpdateManyMutationInput, Watch_historyUncheckedUpdateManyInput>
    /**
     * Filter which Watch_histories to update
     */
    where?: Watch_historyWhereInput
    /**
     * Limit how many Watch_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watch_history upsert
   */
  export type Watch_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the Watch_history to update in case it exists.
     */
    where: Watch_historyWhereUniqueInput
    /**
     * In case the Watch_history found by the `where` argument doesn't exist, create a new Watch_history with this data.
     */
    create: XOR<Watch_historyCreateInput, Watch_historyUncheckedCreateInput>
    /**
     * In case the Watch_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Watch_historyUpdateInput, Watch_historyUncheckedUpdateInput>
  }

  /**
   * Watch_history delete
   */
  export type Watch_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
    /**
     * Filter which Watch_history to delete.
     */
    where: Watch_historyWhereUniqueInput
  }

  /**
   * Watch_history deleteMany
   */
  export type Watch_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watch_histories to delete
     */
    where?: Watch_historyWhereInput
    /**
     * Limit how many Watch_histories to delete.
     */
    limit?: number
  }

  /**
   * Watch_history without action
   */
  export type Watch_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watch_history
     */
    select?: Watch_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watch_history
     */
    omit?: Watch_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Watch_historyInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    avatar_url: 'avatar_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    full_name: 'full_name',
    phone: 'phone',
    country: 'country',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const Subscription_plansScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    duration_days: 'duration_days',
    features: 'features',
    is_active: 'is_active',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Subscription_plansScalarFieldEnum = (typeof Subscription_plansScalarFieldEnum)[keyof typeof Subscription_plansScalarFieldEnum]


  export const User_subscriptionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    plan_id: 'plan_id',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status',
    auto_renew: 'auto_renew',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_subscriptionsScalarFieldEnum = (typeof User_subscriptionsScalarFieldEnum)[keyof typeof User_subscriptionsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    user_subscription_id: 'user_subscription_id',
    amount: 'amount',
    payment_method: 'payment_method',
    payment_details: 'payment_details',
    status: 'status',
    external_transaction_id: 'external_transaction_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    status: 'status'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    release_year: 'release_year',
    duration_minutes: 'duration_minutes',
    poster_url: 'poster_url',
    rating: 'rating',
    subscription_type: 'subscription_type',
    view_count: 'view_count',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const Movie_categoriesScalarFieldEnum: {
    id: 'id',
    movie_id: 'movie_id',
    category_id: 'category_id'
  };

  export type Movie_categoriesScalarFieldEnum = (typeof Movie_categoriesScalarFieldEnum)[keyof typeof Movie_categoriesScalarFieldEnum]


  export const Movie_filesScalarFieldEnum: {
    id: 'id',
    movie_id: 'movie_id',
    file_url: 'file_url',
    quality: 'quality',
    language: 'language',
    status: 'status'
  };

  export type Movie_filesScalarFieldEnum = (typeof Movie_filesScalarFieldEnum)[keyof typeof Movie_filesScalarFieldEnum]


  export const FavoritesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    movie_id: 'movie_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FavoritesScalarFieldEnum = (typeof FavoritesScalarFieldEnum)[keyof typeof FavoritesScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    movie_id: 'movie_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const Watch_historyScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    movie_id: 'movie_id',
    watched_duration: 'watched_duration',
    watched_percentage: 'watched_percentage',
    last_watched: 'last_watched'
  };

  export type Watch_historyScalarFieldEnum = (typeof Watch_historyScalarFieldEnum)[keyof typeof Watch_historyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Roles[]'
   */
  export type ListEnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SubsStatus'
   */
  export type EnumSubsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubsStatus'>
    


  /**
   * Reference to a field of type 'SubsStatus[]'
   */
  export type ListEnumSubsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubsStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'SubscriptionType'
   */
  export type EnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType'>
    


  /**
   * Reference to a field of type 'SubscriptionType[]'
   */
  export type ListEnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType[]'>
    


  /**
   * Reference to a field of type 'Quality'
   */
  export type EnumQualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Quality'>
    


  /**
   * Reference to a field of type 'Quality[]'
   */
  export type ListEnumQualityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Quality[]'>
    


  /**
   * Reference to a field of type 'Languages'
   */
  export type EnumLanguagesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Languages'>
    


  /**
   * Reference to a field of type 'Languages[]'
   */
  export type ListEnumLanguagesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Languages[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    avatar_url?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    status?: EnumStatusFilter<"Users"> | $Enums.Status
    profiles?: ProfilesListRelationFilter
    user_subscriptions?: User_subscriptionsListRelationFilter
    movies?: MoviesListRelationFilter
    favorites?: FavoritesListRelationFilter
    reviews?: ReviewsListRelationFilter
    watch_history?: Watch_historyListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    profiles?: ProfilesOrderByRelationAggregateInput
    user_subscriptions?: User_subscriptionsOrderByRelationAggregateInput
    movies?: MoviesOrderByRelationAggregateInput
    favorites?: FavoritesOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    watch_history?: Watch_historyOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password_hash?: StringFilter<"Users"> | string
    role?: EnumRolesFilter<"Users"> | $Enums.Roles
    avatar_url?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    status?: EnumStatusFilter<"Users"> | $Enums.Status
    profiles?: ProfilesListRelationFilter
    user_subscriptions?: User_subscriptionsListRelationFilter
    movies?: MoviesListRelationFilter
    favorites?: FavoritesListRelationFilter
    reviews?: ReviewsListRelationFilter
    watch_history?: Watch_historyListRelationFilter
  }, "id" | "username" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password_hash?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRolesWithAggregatesFilter<"Users"> | $Enums.Roles
    avatar_url?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Users"> | $Enums.Status
  }

  export type ProfilesWhereInput = {
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    id?: StringFilter<"Profiles"> | string
    user_id?: StringFilter<"Profiles"> | string
    full_name?: StringFilter<"Profiles"> | string
    phone?: StringFilter<"Profiles"> | string
    country?: StringFilter<"Profiles"> | string
    created_at?: DateTimeFilter<"Profiles"> | Date | string
    updated_at?: DateTimeFilter<"Profiles"> | Date | string
    status?: EnumStatusFilter<"Profiles"> | $Enums.Status
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ProfilesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type ProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: ProfilesWhereInput | ProfilesWhereInput[]
    OR?: ProfilesWhereInput[]
    NOT?: ProfilesWhereInput | ProfilesWhereInput[]
    user_id?: StringFilter<"Profiles"> | string
    full_name?: StringFilter<"Profiles"> | string
    country?: StringFilter<"Profiles"> | string
    created_at?: DateTimeFilter<"Profiles"> | Date | string
    updated_at?: DateTimeFilter<"Profiles"> | Date | string
    status?: EnumStatusFilter<"Profiles"> | $Enums.Status
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "phone">

  export type ProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    _count?: ProfilesCountOrderByAggregateInput
    _max?: ProfilesMaxOrderByAggregateInput
    _min?: ProfilesMinOrderByAggregateInput
  }

  export type ProfilesScalarWhereWithAggregatesInput = {
    AND?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    OR?: ProfilesScalarWhereWithAggregatesInput[]
    NOT?: ProfilesScalarWhereWithAggregatesInput | ProfilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profiles"> | string
    user_id?: StringWithAggregatesFilter<"Profiles"> | string
    full_name?: StringWithAggregatesFilter<"Profiles"> | string
    phone?: StringWithAggregatesFilter<"Profiles"> | string
    country?: StringWithAggregatesFilter<"Profiles"> | string
    created_at?: DateTimeWithAggregatesFilter<"Profiles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Profiles"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Profiles"> | $Enums.Status
  }

  export type Subscription_plansWhereInput = {
    AND?: Subscription_plansWhereInput | Subscription_plansWhereInput[]
    OR?: Subscription_plansWhereInput[]
    NOT?: Subscription_plansWhereInput | Subscription_plansWhereInput[]
    id?: StringFilter<"Subscription_plans"> | string
    name?: StringFilter<"Subscription_plans"> | string
    price?: DecimalFilter<"Subscription_plans"> | Decimal | DecimalJsLike | number | string
    duration_days?: IntFilter<"Subscription_plans"> | number
    features?: JsonFilter<"Subscription_plans">
    is_active?: BoolFilter<"Subscription_plans"> | boolean
    status?: EnumStatusFilter<"Subscription_plans"> | $Enums.Status
    created_at?: DateTimeFilter<"Subscription_plans"> | Date | string
    updated_at?: DateTimeFilter<"Subscription_plans"> | Date | string
    user_subscriptions?: User_subscriptionsListRelationFilter
  }

  export type Subscription_plansOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
    features?: SortOrder
    is_active?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_subscriptions?: User_subscriptionsOrderByRelationAggregateInput
  }

  export type Subscription_plansWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: Subscription_plansWhereInput | Subscription_plansWhereInput[]
    OR?: Subscription_plansWhereInput[]
    NOT?: Subscription_plansWhereInput | Subscription_plansWhereInput[]
    price?: DecimalFilter<"Subscription_plans"> | Decimal | DecimalJsLike | number | string
    duration_days?: IntFilter<"Subscription_plans"> | number
    features?: JsonFilter<"Subscription_plans">
    is_active?: BoolFilter<"Subscription_plans"> | boolean
    status?: EnumStatusFilter<"Subscription_plans"> | $Enums.Status
    created_at?: DateTimeFilter<"Subscription_plans"> | Date | string
    updated_at?: DateTimeFilter<"Subscription_plans"> | Date | string
    user_subscriptions?: User_subscriptionsListRelationFilter
  }, "id" | "name">

  export type Subscription_plansOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
    features?: SortOrder
    is_active?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Subscription_plansCountOrderByAggregateInput
    _avg?: Subscription_plansAvgOrderByAggregateInput
    _max?: Subscription_plansMaxOrderByAggregateInput
    _min?: Subscription_plansMinOrderByAggregateInput
    _sum?: Subscription_plansSumOrderByAggregateInput
  }

  export type Subscription_plansScalarWhereWithAggregatesInput = {
    AND?: Subscription_plansScalarWhereWithAggregatesInput | Subscription_plansScalarWhereWithAggregatesInput[]
    OR?: Subscription_plansScalarWhereWithAggregatesInput[]
    NOT?: Subscription_plansScalarWhereWithAggregatesInput | Subscription_plansScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription_plans"> | string
    name?: StringWithAggregatesFilter<"Subscription_plans"> | string
    price?: DecimalWithAggregatesFilter<"Subscription_plans"> | Decimal | DecimalJsLike | number | string
    duration_days?: IntWithAggregatesFilter<"Subscription_plans"> | number
    features?: JsonWithAggregatesFilter<"Subscription_plans">
    is_active?: BoolWithAggregatesFilter<"Subscription_plans"> | boolean
    status?: EnumStatusWithAggregatesFilter<"Subscription_plans"> | $Enums.Status
    created_at?: DateTimeWithAggregatesFilter<"Subscription_plans"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Subscription_plans"> | Date | string
  }

  export type User_subscriptionsWhereInput = {
    AND?: User_subscriptionsWhereInput | User_subscriptionsWhereInput[]
    OR?: User_subscriptionsWhereInput[]
    NOT?: User_subscriptionsWhereInput | User_subscriptionsWhereInput[]
    id?: StringFilter<"User_subscriptions"> | string
    user_id?: StringFilter<"User_subscriptions"> | string
    plan_id?: StringFilter<"User_subscriptions"> | string
    start_date?: DateTimeFilter<"User_subscriptions"> | Date | string
    end_date?: DateTimeFilter<"User_subscriptions"> | Date | string
    status?: EnumSubsStatusFilter<"User_subscriptions"> | $Enums.SubsStatus
    auto_renew?: BoolFilter<"User_subscriptions"> | boolean
    created_at?: DateTimeFilter<"User_subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"User_subscriptions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    plan?: XOR<Subscription_plansScalarRelationFilter, Subscription_plansWhereInput>
    payments?: PaymentsListRelationFilter
  }

  export type User_subscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    plan?: Subscription_plansOrderByWithRelationInput
    payments?: PaymentsOrderByRelationAggregateInput
  }

  export type User_subscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: User_subscriptionsWhereInput | User_subscriptionsWhereInput[]
    OR?: User_subscriptionsWhereInput[]
    NOT?: User_subscriptionsWhereInput | User_subscriptionsWhereInput[]
    user_id?: StringFilter<"User_subscriptions"> | string
    plan_id?: StringFilter<"User_subscriptions"> | string
    start_date?: DateTimeFilter<"User_subscriptions"> | Date | string
    end_date?: DateTimeFilter<"User_subscriptions"> | Date | string
    status?: EnumSubsStatusFilter<"User_subscriptions"> | $Enums.SubsStatus
    auto_renew?: BoolFilter<"User_subscriptions"> | boolean
    created_at?: DateTimeFilter<"User_subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"User_subscriptions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    plan?: XOR<Subscription_plansScalarRelationFilter, Subscription_plansWhereInput>
    payments?: PaymentsListRelationFilter
  }, "id">

  export type User_subscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: User_subscriptionsCountOrderByAggregateInput
    _max?: User_subscriptionsMaxOrderByAggregateInput
    _min?: User_subscriptionsMinOrderByAggregateInput
  }

  export type User_subscriptionsScalarWhereWithAggregatesInput = {
    AND?: User_subscriptionsScalarWhereWithAggregatesInput | User_subscriptionsScalarWhereWithAggregatesInput[]
    OR?: User_subscriptionsScalarWhereWithAggregatesInput[]
    NOT?: User_subscriptionsScalarWhereWithAggregatesInput | User_subscriptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User_subscriptions"> | string
    user_id?: StringWithAggregatesFilter<"User_subscriptions"> | string
    plan_id?: StringWithAggregatesFilter<"User_subscriptions"> | string
    start_date?: DateTimeWithAggregatesFilter<"User_subscriptions"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"User_subscriptions"> | Date | string
    status?: EnumSubsStatusWithAggregatesFilter<"User_subscriptions"> | $Enums.SubsStatus
    auto_renew?: BoolWithAggregatesFilter<"User_subscriptions"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User_subscriptions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User_subscriptions"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: StringFilter<"Payments"> | string
    user_subscription_id?: StringFilter<"Payments"> | string
    amount?: DecimalFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    payment_details?: JsonFilter<"Payments">
    status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    external_transaction_id?: StringFilter<"Payments"> | string
    created_at?: DateTimeFilter<"Payments"> | Date | string
    updated_at?: DateTimeFilter<"Payments"> | Date | string
    user_subscription?: XOR<User_subscriptionsScalarRelationFilter, User_subscriptionsWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    user_subscription_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_details?: SortOrder
    status?: SortOrder
    external_transaction_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_subscription?: User_subscriptionsOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    user_subscription_id?: StringFilter<"Payments"> | string
    amount?: DecimalFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    payment_details?: JsonFilter<"Payments">
    status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    external_transaction_id?: StringFilter<"Payments"> | string
    created_at?: DateTimeFilter<"Payments"> | Date | string
    updated_at?: DateTimeFilter<"Payments"> | Date | string
    user_subscription?: XOR<User_subscriptionsScalarRelationFilter, User_subscriptionsWhereInput>
  }, "id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_subscription_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_details?: SortOrder
    status?: SortOrder
    external_transaction_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payments"> | string
    user_subscription_id?: StringWithAggregatesFilter<"Payments"> | string
    amount?: DecimalWithAggregatesFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"Payments"> | $Enums.PaymentMethod
    payment_details?: JsonWithAggregatesFilter<"Payments">
    status?: EnumPaymentStatusWithAggregatesFilter<"Payments"> | $Enums.PaymentStatus
    external_transaction_id?: StringWithAggregatesFilter<"Payments"> | string
    created_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: StringFilter<"Categories"> | string
    name?: StringFilter<"Categories"> | string
    slug?: StringFilter<"Categories"> | string
    description?: StringFilter<"Categories"> | string
    status?: EnumStatusFilter<"Categories"> | $Enums.Status
    movie_categories?: Movie_categoriesListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    status?: SortOrder
    movie_categories?: Movie_categoriesOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    description?: StringFilter<"Categories"> | string
    status?: EnumStatusFilter<"Categories"> | $Enums.Status
    movie_categories?: Movie_categoriesListRelationFilter
  }, "id" | "slug">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    status?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categories"> | string
    name?: StringWithAggregatesFilter<"Categories"> | string
    slug?: StringWithAggregatesFilter<"Categories"> | string
    description?: StringWithAggregatesFilter<"Categories"> | string
    status?: EnumStatusWithAggregatesFilter<"Categories"> | $Enums.Status
  }

  export type MoviesWhereInput = {
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    id?: StringFilter<"Movies"> | string
    title?: StringFilter<"Movies"> | string
    slug?: StringFilter<"Movies"> | string
    description?: StringFilter<"Movies"> | string
    release_year?: IntFilter<"Movies"> | number
    duration_minutes?: IntFilter<"Movies"> | number
    poster_url?: StringFilter<"Movies"> | string
    rating?: DecimalFilter<"Movies"> | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFilter<"Movies"> | $Enums.SubscriptionType
    view_count?: IntFilter<"Movies"> | number
    created_by?: StringFilter<"Movies"> | string
    created_at?: DateTimeFilter<"Movies"> | Date | string
    updated_at?: DateTimeFilter<"Movies"> | Date | string
    status?: EnumStatusFilter<"Movies"> | $Enums.Status
    movie_categories?: Movie_categoriesListRelationFilter
    movie_files?: Movie_filesListRelationFilter
    favorites?: FavoritesListRelationFilter
    reviews?: ReviewsListRelationFilter
    watch_history?: Watch_historyListRelationFilter
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type MoviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    duration_minutes?: SortOrder
    poster_url?: SortOrder
    rating?: SortOrder
    subscription_type?: SortOrder
    view_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    movie_categories?: Movie_categoriesOrderByRelationAggregateInput
    movie_files?: Movie_filesOrderByRelationAggregateInput
    favorites?: FavoritesOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    watch_history?: Watch_historyOrderByRelationAggregateInput
    user?: UsersOrderByWithRelationInput
  }

  export type MoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    created_by?: string
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    title?: StringFilter<"Movies"> | string
    description?: StringFilter<"Movies"> | string
    release_year?: IntFilter<"Movies"> | number
    duration_minutes?: IntFilter<"Movies"> | number
    poster_url?: StringFilter<"Movies"> | string
    rating?: DecimalFilter<"Movies"> | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFilter<"Movies"> | $Enums.SubscriptionType
    view_count?: IntFilter<"Movies"> | number
    created_at?: DateTimeFilter<"Movies"> | Date | string
    updated_at?: DateTimeFilter<"Movies"> | Date | string
    status?: EnumStatusFilter<"Movies"> | $Enums.Status
    movie_categories?: Movie_categoriesListRelationFilter
    movie_files?: Movie_filesListRelationFilter
    favorites?: FavoritesListRelationFilter
    reviews?: ReviewsListRelationFilter
    watch_history?: Watch_historyListRelationFilter
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "slug" | "created_by">

  export type MoviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    duration_minutes?: SortOrder
    poster_url?: SortOrder
    rating?: SortOrder
    subscription_type?: SortOrder
    view_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    _count?: MoviesCountOrderByAggregateInput
    _avg?: MoviesAvgOrderByAggregateInput
    _max?: MoviesMaxOrderByAggregateInput
    _min?: MoviesMinOrderByAggregateInput
    _sum?: MoviesSumOrderByAggregateInput
  }

  export type MoviesScalarWhereWithAggregatesInput = {
    AND?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    OR?: MoviesScalarWhereWithAggregatesInput[]
    NOT?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movies"> | string
    title?: StringWithAggregatesFilter<"Movies"> | string
    slug?: StringWithAggregatesFilter<"Movies"> | string
    description?: StringWithAggregatesFilter<"Movies"> | string
    release_year?: IntWithAggregatesFilter<"Movies"> | number
    duration_minutes?: IntWithAggregatesFilter<"Movies"> | number
    poster_url?: StringWithAggregatesFilter<"Movies"> | string
    rating?: DecimalWithAggregatesFilter<"Movies"> | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeWithAggregatesFilter<"Movies"> | $Enums.SubscriptionType
    view_count?: IntWithAggregatesFilter<"Movies"> | number
    created_by?: StringWithAggregatesFilter<"Movies"> | string
    created_at?: DateTimeWithAggregatesFilter<"Movies"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Movies"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Movies"> | $Enums.Status
  }

  export type Movie_categoriesWhereInput = {
    AND?: Movie_categoriesWhereInput | Movie_categoriesWhereInput[]
    OR?: Movie_categoriesWhereInput[]
    NOT?: Movie_categoriesWhereInput | Movie_categoriesWhereInput[]
    id?: StringFilter<"Movie_categories"> | string
    movie_id?: StringFilter<"Movie_categories"> | string
    category_id?: StringFilter<"Movie_categories"> | string
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }

  export type Movie_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    movie_id?: SortOrder
    category_id?: SortOrder
    movies?: MoviesOrderByWithRelationInput
    categories?: CategoriesOrderByWithRelationInput
  }

  export type Movie_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Movie_categoriesWhereInput | Movie_categoriesWhereInput[]
    OR?: Movie_categoriesWhereInput[]
    NOT?: Movie_categoriesWhereInput | Movie_categoriesWhereInput[]
    movie_id?: StringFilter<"Movie_categories"> | string
    category_id?: StringFilter<"Movie_categories"> | string
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }, "id">

  export type Movie_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    movie_id?: SortOrder
    category_id?: SortOrder
    _count?: Movie_categoriesCountOrderByAggregateInput
    _max?: Movie_categoriesMaxOrderByAggregateInput
    _min?: Movie_categoriesMinOrderByAggregateInput
  }

  export type Movie_categoriesScalarWhereWithAggregatesInput = {
    AND?: Movie_categoriesScalarWhereWithAggregatesInput | Movie_categoriesScalarWhereWithAggregatesInput[]
    OR?: Movie_categoriesScalarWhereWithAggregatesInput[]
    NOT?: Movie_categoriesScalarWhereWithAggregatesInput | Movie_categoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie_categories"> | string
    movie_id?: StringWithAggregatesFilter<"Movie_categories"> | string
    category_id?: StringWithAggregatesFilter<"Movie_categories"> | string
  }

  export type Movie_filesWhereInput = {
    AND?: Movie_filesWhereInput | Movie_filesWhereInput[]
    OR?: Movie_filesWhereInput[]
    NOT?: Movie_filesWhereInput | Movie_filesWhereInput[]
    id?: StringFilter<"Movie_files"> | string
    movie_id?: StringFilter<"Movie_files"> | string
    file_url?: StringFilter<"Movie_files"> | string
    quality?: EnumQualityFilter<"Movie_files"> | $Enums.Quality
    language?: EnumLanguagesFilter<"Movie_files"> | $Enums.Languages
    status?: EnumStatusFilter<"Movie_files"> | $Enums.Status
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }

  export type Movie_filesOrderByWithRelationInput = {
    id?: SortOrder
    movie_id?: SortOrder
    file_url?: SortOrder
    quality?: SortOrder
    language?: SortOrder
    status?: SortOrder
    movies?: MoviesOrderByWithRelationInput
  }

  export type Movie_filesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Movie_filesWhereInput | Movie_filesWhereInput[]
    OR?: Movie_filesWhereInput[]
    NOT?: Movie_filesWhereInput | Movie_filesWhereInput[]
    movie_id?: StringFilter<"Movie_files"> | string
    file_url?: StringFilter<"Movie_files"> | string
    quality?: EnumQualityFilter<"Movie_files"> | $Enums.Quality
    language?: EnumLanguagesFilter<"Movie_files"> | $Enums.Languages
    status?: EnumStatusFilter<"Movie_files"> | $Enums.Status
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }, "id">

  export type Movie_filesOrderByWithAggregationInput = {
    id?: SortOrder
    movie_id?: SortOrder
    file_url?: SortOrder
    quality?: SortOrder
    language?: SortOrder
    status?: SortOrder
    _count?: Movie_filesCountOrderByAggregateInput
    _max?: Movie_filesMaxOrderByAggregateInput
    _min?: Movie_filesMinOrderByAggregateInput
  }

  export type Movie_filesScalarWhereWithAggregatesInput = {
    AND?: Movie_filesScalarWhereWithAggregatesInput | Movie_filesScalarWhereWithAggregatesInput[]
    OR?: Movie_filesScalarWhereWithAggregatesInput[]
    NOT?: Movie_filesScalarWhereWithAggregatesInput | Movie_filesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie_files"> | string
    movie_id?: StringWithAggregatesFilter<"Movie_files"> | string
    file_url?: StringWithAggregatesFilter<"Movie_files"> | string
    quality?: EnumQualityWithAggregatesFilter<"Movie_files"> | $Enums.Quality
    language?: EnumLanguagesWithAggregatesFilter<"Movie_files"> | $Enums.Languages
    status?: EnumStatusWithAggregatesFilter<"Movie_files"> | $Enums.Status
  }

  export type FavoritesWhereInput = {
    AND?: FavoritesWhereInput | FavoritesWhereInput[]
    OR?: FavoritesWhereInput[]
    NOT?: FavoritesWhereInput | FavoritesWhereInput[]
    id?: StringFilter<"Favorites"> | string
    user_id?: StringFilter<"Favorites"> | string
    movie_id?: StringFilter<"Favorites"> | string
    created_at?: DateTimeFilter<"Favorites"> | Date | string
    updated_at?: DateTimeFilter<"Favorites"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }

  export type FavoritesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: UsersOrderByWithRelationInput
    movies?: MoviesOrderByWithRelationInput
  }

  export type FavoritesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoritesWhereInput | FavoritesWhereInput[]
    OR?: FavoritesWhereInput[]
    NOT?: FavoritesWhereInput | FavoritesWhereInput[]
    user_id?: StringFilter<"Favorites"> | string
    movie_id?: StringFilter<"Favorites"> | string
    created_at?: DateTimeFilter<"Favorites"> | Date | string
    updated_at?: DateTimeFilter<"Favorites"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }, "id">

  export type FavoritesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FavoritesCountOrderByAggregateInput
    _max?: FavoritesMaxOrderByAggregateInput
    _min?: FavoritesMinOrderByAggregateInput
  }

  export type FavoritesScalarWhereWithAggregatesInput = {
    AND?: FavoritesScalarWhereWithAggregatesInput | FavoritesScalarWhereWithAggregatesInput[]
    OR?: FavoritesScalarWhereWithAggregatesInput[]
    NOT?: FavoritesScalarWhereWithAggregatesInput | FavoritesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorites"> | string
    user_id?: StringWithAggregatesFilter<"Favorites"> | string
    movie_id?: StringWithAggregatesFilter<"Favorites"> | string
    created_at?: DateTimeWithAggregatesFilter<"Favorites"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Favorites"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: StringFilter<"Reviews"> | string
    user_id?: StringFilter<"Reviews"> | string
    movie_id?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    created_at?: DateTimeFilter<"Reviews"> | Date | string
    updated_at?: DateTimeFilter<"Reviews"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: UsersOrderByWithRelationInput
    movies?: MoviesOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    user_id?: StringFilter<"Reviews"> | string
    movie_id?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    created_at?: DateTimeFilter<"Reviews"> | Date | string
    updated_at?: DateTimeFilter<"Reviews"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reviews"> | string
    user_id?: StringWithAggregatesFilter<"Reviews"> | string
    movie_id?: StringWithAggregatesFilter<"Reviews"> | string
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringWithAggregatesFilter<"Reviews"> | string
    created_at?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type Watch_historyWhereInput = {
    AND?: Watch_historyWhereInput | Watch_historyWhereInput[]
    OR?: Watch_historyWhereInput[]
    NOT?: Watch_historyWhereInput | Watch_historyWhereInput[]
    id?: StringFilter<"Watch_history"> | string
    user_id?: StringFilter<"Watch_history"> | string
    movie_id?: StringFilter<"Watch_history"> | string
    watched_duration?: IntFilter<"Watch_history"> | number
    watched_percentage?: DecimalFilter<"Watch_history"> | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFilter<"Watch_history"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }

  export type Watch_historyOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    watched_duration?: SortOrder
    watched_percentage?: SortOrder
    last_watched?: SortOrder
    users?: UsersOrderByWithRelationInput
    movies?: MoviesOrderByWithRelationInput
  }

  export type Watch_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Watch_historyWhereInput | Watch_historyWhereInput[]
    OR?: Watch_historyWhereInput[]
    NOT?: Watch_historyWhereInput | Watch_historyWhereInput[]
    user_id?: StringFilter<"Watch_history"> | string
    movie_id?: StringFilter<"Watch_history"> | string
    watched_duration?: IntFilter<"Watch_history"> | number
    watched_percentage?: DecimalFilter<"Watch_history"> | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFilter<"Watch_history"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    movies?: XOR<MoviesScalarRelationFilter, MoviesWhereInput>
  }, "id">

  export type Watch_historyOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    watched_duration?: SortOrder
    watched_percentage?: SortOrder
    last_watched?: SortOrder
    _count?: Watch_historyCountOrderByAggregateInput
    _avg?: Watch_historyAvgOrderByAggregateInput
    _max?: Watch_historyMaxOrderByAggregateInput
    _min?: Watch_historyMinOrderByAggregateInput
    _sum?: Watch_historySumOrderByAggregateInput
  }

  export type Watch_historyScalarWhereWithAggregatesInput = {
    AND?: Watch_historyScalarWhereWithAggregatesInput | Watch_historyScalarWhereWithAggregatesInput[]
    OR?: Watch_historyScalarWhereWithAggregatesInput[]
    NOT?: Watch_historyScalarWhereWithAggregatesInput | Watch_historyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watch_history"> | string
    user_id?: StringWithAggregatesFilter<"Watch_history"> | string
    movie_id?: StringWithAggregatesFilter<"Watch_history"> | string
    watched_duration?: IntWithAggregatesFilter<"Watch_history"> | number
    watched_percentage?: DecimalWithAggregatesFilter<"Watch_history"> | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeWithAggregatesFilter<"Watch_history"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsCreateNestedManyWithoutUserInput
    movies?: MoviesCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUsersInput
    reviews?: ReviewsCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesUncheckedCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsUncheckedCreateNestedManyWithoutUserInput
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUpdateManyWithoutUserNestedInput
    movies?: MoviesUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUncheckedUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUncheckedUpdateManyWithoutUserNestedInput
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProfilesCreateInput = {
    id?: string
    full_name: string
    phone: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    user: UsersCreateNestedOneWithoutProfilesInput
  }

  export type ProfilesUncheckedCreateInput = {
    id?: string
    user_id: string
    full_name: string
    phone: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type ProfilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UsersUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type ProfilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProfilesCreateManyInput = {
    id?: string
    user_id: string
    full_name: string
    phone: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type ProfilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProfilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Subscription_plansCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration_days: number
    features: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    user_subscriptions?: User_subscriptionsCreateNestedManyWithoutPlanInput
  }

  export type Subscription_plansUncheckedCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration_days: number
    features: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
    user_subscriptions?: User_subscriptionsUncheckedCreateNestedManyWithoutPlanInput
  }

  export type Subscription_plansUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_subscriptions?: User_subscriptionsUpdateManyWithoutPlanNestedInput
  }

  export type Subscription_plansUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_subscriptions?: User_subscriptionsUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type Subscription_plansCreateManyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration_days: number
    features: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Subscription_plansUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Subscription_plansUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_subscriptionsCreateInput = {
    id?: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutUser_subscriptionsInput
    plan: Subscription_plansCreateNestedOneWithoutUser_subscriptionsInput
    payments?: PaymentsCreateNestedManyWithoutUser_subscriptionInput
  }

  export type User_subscriptionsUncheckedCreateInput = {
    id?: string
    user_id: string
    plan_id: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentsUncheckedCreateNestedManyWithoutUser_subscriptionInput
  }

  export type User_subscriptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUser_subscriptionsNestedInput
    plan?: Subscription_plansUpdateOneRequiredWithoutUser_subscriptionsNestedInput
    payments?: PaymentsUpdateManyWithoutUser_subscriptionNestedInput
  }

  export type User_subscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateManyWithoutUser_subscriptionNestedInput
  }

  export type User_subscriptionsCreateManyInput = {
    id?: string
    user_id: string
    plan_id: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type User_subscriptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_subscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: $Enums.PaymentMethod
    payment_details: JsonNullValueInput | InputJsonValue
    status: $Enums.PaymentStatus
    external_transaction_id: string
    created_at?: Date | string
    updated_at?: Date | string
    user_subscription: User_subscriptionsCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: string
    user_subscription_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: $Enums.PaymentMethod
    payment_details: JsonNullValueInput | InputJsonValue
    status: $Enums.PaymentStatus
    external_transaction_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_details?: JsonNullValueInput | InputJsonValue
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    external_transaction_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_subscription?: User_subscriptionsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_subscription_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_details?: JsonNullValueInput | InputJsonValue
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    external_transaction_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    id?: string
    user_subscription_id: string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: $Enums.PaymentMethod
    payment_details: JsonNullValueInput | InputJsonValue
    status: $Enums.PaymentStatus
    external_transaction_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_details?: JsonNullValueInput | InputJsonValue
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    external_transaction_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_subscription_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_details?: JsonNullValueInput | InputJsonValue
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    external_transaction_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    status?: $Enums.Status
  }

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type MoviesCreateInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyCreateNestedManyWithoutMoviesInput
    user: UsersCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesUncheckedCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesUncheckedCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUpdateManyWithoutMoviesNestedInput
    user?: UsersUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUncheckedUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUncheckedUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesCreateManyInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type MoviesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type MoviesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Movie_categoriesCreateInput = {
    id?: string
    movies: MoviesCreateNestedOneWithoutMovie_categoriesInput
    categories: CategoriesCreateNestedOneWithoutMovie_categoriesInput
  }

  export type Movie_categoriesUncheckedCreateInput = {
    id?: string
    movie_id: string
    category_id: string
  }

  export type Movie_categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUpdateOneRequiredWithoutMovie_categoriesNestedInput
    categories?: CategoriesUpdateOneRequiredWithoutMovie_categoriesNestedInput
  }

  export type Movie_categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type Movie_categoriesCreateManyInput = {
    id?: string
    movie_id: string
    category_id: string
  }

  export type Movie_categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type Movie_categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type Movie_filesCreateInput = {
    id?: string
    file_url: string
    quality: $Enums.Quality
    language?: $Enums.Languages
    status?: $Enums.Status
    movies: MoviesCreateNestedOneWithoutMovie_filesInput
  }

  export type Movie_filesUncheckedCreateInput = {
    id?: string
    movie_id: string
    file_url: string
    quality: $Enums.Quality
    language?: $Enums.Languages
    status?: $Enums.Status
  }

  export type Movie_filesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    language?: EnumLanguagesFieldUpdateOperationsInput | $Enums.Languages
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movies?: MoviesUpdateOneRequiredWithoutMovie_filesNestedInput
  }

  export type Movie_filesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    language?: EnumLanguagesFieldUpdateOperationsInput | $Enums.Languages
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Movie_filesCreateManyInput = {
    id?: string
    movie_id: string
    file_url: string
    quality: $Enums.Quality
    language?: $Enums.Languages
    status?: $Enums.Status
  }

  export type Movie_filesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    language?: EnumLanguagesFieldUpdateOperationsInput | $Enums.Languages
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Movie_filesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    language?: EnumLanguagesFieldUpdateOperationsInput | $Enums.Languages
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type FavoritesCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    users: UsersCreateNestedOneWithoutFavoritesInput
    movies: MoviesCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateInput = {
    id?: string
    user_id: string
    movie_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FavoritesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutFavoritesNestedInput
    movies?: MoviesUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesCreateManyInput = {
    id?: string
    user_id: string
    movie_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FavoritesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    id?: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    users: UsersCreateNestedOneWithoutReviewsInput
    movies: MoviesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: string
    user_id: string
    movie_id: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    movies?: MoviesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    id?: string
    user_id: string
    movie_id: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Watch_historyCreateInput = {
    id?: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
    users: UsersCreateNestedOneWithoutWatch_historyInput
    movies: MoviesCreateNestedOneWithoutWatch_historyInput
  }

  export type Watch_historyUncheckedCreateInput = {
    id?: string
    user_id: string
    movie_id: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
  }

  export type Watch_historyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutWatch_historyNestedInput
    movies?: MoviesUpdateOneRequiredWithoutWatch_historyNestedInput
  }

  export type Watch_historyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Watch_historyCreateManyInput = {
    id?: string
    user_id: string
    movie_id: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
  }

  export type Watch_historyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Watch_historyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ProfilesListRelationFilter = {
    every?: ProfilesWhereInput
    some?: ProfilesWhereInput
    none?: ProfilesWhereInput
  }

  export type User_subscriptionsListRelationFilter = {
    every?: User_subscriptionsWhereInput
    some?: User_subscriptionsWhereInput
    none?: User_subscriptionsWhereInput
  }

  export type MoviesListRelationFilter = {
    every?: MoviesWhereInput
    some?: MoviesWhereInput
    none?: MoviesWhereInput
  }

  export type FavoritesListRelationFilter = {
    every?: FavoritesWhereInput
    some?: FavoritesWhereInput
    none?: FavoritesWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type Watch_historyListRelationFilter = {
    every?: Watch_historyWhereInput
    some?: Watch_historyWhereInput
    none?: Watch_historyWhereInput
  }

  export type ProfilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_subscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Watch_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
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

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type ProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type ProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Subscription_plansCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
    features?: SortOrder
    is_active?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Subscription_plansAvgOrderByAggregateInput = {
    price?: SortOrder
    duration_days?: SortOrder
  }

  export type Subscription_plansMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
    is_active?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Subscription_plansMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration_days?: SortOrder
    is_active?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Subscription_plansSumOrderByAggregateInput = {
    price?: SortOrder
    duration_days?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSubsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubsStatus | EnumSubsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubsStatus[] | ListEnumSubsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubsStatus[] | ListEnumSubsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubsStatusFilter<$PrismaModel> | $Enums.SubsStatus
  }

  export type Subscription_plansScalarRelationFilter = {
    is?: Subscription_plansWhereInput
    isNot?: Subscription_plansWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_subscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type User_subscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type User_subscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    auto_renew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumSubsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubsStatus | EnumSubsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubsStatus[] | ListEnumSubsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubsStatus[] | ListEnumSubsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubsStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubsStatusFilter<$PrismaModel>
    _max?: NestedEnumSubsStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type User_subscriptionsScalarRelationFilter = {
    is?: User_subscriptionsWhereInput
    isNot?: User_subscriptionsWhereInput
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_subscription_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_details?: SortOrder
    status?: SortOrder
    external_transaction_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_subscription_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    external_transaction_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_subscription_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    external_transaction_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type Movie_categoriesListRelationFilter = {
    every?: Movie_categoriesWhereInput
    some?: Movie_categoriesWhereInput
    none?: Movie_categoriesWhereInput
  }

  export type Movie_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type EnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type Movie_filesListRelationFilter = {
    every?: Movie_filesWhereInput
    some?: Movie_filesWhereInput
    none?: Movie_filesWhereInput
  }

  export type Movie_filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    duration_minutes?: SortOrder
    poster_url?: SortOrder
    rating?: SortOrder
    subscription_type?: SortOrder
    view_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type MoviesAvgOrderByAggregateInput = {
    release_year?: SortOrder
    duration_minutes?: SortOrder
    rating?: SortOrder
    view_count?: SortOrder
  }

  export type MoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    duration_minutes?: SortOrder
    poster_url?: SortOrder
    rating?: SortOrder
    subscription_type?: SortOrder
    view_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type MoviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    release_year?: SortOrder
    duration_minutes?: SortOrder
    poster_url?: SortOrder
    rating?: SortOrder
    subscription_type?: SortOrder
    view_count?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type MoviesSumOrderByAggregateInput = {
    release_year?: SortOrder
    duration_minutes?: SortOrder
    rating?: SortOrder
    view_count?: SortOrder
  }

  export type EnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type MoviesScalarRelationFilter = {
    is?: MoviesWhereInput
    isNot?: MoviesWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type Movie_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    category_id?: SortOrder
  }

  export type Movie_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    category_id?: SortOrder
  }

  export type Movie_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    category_id?: SortOrder
  }

  export type EnumQualityFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel>
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityFilter<$PrismaModel> | $Enums.Quality
  }

  export type EnumLanguagesFilter<$PrismaModel = never> = {
    equals?: $Enums.Languages | EnumLanguagesFieldRefInput<$PrismaModel>
    in?: $Enums.Languages[] | ListEnumLanguagesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Languages[] | ListEnumLanguagesFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguagesFilter<$PrismaModel> | $Enums.Languages
  }

  export type Movie_filesCountOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    file_url?: SortOrder
    quality?: SortOrder
    language?: SortOrder
    status?: SortOrder
  }

  export type Movie_filesMaxOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    file_url?: SortOrder
    quality?: SortOrder
    language?: SortOrder
    status?: SortOrder
  }

  export type Movie_filesMinOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    file_url?: SortOrder
    quality?: SortOrder
    language?: SortOrder
    status?: SortOrder
  }

  export type EnumQualityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel>
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityWithAggregatesFilter<$PrismaModel> | $Enums.Quality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQualityFilter<$PrismaModel>
    _max?: NestedEnumQualityFilter<$PrismaModel>
  }

  export type EnumLanguagesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Languages | EnumLanguagesFieldRefInput<$PrismaModel>
    in?: $Enums.Languages[] | ListEnumLanguagesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Languages[] | ListEnumLanguagesFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguagesWithAggregatesFilter<$PrismaModel> | $Enums.Languages
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguagesFilter<$PrismaModel>
    _max?: NestedEnumLanguagesFilter<$PrismaModel>
  }

  export type FavoritesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FavoritesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FavoritesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type Watch_historyCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    watched_duration?: SortOrder
    watched_percentage?: SortOrder
    last_watched?: SortOrder
  }

  export type Watch_historyAvgOrderByAggregateInput = {
    watched_duration?: SortOrder
    watched_percentage?: SortOrder
  }

  export type Watch_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    watched_duration?: SortOrder
    watched_percentage?: SortOrder
    last_watched?: SortOrder
  }

  export type Watch_historyMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    watched_duration?: SortOrder
    watched_percentage?: SortOrder
    last_watched?: SortOrder
  }

  export type Watch_historySumOrderByAggregateInput = {
    watched_duration?: SortOrder
    watched_percentage?: SortOrder
  }

  export type ProfilesCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput> | ProfilesCreateWithoutUserInput[] | ProfilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput | ProfilesCreateOrConnectWithoutUserInput[]
    createMany?: ProfilesCreateManyUserInputEnvelope
    connect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
  }

  export type User_subscriptionsCreateNestedManyWithoutUserInput = {
    create?: XOR<User_subscriptionsCreateWithoutUserInput, User_subscriptionsUncheckedCreateWithoutUserInput> | User_subscriptionsCreateWithoutUserInput[] | User_subscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutUserInput | User_subscriptionsCreateOrConnectWithoutUserInput[]
    createMany?: User_subscriptionsCreateManyUserInputEnvelope
    connect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
  }

  export type MoviesCreateNestedManyWithoutUserInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type FavoritesCreateNestedManyWithoutUsersInput = {
    create?: XOR<FavoritesCreateWithoutUsersInput, FavoritesUncheckedCreateWithoutUsersInput> | FavoritesCreateWithoutUsersInput[] | FavoritesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutUsersInput | FavoritesCreateOrConnectWithoutUsersInput[]
    createMany?: FavoritesCreateManyUsersInputEnvelope
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type Watch_historyCreateNestedManyWithoutUsersInput = {
    create?: XOR<Watch_historyCreateWithoutUsersInput, Watch_historyUncheckedCreateWithoutUsersInput> | Watch_historyCreateWithoutUsersInput[] | Watch_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Watch_historyCreateOrConnectWithoutUsersInput | Watch_historyCreateOrConnectWithoutUsersInput[]
    createMany?: Watch_historyCreateManyUsersInputEnvelope
    connect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
  }

  export type ProfilesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput> | ProfilesCreateWithoutUserInput[] | ProfilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput | ProfilesCreateOrConnectWithoutUserInput[]
    createMany?: ProfilesCreateManyUserInputEnvelope
    connect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
  }

  export type User_subscriptionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<User_subscriptionsCreateWithoutUserInput, User_subscriptionsUncheckedCreateWithoutUserInput> | User_subscriptionsCreateWithoutUserInput[] | User_subscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutUserInput | User_subscriptionsCreateOrConnectWithoutUserInput[]
    createMany?: User_subscriptionsCreateManyUserInputEnvelope
    connect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
  }

  export type MoviesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type FavoritesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<FavoritesCreateWithoutUsersInput, FavoritesUncheckedCreateWithoutUsersInput> | FavoritesCreateWithoutUsersInput[] | FavoritesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutUsersInput | FavoritesCreateOrConnectWithoutUsersInput[]
    createMany?: FavoritesCreateManyUsersInputEnvelope
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type Watch_historyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Watch_historyCreateWithoutUsersInput, Watch_historyUncheckedCreateWithoutUsersInput> | Watch_historyCreateWithoutUsersInput[] | Watch_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Watch_historyCreateOrConnectWithoutUsersInput | Watch_historyCreateOrConnectWithoutUsersInput[]
    createMany?: Watch_historyCreateManyUsersInputEnvelope
    connect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ProfilesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput> | ProfilesCreateWithoutUserInput[] | ProfilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput | ProfilesCreateOrConnectWithoutUserInput[]
    upsert?: ProfilesUpsertWithWhereUniqueWithoutUserInput | ProfilesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfilesCreateManyUserInputEnvelope
    set?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    disconnect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    delete?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    connect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    update?: ProfilesUpdateWithWhereUniqueWithoutUserInput | ProfilesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfilesUpdateManyWithWhereWithoutUserInput | ProfilesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfilesScalarWhereInput | ProfilesScalarWhereInput[]
  }

  export type User_subscriptionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_subscriptionsCreateWithoutUserInput, User_subscriptionsUncheckedCreateWithoutUserInput> | User_subscriptionsCreateWithoutUserInput[] | User_subscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutUserInput | User_subscriptionsCreateOrConnectWithoutUserInput[]
    upsert?: User_subscriptionsUpsertWithWhereUniqueWithoutUserInput | User_subscriptionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_subscriptionsCreateManyUserInputEnvelope
    set?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    disconnect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    delete?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    connect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    update?: User_subscriptionsUpdateWithWhereUniqueWithoutUserInput | User_subscriptionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_subscriptionsUpdateManyWithWhereWithoutUserInput | User_subscriptionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_subscriptionsScalarWhereInput | User_subscriptionsScalarWhereInput[]
  }

  export type MoviesUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutUserInput | MoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutUserInput | MoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutUserInput | MoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type FavoritesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<FavoritesCreateWithoutUsersInput, FavoritesUncheckedCreateWithoutUsersInput> | FavoritesCreateWithoutUsersInput[] | FavoritesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutUsersInput | FavoritesCreateOrConnectWithoutUsersInput[]
    upsert?: FavoritesUpsertWithWhereUniqueWithoutUsersInput | FavoritesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: FavoritesCreateManyUsersInputEnvelope
    set?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    disconnect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    delete?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    update?: FavoritesUpdateWithWhereUniqueWithoutUsersInput | FavoritesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: FavoritesUpdateManyWithWhereWithoutUsersInput | FavoritesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUsersInput | ReviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUsersInput | ReviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUsersInput | ReviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Watch_historyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Watch_historyCreateWithoutUsersInput, Watch_historyUncheckedCreateWithoutUsersInput> | Watch_historyCreateWithoutUsersInput[] | Watch_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Watch_historyCreateOrConnectWithoutUsersInput | Watch_historyCreateOrConnectWithoutUsersInput[]
    upsert?: Watch_historyUpsertWithWhereUniqueWithoutUsersInput | Watch_historyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Watch_historyCreateManyUsersInputEnvelope
    set?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    disconnect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    delete?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    connect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    update?: Watch_historyUpdateWithWhereUniqueWithoutUsersInput | Watch_historyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Watch_historyUpdateManyWithWhereWithoutUsersInput | Watch_historyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Watch_historyScalarWhereInput | Watch_historyScalarWhereInput[]
  }

  export type ProfilesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput> | ProfilesCreateWithoutUserInput[] | ProfilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfilesCreateOrConnectWithoutUserInput | ProfilesCreateOrConnectWithoutUserInput[]
    upsert?: ProfilesUpsertWithWhereUniqueWithoutUserInput | ProfilesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfilesCreateManyUserInputEnvelope
    set?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    disconnect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    delete?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    connect?: ProfilesWhereUniqueInput | ProfilesWhereUniqueInput[]
    update?: ProfilesUpdateWithWhereUniqueWithoutUserInput | ProfilesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfilesUpdateManyWithWhereWithoutUserInput | ProfilesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfilesScalarWhereInput | ProfilesScalarWhereInput[]
  }

  export type User_subscriptionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_subscriptionsCreateWithoutUserInput, User_subscriptionsUncheckedCreateWithoutUserInput> | User_subscriptionsCreateWithoutUserInput[] | User_subscriptionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutUserInput | User_subscriptionsCreateOrConnectWithoutUserInput[]
    upsert?: User_subscriptionsUpsertWithWhereUniqueWithoutUserInput | User_subscriptionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_subscriptionsCreateManyUserInputEnvelope
    set?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    disconnect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    delete?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    connect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    update?: User_subscriptionsUpdateWithWhereUniqueWithoutUserInput | User_subscriptionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_subscriptionsUpdateManyWithWhereWithoutUserInput | User_subscriptionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_subscriptionsScalarWhereInput | User_subscriptionsScalarWhereInput[]
  }

  export type MoviesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutUserInput | MoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutUserInput | MoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutUserInput | MoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type FavoritesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<FavoritesCreateWithoutUsersInput, FavoritesUncheckedCreateWithoutUsersInput> | FavoritesCreateWithoutUsersInput[] | FavoritesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutUsersInput | FavoritesCreateOrConnectWithoutUsersInput[]
    upsert?: FavoritesUpsertWithWhereUniqueWithoutUsersInput | FavoritesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: FavoritesCreateManyUsersInputEnvelope
    set?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    disconnect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    delete?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    update?: FavoritesUpdateWithWhereUniqueWithoutUsersInput | FavoritesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: FavoritesUpdateManyWithWhereWithoutUsersInput | FavoritesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUsersInput | ReviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUsersInput | ReviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUsersInput | ReviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Watch_historyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Watch_historyCreateWithoutUsersInput, Watch_historyUncheckedCreateWithoutUsersInput> | Watch_historyCreateWithoutUsersInput[] | Watch_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Watch_historyCreateOrConnectWithoutUsersInput | Watch_historyCreateOrConnectWithoutUsersInput[]
    upsert?: Watch_historyUpsertWithWhereUniqueWithoutUsersInput | Watch_historyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Watch_historyCreateManyUsersInputEnvelope
    set?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    disconnect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    delete?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    connect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    update?: Watch_historyUpdateWithWhereUniqueWithoutUsersInput | Watch_historyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Watch_historyUpdateManyWithWhereWithoutUsersInput | Watch_historyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Watch_historyScalarWhereInput | Watch_historyScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutProfilesInput = {
    create?: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProfilesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProfilesInput
    upsert?: UsersUpsertWithoutProfilesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutProfilesInput, UsersUpdateWithoutProfilesInput>, UsersUncheckedUpdateWithoutProfilesInput>
  }

  export type User_subscriptionsCreateNestedManyWithoutPlanInput = {
    create?: XOR<User_subscriptionsCreateWithoutPlanInput, User_subscriptionsUncheckedCreateWithoutPlanInput> | User_subscriptionsCreateWithoutPlanInput[] | User_subscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutPlanInput | User_subscriptionsCreateOrConnectWithoutPlanInput[]
    createMany?: User_subscriptionsCreateManyPlanInputEnvelope
    connect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
  }

  export type User_subscriptionsUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<User_subscriptionsCreateWithoutPlanInput, User_subscriptionsUncheckedCreateWithoutPlanInput> | User_subscriptionsCreateWithoutPlanInput[] | User_subscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutPlanInput | User_subscriptionsCreateOrConnectWithoutPlanInput[]
    createMany?: User_subscriptionsCreateManyPlanInputEnvelope
    connect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type User_subscriptionsUpdateManyWithoutPlanNestedInput = {
    create?: XOR<User_subscriptionsCreateWithoutPlanInput, User_subscriptionsUncheckedCreateWithoutPlanInput> | User_subscriptionsCreateWithoutPlanInput[] | User_subscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutPlanInput | User_subscriptionsCreateOrConnectWithoutPlanInput[]
    upsert?: User_subscriptionsUpsertWithWhereUniqueWithoutPlanInput | User_subscriptionsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: User_subscriptionsCreateManyPlanInputEnvelope
    set?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    disconnect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    delete?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    connect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    update?: User_subscriptionsUpdateWithWhereUniqueWithoutPlanInput | User_subscriptionsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: User_subscriptionsUpdateManyWithWhereWithoutPlanInput | User_subscriptionsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: User_subscriptionsScalarWhereInput | User_subscriptionsScalarWhereInput[]
  }

  export type User_subscriptionsUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<User_subscriptionsCreateWithoutPlanInput, User_subscriptionsUncheckedCreateWithoutPlanInput> | User_subscriptionsCreateWithoutPlanInput[] | User_subscriptionsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutPlanInput | User_subscriptionsCreateOrConnectWithoutPlanInput[]
    upsert?: User_subscriptionsUpsertWithWhereUniqueWithoutPlanInput | User_subscriptionsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: User_subscriptionsCreateManyPlanInputEnvelope
    set?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    disconnect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    delete?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    connect?: User_subscriptionsWhereUniqueInput | User_subscriptionsWhereUniqueInput[]
    update?: User_subscriptionsUpdateWithWhereUniqueWithoutPlanInput | User_subscriptionsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: User_subscriptionsUpdateManyWithWhereWithoutPlanInput | User_subscriptionsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: User_subscriptionsScalarWhereInput | User_subscriptionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUser_subscriptionsInput = {
    create?: XOR<UsersCreateWithoutUser_subscriptionsInput, UsersUncheckedCreateWithoutUser_subscriptionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_subscriptionsInput
    connect?: UsersWhereUniqueInput
  }

  export type Subscription_plansCreateNestedOneWithoutUser_subscriptionsInput = {
    create?: XOR<Subscription_plansCreateWithoutUser_subscriptionsInput, Subscription_plansUncheckedCreateWithoutUser_subscriptionsInput>
    connectOrCreate?: Subscription_plansCreateOrConnectWithoutUser_subscriptionsInput
    connect?: Subscription_plansWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutUser_subscriptionInput = {
    create?: XOR<PaymentsCreateWithoutUser_subscriptionInput, PaymentsUncheckedCreateWithoutUser_subscriptionInput> | PaymentsCreateWithoutUser_subscriptionInput[] | PaymentsUncheckedCreateWithoutUser_subscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUser_subscriptionInput | PaymentsCreateOrConnectWithoutUser_subscriptionInput[]
    createMany?: PaymentsCreateManyUser_subscriptionInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutUser_subscriptionInput = {
    create?: XOR<PaymentsCreateWithoutUser_subscriptionInput, PaymentsUncheckedCreateWithoutUser_subscriptionInput> | PaymentsCreateWithoutUser_subscriptionInput[] | PaymentsUncheckedCreateWithoutUser_subscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUser_subscriptionInput | PaymentsCreateOrConnectWithoutUser_subscriptionInput[]
    createMany?: PaymentsCreateManyUser_subscriptionInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type EnumSubsStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubsStatus
  }

  export type UsersUpdateOneRequiredWithoutUser_subscriptionsNestedInput = {
    create?: XOR<UsersCreateWithoutUser_subscriptionsInput, UsersUncheckedCreateWithoutUser_subscriptionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_subscriptionsInput
    upsert?: UsersUpsertWithoutUser_subscriptionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUser_subscriptionsInput, UsersUpdateWithoutUser_subscriptionsInput>, UsersUncheckedUpdateWithoutUser_subscriptionsInput>
  }

  export type Subscription_plansUpdateOneRequiredWithoutUser_subscriptionsNestedInput = {
    create?: XOR<Subscription_plansCreateWithoutUser_subscriptionsInput, Subscription_plansUncheckedCreateWithoutUser_subscriptionsInput>
    connectOrCreate?: Subscription_plansCreateOrConnectWithoutUser_subscriptionsInput
    upsert?: Subscription_plansUpsertWithoutUser_subscriptionsInput
    connect?: Subscription_plansWhereUniqueInput
    update?: XOR<XOR<Subscription_plansUpdateToOneWithWhereWithoutUser_subscriptionsInput, Subscription_plansUpdateWithoutUser_subscriptionsInput>, Subscription_plansUncheckedUpdateWithoutUser_subscriptionsInput>
  }

  export type PaymentsUpdateManyWithoutUser_subscriptionNestedInput = {
    create?: XOR<PaymentsCreateWithoutUser_subscriptionInput, PaymentsUncheckedCreateWithoutUser_subscriptionInput> | PaymentsCreateWithoutUser_subscriptionInput[] | PaymentsUncheckedCreateWithoutUser_subscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUser_subscriptionInput | PaymentsCreateOrConnectWithoutUser_subscriptionInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutUser_subscriptionInput | PaymentsUpsertWithWhereUniqueWithoutUser_subscriptionInput[]
    createMany?: PaymentsCreateManyUser_subscriptionInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutUser_subscriptionInput | PaymentsUpdateWithWhereUniqueWithoutUser_subscriptionInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutUser_subscriptionInput | PaymentsUpdateManyWithWhereWithoutUser_subscriptionInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutUser_subscriptionNestedInput = {
    create?: XOR<PaymentsCreateWithoutUser_subscriptionInput, PaymentsUncheckedCreateWithoutUser_subscriptionInput> | PaymentsCreateWithoutUser_subscriptionInput[] | PaymentsUncheckedCreateWithoutUser_subscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUser_subscriptionInput | PaymentsCreateOrConnectWithoutUser_subscriptionInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutUser_subscriptionInput | PaymentsUpsertWithWhereUniqueWithoutUser_subscriptionInput[]
    createMany?: PaymentsCreateManyUser_subscriptionInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutUser_subscriptionInput | PaymentsUpdateWithWhereUniqueWithoutUser_subscriptionInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutUser_subscriptionInput | PaymentsUpdateManyWithWhereWithoutUser_subscriptionInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type User_subscriptionsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<User_subscriptionsCreateWithoutPaymentsInput, User_subscriptionsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutPaymentsInput
    connect?: User_subscriptionsWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type User_subscriptionsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<User_subscriptionsCreateWithoutPaymentsInput, User_subscriptionsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: User_subscriptionsCreateOrConnectWithoutPaymentsInput
    upsert?: User_subscriptionsUpsertWithoutPaymentsInput
    connect?: User_subscriptionsWhereUniqueInput
    update?: XOR<XOR<User_subscriptionsUpdateToOneWithWhereWithoutPaymentsInput, User_subscriptionsUpdateWithoutPaymentsInput>, User_subscriptionsUncheckedUpdateWithoutPaymentsInput>
  }

  export type Movie_categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Movie_categoriesCreateWithoutCategoriesInput, Movie_categoriesUncheckedCreateWithoutCategoriesInput> | Movie_categoriesCreateWithoutCategoriesInput[] | Movie_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: Movie_categoriesCreateOrConnectWithoutCategoriesInput | Movie_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: Movie_categoriesCreateManyCategoriesInputEnvelope
    connect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
  }

  export type Movie_categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Movie_categoriesCreateWithoutCategoriesInput, Movie_categoriesUncheckedCreateWithoutCategoriesInput> | Movie_categoriesCreateWithoutCategoriesInput[] | Movie_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: Movie_categoriesCreateOrConnectWithoutCategoriesInput | Movie_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: Movie_categoriesCreateManyCategoriesInputEnvelope
    connect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
  }

  export type Movie_categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<Movie_categoriesCreateWithoutCategoriesInput, Movie_categoriesUncheckedCreateWithoutCategoriesInput> | Movie_categoriesCreateWithoutCategoriesInput[] | Movie_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: Movie_categoriesCreateOrConnectWithoutCategoriesInput | Movie_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: Movie_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | Movie_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: Movie_categoriesCreateManyCategoriesInputEnvelope
    set?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    disconnect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    delete?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    connect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    update?: Movie_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | Movie_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: Movie_categoriesUpdateManyWithWhereWithoutCategoriesInput | Movie_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: Movie_categoriesScalarWhereInput | Movie_categoriesScalarWhereInput[]
  }

  export type Movie_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<Movie_categoriesCreateWithoutCategoriesInput, Movie_categoriesUncheckedCreateWithoutCategoriesInput> | Movie_categoriesCreateWithoutCategoriesInput[] | Movie_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: Movie_categoriesCreateOrConnectWithoutCategoriesInput | Movie_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: Movie_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | Movie_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: Movie_categoriesCreateManyCategoriesInputEnvelope
    set?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    disconnect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    delete?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    connect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    update?: Movie_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | Movie_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: Movie_categoriesUpdateManyWithWhereWithoutCategoriesInput | Movie_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: Movie_categoriesScalarWhereInput | Movie_categoriesScalarWhereInput[]
  }

  export type Movie_categoriesCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Movie_categoriesCreateWithoutMoviesInput, Movie_categoriesUncheckedCreateWithoutMoviesInput> | Movie_categoriesCreateWithoutMoviesInput[] | Movie_categoriesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_categoriesCreateOrConnectWithoutMoviesInput | Movie_categoriesCreateOrConnectWithoutMoviesInput[]
    createMany?: Movie_categoriesCreateManyMoviesInputEnvelope
    connect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
  }

  export type Movie_filesCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Movie_filesCreateWithoutMoviesInput, Movie_filesUncheckedCreateWithoutMoviesInput> | Movie_filesCreateWithoutMoviesInput[] | Movie_filesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_filesCreateOrConnectWithoutMoviesInput | Movie_filesCreateOrConnectWithoutMoviesInput[]
    createMany?: Movie_filesCreateManyMoviesInputEnvelope
    connect?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
  }

  export type FavoritesCreateNestedManyWithoutMoviesInput = {
    create?: XOR<FavoritesCreateWithoutMoviesInput, FavoritesUncheckedCreateWithoutMoviesInput> | FavoritesCreateWithoutMoviesInput[] | FavoritesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutMoviesInput | FavoritesCreateOrConnectWithoutMoviesInput[]
    createMany?: FavoritesCreateManyMoviesInputEnvelope
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ReviewsCreateWithoutMoviesInput, ReviewsUncheckedCreateWithoutMoviesInput> | ReviewsCreateWithoutMoviesInput[] | ReviewsUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutMoviesInput | ReviewsCreateOrConnectWithoutMoviesInput[]
    createMany?: ReviewsCreateManyMoviesInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type Watch_historyCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Watch_historyCreateWithoutMoviesInput, Watch_historyUncheckedCreateWithoutMoviesInput> | Watch_historyCreateWithoutMoviesInput[] | Watch_historyUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Watch_historyCreateOrConnectWithoutMoviesInput | Watch_historyCreateOrConnectWithoutMoviesInput[]
    createMany?: Watch_historyCreateManyMoviesInputEnvelope
    connect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutMoviesInput = {
    create?: XOR<UsersCreateWithoutMoviesInput, UsersUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMoviesInput
    connect?: UsersWhereUniqueInput
  }

  export type Movie_categoriesUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Movie_categoriesCreateWithoutMoviesInput, Movie_categoriesUncheckedCreateWithoutMoviesInput> | Movie_categoriesCreateWithoutMoviesInput[] | Movie_categoriesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_categoriesCreateOrConnectWithoutMoviesInput | Movie_categoriesCreateOrConnectWithoutMoviesInput[]
    createMany?: Movie_categoriesCreateManyMoviesInputEnvelope
    connect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
  }

  export type Movie_filesUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Movie_filesCreateWithoutMoviesInput, Movie_filesUncheckedCreateWithoutMoviesInput> | Movie_filesCreateWithoutMoviesInput[] | Movie_filesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_filesCreateOrConnectWithoutMoviesInput | Movie_filesCreateOrConnectWithoutMoviesInput[]
    createMany?: Movie_filesCreateManyMoviesInputEnvelope
    connect?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
  }

  export type FavoritesUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<FavoritesCreateWithoutMoviesInput, FavoritesUncheckedCreateWithoutMoviesInput> | FavoritesCreateWithoutMoviesInput[] | FavoritesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutMoviesInput | FavoritesCreateOrConnectWithoutMoviesInput[]
    createMany?: FavoritesCreateManyMoviesInputEnvelope
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ReviewsCreateWithoutMoviesInput, ReviewsUncheckedCreateWithoutMoviesInput> | ReviewsCreateWithoutMoviesInput[] | ReviewsUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutMoviesInput | ReviewsCreateOrConnectWithoutMoviesInput[]
    createMany?: ReviewsCreateManyMoviesInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type Watch_historyUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<Watch_historyCreateWithoutMoviesInput, Watch_historyUncheckedCreateWithoutMoviesInput> | Watch_historyCreateWithoutMoviesInput[] | Watch_historyUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Watch_historyCreateOrConnectWithoutMoviesInput | Watch_historyCreateOrConnectWithoutMoviesInput[]
    createMany?: Watch_historyCreateManyMoviesInputEnvelope
    connect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
  }

  export type EnumSubscriptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionType
  }

  export type Movie_categoriesUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Movie_categoriesCreateWithoutMoviesInput, Movie_categoriesUncheckedCreateWithoutMoviesInput> | Movie_categoriesCreateWithoutMoviesInput[] | Movie_categoriesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_categoriesCreateOrConnectWithoutMoviesInput | Movie_categoriesCreateOrConnectWithoutMoviesInput[]
    upsert?: Movie_categoriesUpsertWithWhereUniqueWithoutMoviesInput | Movie_categoriesUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: Movie_categoriesCreateManyMoviesInputEnvelope
    set?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    disconnect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    delete?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    connect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    update?: Movie_categoriesUpdateWithWhereUniqueWithoutMoviesInput | Movie_categoriesUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: Movie_categoriesUpdateManyWithWhereWithoutMoviesInput | Movie_categoriesUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: Movie_categoriesScalarWhereInput | Movie_categoriesScalarWhereInput[]
  }

  export type Movie_filesUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Movie_filesCreateWithoutMoviesInput, Movie_filesUncheckedCreateWithoutMoviesInput> | Movie_filesCreateWithoutMoviesInput[] | Movie_filesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_filesCreateOrConnectWithoutMoviesInput | Movie_filesCreateOrConnectWithoutMoviesInput[]
    upsert?: Movie_filesUpsertWithWhereUniqueWithoutMoviesInput | Movie_filesUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: Movie_filesCreateManyMoviesInputEnvelope
    set?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
    disconnect?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
    delete?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
    connect?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
    update?: Movie_filesUpdateWithWhereUniqueWithoutMoviesInput | Movie_filesUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: Movie_filesUpdateManyWithWhereWithoutMoviesInput | Movie_filesUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: Movie_filesScalarWhereInput | Movie_filesScalarWhereInput[]
  }

  export type FavoritesUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<FavoritesCreateWithoutMoviesInput, FavoritesUncheckedCreateWithoutMoviesInput> | FavoritesCreateWithoutMoviesInput[] | FavoritesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutMoviesInput | FavoritesCreateOrConnectWithoutMoviesInput[]
    upsert?: FavoritesUpsertWithWhereUniqueWithoutMoviesInput | FavoritesUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: FavoritesCreateManyMoviesInputEnvelope
    set?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    disconnect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    delete?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    update?: FavoritesUpdateWithWhereUniqueWithoutMoviesInput | FavoritesUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: FavoritesUpdateManyWithWhereWithoutMoviesInput | FavoritesUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ReviewsCreateWithoutMoviesInput, ReviewsUncheckedCreateWithoutMoviesInput> | ReviewsCreateWithoutMoviesInput[] | ReviewsUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutMoviesInput | ReviewsCreateOrConnectWithoutMoviesInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutMoviesInput | ReviewsUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: ReviewsCreateManyMoviesInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutMoviesInput | ReviewsUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutMoviesInput | ReviewsUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Watch_historyUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Watch_historyCreateWithoutMoviesInput, Watch_historyUncheckedCreateWithoutMoviesInput> | Watch_historyCreateWithoutMoviesInput[] | Watch_historyUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Watch_historyCreateOrConnectWithoutMoviesInput | Watch_historyCreateOrConnectWithoutMoviesInput[]
    upsert?: Watch_historyUpsertWithWhereUniqueWithoutMoviesInput | Watch_historyUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: Watch_historyCreateManyMoviesInputEnvelope
    set?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    disconnect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    delete?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    connect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    update?: Watch_historyUpdateWithWhereUniqueWithoutMoviesInput | Watch_historyUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: Watch_historyUpdateManyWithWhereWithoutMoviesInput | Watch_historyUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: Watch_historyScalarWhereInput | Watch_historyScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<UsersCreateWithoutMoviesInput, UsersUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMoviesInput
    upsert?: UsersUpsertWithoutMoviesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMoviesInput, UsersUpdateWithoutMoviesInput>, UsersUncheckedUpdateWithoutMoviesInput>
  }

  export type Movie_categoriesUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Movie_categoriesCreateWithoutMoviesInput, Movie_categoriesUncheckedCreateWithoutMoviesInput> | Movie_categoriesCreateWithoutMoviesInput[] | Movie_categoriesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_categoriesCreateOrConnectWithoutMoviesInput | Movie_categoriesCreateOrConnectWithoutMoviesInput[]
    upsert?: Movie_categoriesUpsertWithWhereUniqueWithoutMoviesInput | Movie_categoriesUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: Movie_categoriesCreateManyMoviesInputEnvelope
    set?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    disconnect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    delete?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    connect?: Movie_categoriesWhereUniqueInput | Movie_categoriesWhereUniqueInput[]
    update?: Movie_categoriesUpdateWithWhereUniqueWithoutMoviesInput | Movie_categoriesUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: Movie_categoriesUpdateManyWithWhereWithoutMoviesInput | Movie_categoriesUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: Movie_categoriesScalarWhereInput | Movie_categoriesScalarWhereInput[]
  }

  export type Movie_filesUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Movie_filesCreateWithoutMoviesInput, Movie_filesUncheckedCreateWithoutMoviesInput> | Movie_filesCreateWithoutMoviesInput[] | Movie_filesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Movie_filesCreateOrConnectWithoutMoviesInput | Movie_filesCreateOrConnectWithoutMoviesInput[]
    upsert?: Movie_filesUpsertWithWhereUniqueWithoutMoviesInput | Movie_filesUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: Movie_filesCreateManyMoviesInputEnvelope
    set?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
    disconnect?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
    delete?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
    connect?: Movie_filesWhereUniqueInput | Movie_filesWhereUniqueInput[]
    update?: Movie_filesUpdateWithWhereUniqueWithoutMoviesInput | Movie_filesUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: Movie_filesUpdateManyWithWhereWithoutMoviesInput | Movie_filesUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: Movie_filesScalarWhereInput | Movie_filesScalarWhereInput[]
  }

  export type FavoritesUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<FavoritesCreateWithoutMoviesInput, FavoritesUncheckedCreateWithoutMoviesInput> | FavoritesCreateWithoutMoviesInput[] | FavoritesUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: FavoritesCreateOrConnectWithoutMoviesInput | FavoritesCreateOrConnectWithoutMoviesInput[]
    upsert?: FavoritesUpsertWithWhereUniqueWithoutMoviesInput | FavoritesUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: FavoritesCreateManyMoviesInputEnvelope
    set?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    disconnect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    delete?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    connect?: FavoritesWhereUniqueInput | FavoritesWhereUniqueInput[]
    update?: FavoritesUpdateWithWhereUniqueWithoutMoviesInput | FavoritesUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: FavoritesUpdateManyWithWhereWithoutMoviesInput | FavoritesUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ReviewsCreateWithoutMoviesInput, ReviewsUncheckedCreateWithoutMoviesInput> | ReviewsCreateWithoutMoviesInput[] | ReviewsUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutMoviesInput | ReviewsCreateOrConnectWithoutMoviesInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutMoviesInput | ReviewsUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: ReviewsCreateManyMoviesInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutMoviesInput | ReviewsUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutMoviesInput | ReviewsUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Watch_historyUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<Watch_historyCreateWithoutMoviesInput, Watch_historyUncheckedCreateWithoutMoviesInput> | Watch_historyCreateWithoutMoviesInput[] | Watch_historyUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: Watch_historyCreateOrConnectWithoutMoviesInput | Watch_historyCreateOrConnectWithoutMoviesInput[]
    upsert?: Watch_historyUpsertWithWhereUniqueWithoutMoviesInput | Watch_historyUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: Watch_historyCreateManyMoviesInputEnvelope
    set?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    disconnect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    delete?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    connect?: Watch_historyWhereUniqueInput | Watch_historyWhereUniqueInput[]
    update?: Watch_historyUpdateWithWhereUniqueWithoutMoviesInput | Watch_historyUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: Watch_historyUpdateManyWithWhereWithoutMoviesInput | Watch_historyUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: Watch_historyScalarWhereInput | Watch_historyScalarWhereInput[]
  }

  export type MoviesCreateNestedOneWithoutMovie_categoriesInput = {
    create?: XOR<MoviesCreateWithoutMovie_categoriesInput, MoviesUncheckedCreateWithoutMovie_categoriesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutMovie_categoriesInput
    connect?: MoviesWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutMovie_categoriesInput = {
    create?: XOR<CategoriesCreateWithoutMovie_categoriesInput, CategoriesUncheckedCreateWithoutMovie_categoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutMovie_categoriesInput
    connect?: CategoriesWhereUniqueInput
  }

  export type MoviesUpdateOneRequiredWithoutMovie_categoriesNestedInput = {
    create?: XOR<MoviesCreateWithoutMovie_categoriesInput, MoviesUncheckedCreateWithoutMovie_categoriesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutMovie_categoriesInput
    upsert?: MoviesUpsertWithoutMovie_categoriesInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutMovie_categoriesInput, MoviesUpdateWithoutMovie_categoriesInput>, MoviesUncheckedUpdateWithoutMovie_categoriesInput>
  }

  export type CategoriesUpdateOneRequiredWithoutMovie_categoriesNestedInput = {
    create?: XOR<CategoriesCreateWithoutMovie_categoriesInput, CategoriesUncheckedCreateWithoutMovie_categoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutMovie_categoriesInput
    upsert?: CategoriesUpsertWithoutMovie_categoriesInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutMovie_categoriesInput, CategoriesUpdateWithoutMovie_categoriesInput>, CategoriesUncheckedUpdateWithoutMovie_categoriesInput>
  }

  export type MoviesCreateNestedOneWithoutMovie_filesInput = {
    create?: XOR<MoviesCreateWithoutMovie_filesInput, MoviesUncheckedCreateWithoutMovie_filesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutMovie_filesInput
    connect?: MoviesWhereUniqueInput
  }

  export type EnumQualityFieldUpdateOperationsInput = {
    set?: $Enums.Quality
  }

  export type EnumLanguagesFieldUpdateOperationsInput = {
    set?: $Enums.Languages
  }

  export type MoviesUpdateOneRequiredWithoutMovie_filesNestedInput = {
    create?: XOR<MoviesCreateWithoutMovie_filesInput, MoviesUncheckedCreateWithoutMovie_filesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutMovie_filesInput
    upsert?: MoviesUpsertWithoutMovie_filesInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutMovie_filesInput, MoviesUpdateWithoutMovie_filesInput>, MoviesUncheckedUpdateWithoutMovie_filesInput>
  }

  export type UsersCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UsersCreateWithoutFavoritesInput, UsersUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFavoritesInput
    connect?: UsersWhereUniqueInput
  }

  export type MoviesCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<MoviesCreateWithoutFavoritesInput, MoviesUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutFavoritesInput
    connect?: MoviesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UsersCreateWithoutFavoritesInput, UsersUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFavoritesInput
    upsert?: UsersUpsertWithoutFavoritesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFavoritesInput, UsersUpdateWithoutFavoritesInput>, UsersUncheckedUpdateWithoutFavoritesInput>
  }

  export type MoviesUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<MoviesCreateWithoutFavoritesInput, MoviesUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutFavoritesInput
    upsert?: MoviesUpsertWithoutFavoritesInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutFavoritesInput, MoviesUpdateWithoutFavoritesInput>, MoviesUncheckedUpdateWithoutFavoritesInput>
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type MoviesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<MoviesCreateWithoutReviewsInput, MoviesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutReviewsInput
    connect?: MoviesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type MoviesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<MoviesCreateWithoutReviewsInput, MoviesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutReviewsInput
    upsert?: MoviesUpsertWithoutReviewsInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutReviewsInput, MoviesUpdateWithoutReviewsInput>, MoviesUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersCreateNestedOneWithoutWatch_historyInput = {
    create?: XOR<UsersCreateWithoutWatch_historyInput, UsersUncheckedCreateWithoutWatch_historyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWatch_historyInput
    connect?: UsersWhereUniqueInput
  }

  export type MoviesCreateNestedOneWithoutWatch_historyInput = {
    create?: XOR<MoviesCreateWithoutWatch_historyInput, MoviesUncheckedCreateWithoutWatch_historyInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutWatch_historyInput
    connect?: MoviesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutWatch_historyNestedInput = {
    create?: XOR<UsersCreateWithoutWatch_historyInput, UsersUncheckedCreateWithoutWatch_historyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWatch_historyInput
    upsert?: UsersUpsertWithoutWatch_historyInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWatch_historyInput, UsersUpdateWithoutWatch_historyInput>, UsersUncheckedUpdateWithoutWatch_historyInput>
  }

  export type MoviesUpdateOneRequiredWithoutWatch_historyNestedInput = {
    create?: XOR<MoviesCreateWithoutWatch_historyInput, MoviesUncheckedCreateWithoutWatch_historyInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutWatch_historyInput
    upsert?: MoviesUpsertWithoutWatch_historyInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutWatch_historyInput, MoviesUpdateWithoutWatch_historyInput>, MoviesUncheckedUpdateWithoutWatch_historyInput>
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

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Roles[] | ListEnumRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSubsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubsStatus | EnumSubsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubsStatus[] | ListEnumSubsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubsStatus[] | ListEnumSubsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubsStatusFilter<$PrismaModel> | $Enums.SubsStatus
  }

  export type NestedEnumSubsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubsStatus | EnumSubsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubsStatus[] | ListEnumSubsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubsStatus[] | ListEnumSubsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubsStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubsStatusFilter<$PrismaModel>
    _max?: NestedEnumSubsStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type NestedEnumQualityFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel>
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityFilter<$PrismaModel> | $Enums.Quality
  }

  export type NestedEnumLanguagesFilter<$PrismaModel = never> = {
    equals?: $Enums.Languages | EnumLanguagesFieldRefInput<$PrismaModel>
    in?: $Enums.Languages[] | ListEnumLanguagesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Languages[] | ListEnumLanguagesFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguagesFilter<$PrismaModel> | $Enums.Languages
  }

  export type NestedEnumQualityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Quality | EnumQualityFieldRefInput<$PrismaModel>
    in?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Quality[] | ListEnumQualityFieldRefInput<$PrismaModel>
    not?: NestedEnumQualityWithAggregatesFilter<$PrismaModel> | $Enums.Quality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQualityFilter<$PrismaModel>
    _max?: NestedEnumQualityFilter<$PrismaModel>
  }

  export type NestedEnumLanguagesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Languages | EnumLanguagesFieldRefInput<$PrismaModel>
    in?: $Enums.Languages[] | ListEnumLanguagesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Languages[] | ListEnumLanguagesFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguagesWithAggregatesFilter<$PrismaModel> | $Enums.Languages
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguagesFilter<$PrismaModel>
    _max?: NestedEnumLanguagesFilter<$PrismaModel>
  }

  export type ProfilesCreateWithoutUserInput = {
    id?: string
    full_name: string
    phone: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type ProfilesUncheckedCreateWithoutUserInput = {
    id?: string
    full_name: string
    phone: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type ProfilesCreateOrConnectWithoutUserInput = {
    where: ProfilesWhereUniqueInput
    create: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
  }

  export type ProfilesCreateManyUserInputEnvelope = {
    data: ProfilesCreateManyUserInput | ProfilesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type User_subscriptionsCreateWithoutUserInput = {
    id?: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    plan: Subscription_plansCreateNestedOneWithoutUser_subscriptionsInput
    payments?: PaymentsCreateNestedManyWithoutUser_subscriptionInput
  }

  export type User_subscriptionsUncheckedCreateWithoutUserInput = {
    id?: string
    plan_id: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentsUncheckedCreateNestedManyWithoutUser_subscriptionInput
  }

  export type User_subscriptionsCreateOrConnectWithoutUserInput = {
    where: User_subscriptionsWhereUniqueInput
    create: XOR<User_subscriptionsCreateWithoutUserInput, User_subscriptionsUncheckedCreateWithoutUserInput>
  }

  export type User_subscriptionsCreateManyUserInputEnvelope = {
    data: User_subscriptionsCreateManyUserInput | User_subscriptionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoviesCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyCreateNestedManyWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesUncheckedCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesUncheckedCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesCreateOrConnectWithoutUserInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
  }

  export type MoviesCreateManyUserInputEnvelope = {
    data: MoviesCreateManyUserInput | MoviesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoritesCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    movies: MoviesCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateWithoutUsersInput = {
    id?: string
    movie_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FavoritesCreateOrConnectWithoutUsersInput = {
    where: FavoritesWhereUniqueInput
    create: XOR<FavoritesCreateWithoutUsersInput, FavoritesUncheckedCreateWithoutUsersInput>
  }

  export type FavoritesCreateManyUsersInputEnvelope = {
    data: FavoritesCreateManyUsersInput | FavoritesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUsersInput = {
    id?: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    movies: MoviesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUsersInput = {
    id?: string
    movie_id: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput>
  }

  export type ReviewsCreateManyUsersInputEnvelope = {
    data: ReviewsCreateManyUsersInput | ReviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type Watch_historyCreateWithoutUsersInput = {
    id?: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
    movies: MoviesCreateNestedOneWithoutWatch_historyInput
  }

  export type Watch_historyUncheckedCreateWithoutUsersInput = {
    id?: string
    movie_id: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
  }

  export type Watch_historyCreateOrConnectWithoutUsersInput = {
    where: Watch_historyWhereUniqueInput
    create: XOR<Watch_historyCreateWithoutUsersInput, Watch_historyUncheckedCreateWithoutUsersInput>
  }

  export type Watch_historyCreateManyUsersInputEnvelope = {
    data: Watch_historyCreateManyUsersInput | Watch_historyCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ProfilesUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfilesWhereUniqueInput
    update: XOR<ProfilesUpdateWithoutUserInput, ProfilesUncheckedUpdateWithoutUserInput>
    create: XOR<ProfilesCreateWithoutUserInput, ProfilesUncheckedCreateWithoutUserInput>
  }

  export type ProfilesUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfilesWhereUniqueInput
    data: XOR<ProfilesUpdateWithoutUserInput, ProfilesUncheckedUpdateWithoutUserInput>
  }

  export type ProfilesUpdateManyWithWhereWithoutUserInput = {
    where: ProfilesScalarWhereInput
    data: XOR<ProfilesUpdateManyMutationInput, ProfilesUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfilesScalarWhereInput = {
    AND?: ProfilesScalarWhereInput | ProfilesScalarWhereInput[]
    OR?: ProfilesScalarWhereInput[]
    NOT?: ProfilesScalarWhereInput | ProfilesScalarWhereInput[]
    id?: StringFilter<"Profiles"> | string
    user_id?: StringFilter<"Profiles"> | string
    full_name?: StringFilter<"Profiles"> | string
    phone?: StringFilter<"Profiles"> | string
    country?: StringFilter<"Profiles"> | string
    created_at?: DateTimeFilter<"Profiles"> | Date | string
    updated_at?: DateTimeFilter<"Profiles"> | Date | string
    status?: EnumStatusFilter<"Profiles"> | $Enums.Status
  }

  export type User_subscriptionsUpsertWithWhereUniqueWithoutUserInput = {
    where: User_subscriptionsWhereUniqueInput
    update: XOR<User_subscriptionsUpdateWithoutUserInput, User_subscriptionsUncheckedUpdateWithoutUserInput>
    create: XOR<User_subscriptionsCreateWithoutUserInput, User_subscriptionsUncheckedCreateWithoutUserInput>
  }

  export type User_subscriptionsUpdateWithWhereUniqueWithoutUserInput = {
    where: User_subscriptionsWhereUniqueInput
    data: XOR<User_subscriptionsUpdateWithoutUserInput, User_subscriptionsUncheckedUpdateWithoutUserInput>
  }

  export type User_subscriptionsUpdateManyWithWhereWithoutUserInput = {
    where: User_subscriptionsScalarWhereInput
    data: XOR<User_subscriptionsUpdateManyMutationInput, User_subscriptionsUncheckedUpdateManyWithoutUserInput>
  }

  export type User_subscriptionsScalarWhereInput = {
    AND?: User_subscriptionsScalarWhereInput | User_subscriptionsScalarWhereInput[]
    OR?: User_subscriptionsScalarWhereInput[]
    NOT?: User_subscriptionsScalarWhereInput | User_subscriptionsScalarWhereInput[]
    id?: StringFilter<"User_subscriptions"> | string
    user_id?: StringFilter<"User_subscriptions"> | string
    plan_id?: StringFilter<"User_subscriptions"> | string
    start_date?: DateTimeFilter<"User_subscriptions"> | Date | string
    end_date?: DateTimeFilter<"User_subscriptions"> | Date | string
    status?: EnumSubsStatusFilter<"User_subscriptions"> | $Enums.SubsStatus
    auto_renew?: BoolFilter<"User_subscriptions"> | boolean
    created_at?: DateTimeFilter<"User_subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"User_subscriptions"> | Date | string
  }

  export type MoviesUpsertWithWhereUniqueWithoutUserInput = {
    where: MoviesWhereUniqueInput
    update: XOR<MoviesUpdateWithoutUserInput, MoviesUncheckedUpdateWithoutUserInput>
    create: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
  }

  export type MoviesUpdateWithWhereUniqueWithoutUserInput = {
    where: MoviesWhereUniqueInput
    data: XOR<MoviesUpdateWithoutUserInput, MoviesUncheckedUpdateWithoutUserInput>
  }

  export type MoviesUpdateManyWithWhereWithoutUserInput = {
    where: MoviesScalarWhereInput
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyWithoutUserInput>
  }

  export type MoviesScalarWhereInput = {
    AND?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    OR?: MoviesScalarWhereInput[]
    NOT?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    id?: StringFilter<"Movies"> | string
    title?: StringFilter<"Movies"> | string
    slug?: StringFilter<"Movies"> | string
    description?: StringFilter<"Movies"> | string
    release_year?: IntFilter<"Movies"> | number
    duration_minutes?: IntFilter<"Movies"> | number
    poster_url?: StringFilter<"Movies"> | string
    rating?: DecimalFilter<"Movies"> | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFilter<"Movies"> | $Enums.SubscriptionType
    view_count?: IntFilter<"Movies"> | number
    created_by?: StringFilter<"Movies"> | string
    created_at?: DateTimeFilter<"Movies"> | Date | string
    updated_at?: DateTimeFilter<"Movies"> | Date | string
    status?: EnumStatusFilter<"Movies"> | $Enums.Status
  }

  export type FavoritesUpsertWithWhereUniqueWithoutUsersInput = {
    where: FavoritesWhereUniqueInput
    update: XOR<FavoritesUpdateWithoutUsersInput, FavoritesUncheckedUpdateWithoutUsersInput>
    create: XOR<FavoritesCreateWithoutUsersInput, FavoritesUncheckedCreateWithoutUsersInput>
  }

  export type FavoritesUpdateWithWhereUniqueWithoutUsersInput = {
    where: FavoritesWhereUniqueInput
    data: XOR<FavoritesUpdateWithoutUsersInput, FavoritesUncheckedUpdateWithoutUsersInput>
  }

  export type FavoritesUpdateManyWithWhereWithoutUsersInput = {
    where: FavoritesScalarWhereInput
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyWithoutUsersInput>
  }

  export type FavoritesScalarWhereInput = {
    AND?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
    OR?: FavoritesScalarWhereInput[]
    NOT?: FavoritesScalarWhereInput | FavoritesScalarWhereInput[]
    id?: StringFilter<"Favorites"> | string
    user_id?: StringFilter<"Favorites"> | string
    movie_id?: StringFilter<"Favorites"> | string
    created_at?: DateTimeFilter<"Favorites"> | Date | string
    updated_at?: DateTimeFilter<"Favorites"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUsersInput, ReviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUsersInput, ReviewsUncheckedUpdateWithoutUsersInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUsersInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: StringFilter<"Reviews"> | string
    user_id?: StringFilter<"Reviews"> | string
    movie_id?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    created_at?: DateTimeFilter<"Reviews"> | Date | string
    updated_at?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type Watch_historyUpsertWithWhereUniqueWithoutUsersInput = {
    where: Watch_historyWhereUniqueInput
    update: XOR<Watch_historyUpdateWithoutUsersInput, Watch_historyUncheckedUpdateWithoutUsersInput>
    create: XOR<Watch_historyCreateWithoutUsersInput, Watch_historyUncheckedCreateWithoutUsersInput>
  }

  export type Watch_historyUpdateWithWhereUniqueWithoutUsersInput = {
    where: Watch_historyWhereUniqueInput
    data: XOR<Watch_historyUpdateWithoutUsersInput, Watch_historyUncheckedUpdateWithoutUsersInput>
  }

  export type Watch_historyUpdateManyWithWhereWithoutUsersInput = {
    where: Watch_historyScalarWhereInput
    data: XOR<Watch_historyUpdateManyMutationInput, Watch_historyUncheckedUpdateManyWithoutUsersInput>
  }

  export type Watch_historyScalarWhereInput = {
    AND?: Watch_historyScalarWhereInput | Watch_historyScalarWhereInput[]
    OR?: Watch_historyScalarWhereInput[]
    NOT?: Watch_historyScalarWhereInput | Watch_historyScalarWhereInput[]
    id?: StringFilter<"Watch_history"> | string
    user_id?: StringFilter<"Watch_history"> | string
    movie_id?: StringFilter<"Watch_history"> | string
    watched_duration?: IntFilter<"Watch_history"> | number
    watched_percentage?: DecimalFilter<"Watch_history"> | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFilter<"Watch_history"> | Date | string
  }

  export type UsersCreateWithoutProfilesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    user_subscriptions?: User_subscriptionsCreateNestedManyWithoutUserInput
    movies?: MoviesCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUsersInput
    reviews?: ReviewsCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutProfilesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    user_subscriptions?: User_subscriptionsUncheckedCreateNestedManyWithoutUserInput
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutProfilesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
  }

  export type UsersUpsertWithoutProfilesInput = {
    update: XOR<UsersUpdateWithoutProfilesInput, UsersUncheckedUpdateWithoutProfilesInput>
    create: XOR<UsersCreateWithoutProfilesInput, UsersUncheckedCreateWithoutProfilesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutProfilesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutProfilesInput, UsersUncheckedUpdateWithoutProfilesInput>
  }

  export type UsersUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user_subscriptions?: User_subscriptionsUpdateManyWithoutUserNestedInput
    movies?: MoviesUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user_subscriptions?: User_subscriptionsUncheckedUpdateManyWithoutUserNestedInput
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type User_subscriptionsCreateWithoutPlanInput = {
    id?: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutUser_subscriptionsInput
    payments?: PaymentsCreateNestedManyWithoutUser_subscriptionInput
  }

  export type User_subscriptionsUncheckedCreateWithoutPlanInput = {
    id?: string
    user_id: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentsUncheckedCreateNestedManyWithoutUser_subscriptionInput
  }

  export type User_subscriptionsCreateOrConnectWithoutPlanInput = {
    where: User_subscriptionsWhereUniqueInput
    create: XOR<User_subscriptionsCreateWithoutPlanInput, User_subscriptionsUncheckedCreateWithoutPlanInput>
  }

  export type User_subscriptionsCreateManyPlanInputEnvelope = {
    data: User_subscriptionsCreateManyPlanInput | User_subscriptionsCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type User_subscriptionsUpsertWithWhereUniqueWithoutPlanInput = {
    where: User_subscriptionsWhereUniqueInput
    update: XOR<User_subscriptionsUpdateWithoutPlanInput, User_subscriptionsUncheckedUpdateWithoutPlanInput>
    create: XOR<User_subscriptionsCreateWithoutPlanInput, User_subscriptionsUncheckedCreateWithoutPlanInput>
  }

  export type User_subscriptionsUpdateWithWhereUniqueWithoutPlanInput = {
    where: User_subscriptionsWhereUniqueInput
    data: XOR<User_subscriptionsUpdateWithoutPlanInput, User_subscriptionsUncheckedUpdateWithoutPlanInput>
  }

  export type User_subscriptionsUpdateManyWithWhereWithoutPlanInput = {
    where: User_subscriptionsScalarWhereInput
    data: XOR<User_subscriptionsUpdateManyMutationInput, User_subscriptionsUncheckedUpdateManyWithoutPlanInput>
  }

  export type UsersCreateWithoutUser_subscriptionsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesCreateNestedManyWithoutUserInput
    movies?: MoviesCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUsersInput
    reviews?: ReviewsCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUser_subscriptionsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesUncheckedCreateNestedManyWithoutUserInput
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUser_subscriptionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser_subscriptionsInput, UsersUncheckedCreateWithoutUser_subscriptionsInput>
  }

  export type Subscription_plansCreateWithoutUser_subscriptionsInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration_days: number
    features: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Subscription_plansUncheckedCreateWithoutUser_subscriptionsInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration_days: number
    features: JsonNullValueInput | InputJsonValue
    is_active?: boolean
    status?: $Enums.Status
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Subscription_plansCreateOrConnectWithoutUser_subscriptionsInput = {
    where: Subscription_plansWhereUniqueInput
    create: XOR<Subscription_plansCreateWithoutUser_subscriptionsInput, Subscription_plansUncheckedCreateWithoutUser_subscriptionsInput>
  }

  export type PaymentsCreateWithoutUser_subscriptionInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: $Enums.PaymentMethod
    payment_details: JsonNullValueInput | InputJsonValue
    status: $Enums.PaymentStatus
    external_transaction_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUncheckedCreateWithoutUser_subscriptionInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: $Enums.PaymentMethod
    payment_details: JsonNullValueInput | InputJsonValue
    status: $Enums.PaymentStatus
    external_transaction_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutUser_subscriptionInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutUser_subscriptionInput, PaymentsUncheckedCreateWithoutUser_subscriptionInput>
  }

  export type PaymentsCreateManyUser_subscriptionInputEnvelope = {
    data: PaymentsCreateManyUser_subscriptionInput | PaymentsCreateManyUser_subscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutUser_subscriptionsInput = {
    update: XOR<UsersUpdateWithoutUser_subscriptionsInput, UsersUncheckedUpdateWithoutUser_subscriptionsInput>
    create: XOR<UsersCreateWithoutUser_subscriptionsInput, UsersUncheckedCreateWithoutUser_subscriptionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUser_subscriptionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUser_subscriptionsInput, UsersUncheckedUpdateWithoutUser_subscriptionsInput>
  }

  export type UsersUpdateWithoutUser_subscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUpdateManyWithoutUserNestedInput
    movies?: MoviesUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUser_subscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUncheckedUpdateManyWithoutUserNestedInput
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type Subscription_plansUpsertWithoutUser_subscriptionsInput = {
    update: XOR<Subscription_plansUpdateWithoutUser_subscriptionsInput, Subscription_plansUncheckedUpdateWithoutUser_subscriptionsInput>
    create: XOR<Subscription_plansCreateWithoutUser_subscriptionsInput, Subscription_plansUncheckedCreateWithoutUser_subscriptionsInput>
    where?: Subscription_plansWhereInput
  }

  export type Subscription_plansUpdateToOneWithWhereWithoutUser_subscriptionsInput = {
    where?: Subscription_plansWhereInput
    data: XOR<Subscription_plansUpdateWithoutUser_subscriptionsInput, Subscription_plansUncheckedUpdateWithoutUser_subscriptionsInput>
  }

  export type Subscription_plansUpdateWithoutUser_subscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Subscription_plansUncheckedUpdateWithoutUser_subscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration_days?: IntFieldUpdateOperationsInput | number
    features?: JsonNullValueInput | InputJsonValue
    is_active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUpsertWithWhereUniqueWithoutUser_subscriptionInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutUser_subscriptionInput, PaymentsUncheckedUpdateWithoutUser_subscriptionInput>
    create: XOR<PaymentsCreateWithoutUser_subscriptionInput, PaymentsUncheckedCreateWithoutUser_subscriptionInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutUser_subscriptionInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutUser_subscriptionInput, PaymentsUncheckedUpdateWithoutUser_subscriptionInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutUser_subscriptionInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutUser_subscriptionInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    id?: StringFilter<"Payments"> | string
    user_subscription_id?: StringFilter<"Payments"> | string
    amount?: DecimalFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    payment_details?: JsonFilter<"Payments">
    status?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    external_transaction_id?: StringFilter<"Payments"> | string
    created_at?: DateTimeFilter<"Payments"> | Date | string
    updated_at?: DateTimeFilter<"Payments"> | Date | string
  }

  export type User_subscriptionsCreateWithoutPaymentsInput = {
    id?: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutUser_subscriptionsInput
    plan: Subscription_plansCreateNestedOneWithoutUser_subscriptionsInput
  }

  export type User_subscriptionsUncheckedCreateWithoutPaymentsInput = {
    id?: string
    user_id: string
    plan_id: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type User_subscriptionsCreateOrConnectWithoutPaymentsInput = {
    where: User_subscriptionsWhereUniqueInput
    create: XOR<User_subscriptionsCreateWithoutPaymentsInput, User_subscriptionsUncheckedCreateWithoutPaymentsInput>
  }

  export type User_subscriptionsUpsertWithoutPaymentsInput = {
    update: XOR<User_subscriptionsUpdateWithoutPaymentsInput, User_subscriptionsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<User_subscriptionsCreateWithoutPaymentsInput, User_subscriptionsUncheckedCreateWithoutPaymentsInput>
    where?: User_subscriptionsWhereInput
  }

  export type User_subscriptionsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: User_subscriptionsWhereInput
    data: XOR<User_subscriptionsUpdateWithoutPaymentsInput, User_subscriptionsUncheckedUpdateWithoutPaymentsInput>
  }

  export type User_subscriptionsUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUser_subscriptionsNestedInput
    plan?: Subscription_plansUpdateOneRequiredWithoutUser_subscriptionsNestedInput
  }

  export type User_subscriptionsUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Movie_categoriesCreateWithoutCategoriesInput = {
    id?: string
    movies: MoviesCreateNestedOneWithoutMovie_categoriesInput
  }

  export type Movie_categoriesUncheckedCreateWithoutCategoriesInput = {
    id?: string
    movie_id: string
  }

  export type Movie_categoriesCreateOrConnectWithoutCategoriesInput = {
    where: Movie_categoriesWhereUniqueInput
    create: XOR<Movie_categoriesCreateWithoutCategoriesInput, Movie_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type Movie_categoriesCreateManyCategoriesInputEnvelope = {
    data: Movie_categoriesCreateManyCategoriesInput | Movie_categoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type Movie_categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: Movie_categoriesWhereUniqueInput
    update: XOR<Movie_categoriesUpdateWithoutCategoriesInput, Movie_categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<Movie_categoriesCreateWithoutCategoriesInput, Movie_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type Movie_categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: Movie_categoriesWhereUniqueInput
    data: XOR<Movie_categoriesUpdateWithoutCategoriesInput, Movie_categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type Movie_categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: Movie_categoriesScalarWhereInput
    data: XOR<Movie_categoriesUpdateManyMutationInput, Movie_categoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type Movie_categoriesScalarWhereInput = {
    AND?: Movie_categoriesScalarWhereInput | Movie_categoriesScalarWhereInput[]
    OR?: Movie_categoriesScalarWhereInput[]
    NOT?: Movie_categoriesScalarWhereInput | Movie_categoriesScalarWhereInput[]
    id?: StringFilter<"Movie_categories"> | string
    movie_id?: StringFilter<"Movie_categories"> | string
    category_id?: StringFilter<"Movie_categories"> | string
  }

  export type Movie_categoriesCreateWithoutMoviesInput = {
    id?: string
    categories: CategoriesCreateNestedOneWithoutMovie_categoriesInput
  }

  export type Movie_categoriesUncheckedCreateWithoutMoviesInput = {
    id?: string
    category_id: string
  }

  export type Movie_categoriesCreateOrConnectWithoutMoviesInput = {
    where: Movie_categoriesWhereUniqueInput
    create: XOR<Movie_categoriesCreateWithoutMoviesInput, Movie_categoriesUncheckedCreateWithoutMoviesInput>
  }

  export type Movie_categoriesCreateManyMoviesInputEnvelope = {
    data: Movie_categoriesCreateManyMoviesInput | Movie_categoriesCreateManyMoviesInput[]
    skipDuplicates?: boolean
  }

  export type Movie_filesCreateWithoutMoviesInput = {
    id?: string
    file_url: string
    quality: $Enums.Quality
    language?: $Enums.Languages
    status?: $Enums.Status
  }

  export type Movie_filesUncheckedCreateWithoutMoviesInput = {
    id?: string
    file_url: string
    quality: $Enums.Quality
    language?: $Enums.Languages
    status?: $Enums.Status
  }

  export type Movie_filesCreateOrConnectWithoutMoviesInput = {
    where: Movie_filesWhereUniqueInput
    create: XOR<Movie_filesCreateWithoutMoviesInput, Movie_filesUncheckedCreateWithoutMoviesInput>
  }

  export type Movie_filesCreateManyMoviesInputEnvelope = {
    data: Movie_filesCreateManyMoviesInput | Movie_filesCreateManyMoviesInput[]
    skipDuplicates?: boolean
  }

  export type FavoritesCreateWithoutMoviesInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    users: UsersCreateNestedOneWithoutFavoritesInput
  }

  export type FavoritesUncheckedCreateWithoutMoviesInput = {
    id?: string
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FavoritesCreateOrConnectWithoutMoviesInput = {
    where: FavoritesWhereUniqueInput
    create: XOR<FavoritesCreateWithoutMoviesInput, FavoritesUncheckedCreateWithoutMoviesInput>
  }

  export type FavoritesCreateManyMoviesInputEnvelope = {
    data: FavoritesCreateManyMoviesInput | FavoritesCreateManyMoviesInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutMoviesInput = {
    id?: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    users: UsersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutMoviesInput = {
    id?: string
    user_id: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutMoviesInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutMoviesInput, ReviewsUncheckedCreateWithoutMoviesInput>
  }

  export type ReviewsCreateManyMoviesInputEnvelope = {
    data: ReviewsCreateManyMoviesInput | ReviewsCreateManyMoviesInput[]
    skipDuplicates?: boolean
  }

  export type Watch_historyCreateWithoutMoviesInput = {
    id?: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
    users: UsersCreateNestedOneWithoutWatch_historyInput
  }

  export type Watch_historyUncheckedCreateWithoutMoviesInput = {
    id?: string
    user_id: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
  }

  export type Watch_historyCreateOrConnectWithoutMoviesInput = {
    where: Watch_historyWhereUniqueInput
    create: XOR<Watch_historyCreateWithoutMoviesInput, Watch_historyUncheckedCreateWithoutMoviesInput>
  }

  export type Watch_historyCreateManyMoviesInputEnvelope = {
    data: Watch_historyCreateManyMoviesInput | Watch_historyCreateManyMoviesInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutMoviesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUsersInput
    reviews?: ReviewsCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutMoviesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesUncheckedCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutMoviesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMoviesInput, UsersUncheckedCreateWithoutMoviesInput>
  }

  export type Movie_categoriesUpsertWithWhereUniqueWithoutMoviesInput = {
    where: Movie_categoriesWhereUniqueInput
    update: XOR<Movie_categoriesUpdateWithoutMoviesInput, Movie_categoriesUncheckedUpdateWithoutMoviesInput>
    create: XOR<Movie_categoriesCreateWithoutMoviesInput, Movie_categoriesUncheckedCreateWithoutMoviesInput>
  }

  export type Movie_categoriesUpdateWithWhereUniqueWithoutMoviesInput = {
    where: Movie_categoriesWhereUniqueInput
    data: XOR<Movie_categoriesUpdateWithoutMoviesInput, Movie_categoriesUncheckedUpdateWithoutMoviesInput>
  }

  export type Movie_categoriesUpdateManyWithWhereWithoutMoviesInput = {
    where: Movie_categoriesScalarWhereInput
    data: XOR<Movie_categoriesUpdateManyMutationInput, Movie_categoriesUncheckedUpdateManyWithoutMoviesInput>
  }

  export type Movie_filesUpsertWithWhereUniqueWithoutMoviesInput = {
    where: Movie_filesWhereUniqueInput
    update: XOR<Movie_filesUpdateWithoutMoviesInput, Movie_filesUncheckedUpdateWithoutMoviesInput>
    create: XOR<Movie_filesCreateWithoutMoviesInput, Movie_filesUncheckedCreateWithoutMoviesInput>
  }

  export type Movie_filesUpdateWithWhereUniqueWithoutMoviesInput = {
    where: Movie_filesWhereUniqueInput
    data: XOR<Movie_filesUpdateWithoutMoviesInput, Movie_filesUncheckedUpdateWithoutMoviesInput>
  }

  export type Movie_filesUpdateManyWithWhereWithoutMoviesInput = {
    where: Movie_filesScalarWhereInput
    data: XOR<Movie_filesUpdateManyMutationInput, Movie_filesUncheckedUpdateManyWithoutMoviesInput>
  }

  export type Movie_filesScalarWhereInput = {
    AND?: Movie_filesScalarWhereInput | Movie_filesScalarWhereInput[]
    OR?: Movie_filesScalarWhereInput[]
    NOT?: Movie_filesScalarWhereInput | Movie_filesScalarWhereInput[]
    id?: StringFilter<"Movie_files"> | string
    movie_id?: StringFilter<"Movie_files"> | string
    file_url?: StringFilter<"Movie_files"> | string
    quality?: EnumQualityFilter<"Movie_files"> | $Enums.Quality
    language?: EnumLanguagesFilter<"Movie_files"> | $Enums.Languages
    status?: EnumStatusFilter<"Movie_files"> | $Enums.Status
  }

  export type FavoritesUpsertWithWhereUniqueWithoutMoviesInput = {
    where: FavoritesWhereUniqueInput
    update: XOR<FavoritesUpdateWithoutMoviesInput, FavoritesUncheckedUpdateWithoutMoviesInput>
    create: XOR<FavoritesCreateWithoutMoviesInput, FavoritesUncheckedCreateWithoutMoviesInput>
  }

  export type FavoritesUpdateWithWhereUniqueWithoutMoviesInput = {
    where: FavoritesWhereUniqueInput
    data: XOR<FavoritesUpdateWithoutMoviesInput, FavoritesUncheckedUpdateWithoutMoviesInput>
  }

  export type FavoritesUpdateManyWithWhereWithoutMoviesInput = {
    where: FavoritesScalarWhereInput
    data: XOR<FavoritesUpdateManyMutationInput, FavoritesUncheckedUpdateManyWithoutMoviesInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutMoviesInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutMoviesInput, ReviewsUncheckedUpdateWithoutMoviesInput>
    create: XOR<ReviewsCreateWithoutMoviesInput, ReviewsUncheckedCreateWithoutMoviesInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutMoviesInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutMoviesInput, ReviewsUncheckedUpdateWithoutMoviesInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutMoviesInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutMoviesInput>
  }

  export type Watch_historyUpsertWithWhereUniqueWithoutMoviesInput = {
    where: Watch_historyWhereUniqueInput
    update: XOR<Watch_historyUpdateWithoutMoviesInput, Watch_historyUncheckedUpdateWithoutMoviesInput>
    create: XOR<Watch_historyCreateWithoutMoviesInput, Watch_historyUncheckedCreateWithoutMoviesInput>
  }

  export type Watch_historyUpdateWithWhereUniqueWithoutMoviesInput = {
    where: Watch_historyWhereUniqueInput
    data: XOR<Watch_historyUpdateWithoutMoviesInput, Watch_historyUncheckedUpdateWithoutMoviesInput>
  }

  export type Watch_historyUpdateManyWithWhereWithoutMoviesInput = {
    where: Watch_historyScalarWhereInput
    data: XOR<Watch_historyUpdateManyMutationInput, Watch_historyUncheckedUpdateManyWithoutMoviesInput>
  }

  export type UsersUpsertWithoutMoviesInput = {
    update: XOR<UsersUpdateWithoutMoviesInput, UsersUncheckedUpdateWithoutMoviesInput>
    create: XOR<UsersCreateWithoutMoviesInput, UsersUncheckedCreateWithoutMoviesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMoviesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMoviesInput, UsersUncheckedUpdateWithoutMoviesInput>
  }

  export type UsersUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUncheckedUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type MoviesCreateWithoutMovie_categoriesInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_files?: Movie_filesCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyCreateNestedManyWithoutMoviesInput
    user: UsersCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutMovie_categoriesInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_files?: Movie_filesUncheckedCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesCreateOrConnectWithoutMovie_categoriesInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutMovie_categoriesInput, MoviesUncheckedCreateWithoutMovie_categoriesInput>
  }

  export type CategoriesCreateWithoutMovie_categoriesInput = {
    id?: string
    name: string
    slug: string
    description: string
    status?: $Enums.Status
  }

  export type CategoriesUncheckedCreateWithoutMovie_categoriesInput = {
    id?: string
    name: string
    slug: string
    description: string
    status?: $Enums.Status
  }

  export type CategoriesCreateOrConnectWithoutMovie_categoriesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutMovie_categoriesInput, CategoriesUncheckedCreateWithoutMovie_categoriesInput>
  }

  export type MoviesUpsertWithoutMovie_categoriesInput = {
    update: XOR<MoviesUpdateWithoutMovie_categoriesInput, MoviesUncheckedUpdateWithoutMovie_categoriesInput>
    create: XOR<MoviesCreateWithoutMovie_categoriesInput, MoviesUncheckedCreateWithoutMovie_categoriesInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutMovie_categoriesInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutMovie_categoriesInput, MoviesUncheckedUpdateWithoutMovie_categoriesInput>
  }

  export type MoviesUpdateWithoutMovie_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_files?: Movie_filesUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUpdateManyWithoutMoviesNestedInput
    user?: UsersUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutMovie_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_files?: Movie_filesUncheckedUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type CategoriesUpsertWithoutMovie_categoriesInput = {
    update: XOR<CategoriesUpdateWithoutMovie_categoriesInput, CategoriesUncheckedUpdateWithoutMovie_categoriesInput>
    create: XOR<CategoriesCreateWithoutMovie_categoriesInput, CategoriesUncheckedCreateWithoutMovie_categoriesInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutMovie_categoriesInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutMovie_categoriesInput, CategoriesUncheckedUpdateWithoutMovie_categoriesInput>
  }

  export type CategoriesUpdateWithoutMovie_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CategoriesUncheckedUpdateWithoutMovie_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type MoviesCreateWithoutMovie_filesInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyCreateNestedManyWithoutMoviesInput
    user: UsersCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutMovie_filesInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesUncheckedCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesCreateOrConnectWithoutMovie_filesInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutMovie_filesInput, MoviesUncheckedCreateWithoutMovie_filesInput>
  }

  export type MoviesUpsertWithoutMovie_filesInput = {
    update: XOR<MoviesUpdateWithoutMovie_filesInput, MoviesUncheckedUpdateWithoutMovie_filesInput>
    create: XOR<MoviesCreateWithoutMovie_filesInput, MoviesUncheckedCreateWithoutMovie_filesInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutMovie_filesInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutMovie_filesInput, MoviesUncheckedUpdateWithoutMovie_filesInput>
  }

  export type MoviesUpdateWithoutMovie_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUpdateManyWithoutMoviesNestedInput
    user?: UsersUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutMovie_filesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUncheckedUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type UsersCreateWithoutFavoritesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsCreateNestedManyWithoutUserInput
    movies?: MoviesCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutFavoritesInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesUncheckedCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsUncheckedCreateNestedManyWithoutUserInput
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutFavoritesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFavoritesInput, UsersUncheckedCreateWithoutFavoritesInput>
  }

  export type MoviesCreateWithoutFavoritesInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyCreateNestedManyWithoutMoviesInput
    user: UsersCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesUncheckedCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesUncheckedCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesCreateOrConnectWithoutFavoritesInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutFavoritesInput, MoviesUncheckedCreateWithoutFavoritesInput>
  }

  export type UsersUpsertWithoutFavoritesInput = {
    update: XOR<UsersUpdateWithoutFavoritesInput, UsersUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UsersCreateWithoutFavoritesInput, UsersUncheckedCreateWithoutFavoritesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFavoritesInput, UsersUncheckedUpdateWithoutFavoritesInput>
  }

  export type UsersUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUpdateManyWithoutUserNestedInput
    movies?: MoviesUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUncheckedUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUncheckedUpdateManyWithoutUserNestedInput
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type MoviesUpsertWithoutFavoritesInput = {
    update: XOR<MoviesUpdateWithoutFavoritesInput, MoviesUncheckedUpdateWithoutFavoritesInput>
    create: XOR<MoviesCreateWithoutFavoritesInput, MoviesUncheckedCreateWithoutFavoritesInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutFavoritesInput, MoviesUncheckedUpdateWithoutFavoritesInput>
  }

  export type MoviesUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUpdateManyWithoutMoviesNestedInput
    user?: UsersUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUncheckedUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUncheckedUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type UsersCreateWithoutReviewsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsCreateNestedManyWithoutUserInput
    movies?: MoviesCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesUncheckedCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsUncheckedCreateNestedManyWithoutUserInput
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUsersInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type MoviesCreateWithoutReviewsInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyCreateNestedManyWithoutMoviesInput
    user: UsersCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesUncheckedCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesUncheckedCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutMoviesInput
    watch_history?: Watch_historyUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesCreateOrConnectWithoutReviewsInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutReviewsInput, MoviesUncheckedCreateWithoutReviewsInput>
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUpdateManyWithoutUserNestedInput
    movies?: MoviesUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUncheckedUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUncheckedUpdateManyWithoutUserNestedInput
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUsersNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type MoviesUpsertWithoutReviewsInput = {
    update: XOR<MoviesUpdateWithoutReviewsInput, MoviesUncheckedUpdateWithoutReviewsInput>
    create: XOR<MoviesCreateWithoutReviewsInput, MoviesUncheckedCreateWithoutReviewsInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutReviewsInput, MoviesUncheckedUpdateWithoutReviewsInput>
  }

  export type MoviesUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUpdateManyWithoutMoviesNestedInput
    user?: UsersUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUncheckedUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUncheckedUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type UsersCreateWithoutWatch_historyInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsCreateNestedManyWithoutUserInput
    movies?: MoviesCreateNestedManyWithoutUserInput
    favorites?: FavoritesCreateNestedManyWithoutUsersInput
    reviews?: ReviewsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutWatch_historyInput = {
    id?: string
    username: string
    email: string
    password_hash: string
    role?: $Enums.Roles
    avatar_url: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    profiles?: ProfilesUncheckedCreateNestedManyWithoutUserInput
    user_subscriptions?: User_subscriptionsUncheckedCreateNestedManyWithoutUserInput
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutUsersInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutWatch_historyInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWatch_historyInput, UsersUncheckedCreateWithoutWatch_historyInput>
  }

  export type MoviesCreateWithoutWatch_historyInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsCreateNestedManyWithoutMoviesInput
    user: UsersCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutWatch_historyInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    movie_categories?: Movie_categoriesUncheckedCreateNestedManyWithoutMoviesInput
    movie_files?: Movie_filesUncheckedCreateNestedManyWithoutMoviesInput
    favorites?: FavoritesUncheckedCreateNestedManyWithoutMoviesInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesCreateOrConnectWithoutWatch_historyInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutWatch_historyInput, MoviesUncheckedCreateWithoutWatch_historyInput>
  }

  export type UsersUpsertWithoutWatch_historyInput = {
    update: XOR<UsersUpdateWithoutWatch_historyInput, UsersUncheckedUpdateWithoutWatch_historyInput>
    create: XOR<UsersCreateWithoutWatch_historyInput, UsersUncheckedCreateWithoutWatch_historyInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWatch_historyInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWatch_historyInput, UsersUncheckedUpdateWithoutWatch_historyInput>
  }

  export type UsersUpdateWithoutWatch_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUpdateManyWithoutUserNestedInput
    movies?: MoviesUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutWatch_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    avatar_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    profiles?: ProfilesUncheckedUpdateManyWithoutUserNestedInput
    user_subscriptions?: User_subscriptionsUncheckedUpdateManyWithoutUserNestedInput
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type MoviesUpsertWithoutWatch_historyInput = {
    update: XOR<MoviesUpdateWithoutWatch_historyInput, MoviesUncheckedUpdateWithoutWatch_historyInput>
    create: XOR<MoviesCreateWithoutWatch_historyInput, MoviesUncheckedCreateWithoutWatch_historyInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutWatch_historyInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutWatch_historyInput, MoviesUncheckedUpdateWithoutWatch_historyInput>
  }

  export type MoviesUpdateWithoutWatch_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUpdateManyWithoutMoviesNestedInput
    user?: UsersUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutWatch_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUncheckedUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUncheckedUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type ProfilesCreateManyUserInput = {
    id?: string
    full_name: string
    phone: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type User_subscriptionsCreateManyUserInput = {
    id?: string
    plan_id: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MoviesCreateManyUserInput = {
    id?: string
    title: string
    slug: string
    description: string
    release_year: number
    duration_minutes: number
    poster_url: string
    rating: Decimal | DecimalJsLike | number | string
    subscription_type?: $Enums.SubscriptionType
    view_count?: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type FavoritesCreateManyUsersInput = {
    id?: string
    movie_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewsCreateManyUsersInput = {
    id?: string
    movie_id: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Watch_historyCreateManyUsersInput = {
    id?: string
    movie_id: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
  }

  export type ProfilesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProfilesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProfilesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type User_subscriptionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: Subscription_plansUpdateOneRequiredWithoutUser_subscriptionsNestedInput
    payments?: PaymentsUpdateManyWithoutUser_subscriptionNestedInput
  }

  export type User_subscriptionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateManyWithoutUser_subscriptionNestedInput
  }

  export type User_subscriptionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    movie_categories?: Movie_categoriesUncheckedUpdateManyWithoutMoviesNestedInput
    movie_files?: Movie_filesUncheckedUpdateManyWithoutMoviesNestedInput
    favorites?: FavoritesUncheckedUpdateManyWithoutMoviesNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutMoviesNestedInput
    watch_history?: Watch_historyUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    release_year?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    poster_url?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subscription_type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    view_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type FavoritesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Watch_historyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUpdateOneRequiredWithoutWatch_historyNestedInput
  }

  export type Watch_historyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Watch_historyUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_subscriptionsCreateManyPlanInput = {
    id?: string
    user_id: string
    start_date?: Date | string
    end_date: Date | string
    status?: $Enums.SubsStatus
    auto_renew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type User_subscriptionsUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUser_subscriptionsNestedInput
    payments?: PaymentsUpdateManyWithoutUser_subscriptionNestedInput
  }

  export type User_subscriptionsUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateManyWithoutUser_subscriptionNestedInput
  }

  export type User_subscriptionsUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSubsStatusFieldUpdateOperationsInput | $Enums.SubsStatus
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyUser_subscriptionInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: $Enums.PaymentMethod
    payment_details: JsonNullValueInput | InputJsonValue
    status: $Enums.PaymentStatus
    external_transaction_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentsUpdateWithoutUser_subscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_details?: JsonNullValueInput | InputJsonValue
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    external_transaction_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateWithoutUser_subscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_details?: JsonNullValueInput | InputJsonValue
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    external_transaction_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutUser_subscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_details?: JsonNullValueInput | InputJsonValue
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    external_transaction_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Movie_categoriesCreateManyCategoriesInput = {
    id?: string
    movie_id: string
  }

  export type Movie_categoriesUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUpdateOneRequiredWithoutMovie_categoriesNestedInput
  }

  export type Movie_categoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
  }

  export type Movie_categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
  }

  export type Movie_categoriesCreateManyMoviesInput = {
    id?: string
    category_id: string
  }

  export type Movie_filesCreateManyMoviesInput = {
    id?: string
    file_url: string
    quality: $Enums.Quality
    language?: $Enums.Languages
    status?: $Enums.Status
  }

  export type FavoritesCreateManyMoviesInput = {
    id?: string
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewsCreateManyMoviesInput = {
    id?: string
    user_id: string
    rating: number
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Watch_historyCreateManyMoviesInput = {
    id?: string
    user_id: string
    watched_duration: number
    watched_percentage: Decimal | DecimalJsLike | number | string
    last_watched?: Date | string
  }

  export type Movie_categoriesUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categories?: CategoriesUpdateOneRequiredWithoutMovie_categoriesNestedInput
  }

  export type Movie_categoriesUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type Movie_categoriesUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type Movie_filesUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    language?: EnumLanguagesFieldUpdateOperationsInput | $Enums.Languages
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Movie_filesUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    language?: EnumLanguagesFieldUpdateOperationsInput | $Enums.Languages
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Movie_filesUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    quality?: EnumQualityFieldUpdateOperationsInput | $Enums.Quality
    language?: EnumLanguagesFieldUpdateOperationsInput | $Enums.Languages
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type FavoritesUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoritesUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritesUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Watch_historyUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutWatch_historyNestedInput
  }

  export type Watch_historyUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Watch_historyUncheckedUpdateManyWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    watched_duration?: IntFieldUpdateOperationsInput | number
    watched_percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_watched?: DateTimeFieldUpdateOperationsInput | Date | string
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