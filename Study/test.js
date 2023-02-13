var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(userName) {
        this.name = userName;
    }
    Person.prototype.print = function () {
        console.log("\u0418\u043C\u044F: ".concat(this.name));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ").concat(this.company));
    };
    return Employee;
}(Person));
var Max = new Employee("Max");
Max.print();
