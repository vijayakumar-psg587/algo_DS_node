import { HashTable } from './DS/hash-table';
import { findDupArrOddTimeWithBetterSpaceComplexity, findOddDuplicateItemWithOofN } from './questions/arrays/array-dup-even-odd/array-dup';

(async function bootstrap() {
  const arr = [4, 3, 1, 3, 1, 3, 6, 6, 4];
  console.log(findOddDuplicateItemWithOofN(arr));
  console.log(findDupArrOddTimeWithBetterSpaceComplexity(arr));

  const hashTab = new HashTable<string>(20);
  hashTab.insert('Vijay');
  hashTab.insert('Kumar');
  hashTab.insert('Pradeepa');
  hashTab.insert('Tamil');

  console.log(hashTab.lookup('Tamil'));
})();
