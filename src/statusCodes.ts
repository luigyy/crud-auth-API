const codeFor = {
  MISSING_DATA: {
    code: 401,
    message: "Missing data! Make sure all fields are given",
  },
  EMAIL_UNAVAILABLE: { code: 401, message: "Email is already taken" },
  INVALID_PASSWORD: { code: 401, message: "Invalid password" },
  INVALID_EMAIL: { code: 401, message: "Email is not linked to any account" },
  INVALID_ID: { code: 401, message: "Id is not linked to any user" },
  SUCCESS: { code: 200, message: "Success" },
  UPDATE_SUCCESS: { code: 200, message: "Successfully updated" },
  DELETE_SUCCESS: { code: 200, message: "Successfully deleted" },
  SERVER_ERROR: { code: 503, message: "Server error" },
  MISSING_TOKEN: {
    code: 401,
    message: "Authentication token not found on auth header",
  },
  INVALID_TOKEN: { code: 401, message: "Invalid authentication token" },
  UNAUTHORIZED: { code: 403, message: "Service not available for your role" }, //user does not have required role
};

export default codeFor;
