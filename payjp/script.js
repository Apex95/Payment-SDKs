/*! Mon Mar 04 2019 08:52:21 GMT+0000 (Coordinated Universal Time) */ ! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = new(n(1).Payjp)({
        apiURL: "https://api.pay.jp",
        applePayMerchantId: "merchant.jp.pay.production"
    });
    t.default = i, window.Payjp = i
}, function(e, t, n) {
    "use strict";
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(2),
        a = n(4),
        o = n(5),
        s = {
            apiURL: "https://api.pay.jp",
            applePayMerchantId: "merchant.jp.pay.production"
        },
        u = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.transport = new r.Transport(t.apiURL || s.apiURL), this.validate = new a.Validator, this.applePay = new o.ApplePay(this, t.applePayMerchantId || s.applePayMerchantId), this._publicKey = "", this._lang = "ja"
            }
            return i(e, [{
                key: "setPublicKey",
                value: function(e) {
                    this._publicKey = e
                }
            }, {
                key: "getPublicKey",
                value: function() {
                    return this._publicKey
                }
            }, {
                key: "setLanguage",
                value: function(e) {
                    this._lang = e
                }
            }, {
                key: "getLanguage",
                value: function() {
                    return this._lang
                }
            }, {
                key: "hasPublicKey",
                value: function() {
                    if ("" === this.getPublicKey()) throw new Error("Public key 縺後そ繝�ヨ縺輔ｌ縺ｦ縺�∪縺帙ｓ");
                    return !0
                }
            }, {
                key: "retrieveAvailability",
                value: function(e, t) {
                    var n = {};
                    "function" == typeof e ? t = e : Object.assign(n, e), this.hasPublicKey() && this.transport.callAPI("GET", "accounts/brands", n, this.getPublicKey(), t)
                }
            }, {
                key: "createToken",
                value: function(e, t, n) {
                    var i = {
                        card: e
                    };
                    "function" == typeof t ? n = t : Object.assign(i, t), this.hasPublicKey() && this.transport.callAPI("POST", "tokens", i, this.getPublicKey(), n)
                }
            }, {
                key: "getToken",
                value: function(e, t) {
                    this.hasPublicKey() && this.transport.callAPI("GET", "tokens/" + e, {}, this.getPublicKey(), t)
                }
            }]), e
        }();
    t.Payjp = u
}, function(e, t, n) {
    "use strict";
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = new(n(3).XD),
        a = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.apiURL = t || "https://api.pay.jp", this.iframe = null, this.ok = !1, this.initializedCallback = !1, this.callCount = 0, this.messageQueue = [], this.callbackQueue = {}, this.timeoutQueue = {}
            }
            return i(e, [{
                key: "onMessage",
                value: function(e) {
                    var t, n = e.id;
                    t = null === e.response || "" === e.response ? {
                        error: {
                            description: "Token 繧貞叙蠕励〒縺阪∪縺帙ｓ"
                        }
                    } : JSON.parse(e.response), this.callbackQueue[n](parseInt(e.status, 10), t), window.clearTimeout(this.timeoutQueue[n]), delete this.callbackQueue[n], delete this.timeoutQueue[n]
                }
            }, {
                key: "processMessages",
                value: function() {
                    var e = this;
                    if (this.iframe) {
                        for (var t = function() {
                                var t = e.messageQueue[n];
                                e.callbackQueue[t.message.id] = t.callback, r.postMessage(t.message, e.apiURL, e.iframeSrc, e.iframe), e.timeoutQueue[t.message.id] = setTimeout(function() {
                                    e.callbackQueue[t.message.id](504, {
                                        error: {
                                            description: "Token 繧貞叙蠕励〒縺阪∪縺帙ｓ"
                                        }
                                    }), delete e.callbackQueue[t.message.id], delete e.timeoutQueue[t.message.id]
                                }, 6e3)
                            }, n = 0; n < this.messageQueue.length; n++) t();
                        this.messageQueue = []
                    }
                }
            }, {
                key: "initIframe",
                value: function() {
                    var e = this,
                        t = document.createElement("iframe"),
                        n = "payjpFrame" + (new Date).getTime(),
                        i = this.apiURL + "/v1/js/apitunnel.html#" + encodeURIComponent(window.location.href);
                    t.setAttribute("src", i), t.setAttribute("name", n), t.setAttribute("id", "payjpFrame"), t.setAttribute("frameborder", "0"), t.setAttribute("scrolling", "no"), t.setAttribute("allowtransparency", "true"), t.setAttribute("width", "0"), t.setAttribute("height", "0"), t.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0");
                    var r = function() {
                        e.iframe = window.frames[n], e.processMessages()
                    };
                    t.attachEvent ? t.attachEvent("onload", r) : t.onload = r, document.getElementsByTagName("body")[0].appendChild(t)
                }
            }, {
                key: "setupIframe",
                value: function() {
                    null === document.getElementById("payjpFrame") && this.initIframe(), this.initializedCallback || (r.receiveMessage(this.onMessage.bind(this), this.apiURL), this.initializedCallback = !0)
                }
            }, {
                key: "init",
                value: function() {
                    this.iframeName && document.getElementById(this.iframeName) || ("undefined" != typeof document && document && document.body ? this.setupIframe() : "undefined" != typeof window && window && !this.ok && (window.attachEvent ? window.attachEvent("onload", this.setupIframe) : window.addEventListener("load", this.setupIframe, !1))), this.ok = !0
                }
            }, {
                key: "callAPI",
                value: function(e, t, n, i, r) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "/v1/",
                        s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
                    if ("GET" !== e && "POST" !== e && "DELETE" !== e) throw new Error("謖�ｮ壹〒縺阪ｋ HTTP 繝｡繧ｽ繝�ラ縺ｯ GET, POST, DELETE 縺ｮ縺ｿ縺ｧ縺�");
                    this.init();
                    var u = (this.callCount++).toString();
                    this.messageQueue.push({
                        message: {
                            id: u,
                            method: e,
                            url: o + t,
                            params: n,
                            key: i,
                            keyType: a,
                            locale: s
                        },
                        callback: r
                    }), this.processMessages()
                }
            }]), e
        }();
    t.Transport = a
}, function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = /^#?\d+&/,
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return r(e, [{
                key: "_serialize",
                value: function(e, t) {
                    var n = [];
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var a = t ? t + "[" + r + "]" : r,
                                o = e[r];
                            "object" === (void 0 === o ? "undefined" : i(o)) ? n.push(this._serialize(o, a)): n.push(encodeURIComponent(a) + "=" + encodeURIComponent(o))
                        } return n.join("&")
                }
            }, {
                key: "_deserialize",
                value: function(e) {
                    for (var t = {}, n = e.split("&"), i = n.length, r = 0; r < i;) {
                        var a = n[r].split("=");
                        a[0] = decodeURIComponent(a[0]), a[1] = decodeURIComponent(a[1]);
                        for (var o = a[0], s = [], u = -1; - 1 !== (u = o.indexOf("["));) s.push(o.substr(u, o.indexOf("]") - u + 1)), o = o.substr(o.indexOf("]") + 1);
                        if (0 === s.length) t[a[0]] = a[1];
                        else {
                            void 0 === t[u = a[0].substr(0, a[0].indexOf("["))] && (t[u] = {}), o = t[u];
                            for (var l = s.length, c = 0; c < l - 1;) void 0 === o[u = s[c].substr(1, s[c].length - 2)] && (o[u] = {}), o = o[u], ++c;
                            o[u = (s = s[l - 1]).substr(1, s.length - 2)] = a[1]
                        }++r
                    }
                    return t
                }
            }, {
                key: "receiveMessage",
                value: function(e, t) {
                    var n = this;
                    if ("undefined" != typeof window)
                        if (void 0 !== window.postMessage) {
                            var i = function(i) {
                                if (i.origin.toLowerCase() !== t.toLowerCase()) return !1;
                                e(n._deserialize(i.data))
                            };
                            window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent("onmessage", i)
                        } else {
                            var r = window.location.hash;
                            setInterval(function() {
                                var t = window.location.hash;
                                t !== r && a.test(t) && (r = t, window.location.hash = "", e(n._deserialize(t.replace(a, ""))))
                            }, 100)
                        }
                }
            }, {
                key: "postMessage",
                value: function(e, t, n, i) {
                    if ("undefined" != typeof window)
                        if (e = this._serialize(e), void 0 === window.postMessage) {
                            var r = n + "#" + (+new Date + Math.floor(1e3 * Math.random())) + "&" + e;
                            i.location.href = r
                        } else i.postMessage(e, t)
                }
            }]), e
        }();
    t.XD = o
}, function(e, t, n) {
    "use strict";
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return i(e, [{
            key: "cardNumber",
            value: function(e) {
                if (!e) return !1;
                var t = (e + "").replace(/\s+|-/g, "");
                return !!(t.length >= 14 && t.length <= 16 && this.luhnCheck(t))
            }
        }, {
            key: "luhnCheck",
            value: function(e) {
                for (var t = !0, n = 0, i = (e + "").split("").reverse(), r = 0, a = i.length; r < a; r++) {
                    var o = i[r],
                        s = parseInt(o, 10);
                    (t = !t) && (s *= 2), s > 9 && (s -= 9), n += s
                }
                return n % 10 == 0
            }
        }, {
            key: "expiry",
            value: function(e, t) {
                if (!e || !t) return !1;
                var n = this.trimNumber(e),
                    i = this.trimNumber(t);
                if (/^\d+$/.test(n) && /^\d+$/.test(i) && parseInt(n, 10) <= 12) {
                    var r = new Date(parseInt(i, 10), parseInt(n, 10)),
                        a = new Date;
                    if (r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > a) return !0
                }
                return !1
            }
        }, {
            key: "cvc",
            value: function(e) {
                var t = this.trimNumber(e);
                return !!(/^\d+$/.test(t) && t.length >= 3 && t.length <= 4)
            }
        }, {
            key: "name",
            value: function(e) {
                return !!e && this.trim(e).length > 0
            }
        }, {
            key: "trim",
            value: function(e) {
                return String(e).replace(/(^\s+)|(\s+$)/g, "")
            }
        }, {
            key: "trimNumber",
            value: function(e) {
                return (e + "").replace(/^\s+|\s+$/g, "")
            }
        }, {
            key: "cardType",
            value: function(e) {
                if (!e) return "Unknown";
                for (var t = String(e), n = {}, i = void 0, r = i = 40; i <= 49;) n[r] = "Visa", r = ++i;
                var a = void 0;
                for (r = a = 50; a <= 59;) n[r] = "MasterCard", r = ++a;
                return n[34] = n[37] = "American Express", n[60] = n[62] = n[64] = n[65] = "Discover", n[35] = "JCB", n[30] = n[36] = n[38] = n[39] = "Diners Club", n[t.slice(0, 2)] || "Unknown"
            }
        }]), e
    }();
    t.Validator = r
}, function(e, t, n) {
    "use strict";
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
            Visa: "visa",
            MasterCard: "masterCard",
            JCB: "jcb",
            "American Express": "amex",
            Discover: null,
            "Diners Club": null
        },
        a = function() {
            function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.payjp = t, this.merchantId = n
            }
            return i(e, [{
                key: "isOverHTTPS",
                value: function() {
                    return "https:" === window.location.protocol
                }
            }, {
                key: "_fetchMerchantId",
                value: function(e) {
                    this.payjp.transport.callAPI("GET", "accounts/apple_pay/partner_internal_merchant_identifier", {}, this.payjp.getPublicKey(), e)
                }
            }, {
                key: "checkAvailability",
                value: function(e) {
                    var t = this;
                    if (null === e) throw new Error("蠑墓焚縺ｫ繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ髢｢謨ｰ繧呈欠螳壹＠縺ｦ縺上□縺輔＞");
                    this.isOverHTTPS() && "undefined" != typeof ApplePaySession && ApplePaySession.canMakePayments() ? Promise.all([new Promise(function(e, n) {
                        t.payjp.retrieveAvailability(function(t, i) {
                            200 !== t ? n(i) : e(i)
                        })
                    }), new Promise(function(e, n) {
                        t._fetchMerchantId(function(i, r) {
                            200 !== i && n(r), "merchant_id" in r && (t.merchantId = r.merchant_id), e(t.merchantId)
                        })
                    }).then(function(e) {
                        return ApplePaySession.canMakePaymentsWithActiveCard(e)
                    })]).then(function(n) {
                        if (t._supportedNetworks = n[0].card_types_supported.map(function(e) {
                                return r[e]
                            }).filter(function(e) {
                                return e
                            }), 0 === t._supportedNetworks.length) throw new Error("蛻ｩ逕ｨ蜿ｯ閭ｽ縺ｪ繧ｫ繝ｼ繝峨ヶ繝ｩ繝ｳ繝峨′縺ゅｊ縺ｾ縺帙ｓ");
                        e(n[1])
                    }).catch(function(t) {
                        e(!1)
                    }) : e(!1)
                }
            }, {
                key: "setDisplayName",
                value: function(e) {
                    this.displayName = e
                }
            }, {
                key: "_startSession",
                value: function(e, t) {
                    var n = {
                        domain: window.location.host,
                        validation_url: e,
                        display_name: this.displayName || window.location.host
                    };
                    this.payjp.transport.callAPI("POST", "accounts/apple_pay/sessions", n, this.payjp.getPublicKey(), t)
                }
            }, {
                key: "buildSession",
                value: function(e, t, n) {
                    var i = this;
                    if (null === t || null === n) throw new Error("蠑墓焚縺ｫ繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ髢｢謨ｰ繧呈欠螳壹＠縺ｦ縺上□縺輔＞");
                    e.merchantCapabilities = ["supports3DS"], e.supportedNetworks = this._supportedNetworks || ["amex", "discover", "jcb", "masterCard", "visa"];
                    var r = new ApplePaySession(2, e);
                    return r.onvalidatemerchant = function(e) {
                        i._startSession(e.validationURL, function(e, t) {
                            if (200 !== e) return r.completeMerchantValidation({}), void n(t);
                            r.completeMerchantValidation(t)
                        })
                    }, r.onpaymentauthorized = function(e) {
                        var a = e.payment;
                        i.payjp.createToken(encodeURI(JSON.stringify(a.token.paymentData)), function(e, i) {
                            200 === e ? (a.token = i, t(a)) : (r.completePayment(ApplePaySession.STATUS_FAILURE), n(i))
                        })
                    }, r
                }
            }]), e
        }();
    t.ApplePay = a
}]);
