import * as TYPE from "../contans/table";

export const getListTable = (params) => {
  return {
    type: TYPE.GET_LIST_TABLE,
    ...params,
  };
};

export const getListTableSuccess = (data) => {
  return {
    type: TYPE.GET_LIST_TABLE_SUCCESS,
    data,
  };
};

export const getListTableError = (mess) => {
  return {
    type: TYPE.GET_LIST_TABLE_ERROR,
    mess,
  };
};
