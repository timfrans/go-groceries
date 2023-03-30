import { FastifyPluginAsync } from 'fastify';
import groceriesPlugin from './groceries';

const routesPlugin: FastifyPluginAsync = async (fastify) => {
    fastify.register(groceriesPlugin, { prefix: '/groceries' });
};

export default routesPlugin;
