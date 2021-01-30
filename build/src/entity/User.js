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
var UserEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
let UserEntity = UserEntity_1 = class UserEntity {
    static create(data) {
        const entity = new UserEntity_1();
        Object.assign(entity, data);
        return entity;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
UserEntity = UserEntity_1 = __decorate([
    typeorm_1.Entity({
        name: "user",
    })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlFO0FBVWpFLElBQWEsVUFBVSxrQkFBdkIsTUFBYSxVQUFVO0lBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUE4QjtRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVUsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FVRixDQUFBO0FBUEM7SUFEQyxnQ0FBc0IsQ0FBQyxNQUFNLENBQUM7O3NDQUNwQjtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7eUNBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7OzRDQUNRO0FBZE4sVUFBVTtJQUh0QixnQkFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0dBQ1csVUFBVSxDQWV0QjtBQWZZLGdDQUFVIn0=