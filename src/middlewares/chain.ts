import { MiddlewareFactory, MiddlewareHandler } from "../types/middleware";

export function chain(
  functions: MiddlewareFactory[],
  index = 0
): MiddlewareHandler {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return async (request, event, response) => {
    return response;
  };
}
