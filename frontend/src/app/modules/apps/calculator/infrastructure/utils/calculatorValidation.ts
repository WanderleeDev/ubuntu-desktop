const number = `(?:-?\\d+(?:\\.\\d+)?|π)`;
const numberWithPercent = `(?:${number}(?:%)?)`;
const operator = `[+\\-^*/]`;
const modulus = `(?:mod|%)`;

const calculatorRegex = new RegExp(
  `^(?:` +
    `(?:` +
    `(?:${numberWithPercent}|\\([^()]*\\))(?:\\s*²)?|` +
    `√(?:${numberWithPercent}|\\([^()]*\\))` +
    `)` +
    `(?:` +
    `\\s*(?:${operator}|${modulus})\\s*` +
    `(?:(?:${numberWithPercent}|\\([^()]*\\))(?:\\s*²)?|√(?:${numberWithPercent}|\\([^()]*\\)))` +
    `)*` +
    `)$`
);

export function calculatorValidator(expression: string): boolean {
  const trimmedExpression = expression.trim();
  const result = calculatorRegex.test(trimmedExpression);

  return result;
}
