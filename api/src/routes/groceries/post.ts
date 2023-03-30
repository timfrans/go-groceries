import { Type } from '@sinclair/typebox';
import { FastifyTypebox } from '../types';

const bodySchema = Type.Object({
    name: Type.String(),
});

async function createGroceries(fastify: FastifyTypebox) {
    fastify.post('/', { schema: { body: bodySchema } }, async (req, res) => {
        const { insertedId } = await req.db
            .collection('groceries')
            .insertOne(req.body);

        return res
            .status(200)
            .send({ ...req.body, _id: insertedId.toString() });
    });
}

export default createGroceries;
