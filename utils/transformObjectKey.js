export default function transformObjectKey(originalObjects, newKey) {
  if (Array.isArray(originalObjects)) {
    return originalObjects.reduce((newObjects, item) => {
      newObjects[item[newKey]] = item;
      return newObjects;
    }, {});
  }
  return originalObjects;
}
