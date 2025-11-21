"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudserverClient = void 0;
const typescript_codegen_1 = require("../build/smithy/source/typescript-codegen");
const utils_1 = require("./utils");
__exportStar(require("../build/smithy/source/typescript-codegen"), exports);
__exportStar(require("./utils"), exports);
class CloudserverClient extends typescript_codegen_1.CloudserverClient {
    constructor(config) {
        super(config);
        this.middlewareStack.add((0, utils_1.createCustomErrorMiddleware)(), {
            step: 'deserialize',
            name: 'cloudserverErrorHandler'
        });
    }
}
exports.CloudserverClient = CloudserverClient;
