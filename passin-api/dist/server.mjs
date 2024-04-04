import {
  errorHandler
} from "./chunk-DUV3BU4U.mjs";
import {
  checkIn
} from "./chunk-DJJN76QW.mjs";
import {
  createEvent
} from "./chunk-GKVLTBJC.mjs";
import "./chunk-6MXZSHAJ.mjs";
import {
  getAttendeeBadge
} from "./chunk-2XCSQEKS.mjs";
import {
  getEventAttendees
} from "./chunk-TXHH3V5T.mjs";
import {
  getEvent
} from "./chunk-SMZ2L55E.mjs";
import {
  registerForEvent
} from "./chunk-7MB46SVP.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
  // origin: 'http://meufrontend.com',
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
