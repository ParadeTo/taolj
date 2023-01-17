"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const item_1 = require("./gen-code/item");
const item_service_1 = require("./item.service");
const items = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
];
let ItemController = class ItemController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    async findOneWithOrder(request) {
        const order = await (0, rxjs_1.lastValueFrom)(this.itemService.orderClient.findOne({ id: 1 }));
        const item = items.find(({ id }) => id === request.id);
        return Object.assign(Object.assign({}, item), { order });
    }
    findOne(data) {
        return items.find(({ id }) => id === data.id);
    }
};
ItemController = __decorate([
    (0, common_1.Controller)('item'),
    (0, item_1.ItemServiceControllerMethods)(),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemController);
exports.ItemController = ItemController;
//# sourceMappingURL=item.controller.js.map