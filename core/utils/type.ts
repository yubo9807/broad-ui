
/**
 * 将类型改为可选（深度）
 */
export type OptionalDeep<T extends Record<string|symbol, any>> = {
  [K in keyof T]?: OptionalDeep<T[K]>
}

/**
 * 将可选属性转为必填属性
 */
export type RequiredType<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>

/**
 * 异步函数
 */
export type PromiseFn = (...args: any[]) => Promise<any>
