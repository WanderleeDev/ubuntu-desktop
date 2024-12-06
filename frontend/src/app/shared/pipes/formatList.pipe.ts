import { Pipe, type PipeTransform } from "@angular/core";

type listType = Intl.ListFormatType;
type styleType = Intl.ListFormatStyle;

@Pipe({
  name: "formatList",
  standalone: true,
})
export class FormatListPipe implements PipeTransform {
  transform(
    listToFormat: string[],
    style: styleType = "narrow",
    type: listType = "unit"
  ): string {
    if (listToFormat.length <= 0) throw new Error("the list is empty");

    const formatter = new Intl.ListFormat("en", {
      style,
      type,
    });

    return formatter.format(listToFormat);
  }
}
