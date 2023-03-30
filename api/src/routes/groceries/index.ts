import { FastifyPluginAsync } from 'fastify';

import registerCreateGroceries from './post';

const groceriesPlugin: FastifyPluginAsync = async (fastify) => {
    registerCreateGroceries(fastify);
};

export default groceriesPlugin;
