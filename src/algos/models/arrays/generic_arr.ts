import e from 'express';

export class GenericArray<T> {
  private genArr: T[];
  constructor() {
    this.genArr = [];
  }

  // add new objects
  pushItems(obj: T | T[]): void {
    if (obj) {
      if (!Array.isArray(obj)) {
        // means it is a single object
        this.genArr.push(obj as T);
      } else if (Array.isArray(obj)) {
        this.genArr.push(...obj);
      }
    } else {
      // Do not all null
      throw 'Only non-null values are allowed';
    }
  }

  removeAllItems() {
    if (this.genArr.length >= 1) {
      this.genArr = [];
    } else {
      throw 'Array is already empty';
    }
  }

  getAllItems() {
    return this.genArr;
  }

  removeItemsAtIndex(index: number): T[] {
    if (this.genArr.length >= 1 && this.genArr.length >= index && this.genArr[index]) {
      this.genArr.splice(index, 1);
      return this.getAllItems();
    } else {
      // index value is not there,
      throw 'Index is out of range/ value has already been deleted';
    }
  }
}
