export default function flattenDataObject(object) {
  const newObject = {};
  Object.keys(object).forEach(property => {
    if (object[property] !== null && object[property].data !== undefined) {
      newObject[property] = object[property].data;
    } else {
      newObject[property] = object[property];
    }
  });
  return newObject;
}
