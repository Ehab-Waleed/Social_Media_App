import type { NextFunction, Request, Response } from "express";
import { keyof, ZodType } from "zod";
import AppError from "./globalErrHandler.middleware";

type reqType = keyof Request;
type schemaType = Partial<Record<reqType, ZodType>>;

export const validation = (schema: schemaType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    let errorDetails = [];
    for (const key of Object.keys(schema) as reqType[]) {
      if (!schema[key]) continue;

      const result = await schema[key].safeParseAsync(req[key]);

      if (!result.success) {
        errorDetails.push(result?.error?.message);
      }
    }
    if (errorDetails?.length) {
      throw new AppError(JSON.parse(errorDetails as any));
    }
    next();
  };
};
