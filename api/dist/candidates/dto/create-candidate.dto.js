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
exports.CreateCandidateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCandidateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'cedula', type: String, default: '11800083112' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "cedula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'nombres', type: String, default: 'Juan Francisco' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "nombres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'apellidos', type: String, default: 'de la cruz pérez' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "apellidos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'fecha_nacimiento', type: Date, default: '1980-07-10' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", Date)
], CreateCandidateDto.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'trabajo_actual', type: String, default: 'Gerente de TI', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "trabajo_actual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'expectativa_salarial', type: Number, default: 100000, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCandidateDto.prototype, "expectativa_salarial", void 0);
exports.CreateCandidateDto = CreateCandidateDto;
//# sourceMappingURL=create-candidate.dto.js.map