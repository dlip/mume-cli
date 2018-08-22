#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var prog = require("caporal");
var engine_1 = require("./engine");
var version = require('../package.json').version;
prog
    .version(version)
    .name('mume')
    // PDF
    .command('pdf', 'renders markdown  to pdf')
    .argument('<markdown...>', 'markdown path or glob pattern')
    .option('-o, --out <outdir>', 'output path')
    .action(function (args, options, logger) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, engine_1.exportMarkdown('pdf', args, options, logger)];
    });
}); })
    .command('html', 'renders markdown to html')
    .argument('<markdown...>', 'markdown path or glob pattern')
    .option('-o, --out <outdir>', 'output path')
    .action(function (args, options, logger) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, engine_1.exportMarkdown('html', args, options, logger)];
    });
}); })
    .command('gfm', 'renders to Github flavored markdown')
    .argument('<markdown...>', 'markdown path or glob pattern')
    .option('-o, --out <outdir>', 'output path')
    .action(function (args, options, logger) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, engine_1.exportMarkdown('gmf', args, options, logger)];
    });
}); })
    .command('ebook', 'renders to ebook')
    .argument('<format>', 'output file type (epub/mobi/pdf/html)', ["epub", "mobi", "pdf", "html"])
    .argument('[input]', 'ebook index input file', null, 'README.md')
    .action(function (args, options, logger) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, engine_1.exportMarkdown('ebook', args, options, logger)];
    });
}); });
// run
function run() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prog.parse(process.argv)];
                case 1:
                    _a.sent();
                    process.exit();
                    return [2 /*return*/];
            }
        });
    });
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUJBeUNBOztBQXpDQSw4QkFBZ0M7QUFDaEMsbUNBQTBDO0FBRTFDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVuRCxJQUFJO0tBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQztLQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2IsTUFBTTtLQUNMLE9BQU8sQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUM7S0FDMUMsUUFBUSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQztLQUMxRCxNQUFNLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDO0tBQzNDLE1BQU0sQ0FBQyxVQUFPLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTTs7UUFDbEMsc0JBQU8sdUJBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBQzs7S0FDckQsQ0FBQztLQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUM7S0FDM0MsUUFBUSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQztLQUMxRCxNQUFNLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDO0tBQzNDLE1BQU0sQ0FBQyxVQUFPLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTTs7UUFDbEMsc0JBQU8sdUJBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBQzs7S0FDdEQsQ0FBQztLQUNELE9BQU8sQ0FBQyxLQUFLLEVBQUUscUNBQXFDLENBQUM7S0FDckQsUUFBUSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQztLQUMxRCxNQUFNLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxDQUFDO0tBQzNDLE1BQU0sQ0FBQyxVQUFPLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTTs7UUFDbEMsc0JBQU8sdUJBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBQzs7S0FDckQsQ0FBQztLQUNELE9BQU8sQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUM7S0FDcEMsUUFBUSxDQUFDLFVBQVUsRUFBRSx1Q0FBdUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzlGLFFBQVEsQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztLQUNoRSxNQUFNLENBQUMsVUFBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU07O1FBQ2xDLHNCQUFPLHVCQUFjLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUM7O0tBQ3ZELENBQUMsQ0FBQztBQUVMLE1BQU07QUFDTjs7Ozt3QkFDRSxxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQTlCLFNBQThCLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7Q0FDaEI7QUFFRCxHQUFHLEVBQUUsQ0FBQyJ9