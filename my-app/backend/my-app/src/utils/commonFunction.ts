import { CONSTANTS } from './helpers/constant.ts';

export const internalServerErrorResponse = (err, c) => {
  console.error(`Error occurred on ${c.req.method} ${c.req.url}:`, err.stack);
  return c.json({
    status: CONSTANTS.STATUS_NAMES.INTERNAL_SERVER_ERROR,
    statusCode: CONSTANTS.STATUS_CODES.INTERNAL_SERVER_ERROR,
    details: err.message,
  });
};

export const badRequestResponse = (
  err = CONSTANTS.STATUS_NAMES.BAD_REQUEST,
  c,
) => {
  return c.json({
    status: CONSTANTS.STATUS_NAMES.BAD_REQUEST,
    statusCode: CONSTANTS.STATUS_CODES.BAD_REQUEST,
    details: err,
  });
};

export const notFoundResponse = (err = CONSTANTS.STATUS_NAMES.NOT_FOUND, c) => {
  return c.json({
    status: CONSTANTS.STATUS_NAMES.NOT_FOUND,
    statusCode: CONSTANTS.STATUS_CODES.NOT_FOUND,
    details: err,
  });
};

export const successResponse = (c) => {
  return c.json({
    status: CONSTANTS.STATUS_NAMES.SUCCESS,
    statusCode: CONSTANTS.STATUS_CODES.OK,
    details: c.res
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

