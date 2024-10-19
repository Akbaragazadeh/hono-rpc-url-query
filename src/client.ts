import { hc } from "hono/client";
import type { AppType } from "./";

const client = hc<AppType>("http://localhost:3000/");

console.log("$url():", client.$url({ query: { name: "Alex" } }));

/* Output:

  $url(): URL {
    href: "http://localhost:3000/",
    origin: "http://localhost:3000",
    protocol: "http:",
    username: "",
    password: "",
    host: "localhost:3000",
    hostname: "localhost",
    port: "3000",
    pathname: "/",
    hash: "",
    search: "",
    searchParams: URLSearchParams {},
    toJSON: [Function: toJSON],
    toString: [Function: toString],
  }
*/
