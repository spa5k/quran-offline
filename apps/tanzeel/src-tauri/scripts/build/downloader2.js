"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var fastq_1 = (0, tslib_1.__importDefault)(require("fastq"));
var fs_extra_1 = (0, tslib_1.__importDefault)(require("fs-extra"));
var ohmyfetch_1 = require("ohmyfetch");
var VersesType;
(function (VersesType) {
    VersesType["UTHMANI"] = "uthmani";
    VersesType["UTHMANI_SIMPLE"] = "uthmani_simple";
    VersesType["INDOPAK"] = "indopak";
    VersesType["IMLAEI"] = "imlaei";
})(VersesType || (VersesType = {}));
var downloadChapters = function (_a) {
    var lang = _a.lang;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var chapters;
        return (0, tslib_1.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!lang)
                        lang = 'en';
                    return [4 /*yield*/, (0, ohmyfetch_1.$fetch)("https://api.quran.com/api/v4/chapters?language=".concat(lang), { method: 'GET' })];
                case 1:
                    chapters = _b.sent();
                    fs_extra_1["default"].writeJSON("src-tauri/scripts/download/chapters/".concat(lang, ".json"), chapters.body);
                    return [2 /*return*/];
            }
        });
    });
};
var downloadAllVerses = function (_a) {
    var lang = _a.lang;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        function asyncWorker(arg) {
            return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
                var chapterNumber, chapterInfo;
                return (0, tslib_1.__generator)(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            chapterNumber = arg.chapterNumber;
                            return [4 /*yield*/, (0, ohmyfetch_1.$fetch)("https://api.quran.com/api/v4/verses/by_chapter/".concat(chapterNumber, "?language=").concat(arg.lang || 'en', "&words=true&translations=true&tafsirs=true&word_fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&page=1&per_page=1000"), { method: 'GET' })];
                        case 1:
                            chapterInfo = _a.sent();
                            return [4 /*yield*/, fs_extra_1["default"].outputJSON("src-tauri/scripts/download/chapters/verses/".concat(chapterNumber, "/").concat(lang, ".json"), chapterInfo.verses, { spaces: 2 })];
                        case 2:
                            _a.sent();
                            console.log('Downloaded verses for chapter - ', chapterNumber);
                            return [2 /*return*/];
                    }
                });
            });
        }
        var q, index, chapterNumber;
        return (0, tslib_1.__generator)(this, function (_b) {
            q = fastq_1["default"].promise(asyncWorker, 4);
            for (index = 1; index <= 114; index++) {
                chapterNumber = index;
                q.push({ chapterNumber: chapterNumber, lang: lang });
            }
            return [2 /*return*/];
        });
    });
};
var main = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var err_1;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, downloadAllVerses({ lang: 'en' })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
main()["catch"](function (err) { return console.error(err); });
