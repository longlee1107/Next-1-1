import * as TYPE from "../contans/filter";

export const getListFilter = (params) => {
  return {
    type: TYPE.GET_LIST_FILTER,
    ...params,
  };
};

export const getListFilterSuccess = (data) => {
  return {
    type: TYPE.GET_LIST_FILTER_SUCCESS,
    data,
  };
};

export const getListFilterError = (mess) => {
  return {
    type: TYPE.GET_LIST_FILTER_ERROR,
    mess,
  };
};
