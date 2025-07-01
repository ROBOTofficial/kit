import { Hono } from 'hono';
import { honoHandler } from '../build/handler.js';
import { serve } from '@hono/node-server';

/** @type {Hono<{ Bindings: import('@hono/node-server').HttpBindings }>} */
const app = new Hono();

app.use(...honoHandler());

serve(
	{
		fetch: app.fetch,
		port: 3000
	},
	(info) => {
		console.log(info.port);
	}
);
