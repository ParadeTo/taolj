"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_SERVICE_NAME = exports.OrderServiceControllerMethods = exports.ORDER_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "order";
exports.ORDER_PACKAGE_NAME = "order";
function OrderServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["findOne"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("OrderService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("OrderService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.OrderServiceControllerMethods = OrderServiceControllerMethods;
exports.ORDER_SERVICE_NAME = "OrderService";
//# sourceMappingURL=order.js.map