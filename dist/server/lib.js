"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asyncHandler(fn) {
    return function (req, res, next) {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };
}
exports.asyncHandler = asyncHandler;
//# sourceMappingURL=lib.js.map