"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const common_1 = require("@nestjs/common");
const item_1 = require("./gen-code/item");
const items = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' }
];
let ItemController = class ItemController {
    getItems(request) {
        return { list: items };
    }
    findOne(data) {
        return items.find(({ id }) => id === data.id);
    }
};
ItemController = __decorate([
    (0, common_1.Controller)('item'),
    (0, item_1.ItemServiceControllerMethods)()
], ItemController);
exports.ItemController = ItemController;
//# sourceMappingURL=item.controller.js.map