"use strict";
// Opcion 1
// export const debounce = (callback: (...args: any[]) => void, delay = 500) => {
//   let timeoutId: ReturnType<typeof setTimeout>;
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
//   return function (this: any, ...args: any[]) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       callback.apply(this, args);
//     }, delay);
//   };
// };
// Opcion 2
const debounce = (callback, delay = 500) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        return new Promise((resolve) => {
            timeoutId = setTimeout(() => {
                resolve(callback(...args));
            }, delay);
        });
    };
};
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map