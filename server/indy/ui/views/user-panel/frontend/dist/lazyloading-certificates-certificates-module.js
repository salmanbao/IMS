(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazyloading-certificates-certificates-module"],{

/***/ "./node_modules/ngx-mask/fesm5/ngx-mask.js":
/*!*************************************************!*\
  !*** ./node_modules/ngx-mask/fesm5/ngx-mask.js ***!
  \*************************************************/
/*! exports provided: INITIAL_CONFIG, MaskDirective, MaskPipe, MaskService, NEW_CONFIG, NgxMaskModule, _configFactory, config, initialConfig, withoutValidation, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function() { return INITIAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskDirective", function() { return MaskDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskPipe", function() { return MaskPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskService", function() { return MaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function() { return NEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function() { return NgxMaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_configFactory", function() { return _configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutValidation", function() { return withoutValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MaskApplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NEW_CONFIG');
var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INITIAL_CONFIG');
var initialConfig = {
    suffix: '',
    prefix: '',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    dropSpecialCharacters: true,
    hiddenInput: undefined,
    shownMaskExpression: '',
    validation: true,
    // tslint:disable-next-line: quotemark
    specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true,
        },
        X: {
            pattern: new RegExp('\\d'),
            symbol: '*',
        },
        A: {
            pattern: new RegExp('[a-zA-Z0-9]'),
        },
        S: {
            pattern: new RegExp('[a-zA-Z]'),
        },
        d: {
            pattern: new RegExp('\\d'),
        },
        m: {
            pattern: new RegExp('\\d'),
        },
        M: {
            pattern: new RegExp('\\d'),
        },
        H: {
            pattern: new RegExp('\\d'),
        },
        h: {
            pattern: new RegExp('\\d'),
        },
        s: {
            pattern: new RegExp('\\d'),
        },
    },
};
var withoutValidation = [
    'percent',
    'Hh:m0:s0',
    'Hh:m0',
    'Hh',
    'm0:s0',
    's0',
    'm0',
    'separator',
    'dot_separator',
    'comma_separator',
    'd0/M0/0000',
    'd0/M0',
    'd0',
    'M0',
];

var Separators;
(function (Separators) {
    Separators["SEPARATOR"] = "separator";
    Separators["COMMA_SEPARATOR"] = "comma_separator";
    Separators["DOT_SEPARATOR"] = "dot_separator";
})(Separators || (Separators = {}));
var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        this._config = _config;
        this.maskExpression = '';
        this.actualValue = '';
        this.shownMaskExpression = '';
        this.separator = function (str, char, decimalChar, precision) {
            str += '';
            var x = str.split(decimalChar);
            var decimals = x.length > 1 ? "" + decimalChar + x[1] : '';
            var res = x[0];
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, '$1' + char + '$2');
            }
            if (precision === undefined) {
                return res + decimals;
            }
            else if (precision === 0) {
                return res;
            }
            return res + decimals.substr(0, precision + 1);
        };
        this.percentage = function (str) {
            return Number(str) >= 0 && Number(str) <= 100;
        };
        this.getPrecision = function (maskExpression) {
            var x = maskExpression.split('.');
            if (x.length > 1) {
                return Number(x[x.length - 1]);
            }
            return Infinity;
        };
        this.checkInputPrecision = function (inputValue, precision, decimalMarker) {
            if (precision < Infinity) {
                var precisionRegEx = void 0;
                if (decimalMarker === '.') {
                    precisionRegEx = new RegExp("\\.\\d{" + precision + "}.*$");
                }
                else {
                    precisionRegEx = new RegExp(",\\d{" + precision + "}.*$");
                }
                var precisionMatch = inputValue.match(precisionRegEx);
                if (precisionMatch && precisionMatch[0].length - 1 > precision) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                else if (precision === 0 && inputValue.endsWith(decimalMarker)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
            }
            return inputValue;
        };
        this._shift = new Set();
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.suffix = this._config.suffix;
        this.hiddenInput = this._config.hiddenInput;
        this.showMaskTyped = this._config.showMaskTyped;
        this.validation = this._config.validation;
    }
    // tslint:disable-next-line:no-any
    MaskApplierService.prototype.applyMaskWithPattern = function (inputValue, maskAndPattern) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(maskAndPattern, 2), mask = _a[0], customPattern = _a[1];
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    };
    MaskApplierService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        var cursor = 0;
        var result = "";
        var multi = false;
        var backspaceShift = false;
        var shift = 1;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        var inputArray = inputValue.toString().split('');
        if (maskExpression === 'IP') {
            this.ipError = !!(inputArray.filter(function (i) { return i === '.'; }).length < 3 && inputArray.length < 7);
            maskExpression = '099.099.099.099';
        }
        if (maskExpression.startsWith('percent')) {
            if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
                inputValue = this._checkInput(inputValue);
                var precision = this.getPrecision(maskExpression);
                inputValue = this.checkInputPrecision(inputValue, precision, '.');
            }
            if (this.percentage(inputValue)) {
                result = inputValue;
            }
            else {
                result = inputValue.substring(0, inputValue.length - 1);
            }
        }
        else if (maskExpression.startsWith(Separators.SEPARATOR) ||
            maskExpression.startsWith(Separators.DOT_SEPARATOR) ||
            maskExpression.startsWith(Separators.COMMA_SEPARATOR)) {
            if (inputValue.match('[wа-яА-Я]') ||
                inputValue.match('[a-z]|[A-Z]') ||
                inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\[\]:";<>.?\/]/)) {
                inputValue = this._checkInput(inputValue);
            }
            var precision = this.getPrecision(maskExpression);
            var strForSep = void 0;
            if (maskExpression.startsWith(Separators.SEPARATOR)) {
                if (inputValue.includes(',') &&
                    inputValue.endsWith(',') &&
                    inputValue.indexOf(',') !== inputValue.lastIndexOf(',')) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
            }
            if (maskExpression.startsWith(Separators.DOT_SEPARATOR)) {
                if (inputValue.indexOf('.') !== -1 &&
                    inputValue.indexOf('.') === inputValue.lastIndexOf('.') &&
                    inputValue.indexOf('.') > 3) {
                    inputValue = inputValue.replace('.', ',');
                }
                inputValue =
                    inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== ','
                        ? inputValue.slice(1, inputValue.length)
                        : inputValue;
            }
            if (maskExpression.startsWith(Separators.COMMA_SEPARATOR)) {
                inputValue =
                    inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== '.'
                        ? inputValue.slice(1, inputValue.length)
                        : inputValue;
            }
            if (maskExpression.startsWith(Separators.SEPARATOR)) {
                if (inputValue.match(/[@#!$%^&*()_+|~=`{}\[\]:.";<>?\/]/)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                inputValue = this.checkInputPrecision(inputValue, precision, ',');
                strForSep = inputValue.replace(/\s/g, '');
                result = this.separator(strForSep, ' ', ',', precision);
            }
            else if (maskExpression.startsWith(Separators.DOT_SEPARATOR)) {
                if (inputValue.match(/[@#!$%^&*()_+|~=`{}\[\]:\s";<>?\/]/)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                inputValue = this.checkInputPrecision(inputValue, precision, ',');
                strForSep = inputValue.replace(/\./g, '');
                result = this.separator(strForSep, '.', ',', precision);
            }
            else if (maskExpression.startsWith(Separators.COMMA_SEPARATOR)) {
                strForSep = inputValue.replace(/,/g, '');
                result = this.separator(strForSep, ',', '.', precision);
            }
            var commaShift = result.indexOf(',') - inputValue.indexOf(',');
            var shiftStep = result.length - inputValue.length;
            if (shiftStep > 0 && result[position] !== ',') {
                backspaceShift = true;
                var _shift = 0;
                do {
                    this._shift.add(position + _shift);
                    _shift++;
                } while (_shift < shiftStep);
            }
            else if ((commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3)) ||
                (!(result.indexOf('.') >= position && position > 3) && shiftStep <= 0)) {
                this._shift.clear();
                backspaceShift = true;
                shift = shiftStep;
                position += shiftStep;
                this._shift.add(position);
            }
            else {
                this._shift.clear();
            }
        }
        else {
            for (
            // tslint:disable-next-line
            var i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
                if (cursor === maskExpression.length) {
                    break;
                }
                if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                    result += inputSymbol;
                    cursor += 2;
                }
                else if (maskExpression[cursor + 1] === '*' &&
                    multi &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                    multi = false;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) &&
                    maskExpression[cursor + 1] === '*') {
                    result += inputSymbol;
                    multi = true;
                }
                else if (maskExpression[cursor + 1] === '?' &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) ||
                    (this.hiddenInput &&
                        this.maskAvailablePatterns[maskExpression[cursor]] &&
                        this.maskAvailablePatterns[maskExpression[cursor]].symbol === inputSymbol)) {
                    if (maskExpression[cursor] === 'H') {
                        if (Number(inputSymbol) > 2) {
                            cursor += 1;
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'h') {
                        if (result === '2' && Number(inputSymbol) > 3) {
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'm') {
                        if (Number(inputSymbol) > 5) {
                            cursor += 1;
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 's') {
                        if (Number(inputSymbol) > 5) {
                            cursor += 1;
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'd') {
                        if (Number(inputSymbol) > 3) {
                            cursor += 1;
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor - 1] === 'd') {
                        if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 31) {
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'M') {
                        if (Number(inputSymbol) > 1) {
                            cursor += 1;
                            var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor - 1] === 'M') {
                        if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 12) {
                            continue;
                        }
                    }
                    result += inputSymbol;
                    cursor++;
                }
                else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                    result += maskExpression[cursor];
                    cursor++;
                    var shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor))
                        ? inputArray.length
                        : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                    i--;
                }
                else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 &&
                    this.maskAvailablePatterns[maskExpression[cursor]] &&
                    this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                    cursor++;
                    i--;
                }
                else if (this.maskExpression[cursor + 1] === '*' &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
                else if (this.maskExpression[cursor + 1] === '?' &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
            }
        }
        if (result.length + 1 === maskExpression.length &&
            this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0, backspaceShift);
        if (shift < 0) {
            this._shift.clear();
        }
        var res = this.suffix ? "" + this.prefix + result + this.suffix : "" + this.prefix + result;
        if (result.length === 0) {
            res = "" + this.prefix + result;
        }
        return res;
    };
    MaskApplierService.prototype._findSpecialChar = function (inputSymbol) {
        return this.maskSpecialCharacters.find(function (val) { return val === inputSymbol; });
    };
    MaskApplierService.prototype._checkSymbolMask = function (inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    };
    MaskApplierService.prototype._checkInput = function (str) {
        return str
            .split('')
            .filter(function (i) { return i.match('\\d') || i === '.' || i === ','; })
            .join('');
    };
    MaskApplierService = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(config)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object])
    ], MaskApplierService);
    return MaskApplierService;
}());

var MaskService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MaskService, _super);
    function MaskService(
    // tslint:disable-next-line
    document, _config, _elementRef, _renderer) {
        var _this = _super.call(this, _config) || this;
        _this.document = document;
        _this._config = _config;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.validation = true;
        _this.maskExpression = '';
        _this.isNumberValue = false;
        _this.showMaskTyped = false;
        _this.maskIsShown = '';
        _this.selStart = null;
        _this.selEnd = null;
        // tslint:disable-next-line
        _this.onChange = function (_) { };
        _this._formElement = _this._elementRef.nativeElement;
        return _this;
    }
    // tslint:disable-next-line:cyclomatic-complexity
    MaskService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (!maskExpression) {
            return inputValue;
        }
        this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
        if (this.maskExpression === 'IP' && this.showMaskTyped) {
            this.maskIsShown = this.showMaskInInput(inputValue || '#');
        }
        if (!inputValue && this.showMaskTyped) {
            this.formControlResult(this.prefix);
            return this.prefix + this.maskIsShown;
        }
        var getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] : '';
        var newInputValue = '';
        if (this.hiddenInput !== undefined) {
            var actualResult = this.actualValue.split('');
            inputValue !== '' && actualResult.length
                ? typeof this.selStart === 'number' && typeof this.selEnd === 'number'
                    ? inputValue.length > actualResult.length
                        ? actualResult.splice(this.selStart, 0, getSymbol)
                        : inputValue.length < actualResult.length
                            ? actualResult.length - inputValue.length === 1
                                ? actualResult.splice(this.selStart - 1, 1)
                                : actualResult.splice(this.selStart, this.selEnd - this.selStart)
                            : null
                    : null
                : (actualResult = []);
            newInputValue = this.actualValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
        }
        newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
        var result = _super.prototype.applyMask.call(this, newInputValue, maskExpression, position, cb);
        this.actualValue = this.getActualValue(result);
        if ((this.maskExpression.startsWith(Separators.SEPARATOR) ||
            this.maskExpression.startsWith(Separators.DOT_SEPARATOR)) &&
            this.dropSpecialCharacters === true) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter(function (item) { return item !== ','; });
        }
        if (this.maskExpression.startsWith(Separators.COMMA_SEPARATOR) && this.dropSpecialCharacters === true) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter(function (item) { return item !== '.'; });
        }
        this.formControlResult(result);
        if (!this.showMaskTyped) {
            if (this.hiddenInput) {
                return result && result.length ? this.hideInput(result, this.maskExpression) : result;
            }
            return result;
        }
        var resLen = result.length;
        var prefNmask = this.prefix + this.maskIsShown;
        return result + (this.maskExpression === 'IP' ? prefNmask : prefNmask.slice(resLen));
    };
    MaskService.prototype.applyValueChanges = function (position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        this._formElement.value = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    };
    MaskService.prototype.hideInput = function (inputValue, maskExpression) {
        var _this = this;
        return inputValue
            .split('')
            .map(function (curr, index) {
            if (_this.maskAvailablePatterns &&
                _this.maskAvailablePatterns[maskExpression[index]] &&
                _this.maskAvailablePatterns[maskExpression[index]].symbol) {
                return _this.maskAvailablePatterns[maskExpression[index]].symbol;
            }
            return curr;
        })
            .join('');
    };
    // this function is not necessary, it checks result against maskExpression
    MaskService.prototype.getActualValue = function (res) {
        var _this = this;
        var compare = res
            .split('')
            .filter(function (symbol, i) {
            return _this._checkSymbolMask(symbol, _this.maskExpression[i]) ||
                (_this.maskSpecialCharacters.includes(_this.maskExpression[i]) && symbol === _this.maskExpression[i]);
        });
        if (compare.join('') === res) {
            return compare.join('');
        }
        return res;
    };
    MaskService.prototype.shiftTypedSymbols = function (inputValue) {
        var _this = this;
        var symbolToReplace = '';
        var newInputValue = (inputValue &&
            inputValue.split('').map(function (currSymbol, index) {
                if (_this.maskSpecialCharacters.includes(inputValue[index + 1]) &&
                    inputValue[index + 1] !== _this.maskExpression[index + 1]) {
                    symbolToReplace = currSymbol;
                    return inputValue[index + 1];
                }
                if (symbolToReplace.length) {
                    var replaceSymbol = symbolToReplace;
                    symbolToReplace = '';
                    return replaceSymbol;
                }
                return currSymbol;
            })) ||
            [];
        return newInputValue.join('');
    };
    MaskService.prototype.showMaskInInput = function (inputVal) {
        if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
                throw new Error('Mask expression must match mask placeholder length');
            }
            else {
                return this.shownMaskExpression;
            }
        }
        else if (this.showMaskTyped) {
            if (inputVal) {
                return this._checkForIp(inputVal);
            }
            return this.maskExpression.replace(/\w/g, '_');
        }
        return '';
    };
    MaskService.prototype.clearIfNotMatchFn = function () {
        if (this.clearIfNotMatch &&
            this.prefix.length + this.maskExpression.length + this.suffix.length !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    };
    Object.defineProperty(MaskService.prototype, "formElementProperty", {
        set: function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), name = _b[0], value = _b[1];
            this._renderer.setProperty(this._formElement, name, value);
        },
        enumerable: true,
        configurable: true
    });
    MaskService.prototype.checkSpecialCharAmount = function (mask) {
        var _this = this;
        var chars = mask.split('').filter(function (item) { return _this._findSpecialChar(item); });
        return chars.length;
    };
    // tslint:disable-next-line: cyclomatic-complexity
    MaskService.prototype._checkForIp = function (inputVal) {
        if (inputVal === '#') {
            return '_._._._';
        }
        var arr = [];
        for (var i = 0; i < inputVal.length; i++) {
            if (inputVal[i].match('\\d')) {
                arr.push(inputVal[i]);
            }
        }
        if (arr.length <= 3) {
            return '_._._';
        }
        if (arr.length > 3 && arr.length <= 6) {
            return '_._';
        }
        if (arr.length > 6 && arr.length <= 9) {
            return '_';
        }
        if (arr.length > 9 && arr.length <= 12) {
            return '';
        }
        return '';
    };
    MaskService.prototype.formControlResult = function (inputValue) {
        if (Array.isArray(this.dropSpecialCharacters)) {
            this.onChange(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters));
        }
        else if (this.dropSpecialCharacters) {
            this.onChange(this._checkSymbols(inputValue));
        }
        else {
            this.onChange(this._removeSuffix(this._removePrefix(inputValue)));
        }
    };
    MaskService.prototype._removeMask = function (value, specialCharactersForRemove) {
        return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
    };
    MaskService.prototype._removePrefix = function (value) {
        if (!this.prefix) {
            return value;
        }
        return value ? value.replace(this.prefix, '') : value;
    };
    MaskService.prototype._removeSuffix = function (value) {
        if (!this.suffix) {
            return value;
        }
        return value ? value.replace(this.suffix, '') : value;
    };
    MaskService.prototype._regExpForRemove = function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map(function (item) { return "\\" + item; }).join('|'), 'gi');
    };
    MaskService.prototype._checkSymbols = function (result) {
        // TODO should simplify this code
        var separatorValue = this.testFn(Separators.SEPARATOR, this.maskExpression);
        if (separatorValue && this.isNumberValue) {
            // tslint:disable-next-line:max-line-length
            return result === ''
                ? result
                : result === ','
                    ? null
                    : Number(this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters).replace(',', '.'));
        }
        separatorValue = this.testFn(Separators.DOT_SEPARATOR, this.maskExpression);
        if (separatorValue && this.isNumberValue) {
            // tslint:disable-next-line:max-line-length
            return result === ''
                ? result
                : result === ','
                    ? null
                    : Number(this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters).replace(',', '.'));
        }
        separatorValue = this.testFn(Separators.COMMA_SEPARATOR, this.maskExpression);
        if (separatorValue && this.isNumberValue) {
            // tslint:disable-next-line:max-line-length
            return result === ''
                ? result
                : result === '.'
                    ? null
                    : Number(this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters));
        }
        if (this.isNumberValue) {
            return result === ''
                ? result
                : Number(this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters));
        }
        else if (this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters).indexOf(',') !== -1) {
            return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters).replace(',', '.');
        }
        else {
            return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
        }
    };
    // TODO should think about helpers
    MaskService.prototype.testFn = function (baseSeparator, maskExpretion) {
        var matcher = maskExpretion.match(new RegExp("^" + baseSeparator + "\\.([^d]*)"));
        return matcher ? Number(matcher[1]) : null;
    };
    MaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(config)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MaskService);
    return MaskService;
}(MaskApplierService));

var MaskDirective = /** @class */ (function () {
    function MaskDirective(
    // tslint:disable-next-line
    document, _maskService) {
        this.document = document;
        this._maskService = _maskService;
        this.maskExpression = '';
        this.specialCharacters = [];
        this.patterns = {};
        this.prefix = '';
        this.suffix = '';
        this.dropSpecialCharacters = null;
        this.hiddenInput = null;
        this.showMaskTyped = null;
        this.shownMaskExpression = null;
        this.showTemplate = null;
        this.clearIfNotMatch = null;
        this.validation = null;
        this._position = null;
        // tslint:disable-next-line
        this.onChange = function (_) { };
        this.onTouch = function () { };
    }
    MaskDirective_1 = MaskDirective;
    MaskDirective.prototype.ngOnChanges = function (changes) {
        // tslint:disable-next-line:max-line-length
        var maskExpression = changes.maskExpression, specialCharacters = changes.specialCharacters, patterns = changes.patterns, prefix = changes.prefix, suffix = changes.suffix, dropSpecialCharacters = changes.dropSpecialCharacters, hiddenInput = changes.hiddenInput, showMaskTyped = changes.showMaskTyped, shownMaskExpression = changes.shownMaskExpression, showTemplate = changes.showTemplate, clearIfNotMatch = changes.clearIfNotMatch, validation = changes.validation;
        if (maskExpression) {
            this._maskValue = changes.maskExpression.currentValue || '';
        }
        if (specialCharacters) {
            if (!specialCharacters.currentValue ||
                !Array.isArray(specialCharacters.currentValue) ||
                (Array.isArray(specialCharacters.currentValue) && !specialCharacters.currentValue.length)) {
                return;
            }
            this._maskService.maskSpecialCharacters = changes.specialCharacters.currentValue || '';
        }
        if (patterns) {
            this._maskService.maskAvailablePatterns = patterns.currentValue;
        }
        if (prefix) {
            this._maskService.prefix = prefix.currentValue;
        }
        if (suffix) {
            this._maskService.suffix = suffix.currentValue;
        }
        if (dropSpecialCharacters) {
            this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
        }
        if (hiddenInput) {
            this._maskService.hiddenInput = hiddenInput.currentValue;
        }
        if (showMaskTyped) {
            this._maskService.showMaskTyped = showMaskTyped.currentValue;
        }
        if (shownMaskExpression) {
            this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
        }
        if (showTemplate) {
            this._maskService.showTemplate = showTemplate.currentValue;
        }
        if (clearIfNotMatch) {
            this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
        }
        if (validation) {
            this._maskService.validation = validation.currentValue;
        }
        this._applyMask();
    };
    // tslint:disable-next-line: cyclomatic-complexity
    MaskDirective.prototype.validate = function (_a) {
        var value = _a.value;
        if (!this._maskService.validation) {
            return null;
        }
        if (this._maskService.ipError) {
            return { 'Mask error': true };
        }
        if (this._maskValue.startsWith('dot_separator') || this._maskValue.startsWith('comma_separator')) {
            return null;
        }
        if (withoutValidation.includes(this._maskValue)) {
            return null;
        }
        if (this._maskService.clearIfNotMatch) {
            return null;
        }
        if (value && value.toString().length >= 1) {
            var counterOfOpt = 0;
            var _loop_1 = function (key) {
                if (this_1._maskService.maskAvailablePatterns[key].optional &&
                    this_1._maskService.maskAvailablePatterns[key].optional === true) {
                    if (this_1._maskValue.indexOf(key) !== this_1._maskValue.lastIndexOf(key)) {
                        var opt = this_1._maskValue
                            .split('')
                            .filter(function (i) { return i === key; })
                            .join('');
                        counterOfOpt += opt.length;
                    }
                    else if (this_1._maskValue.indexOf(key) !== -1) {
                        counterOfOpt++;
                    }
                    if (this_1._maskValue.indexOf(key) !== -1 &&
                        value.toString().length >= this_1._maskValue.indexOf(key)) {
                        return { value: null };
                    }
                    if (counterOfOpt === this_1._maskValue.length) {
                        return { value: null };
                    }
                }
            };
            var this_1 = this;
            for (var key in this._maskService.maskAvailablePatterns) {
                var state_1 = _loop_1(key);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            if (this._maskValue.indexOf('*') === 1 ||
                this._maskValue.indexOf('?') === 1 ||
                this._maskValue.indexOf('{') === 1) {
                return null;
            }
            else if ((this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*')) ||
                (this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?'))) {
                return { 'Mask error': true };
            }
            if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
                var length_1 = this._maskService.dropSpecialCharacters
                    ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt
                    : this._maskValue.length - counterOfOpt;
                if (value.toString().length < length_1) {
                    return { 'Mask error': true };
                }
            }
        }
        return null;
    };
    MaskDirective.prototype.onInput = function (e) {
        var el = e.target;
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        var position = el.selectionStart === 1
            ? el.selectionStart + this._maskService.prefix.length
            : el.selectionStart;
        var caretShift = 0;
        var backspaceShift = false;
        this._maskService.applyValueChanges(position, function (shift, _backspaceShift) {
            caretShift = shift;
            backspaceShift = _backspaceShift;
        });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
        el.selectionStart = el.selectionEnd =
            this._position !== null
                ? this._position
                : position +
                    // tslint:disable-next-line
                    (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);
        this._position = null;
    };
    MaskDirective.prototype.onBlur = function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    MaskDirective.prototype.onFocus = function (e) {
        var el = e.target;
        var posStart = 0;
        var posEnd = 0;
        if (el !== null &&
            el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            e.keyCode !== 38)
            if (this._maskService.showMaskTyped) {
                // ) {
                //     return;
                // }
                this._maskService.maskIsShown = this._maskService.showMaskInInput();
                if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
                    el.focus();
                    el.setSelectionRange(posStart, posEnd);
                }
                else if (el.setSelectionRange && this._maskService.maskIsShown !== el.value) {
                    el.focus();
                    el.setSelectionRange(posStart, posEnd);
                }
                if (this._inputValue.match('[wа-яА-Я]') || this._inputValue.match('[a-z]|[A-Z]')) ;
            }
        el.value =
            !el.value || el.value === this._maskService.prefix
                ? this._maskService.prefix + this._maskService.maskIsShown
                : el.value;
        /** fix of cursor position with prefix when mouse click occur */
        if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
    };
    MaskDirective.prototype.a = function (e) {
        this._code = e.code ? e.code : e.key;
        var el = e.target;
        this._maskService.selStart = el.selectionStart;
        this._maskService.selEnd = el.selectionEnd;
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8) {
            if (e.keyCode === 37) {
                el.selectionStart = el.selectionEnd - 1;
            }
            if (e.keyCode === 8 && el.value.length === 0) {
                el.selectionStart = el.selectionEnd;
            }
            if (el.selectionStart <= this._maskService.prefix.length &&
                el.selectionEnd <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            var cursorStart = el.selectionStart;
            // this.onFocus(e);
            if (e.keyCode === 8 && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;
                this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
            }
        }
    };
    MaskDirective.prototype.onPaste = function () {
        this._position = Number.MAX_SAFE_INTEGER;
    };
    /** It writes the value in the input */
    MaskDirective.prototype.writeValue = function (inputValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                if (typeof inputValue === 'number') {
                    inputValue = String(inputValue);
                    inputValue = this._maskValue.startsWith('dot_separator') ? inputValue.replace('.', ',') : inputValue;
                    this._maskService.isNumberValue = true;
                }
                (inputValue && this._maskService.maskExpression) ||
                    (this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped))
                    ? (this._maskService.formElementProperty = [
                        'value',
                        this._maskService.applyMask(inputValue, this._maskService.maskExpression),
                    ])
                    : (this._maskService.formElementProperty = ['value', inputValue]);
                this._inputValue = inputValue;
                return [2 /*return*/];
            });
        });
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    /** It disables the input element */
    MaskDirective.prototype.setDisabledState = function (isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    };
    MaskDirective.prototype._repeatPatternSymbols = function (maskExp) {
        var _this = this;
        return ((maskExp.match(/{[0-9]+}/) &&
            maskExp.split('').reduce(function (accum, currval, index) {
                _this._start = currval === '{' ? index : _this._start;
                if (currval !== '}') {
                    return _this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                _this._end = index;
                var repeatNumber = Number(maskExp.slice(_this._start + 1, _this._end));
                var repaceWith = new Array(repeatNumber + 1).join(maskExp[_this._start - 1]);
                return accum + repaceWith;
            }, '')) ||
            maskExp);
    };
    // tslint:disable-next-line:no-any
    MaskDirective.prototype._applyMask = function () {
        this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
        this._maskService.formElementProperty = [
            'value',
            this._maskService.applyMask(this._inputValue, this._maskService.maskExpression),
        ];
    };
    var MaskDirective_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mask'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", String)
    ], MaskDirective.prototype, "maskExpression", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "specialCharacters", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "patterns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "prefix", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "suffix", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "dropSpecialCharacters", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "hiddenInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "showMaskTyped", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "shownMaskExpression", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "showTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "clearIfNotMatch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Object)
    ], MaskDirective.prototype, "validation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
    ], MaskDirective.prototype, "onInput", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
    ], MaskDirective.prototype, "onBlur", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
    ], MaskDirective.prototype, "onFocus", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
    ], MaskDirective.prototype, "a", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('paste'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
    ], MaskDirective.prototype, "onPaste", null);
    MaskDirective = MaskDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mask]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MaskDirective_1; }),
                    multi: true,
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MaskDirective_1; }),
                    multi: true,
                },
                MaskService,
            ],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, MaskService])
    ], MaskDirective);
    return MaskDirective;
}());

