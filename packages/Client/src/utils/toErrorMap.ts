import type { UserError } from "../generated/graphql";

export const toErrorMap = (errors: UserError[]): Record<string, string> => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};
