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
var core_1 = require("@angular/core");
var LikeComponent = (function () {
    function LikeComponent() {
        this.isLike = false;
        this.totalLikes = 0;
    }
    LikeComponent.prototype.Like = function () {
        this.isLike = !this.isLike;
        this.totalLikes += this.isLike ? 1 : -1;
    };
    return LikeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "isLike", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LikeComponent.prototype, "totalLikes", void 0);
LikeComponent = __decorate([
    core_1.Component({
        selector: 'like',
        template: "<i class=\"glyphicon glyphicon-heart\" [class.highlighted]=\"isLike\" (click)=\"Like()\"></i>\n\t\t\t\t<span> {{ totalLikes }} </span>",
        styles: ["\n\t.glyphicon-heart {\n\t\tcolor: #ccc;\n\t\tcursor: pointer;\n\t}\n\n\t.highlighted {\n\t\tcolor: deeppink;\n\t}\n\t"
        ]
    })
], LikeComponent);
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map