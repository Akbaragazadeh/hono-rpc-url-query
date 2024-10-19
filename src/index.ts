import { vValidator } from "@hono/valibot-validator";
import { Hono } from "hono";
import * as v from "valibot";

const app = new Hono();

app.get("/", vValidator("query", v.object({ name: v.string() })), (c) => {
	const { name } = c.req.valid("query");
	return c.text(`Hello ${name}!`);
});

export type AppType = typeof app;

export default app;
