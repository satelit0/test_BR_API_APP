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
exports.Candidate = void 0;
const typeorm_1 = require("typeorm");
let Candidate = class Candidate {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Candidate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 11, unique: true }),
    __metadata("design:type", String)
], Candidate.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60 }),
    __metadata("design:type", String)
], Candidate.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60 }),
    __metadata("design:type", String)
], Candidate.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Candidate.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Candidate.prototype, "trabajo_actual", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Candidate.prototype, "expectativa_salarial", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Candidate.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Candidate.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Candidate.prototype, "deletedAt", void 0);
Candidate = __decorate([
    (0, typeorm_1.Entity)('candidatos')
], Candidate);
exports.Candidate = Candidate;
//# sourceMappingURL=candidate.entity.js.map