var MaskPipe = /** @class */ (function () {
    function MaskPipe(_maskService) {
        this._maskService = _maskService;
    }
    MaskPipe.prototype.transform = function (value, mask) {
        if (!value && typeof value !== 'number') {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask("" + value, mask);
        }
        return this._maskService.applyMaskWithPattern("" + value, mask);
    };
    MaskPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'mask',
            pure: true,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [MaskApplierService])
    ], MaskPipe);
    return MaskPipe;
}());

var NgxMaskModule = /** @class */ (function () {
    function NgxMaskModule() {
    }
    NgxMaskModule_1 = NgxMaskModule;
    NgxMaskModule.forRoot = function (configValue) {
        return {
            ngModule: NgxMaskModule_1,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue,
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig,
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG],
                },
                MaskApplierService,
            ],
        };
    };
    NgxMaskModule.forChild = function (_configValue) {
        return {
            ngModule: NgxMaskModule_1,
        };
    };
    var NgxMaskModule_1;
    NgxMaskModule = NgxMaskModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [MaskDirective, MaskPipe],
            declarations: [MaskDirective, MaskPipe],
        })
    ], NgxMaskModule);
    return NgxMaskModule;
}());
/**
 * @internal
 */
function _configFactory(initConfig, configValue) {
    return configValue instanceof Function ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, initConfig, configValue()) : Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, initConfig, configValue);
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-mask.js.map


