import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform<T>(
    items: T[],
    filterValue: T[keyof T] | null | undefined,
    filterKey: keyof T
  ): T[] {
    if (!items || items.length === 0 || !filterValue) return items;

    return items.filter(item => item[filterKey] === filterValue);
  }
}
