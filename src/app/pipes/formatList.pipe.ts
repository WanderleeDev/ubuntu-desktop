import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
  name: "formatList",
  standalone: true,
})
export class FormatListPipe implements PipeTransform {
  transform(listToFormat: string[]): string {
    if (listToFormat.length <= 0) throw new Error("the list is empty");
    
    const formatter = new Intl.ListFormat("en", {
      style: "narrow",
      type: "unit",
    });

    return formatter.format(listToFormat);
  }
}