/***/ }),

/***/ "./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Personal Info</h4>\n            <p class=\"card-category\">Birth Certificate</p>\n        </div>\n        <div class=\"card-body\">\n            <form [formGroup]=\"addBirthForm\">\n                <div class=\"row\">\n                \n                    <div class=\"col-md-12\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput type=\"text\" placeholder=\"Enter DID\" formControlName=\"did\">\n                            <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"getData()\">\n                <mat-icon>search</mat-icon>\n              </button>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"First Name\" type=\"text\" formControlName=\"fname\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"lname\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DOB\" formControlName=\"dob\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Father DID\" type=\"text\" formControlName=\"fatherDID\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Mother DID\" type=\"text\" formControlName=\"motherDID\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Family\" type=\"text\" formControlName=\"familyNumber\">\n                            <mat-icon matSuffix>group</mat-icon>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-10\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Address\" type=\"text\" formControlName=\"address\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field>\n                            <mat-label>Gender</mat-label>\n                            <mat-select formControlName=\"gender\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n                                    {{gender}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <mat-form-field>\n                            <mat-label>Religion</mat-label>\n                            <mat-select formControlName=\"religion\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let religion of religions\" [value]=\"religion\">\n                                    {{religion}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"example-full-width\">\n                            <mat-label>City</mat-label>\n                            <mat-select formControlName=\"city\" (ngModelChange)=\"onCity($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\n                                    {{city.city}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Country\" type=\"text\" formControlName=\"country\" [value]=\"_country\">\n                        </mat-form-field>\n                    </div>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"addBirthCertificate()\">Save\n          Profile</button>\n                <div class=\"clearfix\"></div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddBirthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBirthComponent", function() { return AddBirthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/cities.module */ "./src/app/modules/cities.module.ts");
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddBirthComponent = /** @class */ (function () {
    function AddBirthComponent(_formBuilder, snackBar, auth, certificateService) {
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.auth = auth;
        this.certificateService = certificateService;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.value = '';
        this.minDate = new Date(1950, 0, 1);
        this.maxDate = new Date();
        this.genders = ['Male', 'Female'];
        this.regionInfo = new app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__["City"]();
        this.cities = this.regionInfo.cities;
        this._province = '';
        this._country = '';
        this.religions = this.regionInfo.religions;
    }
    AddBirthComponent.prototype.ngOnInit = function () {
        this.addBirthForm = this._formBuilder.group({
            did: ['', null],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fatherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            familyNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            religion: ['', null]
        });
    };
    AddBirthComponent.prototype.addBirthCertificate = function () {
        var _this = this;
        var cert = {
            did: this.addBirthForm.get('did').value,
            fname: this.addBirthForm.get('fname').value,
            lname: this.addBirthForm.get('lname').value,
            fatherDID: this.addBirthForm.get('fatherDID').value,
            motherDID: this.addBirthForm.get('motherDID').value,
            dob: this.addBirthForm.get('dob').value,
            gender: this.addBirthForm.get('gender').value,
            religion: this.addBirthForm.get('religion').value,
            familyNumber: this.addBirthForm.get('familyNumber').value,
            address: this.addBirthForm.get('address').value,
            city: this.addBirthForm.get('city').value.city,
            country: this._country,
            date: new Date().toUTCString(),
            username: this.auth.getUser()
        };
        this.certificateService.addBirth(cert)
            .subscribe(function (data) {
            _this.openSnackBar(data['msg']);
        }, function (error) {
            _this.openSnackBar(error);
        });
    };
    AddBirthComponent.prototype.onCity = function (event) {
        console.log(event);
        this._province = event.admin;
        this._country = event.country;
    };
    AddBirthComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddBirthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-birth',
            template: __webpack_require__(/*! ./add-birth.component.html */ "./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.html"),
            styles: [__webpack_require__(/*! ./add-birth.component.scss */ "./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            app_services_certificate_service__WEBPACK_IMPORTED_MODULE_3__["CertificateService"]])
    ], AddBirthComponent);
    return AddBirthComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Personal Info</h4>\n            <p class=\"card-category\">Birth Certificate</p>\n        </div>\n        <div class=\"card-body\">\n            <form [formGroup]=\"addBirthForm\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput type=\"text\" placeholder=\"Enter DID\" formControlName=\"did\">\n                            <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"getData()\">\n                                <mat-icon>search</mat-icon>\n                            </button>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"First Name\" type=\"text\" formControlName=\"fname\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"lname\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DOB\"\n                                formControlName=\"date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Father DID\" type=\"text\" formControlName=\"fatherDID\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Mother DID\" type=\"text\" formControlName=\"motherDID\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Family\" type=\"text\" formControlName=\"familyNumber\">\n                            <mat-icon matSuffix>group</mat-icon>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-10\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Address\" type=\"text\" formControlName=\"address\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field>\n                            <mat-label>Gender</mat-label>\n                            <mat-select formControlName=\"gender\" (ngModelChange)=\"onCity($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n                                    {{gender}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <mat-form-field>\n                            <mat-label>Religion</mat-label>\n                            <mat-select formControlName=\"religion\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let religion of religions\" [value]=\"religion\">\n                                    {{religion}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"City\" type=\"text\" formControlName=\"city\" [value]=\"_country\">\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Country\" type=\"text\" formControlName=\"country\"\n                                [value]=\"_country\">\n                        </mat-form-field>\n                    </div>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"registerUser()\">Save\n                    Profile</button>\n                <div class=\"clearfix\"></div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UpdateBirthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBirthComponent", function() { return UpdateBirthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/cities.module */ "./src/app/modules/cities.module.ts");
/* harmony import */ var app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/BasicInfo.module */ "./src/app/modules/BasicInfo.module.ts");
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateBirthComponent = /** @class */ (function () {
    function UpdateBirthComponent(_formBuilder, certificateService) {
        this._formBuilder = _formBuilder;
        this.certificateService = certificateService;
        this.value = '';
        this.minDate = new Date(1950, 0, 1);
        this.maxDate = new Date();
        this.genders = ['Male', 'Female'];
        this.regionInfo = new app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__["City"]();
        this.cities = this.regionInfo.cities;
        this._province = '';
        this._country = '';
        this.religions = this.regionInfo.religions;
        this.professions = new app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__["BasicInfo"]().professions;
        this._martialStatus = new app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__["BasicInfo"]().martialStatus;
    }
    UpdateBirthComponent.prototype.ngOnInit = function () {
        this.addBirthForm = this._formBuilder.group({
            did: ['', null],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fatherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            familyNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: ['', null],
            religion: ['', null]
        });
    };
    //### Create citizen ######
    UpdateBirthComponent.prototype.registerUser = function () {
        console.log(this.addBirthForm);
        console.log(JSON.stringify(this.addBirthForm.value));
        this.certificateService.addBirth(this.addBirthForm.value)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UpdateBirthComponent.prototype.getData = function () {
        //send request to server for generating DID and return
        console.log("generate ID");
    };
    UpdateBirthComponent.prototype.onCity = function (event) {
        console.log(event);
        this._province = event.admin;
        this._country = event.country;
    };
    UpdateBirthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-birth',
            template: __webpack_require__(/*! ./update-birth.component.html */ "./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.html"),
            styles: [__webpack_require__(/*! ./update-birth.component.scss */ "./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_certificate_service__WEBPACK_IMPORTED_MODULE_4__["CertificateService"]])
    ], UpdateBirthComponent);
    return UpdateBirthComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"card\">\n    <div class=\"card-header card-header-danger\">\n      <h4 class=\"card-title\">Marriage Info</h4>\n      <p class=\"card-category\">Marriage Certificate</p>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"addForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"Enter DID\" formControlName=\"did\">\n              <button mat-button matSuffix mat-icon-button aria-label=\"Clear\">\n                <mat-icon>search</mat-icon>\n              </button>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <mat-form-field>\n              <input matInput placeholder=\"Spouse(husband)\" type=\"text\" formControlName=\"fname\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"husbandAgepicker\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DOB\"\n                formControlName=\"husbandDOB\">\n              <mat-datepicker-toggle matSuffix [for]=\"husbandAgepicker\"></mat-datepicker-toggle>\n              <mat-datepicker #husbandAgepicker disabled=\"false\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-3\">\n            <mat-form-field>\n              <input matInput placeholder=\"Spouse(wife)\" type=\"text\" formControlName=\"lname\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"wifeAgepicker\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DOB\"\n                formControlName=\"wifeDOB\">\n              <mat-datepicker-toggle matSuffix [for]=\"wifeAgepicker\"></mat-datepicker-toggle>\n              <mat-datepicker #wifeAgepicker disabled=\"false\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DOM\"\n                formControlName=\"MarriageDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <mat-form-field>\n              <input matInput placeholder=\"Spouse(husband) DID\" type=\"text\" formControlName=\"fatherDID\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-5\">\n            <mat-form-field>\n              <input matInput placeholder=\"Spouse(wife) DID\" type=\"text\" formControlName=\"motherDID\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n            <mat-form-field>\n              <input matInput placeholder=\"Family#\" type=\"text\" formControlName=\"familyNumber\">\n              <mat-icon matTooltip=\"Generate Family#\" matSuffix (click)=\"getData()\">group</mat-icon>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <mat-form-field>\n              <input matInput placeholder=\"Husband Address\" type=\"text\" formControlName=\"husbandAddress\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-6\">\n            <mat-form-field>\n              <input matInput placeholder=\"Wife Address\" type=\"text\" formControlName=\"wifeAddress\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput placeholder=\"First Witness DID\" type=\"text\" formControlName=\"witnessOne\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput placeholder=\"Second Witness DID\" type=\"text\" formControlName=\"witnessTwo\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field>\n              <input matInput placeholder=\"Third Witness DID\" type=\"text\" formControlName=\"witnessThird\">\n            </mat-form-field>\n          </div>\n        </div>\n        <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"addMarriage()\">Save\n          Profile</button>\n        <div class=\"clearfix\"></div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddMarriageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMarriageComponent", function() { return AddMarriageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/cities.module */ "./src/app/modules/cities.module.ts");
/* harmony import */ var app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/BasicInfo.module */ "./src/app/modules/BasicInfo.module.ts");
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddMarriageComponent = /** @class */ (function () {
    function AddMarriageComponent(_formBuilder, snackBar, auth, certificateService) {
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.auth = auth;
        this.certificateService = certificateService;
        this.minDate = new Date(1950, 0, 1);
        this.maxDate = new Date();
        this.genders = ['Male', 'Female'];
        this.regionInfo = new app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__["City"]();
        this.cities = this.regionInfo.cities;
        this.religions = this.regionInfo.religions;
        this.professions = new app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__["BasicInfo"]().professions;
        this._martialStatus = new app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__["BasicInfo"]().martialStatus;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    AddMarriageComponent.prototype.ngOnInit = function () {
        this.addForm = this._formBuilder.group({
            username: this.auth.getUser(),
            did: ['', null],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fatherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            familyNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            husbandAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wifeAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            husbandDOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wifeDOB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            witnessOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            witnessTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            witnessThird: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            MarriageDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddMarriageComponent.prototype.addMarriage = function () {
        var _this = this;
        this.certificateService.addMarriage(this.addForm.value)
            .subscribe(function (data) {
            _this.openSnackBar(data['msg']);
        }, function (error) {
            _this.openSnackBar(error);
        });
    };
    AddMarriageComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    AddMarriageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-marriage',
            template: __webpack_require__(/*! ./add-marriage.component.html */ "./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.html"),
            styles: [__webpack_require__(/*! ./add-marriage.component.scss */ "./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            app_services_certificate_service__WEBPACK_IMPORTED_MODULE_4__["CertificateService"]])
    ], AddMarriageComponent);
    return AddMarriageComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/certificates/National/nationalid/nationalid.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/National/nationalid/nationalid.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">National ID</h4>\n            <p class=\"card-category\">User Profile</p>\n        </div>\n        <div class=\"card-body\">\n            <form [formGroup]=\"addForm\">\n                <!-- First Row -->\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Identitifier\" formControlName=\"did\"  >\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button mat-icon-button matTooltip=\"Generate DID\" (click)=\"generateID()\">\n              <mat-icon aria-label=\"generate did\">fingerprint</mat-icon>\n            </button>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Username\" formControlName=\"username\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"example-full-width\">\n                            <span matPrefix>+92 &nbsp;</span>\n                            <input type=\"text\" mask=\"(000) 000 00 00\" matInput placeholder=\"Telephone\" formControlName=\"phone\">\n                            <mat-icon matSuffix>phone</mat-icon>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- Second Row -->\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"First Name\" type=\"text\" formControlName=\"fname\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"lname\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DOB\" formControlName=\"dob\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- Third Row -->\n\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Father DID\" type=\"text\" formControlName=\"fatherDID\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Mother DID\" type=\"text\" formControlName=\"motherDID\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Family\" type=\"text\" formControlName=\"familyNumber\">\n                            <mat-icon matSuffix>group</mat-icon>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- ROW -->\n                <div class=\"row\">\n                    <div class=\"col-md-10\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Adress\" type=\"text\" formControlName=\"address\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field>\n                            <mat-label>Gender</mat-label>\n                            <mat-select formControlName=\"gender\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n                                    {{gender}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n\n\n                <!-- Fourth Row -->\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Religion</mat-label>\n                            <mat-select formControlName=\"religion\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let religion of religions\" [value]=\"religion\">\n                                    {{religion}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Profession</mat-label>\n                            <mat-select formControlName=\"profession\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let profession of professions\" [value]=\"profession\">\n                                    {{profession}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Martial Status</mat-label>\n                            <mat-select formControlName=\"martialStatus\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let status of _martialStatus\" [value]=\"status\">\n                                    {{status}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Country\" type=\"text\" formControlName=\"country\" [value]=\"_country\">\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- Fifth Row -->\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Province</mat-label>\n                            <mat-select formControlName=\"province\" (ngModelChange)=\"onProvince($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let province of provinces\" [value]=\"province\">\n                                    {{province}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Division</mat-label>\n                            <mat-select formControlName=\"division\" (ngModelChange)=\"onDivision($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let division of divisions\" [value]=\"division\">\n                                    {{division}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>District</mat-label>\n                            <mat-select formControlName=\"district\" (ngModelChange)=\"onDistrict($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let district of districts\" [value]=\"district\">\n                                    {{district}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Tehsile</mat-label>\n                            <mat-select formControlName=\"tehsile\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let tehsile of tehsiles\" [value]=\"tehsile\">\n                                    {{tehsile}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- Sixth Row -->\n\n\n                <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"addNationalId()\">Save\n          Profile</button>\n                <div class=\"clearfix\"></div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/certificates/National/nationalid/nationalid.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/National/nationalid/nationalid.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/certificates/National/nationalid/nationalid.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/National/nationalid/nationalid.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NationalidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalidComponent", function() { return NationalidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/cities.module */ "./src/app/modules/cities.module.ts");
/* harmony import */ var app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/BasicInfo.module */ "./src/app/modules/BasicInfo.module.ts");
/* harmony import */ var app_modules_area_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/area.module */ "./src/app/modules/area.module.ts");
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NationalidComponent = /** @class */ (function () {
    function NationalidComponent(_formBuilder, snackBar, certificateService) {
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.certificateService = certificateService;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
        this.minDate = new Date(1950, 0, 1);
        this.maxDate = new Date();
        this.genders = ['Male', 'Female'];
        this.regionInfo = new app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__["City"]();
        this.cities = this.regionInfo.cities;
        this._provincesArray = new app_modules_area_module__WEBPACK_IMPORTED_MODULE_4__["Area"]().provinces;
        this.provinces = []; // array of all provinces
        this.divisions = []; //array of all divisions
        this.districts = []; //array of all districts
        this.tehsiles = []; //array of all tehsiles
        this._country = '';
        this.religions = this.regionInfo.religions;
        this.professions = new app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__["BasicInfo"]().professions;
        this._martialStatus = new app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__["BasicInfo"]().martialStatus;
        this.checkProvinces = function (prov) { return function (element) {
            if (Object.keys(element)[0] == prov)
                return element;
        }; };
    }
    NationalidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = this._formBuilder.group({
            did: [{ value: '1212', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fatherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            familyNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            martialStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: [{ value: 'Pakistan' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            division: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tehsile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            religion: ['', null],
            profession: ['', null],
            date: [new Date().toUTCString(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this._provincesArray.forEach(function (element) {
            _this.provinces = _this.provinces.concat(Object.keys(element));
        });
    };
    NationalidComponent.prototype.addNationalId = function () {
        var _this = this;
        this.certificateService.addNationalID(this.addForm.value)
            .subscribe(function (data) {
            _this.openSnackBar(data['msg']);
        }, function (error) {
            _this.openSnackBar(error);
        });
    };
    NationalidComponent.prototype.generateID = function () {
        console.log('Generate ID');
    };
    NationalidComponent.prototype.getProvinces = function (event) {
        return this._provincesArray.filter(this.checkProvinces(event))[0];
    };
    NationalidComponent.prototype.onProvince = function (event) {
        var _this = this;
        this.divisions = [];
        this.districts = [];
        this.tehsiles = [];
        if (event !== 'invalid') {
            this.divisions = [];
            var tempProvince = this.getProvinces(event);
            tempProvince[event].forEach(function (element) {
                _this.divisions.push(element.division);
            });
        }
        else
            console.log("Invalid choice");
    };
    NationalidComponent.prototype.onDivision = function (event) {
        var _this = this;
        this.districts = [];
        this.tehsiles = [];
        var prov = this.addForm.get('province').value;
        if (event != "invalid") {
            this._districts = [];
            this.districts = [];
            var tempProvince = this.getProvinces(prov);
            tempProvince[prov].forEach(function (element) {
                _this._districts[element.division] = element.district;
            });
            this._districts[this.addForm.get('division').value].forEach(function (element) {
                _this.districts.push(Object.keys(element)[0]);
            });
        }
        else
            console.log("Invalid choice");
    };
    NationalidComponent.prototype.onDistrict = function (event) {
        this.tehsiles = [];
        var dis = this.addForm.get('district').value;
        if (event != "invalid") {
            var _teh_1;
            this._districts[this.addForm.get('division').value].forEach(function (element) {
                if (element[dis] != undefined) {
                    _teh_1 = element[dis];
                }
            });
            this.tehsiles = _teh_1[0].tehsil;
        }
        else {
            console.log('Invalid choice');
        }
    };
    NationalidComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Close', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    NationalidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nationalid',
            template: __webpack_require__(/*! ./nationalid.component.html */ "./src/app/lazyloading/certificates/National/nationalid/nationalid.component.html"),
            styles: [__webpack_require__(/*! ./nationalid.component.scss */ "./src/app/lazyloading/certificates/National/nationalid/nationalid.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            app_services_certificate_service__WEBPACK_IMPORTED_MODULE_5__["CertificateService"]])
    ], NationalidComponent);
    return NationalidComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Personal Info</h4>\n            <p class=\"card-category\">User Profile</p>\n        </div>\n        <div class=\"card-body\">\n            <form [formGroup]=\"addForm\">\n                <!-- First Row -->\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Identitifier \" disabled>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button mat-icon-button matTooltip=\"Generate DID\" (click)=\"generateID()\">\n              <mat-icon aria-label=\"generate did\">fingerprint</mat-icon>\n            </button>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Username\" formControlName=\"username\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"example-full-width\">\n                            <span matPrefix>+92 &nbsp;</span>\n                            <input type=\"text\" mask=\"(000) 000 00 00\" matInput placeholder=\"Telephone\" formControlName=\"phone\">\n                            <mat-icon matSuffix>phone</mat-icon>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- Second Row -->\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"First Name\" type=\"text\" formControlName=\"fname\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"lname\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput [matDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DOB\" formControlName=\"date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- Third Row -->\n\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Father DID\" type=\"text\" formControlName=\"fatherDID\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Mother DID\" type=\"text\" formControlName=\"motherDID\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Family\" type=\"text\" formControlName=\"familyNumber\">\n                            <mat-icon matSuffix>group</mat-icon>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- ROW -->\n                <div class=\"row\">\n                    <div class=\"col-md-10\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Adress\" type=\"text\" formControlName=\"address\">\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <mat-form-field>\n                            <mat-label>Gender</mat-label>\n                            <mat-select formControlName=\"gender\" (ngModelChange)=\"onCity($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\n                                    {{gender}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n\n\n                <!-- Fourth Row -->\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Religion</mat-label>\n                            <mat-select formControlName=\"religion\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let religion of religions\" [value]=\"religion\">\n                                    {{religion}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Profession</mat-label>\n                            <mat-select formControlName=\"profession\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let profession of professions\" [value]=\"profession\">\n                                    {{profession}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Martial Status</mat-label>\n                            <mat-select formControlName=\"martialStatus\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let status of _martialStatus\" [value]=\"status\">\n                                    {{status}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Country\" type=\"text\" formControlName=\"country\" [value]=\"_country\">\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- Fifth Row -->\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Province</mat-label>\n                            <mat-select formControlName=\"province\" (ngModelChange)=\"onProvince($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let province of provinces\" [value]=\"province\">\n                                    {{province}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Division</mat-label>\n                            <mat-select formControlName=\"division\" (ngModelChange)=\"onDivision($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let division of divisions\" [value]=\"division\">\n                                    {{division}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>District</mat-label>\n                            <mat-select formControlName=\"district\" (ngModelChange)=\"onDistrict($event)\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let district of districts\" [value]=\"district\">\n                                    {{district}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <mat-form-field>\n                            <mat-label>Tehsile</mat-label>\n                            <mat-select formControlName=\"tehsile\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let tehsile of tehsiles\" [value]=\"tehsile\">\n                                    {{tehsile}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <!-- Sixth Row -->\n\n\n                <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"registerUser()\">Save\n          Profile</button>\n                <div class=\"clearfix\"></div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UpdateNationalIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNationalIdComponent", function() { return UpdateNationalIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/cities.module */ "./src/app/modules/cities.module.ts");
/* harmony import */ var app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/BasicInfo.module */ "./src/app/modules/BasicInfo.module.ts");
/* harmony import */ var app_modules_area_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/area.module */ "./src/app/modules/area.module.ts");
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateNationalIdComponent = /** @class */ (function () {
    function UpdateNationalIdComponent(_formBuilder, certificateService) {
        this._formBuilder = _formBuilder;
        this.certificateService = certificateService;
        this.minDate = new Date(1950, 0, 1);
        this.maxDate = new Date();
        this.genders = ['Male', 'Female'];
        this.regionInfo = new app_modules_cities_module__WEBPACK_IMPORTED_MODULE_2__["City"]();
        this.cities = this.regionInfo.cities;
        this._provincesArray = new app_modules_area_module__WEBPACK_IMPORTED_MODULE_4__["Area"]().provinces;
        this.provinces = []; // array of all provinces
        this.divisions = []; //array of all divisions
        this.districts = []; //array of all districts
        this.tehsiles = []; //array of all tehsiles
        this._country = '';
        this.religions = this.regionInfo.religions;
        this.professions = new app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__["BasicInfo"]().professions;
        this._martialStatus = new app_modules_BasicInfo_module__WEBPACK_IMPORTED_MODULE_3__["BasicInfo"]().martialStatus;
        this.checkProvinces = function (prov) { return function (element) {
            if (Object.keys(element)[0] == prov)
                return element;
        }; };
    }
    UpdateNationalIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = this._formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fatherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motherDID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            familyNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            martialStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            division: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tehsile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: ['', null],
            religion: ['', null],
            profession: ['', null]
        });
        this._provincesArray.forEach(function (element) {
            _this.provinces = _this.provinces.concat(Object.keys(element));
        });
    };
    UpdateNationalIdComponent.prototype.registerUser = function () {
        console.log(this.addForm);
        console.log(JSON.stringify(this.addForm.value));
        this.certificateService.addBirth(this.addForm.value)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UpdateNationalIdComponent.prototype.generateID = function () {
        //send request to server for generating DID and return
        console.log("generate ID");
    };
    UpdateNationalIdComponent.prototype.onCity = function (event) {
        console.log(event);
    };
    UpdateNationalIdComponent.prototype.getProvinces = function (event) {
        return this._provincesArray.filter(this.checkProvinces(event))[0];
    };
    UpdateNationalIdComponent.prototype.onProvince = function (event) {
        var _this = this;
        this.divisions = [];
        this.districts = [];
        this.tehsiles = [];
        if (event != "invalid") {
            this.divisions = [];
            var tempProvince = this.getProvinces(event);
            tempProvince[event].forEach(function (element) {
                _this.divisions.push(element.division);
            });
        }
        else
            console.log("Invalid choice");
    };
    UpdateNationalIdComponent.prototype.onDivision = function (event) {
        var _this = this;
        this.districts = [];
        this.tehsiles = [];
        var prov = this.addForm.get('province').value;
        if (event != "invalid") {
            this._districts = [];
            this.districts = [];
            var tempProvince = this.getProvinces(prov);
            tempProvince[prov].forEach(function (element) {
                _this._districts[element.division] = element.district;
            });
            this._districts[this.addForm.get('division').value].forEach(function (element) {
                _this.districts.push(Object.keys(element)[0]);
            });
        }
        else
            console.log("Invalid choice");
    };
    // checkDistricts(dist){
    //   let dis = this.addForm.get('district').value;
    //   return dist[dis].tehsile;
    // }
    UpdateNationalIdComponent.prototype.onDistrict = function (event) {
        this.tehsiles = [];
        var dis = this.addForm.get('district').value;
        if (event != "invalid") {
            var _teh_1;
            this._districts[this.addForm.get('division').value].forEach(function (element) {
                if (element[dis] != undefined) {
                    _teh_1 = element[dis];
                }
            });
            this.tehsiles = _teh_1[0].tehsil;
        }
        else
            console.log("Invalid choice");
    };
    UpdateNationalIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-national-id',
            template: __webpack_require__(/*! ./update-national-id.component.html */ "./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.html"),
            styles: [__webpack_require__(/*! ./update-national-id.component.scss */ "./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_services_certificate_service__WEBPACK_IMPORTED_MODULE_5__["CertificateService"]])
    ], UpdateNationalIdComponent);
    return UpdateNationalIdComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/certificates/certificatehome/certificatehome.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/certificatehome/certificatehome.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"offset-md-6 offset-sm-6 offset-lg-5 col-lg-3 col-md-6 col-sm-6\">\n                <form>\n                    <h5>Select Your Certificate</h5>\n                    <mat-form-field>\n                        <mat-label>Certificates</mat-label>\n                        <mat-select [(ngModel)]=\"selectedValue\" name=\"certificate\">\n                            <mat-option *ngFor=\"let certificate of certificates\" [value]=\"certificate.title\">\n                                {{certificate.title}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </form>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <app-add-birth *ngIf='selectedValue == \"Birth Certificate\"'></app-add-birth>\n                <app-nationalid *ngIf='selectedValue == \"National ID\"'></app-nationalid>\n                <app-add-marriage *ngIf='selectedValue == \"Marriage Certificate\"'></app-add-marriage>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lazyloading/certificates/certificatehome/certificatehome.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/certificatehome/certificatehome.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyloading/certificates/certificatehome/certificatehome.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/lazyloading/certificates/certificatehome/certificatehome.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CertificatehomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatehomeComponent", function() { return CertificatehomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CertificatehomeComponent = /** @class */ (function () {
    function CertificatehomeComponent(router) {
        this.router = router;
        this.certificates = [
            { title: 'Birth Certificate', route: '/certificates/birth' },
            { title: 'Marriage Certificate', route: '/certificates/marraige' },
            { title: 'National ID', route: '/certificates/nationalid' }
        ];
    }
    CertificatehomeComponent.prototype.ngOnInit = function () {
    };
    CertificatehomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificatehome',
            template: __webpack_require__(/*! ./certificatehome.component.html */ "./src/app/lazyloading/certificates/certificatehome/certificatehome.component.html"),
            styles: [__webpack_require__(/*! ./certificatehome.component.scss */ "./src/app/lazyloading/certificates/certificatehome/certificatehome.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CertificatehomeComponent);
    return CertificatehomeComponent;
}());



/***/ }),

/***/ "./src/app/lazyloading/certificates/certificates.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/lazyloading/certificates/certificates.module.ts ***!
  \*****************************************************************/
/*! exports provided: CertificatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesModule", function() { return CertificatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var app_routes_personalinfo_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/routes/personalinfo.routing */ "./src/app/routes/personalinfo.routing.ts");
/* harmony import */ var app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var app_modules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _certificatehome_certificatehome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificatehome/certificatehome.component */ "./src/app/lazyloading/certificates/certificatehome/certificatehome.component.ts");
/* harmony import */ var _Birth_update_birth_update_birth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Birth/update-birth/update-birth.component */ "./src/app/lazyloading/certificates/Birth/update-birth/update-birth.component.ts");
/* harmony import */ var _Birth_add_birth_add_birth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Birth/add-birth/add-birth.component */ "./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.ts");
/* harmony import */ var _Marriage_add_marriage_add_marriage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Marriage/add-marriage/add-marriage.component */ "./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.ts");
/* harmony import */ var app_services_certificate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/certificate.service */ "./src/app/services/certificate.service.ts");
/* harmony import */ var _National_nationalid_nationalid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./National/nationalid/nationalid.component */ "./src/app/lazyloading/certificates/National/nationalid/nationalid.component.ts");
/* harmony import */ var _National_update_national_id_update_national_id_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./National/update-national-id/update-national-id.component */ "./src/app/lazyloading/certificates/National/update-national-id/update-national-id.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var CertificatesModule = /** @class */ (function () {
    function CertificatesModule() {
    }
    CertificatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_2__["NgxMaskModule"].forRoot(),
                app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                app_routes_personalinfo_routing__WEBPACK_IMPORTED_MODULE_3__["CertificatesRoutingModule"],
                app_modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            declarations: [
                _certificatehome_certificatehome_component__WEBPACK_IMPORTED_MODULE_7__["CertificatehomeComponent"],
                _Birth_update_birth_update_birth_component__WEBPACK_IMPORTED_MODULE_8__["UpdateBirthComponent"],
                _Birth_add_birth_add_birth_component__WEBPACK_IMPORTED_MODULE_9__["AddBirthComponent"],
                _Marriage_add_marriage_add_marriage_component__WEBPACK_IMPORTED_MODULE_10__["AddMarriageComponent"],
                _National_nationalid_nationalid_component__WEBPACK_IMPORTED_MODULE_12__["NationalidComponent"],
                _National_update_national_id_update_national_id_component__WEBPACK_IMPORTED_MODULE_13__["UpdateNationalIdComponent"]
            ],
            exports: [],
            entryComponents: [],
            providers: [
                app_services_certificate_service__WEBPACK_IMPORTED_MODULE_11__["CertificateService"]
            ]
        })
    ], CertificatesModule);
    return CertificatesModule;
}());



/***/ }),

/***/ "./src/app/modules/BasicInfo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/BasicInfo.module.ts ***!
  \*********************************************/
/*! exports provided: BasicInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfo", function() { return BasicInfo; });
var BasicInfo = /** @class */ (function () {
    function BasicInfo() {
        this.professions = [
            'Business',
            'Engineer',
            'Lawyer',
            'Medical',
            'Management',
            'Labour',
            'IT',
            'Others'
        ];
        this.martialStatus = [
            'Married',
            'Unmarried'
        ];
    }
    return BasicInfo;
}());



/***/ }),

