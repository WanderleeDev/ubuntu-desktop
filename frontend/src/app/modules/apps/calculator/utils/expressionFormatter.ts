import { keys } from "../data/controls";

export function expressionFormatter(expression: string): string {
  let newExpression = expression;

  for (const [key, value] of Object.entries(keys)) {
    newExpression = newExpression.replaceAll(key, value);
  }

  return newExpression;
}
