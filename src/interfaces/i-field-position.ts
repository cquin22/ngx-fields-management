import {FieldPositionDisplayType} from "../enums/field-position-display.type";
import {FieldPositionColumnType} from "../enums/field-position-colum.type";

export interface IFieldPosition {
  column?: FieldPositionColumnType;
  display?: FieldPositionDisplayType;
  width?: string;
}
