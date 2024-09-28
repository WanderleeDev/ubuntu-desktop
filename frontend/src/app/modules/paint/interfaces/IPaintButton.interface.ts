import { IBtnBasic } from "../../../interfaces/IBtnData.interface";

export interface IPaintButton extends IBtnBasic {
  onclick?: () => void;
}
