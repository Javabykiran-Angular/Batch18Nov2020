"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.Myarea = function () {
        this.area = this.radius * this.radius * 3.14;
    };
    Circle.prototype.display = function () {
        console.log("\n            ---------Circle Area---------------\n            Radius is " + this.radius + "\n            Area is " + this.area + "\n            --------------------------------\n        ");
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
