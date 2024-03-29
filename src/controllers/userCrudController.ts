//TODO: for request missing data, send usage in response
import ReqHandler from "../types/ReqHandler";
import ResponseInterface from "../interfaces/ResponseInterface";
// import UserInterface from "../interfaces/UserInterface";
import codes from "../statusCodes";
import HttpError from "../exceptions/HttpException";
import UserSchema from "../models/UserModel";
import logger from "../config/logging";

const {
  MISSING_DATA,
  //   EMAIL_UNAVAILABLE,
  //   INVALID_PASSWORD,
  //   INVALID_EMAIL,
  DELETE_SUCCESS,
  UPDATE_SUCCESS,
  SUCCESS,
  SERVER_ERROR,
  INVALID_ID,
} = codes;
//
//
export const readUser: ReqHandler = async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const fieldsRequired = ["id"];
    return next(new HttpError(MISSING_DATA, fieldsRequired));
  }

  try {
    const user = await UserSchema.findOne({ _id: id });
    if (!user) {
      return next(new HttpError(INVALID_ID));
    }
    //user found, respond with success
    const response: ResponseInterface = {
      error: false,
      statusCode: SUCCESS.code,
      message: SUCCESS.message,
      //@ts-ignore
      data: { userData: user },
    };
    return res.status(SUCCESS.code).json(response);
  } catch (err) {
    logger.error(err.message);
    return next(new HttpError(SERVER_ERROR));
  }
};
//
//
export const updateUser: ReqHandler = async (req, res, next) => {
  const id = req.params.id;
  const { email, name, lastName } = req.body;
  //
  //check if id provide
  if (!id) {
    const fieldsRequired = ["id"];
    return next(new HttpError(MISSING_DATA, fieldsRequired));
  }
  //check if all data is provided
  if (!(email && name && lastName)) {
    const fieldsRequired = ["email", "name", "lastName"];
    return next(new HttpError(MISSING_DATA, fieldsRequired));
  }
  //all data provided
  const updateFields = {
    name,
    email,
    lastName,
  };

  try {
    const result = await UserSchema.updateOne({ _id: id }, updateFields);
    if (result.n === 0) {
      return next(new HttpError(INVALID_ID));
    }
    const response: ResponseInterface = {
      error: false,
      statusCode: UPDATE_SUCCESS.code,
      message: UPDATE_SUCCESS.message,
    };
    res.status(UPDATE_SUCCESS.code).json(response);
  } catch (err) {
    logger.error(err.message);
    return next(new HttpError(SERVER_ERROR));
  }
};
//
//
export const deleteUser: ReqHandler = async (req, res, next) => {
  const id = req.params.id;

  //check if id is provided
  if (!id) {
    const fieldsRequired = ["id"];
    return next(new HttpError(MISSING_DATA, fieldsRequired));
  }
  //id provided, delete by id
  try {
    const result = await UserSchema.deleteOne({ _id: id });
    if (result.n === 0) {
      return next(new HttpError(INVALID_ID));
    }
    const response: ResponseInterface = {
      error: false,
      statusCode: DELETE_SUCCESS.code,
      message: DELETE_SUCCESS.message,
    };
    res.status(DELETE_SUCCESS.code).json(response);
  } catch (err) {}
};
