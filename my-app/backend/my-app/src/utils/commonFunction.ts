import { CONSTANTS } from './helpers/constant.ts';
import { z } from '@hono/zod-openapi';

export const internalServerErrorResponse = (err) => {
  return ({
    status: CONSTANTS.STATUS_NAMES.INTERNAL_SERVER_ERROR,
    statusCode: CONSTANTS.STATUS_CODES.INTERNAL_SERVER_ERROR,
    details: err.message,
  });
};

export const badRequestResponse = (err = CONSTANTS.STATUS_NAMES.BAD_REQUEST) => {
  return ({
    status: CONSTANTS.STATUS_NAMES.BAD_REQUEST,
    statusCode: CONSTANTS.STATUS_CODES.BAD_REQUEST,
    details: err,
  });
};

export const notFoundResponse = (err=CONSTANTS.ERROR.NOT_FOUND_ERROR_MESSAGE) => {
  return ({
    status: CONSTANTS.STATUS_NAMES.NOT_FOUND,
    statusCode: CONSTANTS.STATUS_CODES.NOT_FOUND,
    details: err
  });
};

export const successResponse = (data:object) => {
  return ({
    status: CONSTANTS.STATUS_NAMES.SUCCESS,
    statusCode: CONSTANTS.STATUS_CODES.OK,
    data: data
  })
}

export const unAuthorizedResponse = (c, err = CONSTANTS.STATUS_NAMES.UNAUTHORIZED) => {
  return c.json({
    status: CONSTANTS.STATUS_NAMES.UNAUTHORIZED,
    statusCode: CONSTANTS.STATUS_CODES.UNAUTHORIZED,
    details: err
  }) 
}

export const tokenNotFoundResponse = (c, err = CONSTANTS.STATUS_NAMES.TOKEN_NOT_FOUND) => {
  return c.json({
    status: CONSTANTS.STATUS_NAMES.UNAUTHORIZED,
    statusCode: CONSTANTS.STATUS_CODES.UNAUTHORIZED,
    details: err
  }) 
}

export const tokenExpiryResponse = (c, err = CONSTANTS.STATUS_NAMES.TOKEN_EXPIRED) => {
  return c.json({
    status: CONSTANTS.STATUS_NAMES.TOKEN_EXPIRED,
    statusCode: CONSTANTS.STATUS_CODES.FORBIDDEN,
    details: err
  }) 
}

 export const openAPIJsonContent = <T extends z.ZodType,>(schema: T, description: string) => {
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
};

export const openAPICreateMessageObjectSchema = (exampleMessage: string = "Hello World") => {
  return z.object({
    message: z.string(),
  }).openapi({
    example: {
      message: exampleMessage,
    },
  });
};

export const jsonContentRequired = <T extends z.ZodType,>(schema: T, description: string,) => {
  return {
    ...openAPIJsonContent(schema, description),
    required: true,
  };
};