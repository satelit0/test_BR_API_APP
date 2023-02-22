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
exports.CandidateType = void 0;
const swagger_1 = require("@nestjs/swagger");
class CandidateType {
    ;
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'id', type: Number, }),
    __metadata("design:type", Number)
], CandidateType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'cedula', type: String, }),
    __metadata("design:type", String)
], CandidateType.prototype, "cedula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'nombres', type: String, }),
    __metadata("design:type", String)
], CandidateType.prototype, "nombres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'apellidos', type: String, }),
    __metadata("design:type", String)
], CandidateType.prototype, "apellidos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'fecha_nacimiento', type: Date, }),
    __metadata("design:type", Date)
], CandidateType.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'trabajo_actual', type: String, required: false }),
    __metadata("design:type", String)
], CandidateType.prototype, "trabajo_actual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'expectativa_salarial', type: Number, required: false }),
    __metadata("design:type", Number)
], CandidateType.prototype, "expectativa_salarial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'createdAt', type: Date, required: false }),
    __metadata("design:type", Date)
], CandidateType.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'updatedAt', type: Date, required: false }),
    __metadata("design:type", Date)
], CandidateType.prototype, "updatedAt", void 0);
exports.CandidateType = CandidateType;
//# sourceMappingURL=candidates.type.js.map