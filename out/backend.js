"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function backend(index) {
    return new Promise(resolve => {
        setTimeout(() => resolve(index + 1), 1000);
    });
}
exports.backend = backend;
//# sourceMappingURL=backend.js.map