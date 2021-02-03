export const getCache = async (key: string) => {
  return global.cacheClient.get(key);
};

export const putCache = async (key: string, value: string) => {
  await global.cacheClient.set(key, value, { EX: 60 * 60 * 24 });
};
