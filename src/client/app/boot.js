System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', 'angular2/http', 'angular2/common', './app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, router_1, http_1, common_1, app_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.ClassifiedApp, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                common_1.FORM_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
