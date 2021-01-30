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
var UserModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const typeorm_1 = require("typeorm");
let UserModel = UserModel_1 = class UserModel {
    static create(data) {
        const entity = new UserModel_1();
        Object.assign(entity, data);
        return entity;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], UserModel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserModel.prototype, "temp", void 0);
UserModel = UserModel_1 = __decorate([
    typeorm_1.Entity({
        name: "user",
    })
], UserModel);
exports.UserModel = UserModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvVXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlFO0FBVWpFLElBQWEsU0FBUyxpQkFBdEIsTUFBYSxTQUFTO0lBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUE2QjtRQUNoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVMsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FhRixDQUFBO0FBVkM7SUFEQyxnQ0FBc0IsQ0FBQyxNQUFNLENBQUM7O3FDQUNwQjtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7d0NBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7OzJDQUNRO0FBR2pCO0lBREMsZ0JBQU0sRUFBRTs7dUNBQ0k7QUFqQkYsU0FBUztJQUhyQixnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0dBQ1csU0FBUyxDQWtCckI7QUFsQlksOEJBQVMifQ==