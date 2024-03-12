"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const colors_1 = __importDefault(require("colors"));
const debounce_1 = require("../debounce/debounce");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function handleInput(input) {
    console.log(colors_1.default.green(`Entrada recibida: ${input}`));
}
const debouncedHandleInput = (0, debounce_1.debounce)(handleInput, 1000);
function runCLI() {
    rl.question(colors_1.default.yellow('Escriba el texto para verificar la función debounce: '), (input) => {
        debouncedHandleInput(input);
        runCLI();
    });
}
console.log(colors_1.default.yellow('CLI para probar la función debounce.'));
runCLI();
//# sourceMappingURL=index.js.map