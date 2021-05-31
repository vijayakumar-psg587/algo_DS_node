import { GenericArray } from '../models/arrays/generic_arr';

export function sort_arr_obj<T>(arr: GenericArray<T>, sortKeyName: string) {
  if (arr && arr.getAllItems() && arr.getAllItems().length >= 1) {
    const arrToSort: T[] = arr.getAllItems();

    if (sortKeyName && sortKeyName in arrToSort[0] && typeof arrToSort[0][sortKeyName] === 'string') {
      // basically checking if the key exists
      return arrToSort.sort((a: T, b: T) => {
        if ((a[sortKeyName] as string).toLocaleLowerCase() > (b[sortKeyName] as string).toLocaleLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      throw `Array cannot be sorted with ${sortKeyName}`;
    }
  } else {
    throw 'Cannot sort an empty of undefined array';
  }
}
