import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { RequestHandler } from "express";
import { HttpException } from "@exceptions/HttpException";

function validationMiddleware(
  type: any,
  value: string | "body" | "query" | "params" = "body",
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true,
): RequestHandler {
  return async (req, _res, next) => {
    const errors = await validate(plainToInstance(type, req[value]), { skipMissingProperties, whitelist, forbidNonWhitelisted });

    if (errors.length > 0) {
      const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(", ");
      next(new HttpException(400, message));
    } else next();
  };
}

export default validationMiddleware;
