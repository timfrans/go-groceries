import Fastify from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import mongodb from './plugins/mongodb';
import routesPlugin from './routes';

const fastify = Fastify({
    logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

fastify.register(mongodb);

fastify.register(routesPlugin, { prefix: '/api' });

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    fastify.log.info(`Server is now listening on ${address}`);
});
