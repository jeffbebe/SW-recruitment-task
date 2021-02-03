/* import { promisify } from "util";
import { createClient, RedisClient } from "redis";

export class CacheClient {
  redisClient;
  constructor() {
    this.redisClient = createClient({
      url: process.env.REDIS_URL,
    });
  }
 

  
  async get(key: string) {
    const fn = promisify(this.redisClient.get);

    return fn(key);
  }
  async set(key: string, value: string) {
    const fn = promisify(this.redisClient.set);
    return fn(key, value);
  }
  async keys(pattern: string) {
    return promisify(this.redisClient.keys);
  }
}
 */
