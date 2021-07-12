import { IRecord } from 'src/algos/models/storage/in-memory-storage';
import { Listener } from 'src/algos/models/types/listener-event.type';

export interface BeforeSetEvent<T> {
  oldValue: T;
  newValue: T;
}

export interface AfterSetEvent<T> {
  newValue: T;
}
export interface IMemDbIntf<IRecord> {
  setRecord(rec: IRecord): void;
  setRecords(rec: IRecord[]): void;
  getRecordById(id: string | Record<string, unknown>): IRecord | undefined;
  getAllRecords(): IRecord[] | [];

  onBeforeAddEvent: (evListener: Listener<BeforeSetEvent<IRecord>>) => () => void;
  onAfterAddEvent: (evListener: Listener<AfterSetEvent<IRecord>>) => () => void;
}
