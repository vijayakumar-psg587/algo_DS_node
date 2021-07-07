import { IRecord } from 'src/algos/models/storage/in-memory-storage';

export interface IMemDb<IRecord, Key, Value> {
  setRecords(rec: IRecord): void;
  getRecordById(id: Key): IRecord | undefined;
  getAllRecords(): IRecord[] | [];
}
