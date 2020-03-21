import humps from 'humps';

export const camelizeKeys = (object) => {
  return humps.camelizeKeys(object);
};

export const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj
  }, {});
