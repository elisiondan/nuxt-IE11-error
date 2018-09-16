import flattenDataObject from '@/utils/flattenDataObject';
import parseTranslations from '@/utils/transformObjectKey';

export default function parseNestedData(data) {
  if (Array.isArray(data)) {
    return data.reduce((newData, item) => {
      const newItem = flattenDataObject(item);
      if (newItem.translations !== undefined) {
        newItem.translations = parseTranslations(newItem.translations, 'language_code');
      }
      newData.push(newItem);
      return newData;
    }, []);
  }
  return flattenDataObject(data);
}
