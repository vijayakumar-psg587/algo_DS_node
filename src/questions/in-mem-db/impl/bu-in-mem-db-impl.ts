import { IMemDbIntf } from '../interfaces/in-memory.int';
import { BusinessUnit } from './bu-in-mem-storage.impl';

export class BuInMemoryDbImpl implements IMemDbIntf<BusinessUnit> {
  private buData: BusinessUnit[];

  constructor() {
    this.buData = [];
  }
  setRecord(rec: BusinessUnit): void {
    throw new Error('Method not implemented.');
  }

  setRecords(rec: BusinessUnit[]): void {
    throw new Error('Method not implemented.');
  }

  getRecordById(id: string): BusinessUnit {
    throw new Error('Method not implemented.');
  }

  getAllRecords(): BusinessUnit[] {
    throw new Error('Method not implemented');
  }
}
