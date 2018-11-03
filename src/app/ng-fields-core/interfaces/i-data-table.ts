import {DataTableType} from '../enums/data-table.type';

export interface IDataTable {
  label: string;
  type: DataTableType;
  model: string;
}
