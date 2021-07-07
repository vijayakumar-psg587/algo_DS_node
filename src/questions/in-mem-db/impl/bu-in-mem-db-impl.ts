import { IMemDb } from '../interfaces/in-memory.int';
import { BusinessUnit } from './bu-in-mem-storage.impl';

export class BuInMemoryDbImpl implements IMemDb<BusinessUnit, string, string> {
  private buData: BusinessUnit[];

  constructor() {
    this.buData = [];
  }
  setRecords(rec: BusinessUnit): void {
    throw new Error('Method not implemented.');
  }
  getRecordById(id: string): BusinessUnit {
    throw new Error('Method not implemented.');
  }

  getAllRecords(): BusinessUnit[] {
    throw new Error('Method not implemented');
  }
}
