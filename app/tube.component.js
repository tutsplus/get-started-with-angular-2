System.register(['angular2/core', 'angular2/http', './ytube.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, ytube_service_1;
    var TubeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ytube_service_1_1) {
                ytube_service_1 = ytube_service_1_1;
            }],
        execute: function() {
            TubeComponent = (function () {
                function TubeComponent(_ytubeService) {
                    this._ytubeService = _ytubeService;
                }
                TubeComponent.prototype.vidSelect = function (video) {
                    this.selectedID = video;
                    this.vidLink = "https://www.youtube.com/embed/" + this.selectedID;
                };
                TubeComponent.prototype.ngOnInit = function () { this.getVideos(); };
                TubeComponent.prototype.getVideos = function () {
                    var _this = this;
                    this._ytubeService.getVideos()
                        .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return _this.errorMessage = error; });
                };
                TubeComponent.prototype.goBack = function () {
                    this.vidLink = null;
                };
                TubeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-tube',
                        templateUrl: '../templates/tube.html',
                        providers: [http_1.HTTP_PROVIDERS, ytube_service_1.YtubeService]
                    }), 
                    __metadata('design:paramtypes', [ytube_service_1.YtubeService])
                ], TubeComponent);
                return TubeComponent;
            })();
            exports_1("TubeComponent", TubeComponent);
        }
    }
});
//# sourceMappingURL=tube.component.js.map