export function findIndexToSum(numbers: number[], target: number): number[] {
  const data = new Map<number, number>();
  let num: number[] = [];

  numbers.forEach((number, index) => {
    const deference = target - number;
    
    if (data.has(deference)) {
      num = [index, data.get(deference)!]
    }

    data.set(number, index)
  })
  return num
}


export function findIndexToSum2(numbers: number[], target: number): number[] {
  const mapNumbers = new Map<number, number>();

  for (const [index, number] of numbers.entries()) {
    const deference = target - number;

    if (mapNumbers.has(deference)) return [index, mapNumbers.get(deference)!];

    mapNumbers.set(number, index);
  }

  return [];
}
