import { Pipe, type PipeTransform } from "@angular/core";

type ItemsType = Record<string, string>;

@Pipe({
  name: "filter",
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-pipe-impure
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform<T extends ItemsType>(
    items: T[],
    filterValue: string,
    filterKey: keyof T
  ): T[] {
    if (items.length <= 0 || !filterValue.trim()) return items;

    return items.filter(item => item[filterKey] === filterValue);
  }
}
