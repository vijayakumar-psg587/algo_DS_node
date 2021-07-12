import { IRecord } from 'src/algos/models/storage/in-memory-storage';
import { Listener } from 'src/algos/models/types/listener-event.type';
import { BuInMemoryDbImpl } from './impl/bu-in-mem-db-impl';
import { BusinessUnit } from './impl/bu-in-mem-storage.impl';
import { createObserver } from './impl/observer';
import { AfterSetEvent, BeforeSetEvent, IMemDbIntf } from './interfaces/in-memory.int';

export async function createDatabase<IRecord>(): Promise<IMemDbIntf<IRecord>> {
  class InMemDbClass implements IMemDbIntf<IRecord> {
    public static instance: InMemDbClass = new InMemDbClass('Simple Db');
    private name: string;
    private beforeAddEventListeners = createObserver<BeforeSetEvent<IRecord>>();
    private afterAddEventListeners = createObserver<AfterSetEvent<IRecord>>();
    private records: IRecord[];
    constructor(name) {
      this.name = name;
      this.records = [];
    }

    setRecord(rec: IRecord): void {
      // before event publish
      this.beforeAddEventListeners.publish({ oldValue: rec['value'], newValue: rec['value'] });
      this.records.push(rec);
      this.afterAddEventListeners.publish({ newValue: rec['value'] });
      // after event publish
    }

    onBeforeAddEvent(listerner: Listener<BeforeSetEvent<IRecord>>) {
      return this.beforeAddEventListeners.subscribe(listerner);
    }
    onAfterAddEvent(listerner: Listener<AfterSetEvent<IRecord>>) {
      return this.afterAddEventListeners.subscribe(listerner);
    }

    setRecords(rec: IRecord[]): void {
      this.records.push(...rec);
    }

    getRecordById(id: string | Record<string, unknown>): IRecord {
      if (this.records && this.records.length >= 1) {
        return this.records.filter((rec) => rec['id'] === id)[0];
      } else {
        return null;
      }
    }
    getAllRecords(): IRecord[] {
      return this.records;
    }
  }

  return Promise.resolve(InMemDbClass.instance);
}
