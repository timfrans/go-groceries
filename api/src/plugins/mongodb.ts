import fastifyMongodb, { FastifyMongoObject } from '@fastify/mongodb';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

const URL = 'mongodb://0.0.0.0:27017';
const DB_NAME = 'go-groceries';

const mongodb = fp(async (fastify: FastifyInstance) => {
    await fastify.register(fastifyMongodb, {
        forceClose: true,
        url: URL,
        database: DB_NAME,
    });

    fastify.decorateRequest('db', null);
    fastify.addHook('preHandler', function addDbHook(req, _res, done) {
        req.db = this.mongo.db!;
        done();
    });
});

declare module 'fastify' {
    interface FastifyRequest {
        db: Exclude<FastifyMongoObject['db'], undefined>;
    }
}

export default mongodb;
