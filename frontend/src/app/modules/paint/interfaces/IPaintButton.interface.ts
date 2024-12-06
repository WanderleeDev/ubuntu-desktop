import { IBtnBasic } from "../../../shared/interfaces/IBtnData.interface";

export interface IPaintButton extends IBtnBasic {
  onclick?: () => void;
}
