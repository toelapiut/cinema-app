import humps from 'humps';
import t from 'typy';

export const camelizeKeys = (object) => {
  return humps.camelizeKeys(object);
};

export const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj
  }, {});

export const slicer = (arr, start, end) => {
  return arr.slice(start, end)
};

export const checkDefined = ( item ) => {
  return t(item).isNullOrUndefined
}
