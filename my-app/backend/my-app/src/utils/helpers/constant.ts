export const CONSTANTS = {
  STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    REDIRECT: 302,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    INVALID_DATA:422
  },
  STATUS_NAMES: {
    NOT_FOUND: 'Not Found!',
    BAD_REQUEST: 'Bad Request!',
    UNAUTHORIZED: 'Un-Authorized Request!',
    TOKEN_NOT_FOUND: 'Token Not Found!',
    TOKEN_EXPIRED: 'Session Timedout!',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    SUCCESS:'Success!'
  },
  ERROR: {
    NOT_FOUND_ERROR_MESSAGE:'The requested URL was not found on this server.',
    INVALID_REQUEST_DATA:"Invalid request data"
  }
};
