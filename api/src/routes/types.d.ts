import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import {
    FastifyInstance,
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    FastifyBaseLogger,
} from 'fastify';

export type FastifyTypebox = FastifyInstance<
    RawServerDefault,
    RawRequestDefaultExpression<RawServerDefault>,
    RawReplyDefaultExpression<RawServerDefault>,
    FastifyBaseLogger,
    TypeBoxTypeProvider
>;