/***/ "./src/app/modules/area.module.ts":
/*!****************************************!*\
  !*** ./src/app/modules/area.module.ts ***!
  \****************************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
var Area = /** @class */ (function () {
    function Area() {
        this.provinces = [
            {
                "Punjab": [
                    {
                        "division": "Rawalpindi",
                        "district": [
                            {
                                "Attock": [
                                    {
                                        "tehsil": [
                                            "ATTOCK",
                                            "FATEH JANG",
                                            "HASSANABDAL",
                                            "HAZRO",
                                            "JAND",
                                            "PINDI GHEB"
                                        ]
                                    }
                                ]
                            },
                            {
                                "Rawalpindi": [
                                    {
                                        "tehsil": [
                                            "GUJAR KHAN",
                                            "KAHUTA",
                                            "KALLAR SAYYEDAN",
                                            "KOTLI SATTIAN",
                                            "MURREE",
                                            "RAWALPINDI",
                                            "TAXIL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "Jhelum": [
                                    {
                                        "tehsil": [
                                            "DINA",
                                            "JHELUM",
                                            "PIND DADAN KHAN",
                                            "SOHAWA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "Chakwal": [
                                    {
                                        "tehsil": [
                                            "CHAKWAL",
                                            "CHOA SAIDAN SHAH",
                                            "KALLAR KAHAR",
                                            "LAWA",
                                            "TALAGANG"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "Sargoda",
                        "district": [
                            {
                                "Sargoda": [
                                    {
                                        "tehsil": [
                                            "BHALWAL",
                                            "BHERA",
                                            "KOT MOMIN",
                                            "SAHIWAL",
                                            "SARGODHA",
                                            "SHAHPUR",
                                            "SILLANWALI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "BHAKKAR": [
                                    {
                                        "tehsil": [
                                            "BHAKKAR",
                                            "DARYA KHAN",
                                            "KALUR KOT",
                                            "MANKERA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KHUSHAB": [
                                    {
                                        "tehsil": [
                                            "KHUSHAB",
                                            "NAUSHEHRA",
                                            "NURPUR",
                                            "QUAIDABAD"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MIANWALI": [
                                    {
                                        "tehsil": [
                                            "ISA KHEL",
                                            "MIANWALI",
                                            "PIPLA"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "Faisalabad",
                        "district": [
                            {
                                "FAISALABAD": [
                                    {
                                        "tehsil": [
                                            "CHAK JHUMRA",
                                            "FAISALABAD CITY",
                                            "FAISALABAD SADDAR",
                                            "JARANWALA",
                                            "SAMMUNDRI",
                                            "TANDLIANWALA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "JHANG": [
                                    {
                                        "tehsil": [
                                            "18-HAZARI",
                                            "AHMEDPUR SIAL",
                                            "JHANG",
                                            "SHORKOT"
                                        ]
                                    }
                                ]
                            },
                            {
                                "CHINIOT": [
                                    {
                                        "tehsil": [
                                            "BHAWANA",
                                            "CHINIOT",
                                            "LALIAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "TOBA TEK SINGH": [
                                    {
                                        "tehsil": [
                                            "GOJRA",
                                            "KAMALIA",
                                            "PIR MAHAL",
                                            "TOBA TEK SINGH"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "GUJRANWALA",
                        "district": [
                            {
                                "GUJRANWALA": [
                                    {
                                        "tehsil": [
                                            "GUJRANWALA CITY",
                                            "GUJRANWALA SADDAR",
                                            "KAMOKE",
                                            "NOWSHERA VIRKAN",
                                            "WAZIRABAD"
                                        ]
                                    }
                                ]
                            },
                            {
                                "HAFIZABAD": [
                                    {
                                        "tehsil": [
                                            "HAFIZABAD",
                                            "PINDI BHATTIAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MANDI BAHAUDDIN": [
                                    {
                                        "tehsil": [
                                            "MALIKWAL",
                                            "MANDI BAHAUDDIN",
                                            "PHALIA "
                                        ]
                                    }
                                ]
                            },
                            {
                                "GUJRAT": [
                                    {
                                        "tehsil": [
                                            "GUJRAT",
                                            "KHARIAN",
                                            "SARAI ALAMGIR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SIALKOT": [
                                    {
                                        "tehsil": [
                                            "DASKA",
                                            "PASRUR",
                                            "SAMBRIAL",
                                            "SIALKOT"
                                        ]
                                    }
                                ]
                            },
                            {
                                "NAROWAL": [
                                    {
                                        "tehsil": [
                                            "NAROWAL",
                                            "SHAKARGARH",
                                            "ZAFARWAL"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "LAHORE",
                        "district": [
                            {
                                "LAHORE": [
                                    {
                                        "tehsil": [
                                            "LAHORE CANTT.",
                                            "LAHORE CITY",
                                            "MODEL TOWN",
                                            "RAIWIND",
                                            "SHALIMAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KASUR": [
                                    {
                                        "tehsil": [
                                            "CHUNIAN",
                                            "KASUR",
                                            "KOT RADHA KISHAN",
                                            "PATTOKI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SHEIKHUPURA": [
                                    {
                                        "tehsil": [
                                            "FEROZEWALA",
                                            "MURIDKAY",
                                            "SAFDARABAD",
                                            "SHARAQPUR",
                                            "SHEIKHUPURA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "NANKANA SAHIB": [
                                    {
                                        "tehsil": [
                                            "NANKANA SAHIB",
                                            "SANGLA HILL",
                                            "SHAHKOT"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "SAHIWAL",
                        "district": [
                            {
                                "SAHIWAL": [
                                    {
                                        "tehsil": [
                                            "CHICHAWATNI",
                                            "SAHIWAL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "OKARA": [
                                    {
                                        "tehsil": [
                                            "DEPALPUR",
                                            "OKARA",
                                            "RENALA KHURD"
                                        ]
                                    }
                                ]
                            },
                            {
                                "PAKPATTAN": [
                                    {
                                        "tehsil": [
                                            "ARIFWALA",
                                            "PAKPATTAN"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "MULTAN",
                        "district": [
                            {
                                "VEHARI": [
                                    {
                                        "tehsil": [
                                            "BUREWALA",
                                            "MAILSI",
                                            "VEHARI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MULTAN": [
                                    {
                                        "tehsil": [
                                            "JALALPUR PIRWALA",
                                            "MULTAN CITY",
                                            "MULTAN SADDAR",
                                            "SHUJABAD"
                                        ]
                                    }
                                ]
                            },
                            {
                                "LODHRAN": [
                                    {
                                        "tehsil": [
                                            "DUNYAPUR",
                                            "KAHROR PACCA",
                                            "LODHRAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KHANEWAL": [
                                    {
                                        "tehsil": [
                                            "JEHANIAN",
                                            "KABIRWALA",
                                            "KHANEWAL",
                                            "MIAN CHANNU"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "DERA GHAZI KHAN",
                        "district": [
                            {
                                "DERA GHAZI KHAN": [
                                    {
                                        "tehsil": [
                                            "DE-EX.AREA OF D.G.KHAN",
                                            "DERA GHAZI KHAN",
                                            "TAUNSA",
                                            "KOT CHUTTA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "RAJANPUR": [
                                    {
                                        "tehsil": [
                                            "DE-EX.AREA OF RAJANPUR",
                                            "JAMPUR",
                                            "RAJANPUR",
                                            "ROJHAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "LAYYAH": [
                                    {
                                        "tehsil": [
                                            "CHAUBARA",
                                            "KAROR LAL ESAN",
                                            "LAYYAH"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MUZAFFARGARH": [
                                    {
                                        "tehsil": [
                                            "ALIPUR",
                                            "JATOI",
                                            "KOT ADDU",
                                            "MUZAFFARGARH"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "BAHAWALPUR",
                        "district": [
                            {
                                "BAHAWALPUR": [
                                    {
                                        "tehsil": [
                                            "AHMADPUR EAST",
                                            "BAHAWALPUR CITY",
                                            "BAHAWALPUR SADDAR",
                                            "HASILPUR",
                                            "KHAIRPUR TAMEWALI",
                                            "YAZMAN "
                                        ]
                                    }
                                ]
                            },
                            {
                                "BAHAWALNAGAR": [
                                    {
                                        "tehsil": [
                                            "BAHAWALNAGAR",
                                            "CHISHTIAN",
                                            "FORT ABBAS",
                                            "HAROONABAD",
                                            "MINCHINABAD"
                                        ]
                                    }
                                ]
                            },
                            {
                                "RAHIM YAR KHAN": [
                                    {
                                        "tehsil": [
                                            "KHANPUR",
                                            "LIAQUATPUR",
                                            "RAHIM YAR KHAN",
                                            "SADIQABAD"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "SINDH": [
                    {
                        "division": "LARKANA",
                        "district": [
                            {
                                "JACOBABAD": [
                                    {
                                        "tehsil": [
                                            "KANDHKOT",
                                            "KASHMORE"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SHIKARPUR": [
                                    {
                                        "tehsil": [
                                            "GARHI YASIN",
                                            "KHANPUR",
                                            "LAKHI",
                                            "SHIKARPUR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "LARKANA": [
                                    {
                                        "tehsil": [
                                            "BAKRANI",
                                            "DOKRI",
                                            "LARKANA",
                                            "RATO DERO"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KAMBAR SHAHDADKOT": [
                                    {
                                        "tehsil": [
                                            "KAMBAR",
                                            "KUBO SAEED KHAN",
                                            "MIRO KHAN",
                                            "NASIRABAD",
                                            "SHAHDADKOT",
                                            "SUJAWAL JUNEJO",
                                            "WARAH"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "SUKKUR",
                        "district": [
                            {
                                "SUKKUR": [
                                    {
                                        "tehsil": [
                                            "NEW SUKKUR",
                                            "PANO AQIL",
                                            "ROHRI",
                                            "SALEHPAT",
                                            "SUKKUR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "GHOTKI (AT MIRPUR MATHELO)": [
                                    {
                                        "tehsil": [
                                            "DAHARKI",
                                            "GHOTKI",
                                            "KHANGARH (KHANPUR)",
                                            "MIRPUR MATHELO",
                                            "UBAURO"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KHAIRPUR": [
                                    {
                                        "tehsil": [
                                            "FAIZ GANJ",
                                            "GAMBAT",
                                            "KHAIRPUR",
                                            "KINGRI",
                                            "KOT DIJI",
                                            "MIRWAH",
                                            "NARA",
                                            "SOBHODERO"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "SHAHEED BENAZIRABAD",
                        "district": [
                            {
                                "NAUSHAHRO FEROZE": [
                                    {
                                        "tehsil": [
                                            " BHIRIA",
                                            " KANDIORO",
                                            " MEHRABPUR",
                                            " MORO",
                                            " NAUSHAHRO FEROZE"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SHAHEED BENAZIRABAD": [
                                    {
                                        "tehsil": [
                                            "DAUR",
                                            "NAWAB SHAH",
                                            "QAZI AHMED",
                                            "SAKRAND"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SANGHAR": [
                                    {
                                        "tehsil": [
                                            "JAM NAWAZ ALI",
                                            "KHIPRO",
                                            "SANGHAR",
                                            "SHAHDADPUR",
                                            "SINJHORO",
                                            "TANDO ADAM"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "HYDERABAD",
                        "district": [
                            {
                                "DADU": [
                                    {
                                        "tehsil": [
                                            "DADU",
                                            "JOHI",
                                            "KHAIRPUR NATHAN SHAH",
                                            "MEHAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "JAMSHORO": [
                                    {
                                        "tehsil": [
                                            "KOTRI",
                                            "MANJHAND",
                                            "SEHWAN",
                                            "THANO BULA KHAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "HYDERABAD": [
                                    {
                                        "tehsil": [
                                            "CITY HYDERABAD",
                                            "HYDERABAD",
                                            "LATIFABAD",
                                            "QASIMABAD"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MATIARI": [
                                    {
                                        "tehsil": [
                                            "HALA",
                                            "MATIARI",
                                            "SAEEDABAD"
                                        ]
                                    }
                                ]
                            },
                            {
                                "TANDO ALLAHYAR": [
                                    {
                                        "tehsil": [
                                            "CHAMBER",
                                            "JHANDO MARI",
                                            "TANDO ALLAHYAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "TANDO MOHAMMAD KHAN": [
                                    {
                                        "tehsil": [
                                            "BULRI SHAH KARIM",
                                            "TANDO GHULAM HYDER",
                                            "TANDO MOHAMMAD KHAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "BADIN": [
                                    {
                                        "tehsil": [
                                            "BADIN",
                                            "MATLI",
                                            "SHAHEED FAZAL RAHU",
                                            "TALHAR",
                                            "TANDO BAGO"
                                        ]
                                    }
                                ]
                            },
                            {
                                "THATTA": [
                                    {
                                        "tehsil": [
                                            "GHORABARI",
                                            "KETI BUNDER",
                                            "MIRPUR SAKRO",
                                            "THATTA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SUJAWAL": [
                                    {
                                        "tehsil": [
                                            "JATI",
                                            "KHARO CHAN",
                                            "MIRPUR BATHORO",
                                            "SHAH BUNDER",
                                            "SUJAWAL"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "MIRPUR KHAS",
                        "district": [
                            {
                                "MIRPUR KHAS": [
                                    {
                                        "tehsil": [
                                            "DIGRI",
                                            "HUSSAIN BUX MARRI",
                                            "JHUDDO",
                                            "KOT GHULAM MOHAMMAD",
                                            "MIRPUR KHAS",
                                            "SHUJABAD",
                                            "SINDHRI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "THARPARKAR": [
                                    {
                                        "tehsil": [
                                            "CHACHRO",
                                            "DHALI",
                                            "DIPLO",
                                            "ISLAMKOT",
                                            "KALOI",
                                            "MITHI",
                                            "NAGAR PARKAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "UMERKOT": [
                                    {
                                        "tehsil": [
                                            "KUNRI",
                                            "PITHORO",
                                            "SAMARO",
                                            "UMERKOT"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "KARACHI",
                        "district": [
                            {
                                "KARACHI EAST": [
                                    {
                                        "tehsil": [
                                            " FEROZABAD SUB-DIVISION",
                                            " GULSHAN-E-IQBAL SUB-DIVISION",
                                            " GULZAR-E-HIJRI SUB-DIVISION",
                                            " JAMSHED QUARTER SUB-DIVISION"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KARACHI WEST": [
                                    {
                                        "tehsil": [
                                            "MAURIPUR SUB-DIVISION",
                                            "HARBOUR SUB-DIVISION",
                                            "ORANGI SUB-DIVISION",
                                            "MOMINABAD SUB-DIVISION",
                                            "SITE SUB-DIVISION",
                                            "BALDIA SUB-DIVISION",
                                            "MANGHOPIR SUB-DIVISION"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KARACHI SOUTH": [
                                    {
                                        "tehsil": [
                                            "ARAM BAHG SUB-DIVISION",
                                            "CIVIL LINE SUB-DIVISION",
                                            "GARDEN SUB-DIVISION",
                                            "LYARI SUB-DIVISION",
                                            "SADDAR SUB-DIVISION"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KARACHI CENTRAL": [
                                    {
                                        "tehsil": [
                                            "GULBERG SUB-DIVISION",
                                            "LIAQUATABAD SUB-DIVISION",
                                            "NAZIMABAD SUB-DIVISION",
                                            "NEW KARACHI SUB-DIVISION",
                                            "NORTH NAZIMABAD SUB-DIVISION"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MALIR": [
                                    {
                                        "tehsil": [
                                            "AIRPORT SUB-DIVISION",
                                            "BIN QASIM SUB-DIVISION",
                                            "GADAB SUB-DIVISION",
                                            "IBRAHIM HYDERI SUB-DIVISION",
                                            "MURAD MEMON SUB-DIVISION",
                                            "SHAH MURAD SUB-DIVISION"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KORANGI": [
                                    {
                                        "tehsil": [
                                            "KORANGI SUB-DIVISION",
                                            "LANDHI SUB-DIVISION",
                                            "MADOL COLONY SUB-DIVISION",
                                            "SHAH FAISAL SUB-DIVISION"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "KHYBER PAKHTUNKHWA": [
                    {
                        "division": "MALAKAND",
                        "district": [
                            {
                                "CHITRAL": [
                                    {
                                        "tehsil": [
                                            "CHITRAL",
                                            "MASTUJ"
                                        ]
                                    }
                                ]
                            },
                            {
                                "UPPER DIR (AT DIR)": [
                                    {
                                        "tehsil": [
                                            "DIR",
                                            "SHARINGAL",
                                            "WARI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "LOWER DIR (AT TEMERGARA)": [
                                    {
                                        "tehsil": [
                                            "ADENZAI",
                                            "LAL QILA",
                                            "SAMARBAGH(BARWA)",
                                            "TEMERGARA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SWAT (AT MINGORA)": [
                                    {
                                        "tehsil": [
                                            "BABUZAI(SWAT)",
                                            "BARIKOT",
                                            "BEHRAIN",
                                            "CHARBAGH",
                                            "KABAL",
                                            "KHWAZA KHELA",
                                            "MATTA SHAMZAI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SHANGLA (AT ALPURI)": [
                                    {
                                        "tehsil": [
                                            "ALPURI",
                                            "BESHAM",
                                            "PURAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "BUNER": [
                                    {
                                        "tehsil": [
                                            "DAGGAR/BUNER",
                                            "GAGRA",
                                            "KHADOKHAIL",
                                            "MANDAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MALAKAND P.A.": [
                                    {
                                        "tehsil": [
                                            "SAM RANIZAI",
                                            "SWAT RANIZAI"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "HAZARA",
                        "district": [
                            {
                                "KOHISTAN": [
                                    {
                                        "tehsil": [
                                            "PALAS",
                                            "PATTAN",
                                            "DASSU",
                                            "KANDIA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MANSEHRA": [
                                    {
                                        "tehsil": [
                                            "BALAKOT",
                                            "MANSEHRA",
                                            "OGHI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "TORGHAR (AT OGHI)": [
                                    {
                                        "tehsil": [
                                            "JUDBA TEHSIL",
                                            "KHANDER TEHSIL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "BATAGRAM (AT BANA)": [
                                    {
                                        "tehsil": [
                                            "BATAGRAM (BANNA)",
                                            "ALLAI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "ABBOTTABAD": [
                                    {
                                        "tehsil": [
                                            "ABBOTTABAD",
                                            "HAVELIAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "HARIPUR": [
                                    {
                                        "tehsil": [
                                            "GHAZI",
                                            "HARIPUR"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "MARDAN",
                        "district": [
                            {
                                "MARDAN": [
                                    {
                                        "tehsil": [
                                            "KATLANG",
                                            "MARDAN",
                                            "TAKHT BHAI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SWABI": [
                                    {
                                        "tehsil": [
                                            "LAHOR",
                                            "RAZAR",
                                            "SWABI",
                                            "TOPI"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "PESHAWAR",
                        "district": [
                            {
                                "CHARSADDA": [
                                    {
                                        "tehsil": [
                                            "CHARSADDA",
                                            "SHABQADAR",
                                            "TANGI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "PESHAWAR": [
                                    {
                                        "tehsil": [
                                            "PESHAWAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "NOWSHERA": [
                                    {
                                        "tehsil": [
                                            "JAHANGIRA",
                                            "NOWSHERA",
                                            "PABBI"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "KOHAT",
                        "district": [
                            {
                                "KOHAT": [
                                    {
                                        "tehsil": [
                                            "KOHAT",
                                            "LACHI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "HANGU": [
                                    {
                                        "tehsil": [
                                            "HANGU",
                                            "TALL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KARAK": [
                                    {
                                        "tehsil": [
                                            "BANDA DAUD SHAH",
                                            "KARAK",
                                            "TAKHT-E-NASRATI"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "BANNU",
                        "district": [
                            {
                                "BANNU": [
                                    {
                                        "tehsil": [
                                            "BANNU",
                                            "DOMEL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "LAKKI MARWAT": [
                                    {
                                        "tehsil": [
                                            "LAKKI MARWAT",
                                            "NAURANG"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "D.I.KHAN",
                        "district": [
                            {
                                "DERA ISMAIL KHAN": [
                                    {
                                        "tehsil": [
                                            "DERA ISMAIL KHAN",
                                            "DARABAN",
                                            "PAHARPUR",
                                            "KULACHI",
                                            "PAROA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "TANK ": [
                                    {
                                        "tehsil": [
                                            "TANK"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "GILGIT BALTISTAN": [
                    {
                        "division": "GILGIT",
                        "district": [
                            {
                                "GILGIT": [
                                    {
                                        "tehsil": [
                                            "GILGIT"
                                        ]
                                    }
                                ]
                            },
                            {
                                "GHIZER (AT GAKUCH)": [
                                    {
                                        "tehsil": [
                                            "GAHKOCH",
                                            "GUPIS",
                                            "ISHKOMAN",
                                            "PUNIAL",
                                            "YASIN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "HUNZA": [
                                    {
                                        "tehsil": [
                                            "ALI ABAD",
                                            "GOJAL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "NAGAR": [
                                    {
                                        "tehsil": [
                                            "NAGAR-I",
                                            "NAGAR-II"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "BALTISTAN",
                        "district": [
                            {
                                "BALTISTAN (AT SKARDU)": [
                                    {
                                        "tehsil": [
                                            "GULTARI",
                                            "RONDU",
                                            "SKARDU"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KHARMANG": [
                                    {
                                        "tehsil": [
                                            "KHARMANG"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SHIGAR": [
                                    {
                                        "tehsil": [
                                            "SHIGAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "GHANCHE (AT KHAPLU)": [
                                    {
                                        "tehsil": [
                                            "KHAPLU",
                                            "MASHABRUM"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "ASTORE",
                        "district": [
                            {
                                "DIAMIR (AT CHILAS) ": [
                                    {
                                        "tehsil": [
                                            "BABU SAR",
                                            "CHILAS",
                                            "DAREL",
                                            "TANGIR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "ASTORE": [
                                    {
                                        "tehsil": [
                                            "ASTORE",
                                            "SHOUNTER"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "FATA": [
                    {
                        "division": "NA",
                        "district": [
                            {
                                "BAJAUR (AT KHAR BAJAUR)": [
                                    {
                                        "tehsil": [
                                            "BARANG",
                                            "CHARMANG",
                                            "KHAR BAJAUR",
                                            "MAMUND",
                                            "NAWAGAI",
                                            "SALARZAI",
                                            "UTMANKHEL(QZAFI)"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KHYBER (AT PESHAWAR)": [
                                    {
                                        "tehsil": [
                                            "BARA",
                                            "JAMRUD",
                                            "LANDI KOTAL",
                                            "MULA GHORI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KURRAM (AT PARACHINAR)": [
                                    {
                                        "tehsil": [
                                            "KURRAM F.R.",
                                            "LOWER KURRAM",
                                            "UPPER KURRAM"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MOHMAND (AT GHALLANAY)": [
                                    {
                                        "tehsil": [
                                            "HALIMZAI",
                                            "PINDIALI",
                                            "PRINGHAR",
                                            "SAFI",
                                            "UPPER MOHMAND",
                                            "UTMAN KHEL(AMBAR)",
                                            "YAKE GHUND"
                                        ]
                                    }
                                ]
                            },
                            {
                                "N.WAZIRISTAN (AT MIRAN SHAH)": [
                                    {
                                        "tehsil": [
                                            "DATTA KHEL",
                                            "DOSSALI",
                                            "GARYUM",
                                            "GHULAM KHAN",
                                            "MIR ALI",
                                            "MIRAN SHAH",
                                            "RAZMAK",
                                            "SHEWA",
                                            "SPINWAM"
                                        ]
                                    }
                                ]
                            },
                            {
                                "ORAKZAI (AT KALAYA)": [
                                    {
                                        "tehsil": [
                                            "CENTRAL",
                                            "ISMAILZAI",
                                            "LOWER",
                                            "UPPER"
                                        ]
                                    }
                                ]
                            },
                            {
                                "S.WAZIRISTAN (AT WANA)": [
                                    {
                                        "tehsil": [
                                            "BIRMAL",
                                            "LADHA",
                                            "MAKIN(CHARLAI)",
                                            "SARAROGHA",
                                            "SARWEKAI",
                                            "TIARZA",
                                            "TOI KHULLAH",
                                            "WANA"
                                        ]
                                    }
                                ]
                            },
                            {
                                "F.R. BANNU DISTRICT": [
                                    {
                                        "tehsil": []
                                    }
                                ]
                            },
                            {
                                "F.R. D.I.KHAN DISTRICT": [
                                    {
                                        "tehsil": []
                                    }
                                ]
                            },
                            {
                                "F.R. KOHAT DISTRICT": [
                                    {
                                        "tehsil": []
                                    }
                                ]
                            },
                            {
                                "F.R. LAKKI MARWAT DISTRICT": [
                                    {
                                        "tehsil": []
                                    }
                                ]
                            },
                            {
                                "F.R. PESHAWAR DISTRICT": [
                                    {
                                        "tehsil": []
                                    }
                                ]
                            },
                            {
                                "F.R. TANK DISTRICT": [
                                    {
                                        "tehsil": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "Balochistan": [
                    {
                        "division": "QUETTA",
                        "district": [
                            {
                                "QUETTA": [
                                    {
                                        "tehsil": [
                                            "PANJPAI SUB-TEHSIL",
                                            "QUETTA CITY",
                                            "QUETTA SADDAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "PISHIN": [
                                    {
                                        "tehsil": [
                                            "BARSHORE SUB-TEHSIL",
                                            "HURRAMZAI",
                                            "KAREZAT",
                                            "PISHIN",
                                            "SARANAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KILLA ABDULLAH": [
                                    {
                                        "tehsil": [
                                            "CHAMAN",
                                            "DOBANDI SUB-TEHSIL",
                                            "GULISTAN",
                                            "KILLA ABDULLAH"
                                        ]
                                    }
                                ]
                            },
                            {
                                "CHAGAI (AT DALBANDIN)": [
                                    {
                                        "tehsil": [
                                            "CHAGAI SUB-TEHSIL",
                                            "DALBANDIN",
                                            "NOKUNDI",
                                            "TAFTAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "NUSHKI": [
                                    {
                                        "tehsil": [
                                            "DAK SUB-TEHSIL",
                                            "NUSHKI"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "ZHOB",
                        "district": [
                            {
                                "LORALAI": [
                                    {
                                        "tehsil": [
                                            "DUKI",
                                            "LORALAI",
                                            "MEKHTAR"
                                        ]
                                    }
                                ]
                            },
                            {
                                "BARKHAN": [
                                    {
                                        "tehsil": [
                                            "BARKHAN"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MUSAKHEL": [
                                    {
                                        "tehsil": [
                                            "DRUG",
                                            "KINGRI",
                                            "MUSAKHEL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KILLA SAIFULLAH": [
                                    {
                                        "tehsil": [
                                            "BADINI SUB-TEHSIL",
                                            "KANMETHARZAI SUB-TEHSIL",
                                            "KILLA SAIFULLAH",
                                            "LOIBAND",
                                            "MUSLIM BAGH",
                                            "SHINKI SUB-TEHSIL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "ZHOB": [
                                    {
                                        "tehsil": [
                                            "ASHWAT SUB-TEHSIL",
                                            "KASHATU SUB-TEHSIL",
                                            "QAMAR DIN KAREZ",
                                            "SAMBAZA SUB-TEHSIL",
                                            "ZHOB"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SHEERANI": [
                                    {
                                        "tehsil": [
                                            "SHEERANI SUB-TEHSIL"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "SIBI",
                        "district": [
                            {
                                "SIBI": [
                                    {
                                        "tehsil": [
                                            "KUTMANDAI SUB-TEHSIL",
                                            "SANGAN SUB-TEHSIL",
                                            "SIBI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "LEHRI": [
                                    {
                                        "tehsil": [
                                            "BHAG",
                                            "LEHRI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "HARNAI": [
                                    {
                                        "tehsil": [
                                            "HARNAI",
                                            "KHOAST SUB-TEHSIL",
                                            "SHARIGH"
                                        ]
                                    }
                                ]
                            },
                            {
                                "ZIARAT": [
                                    {
                                        "tehsil": [
                                            "SINJAWI SUB-TEHSIL",
                                            "ZIARAT"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KOHLU": [
                                    {
                                        "tehsil": [
                                            "GRISINI SUB-TEHSIL",
                                            "KAHAN",
                                            "KOHLU",
                                            "MAWAND",
                                            "TAMBOO"
                                        ]
                                    }
                                ]
                            },
                            {
                                "DERA BUGTI": [
                                    {
                                        "tehsil": [
                                            "BAIKER SUB-TEHSIL",
                                            "DERA BUGTI",
                                            "LOTI SUB-TEHSIL",
                                            "MALAM SUB-TEHSIL",
                                            "PHELAWAGH",
                                            "PIR KOH SUB-TEHSIL",
                                            "SANGSILLAH SUB-TEHSIL",
                                            "SUI"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "NASIRABAD",
                        "district": [
                            {
                                "JAFFARABAD": [
                                    {
                                        "tehsil": [
                                            "GANDAKHA",
                                            "JHAT PAT",
                                            "USTA MOHAMMAD"
                                        ]
                                    }
                                ]
                            },
                            {
                                "NASIRABAD (AT D.M.JAMALI)": [
                                    {
                                        "tehsil": [
                                            "BABA KOT",
                                            "CHATTAR SUB-TEHSIL",
                                            "DERA MURAD JAMALI",
                                            "TAMBOO"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KACHHI (BOLAN) (AT DHADAR)": [
                                    {
                                        "tehsil": [
                                            "BALANARI SUB-TEHSIL",
                                            "DHADAR",
                                            "KHATTAN SUB-TEHSIL",
                                            "MACH SUB-TEHSIL",
                                            "SANNI SUB-TEHSIL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "JHAL MAGSI (AT GANDAWA)": [
                                    {
                                        "tehsil": [
                                            "GANDAWA",
                                            "JHAL MAGSI",
                                            "MIRPUR SUB-TEHSIL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "SOHBATPUR": [
                                    {
                                        "tehsil": [
                                            "SOHBATPUR",
                                            "FARIDABAD",
                                            "SANHRI"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "KALAT",
                        "district": [
                            {
                                "KALAT": [
                                    {
                                        "tehsil": [
                                            "GAZG SUB-TEHSIL",
                                            "JOHAN SUB-TEHSIL",
                                            "KALAT",
                                            "MANGOCHAR",
                                            "SURAB"
                                        ]
                                    }
                                ]
                            },
                            {
                                "MASTUNG": [
                                    {
                                        "tehsil": [
                                            "DASHT",
                                            "KHAD KOOCHA SUB-TEHSIL",
                                            "KIRDGAP SUB-TEHSIL",
                                            "MASTUNG"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KHUZDAR": [
                                    {
                                        "tehsil": [
                                            "ARANJI SUB-TEHSIL",
                                            "GRESHEK SUB-TEHSIL",
                                            "GRASHA SUB-TEHSIL",
                                            "KARAKH SUB-TEHSIL",
                                            "KHUZDAR",
                                            "MOOLA SUB-TEHSIL",
                                            "NAL TEHSIL",
                                            "ORNACH SUB-TEHSIL",
                                            "SAROONA SUB-TEHSIL",
                                            "WADH",
                                            "ZEHRI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "AWARAN": [
                                    {
                                        "tehsil": [
                                            "AWARAN",
                                            "GISHKORE",
                                            "JHAL JAO",
                                            "KORAK JAHOO",
                                            "MASHKAI"
                                        ]
                                    }
                                ]
                            },
                            {
                                "KHARAN": [
                                    {
                                        "tehsil": [
                                            "KHARAN",
                                            "SAR-KHARAN",
                                            "TOHUMULK SUB-TEHSIL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "WASHUK": [
                                    {
                                        "tehsil": [
                                            "BESIMA",
                                            "MASHKHEL",
                                            "NAG SUB-TEHSIL",
                                            "SHAHGORI SUB-TEHSIL",
                                            "WASHUK"
                                        ]
                                    }
                                ]
                            },
                            {
                                "LASBELA (AT UTHAL)": [
                                    {
                                        "tehsil": [
                                            "BELA",
                                            "DUREJI",
                                            "GADDANI",
                                            "HUB",
                                            "KANRAJ ",
                                            "LAKHRA",
                                            "LIARI SUB-TEHSIL",
                                            "SONMIANI/WINDER",
                                            "UTHAL"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "division": "MEKRAN",
                        "district": [
                            {
                                "KECH (AT TURBAT)": [
                                    {
                                        "tehsil": [
                                            "BALNIGOR SUB-TEHSIL",
                                            "BULEDA SUB-TEHSIL",
                                            "DASHT SUB-TEHSIL",
                                            "HOSHAB SUB-TEHSIL",
                                            "MAND",
                                            "TUMP",
                                            "TURBAT",
                                            "ZAMURAN SUB-TEHSIL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "GWADAR": [
                                    {
                                        "tehsil": [
                                            "GWADAR",
                                            "JIWANI",
                                            "ORMARA",
                                            "PASNI",
                                            "SUNTSAR SUB-TEHSIL"
                                        ]
                                    }
                                ]
                            },
                            {
                                "PANJGUR": [
                                    {
                                        "tehsil": [
                                            "GICHK SUB-TEHSIL",
                                            "GOWARGO",
                                            "PANJGUR",
                                            "PAROME"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
    }
    return Area;
}());



/***/ }),

/***/ "./src/app/modules/cities.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/cities.module.ts ***!
  \******************************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
var City = /** @class */ (function () {
    function City() {
        this.religions = ['Islam', 'Hinduism', 'Christianity', 'Sikhism', 'Ahmadiyya', 'Buddhism', 'Judaism'];
        this.cities = [
            {
                city: 'Karachi',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '11624219',
                iso2: 'PK',
                capital: 'admin',
                lat: '24.9056',
                lng: '67.0822',
                population: '12130000'
            },
            {
                city: 'Lahore',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '6310888',
                iso2: 'PK',
                capital: 'admin',
                lat: '31.549722',
                lng: '74.343611',
                population: '6577000'
            },
            {
                city: 'Faisalābād',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '2506595',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.416667',
                lng: '73.083333',
                population: '2617000'
            },
            {
                city: 'Serai',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '1860310',
                iso2: 'PK',
                capital: '',
                lat: '34.73933',
                lng: '72.335655',
                population: '1860310'
            },
            {
                city: 'Rāwalpindi',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '1743101',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.597331',
                lng: '73.047904',
                population: '1858000'
            },
            {
                city: 'Multān',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '1437230',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.196789',
                lng: '71.478241',
                population: '1522000'
            },
            {
                city: 'Gujrānwāla',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '1384471',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.155667',
                lng: '74.187052',
                population: '1513000'
            },
            {
                city: 'Hyderābād City',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '1386330',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.396891',
                lng: '68.377183',
                population: '1459000'
            },
            {
                city: 'Peshāwar',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '1218773',
                iso2: 'PK',
                capital: 'admin',
                lat: '34.008',
                lng: '71.578488',
                population: '1303000'
            },
            {
                city: 'Abbottābād',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '881000',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.1463',
                lng: '73.211684',
                population: '1183647'
            },
            {
                city: 'Islamabad',
                admin: 'Islāmābād',
                country: 'Pakistan',
                population_proper: '601600',
                iso2: 'PK',
                capital: 'primary',
                lat: '33.69',
                lng: '73.0551',
                population: '780000'
            },
            {
                city: 'Quetta',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '733675',
                iso2: 'PK',
                capital: 'admin',
                lat: '30.184138',
                lng: '67.00141',
                population: '768000'
            },
            {
                city: 'Bannu',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '550000',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.985414',
                lng: '70.602701',
                population: '622419'
            },
            {
                city: 'Bahāwalpur',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '552607',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.4',
                lng: '71.683333',
                population: '552607'
            },
            {
                city: 'Sargodha',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '542603',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.083611',
                lng: '72.671111',
                population: '542603'
            },
            {
                city: 'Siālkot City',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '477396',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.499101',
                lng: '74.52502',
                population: '477396'
            },
            {
                city: 'Sukkur',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '417767',
                iso2: 'PK',
                capital: 'minor',
                lat: '27.705164',
                lng: '68.857383',
                population: '417767'
            },
            {
                city: 'Lārkāna',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '364033',
                iso2: 'PK',
                capital: 'minor',
                lat: '27.558985',
                lng: '68.212035',
                population: '364033'
            },
            {
                city: 'Sheikhupura',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '361303',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.713056',
                lng: '73.978333',
                population: '361303'
            },
            {
                city: 'Mīrpur Khās',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '215657',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.5251',
                lng: '69.0159',
                population: '356435'
            },
            {
                city: 'Rahīmyār Khān',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '353203',
                iso2: 'PK',
                capital: '',
                lat: '28.419482',
                lng: '70.302386',
                population: '353203'
            },
            {
                city: 'Kohāt',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '151427',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.581958',
                lng: '71.449291',
                population: '343027'
            },
            {
                city: 'Jhang Sadr',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '341210',
                iso2: 'PK',
                capital: '',
                lat: '31.269811',
                lng: '72.316867',
                population: '341210'
            },
            {
                city: 'Gujrāt',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '301506',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.574204',
                lng: '74.075423',
                population: '301506'
            },
            {
                city: 'Bardār',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '300424',
                iso2: 'PK',
                capital: '',
                lat: '34.163737',
                lng: '72.011571',
                population: '300424'
            },
            {
                city: 'Kasūr',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '290643',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.115556',
                lng: '74.446667',
                population: '290643'
            },
            {
                city: 'Dera Ghāzi Khān',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '236093',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.056142',
                lng: '70.634766',
                population: '236093'
            },
            {
                city: 'Masīwāla',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '235695',
                iso2: 'PK',
                capital: '',
                lat: '30.683333',
                lng: '73.066667',
                population: '235695'
            },
            {
                city: 'Nawābshāh',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '229504',
                iso2: 'PK',
                capital: 'minor',
                lat: '26.248334',
                lng: '68.409554',
                population: '229504'
            },
            {
                city: 'Okāra',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '223648',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.808056',
                lng: '73.445833',
                population: '223648'
            },
            {
                city: 'Gilgit',
                admin: 'Gilgit-Baltistan',
                country: 'Pakistan',
                population_proper: '31633',
                iso2: 'PK',
                capital: 'minor',
                lat: '35.920007',
                lng: '74.313656',
                population: '216760'
            },
            {
                city: 'Chiniot',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '201781',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.72',
                lng: '72.978889',
                population: '201781'
            },
            {
                city: 'Sādiqābād',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '189876',
                iso2: 'PK',
                capital: '',
                lat: '28.30623',
                lng: '70.130646',
                population: '189876'
            },
            {
                city: 'Turbat',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '75694',
                iso2: 'PK',
                capital: 'minor',
                lat: '26.001224',
                lng: '63.048491',
                population: '147791'
            },
            {
                city: 'Dera Ismāīl Khān',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '31737',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.832691',
                lng: '70.902398',
                population: '101616'
            },
            {
                city: 'Chaman',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '88568',
                iso2: 'PK',
                capital: '',
                lat: '30.917689',
                lng: '66.45259',
                population: '88568'
            },
            {
                city: 'Zhob',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '50537',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.340817',
                lng: '69.449304',
                population: '88356'
            },
            {
                city: 'Mehra',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '66486',
                iso2: 'PK',
                capital: '',
                lat: '34.312817',
                lng: '73.220525',
                population: '66486'
            },
            {
                city: 'Parachinār',
                admin: 'Federally Administered Tribal Areas',
                country: 'Pakistan',
                population_proper: '55685',
                iso2: 'PK',
                capital: '',
                lat: '33.895672',
                lng: '70.098875',
                population: '55685'
            },
            {
                city: 'Gwādar',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '23364',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.12163',
                lng: '62.325411',
                population: '51901'
            },
            {
                city: 'Kundiān',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '35406',
                iso2: 'PK',
                capital: '',
                lat: '32.457747',
                lng: '71.478918',
                population: '35406'
            },
            {
                city: 'Shahdād Kot',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '27.847263',
                lng: '67.906789',
                population: ''
            },
            {
                city: 'Harīpur',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.999967',
                lng: '72.934093',
                population: ''
            },
            {
                city: 'Matiāri',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.59709',
                lng: '68.4467',
                population: ''
            },
            {
                city: 'Dera Allāhyār',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '28.373529',
                lng: '68.350778',
                population: ''
            },
            {
                city: 'Lodhrān',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.540507',
                lng: '71.63357',
                population: ''
            },
            {
                city: 'Batgrām',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.679637',
                lng: '73.026299',
                population: ''
            },
            {
                city: 'Thatta',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '24.747449',
                lng: '67.923528',
                population: ''
            },
            {
                city: 'Bāgh',
                admin: 'Azad Kashmir',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.981106',
                lng: '73.776084',
                population: ''
            },
            {
                city: 'Badīn',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '24.655995',
                lng: '68.836997',
                population: ''
            },
            {
                city: 'Mānsehra',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.330232',
                lng: '73.196788',
                population: ''
            },
            {
                city: 'Ziārat',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.382444',
                lng: '67.725624',
                population: ''
            },
            {
                city: 'Muzaffargarh',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.072576',
                lng: '71.193788',
                population: ''
            },
            {
                city: 'Tando Allāhyār',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.462626',
                lng: '68.719233',
                population: ''
            },
            {
                city: 'Dera Murād Jamāli',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '28.546568',
                lng: '68.223081',
                population: ''
            },
            {
                city: 'Karak',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.116334',
                lng: '71.093536',
                population: ''
            },
            {
                city: 'Mardan',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.197943',
                lng: '72.04965',
                population: ''
            },
            {
                city: 'Uthal',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.807222',
                lng: '66.621944',
                population: ''
            },
            {
                city: 'Nankāna Sāhib',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.4475',
                lng: '73.697222',
                population: ''
            },
            {
                city: 'Bārkhān',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.897727',
                lng: '69.525584',
                population: ''
            },
            {
                city: 'Hāfizābād',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.067857',
                lng: '73.685449',
                population: ''
            },
            {
                city: 'Kotli',
                admin: 'Azad Kashmir',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.518362',
                lng: '73.902203',
                population: ''
            },
            {
                city: 'Loralai',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.370512',
                lng: '68.597949',
                population: ''
            },
            {
                city: 'Dera Bugti',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.036188',
                lng: '69.158493',
                population: ''
            },
            {
                city: 'Jhang City',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.305684',
                lng: '72.325941',
                population: ''
            },
            {
                city: 'Sāhīwāl',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.666667',
                lng: '73.1',
                population: ''
            },
            {
                city: 'Sānghar',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '26.046558',
                lng: '68.9481',
                population: ''
            },
            {
                city: 'Pākpattan',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.341044',
                lng: '73.386642',
                population: ''
            },
            {
                city: 'Chakwāl',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.933376',
                lng: '72.858531',
                population: ''
            },
            {
                city: 'Khushāb',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.296667',
                lng: '72.3525',
                population: ''
            },
            {
                city: 'Ghotki',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '28.00604',
                lng: '69.316077',
                population: ''
            },
            {
                city: 'Kohlu',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.896505',
                lng: '69.253235',
                population: ''
            },
            {
                city: 'Khuzdār',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '27.738385',
                lng: '66.643365',
                population: ''
            },
            {
                city: 'Awārān',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '26.456768',
                lng: '65.231436',
                population: ''
            },
            {
                city: 'Nowshera',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.015828',
                lng: '71.981232',
                population: ''
            },
            {
                city: 'Chārsadda',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.148221',
                lng: '71.740604',
                population: ''
            },
            {
                city: 'Qila Abdullāh',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.728035',
                lng: '66.661174',
                population: ''
            },
            {
                city: 'Bahāwalnagar',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.998659',
                lng: '73.253604',
                population: ''
            },
            {
                city: 'Dādu',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '26.730334',
                lng: '67.776896',
                population: ''
            },
            {
                city: 'Alīābad',
                admin: 'Gilgit-Baltistan',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '36.307028',
                lng: '74.615449',
                population: ''
            },
            {
                city: 'Lakki Marwat',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.607953',
                lng: '70.911416',
                population: ''
            },
            {
                city: 'Chilās',
                admin: 'Gilgit-Baltistan',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '35.412867',
                lng: '74.104068',
                population: ''
            },
            {
                city: 'Pishin',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.581762',
                lng: '66.994061',
                population: ''
            },
            {
                city: 'Tānk',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.217071',
                lng: '70.383154',
                population: ''
            },
            {
                city: 'Chitrāl',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '35.851802',
                lng: '71.786358',
                population: ''
            },
            {
                city: 'Qila Saifullāh',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.700766',
                lng: '68.359843',
                population: ''
            },
            {
                city: 'Shikārpur',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '27.957057',
                lng: '68.637886',
                population: ''
            },
            {
                city: 'Panjgūr',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '26.971861',
                lng: '64.094594',
                population: ''
            },
            {
                city: 'Mastung',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.799656',
                lng: '66.845527',
                population: ''
            },
            {
                city: 'Kalāt',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.026629',
                lng: '66.593607',
                population: ''
            },
            {
                city: 'Gandāvā',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '28.613207',
                lng: '67.485643',
                population: ''
            },
            {
                city: 'Khānewāl',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.301731',
                lng: '71.932124',
                population: ''
            },
            {
                city: 'Nārowāl',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.1',
                lng: '74.883333',
                population: ''
            },
            {
                city: 'Khairpur',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '27.529483',
                lng: '68.761698',
                population: ''
            },
            {
                city: 'Malakand',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.565609',
                lng: '71.930432',
                population: ''
            },
            {
                city: 'Vihāri',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.033333',
                lng: '72.35',
                population: ''
            },
            {
                city: 'Saidu Sharif',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.746548',
                lng: '72.355675',
                population: ''
            },
            {
                city: 'Jhelum',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.934484',
                lng: '73.731018',
                population: ''
            },
            {
                city: 'Mandi Bahāuddīn',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.587037',
                lng: '73.491231',
                population: ''
            },
            {
                city: 'Bhakkar',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '31.625247',
                lng: '71.06574',
                population: ''
            },
            {
                city: 'Toba Tek Singh',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.974326',
                lng: '72.482694',
                population: ''
            },
            {
                city: 'Jāmshoro',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.436078',
                lng: '68.280172',
                population: ''
            },
            {
                city: 'Khārān',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '28.584585',
                lng: '65.415007',
                population: ''
            },
            {
                city: 'Umarkot',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.36157',
                lng: '69.736241',
                population: ''
            },
            {
                city: 'Hangu',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.53198',
                lng: '71.059499',
                population: ''
            },
            {
                city: 'Timargara',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.826595',
                lng: '71.844226',
                population: ''
            },
            {
                city: 'Gākuch',
                admin: 'Gilgit-Baltistan',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '36.176826',
                lng: '73.763834',
                population: ''
            },
            {
                city: 'Jacobābād',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '28.281873',
                lng: '68.437613',
                population: ''
            },
            {
                city: 'Alpūrai',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.920577',
                lng: '72.632556',
                population: ''
            },
            {
                city: 'Miānwāli',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '32.574095',
                lng: '71.526386',
                population: ''
            },
            {
                city: 'Mūsa Khel Bāzār',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.859443',
                lng: '69.82208',
                population: ''
            },
            {
                city: 'Naushahro Fīroz',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '26.840104',
                lng: '68.122651',
                population: ''
            },
            {
                city: 'New Mīrpur',
                admin: 'Azad Kashmir',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.147815',
                lng: '73.751867',
                population: ''
            },
            {
                city: 'Daggar',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.511059',
                lng: '72.484375',
                population: ''
            },
            {
                city: 'Eidgāh',
                admin: 'Gilgit-Baltistan',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '35.347115',
                lng: '74.856317',
                population: ''
            },
            {
                city: 'Sibi',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.542989',
                lng: '67.87726',
                population: ''
            },
            {
                city: 'Dālbandīn',
                admin: 'Balochistān',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '28.888456',
                lng: '64.406156',
                population: ''
            },
            {
                city: 'Rājanpur',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '29.103513',
                lng: '70.325038',
                population: ''
            },
            {
                city: 'Leiah',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '30.961279',
                lng: '70.939043',
                population: ''
            },
            {
                city: 'Upper Dir',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '35.207398',
                lng: '71.876801',
                population: ''
            },
            {
                city: 'Tando Muhammad Khān',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '25.123007',
                lng: '68.535773',
                population: ''
            },
            {
                city: 'Attock City',
                admin: 'Punjab',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.76671',
                lng: '72.359766',
                population: ''
            },
            {
                city: 'Rāwala Kot',
                admin: 'Azad Kashmir',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '33.857816',
                lng: '73.760426',
                population: ''
            },
            {
                city: 'Swābi',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.120181',
                lng: '72.46982',
                population: ''
            },
            {
                city: 'Kandhkot',
                admin: 'Sindh',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '28.243963',
                lng: '69.182354',
                population: ''
            },
            {
                city: 'Dasu',
                admin: 'Khyber Pakhtunkhwa',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '35.291687',
                lng: '73.290602',
                population: ''
            },
            {
                city: 'Athmuqam',
                admin: 'Azad Kashmir',
                country: 'Pakistan',
                population_proper: '',
                iso2: 'PK',
                capital: 'minor',
                lat: '34.571733',
                lng: '73.897236',
                population: ''
            }
        ];
    }
    return City;
}());

;


/***/ }),

/***/ "./src/app/routes/personalinfo.routing.ts":
/*!************************************************!*\
  !*** ./src/app/routes/personalinfo.routing.ts ***!
  \************************************************/
/*! exports provided: CertificatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesRoutingModule", function() { return CertificatesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_lazyloading_certificates_Birth_add_birth_add_birth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/lazyloading/certificates/Birth/add-birth/add-birth.component */ "./src/app/lazyloading/certificates/Birth/add-birth/add-birth.component.ts");
/* harmony import */ var app_lazyloading_certificates_Marriage_add_marriage_add_marriage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component */ "./src/app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component.ts");
/* harmony import */ var app_lazyloading_certificates_National_nationalid_nationalid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/lazyloading/certificates/National/nationalid/nationalid.component */ "./src/app/lazyloading/certificates/National/nationalid/nationalid.component.ts");
/* harmony import */ var app_lazyloading_certificates_certificatehome_certificatehome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/lazyloading/certificates/certificatehome/certificatehome.component */ "./src/app/lazyloading/certificates/certificatehome/certificatehome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: app_lazyloading_certificates_certificatehome_certificatehome_component__WEBPACK_IMPORTED_MODULE_6__["CertificatehomeComponent"], pathMatch: 'full' },
    { path: 'birth', component: app_lazyloading_certificates_Birth_add_birth_add_birth_component__WEBPACK_IMPORTED_MODULE_3__["AddBirthComponent"], pathMatch: 'full' },
    { path: 'nationalid', component: app_lazyloading_certificates_National_nationalid_nationalid_component__WEBPACK_IMPORTED_MODULE_5__["NationalidComponent"], pathMatch: 'full' },
    { path: 'marriage', component: app_lazyloading_certificates_Marriage_add_marriage_add_marriage_component__WEBPACK_IMPORTED_MODULE_4__["AddMarriageComponent"], pathMatch: 'full' }
];
var CertificatesRoutingModule = /** @class */ (function () {
    function CertificatesRoutingModule() {
    }
    CertificatesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CertificatesRoutingModule);
    return CertificatesRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=lazyloading-certificates-certificates-module.js.map