// Opcion 1
export const debounce = (callback: (...args: any[]) => void, delay = 800) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};

// Opcion 2
// export const debounce = <T extends (...args: any[]) => any>(
//   callback: T,
//   delay = 1000
// ) => {
//   let timeoutId: ReturnType<typeof setTimeout>;

//   return function (this: any, ...args: Parameters<T>): ReturnType<T> {
//     clearTimeout(timeoutId);

//     return new Promise((resolve) => {
//       timeoutId = setTimeout(() => {
//         resolve(callback.apply(this, args));
//       }, delay);
//     }) as ReturnType<T>;
//   };
// };
