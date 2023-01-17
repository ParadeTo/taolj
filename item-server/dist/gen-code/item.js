"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEM_SERVICE_NAME = exports.ItemServiceControllerMethods = exports.ITEM_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "item";
exports.ITEM_PACKAGE_NAME = "item";
function ItemServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["findOne", "findOneWithOrder"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ItemService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ItemService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.ItemServiceControllerMethods = ItemServiceControllerMethods;
exports.ITEM_SERVICE_NAME = "ItemService";
//# sourceMappingURL=item.js.map