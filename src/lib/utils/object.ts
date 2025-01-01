/**
 * 从对象中提取指定键的值
 * @param source - 源对象
 * @param keys - 需要提取的键数组
 * @returns 提取的键值对对象
 */
export const pickKeys = <T extends Record<string, unknown>, K extends keyof T>(
  source: T,
  keys: K[]
): Pick<T, K> => {
  return keys.reduce((acc, key) => {
    acc[key] = source[key];
    return acc;
  }, {} as Pick<T, K>);
}; 