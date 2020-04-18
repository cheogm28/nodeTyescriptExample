System.register("server", ["express"], function (exports_1, context_1) {
    "use strict";
    var express_1, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (express_1_1) {
                express_1 = express_1_1;
            }
        ],
        execute: function () {
            app = express_1["default"]();
            app.get("/", function (req, res) {
                res.send("Hello world!");
                return;
            });
            exports_1("default", app);
        }
    };
});
System.register("index", ["server"], function (exports_2, context_2) {
    "use strict";
    var server_1, port;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (server_1_1) {
                server_1 = server_1_1;
            }
        ],
        execute: function () {
            port = 8080;
            server_1["default"].listen(port, function () {
                console.log("server started at http://localhost:" + port);
            });
        }
    };
});
//# sourceMappingURL=tsc.js.map