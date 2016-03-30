System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StyleDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StyleDirective = (function () {
                function StyleDirective(el) {
                    this.el = el;
                    this.defaultColor = 'orange';
                }
                StyleDirective.prototype.onMouseOver = function () { this.colorStyle(this.inlineColor || this.defaultColor); };
                StyleDirective.prototype.onMouseLeave = function () { this.colorStyle(null); };
                StyleDirective.prototype.colorStyle = function (color) {
                    this.el.nativeElement.style.backgroundColor = color;
                };
                __decorate([
                    core_1.Input('myStyle'), 
                    __metadata('design:type', String)
                ], StyleDirective.prototype, "inlineColor", void 0);
                StyleDirective = __decorate([
                    core_1.Directive({
                        selector: '[myStyle]',
                        host: {
                            '(mouseenter)': 'onMouseOver()',
                            '(mouseleave)': 'onMouseLeave()',
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], StyleDirective);
                return StyleDirective;
            })();
            exports_1("StyleDirective", StyleDirective);
        }
    }
});
//# sourceMappingURL=style.directive.js.map