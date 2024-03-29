(function(exports) {

    /* THE BEGIN */

    var origin = "http://172.19.7.119";
    var originKey = "pub.v2.8015619772413112.aHR0cDovLzE3Mi4xOS43LjExOQ.TgwueXNgVEuNUUAsBc9ntLWyX9VlaLPO6KhvW0GRnCs";
    var genTime = "2019-07-08T12:10:19Z";
    var checkoutShopperUrl = "https://checkoutshopper-test.adyen.com/checkoutshopper/";
    var baseRequest = {
        token: originKey
    };

    var adyen = window.adyen = window.adyen || {};
    adyen.hooks = adyen.hooks || {};

    var noop = function() {};

    var shared = {},
        __define = noop,
        __require = noop;


    /* THE MIDDLE */
    "use strict";
    var chckt = window.chckt = window.chckt || {};
    chckt.cardBrand = null;
    chckt.nonConsolidatedCard = "";
    var noop = function() {
        return function() {};
    };
    var shared = {},
        define = noop,
        require = noop;
    var _b$dl = false;
    var __logVal = false;
    var __logVal2 = false;
    var __logIOSEvents = false;

    function makeAMD(c) {
        var d = c.__modules = {};

        function b(g, f) {
            if (!g) {
                return function() {};
            }
            if (typeof g === "string") {
                if (!d.hasOwnProperty(g)) {
                    throw new Error("Adyen Sequencing Exception. Module '" + g + "' is not yet defined");
                }
                return d[g];
            }
            var e = [];
            while (g.length > 0) {
                e.push(b(g.shift()));
            }
            if (typeof f === "function") {
                f.apply({}, e);
            }
            return e;
        }

        function a(f, h, g) {
            var e = b(h);
            if (typeof g === "function") {
                d[f] = g.apply({}, e);
            } else {
                d[f] = g;
            }
        }
        c.__require = b;
        c.__define = a;
    }
    makeAMD(shared);
    define = shared.__define || define;
    require = shared.__require || require;
    define("cardType", [], function() {
        var l;
        var A = {};
        A.__NO_BRAND = "noBrand";
        A.cards = [];
        var i = {
            cardType: "mc",
            startingRules: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
            permittedLengths: [16],
            pattern: /^(5[1-5][0-9]{0,14}|2[2-7][0-9]{0,14})$/,
            securityCode: "CVC"
        };
        A.cards.push(i);
        var y = {
            cardType: "visadankort",
            startingRules: [4571],
            permittedLengths: [16],
            pattern: /^(4571)[0-9]{0,12}$/
        };
        A.cards.push(y);
        var w = {
            cardType: "visa",
            startingRules: [4],
            permittedLengths: [13, 16, 19],
            pattern: /^4[0-9]{0,18}$/,
            securityCode: "CVV"
        };
        A.cards.push(w);
        var J = {
            cardType: "amex",
            startingRules: [34, 37],
            permittedLengths: [15],
            pattern: /^3[47][0-9]{0,13}$/,
            securityCode: "CID"
        };
        A.cards.push(J);
        var k = {
            cardType: "vias",
            startingRules: [9],
            permittedLengths: [16]
        };
        A.cards.push(k);
        var G = {
            cardType: "diners",
            startingRules: [36],
            permittedLengths: [14],
            pattern: /^(36)[0-9]{0,12}$/
        };
        A.cards.push(G);
        var n = {
            cardType: "maestrouk",
            startingRules: [6759],
            permittedLengths: [16, 18, 19],
            pattern: /^(6759)[0-9]{0,15}$/
        };
        A.cards.push(n);
        var I = {
            cardType: "solo",
            startingRules: [6767],
            permittedLengths: [16, 18, 19],
            pattern: /^(6767)[0-9]{0,15}$/
        };
        A.cards.push(I);
        var z = {
            cardType: "laser",
            startingRules: [6304, 6706, 677117, 677120],
            permittedLengths: [16, 17, 18, 19],
            pattern: /^(6304|6706|6709|6771)[0-9]{12,15}$/,
            cvcIsOptional: true
        };
        A.cards.push(z);
        var c = {
            cardType: "discover",
            startingRules: [6011, 644, 645, 646, 647, 648, 649, 65],
            permittedLengths: [16],
            pattern: /^(6011[0-9]{0,12}|(644|645|646|647|648|649)[0-9]{0,13}|65[0-9]{0,14})$/
        };
        A.cards.push(c);
        var j = {
            cardType: "jcb",
            startingRules: [3528, 3529, 353, 354, 355, 356, 357, 358],
            permittedLengths: [16, 19],
            pattern: /^(352[8,9]{1}[0-9]{0,15}|35[4-8]{1}[0-9]{0,16})$/,
            securityCode: "CAV"
        };
        A.cards.push(j);
        var e = {
            cardType: "bcmc",
            startingRules: [6703, 479658, 606005],
            permittedLengths: [16, 17, 18, 19],
            pattern: /^((6703)[0-9]{0,15}|(479658|606005)[0-9]{0,13})$/
        };
        A.cards.push(e);
        var p = {
            cardType: "bijcard",
            startingRules: [5100081],
            permittedLengths: [16],
            pattern: /^(5100081)[0-9]{0,9}$/
        };
        A.cards.push(p);
        var C = {
            cardType: "dankort",
            startingRules: [5019],
            permittedLengths: [16],
            pattern: /^(5019)[0-9]{0,12}$/
        };
        A.cards.push(C);
        var D = {
            cardType: "hipercard",
            startingRules: [606282],
            permittedLengths: [16],
            pattern: /^(606282)[0-9]{0,10}$/
        };
        A.cards.push(D);
        var d = {
            cardType: "maestro",
            startingRules: [50, 56, 57, 58, 6],
            permittedLengths: [16, 17, 18, 19],
            pattern: /^(5[0|6-8][0-9]{0,17}|6[0-9]{0,18})$/,
            cvcIsOptional: true
        };
        A.cards.push(d);
        var E = {
            cardType: "elo",
            startingRules: [506699, 50670, 50671, 50672, 50673, 50674, 50675, 50676, 506770, 506771, 506772, 506773, 506774, 506775, 506776, 506777, 506778, 401178, 438935, 451416, 457631, 457632, 504175, 627780, 636297, 636368, 651653, 506728, 509096, 509083, 509082, 655001, 650487, 509081, 509074, 509066, 431274, 438935, 457631, 457632, 506744, 506747, 506748, 506753, 509069, 650906, 506730, 509067, 655003, 509068],
            permittedLengths: [16],
            pattern: /^((((506699)|(506770)|(506771)|(506772)|(506773)|(506774)|(506775)|(506776)|(506777)|(506778)|(401178)|(438935)|(451416)|(457631)|(457632)|(504175)|(627780)|(636368)|(636297))[0-9]{0,10})|((50676)|(50675)|(50674)|(50673)|(50672)|(50671)|(50670))[0-9]{0,11})$/
        };
        A.cards.push(E);
        var x = {
            cardType: "uatp",
            startingRules: [1],
            permittedLengths: [15],
            pattern: /^1[0-9]{0,14}$/,
            cvcIsOptional: true
        };
        A.cards.push(x);
        var f = {
            cardType: "cup",
            startingRules: [62],
            permittedLengths: [14, 15, 16, 17, 18, 19],
            pattern: /^(62)[0-9]{0,17}$/
        };
        A.cards.push(f);
        var o = {
            cardType: "cartebancaire",
            startingRules: [4, 5, 6],
            permittedLengths: [16],
            pattern: /^[4-6][0-9]{0,15}$/
        };
        A.cards.push(o);
        var b = {
            cardType: "visaalphabankbonus",
            startingRules: [450903],
            permittedLengths: [16],
            pattern: /^(450903)[0-9]{0,10}$/
        };
        A.cards.push(b);
        var a = {
            cardType: "mcalphabankbonus",
            startingRules: [510099],
            permittedLengths: [16],
            pattern: /^(510099)[0-9]{0,10}$/
        };
        A.cards.push(a);
        var m = {
            cardType: "hiper",
            startingRules: [637095, 637599, 637609, 637612],
            permittedLengths: [16],
            pattern: /^(637095|637599|637609|637612)[0-9]{0,10}$/
        };
        A.cards.push(m);
        var s = {
            cardType: "oasis",
            startingRules: [982616],
            permittedLengths: [16],
            pattern: /^(982616)[0-9]{0,10}$/,
            cvcIsOptional: true
        };
        A.cards.push(s);
        var B = {
            cardType: "karenmillen",
            startingRules: [98261465],
            permittedLengths: [16],
            pattern: /^(98261465)[0-9]{0,8}$/,
            cvcIsOptional: true
        };
        A.cards.push(B);
        var u = {
            cardType: "warehouse",
            startingRules: [982633],
            permittedLengths: [16],
            pattern: /^(982633)[0-9]{0,10}$/,
            cvcIsOptional: true
        };
        A.cards.push(u);
        var F = {
            cardType: "mir",
            startingRules: [220],
            permittedLengths: [16, 17, 18, 19],
            pattern: /^(220)[0-9]{0,16}$/
        };
        A.cards.push(F);
        var h = {
            cardType: "codensa",
            startingRules: [590712],
            permittedLengths: [16],
            pattern: /^(590712)[0-9]{0,10}$/
        };
        A.cards.push(h);
        var r = {
            cardType: "naranja",
            startingRules: [377798, 377799, 402917, 402918, 527571, 527572, 589562],
            permittedLengths: [16, 17, 18, 19],
            pattern: /^(37|40|5[28])([279])\d*$/
        };
        A.cards.push(r);
        var q = {
            cardType: "cabal",
            startingRules: [589657, 600691, 603522, 6042, 6043, 636908],
            permittedLengths: [16, 17, 18, 19],
            pattern: /^(58|6[03])([03469])\d*$/
        };
        A.cards.push(q);
        var v = {
            cardType: "shopping",
            startingRules: [2799, 589407, 603488],
            permittedLengths: [16, 17, 18, 19],
            pattern: /^(27|58|60)([39])\d*$/
        };
        A.cards.push(v);
        var t = {
            cardType: "argencard",
            startingRules: [501105],
            permittedLengths: [16, 17, 18, 19],
            pattern: /^(50)(1)\d*$/
        };
        A.cards.push(t);
        var H = {
            cardType: "troy",
            startingRules: [9792],
            permittedLengths: [16],
            pattern: /^(97)(9)\d*$/
        };
        A.cards.push(H);
        var g = {
            cardType: "forbrugsforeningen",
            startingRules: [600722],
            permittedLengths: [16],
            pattern: /^(60)(0)\d*$/
        };
        A.cards.push(g);
        A.detectCard = function(L, P) {
            var N, O, K;
            if (P) {
                N = A.cards.filter(function(R) {
                    return P.includes(R.cardType);
                }).filter(function(R) {
                    return (R.hasOwnProperty("pattern") && L.match(R.pattern));
                });
                if (N.length) {
                    if (N.length === 1) {
                        return N[0];
                    }
                    for (O = 0, K = N.length; O < K; O++) {
                        if (!N[O].longestRule) {
                            var Q = N[O].startingRules.reduce(function(S, R) {
                                return S > R ? S : R;
                            });
                            N[O].longestRule = String(Q).length;
                        }
                    }
                    var M = N.reduce(function(S, R) {
                        return S.longestRule >= R.longestRule ? S : R;
                    });
                    return M;
                }
                return {
                    cardType: A.__NO_BRAND
                };
            }
            return {
                cardType: A.__NO_BRAND
            };
        };
        A.detectCardLength = function(T, P) {
            var L, O, U = 0,
                N = false,
                Q = false;
            var R = (T.cardType !== A.__NO_BRAND) ? T.permittedLengths[T.permittedLengths.length - 1] : 0;
            if (R && P > R) {
                U = P.length - R;
                if (U > 0) {
                    P = P.substring(0, (P.length - U));
                    O = P;
                }
            }
            T.permittedLengths.forEach(function(V) {
                if (P.length === V) {
                    N = true;
                }
            });
            if (P.length === R) {
                var K = Math.floor(P.length / 4);
                var S = P.length % 4;
                var M = (S > 0) ? K : K - 1;
                L = R + M;
                if (T.cardType.toLowerCase() === "amex") {
                    L = R + 2;
                }
                Q = true;
            }
            return {
                shortenedNewValue: O,
                maxLength: L,
                reachedValidLength: N,
                trimTrailingSpace: Q
            };
        };
        A.getShortestPermittedCardLength = function() {
            if (!l) {
                var K = [];
                A.cards.forEach(function(L) {
                    K = K.concat(L.permittedLengths);
                });
                l = Math.min.apply(null, K);
            }
            return l;
        };
        A.getCardByBrand = function(L) {
            var K = A.cards.filter(function(M) {
                return M.cardType === L;
            });
            return K[0];
        };
        return A;
    });
    define("luhnCheck", [], function() {
        var a = {};
        var b = {};
        a.checkNumber = function(c) {
            var l = c;
            if (isNaN(parseInt(l, 10))) {
                return false;
            }
            var d = l.length;
            var j = d & 1;
            var g = 0;
            if (typeof b[l] === "undefined") {
                for (var f = 0; f < d; f++) {
                    var k = parseInt(l.charAt(f), 10);
                    if (!((f & 1) ^ j)) {
                        k *= 2;
                        if (k > 9) {
                            k -= 9;
                        }
                    }
                    g += k;
                }
                if (g % 10 === 0) {
                    b[l] = true;
                } else {
                    b[l] = false;
                }
            }
            var h = 0;
            for (var e in b) {
                if (b.hasOwnProperty(e) && e.length === d) {
                    h++;
                }
            }
            return b[l];
        };
        return a;
    });
    define("Constants", [], function() {
        var a = {};
        a.__HOSTED_NUMBER_FIELD_STR = "encryptedCardNumber";
        a.__HOSTED_DATE_FIELD_STR = "encryptedExpiryDate";
        a.__HOSTED_MONTH_FIELD_STR = "encryptedExpiryMonth";
        a.__HOSTED_YEAR_FIELD_STR = "encryptedExpiryYear";
        a.__HOSTED_CVC_FIELD_STR = "encryptedSecurityCode";
        a.__EXPIRY_MONTH_STR = "expiryMonth";
        a.__EXPIRY_YEAR_STR = "expiryYear";
        return a;
    });
    "use strict";
    define("Util", [], function() {
        var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(c) {
            return typeof c;
        } : function(c) {
            return c && typeof Symbol === "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        };
        var b = {};
        b._isArray = function(c) {
            return (typeof c === "undefined" ? "undefined" : a(c)) === "object" && c !== null && Object.prototype.toString.call(c) === "[object Array]";
        };
        b._contains = function(d, e) {
            if (typeof d === "undefined") {
                return false;
            }
            if (typeof d === "string") {
                return d.indexOf(e) > -1;
            }
            if (b._isArray(d)) {
                for (var f = d.length; f-- > 0;) {
                    if (d[f] === e) {
                        return true;
                    }
                }
            }
            return d.hasOwnProperty && d.hasOwnProperty(e);
        };
        b._capitaliseFirstLetter = function(c) {
            return c.charAt(0).toUpperCase() + c.slice(1);
        };
        return b;
    });
    define("DOM", ["Util"], function(b) {
        var a = {};
        a._select = function(e, d) {
            if (!e) {
                return [];
            }
            if (typeof e.querySelectorAll === "function") {
                return [].slice.call(e.querySelectorAll(d));
            }
            var c = [];
            var g = e.querySelectorAll(d);
            for (var f = g.length; f--;) {
                c.unshift(g[f]);
            }
            return c;
        };
        a._selectOne = function(d, c) {
            if (!d) {
                return undefined;
            }
            return d.querySelector(c);
        };
        a._closest = function(d, c) {
            if (!Element.prototype.matches) {
                Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(f) {
                    var g = (this.document || this.ownerDocument).querySelectorAll(f),
                        e = g.length;
                    while (--e >= 0 && g.item(e) !== this) {}
                    return e > -1;
                };
            }
            for (; d && d !== document; d = d.parentNode) {
                if (d.matches(c)) {
                    return d;
                }
            }
            return null;
        };
        a._hasClass = function(d, c) {
            if (!d || !d.className) {
                return false;
            }
            return b._contains(d.className.split(/\s+/), c);
        };
        a._createEncryption = function(g, c, f) {
            var e = {
                enableValidations: true
            };
            e.randomBytes = c || null;
            e.stopDeviceFingerprint = f;
            var d = g.cse = g.cse || adyen.createEncryption(e);
            return d;
        };
        a._getEncryptedData = function(n, o, f, l) {
            var k = {},
                h = {};
            var j = n.getAttribute("data-encrypted-name");
            if (!j || j === "") {
                k.error = '"data-encrypted-name" attribute not set on node';
                return k;
            }
            h[j] = n.value;
            var g = n.cse;
            if (!g) {
                if (window.console && window.console.warn) {
                    window.console.warn("No Encryption object exists for this html node. Encryption will not be possible. node=", n);
                }
            }
            var d = g.validate(h);
            h.generationtime = f;
            try {
                var m = g.encrypt(h, l);
                if (m === "false" || m === false) {
                    if (d.hasOwnProperty("luhn")) {
                        k.luhn = false;
                    } else {
                        if (d.hasOwnProperty("cvc")) {
                            k.cvc = false;
                        } else {
                            if (d.hasOwnProperty("year")) {
                                k.date = false;
                            }
                        }
                    }
                    k.encryptionSuccess = false;
                } else {
                    k.encryptionSuccess = true;
                    k[o] = m;
                }
            } catch (i) {
                var c = String(i);
                if (c && c.toLowerCase().indexOf("not ready") > -1 && c.toLowerCase().indexOf("seeded") > -1) {
                    if (window.console && window.console.warn) {
                        window.console.warn("### DOM::_getEncryptedData:: IE error!!!!! Not enough entropy generated to allow encryption process");
                    }
                }
            }
            return k;
        };
        a._getAttribute = function(d, c) {
            if (!d) {
                return;
            }
            return d.getAttribute(c) || "";
        };
        a._on = function(e, d, f, c) {
            if (typeof e.addEventListener === "function") {
                e.addEventListener(d, f, c);
            } else {
                if (e.attachEvent) {
                    e.attachEvent("on" + d, f);
                } else {
                    throw new Error(": Unable to bind " + d + "-event");
                }
            }
        };
        a._getEventTarget = function(d) {
            if (!d) {
                d = window.event || {};
            }
            var c = d.target || d.srcElement || {};
            if (c.nodeType === 3) {
                c = c.parentNode;
            }
            return c;
        };
        a._getNodeAndId = function(d) {
            var c = a._getEventTarget(d);
            var f = a._getAttribute(c, "id");
            return {
                node: c,
                id: f
            };
        };
        return a;
    });
    define("fireEvent", [], function() {
        var a = function(c, b) {
            c.fireEvent = function(d, g) {
                var f;
                try {
                    f = new Event(g);
                } catch (h) {
                    if (document.createEvent) {
                        f = document.createEvent("Event");
                        f.initEvent(g, false, false);
                    } else {
                        d.fireEvent("on" + g);
                        return;
                    }
                }
                d.dispatchEvent(f);
            };
            return c;
        };
        return a;
    });
    define("validationUtils", [], function() {
        function b() {
            var d = navigator.userAgent.toLowerCase();
            return (d.indexOf("msie") !== -1) ? parseInt(d.split("msie")[1]) : false;
        }
        var c = {};
        c.__DELETE_OR_BACKSPACE = "delete";
        c.__X_KEY = "xKeyPressed";
        c.__IS_ANDROID = /(android)/i.test(navigator.userAgent);
        c.__IS_IE = b();
        c.__IS_IPHONE = /iphone|ipod|ipad/i.test(navigator.userAgent);
        c.__IS_FIREFOX = /(firefox)/i.test(navigator.userAgent);
        c.handleKeyPress = function(d) {
            if ((__logVal || __logVal2) && window.console && window.console.log) {}
            if (d.key !== undefined) {
                return a(d.key, "key");
            } else {
                if (d.code !== undefined && d.code !== "") {
                    return a(d.code, "code");
                } else {
                    if (d.keyCode >= 0) {
                        return a(d.keyCode, "keyCode");
                    } else {
                        if (d.which !== undefined) {
                            return a(d.which, "which");
                        }
                    }
                }
            }
            return false;
        };
        var a = function(e, d) {
            switch (d) {
                case "key":
                case "code":
                    if (e === "Backspace" || e === "Delete") {
                        return c.__DELETE_OR_BACKSPACE;
                    }
                    if (e === "ArrowLeft") {
                        return "leftarrow";
                    }
                    if (e === "ArrowRight") {
                        return "rightarrow";
                    }
                    if (e === " " || e === "Space") {
                        return "space";
                    }
                    if (e === "Shift" || e === "ShiftRight" || e === "ShiftLeftt") {
                        return "shift";
                    }
                    if (e === "Unidentified") {
                        return "androidkeystroke";
                    }
                    return e;
                case "keyCode":
                case "which":
                    if (e === 8 || e === 46) {
                        return c.__DELETE_OR_BACKSPACE;
                    }
                    if (e === 37) {
                        return "leftarrow";
                    }
                    if (e === 39) {
                        return "rightarrow";
                    }
                    if (e === 32) {
                        return "space";
                    }
                    if (e === 16) {
                        return "shift";
                    }
                    if (e === 229) {
                        return "androidkeystroke";
                    }
                    return String.fromCharCode(e);
                default:
                    return e;
            }
        };
        c.getNextValue = function(f, k, i, j) {
            var h, g;
            var e = k + i;
            var d = c.getCaretPos(f);
            if (d !== f.value.length) {
                h = k.substring(0, d);
                g = k.substring(d + j.length);
                e = h + i + g;
            }
            return e;
        };
        c.getCaretPos = function(e, j) {
            var h = (j === true) ? "selectionEnd" : "selectionStart";
            var d = "EndToStart";
            if (h in e) {
                return e[h];
            } else {
                if (document.selection) {
                    e.focus();
                    var g = document.selection.createRange();
                    if (g === null) {
                        return 0;
                    }
                    var f = e.createTextRange(),
                        i = f.duplicate();
                    f.moveToBookmark(g.getBookmark());
                    i.setEndPoint(d, f);
                    return i.text.length;
                }
            }
            return 0;
        };
        c.setSelectionRange = function(g, f, e) {
            var d, h = e || f;
            if (g.setSelectionRange) {
                g.focus();
                g.setSelectionRange(f, h);
            } else {
                if (g.createTextRange) {
                    d = g.createTextRange();
                    d.collapse(true);
                    d.moveEnd("character", h);
                    d.moveStart("character", f);
                    d.select();
                }
            }
        };
        c.hasSelectedText = function(d, e) {
            var f = "";
            if ("selectionStart" in d) {
                f = d.value.substring(d.selectionStart, d.selectionEnd);
            } else {
                if (document.selection) {
                    f = document.selection.createRange().text;
                }
            }
            return (e) ? f : f.length;
        };
        return c;
    });
    define("validationsCCNumber", ["validationUtils", "cardType", "luhnCheck"], function(b, f, h) {
        var l = {};
        var m = false;
        var v = false;
        var n = "";
        var o = " ";
        var i = false;
        var d = "";
        var r;
        var e = 0;
        var s = "";
        var q = function(y) {
                var z = "$1" + o;
                var x = "$1" + o + "$2" + o;
                var w = y.replace(/(\d{4})/g, z);
                if (i) {
                    if (y.length >= 8) {
                        w = y.replace(/(\d{4})/, z);
                    }
                    if (y.length >= 10) {
                        w = y.replace(/(\d{4})(\d{6})/g, x);
                    }
                }
                return w;
            },
            a = function(x) {
                var w = x.replace(/[^\d]/g, "");
                return w;
            },
            p = function(w) {
                var x = 0;
                if (!i) {
                    x = Math.floor(w / 5);
                } else {
                    if (w >= 5) {
                        x = 1;
                    }
                    if (w >= 12) {
                        x = 2;
                    }
                }
                return x;
            },
            k = function(w) {
                return w.charAt(w.length - 1);
            },
            u = function(w) {
                return w.substr(0, w.length - 1);
            };
        l.keyDownCCNumber = function(y, x) {
            d = x.value;
            r = b.getCaretPos(x, true);
            var w = b.handleKeyPress(y);
            v = (w === b.__DELETE_OR_BACKSPACE);
            n = w;
        };
        l.inputCC = function(C, I, H) {
            m = false;
            var w = I.value,
                E = a(w),
                x, B = false,
                D = false,
                K = false;
            e = void 0;
            var J = H || [];
            var A = {};
            if (v && E === a(d)) {
                K = true;
            }
            var z, F;
            if (chckt.nonConsolidatedCard !== "") {
                z = f.getCardByBrand(chckt.nonConsolidatedCard);
                F = f.detectCard(E.substr(0, 7), J);
                if (window.__logVal2 && window.console && window.console.log) {}
                if (E.length > 7) {
                    if (F.cardType !== z.cardType) {
                        A = t(true, I, "Typed card number doesn't match card type", A);
                        z = {
                            cardType: f.__NO_BRAND
                        };
                        if (window.__logVal2 && window.console && window.console.log) {}
                    }
                }
            } else {
                z = f.detectCard(E.substr(0, 7), J);
            }
            i = (z.cardType.toLowerCase() === "amex");
            x = q(E);
            e = r - p(r) + p(r + (x.length - d.length)) + (a(x).length - a(d).length);
            I.maxLength = 24;
            if (z.cardType !== f.__NO_BRAND) {
                var y = f.detectCardLength(z, E);
                x = (y.shortenedNewValue) ? q(y.shortenedNewValue) : x;
                I.maxLength = y.maxLength || I.maxLength;
                B = y.reachedValidLength;
                D = y.trimTrailingSpace;
                A = t(false, I, "", A);
                A = g(z.cardType, I, H, z.cvcIsOptional || false, A);
                A = c(z.cardType, I, H, z.securityCode, A);
            } else {
                if (chckt.nonConsolidatedCard === "") {
                    A = j(I, J, A);
                    A = t(false, I, "", A);
                    if (E.length >= f.getShortestPermittedCardLength()) {
                        B = true;
                    }
                } else {
                    if (window.__logVal2 && window.console && window.console.log) {}
                }
            }
            if (B) {
                m = true;
            }
            if (x !== "") {
                if (v && e === x.length && k(x) === o) {
                    x = u(x);
                }
                if (D && k(x) === o) {
                    x = u(x);
                }
                I.value = x;
            } else {
                I.value = "";
                A = t(false, I, "", A);
                A = j(I, J, A);
                A.action = n;
            }
            if (K) {
                e -= 1;
            }
            if (e < 0) {
                e = 0;
            }
            if (e || v && e === 0) {
                b.setSelectionRange(I, e);
            }
            if (n.length === 1 && typeof parseInt(n) === "number") {
                n = "numberKeyPressed";
            }
            A.action = n;
            var G = a(x).substr(0, 6);
            if (s !== G) {
                A.binValue = G;
                s = G;
            }
            return A;
        };
        l.keyUpCCNumberIE = function(z, y, x) {
            if (v && b.__IS_IE && b.__IS_IE === 9) {
                return l.inputCC(z, y, x);
            }
            if (b.__IS_IE && b.__IS_IE === 8) {
                var w = b.handleKeyPress(z);
                if (w === "leftarrow" || w === "rightarrow" || w === "shift") {
                    return null;
                }
                return l.inputCC(z, y, x);
            }
            return null;
        };
        l.keyUpCCNumber = function(x, w) {
            if (e === w.value.length) {
                b.setSelectionRange(w, e);
            }
        };
        l.isValidLength = function(z, x) {
            var w = a(z.value);
            var y = f.detectCard(w, x);
            var A = false;
            if (y.cardType !== f.__NO_BRAND) {
                y.permittedLengths.forEach(function(B) {
                    if (w.length === B) {
                        A = true;
                    }
                });
            } else {
                if (w.length >= f.getShortestPermittedCardLength()) {
                    A = true;
                }
            }
            return A;
        };
        l.doLuhnCheck = function(A, y) {
            var C;
            var x = a(A.value);
            var B = l.isValidLength(A, y);
            if (B) {
                var z = h.checkNumber(x);
                var w = (z) ? "" : "luhn check failed";
                C = {
                    action: "luhnCheck",
                    error: w,
                    valid: z
                };
            }
            return C;
        };
        l.getIsValidCardNumber = function() {
            return m;
        };
        var t = function(x, w, A, y) {
            var z = Object.assign({}, y);
            z.error = A;
            return z;
        };
        var j = function(x, w, y) {
            var z = Object.assign({}, y);
            z = g(null, x, w, false, z);
            z = c(null, x, w, null, z);
            return z;
        };
        var g = function(y, z, x, w, A) {
            var B = Object.assign({}, A);
            if (!x) {
                return B;
            }
            if (x.length === 1) {
                B.brand = y;
                return B;
            }
            var C = "card@2x.png";
            if (y !== null) {
                C = y + "@2x.png";
            }
            B.brand = y || "card";
            B.imageSrc = C;
            B.cvcIsOptional = w;
            return B;
        };
        var c = function(x, y, w, B, z) {
            var A = Object.assign({}, z);
            if (!w || w.length === 1) {
                return A;
            }
            A.maxLength = 3;
            A.cvcText = (B) ? B : "Security_code";
            if (x === "amex") {
                A.maxLength = 4;
            }
            return A;
        };
        return l;
    });
    define("validationsCCDate", ["validationUtils"], function(c) {
        var u = false;
        var n = "";
        var k = false;
        var o = "/";
        var h = "";
        var r;
        var i = 0;
        var f = 0;
        var g = false;
        var q = function(x) {
            var v = x.substr(0, 2);
            var w = x.substr(2, 4);
            if (__logVal2 && window.console && window.console.log) {}
            return (v.length) ? v + o + w : "";
        };
        var b = function(y) {
            var w = y.split(o);
            var v = [];
            w.forEach(function(z) {
                if (z !== "") {
                    var A = z.replace(/[^\d]/g, "");
                    v.push(A);
                }
            });
            if (v.length === 2) {
                if (v[0].length === 1) {
                    var x = v[1].substr(0, 1);
                    v[0] = v[0] + x;
                    v[1] = v[1].substr(1);
                    if (__logVal2 && window.console && window.console.log) {}
                    f = 2;
                }
            }
            return v;
        };
        var p = function(v) {
            var w = Math.floor(v / 3);
            return w;
        };
        var l = function(v) {
            return v.charAt(v.length - 1);
        };
        var d = function(x, w) {
            var v = w || 1;
            return x.substr(0, x.length - v);
        };
        var m = function(v) {
            return r - p(r) + p(r + (v.length - h.length)) + (b(v).join("").length - b(h).join("").length);
        };
        var j = {};
        j.keyDownDate = function(x, w) {
            h = w.value;
            r = c.getCaretPos(w, true);
            var v = c.handleKeyPress(x);
            u = (v === c.__DELETE_OR_BACKSPACE);
            n = v;
            if (__logVal2 && window.console && window.console.log) {}
        };
        j.inputDate = function(J, w) {
            var H = w.value,
                x = b(H),
                F;
            i = void 0;
            k = false;
            g = false;
            if (h.length === 1 && l(H) === o) {
                g = true;
            }
            var z = {};
            var C = e(genTime);
            var K, I, E, y, M, v;
            K = x[0] || "";
            I = x[1] || "";
            if (K.length > 2) {
                I = K.substr(2) + I;
                I = I.substr(0, 2);
                K = K.substr(0, 2);
                if (__logVal2 && window.console && window.console.log) {}
            }
            y = Number(K);
            if (K.length === 1) {
                if (__logVal2 && window.console && window.console.log) {}
                if ((y >= 2 && y <= 9) || g) {
                    K = "0" + y;
                    if (__logVal2 && window.console && window.console.log) {}
                }
            }
            if (K.length === 2) {
                if (__logVal2 && window.console && window.console.log) {}
                if (y === 0) {
                    K = "01";
                }
                if (y > 12) {
                    if (__logVal2 && window.console && window.console.log) {}
                    I = K.substr(1) + I;
                    I = I.substr(0, 2);
                    K = "0" + K.substr(0, 1);
                }
            }
            if (__logVal2 && window.console && window.console.log) {}
            if (I) {
                if (I.length === 2) {
                    var L = C.getFullYear();
                    E = "20" + I;
                    v = Number(E);
                    M = Number(K);
                    var D = new Date(v, M - 1);
                    var A = C.setMonth(C.getMonth() - 3);
                    if (D.getTime() < A) {
                        F = q(K + I);
                        w.value = F;
                        z = t(true, w, "validateExpiryDate: card too old", z);
                        z.action = a(n);
                        return z;
                    }
                    if (__logVal2 && window.console && window.console.log) {}
                    if (v > L + 15) {
                        F = q(K + I);
                        w.value = F;
                        z = t(true, w, "validateExpiryDate: expiryDate too far in future", z);
                        z.action = a(n);
                        return z;
                    }
                }
            }
            F = q(K + I);
            if (__logVal2 && window.console && window.console.log) {}
            if (F.length === 2 && l(F) === o) {
                F = d(F, 1);
                if (__logVal2 && window.console && window.console.log) {}
            }
            i = m(F);
            if (F !== "") {
                if (u && c.getCaretPos(w) === H.length) {
                    if (c.getCaretPos(w) === 2) {
                        if (__logVal2 && window.console && window.console.log) {}
                        F = d(F, 2);
                        i = m(F);
                    }
                }
            }
            z = t(false, w, "", z);
            w.value = F;
            if (f) {
                i = f;
                c.setSelectionRange(w, i);
                f = 0;
                if (__logVal2 && window.console && window.console.log) {}
            }
            if (F.length === 5) {
                k = true;
            }
            x = b(F);
            var B = (x[0] && x[0].length === 2) ? x[0] : "";
            var G = (x[1] && x[1].length === 2) ? "20" + x[1] : "";
            s(w, B, G);
            u = false;
            z.action = a(n);
            return z;
        };
        j.keyUpDateIE = function(x, w) {
            if (u && c.__IS_IE && c.__IS_IE === 9) {
                return j.inputDate(x, w);
            }
            if (c.__IS_IE && c.__IS_IE === 8) {
                var v = c.handleKeyPress(x);
                if (v === "leftarrow" || v === "rightarrow" || v === "shift") {
                    return null;
                }
                return j.inputDate(x, w);
            }
            return null;
        };
        j.keyUpDateAndroid = function(w, v) {
            if (i === v.value.length) {
                c.setSelectionRange(v, i);
            }
        };
        j.getIsValidExpiryDate = function() {
            return k;
        };
        var e = function(z) {
            var w = new Date(z);
            if (isNaN(w)) {
                if (__logVal2 && window.console && window.console.log) {}
                var y = genTime.substring(0, genTime.length - 1);
                var v = y.split("T");
                y = v[0].split("-");
                var x = v[1].split(":");
                w = new Date(y[0], (y[1] - 1), y[2], x[0], x[1], x[2]);
            }
            return w;
        };
        var t = function(w, v, z, x) {
            var y = Object.assign({}, x);
            y.error = z;
            return y;
        };
        var s = function(x, w, v) {
            var y = x.parentNode.getElementsByTagName("input");
            [].forEach.call(y, function(z) {
                if (z.getAttribute("data-encrypted-name") === "expiryMonth") {
                    z.value = w;
                }
                if (z.getAttribute("data-encrypted-name") === "expiryYear" && typeof v !== "undefined") {
                    z.value = v;
                }
            });
        };
        var a = function(v, x) {
            var w = x || "date";
            if (v.length === 1 && typeof parseInt(v) === "number") {
                return w + "KeyPressed";
            }
            return v;
        };
        return j;
    });
    define("validationsCCMonth", ["validationUtils"], function(i) {
        var c = false;
        var g = "";
        var f = false;
        var a = "";
        var b = function(k) {
            var j = k.replace(/[^\d]/g, "");
            return j;
        };
        var e = {};
        e.keyDownMonth = function(l, k) {
            a = k.value;
            var j = i.handleKeyPress(l);
            c = (j === i.__DELETE_OR_BACKSPACE);
            g = j;
            if (__logVal2 && window.console && window.console.log) {}
        };
        e.inputMonth = function(p, l) {
            var j = l.value,
                k = b(j),
                o;
            f = false;
            var q = {};
            if (__logVal2 && window.console && window.console.log) {}
            var m = k;
            var n = Number(m);
            if (m.length === 1) {
                if (__logVal2 && window.console && window.console.log) {}
                if ((n >= 2 && n <= 9)) {
                    m = "0" + n;
                    if (__logVal2 && window.console && window.console.log) {}
                }
            }
            if (m.length === 2) {
                if (__logVal2 && window.console && window.console.log) {}
                if (n === 0) {
                    m = "01";
                }
                if (n > 12) {
                    if (__logVal2 && window.console && window.console.log) {}
                    m = "0" + m.substr(0, 1);
                }
            }
            o = m;
            if (__logVal2 && window.console && window.console.log) {}
            q = h(false, l, "", q);
            l.value = o;
            if (o.length === 2) {
                f = true;
            }
            q.action = d(g, "month");
            return q;
        };
        e.keyUpMonthIE = function(l, k) {
            if (c && i.__IS_IE && i.__IS_IE === 9) {
                return e.inputMonth(l, k);
            }
            if (i.__IS_IE && i.__IS_IE === 8) {
                var j = i.handleKeyPress(l);
                if (j === "leftarrow" || j === "rightarrow" || j === "shift") {
                    return null;
                }
                return e.inputMonth(l, k);
            }
            return null;
        };
        e.getIsValidExpiryMonth = function() {
            return f;
        };
        var h = function(k, j, n, l) {
            var m = Object.assign({}, l);
            m.error = n;
            return m;
        };
        var d = function(j, l) {
            var k = l || "date";
            if (j.length === 1 && typeof parseInt(j) === "number") {
                return k + "KeyPressed";
            }
            return j;
        };
        return e;
    });
    define("validationsCCYear", ["validationUtils"], function(l) {
        var c = false;
        var g = "";
        var h = false;
        var a = "";
        var b = function(o) {
            var n = o.replace(/[^\d]/g, "");
            return n;
        };
        var j = function(n) {
            return n.charAt(n.length - 1);
        };
        var f = function(p, o) {
            var n = o || 1;
            return p.substr(0, p.length - n);
        };
        var e = {};
        e.keyDownYear = function(p, o) {
            a = o.value;
            var n = l.handleKeyPress(p);
            c = (n === l.__DELETE_OR_BACKSPACE);
            g = n;
            if (__logVal2 && window.console && window.console.log) {}
        };
        e.inputYear = function(t, w) {
            var n = w.value,
                v = b(n),
                o;
            h = false;
            var u = {};
            var p = m(genTime);
            if (__logVal2 && window.console && window.console.log) {}
            var x, y;
            var s = v;
            if (__logVal2 && window.console && window.console.log) {}
            if (s) {
                if (s.length === 2) {
                    var q = p.getFullYear();
                    x = "20" + s;
                    y = Number(x);
                    if (__logVal2 && window.console && window.console.log) {}
                    if (y <= p.getFullYear() - 2) {
                        u = i(true, w, "validateExpiryDate: card too old", u);
                        u.action = d(g, "year");
                        return u;
                    }
                    if (y > q + 15) {
                        u = i(true, w, "validateExpiryDate: expiryDate too far in future", u);
                        u.action = d(g);
                        return u;
                    }
                }
            }
            o = s;
            if (__logVal2 && window.console && window.console.log) {}
            u = i(false, w, "", u);
            w.value = o;
            if (o.length === 2) {
                h = true;
            }
            var r = (x) ? x : "";
            k(w, r);
            u.action = d(g, "year");
            return u;
        };
        e.keyUpYearIE = function(p, o) {
            if (c && l.__IS_IE && l.__IS_IE === 9) {
                return e.inputYear(p, o);
            }
            if (l.__IS_IE && l.__IS_IE === 8) {
                var n = l.handleKeyPress(p);
                if (n === "leftarrow" || n === "rightarrow" || n === "shift") {
                    return null;
                }
                return e.inputYear(p, o);
            }
            return null;
        };
        e.getIsValidExpiryYear = function() {
            return h;
        };
        var m = function(r) {
            var o = new Date(r);
            if (isNaN(o)) {
                if (__logVal2 && window.console && window.console.log) {}
                var q = genTime.substring(0, genTime.length - 1);
                var n = q.split("T");
                q = n[0].split("-");
                var p = n[1].split(":");
                o = new Date(q[0], (q[1] - 1), q[2], p[0], p[1], p[2]);
            }
            return o;
        };
        var i = function(o, n, r, p) {
            var q = Object.assign({}, p);
            q.error = r;
            return q;
        };
        var k = function(o, n) {
            var p = document.getElementById("expiryYear");
            if (typeof n !== "undefined") {
                p.value = n;
            }
        };
        var d = function(n, p) {
            var o = p || "date";
            if (n.length === 1 && typeof parseInt(n) === "number") {
                return o + "KeyPressed";
            }
            return n;
        };
        return e;
    });
    define("validationsCCSecurityCode", ["validationUtils"], function(h) {
        var a;
        var d = false;
        var e = "";
        var g = true;
        var i;
        var b = function(k) {
            var j = k.replace(/[^\d]/g, "");
            return j;
        };
        var c = {};
        c.keyDownCVC = function(l, k) {
            a = k.value;
            var j = h.handleKeyPress(l);
            d = (j === h.__DELETE_OR_BACKSPACE);
            e = j;
        };
        c.inputCVC = function(n, l) {
            var j = l.value,
                k = b(j),
                m;
            var o = c.testCVC(l);
            if (__logVal2 && window.console && window.console.log) {}
            m = k;
            l.value = m;
            return o;
        };
        c.testCVC = function(k) {
            g = false;
            var n = {};
            var l;
            var j = (chckt.cardBrand) ? chckt.cardBrand : "";
            var m = j.indexOf(i);
            j = (m > -1) ? j.substring(0, m) : j;
            switch (j) {
                case null:
                case "":
                case "card":
                    l = /^\d{3,4}$/;
                    break;
                case "amex":
                    l = /^\d{4}$/;
                    break;
                default:
                    l = /^\d{3}$/;
            }
            if (l.test(k.value)) {
                g = true;
            }
            n = f(k, "", n);
            n.action = "keyPressed";
            return n;
        };
        c.keyUpCVCNumberIE = function(l, k) {
            if (d && h.__IS_IE && h.__IS_IE === 9) {
                return c.inputCVC(l, k);
            }
            if (h.__IS_IE && h.__IS_IE === 8) {
                var j = h.handleKeyPress(l);
                if (j === "leftarrow" || j === "rightarrow" || j === "shift") {
                    return null;
                }
                return c.inputCVC(l, k);
            }
            return null;
        };
        c.getIsValidCvcNumber = function() {
            return g;
        };
        c.setRecurringCardIndicator = function(j) {
            i = j;
        };
        var f = function(j, m, k) {
            var l = Object.assign({}, k);
            l.error = m;
            return l;
        };
        return c;
    });
    define("processStyles", [], function() {
        var d = {};
        var h = function() {};
        var a = {
            background: "background",
            color: "color",
            display: "display",
            font: "font",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontSmoothing: "font-smoothing",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontVariantAlternates: "font-variant-alternates",
            fontVariantCaps: "font-variant-caps",
            fontVariantEastAsian: "font-variant-east-asian",
            fontVariantLigatures: "font-variant-ligatures",
            fontVariantNumeric: "font-variant-numeric",
            fontWeight: "font-weight",
            letterSpacing: "letter-spacing",
            lineHeight: "line-height",
            mozOsxFontSmoothing: "moz-osx-font-smoothing",
            mozTransition: "moz-transition",
            outline: "outline",
            opacity: "opacity",
            padding: "padding",
            textAlign: "text-align",
            textShadow: "text-shadow",
            transition: "transition",
            webkitFontSmoothing: "webkit-font-smoothing",
            webkitTransition: "webkit-transition"
        };
        var g = {
            base: ".input-field",
            error: ".chckt-input-field--error",
            validated: ".chckt-input-field--validated",
            placeholder: {
                0: ".input-field::placeholder",
                1: ".input-field::-webkit-input-placeholder",
                2: ".input-field:placeholder-shown"
            },
            "::msclear": {
                0: ".input-field::ms-clear"
            }
        };
        d.process = function(j) {
            if (j) {
                var i = e(j);
                (!i) ? c(j): h();
            }
        };
        var e = function(j) {
            var n = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
            var m = false;
            for (var l in j) {
                if (j.hasOwnProperty(l)) {
                    var k = j[l];
                    if (k) {
                        for (var q in k) {
                            if (k.hasOwnProperty(q)) {
                                var p = k[q];
                                if (n.test(p) === true) {
                                    m = true;
                                }
                            }
                        }
                    }
                }
            }
            if (m === true) {
                return true;
            } else {
                return false;
            }
        };
        var c = function(u) {
            var s = Object.keys(u);
            for (var q = 0; q < s.length; q++) {
                var l = s[q],
                    w = [],
                    p = Object.keys(u[l]),
                    m = [];
                for (var k in u[l]) {
                    if (u[l].hasOwnProperty(k)) {
                        m.push(u[l][k]);
                    }
                }
                for (var n = 0; n < p.length; n++) {
                    var j = p[n];
                    var v = m[n];
                    var r = a[j];
                    if (r) {
                        var t = r + ":" + v + ";";
                        w.push(t);
                    } else {}
                }
                if (g[l] && w) {
                    f(w, g[l]);
                }
            }
        };
        var f = function(i, k) {
            var l = i.join("");
            var j = (function() {
                var m = document.createElement("style");
                m.appendChild(document.createTextNode(""));
                document.head.appendChild(m);
                return m.sheet;
            })();
            b(j, k, l);
        };
        var b = function(l, i, m) {
            if (typeof i === "object") {
                for (var k in i) {
                    if (i[k]) {
                        if (l.insertRule) {
                            try {
                                l.insertRule(i[k] + " {" + m + "}", 0);
                            } catch (j) {}
                        } else {
                            l.addRule(i[k], m, -1);
                        }
                    }
                }
            } else {
                if (l.insertRule) {
                    try {
                        l.insertRule(i + "{" + m + "}", 0);
                    } catch (j) {}
                } else {
                    l.addRule(i, m, -1);
                }
            }
        };
        return d;
    });
    define("processPlaceholders", ["Constants"], function(c) {
        var d = {};
        var e;
        var b;
        d.process = function(f, g, h) {
            if (g === c.__HOSTED_CVC_FIELD_STR) {
                a((f.placeholder || ""));
            }
            if (h) {
                if (h.hasOwnProperty(g)) {
                    f.placeholder = h[g];
                    if (g === c.__HOSTED_CVC_FIELD_STR && h.hasOwnProperty(c.__HOSTED_CVC_FIELD_STR)) {
                        a(h[g]);
                    }
                }
            }
        };
        var a = function(g) {
            var f = g + g.substr(0, 1);
            e = f.substr(0, 4);
            b = e.substr(0, 3);
        };
        d.setCvcPlaceholder = function(f, g) {
            if (g === "amex") {
                f.placeholder = e;
                return;
            }
            f.placeholder = b;
        };
        return d;
    });
    define("setErrors", [], function() {
        var a = {};
        a.set = function(e, d, f) {
            var b = (typeof f === "undefined") ? d : f;
            if (d && e.className.indexOf("js-chckt-input-field-error") === -1) {
                e.className += " chckt-input-field--error";
                e.className += " js-chckt-input-field-error";
                return;
            }
            if (b) {
                return;
            }
            var c;
            if (e.className.indexOf("js-chckt-input-field-error") > -1) {
                c = e.className.replace("chckt-input-field--error", "");
                e.className = c.trim();
                c = e.className.replace("js-chckt-input-field-error", "");
                e.className = c.trim();
            }
        };
        return a;
    });
    define("setValidated", [], function() {
        var a = {};
        a.set = function(c, e) {
            var d = e;
            if (d && c.className.indexOf("js-chckt-input-field-validated") === -1) {
                c.className += " chckt-input-field--validated";
                c.className += " js-chckt-input-field-validated";
            }
            if (d) {
                return;
            }
            var b;
            if (c.className.indexOf("js-chckt-input-field-validated") > -1) {
                b = c.className.replace("chckt-input-field--validated", "");
                c.className = b.trim();
                b = c.className.replace("js-chckt-input-field-validated", "");
                c.className = b.trim();
            }
        };
        return a;
    });
    define("encryptedCardNumberInput", ["Constants", "DOM", "validationsCCNumber", "validationUtils"], function(e, x, p, b) {
        var f = {};
        var C;
        var c;
        var k;
        var w = false;
        var y = false;
        var j = false;
        var n;
        var A;
        var v;
        f.setup = function(E, F, D) {
            C = D;
            k = E;
            n = F.processValidationsObj;
            A = F.tellMainWindow;
            v = F.storeFocus;
            var G = document.getElementById(e.__HOSTED_DATE_FIELD_STR);
            G.parentNode.removeChild(G);
            G = document.getElementById(e.__HOSTED_MONTH_FIELD_STR);
            G.parentNode.removeChild(G);
            G = document.getElementById(e.__HOSTED_YEAR_FIELD_STR);
            G.parentNode.removeChild(G);
            G = document.getElementById(e.__EXPIRY_MONTH_STR);
            G.parentNode.removeChild(G);
            G = document.getElementById(e.__EXPIRY_YEAR_STR);
            G.parentNode.removeChild(G);
            G = document.getElementById(e.__HOSTED_CVC_FIELD_STR);
            G.parentNode.removeChild(G);
            c = document.getElementById(e.__HOSTED_NUMBER_FIELD_STR);
            c.style.display = "block";
            x._on(c, "keydown", l, false);
            x._on(c, "input", m, false);
            if (b.__IS_ANDROID) {
                x._on(c, "keyup", h, false);
            }
            if (b.__IS_IE && b.__IS_IE <= 9) {
                x._on(c, "keyup", u, false);
                x._on(c, "cut", a, false);
                x._on(document, "selectionchange", t, false);
            }
            if (b.__IS_IE && b.__IS_IE === 8) {
                x._on(c, "paste", g, false);
            }
            if (b.__IS_IPHONE) {
                x._on(c, "touchstart", r, false);
                x._on(c, "touchend", s, false);
                x._on(c, "mouseup", o, false);
                x._on(c, "mousedown", i, false);
                x._on(c, "click", B, false);
            }
            x._on(c, "focus", q, false);
            x._on(c, "blur", z, false);
            return c;
        };
        var l = function(D) {
            p.keyDownCCNumber(D, c);
        };
        var m = function(E) {
            var D = p.inputCC(E, c, C);
            if (D) {
                n(D, {
                    node: c,
                    id: k
                });
            }
        };
        var h = function(D) {
            p.keyUpCCNumber(D, c, C);
        };
        var u = function(E) {
            var D = p.keyUpCCNumberIE(E, c, C);
            if (D) {
                n(D, {
                    node: c,
                    id: k
                });
            }
        };
        var a = function(D) {
            w = true;
            setTimeout(function() {
                var E = p.inputCC(D, c, C);
                if (E) {
                    n(E, {
                        node: c,
                        id: k
                    });
                }
                w = false;
            }, 0);
        };
        var t = function(F) {
            if (w) {
                return;
            }
            var D = document.activeElement;
            if (D === c && D.value === "") {
                if (window.console && window.console.log) {}
                var E = p.inputCC(F, c, C);
                if (E) {
                    n(E, {
                        node: c,
                        id: k
                    });
                }
            }
        };
        var g = function(D) {
            setTimeout(function() {
                var E = p.inputCC(D, c, C);
                if (E) {
                    n(E, {
                        node: c,
                        id: k
                    });
                }
            }, 0);
        };
        var r = function(D) {
            y = false;
            j = false;
        };
        var s = function(D) {
            setTimeout(function() {
                if (!y) {
                    o();
                    B(D);
                }
            }, 400);
        };
        var i = function(D) {
            j = false;
        };
        var o = function(D) {
            if (!j) {
                q();
            } else {}
        };
        var B = function(D) {
            y = true;
            A({
                action: "click"
            }, k);
        };
        var q = function(D) {
            j = true;
            v(true);
            A({
                action: "focus",
                focus: true
            }, k);
        };
        var z = function(D) {
            v(false);
            A({
                action: "focus",
                focus: false
            }, k);
            d();
            if (c.value.length && !p.getIsValidCardNumber() && !x._hasClass(c, "js-chckt-input-field-error")) {
                n({
                    error: "incomplete field",
                    action: "blur"
                }, {
                    node: c,
                    id: k
                });
            }
        };
        var d = function() {
            var D = p.doLuhnCheck(c, C);
            if (D && D.error.length) {
                n(D, {
                    node: c,
                    id: k
                });
            }
        };
        return f;
    });
    define("encryptedExpiryDateInput", ["Constants", "DOM", "validationsCCDate", "validationUtils"], function(d, w, m, b) {
        var e = {};
        var c;
        var j;
        var v = false;
        var x = false;
        var i = false;
        var n;
        var z;
        var u;
        e.setup = function(B, C) {
            j = B;
            n = C.processValidationsObj;
            z = C.tellMainWindow;
            u = C.storeFocus;
            var D = document.getElementById(d.__HOSTED_NUMBER_FIELD_STR);
            D.parentNode.removeChild(D);
            D = document.getElementById(d.__HOSTED_CVC_FIELD_STR);
            D.parentNode.removeChild(D);
            D = document.getElementById(d.__HOSTED_MONTH_FIELD_STR);
            D.parentNode.removeChild(D);
            D = document.getElementById(d.__HOSTED_YEAR_FIELD_STR);
            D.parentNode.removeChild(D);
            c = document.getElementById(d.__HOSTED_DATE_FIELD_STR);
            c.style.display = "block";
            w._on(c, "keydown", k, false);
            w._on(c, "input", l, false);
            if (b.__IS_ANDROID) {
                w._on(c, "keyup", g, false);
            }
            if (b.__IS_IE && b.__IS_IE <= 9) {
                w._on(c, "keyup", t, false);
                w._on(c, "cut", a, false);
                w._on(document, "selectionchange", s, false);
            }
            if (b.__IS_IE && b.__IS_IE === 8) {
                w._on(c, "paste", f, false);
            }
            if (b.__IS_IPHONE) {
                w._on(c, "touchstart", q, false);
                w._on(c, "touchend", r, false);
                w._on(c, "mousedown", h, false);
                w._on(c, "mouseup", o, false);
                w._on(c, "click", A, false);
            }
            w._on(c, "focus", p, false);
            w._on(c, "blur", y, false);
            return c;
        };
        var k = function(B) {
            m.keyDownDate(B, c);
        };
        var l = function(C) {
            var B = m.inputDate(C, c);
            if (B) {
                n(B, {
                    node: c,
                    id: j
                });
            }
        };
        var g = function(B) {
            m.keyUpDateAndroid(B, c);
        };
        var t = function(C) {
            var B = m.keyUpDateIE(C, c);
            if (B) {
                n(B, {
                    node: c,
                    id: j
                });
            }
        };
        var a = function(B) {
            v = true;
            setTimeout(function() {
                var C = m.inputDate(B, c);
                if (C) {
                    n(C, {
                        node: c,
                        id: j
                    });
                }
                v = false;
            }, 0);
        };
        var s = function(D) {
            if (v) {
                return;
            }
            var B = document.activeElement;
            if (B === c && B.value === "") {
                if (window.console && window.console.log) {}
                var C = m.inputDate(D, c);
                if (C) {
                    n(C, {
                        node: c,
                        id: j
                    });
                }
            }
        };
        var f = function(B) {
            setTimeout(function() {
                var C = m.inputDate(B, c);
                if (C) {
                    n(C, {
                        node: c,
                        id: j
                    });
                }
            }, 0);
        };
        var q = function(B) {
            x = false;
            i = false;
        };
        var r = function(B) {
            setTimeout(function() {
                if (!x) {
                    o();
                    A(B);
                }
            }, 400);
        };
        var h = function(B) {
            i = false;
        };
        var o = function(B) {
            if (!i) {
                p();
            } else {}
        };
        var A = function(B) {
            x = true;
            z({
                action: "click"
            }, j);
        };
        var p = function(B) {
            i = true;
            u(true);
            z({
                action: "focus",
                focus: true
            }, j);
        };
        var y = function(B) {
            u(false);
            z({
                action: "focus",
                focus: false
            }, j);
            if (c.value.length && !m.getIsValidExpiryDate() && !w._hasClass(c, "js-chckt-input-field-error")) {
                if (window.console && window.console.log) {}
                n({
                    error: "incomplete field",
                    action: "blur"
                }, {
                    node: c,
                    id: j
                });
            }
        };
        return e;
    });
    define("encryptedExpiryMonthInput", ["Constants", "DOM", "validationsCCMonth", "validationUtils"], function(e, v, d, b) {
        var f = {};
        var c;
        var j;
        var u = false;
        var w = false;
        var i = false;
        var m;
        var y;
        var t;
        f.setup = function(A, B) {
            j = A;
            m = B.processValidationsObj;
            y = B.tellMainWindow;
            t = B.storeFocus;
            var C = document.getElementById(e.__HOSTED_NUMBER_FIELD_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__HOSTED_DATE_FIELD_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__HOSTED_YEAR_FIELD_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__EXPIRY_MONTH_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__EXPIRY_YEAR_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__HOSTED_CVC_FIELD_STR);
            C.parentNode.removeChild(C);
            c = document.getElementById(e.__HOSTED_MONTH_FIELD_STR);
            c.style.display = "block";
            v._on(c, "keydown", k, false);
            v._on(c, "input", l, false);
            if (b.__IS_IE && b.__IS_IE <= 9) {
                v._on(c, "keyup", s, false);
                v._on(c, "cut", a, false);
                v._on(document, "selectionchange", r, false);
            }
            if (b.__IS_IE && b.__IS_IE === 8) {
                v._on(c, "paste", g, false);
            }
            if (b.__IS_IPHONE) {
                v._on(c, "touchstart", p, false);
                v._on(c, "touchend", q, false);
                v._on(c, "mousedown", h, false);
                v._on(c, "mouseup", n, false);
                v._on(c, "click", z, false);
            }
            v._on(c, "focus", o, false);
            v._on(c, "blur", x, false);
            return c;
        };
        var k = function(A) {
            d.keyDownMonth(A, c);
        };
        var l = function(B) {
            var A = d.inputMonth(B, c);
            if (A) {
                m(A, {
                    node: c,
                    id: j
                });
            }
        };
        var s = function(B) {
            var A = d.keyUpMonthIE(B, c);
            if (A) {
                m(A, {
                    node: c,
                    id: j
                });
            }
        };
        var a = function(A) {
            u = true;
            setTimeout(function() {
                var B = d.inputMonth(A, c);
                if (B) {
                    m(B, {
                        node: c,
                        id: j
                    });
                }
                u = false;
            }, 0);
        };
        var r = function(C) {
            if (u) {
                return;
            }
            var A = document.activeElement;
            if (A === c && A.value === "") {
                if (window.console && window.console.log) {}
                var B = d.inputMonth(C, c);
                if (B) {
                    m(B, {
                        node: c,
                        id: j
                    });
                }
            }
        };
        var g = function(A) {
            setTimeout(function() {
                var B = d.inputMonth(A, c);
                if (B) {
                    m(B, {
                        node: c,
                        id: j
                    });
                }
            }, 0);
        };
        var p = function(A) {
            w = false;
            i = false;
        };
        var q = function(A) {
            setTimeout(function() {
                if (!w) {
                    n();
                    z(A);
                }
            }, 400);
        };
        var h = function(A) {
            i = false;
        };
        var n = function(A) {
            if (!i) {
                o();
            } else {}
        };
        var z = function(A) {
            w = true;
            y({
                action: "click"
            }, j);
        };
        var o = function(A) {
            i = true;
            t(true);
            y({
                action: "focus",
                focus: true
            }, j);
        };
        var x = function(A) {
            t(false);
            y({
                action: "focus",
                focus: false
            }, j);
            if (c.value.length && !d.getIsValidExpiryMonth() && !v._hasClass(c, "js-chckt-input-field-error")) {
                m({
                    error: "incomplete field",
                    action: "blur"
                }, {
                    node: c,
                    id: j
                });
            }
        };
        return f;
    });
    define("encryptedExpiryYearInput", ["Constants", "DOM", "validationsCCYear", "validationUtils"], function(e, v, c, b) {
        var f = {};
        var d;
        var j;
        var u = false;
        var w = false;
        var i = false;
        var m;
        var y;
        var t;
        f.setup = function(A, B) {
            j = A;
            m = B.processValidationsObj;
            y = B.tellMainWindow;
            t = B.storeFocus;
            var C = document.getElementById(e.__HOSTED_NUMBER_FIELD_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__HOSTED_DATE_FIELD_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__HOSTED_MONTH_FIELD_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__EXPIRY_MONTH_STR);
            C.parentNode.removeChild(C);
            C = document.getElementById(e.__HOSTED_CVC_FIELD_STR);
            C.parentNode.removeChild(C);
            d = document.getElementById(e.__HOSTED_YEAR_FIELD_STR);
            d.style.display = "block";
            v._on(d, "keydown", k, false);
            v._on(d, "input", l, false);
            if (b.__IS_IE && b.__IS_IE <= 9) {
                v._on(d, "keyup", s, false);
                v._on(d, "cut", a, false);
                v._on(document, "selectionchange", r, false);
            }
            if (b.__IS_IE && b.__IS_IE === 8) {
                v._on(d, "paste", g, false);
            }
            if (b.__IS_IPHONE) {
                v._on(d, "touchstart", p, false);
                v._on(d, "touchend", q, false);
                v._on(d, "mousedown", h, false);
                v._on(d, "mouseup", n, false);
                v._on(d, "click", z, false);
            }
            v._on(d, "focus", o, false);
            v._on(d, "blur", x, false);
            return d;
        };
        var k = function(A) {
            c.keyDownYear(A, d);
        };
        var l = function(B) {
            var A = c.inputYear(B, d);
            if (A) {
                m(A, {
                    node: d,
                    id: j
                });
            }
        };
        var s = function(B) {
            var A = c.keyUpYearIE(B, d);
            if (A) {
                m(A, {
                    node: d,
                    id: j
                });
            }
        };
        var a = function(A) {
            u = true;
            setTimeout(function() {
                var B = c.inputYear(A, d);
                if (B) {
                    m(B, {
                        node: d,
                        id: j
                    });
                }
                u = false;
            }, 0);
        };
        var r = function(C) {
            if (u) {
                return;
            }
            var A = document.activeElement;
            if (A === d && A.value === "") {
                if (window.console && window.console.log) {}
                var B = c.inputYear(C, d);
                if (B) {
                    m(B, {
                        node: d,
                        id: j
                    });
                }
            }
        };
        var g = function(A) {
            setTimeout(function() {
                var B = c.inputYear(A, d);
                if (B) {
                    m(B, {
                        node: d,
                        id: j
                    });
                }
            }, 0);
        };
        var p = function(A) {
            w = false;
            i = false;
        };
        var q = function(A) {
            setTimeout(function() {
                if (!w) {
                    n();
                    z(A);
                }
            }, 400);
        };
        var h = function(A) {
            i = false;
        };
        var n = function(A) {
            if (!i) {
                o();
            } else {}
        };
        var z = function(A) {
            w = true;
            y({
                action: "click"
            }, j);
        };
        var o = function(A) {
            i = true;
            t(true);
            y({
                action: "focus",
                focus: true
            }, j);
        };
        var x = function(A) {
            t(false);
            y({
                action: "focus",
                focus: false
            }, j);
            if (d.value.length && !c.getIsValidExpiryYear() && !v._hasClass(d, "js-chckt-input-field-error")) {
                m({
                    error: "incomplete field",
                    action: "blur"
                }, {
                    node: d,
                    id: j
                });
            }
        };
        return f;
    });
    define("encryptedSecurityCodeInput", ["Constants", "DOM", "validationsCCSecurityCode", "validationUtils"], function(d, w, o, b) {
        var e = {};
        var c;
        var i;
        var v = false;
        var x = false;
        var h = false;
        var l;
        var z;
        var u;
        e.setup = function(D, E, C, B) {
            i = D;
            o.setRecurringCardIndicator(B);
            l = E.processValidationsObj;
            z = E.tellMainWindow;
            u = E.storeFocus;
            var F = document.getElementById(d.__HOSTED_NUMBER_FIELD_STR);
            F.parentNode.removeChild(F);
            F = document.getElementById(d.__HOSTED_DATE_FIELD_STR);
            F.parentNode.removeChild(F);
            F = document.getElementById(d.__HOSTED_MONTH_FIELD_STR);
            F.parentNode.removeChild(F);
            F = document.getElementById(d.__HOSTED_YEAR_FIELD_STR);
            F.parentNode.removeChild(F);
            F = document.getElementById(d.__EXPIRY_MONTH_STR);
            F.parentNode.removeChild(F);
            F = document.getElementById(d.__EXPIRY_YEAR_STR);
            F.parentNode.removeChild(F);
            c = document.getElementById(d.__HOSTED_CVC_FIELD_STR);
            c.style.display = "block";
            w._on(c, "keydown", j, false);
            w._on(c, "input", k, false);
            if (b.__IS_IE && b.__IS_IE <= 9) {
                w._on(c, "keyup", t, false);
                w._on(c, "cut", a, false);
                w._on(document, "selectionchange", r, false);
            }
            if (b.__IS_IE && b.__IS_IE === 8) {
                w._on(c, "paste", f, false);
            }
            if (b.__IS_IPHONE) {
                w._on(c, "touchstart", p, false);
                w._on(c, "touchmove", s, false);
                w._on(c, "touchend", q, false);
                w._on(c, "mousedown", g, false);
                w._on(c, "mouseup", m, false);
                w._on(c, "click", A, false);
            }
            w._on(c, "focus", n, false);
            w._on(c, "blur", y, false);
            return c;
        };
        var j = function(B) {
            o.keyDownCVC(B, c);
        };
        var k = function(C) {
            var B;
            B = o.inputCVC(C, c);
            if (B) {
                l(B, {
                    node: c,
                    id: i
                });
            }
        };
        var t = function(C) {
            var B = o.keyUpCVCNumberIE(C, c);
            if (B) {
                l(B, {
                    node: c,
                    id: i
                });
            }
        };
        var a = function(B) {
            if (window.console && window.console.log) {}
            v = true;
            setTimeout(function() {
                if (window.console && window.console.log) {}
                var C = o.inputCVC(B, c);
                if (C) {
                    l(C, {
                        node: c,
                        id: i
                    });
                }
                v = false;
            }, 0);
        };
        var r = function(D) {
            if (v) {
                return;
            }
            var B = document.activeElement;
            if (B === c && B.value === "") {
                var C = o.inputCVC(D, c);
                if (C) {
                    l(C, {
                        node: c,
                        id: i
                    });
                }
            }
        };
        var f = function(B) {
            setTimeout(function() {
                var C = o.inputCVC(B, c);
                if (C) {
                    l(C, {
                        node: c,
                        id: i
                    });
                }
            }, 0);
        };
        var p = function(B) {
            x = false;
            h = false;
        };
        var s = function(B) {};
        var q = function(B) {
            setTimeout(function() {
                if (!x) {
                    m();
                    A(B);
                }
            }, 400);
        };
        var g = function(B) {
            h = false;
        };
        var m = function(B) {
            if (!h) {
                n();
            } else {}
        };
        var A = function(B) {
            x = true;
            z({
                action: "click"
            }, i);
        };
        var n = function(B) {
            h = true;
            u(true);
            z({
                action: "focus",
                focus: true
            }, i);
        };
        var y = function(B) {
            u(false);
            z({
                action: "focus",
                focus: false
            }, i);
            if (c.value.length && !o.getIsValidCvcNumber() && !w._hasClass(c, "js-chckt-input-field-error")) {
                l({
                    error: "incomplete field",
                    action: "blur"
                }, {
                    node: c,
                    id: i
                });
            }
        };
        return e;
    });
    define("securedFields_config", ["Constants", "DOM", "validationUtils", "processStyles", "processPlaceholders", "validationsCCSecurityCode", "fireEvent"], function(f, g, a, c, d, b, e) {
        var h = function(p, o) {
            var k, t;
            var m = {};
            e(m);
            var r;
            var s = function() {
                var u, v = document.location.origin || (document.location.protocol + "//" + document.location.host),
                    w = document.location.pathname,
                    x = v + w;
                if (checkoutShopperUrl.indexOf("-live") > -1 && origin.indexOf("https") === -1) {
                    if (window.console && window.console.error) {
                        window.console.error("ERROR: page asking for SecuredFields is not using https, origin=", origin);
                    }
                }
                u = checkoutShopperUrl + "assets/html/" + originKey + "/securedFields.1.5.1.html";
                if (u !== x) {
                    if (window.console && window.console.error) {
                        window.console.error("ERROR: secureFields::init:: Invalid hosting of SecuredFields file.  Document origin: ", v, "Permitted src=", u, "Actual src=", x);
                    }
                    return;
                }
                if (window.addEventListener) {
                    window.addEventListener("message", l, false);
                } else {
                    window.attachEvent("onmessage", l);
                }
                if (a.__IS_FIREFOX || (a.__IS_IE && a.__IS_IE <= 11)) {
                    g._on(window, "focus", function(y) {
                        g._selectOne(document, "#" + o.fieldType).focus();
                    });
                }
            };
            var l = function(x) {
                o.eventSource = x.source;
                o.eventOrigin = x.origin || x.originalEvent.origin;
                if (o.eventOrigin !== origin) {
                    return;
                }
                if (typeof x.data !== "string") {
                    if (window.console && window.console.error) {
                        window.console.error("ERROR: securedFields:: postMessage config data is incorrect: type 1");
                    }
                    return;
                }
                var v;
                try {
                    v = JSON.parse(x.data);
                } catch (z) {
                    if (window.console && window.console.error) {
                        window.console.error("ERROR: securedFields:: postMessage config data is incorrect: type 2");
                    }
                    return;
                }
                var u = (v.hasOwnProperty("focus") || v.hasOwnProperty("brand") || v.hasOwnProperty("setValue") || v.hasOwnProperty("_b$dl") || v.hasOwnProperty("click") || v.hasOwnProperty("dfValue")) ? true : false;
                var y = function() {
                    var D = false;
                    if (v.sfLogAtStart === true) {
                        _b$dl = true;
                    }
                    var A = (v.hasOwnProperty("txVariant") && v.hasOwnProperty("fieldType") && v.hasOwnProperty("cardGroupTypes") && v.hasOwnProperty("sfLogAtStart") && v.hasOwnProperty("numKey"));
                    if (!A) {
                        if (window.console && window.console.error) {
                            window.console.error("ERROR: securedFields:: postMessage config data is incorrect: type 3");
                        }
                        return;
                    }
                    t = (v.recurringCardIndicator) ? v.recurringCardIndicator : "_r";
                    o.fieldType = v.fieldType;
                    o.txVariant = v.txVariant;
                    o.numKey = v.numKey;
                    k = n(o.txVariant, v.cardGroupTypes);
                    if (_b$dl && window.console && window.console.log) {}
                    var J = require(v.fieldType + "Input");
                    r = J.setup(v.fieldType, p, k, t);
                    var B = [];
                    if (a.__IS_IE && a.__IS_IE <= 10) {
                        for (var G = 0; G < 16; G++) {
                            B.push(Math.random() * 4294967296 | 0);
                        }
                    }
                    var C = typeof adyen.createEncryption;
                    if ((adyen && adyen.cse && adyen.cse.available) && C === "function") {
                        D = true;
                    }
                    if (_b$dl && window.console && window.console.log) {}
                    if (!D) {
                        if (window.console && window.console.warn) {
                            window.console.warn("WARNING: securedFields:: the encryption algorithm is not present. It will not be possible to encrypt input fields");
                        }
                    }
                    var I = true;
                    if (D) {
                        var F, E, H;
                        if (v.fieldType === f.__HOSTED_DATE_FIELD_STR || v.fieldType === f.__HOSTED_YEAR_FIELD_STR) {
                            H = document.getElementById(f.__EXPIRY_YEAR_STR);
                            F = g._createEncryption(H, (B.length) ? B : null, I);
                            if (v.fieldType === f.__HOSTED_DATE_FIELD_STR) {
                                E = document.getElementById(f.__EXPIRY_MONTH_STR);
                                F = g._createEncryption(E, (B.length) ? B : null, I);
                            }
                        } else {
                            F = g._createEncryption(r, (B.length) ? B : null, I);
                        }
                        if (v.fieldType === f.__HOSTED_NUMBER_FIELD_STR && typeof F.monitor === "function") {
                            F.monitor("number", r);
                        }
                    }
                    c.process(v.pmConfig.sfStyles);
                    d.process(r, v.fieldType, v.pmConfig.placeholders);
                    if (v.fieldType === f.__HOSTED_CVC_FIELD_STR) {
                        d.setCvcPlaceholder(r, o.txVariant);
                    }
                    if (v.sfLogAtStart === true) {
                        _b$dl = false;
                    }
                    if (D) {
                        p.tellMainWindow({
                            action: "config"
                        }, v.fieldType);
                    }
                };
                var w = function() {
                    if ((!v.hasOwnProperty("txVariant") || !v.hasOwnProperty("fieldType") || !v.hasOwnProperty("numKey")) && (!v.hasOwnProperty("focus") || !v.hasOwnProperty("brand") || !v.hasOwnProperty("setValue") || !v.hasOwnProperty("click") || !v.hasOwnProperty("_b$dl"))) {
                        if (window.console && window.console.error) {
                            window.console.error("ERROR: securedFields:: postMessage special data is incorrect: type 4");
                        }
                        return;
                    }
                    if (v.focus) {
                        if (!i(v.numKey)) {
                            return;
                        }
                        q(v.fieldType);
                    }
                    if (v.click) {
                        if (o.fieldType === v.fieldType) {
                            if (p.hasFocus) {
                                var D = r.value;
                                var B = a.getCaretPos(r);
                                r.value = D;
                                a.setSelectionRange(r, B);
                            } else {}
                        } else {
                            if (!p.hasFocus) {} else {
                                m.fireEvent(r, "blur");
                                p.hasFocus = false;
                            }
                        }
                    }
                    if (v.brand) {
                        if (!i(v.numKey)) {
                            return;
                        }
                        var A = document.getElementById(f.__HOSTED_CVC_FIELD_STR);
                        var C = j(v.brand, A);
                        d.setCvcPlaceholder(A, v.brand);
                        if (C) {
                            p.processValidationsObj(C, {
                                node: A,
                                id: f.__HOSTED_CVC_FIELD_STR
                            });
                        }
                    }
                    if (v.setValue) {
                        if (!i(v.numKey)) {
                            return;
                        }
                        r.value = v.setValue;
                        m.fireEvent(r, "paste");
                        m.fireEvent(r, "input");
                    }
                    if (v.hasOwnProperty("dfValue")) {
                        if (!i(v.numKey)) {
                            return;
                        }
                        p.dfValue = v.dfValue;
                    }
                    if (v.hasOwnProperty("_b$dl")) {
                        if (!i(v.numKey)) {
                            return;
                        }
                        _b$dl = v._b$dl;
                    }
                };
                (u) ? w(): y();
            };
            var i = function(u) {
                if (Number(u) !== o.numKey) {
                    if (window.console && window.console.error) {
                        window.console.error("ERROR: securedFields:: postMessage special data is incorrect: type 5");
                    }
                    return false;
                }
                return true;
            };
            var n = function(u, w) {
                var v = w.slice();
                if (u !== "card") {
                    v = [u];
                    chckt.cardBrand = u;
                    var x = u.indexOf(t);
                    chckt.nonConsolidatedCard = (x > -1) ? u.substring(0, x) : u;
                }
                v = v.map(function(y) {
                    var z = y.indexOf(t);
                    return (z > -1) ? y.substring(0, z) : y;
                });
                return v;
            };
            var q = function(u) {
                document.getElementById(u).focus();
            };
            var j = function(v, u) {
                if (o.txVariant === "card") {
                    chckt.cardBrand = v;
                    if (u && u.value.length > 2) {
                        return b.testCVC(u, "");
                    }
                }
                return null;
            };
            s();
        };
        return h;
    });
    define("securedFields_interactions", ["Constants", "DOM", "setErrors", "setValidated", "validationsCCNumber", "validationsCCDate", "validationsCCMonth", "validationsCCYear", "validationsCCSecurityCode", "Util"], function(b, j, h, a, c, d, k, g, f, i) {
        var e = function(u, s) {
            var p = {};
            var m = false,
                q = false,
                l = false,
                v = function() {};
            p.processValidationsObj = function(B, A) {
                if (!B.hasOwnProperty("noop") && !B.hasOwnProperty("error")) {}
                var z = (B.noop === true);
                if (z) {
                    h.set(A.node, false, m);
                    return;
                }
                if (B.hasOwnProperty("binValue")) {
                    var y = {
                        action: "binValue",
                        binValue: B.binValue
                    };
                    u.tellMainWindow(y, A.id);
                }
                m = (B.error !== "");
                h.set(A.node, m);
                a.set(A.node, false);
                if (m) {
                    if (A.id === b.__HOSTED_NUMBER_FIELD_STR) {
                        l = true;
                    }
                    u.tellMainWindow(B, A.id);
                    return;
                }
                var C = function(I, F) {
                    var J, D;
                    var E = (I === b.__HOSTED_NUMBER_FIELD_STR) ? B : null;
                    switch (I) {
                        case b.__HOSTED_NUMBER_FIELD_STR:
                        case b.__HOSTED_CVC_FIELD_STR:
                        case b.__HOSTED_MONTH_FIELD_STR:
                            J = o(A.node, A.id, null, E);
                            if (J) {
                                if (J.type === b.__HOSTED_NUMBER_FIELD_STR) {
                                    if (J.encryptionSuccess) {
                                        q = true;
                                        l = false;
                                    } else {
                                        if (J.hasBrandInfo) {
                                            return x(F, J);
                                        }
                                    }
                                }
                                a.set(A.node, true);
                                (J) ? u.tellMainWindow(J, J.type): v();
                            }
                            break;
                        case b.__HOSTED_YEAR_FIELD_STR:
                            a.set(A.node, true);
                            D = r(A.node, b.__HOSTED_YEAR_FIELD_STR);
                            (D) ? u.tellMainWindow(D, D.type): v();
                            break;
                        case b.__HOSTED_DATE_FIELD_STR:
                            a.set(A.node, true);
                            var H = j._selectOne(A.node.parentNode, "#" + b.__EXPIRY_MONTH_STR);
                            var G = o(H, "month", A.node);
                            (G) ? u.storedEncryptedMonthObj = G: v();
                            D = r(A.node, "year");
                            (D) ? n(D): v();
                            break;
                    }
                };
                var x = function(D, G) {
                    if (_b$dl && window.console && window.console.log) {}
                    if (D === b.__HOSTED_DATE_FIELD_STR) {
                        u.storedEncryptedMonthObj = null;
                        if (window.console && window.console.log) {}
                    }
                    if (D === b.__HOSTED_NUMBER_FIELD_STR) {
                        var E = (q) ? true : false;
                        if (E) {
                            q = false;
                        }
                        var F = (l) ? true : false;
                        if (F) {
                            l = false;
                        }
                        if (_b$dl && window.console && window.console.log) {}
                        if (G.brand !== chckt.cardBrand || E || F) {
                            chckt.cardBrand = G.brand;
                        } else {
                            return;
                        }
                    }
                    u.tellMainWindow(G, D);
                };
                var w = t(B, A.node, A.id);
                (w) ? C(w, A.id): x(A.id, B);
            };
            var r = function(y, z) {
                var x = j._selectOne(y.parentNode, "#" + b.__EXPIRY_YEAR_STR);
                var w = o(x, z, y);
                if (w && w.errorNode) {
                    m = true;
                    h.set(w.errorNode, m);
                }
                return w;
            };
            var n = function(w) {
                var y = w[b.__HOSTED_DATE_FIELD_STR];
                var x = u.storedEncryptedMonthObj[b.__HOSTED_DATE_FIELD_STR][0];
                y.unshift(x);
                u.tellMainWindow(w, b.__HOSTED_DATE_FIELD_STR);
            };
            var t = function(y, x, w) {
                switch (w) {
                    case b.__HOSTED_NUMBER_FIELD_STR:
                        if (c.getIsValidCardNumber()) {
                            return w;
                        }
                        break;
                    case b.__HOSTED_DATE_FIELD_STR:
                        if (d.getIsValidExpiryDate()) {
                            return w;
                        }
                        break;
                    case b.__HOSTED_CVC_FIELD_STR:
                        if (f.getIsValidCvcNumber()) {
                            return w;
                        }
                        break;
                    case b.__HOSTED_MONTH_FIELD_STR:
                        if (k.getIsValidExpiryMonth()) {
                            return w;
                        }
                        break;
                    case b.__HOSTED_YEAR_FIELD_STR:
                        if (g.getIsValidExpiryYear()) {
                            return w;
                        }
                        break;
                }
                return false;
            };
            var o = function(x, A, C, z) {
                var y = {};
                var B = j._getEncryptedData(x, s.fieldType, genTime, u.dfValue);
                var w = function() {
                    y.encryptionSuccess = false;
                    var E = false;
                    var G = x.value.length;
                    if (B.hasOwnProperty("luhn")) {
                        E = (G !== 0);
                        y.error = (E) ? "luhn check failed" : "";
                    } else {
                        if (B.hasOwnProperty("cvc")) {
                            y.error = (G === 0) ? "" : "cvc check failed";
                        } else {
                            if (B.hasOwnProperty("date")) {
                                y.error = (G === 0) ? "" : "date check failed";
                            }
                        }
                    }
                    y.action = "encryption";
                    if (B.hasOwnProperty("error")) {
                        y.error = B.error;
                    }
                    var H = B.hasOwnProperty("date");
                    B = y;
                    B.type = A;
                    var F = (H && B.error.length);
                    if (F) {
                        B.errorNode = C;
                        return B;
                    }
                    if (z && z.brand && z.brand.length) {
                        B = {};
                        B.type = A;
                        B.hasBrandInfo = true;
                        B.imageSrc = z.imageSrc;
                        B.brand = z.brand;
                        B.cvcText = z.cvcText;
                        B.cvcIsOptional = z.cvcIsOptional;
                        B.action = "encryption";
                        return B;
                    }
                };
                var D = function() {
                    B.action = "encryption";
                    B.type = A;
                    var G = A;
                    if (A === "month" || A === "year") {
                        G = "encryptedExpiry" + i._capitaliseFirstLetter(A);
                    }
                    var E = B[s.fieldType];
                    var F = [];
                    F.push({
                        type: A,
                        encryptedFieldName: G,
                        blob: E
                    });
                    B[s.fieldType] = F;
                    if (z) {
                        B.hasBrandInfo = true;
                        B.imageSrc = z.imageSrc;
                        B.brand = z.brand;
                        B.cvcText = z.cvcText;
                        B.cvcIsOptional = z.cvcIsOptional;
                    }
                    return B;
                };
                return (B.encryptionSuccess === true) ? D() : w();
            };
            return p;
        };
        return e;
    });
    define("securedFields_core", ["securedFields_config", "securedFields_interactions"], function(c, a) {
        var b = function() {
            var e = {};
            e.tellMainWindow = function(i, h) {
                i.fieldType = h;
                i.txVariant = f.txVariant;
                i.numKey = f.numKey;
                var g = JSON.stringify(i);
                f.eventSource.postMessage(g, f.eventOrigin);
            };
            e.storeFocus = function(g) {
                e.hasFocus = g;
            };
            var f = {};
            f.eventSource = null;
            f.eventOrigin = null;
            f.fieldType = null;
            f.txVariant = null;
            var d = a(e, f);
            e.processValidationsObj = d.processValidationsObj;
            c(e, f);
        };
        return b;
    });
    var sf = require("securedFields_core");
    sf();
    if (!("forEach" in Array.prototype)) {
        Array.prototype.forEach = function(c, b) {
            for (var a = 0, d = this.length; a < d; a++) {
                if (a in this) {
                    c.call(b, this[a], a, this);
                }
            }
        };
    }
    if (!String.prototype.trim) {
        String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
    }
    if (!Array.prototype.map) {
        Array.prototype.map = function(h) {
            var d, b, c;
            if (this == null) {
                throw new TypeError("this is null or not defined");
            }
            var g = Object(this);
            var a = g.length >>> 0;
            if (typeof h !== "function") {
                throw new TypeError(h + " is not a function");
            }
            if (arguments.length > 1) {
                d = arguments[1];
            }
            b = new Array(a);
            c = 0;
            while (c < a) {
                var f, e;
                if (c in g) {
                    f = g[c];
                    e = h.call(d, f, c, g);
                    b[c] = e;
                }
                c++;
            }
            return b;
        };
    }
    if (!Object.keys) {
        Object.keys = (function() {
            var c = Object.prototype.hasOwnProperty,
                d = !({
                    toString: null
                }).propertyIsEnumerable("toString"),
                b = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                a = b.length;
            return function(g) {
                if (typeof g !== "function" && (typeof g !== "object" || g === null)) {
                    throw new TypeError("Object.keys called on non-object");
                }
                var e = [],
                    h, f;
                for (h in g) {
                    if (c.call(g, h)) {
                        e.push(h);
                    }
                }
                if (d) {
                    for (f = 0; f < a; f++) {
                        if (c.call(g, b[f])) {
                            e.push(b[f]);
                        }
                    }
                }
                return e;
            };
        }());
    }
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function(e) {
            if (this === null) {
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            }
            if (typeof e !== "function") {
                throw new TypeError(e + " is not a function");
            }
            var d = Object(this);
            var a = d.length >>> 0;
            var b = 0;
            var c;
            if (arguments.length >= 2) {
                c = arguments[1];
            } else {
                while (b < a && !(b in d)) {
                    b++;
                }
                if (b >= a) {
                    throw new TypeError("Reduce of empty array with no initial value");
                }
                c = d[b++];
            }
            while (b < a) {
                if (b in d) {
                    c = e(c, d[b], b, d);
                }
                b++;
            }
            return c;
        };
    }
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(c) {
            if (this === void 0 || this === null) {
                throw new TypeError();
            }
            var f = Object(this);
            var a = f.length >>> 0;
            if (typeof c !== "function") {
                throw new TypeError();
            }
            var e = [];
            var b = arguments.length >= 2 ? arguments[1] : void 0;
            for (var d = 0; d < a; d++) {
                if (d in f) {
                    var g = f[d];
                    if (c.call(b, g, d, f)) {
                        e.push(g);
                    }
                }
            }
            return e;
        };
    }
    if (!Array.prototype.includes) {
        Array.prototype.includes = function(d, e) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var f = Object(this);
            var a = f.length >>> 0;
            if (a === 0) {
                return false;
            }
            var g = e | 0;
            var c = Math.max(g >= 0 ? g : a - Math.abs(g), 0);

            function b(h, i) {
                return h === i || (typeof h === "number" && typeof i === "number" && isNaN(h) && isNaN(i));
            }
            while (c < a) {
                if (b(f[c], d)) {
                    return true;
                }
                c++;
            }
            return false;
        };
    }
    if (typeof Object.assign != "function") {
        Object.assign = function assign(d, f) {
            if (d == null) {
                throw new TypeError("Cannot convert undefined or null to object");
            }
            var e = Object(d);
            for (var c = 1; c < arguments.length; c++) {
                var b = arguments[c];
                if (b != null) {
                    for (var a in b) {
                        if (Object.prototype.hasOwnProperty.call(b, a)) {
                            e[a] = b[a];
                        }
                    }
                }
            }
            return e;
        };
    }
    /* THE END */
})(this);