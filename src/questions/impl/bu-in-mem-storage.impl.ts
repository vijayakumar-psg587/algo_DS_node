import { IRecord } from 'src/algos/models/storage/in-memory-storage';

export class BusinessUnit implements IRecord<string, string> {
  id: string;
  value: string;
}
