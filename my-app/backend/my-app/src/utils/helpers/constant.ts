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
    LENGTH_REQUIRED: 411,  //
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    SERVICE_UNAVAILABLE: 503,
    HTTP_VERSION_NOT_SUPPORTED: 505,
  },
  STATUS_NAMES: {
    NOT_FOUND: 'Not Found!',
    BAD_REQUEST: 'Bad Request!',
    ALREADY_EXISTS: 'EmailId Already Exists!',
    UNAUTHORIZED: 'Un-Authorized Request!',
    USER_NOT_ALLOWED: 'User Not Accessible!',
    USER_LIMIT_NOT_EXIST: 'Create User limit Exceed!',
    TOKEN_NOT_FOUND: 'Token Not Found!',
    TOKEN_EXPIRED: 'Session Timedout!',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    SUCCESS:'Success!'
  },
  ERROR: {
    NOT_FOUND_ERROR_MESSAGE:'The requested URL was not found on this server.'
  }
};
