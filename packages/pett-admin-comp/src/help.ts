export function pTry<ValueType, ArgumentsType extends unknown[]>(
  function_: (...args: ArgumentsType) => PromiseLike<ValueType> | ValueType,
  ...arguments_: ArgumentsType
): Promise<ValueType> {
  return new Promise(resolve => {
    resolve(function_(...arguments_));
  });
}
