import * as TYPE from "../contans/product";

export const getListProduct = (params) => {
  return {
    type: TYPE.GET_LIST_PRODUCT,
    ...params,
  };
};

export const getListProductSuccess = (data) => {
  return {
    type: TYPE.GET_LIST_PRODUCT_SUCCESS,
    data,
  };
};

export const getListProductError = (mess) => {
  return {
    type: TYPE.GET_LIST_PRODUCT_ERROR,
    mess,
  };
};

export const getExtra = (params) => {
  return {
    type: TYPE.GET_EXTRA,
    ...params,
  };
};

export const getExtraSuccess = (data) => {
  return {
    type: TYPE.GET_EXTRA_SUCCESS,
    data,
  };
};

export const getExtraError = (mess) => {
  return {
    type: TYPE.GET_EXTRA_ERROR,
    mess,
  };
};

export const getDetailProduct = (data) => {
  return {
    type: TYPE.GET_DETAIL_PRODUCT,
    data,
  };
};
