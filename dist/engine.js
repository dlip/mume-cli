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
Object.defineProperty(exports, "__esModule", { value: true });
var globby = require("globby");
var fs = require("fs-extra");
var path = require("path");
var mume_1 = require("@shd101wyy/mume");
exports.MarkdownEngine = mume_1.MarkdownEngine;
exports.config = {
    usePandocParser: false,
    breakOnSingleNewLine: true,
    enableTypographer: false,
    enableWikiLinkSyntax: true,
    enableEmojiSyntax: true,
    enableExtendedTableSyntax: false,
    enableCriticMarkupSyntax: false,
    wikiLinkFileExtension: '.md',
    protocolsWhiteList: 'http://, https://, atom://, file://, mailto:, tel:',
    mathRenderingOption: 'KaTeX',
    mathInlineDelimiters: [['$', '$'], ['\\(', '\\)']],
    mathBlockDelimiters: [['$$', '$$'], ['\\[', '\\]']],
    codeBlockTheme: 'auto.css',
    previewTheme: 'github-light.css',
    revealjsTheme: 'white.css',
    mermaidTheme: 'mermaid.css',
    frontMatterRenderingOption: 'none',
    imageFolderPath: '/assets',
    printBackground: false,
    phantomPath: 'phantomjs',
    pandocPath: 'pandoc',
    pandocMarkdownFlavor: 'markdown-raw_tex+tex_math_single_backslash',
    pandocArguments: [],
    latexEngine: 'pdflatex',
    enableScriptExecution: false
};
function createEngine(filePath, projectDirectoryPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mume_1.init()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new mume_1.MarkdownEngine({
                            filePath: filePath,
                            projectDirectoryPath: projectDirectoryPath,
                            config: exports.config
                        })];
            }
        });
    });
}
exports.createEngine = createEngine;
function exportHtml(filePath, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var projectDirectoryPath, offline, runAllCodeChunks, engine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    projectDirectoryPath = options.projectDirectoryPath, offline = options.offline, runAllCodeChunks = options.runAllCodeChunks;
                    return [4 /*yield*/, createEngine(filePath, projectDirectoryPath)];
                case 1:
                    engine = _a.sent();
                    return [2 /*return*/, engine.htmlExport({
                            offline: offline,
                            runAllCodeChunks: runAllCodeChunks
                        })];
            }
        });
    });
}
exports.exportHtml = exportHtml;
function exportPdf(filePath, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var projectDirectoryPath, runAllCodeChunks, openFileAfterGeneration, engine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    projectDirectoryPath = options.projectDirectoryPath, runAllCodeChunks = options.runAllCodeChunks, openFileAfterGeneration = options.openFileAfterGeneration;
                    return [4 /*yield*/, createEngine(filePath, projectDirectoryPath)];
                case 1:
                    engine = _a.sent();
                    return [2 /*return*/, engine.chromeExport({
                            fileType: 'pdf',
                            runAllCodeChunks: runAllCodeChunks,
                            openFileAfterGeneration: openFileAfterGeneration
                        })];
            }
        });
    });
}
exports.exportPdf = exportPdf;
function exportGfm(filePath, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var projectDirectoryPath, runAllCodeChunks, engine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    projectDirectoryPath = options.projectDirectoryPath, runAllCodeChunks = options.runAllCodeChunks;
                    return [4 /*yield*/, createEngine(filePath, projectDirectoryPath)];
                case 1:
                    engine = _a.sent();
                    return [2 /*return*/, engine.markdownExport({
                            runAllCodeChunks: runAllCodeChunks
                        })];
            }
        });
    });
}
exports.exportGfm = exportGfm;
function exportEbook(filePath, fileType) {
    return __awaiter(this, void 0, void 0, function () {
        var engine;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createEngine(filePath)];
                case 1:
                    engine = _a.sent();
                    return [2 /*return*/, engine.eBookExport({
                            fileType: fileType
                        })];
            }
        });
    });
}
exports.exportEbook = exportEbook;
function exportMarkdown(type, args, options, logger) {
    return __awaiter(this, void 0, void 0, function () {
        var render, _a, files, _i, _b, pattern, paths, _c, _d, files_1, md, output, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _a = type;
                    switch (_a) {
                        case 'pdf': return [3 /*break*/, 1];
                        case 'html': return [3 /*break*/, 2];
                        case 'gmf': return [3 /*break*/, 3];
                        case 'ebook': return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 6];
                case 1:
                    render = exportPdf;
                    return [3 /*break*/, 7];
                case 2:
                    render = exportHtml;
                    return [3 /*break*/, 7];
                case 3:
                    render = exportGfm;
                    return [3 /*break*/, 7];
                case 4: return [4 /*yield*/, exportEbook(args.input, args.format)];
                case 5:
                    _f.sent();
                    return [2 /*return*/];
                case 6: throw Error("unknown format " + type);
                case 7:
                    files = [];
                    _i = 0, _b = args.markdown;
                    _f.label = 8;
                case 8:
                    if (!(_i < _b.length)) return [3 /*break*/, 11];
                    pattern = _b[_i];
                    return [4 /*yield*/, globby([pattern])];
                case 9:
                    paths = _f.sent();
                    paths.forEach(function (p) { return files.push(p); });
                    _f.label = 10;
                case 10:
                    _i++;
                    return [3 /*break*/, 8];
                case 11:
                    _c = options.out && files.length;
                    if (!_c) return [3 /*break*/, 13];
                    return [4 /*yield*/, fs.mkdirp(options.out)];
                case 12:
                    _c = (_f.sent());
                    _f.label = 13;
                case 13:
                    _c;
                    _d = 0, files_1 = files;
                    _f.label = 14;
                case 14:
                    if (!(_d < files_1.length)) return [3 /*break*/, 19];
                    md = files_1[_d];
                    logger.info("rendering " + md);
                    return [4 /*yield*/, render(md)];
                case 15:
                    output = _f.sent();
                    _e = options.out;
                    if (!_e) return [3 /*break*/, 17];
                    return [4 /*yield*/, fs.move(output, path.join(options.out, output))];
                case 16:
                    _e = (_f.sent());
                    _f.label = 17;
                case 17:
                    _e;
                    _f.label = 18;
                case 18:
                    _d++;
                    return [3 /*break*/, 14];
                case 19: return [2 /*return*/];
            }
        });
    });
}
exports.exportMarkdown = exportMarkdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VuZ2luZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWlDO0FBQ2pDLDZCQUErQjtBQUMvQiwyQkFBNkI7QUFFN0Isd0NBQTZFO0FBRXBFLHlCQUZBLHFCQUFjLENBRUE7QUFFVixRQUFBLE1BQU0sR0FBeUI7SUFDMUMsZUFBZSxFQUFFLEtBQUs7SUFDdEIsb0JBQW9CLEVBQUUsSUFBSTtJQUMxQixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLG9CQUFvQixFQUFFLElBQUk7SUFDMUIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2Qix5QkFBeUIsRUFBRSxLQUFLO0lBQ2hDLHdCQUF3QixFQUFFLEtBQUs7SUFDL0IscUJBQXFCLEVBQUUsS0FBSztJQUM1QixrQkFBa0IsRUFBRSxvREFBb0Q7SUFDeEUsbUJBQW1CLEVBQUUsT0FBTztJQUM1QixvQkFBb0IsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELG1CQUFtQixFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsY0FBYyxFQUFFLFVBQVU7SUFDMUIsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxhQUFhLEVBQUUsV0FBVztJQUMxQixZQUFZLEVBQUUsYUFBYTtJQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLG9CQUFvQixFQUFFLDRDQUE0QztJQUNsRSxlQUFlLEVBQUUsRUFBRTtJQUNuQixXQUFXLEVBQUUsVUFBVTtJQUN2QixxQkFB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