import { BodyColors } from "../exterior/BodyColors.enum";
import { PaintTypes } from "../exterior/PaintTypes.enum";
import { WheelSizes } from "../exterior/WheelSizes.enum";
import { SeatsMaterial } from "../interior/SeatsMaterial.enum";
import { Engines } from "./Engines.enum";
import { Models } from "./Models.enum";

export interface IBaseCarSpecification {
  id: string;
  name: string;
  model?: Models;
  engine?: Engines;
  exterior?: {
    bodyColor?: BodyColors;
    paintType?: PaintTypes;
    wheelSize?: WheelSizes;
  };
  interior?: {
    seatsMaterial?: SeatsMaterial;
  };
}

export interface ICarSpecification extends IBaseCarSpecification {
  [key: string]: unknown;
}
