import Http from "@/Services/HttpService";
import toast from "react-hot-toast";
import Router from "next/router";

import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNOUT_USER,
} from "./userTypes";

export const signinUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const singinUserSuccess = (users) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: users,
  };
};

export const singinUserFailure = (error) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
};

export const signupUserRequest = () => {
  return {
    type: SIGNUP_USER_REQUEST,
  };
};

export const singupUserSuccess = (users) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: users,
  };
};

export const singupUserFailure = (error) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};

export const userSignin = (data) => (dispatch) => {
  dispatch(signinUserRequest());
  Http
    .post("/user/signin", data)
    .then(({ data }) => {
      toast.success(`${data.name} عزیز؛ خوش آمدی`);
      Router.push("/");
      dispatch(singinUserSuccess(data));
    })
    .catch((error) => {
      const errorMessage =
        error.response && error.response.data.message ? error.response.data.message : error.message;

      toast.error(errorMessage);
      dispatch(singinUserFailure(errorMessage));
    });
};

export const userSignup = (data) => (dispatch) => {
  dispatch(signupUserRequest());
  Http
    .post("/user/signup", data)
    .then(({ data }) => {
      toast.success(`${data.name} عزیز؛ خوش آمدی`);
      Router.push("/");
      dispatch(singinUserSuccess(data));
      dispatch(singupUserSuccess(data));
    })
    .catch((error) => {
      const errorMessage =
        error.response && error.response.data.message ? error.response.data.message : error.message;

      toast.error(errorMessage);
      dispatch(singupUserFailure(errorMessage));
    });
};

export const signout = () => (dispatch) => {
  dispatch({ type: SIGNOUT_USER });
  // REMOVE USER DATA FROM LOCALSTORAGE
  Http
    .get("/user/logout")
    .then(({ data }) => {
      window.location.href = "/";
    })
    .catch();
};

export const loadUserData = (store) => {
  Http
    .get("/user/load")
    .then(({ data }) => {
      store.dispatch(singinUserSuccess(data));
    })
    .catch((err) => {});
};
