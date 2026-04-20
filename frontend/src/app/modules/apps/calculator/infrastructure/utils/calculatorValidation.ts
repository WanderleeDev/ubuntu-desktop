const number = `(?:-?\\d+(?:\\.\\d+)?|π)`; // Números decimales o π
const numberWithPercent = `(?:${number}(?:%)?)`; // Números que pueden tener %
const operator = `[+\\-^*/]`; // Operadores básicos
const modulus = `(?:mod|%)`; // Operadores de mód

// Expresión regular ajustada
const calculatorRegex = new RegExp(
  `^(?:` +
    // Un término puede ser:
    `(?:` +
    // Un número (con % opcional) o π, opcionalmente seguido por ²
    `(?:${numberWithPercent}|\\([^()]*\\))(?:\\s*²)?|` +
    // Una raíz cuadrada seguida de un número o paréntesis
    `√(?:${numberWithPercent}|\\([^()]*\\))` +
    `)` +
    // Seguido por cualquier combinación de:
    `(?:` +
    // Espacio opcional + operador/modulus + espacio opcional + otro término
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
