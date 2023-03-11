import * as redis from 'redis';

export default class RedisClient {
    private static redisClient: redis.RedisClientType | RedisClient;
    private constructor() {
        RedisClient.redisClient = redis.createClient();

        console.log('Redis Client Started!')
    }

    public static getClient(): RedisClient{
        if(!this.redisClient){
            this.redisClient = new this();
        }

        return this.redisClient;
    }
}

