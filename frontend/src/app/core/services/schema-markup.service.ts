import { Injectable } from "@angular/core";
import { ISchemaMarkup } from "../interfaces/ISchemaMarkup.interface";

@Injectable({
  providedIn: "root",
})
export class SchemaMarkupService {
  public buildSchemaMarkupString(schema: ISchemaMarkup) {
    return JSON.stringify(schema);
  }
}
