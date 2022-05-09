/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
    e = (t, e, n = null) => { for (; e !== n;) { const n = e.nextSibling;
            t.removeChild(e), e = n } },
    n = `{{lit-${String(Math.random()).slice(2)}}}`,
    i = `\x3c!--${n}--\x3e`,
    r = new RegExp(`${n}|${i}`);
class s { constructor(t, e) { this.parts = [], this.element = e; const i = [],
            s = [],
            o = document.createTreeWalker(e.content, 133, null, !1); let c = 0,
            u = -1,
            d = 0; const { strings: p, values: { length: m } } = t; for (; d < m;) { const t = o.nextNode(); if (null !== t) { if (u++, 1 === t.nodeType) { if (t.hasAttributes()) { const e = t.attributes,
                            { length: n } = e; let i = 0; for (let t = 0; t < n; t++) a(e[t].name, "$lit$") && i++; for (; i-- > 0;) { const e = p[d],
                                n = h.exec(e)[2],
                                i = n.toLowerCase() + "$lit$",
                                s = t.getAttribute(i);
                            t.removeAttribute(i); const a = s.split(r);
                            this.parts.push({ type: "attribute", index: u, name: n, strings: a }), d += a.length - 1 } } "TEMPLATE" === t.tagName && (s.push(t), o.currentNode = t.content) } else if (3 === t.nodeType) { const e = t.data; if (e.indexOf(n) >= 0) { const n = t.parentNode,
                            s = e.split(r),
                            o = s.length - 1; for (let e = 0; e < o; e++) { let i, r = s[e]; if ("" === r) i = l();
                            else { const t = h.exec(r);
                                null !== t && a(t[2], "$lit$") && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -"$lit$".length) + t[3]), i = document.createTextNode(r) }
                            n.insertBefore(i, t), this.parts.push({ type: "node", index: ++u }) } "" === s[o] ? (n.insertBefore(l(), t), i.push(t)) : t.data = s[o], d += o } } else if (8 === t.nodeType)
                    if (t.data === n) { const e = t.parentNode;
                        null !== t.previousSibling && u !== c || (u++, e.insertBefore(l(), t)), c = u, this.parts.push({ type: "node", index: u }), null === t.nextSibling ? t.data = "" : (i.push(t), u--), d++ } else { let e = -1; for (; - 1 !== (e = t.data.indexOf(n, e + 1));) this.parts.push({ type: "node", index: -1 }), d++ } } else o.currentNode = s.pop() } for (const t of i) t.parentNode.removeChild(t) } }
const a = (t, e) => { const n = t.length - e.length; return n >= 0 && t.slice(n) === e },
    o = t => -1 !== t.index,
    l = () => document.createComment(""),
    h = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

function c(t, e) { const { element: { content: n }, parts: i } = t, r = document.createTreeWalker(n, 133, null, !1); let s = d(i),
        a = i[s],
        o = -1,
        l = 0; const h = []; let c = null; for (; r.nextNode();) { o++; const t = r.currentNode; for (t.previousSibling === c && (c = null), e.has(t) && (h.push(t), null === c && (c = t)), null !== c && l++; void 0 !== a && a.index === o;) a.index = null !== c ? -1 : a.index - l, s = d(i, s), a = i[s] }
    h.forEach((t => t.parentNode.removeChild(t))) }
const u = t => { let e = 11 === t.nodeType ? 0 : 1; const n = document.createTreeWalker(t, 133, null, !1); for (; n.nextNode();) e++; return e },
    d = (t, e = -1) => { for (let n = e + 1; n < t.length; n++) { const e = t[n]; if (o(e)) return n } return -1 };
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p = new WeakMap,
    m = t => "function" == typeof t && p.has(t),
    f = {},
    g = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v { constructor(t, e, n) { this.__parts = [], this.template = t, this.processor = e, this.options = n }
    update(t) { let e = 0; for (const n of this.__parts) void 0 !== n && n.setValue(t[e]), e++; for (const t of this.__parts) void 0 !== t && t.commit() }
    _clone() { const e = t ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
            n = [],
            i = this.template.parts,
            r = document.createTreeWalker(e, 133, null, !1); let s, a = 0,
            l = 0,
            h = r.nextNode(); for (; a < i.length;)
            if (s = i[a], o(s)) { for (; l < s.index;) l++, "TEMPLATE" === h.nodeName && (n.push(h), r.currentNode = h.content), null === (h = r.nextNode()) && (r.currentNode = n.pop(), h = r.nextNode()); if ("node" === s.type) { const t = this.processor.handleTextExpression(this.options);
                    t.insertAfterNode(h.previousSibling), this.__parts.push(t) } else this.__parts.push(...this.processor.handleAttributeExpressions(h, s.name, s.strings, this.options));
                a++ } else this.__parts.push(void 0), a++;
        return t && (document.adoptNode(e), customElements.upgrade(e)), e } }
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: t => t }),
    x = ` ${n} `;
class _ { constructor(t, e, n, i) { this.strings = t, this.values = e, this.type = n, this.processor = i }
    getHTML() { const t = this.strings.length - 1; let e = "",
            r = !1; for (let s = 0; s < t; s++) { const t = this.strings[s],
                a = t.lastIndexOf("\x3c!--");
            r = (a > -1 || r) && -1 === t.indexOf("--\x3e", a + 1); const o = h.exec(t);
            e += null === o ? t + (r ? x : i) : t.substr(0, o.index) + o[1] + o[2] + "$lit$" + o[3] + n } return e += this.strings[t], e }
    getTemplateElement() { const t = document.createElement("template"); let e = this.getHTML(); return void 0 !== y && (e = y.createHTML(e)), t.innerHTML = e, t } }
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b = t => null === t || !("object" == typeof t || "function" == typeof t),
    w = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
class M { constructor(t, e, n) { this.dirty = !0, this.element = t, this.name = e, this.strings = n, this.parts = []; for (let t = 0; t < n.length - 1; t++) this.parts[t] = this._createPart() }
    _createPart() { return new S(this) }
    _getValue() { const t = this.strings,
            e = t.length - 1,
            n = this.parts; if (1 === e && "" === t[0] && "" === t[1]) { const t = n[0].value; if ("symbol" == typeof t) return String(t); if ("string" == typeof t || !w(t)) return t } let i = ""; for (let r = 0; r < e; r++) { i += t[r]; const e = n[r]; if (void 0 !== e) { const t = e.value; if (b(t) || !w(t)) i += "string" == typeof t ? t : String(t);
                else
                    for (const e of t) i += "string" == typeof e ? e : String(e) } } return i += t[e], i }
    commit() { this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue())) } }
class S { constructor(t) { this.value = void 0, this.committer = t }
    setValue(t) { t === f || b(t) && t === this.value || (this.value = t, m(t) || (this.committer.dirty = !0)) }
    commit() { for (; m(this.value);) { const t = this.value;
            this.value = f, t(this) }
        this.value !== f && this.committer.commit() } }
class T { constructor(t) { this.value = void 0, this.__pendingValue = void 0, this.options = t }
    appendInto(t) { this.startNode = t.appendChild(l()), this.endNode = t.appendChild(l()) }
    insertAfterNode(t) { this.startNode = t, this.endNode = t.nextSibling }
    appendIntoPart(t) { t.__insert(this.startNode = l()), t.__insert(this.endNode = l()) }
    insertAfterPart(t) { t.__insert(this.startNode = l()), this.endNode = t.endNode, t.endNode = this.startNode }
    setValue(t) { this.__pendingValue = t }
    commit() { if (null === this.startNode.parentNode) return; for (; m(this.__pendingValue);) { const t = this.__pendingValue;
            this.__pendingValue = f, t(this) } const t = this.__pendingValue;
        t !== f && (b(t) ? t !== this.value && this.__commitText(t) : t instanceof _ ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : w(t) ? this.__commitIterable(t) : t === g ? (this.value = g, this.clear()) : this.__commitText(t)) }
    __insert(t) { this.endNode.parentNode.insertBefore(t, this.endNode) }
    __commitNode(t) { this.value !== t && (this.clear(), this.__insert(t), this.value = t) }
    __commitText(t) { const e = this.startNode.nextSibling,
            n = "string" == typeof(t = null == t ? "" : t) ? t : String(t);
        e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = n : this.__commitNode(document.createTextNode(n)), this.value = t }
    __commitTemplateResult(t) { const e = this.options.templateFactory(t); if (this.value instanceof v && this.value.template === e) this.value.update(t.values);
        else { const n = new v(e, t.processor, this.options),
                i = n._clone();
            n.update(t.values), this.__commitNode(i), this.value = n } }
    __commitIterable(t) { Array.isArray(this.value) || (this.value = [], this.clear()); const e = this.value; let n, i = 0; for (const r of t) n = e[i], void 0 === n && (n = new T(this.options), e.push(n), 0 === i ? n.appendIntoPart(this) : n.insertAfterPart(e[i - 1])), n.setValue(r), n.commit(), i++;
        i < e.length && (e.length = i, this.clear(n && n.endNode)) }
    clear(t = this.startNode) { e(this.startNode.parentNode, t.nextSibling, this.endNode) } }
class E { constructor(t, e, n) { if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");
        this.element = t, this.name = e, this.strings = n }
    setValue(t) { this.__pendingValue = t }
    commit() { for (; m(this.__pendingValue);) { const t = this.__pendingValue;
            this.__pendingValue = f, t(this) } if (this.__pendingValue === f) return; const t = !!this.__pendingValue;
        this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = f } }
class A extends M { constructor(t, e, n) { super(t, e, n), this.single = 2 === n.length && "" === n[0] && "" === n[1] }
    _createPart() { return new R(this) }
    _getValue() { return this.single ? this.parts[0].value : super._getValue() }
    commit() { this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue()) } }
class R extends S {}
let C = !1;
(() => { try { const t = {get capture() { return C = !0, !1 } };
        window.addEventListener("test", t, t), window.removeEventListener("test", t, t) } catch (t) {} })();
class L { constructor(t, e, n) { this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = n, this.__boundHandleEvent = t => this.handleEvent(t) }
    setValue(t) { this.__pendingValue = t }
    commit() { for (; m(this.__pendingValue);) { const t = this.__pendingValue;
            this.__pendingValue = f, t(this) } if (this.__pendingValue === f) return; const t = this.__pendingValue,
            e = this.value,
            n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
            i = null != t && (null == e || n);
        n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), i && (this.__options = P(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = f }
    handleEvent(t) { "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t) } }
const P = t => t && (C ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture)
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
;

function D(t) { let e = I.get(t.type);
    void 0 === e && (e = { stringsArray: new WeakMap, keyString: new Map }, I.set(t.type, e)); let i = e.stringsArray.get(t.strings); if (void 0 !== i) return i; const r = t.strings.join(n); return i = e.keyString.get(r), void 0 === i && (i = new s(t, t.getTemplateElement()), e.keyString.set(r, i)), e.stringsArray.set(t.strings, i), i }
const I = new Map,
    O = new WeakMap,
    N = (t, n, i) => { let r = O.get(n);
        void 0 === r && (e(n, n.firstChild), O.set(n, r = new T(Object.assign({ templateFactory: D }, i))), r.appendInto(n)), r.setValue(t), r.commit() };
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F = new
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
class { handleAttributeExpressions(t, e, n, i) { const r = e[0]; if ("." === r) { return new A(t, e.slice(1), n).parts } if ("@" === r) return [new L(t, e.slice(1), i.eventContext)]; if ("?" === r) return [new E(t, e.slice(1), n)]; return new M(t, e, n).parts }
    handleTextExpression(t) { return new T(t) } };
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
const U = (t, ...e) => new _(t, e, "html", F)
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    ,
    k = (t, e) => `${t}--${e}`;
let B = !0;
void 0 === window.ShadyCSS ? B = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), B = !1);
const z = t => e => { const i = k(e.type, t); let r = I.get(i);
        void 0 === r && (r = { stringsArray: new WeakMap, keyString: new Map }, I.set(i, r)); let a = r.stringsArray.get(e.strings); if (void 0 !== a) return a; const o = e.strings.join(n); if (a = r.keyString.get(o), void 0 === a) { const n = e.getTemplateElement();
            B && window.ShadyCSS.prepareTemplateDom(n, t), a = new s(e, n), r.keyString.set(o, a) } return r.stringsArray.set(e.strings, a), a },
    H = ["html", "svg"],
    V = new Set,
    G = (t, e, n) => { V.add(t); const i = n ? n.element : document.createElement("template"),
            r = e.querySelectorAll("style"),
            { length: s } = r; if (0 === s) return void window.ShadyCSS.prepareTemplateStyles(i, t); const a = document.createElement("style"); for (let t = 0; t < s; t++) { const e = r[t];
            e.parentNode.removeChild(e), a.textContent += e.textContent }(t => { H.forEach((e => { const n = I.get(k(e, t));
                void 0 !== n && n.keyString.forEach((t => { const { element: { content: e } } = t, n = new Set;
                    Array.from(e.querySelectorAll("style")).forEach((t => { n.add(t) })), c(t, n) })) })) })(t); const o = i.content;
        n ? function(t, e, n = null) { const { element: { content: i }, parts: r } = t; if (null == n) return void i.appendChild(e); const s = document.createTreeWalker(i, 133, null, !1); let a = d(r),
                o = 0,
                l = -1; for (; s.nextNode();)
                for (l++, s.currentNode === n && (o = u(e), n.parentNode.insertBefore(e, n)); - 1 !== a && r[a].index === l;) { if (o > 0) { for (; - 1 !== a;) r[a].index += o, a = d(r, a); return }
                    a = d(r, a) } }(n, a, o.firstChild) : o.insertBefore(a, o.firstChild), window.ShadyCSS.prepareTemplateStyles(i, t); const l = o.querySelector("style"); if (window.ShadyCSS.nativeShadow && null !== l) e.insertBefore(l.cloneNode(!0), e.firstChild);
        else if (n) { o.insertBefore(a, o.firstChild); const t = new Set;
            t.add(a), c(n, t) } };
window.JSCompiler_renameProperty = (t, e) => t;
const W = { toAttribute(t, e) { switch (e) {
                case Boolean:
                    return t ? "" : null;
                case Object:
                case Array:
                    return null == t ? t : JSON.stringify(t) } return t }, fromAttribute(t, e) { switch (e) {
                case Boolean:
                    return null !== t;
                case Number:
                    return null === t ? null : Number(t);
                case Object:
                case Array:
                    return JSON.parse(t) } return t } },
    j = (t, e) => e !== t && (e == e || t == t),
    q = { attribute: !0, type: String, converter: W, reflect: !1, hasChanged: j };
class X extends HTMLElement { constructor() { super(), this.initialize() }
    static get observedAttributes() { this.finalize(); const t = []; return this._classProperties.forEach(((e, n) => { const i = this._attributeNameForProperty(n, e);
            void 0 !== i && (this._attributeToPropertyMap.set(i, n), t.push(i)) })), t }
    static _ensureClassProperties() { if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) { this._classProperties = new Map; const t = Object.getPrototypeOf(this)._classProperties;
            void 0 !== t && t.forEach(((t, e) => this._classProperties.set(e, t))) } }
    static createProperty(t, e = q) { if (this._ensureClassProperties(), this._classProperties.set(t, e), e.noAccessor || this.prototype.hasOwnProperty(t)) return; const n = "symbol" == typeof t ? Symbol() : `__${t}`,
            i = this.getPropertyDescriptor(t, n, e);
        void 0 !== i && Object.defineProperty(this.prototype, t, i) }
    static getPropertyDescriptor(t, e, n) { return {get() { return this[e] }, set(i) { const r = this[t];
                this[e] = i, this.requestUpdateInternal(t, r, n) }, configurable: !0, enumerable: !0 } }
    static getPropertyOptions(t) { return this._classProperties && this._classProperties.get(t) || q }
    static finalize() { const t = Object.getPrototypeOf(this); if (t.hasOwnProperty("finalized") || t.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) { const t = this.properties,
                e = [...Object.getOwnPropertyNames(t), ...
                    "function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : []
                ]; for (const n of e) this.createProperty(n, t[n]) } }
    static _attributeNameForProperty(t, e) { const n = e.attribute; return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof t ? t.toLowerCase() : void 0 }
    static _valueHasChanged(t, e, n = j) { return n(t, e) }
    static _propertyValueFromAttribute(t, e) { const n = e.type,
            i = e.converter || W,
            r = "function" == typeof i ? i : i.fromAttribute; return r ? r(t, n) : t }
    static _propertyValueToAttribute(t, e) { if (void 0 === e.reflect) return; const n = e.type,
            i = e.converter; return (i && i.toAttribute || W.toAttribute)(t, n) }
    initialize() { this._updateState = 0, this._updatePromise = new Promise((t => this._enableUpdatingResolver = t)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal() }
    _saveInstanceProperties() { this.constructor._classProperties.forEach(((t, e) => { if (this.hasOwnProperty(e)) { const t = this[e];
                delete this[e], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(e, t) } })) }
    _applyInstanceProperties() { this._instanceProperties.forEach(((t, e) => this[e] = t)), this._instanceProperties = void 0 }
    connectedCallback() { this.enableUpdating() }
    enableUpdating() { void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0) }
    disconnectedCallback() {}
    attributeChangedCallback(t, e, n) { e !== n && this._attributeToProperty(t, n) }
    _propertyToAttribute(t, e, n = q) { const i = this.constructor,
            r = i._attributeNameForProperty(t, n); if (void 0 !== r) { const t = i._propertyValueToAttribute(e, n); if (void 0 === t) return;
            this._updateState = 8 | this._updateState, null == t ? this.removeAttribute(r) : this.setAttribute(r, t), this._updateState = -9 & this._updateState } }
    _attributeToProperty(t, e) { if (8 & this._updateState) return; const n = this.constructor,
            i = n._attributeToPropertyMap.get(t); if (void 0 !== i) { const t = n.getPropertyOptions(i);
            this._updateState = 16 | this._updateState, this[i] = n._propertyValueFromAttribute(e, t), this._updateState = -17 & this._updateState } }
    requestUpdateInternal(t, e, n) { let i = !0; if (void 0 !== t) { const r = this.constructor;
            n = n || r.getPropertyOptions(t), r._valueHasChanged(this[t], e, n.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e), !0 !== n.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(t, n))) : i = !1 }!this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate()) }
    requestUpdate(t, e) { return this.requestUpdateInternal(t, e), this.updateComplete }
    async _enqueueUpdate() { this._updateState = 4 | this._updateState; try { await this._updatePromise } catch (t) {} const t = this.performUpdate(); return null != t && await t, !this._hasRequestedUpdate }
    get _hasRequestedUpdate() { return 4 & this._updateState }
    get hasUpdated() { return 1 & this._updateState }
    performUpdate() { if (!this._hasRequestedUpdate) return;
        this._instanceProperties && this._applyInstanceProperties(); let t = !1; const e = this._changedProperties; try { t = this.shouldUpdate(e), t ? this.update(e) : this._markUpdated() } catch (e) { throw t = !1, this._markUpdated(), e }
        t && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(e)), this.updated(e)) }
    _markUpdated() { this._changedProperties = new Map, this._updateState = -5 & this._updateState }
    get updateComplete() { return this._getUpdateComplete() }
    _getUpdateComplete() { return this.getUpdateComplete() }
    getUpdateComplete() { return this._updatePromise }
    shouldUpdate(t) { return !0 }
    update(t) { void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((t, e) => this._propertyToAttribute(e, this[e], t))), this._reflectingProperties = void 0), this._markUpdated() }
    updated(t) {}
    firstUpdated(t) {} }
X.finalized = !0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Y = (t, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), { finisher(n) { n.createProperty(e.key, t) } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, initializer() { "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this)) }, finisher(n) { n.createProperty(e.key, t) } };

function J(t) { return (e, n) => void 0 !== n ? ((t, e, n) => { e.constructor.createProperty(n, t) })(t, e, n) : Y(t, e) }
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Z = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    $ = Symbol();
class K { constructor(t, e) { if (e !== $) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t }
    get styleSheet() { return void 0 === this._styleSheet && (Z ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet }
    toString() { return this.cssText } }
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions || (window.litElementVersions = [])).push("2.5.1");
const Q = {};
class tt extends X { static getStyles() { return this.styles }
    static _getUniqueStyles() { if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return; const t = this.getStyles(); if (Array.isArray(t)) { const e = (t, n) => t.reduceRight(((t, n) => Array.isArray(n) ? e(n, t) : (t.add(n), t)), n),
                n = e(t, new Set),
                i = [];
            n.forEach((t => i.unshift(t))), this._styles = i } else this._styles = void 0 === t ? [] : [t];
        this._styles = this._styles.map((t => { if (t instanceof CSSStyleSheet && !Z) { const e = Array.prototype.slice.call(t.cssRules).reduce(((t, e) => t + e.cssText), ""); return new K(String(e), $) } return t })) }
    initialize() { super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles() }
    createRenderRoot() { return this.attachShadow(this.constructor.shadowRootOptions) }
    adoptStyles() { const t = this.constructor._styles;
        0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? Z ? this.renderRoot.adoptedStyleSheets = t.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t => t.cssText)), this.localName)) }
    connectedCallback() { super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this) }
    update(t) { const e = this.render();
        super.update(t), e !== Q && this.constructor.render(e, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((t => { const e = document.createElement("style");
            e.textContent = t.cssText, this.renderRoot.appendChild(e) }))) }
    render() { return Q } }
tt.finalized = !0, tt.render = (t, n, i) => { if (!i || "object" != typeof i || !i.scopeName) throw new Error("The `scopeName` option is required."); const r = i.scopeName,
        s = O.has(n),
        a = B && 11 === n.nodeType && !!n.host,
        o = a && !V.has(r),
        l = o ? document.createDocumentFragment() : n; if (N(t, l, Object.assign({ templateFactory: z(r) }, i)), o) { const t = O.get(l);
        O.delete(l); const i = t.value instanceof v ? t.value.template : void 0;
        G(r, l, i), e(n, n.firstChild), n.appendChild(l), O.set(n, t) }!s && a && window.ShadyCSS.styleElement(n.host) }, tt.shadowRootOptions = { mode: "open" };
class et { addEventListener(t, e) { void 0 === this._listeners && (this._listeners = {}); const n = this._listeners;
        void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e) }
    hasEventListener(t, e) { if (void 0 === this._listeners) return !1; const n = this._listeners; return void 0 !== n[t] && -1 !== n[t].indexOf(e) }
    removeEventListener(t, e) { if (void 0 === this._listeners) return; const n = this._listeners[t]; if (void 0 !== n) { const t = n.indexOf(e); - 1 !== t && n.splice(t, 1) } }
    dispatchEvent(t) { if (void 0 === this._listeners) return; const e = this._listeners[t.type]; if (void 0 !== e) { t.target = this; const n = e.slice(0); for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null } } }
const nt = [];
for (let t = 0; t < 256; t++) nt[t] = (t < 16 ? "0" : "") + t.toString(16);
let it = 1234567;
const rt = Math.PI / 180,
    st = 180 / Math.PI;

function at() { const t = 4294967295 * Math.random() | 0,
        e = 4294967295 * Math.random() | 0,
        n = 4294967295 * Math.random() | 0,
        i = 4294967295 * Math.random() | 0; return (nt[255 & t] + nt[t >> 8 & 255] + nt[t >> 16 & 255] + nt[t >> 24 & 255] + "-" + nt[255 & e] + nt[e >> 8 & 255] + "-" + nt[e >> 16 & 15 | 64] + nt[e >> 24 & 255] + "-" + nt[63 & n | 128] + nt[n >> 8 & 255] + "-" + nt[n >> 16 & 255] + nt[n >> 24 & 255] + nt[255 & i] + nt[i >> 8 & 255] + nt[i >> 16 & 255] + nt[i >> 24 & 255]).toLowerCase() }

function ot(t, e, n) { return Math.max(e, Math.min(n, t)) }

function lt(t, e) { return (t % e + e) % e }

function ht(t, e, n) { return (1 - n) * t + n * e }

function ct(t) { return 0 == (t & t - 1) && 0 !== t }

function ut(t) { return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2)) }

function dt(t) { return Math.pow(2, Math.floor(Math.log(t) / Math.LN2)) }
var pt = Object.freeze({ __proto__: null, DEG2RAD: rt, RAD2DEG: st, generateUUID: at, clamp: ot, euclideanModulo: lt, mapLinear: function(t, e, n, i, r) { return i + (t - e) * (r - i) / (n - e) }, inverseLerp: function(t, e, n) { return t !== e ? (n - t) / (e - t) : 0 }, lerp: ht, damp: function(t, e, n, i) { return ht(t, e, 1 - Math.exp(-n * i)) }, pingpong: function(t, e = 1) { return e - Math.abs(lt(t, 2 * e) - e) }, smoothstep: function(t, e, n) { return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t) }, smootherstep: function(t, e, n) { return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10) }, randInt: function(t, e) { return t + Math.floor(Math.random() * (e - t + 1)) }, randFloat: function(t, e) { return t + Math.random() * (e - t) }, randFloatSpread: function(t) { return t * (.5 - Math.random()) }, seededRandom: function(t) { void 0 !== t && (it = t); let e = it += 1831565813; return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296 }, degToRad: function(t) { return t * rt }, radToDeg: function(t) { return t * st }, isPowerOfTwo: ct, ceilPowerOfTwo: ut, floorPowerOfTwo: dt, setQuaternionFromProperEuler: function(t, e, n, i, r) { const s = Math.cos,
            a = Math.sin,
            o = s(n / 2),
            l = a(n / 2),
            h = s((e + i) / 2),
            c = a((e + i) / 2),
            u = s((e - i) / 2),
            d = a((e - i) / 2),
            p = s((i - e) / 2),
            m = a((i - e) / 2); switch (r) {
            case "XYX":
                t.set(o * c, l * u, l * d, o * h); break;
            case "YZY":
                t.set(l * d, o * c, l * u, o * h); break;
            case "ZXZ":
                t.set(l * u, l * d, o * c, o * h); break;
            case "XZX":
                t.set(o * c, l * m, l * p, o * h); break;
            case "YXY":
                t.set(l * p, o * c, l * m, o * h); break;
            case "ZYZ":
                t.set(l * m, l * p, o * c, o * h); break;
            default:
                console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r) } }, normalize: function(t, e) { switch (e.constructor) {
            case Float32Array:
                return t;
            case Uint16Array:
                return Math.round(65535 * t);
            case Uint8Array:
                return Math.round(255 * t);
            case Int16Array:
                return Math.round(32767 * t);
            case Int8Array:
                return Math.round(127 * t);
            default:
                throw new Error("Invalid component type.") } }, denormalize: function(t, e) { switch (e.constructor) {
            case Float32Array:
                return t;
            case Uint16Array:
                return t / 65535;
            case Uint8Array:
                return t / 255;
            case Int16Array:
                return Math.max(t / 32767, -1);
            case Int8Array:
                return Math.max(t / 127, -1);
            default:
                throw new Error("Invalid component type.") } } });
class mt { constructor(t = 0, e = 0) { this.x = t, this.y = e }
    get width() { return this.x }
    set width(t) { this.x = t }
    get height() { return this.y }
    set height(t) { this.y = t }
    set(t, e) { return this.x = t, this.y = e, this }
    setScalar(t) { return this.x = t, this.y = t, this }
    setX(t) { return this.x = t, this }
    setY(t) { return this.y = t, this }
    setComponent(t, e) { switch (t) {
            case 0:
                this.x = e; break;
            case 1:
                this.y = e; break;
            default:
                throw new Error("index is out of range: " + t) } return this }
    getComponent(t) { switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t) } }
    clone() { return new this.constructor(this.x, this.y) }
    copy(t) { return this.x = t.x, this.y = t.y, this }
    add(t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this) }
    addScalar(t) { return this.x += t, this.y += t, this }
    addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this }
    addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this }
    sub(t, e) { return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this) }
    subScalar(t) { return this.x -= t, this.y -= t, this }
    subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this }
    multiply(t) { return this.x *= t.x, this.y *= t.y, this }
    multiplyScalar(t) { return this.x *= t, this.y *= t, this }
    divide(t) { return this.x /= t.x, this.y /= t.y, this }
    divideScalar(t) { return this.multiplyScalar(1 / t) }
    applyMatrix3(t) { const e = this.x,
            n = this.y,
            i = t.elements; return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this }
    min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this }
    max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this }
    clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this }
    clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this }
    clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }
    roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this }
    negate() { return this.x = -this.x, this.y = -this.y, this }
    dot(t) { return this.x * t.x + this.y * t.y }
    cross(t) { return this.x * t.y - this.y * t.x }
    lengthSq() { return this.x * this.x + this.y * this.y }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y) }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) }
    normalize() { return this.divideScalar(this.length() || 1) }
    angle() { return Math.atan2(-this.y, -this.x) + Math.PI }
    distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)) }
    distanceToSquared(t) { const e = this.x - t.x,
            n = this.y - t.y; return e * e + n * n }
    manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) }
    setLength(t) { return this.normalize().multiplyScalar(t) }
    lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this }
    lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this }
    equals(t) { return t.x === this.x && t.y === this.y }
    fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this }
    toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t }
    fromBufferAttribute(t, e, n) { return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this }
    rotateAround(t, e) { const n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            s = this.y - t.y; return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this }
    random() { return this.x = Math.random(), this.y = Math.random(), this } * [Symbol.iterator]() { yield this.x, yield this.y } }
mt.prototype.isVector2 = !0;
class ft { constructor() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.") }
    set(t, e, n, i, r, s, a, o, l) { const h = this.elements; return h[0] = t, h[1] = i, h[2] = a, h[3] = e, h[4] = r, h[5] = o, h[6] = n, h[7] = s, h[8] = l, this }
    identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this }
    copy(t) { const e = this.elements,
            n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this }
    extractBasis(t, e, n) { return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this }
    setFromMatrix4(t) { const e = t.elements; return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this }
    multiply(t) { return this.multiplyMatrices(this, t) }
    premultiply(t) { return this.multiplyMatrices(t, this) }
    multiplyMatrices(t, e) { const n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[3],
            o = n[6],
            l = n[1],
            h = n[4],
            c = n[7],
            u = n[2],
            d = n[5],
            p = n[8],
            m = i[0],
            f = i[3],
            g = i[6],
            v = i[1],
            y = i[4],
            x = i[7],
            _ = i[2],
            b = i[5],
            w = i[8]; return r[0] = s * m + a * v + o * _, r[3] = s * f + a * y + o * b, r[6] = s * g + a * x + o * w, r[1] = l * m + h * v + c * _, r[4] = l * f + h * y + c * b, r[7] = l * g + h * x + c * w, r[2] = u * m + d * v + p * _, r[5] = u * f + d * y + p * b, r[8] = u * g + d * x + p * w, this }
    multiplyScalar(t) { const e = this.elements; return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this }
    determinant() { const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8]; return e * s * h - e * a * l - n * r * h + n * a * o + i * r * l - i * s * o }
    invert() { const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8],
            c = h * s - a * l,
            u = a * o - h * r,
            d = l * r - s * o,
            p = e * c + n * u + i * d; if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const m = 1 / p; return t[0] = c * m, t[1] = (i * l - h * n) * m, t[2] = (a * n - i * s) * m, t[3] = u * m, t[4] = (h * e - i * o) * m, t[5] = (i * r - a * e) * m, t[6] = d * m, t[7] = (n * o - l * e) * m, t[8] = (s * e - n * r) * m, this }
    transpose() { let t; const e = this.elements; return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this }
    getNormalMatrix(t) { return this.setFromMatrix4(t).invert().transpose() }
    transposeIntoArray(t) { const e = this.elements; return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this }
    setUvTransform(t, e, n, i, r, s, a) { const o = Math.cos(r),
            l = Math.sin(r); return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this }
    scale(t, e) { const n = this.elements; return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this }
    rotate(t) { const e = Math.cos(t),
            n = Math.sin(t),
            i = this.elements,
            r = i[0],
            s = i[3],
            a = i[6],
            o = i[1],
            l = i[4],
            h = i[7]; return i[0] = e * r + n * o, i[3] = e * s + n * l, i[6] = e * a + n * h, i[1] = -n * r + e * o, i[4] = -n * s + e * l, i[7] = -n * a + e * h, this }
    translate(t, e) { const n = this.elements; return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this }
    equals(t) { const e = this.elements,
            n = t.elements; for (let t = 0; t < 9; t++)
            if (e[t] !== n[t]) return !1;
        return !0 }
    fromArray(t, e = 0) { for (let n = 0; n < 9; n++) this.elements[n] = t[n + e]; return this }
    toArray(t = [], e = 0) { const n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t }
    clone() { return (new this.constructor).fromArray(this.elements) } }

function gt(t) { for (let e = t.length - 1; e >= 0; --e)
        if (t[e] > 65535) return !0;
    return !1 }

function vt(t) { return document.createElementNS("http://www.w3.org/1999/xhtml", t) }

function yt(t) { return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4) }

function xt(t) { return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055 }
ft.prototype.isMatrix3 = !0;
const _t = { srgb: { "srgb-linear": yt }, "srgb-linear": { srgb: xt } },
    bt = { legacyMode: !0, get workingColorSpace() { return "srgb-linear" }, set workingColorSpace(t) { console.warn("THREE.ColorManagement: .workingColorSpace is readonly.") }, convert: function(t, e, n) { if (this.legacyMode || e === n || !e || !n) return t; if (_t[e] && void 0 !== _t[e][n]) { const i = _t[e][n]; return t.r = i(t.r), t.g = i(t.g), t.b = i(t.b), t } throw new Error("Unsupported color space conversion.") }, fromWorkingColorSpace: function(t, e) { return this.convert(t, this.workingColorSpace, e) }, toWorkingColorSpace: function(t, e) { return this.convert(t, e, this.workingColorSpace) } },
    wt = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 },
    Mt = { r: 0, g: 0, b: 0 },
    St = { h: 0, s: 0, l: 0 },
    Tt = { h: 0, s: 0, l: 0 };

function Et(t, e, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t }

function At(t, e) { return e.r = t.r, e.g = t.g, e.b = t.b, e }
class Rt { constructor(t, e, n) { return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n) }
    set(t) { return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this }
    setScalar(t) { return this.r = t, this.g = t, this.b = t, this }
    setHex(t, e = "srgb") { return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, bt.toWorkingColorSpace(this, e), this }
    setRGB(t, e, n, i = "srgb-linear") { return this.r = t, this.g = e, this.b = n, bt.toWorkingColorSpace(this, i), this }
    setHSL(t, e, n, i = "srgb-linear") { if (t = lt(t, 1), e = ot(e, 0, 1), n = ot(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
        else { const i = n <= .5 ? n * (1 + e) : n + e - n * e,
                r = 2 * n - i;
            this.r = Et(r, i, t + 1 / 3), this.g = Et(r, i, t), this.b = Et(r, i, t - 1 / 3) } return bt.toWorkingColorSpace(this, i), this }
    setStyle(t, e = "srgb") {
        function n(e) { void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.") } let i; if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) { let t; const r = i[1],
                s = i[2]; switch (r) {
                case "rgb":
                case "rgba":
                    if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, bt.toWorkingColorSpace(this, e), n(t[4]), this; if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, bt.toWorkingColorSpace(this, e), n(t[4]), this; break;
                case "hsl":
                case "hsla":
                    if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) { const i = parseFloat(t[1]) / 360,
                            r = parseInt(t[2], 10) / 100,
                            s = parseInt(t[3], 10) / 100; return n(t[4]), this.setHSL(i, r, s, e) } } } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) { const t = i[1],
                n = t.length; if (3 === n) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, bt.toWorkingColorSpace(this, e), this; if (6 === n) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, bt.toWorkingColorSpace(this, e), this } return t && t.length > 0 ? this.setColorName(t, e) : this }
    setColorName(t, e = "srgb") { const n = wt[t.toLowerCase()]; return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this }
    clone() { return new this.constructor(this.r, this.g, this.b) }
    copy(t) { return this.r = t.r, this.g = t.g, this.b = t.b, this }
    copySRGBToLinear(t) { return this.r = yt(t.r), this.g = yt(t.g), this.b = yt(t.b), this }
    copyLinearToSRGB(t) { return this.r = xt(t.r), this.g = xt(t.g), this.b = xt(t.b), this }
    convertSRGBToLinear() { return this.copySRGBToLinear(this), this }
    convertLinearToSRGB() { return this.copyLinearToSRGB(this), this }
    getHex(t = "srgb") { return bt.fromWorkingColorSpace(At(this, Mt), t), ot(255 * Mt.r, 0, 255) << 16 ^ ot(255 * Mt.g, 0, 255) << 8 ^ ot(255 * Mt.b, 0, 255) << 0 }
    getHexString(t = "srgb") { return ("000000" + this.getHex(t).toString(16)).slice(-6) }
    getHSL(t, e = "srgb-linear") { bt.fromWorkingColorSpace(At(this, Mt), e); const n = Mt.r,
            i = Mt.g,
            r = Mt.b,
            s = Math.max(n, i, r),
            a = Math.min(n, i, r); let o, l; const h = (a + s) / 2; if (a === s) o = 0, l = 0;
        else { const t = s - a; switch (l = h <= .5 ? t / (s + a) : t / (2 - s - a), s) {
                case n:
                    o = (i - r) / t + (i < r ? 6 : 0); break;
                case i:
                    o = (r - n) / t + 2; break;
                case r:
                    o = (n - i) / t + 4 }
            o /= 6 } return t.h = o, t.s = l, t.l = h, t }
    getRGB(t, e = "srgb-linear") { return bt.fromWorkingColorSpace(At(this, Mt), e), t.r = Mt.r, t.g = Mt.g, t.b = Mt.b, t }
    getStyle(t = "srgb") { return bt.fromWorkingColorSpace(At(this, Mt), t), "srgb" !== t ? `color(${t} ${Mt.r} ${Mt.g} ${Mt.b})` : `rgb(${255*Mt.r|0},${255*Mt.g|0},${255*Mt.b|0})` }
    offsetHSL(t, e, n) { return this.getHSL(St), St.h += t, St.s += e, St.l += n, this.setHSL(St.h, St.s, St.l), this }
    add(t) { return this.r += t.r, this.g += t.g, this.b += t.b, this }
    addColors(t, e) { return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this }
    addScalar(t) { return this.r += t, this.g += t, this.b += t, this }
    sub(t) { return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this }
    multiply(t) { return this.r *= t.r, this.g *= t.g, this.b *= t.b, this }
    multiplyScalar(t) { return this.r *= t, this.g *= t, this.b *= t, this }
    lerp(t, e) { return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this }
    lerpColors(t, e, n) { return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this }
    lerpHSL(t, e) { this.getHSL(St), t.getHSL(Tt); const n = ht(St.h, Tt.h, e),
            i = ht(St.s, Tt.s, e),
            r = ht(St.l, Tt.l, e); return this.setHSL(n, i, r), this }
    equals(t) { return t.r === this.r && t.g === this.g && t.b === this.b }
    fromArray(t, e = 0) { return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this }
    toArray(t = [], e = 0) { return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t }
    fromBufferAttribute(t, e) { return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this }
    toJSON() { return this.getHex() } }
let Ct;
Rt.NAMES = wt, Rt.prototype.isColor = !0, Rt.prototype.r = 1, Rt.prototype.g = 1, Rt.prototype.b = 1;
class Lt { static getDataURL(t) { if (/^data:/i.test(t.src)) return t.src; if ("undefined" == typeof HTMLCanvasElement) return t.src; let e; if (t instanceof HTMLCanvasElement) e = t;
        else { void 0 === Ct && (Ct = vt("canvas")), Ct.width = t.width, Ct.height = t.height; const n = Ct.getContext("2d");
            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Ct } return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png") }
    static sRGBToLinear(t) { if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) { const e = vt("canvas");
            e.width = t.width, e.height = t.height; const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height); const i = n.getImageData(0, 0, t.width, t.height),
                r = i.data; for (let t = 0; t < r.length; t++) r[t] = 255 * yt(r[t] / 255); return n.putImageData(i, 0, 0), e } if (t.data) { const e = t.data.slice(0); for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * yt(e[t] / 255)) : e[t] = yt(e[t]); return { data: e, width: t.width, height: t.height } } return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t } }
class Pt { constructor(t = null) { this.uuid = at(), this.data = t, this.version = 0 }
    set needsUpdate(t) {!0 === t && this.version++ }
    toJSON(t) { const e = void 0 === t || "string" == typeof t; if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid]; const n = { uuid: this.uuid, url: "" },
            i = this.data; if (null !== i) { let t; if (Array.isArray(i)) { t = []; for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(Dt(i[e].image)) : t.push(Dt(i[e])) } else t = Dt(i);
            n.url = t } return e || (t.images[this.uuid] = n), n } }

function Dt(t) { return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Lt.getDataURL(t) : t.data ? { data: Array.prototype.slice.call(t.data), width: t.width, height: t.height, type: t.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) }
Pt.prototype.isSource = !0;
let It = 0;
class Ot extends et { constructor(t = Ot.DEFAULT_IMAGE, e = Ot.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = 1, h = 3e3) { super(), Object.defineProperty(this, "id", { value: It++ }), this.uuid = at(), this.name = "", this.source = new Pt(t), this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new mt(0, 0), this.repeat = new mt(1, 1), this.center = new mt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ft, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1 }
    get image() { return this.source.data }
    set image(t) { this.source.data = t }
    updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) }
    clone() { return (new this.constructor).copy(this) }
    copy(t) { return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this }
    toJSON(t) { const e = void 0 === t || "string" == typeof t; if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid]; const n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n }
    dispose() { this.dispatchEvent({ type: "dispose" }) }
    transformUv(t) { if (300 !== this.mapping) return t; if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
            case 1e3:
                t.x = t.x - Math.floor(t.x); break;
            case 1001:
                t.x = t.x < 0 ? 0 : 1; break;
            case 1002:
                1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x) }
        if (t.y < 0 || t.y > 1) switch (this.wrapT) {
            case 1e3:
                t.y = t.y - Math.floor(t.y); break;
            case 1001:
                t.y = t.y < 0 ? 0 : 1; break;
            case 1002:
                1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y) }
        return this.flipY && (t.y = 1 - t.y), t }
    set needsUpdate(t) {!0 === t && (this.version++, this.source.needsUpdate = !0) } }
Ot.DEFAULT_IMAGE = null, Ot.DEFAULT_MAPPING = 300, Ot.prototype.isTexture = !0;
class Nt { constructor(t = 0, e = 0, n = 0, i = 1) { this.x = t, this.y = e, this.z = n, this.w = i }
    get width() { return this.z }
    set width(t) { this.z = t }
    get height() { return this.w }
    set height(t) { this.w = t }
    set(t, e, n, i) { return this.x = t, this.y = e, this.z = n, this.w = i, this }
    setScalar(t) { return this.x = t, this.y = t, this.z = t, this.w = t, this }
    setX(t) { return this.x = t, this }
    setY(t) { return this.y = t, this }
    setZ(t) { return this.z = t, this }
    setW(t) { return this.w = t, this }
    setComponent(t, e) { switch (t) {
            case 0:
                this.x = e; break;
            case 1:
                this.y = e; break;
            case 2:
                this.z = e; break;
            case 3:
                this.w = e; break;
            default:
                throw new Error("index is out of range: " + t) } return this }
    getComponent(t) { switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t) } }
    clone() { return new this.constructor(this.x, this.y, this.z, this.w) }
    copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this }
    add(t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this) }
    addScalar(t) { return this.x += t, this.y += t, this.z += t, this.w += t, this }
    addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this }
    addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this }
    sub(t, e) { return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this) }
    subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this }
    subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this }
    multiply(t) { return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this }
    multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this }
    applyMatrix4(t) { const e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            s = t.elements; return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this }
    divideScalar(t) { return this.multiplyScalar(1 / t) }
    setAxisAngleFromQuaternion(t) { this.w = 2 * Math.acos(t.w); const e = Math.sqrt(1 - t.w * t.w); return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this }
    setAxisAngleFromRotationMatrix(t) { let e, n, i, r; const s = .01,
            a = .1,
            o = t.elements,
            l = o[0],
            h = o[4],
            c = o[8],
            u = o[1],
            d = o[5],
            p = o[9],
            m = o[2],
            f = o[6],
            g = o[10]; if (Math.abs(h - u) < s && Math.abs(c - m) < s && Math.abs(p - f) < s) { if (Math.abs(h + u) < a && Math.abs(c + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
            e = Math.PI; const t = (l + 1) / 2,
                o = (d + 1) / 2,
                v = (g + 1) / 2,
                y = (h + u) / 4,
                x = (c + m) / 4,
                _ = (p + f) / 4; return t > o && t > v ? t < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = y / n, r = x / n) : o > v ? o < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = y / i, r = _ / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = _ / r), this.set(n, i, r, e), this } let v = Math.sqrt((f - p) * (f - p) + (c - m) * (c - m) + (u - h) * (u - h)); return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (c - m) / v, this.z = (u - h) / v, this.w = Math.acos((l + d + g - 1) / 2), this }
    min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this }
    max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this }
    clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this }
    clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this }
    clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this }
    roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this }
    negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this }
    dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w }
    lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) }
    normalize() { return this.divideScalar(this.length() || 1) }
    setLength(t) { return this.normalize().multiplyScalar(t) }
    lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this }
    lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this }
    equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w }
    fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this }
    toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t }
    fromBufferAttribute(t, e, n) { return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this }
    random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } * [Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } }
Nt.prototype.isVector4 = !0;
class Ft extends et { constructor(t, e, n = {}) { super(), this.width = t, this.height = e, this.depth = 1, this.scissor = new Nt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Nt(0, 0, t, e); const i = { width: t, height: e, depth: 1 };
        this.texture = new Ot(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0 }
    setSize(t, e, n = 1) { this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e) }
    clone() { return (new this.constructor).copy(this) }
    copy(t) { return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0, this.texture.image = Object.assign({}, t.texture.image), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this }
    dispose() { this.dispatchEvent({ type: "dispose" }) } }
Ft.prototype.isWebGLRenderTarget = !0;
class Ut extends Ot { constructor(t = null, e = 1, n = 1, i = 1) { super(null), this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
Ut.prototype.isDataArrayTexture = !0;
(class extends Ft { constructor(t, e, n) { super(t, e), this.depth = n, this.texture = new Ut(null, t, e, n), this.texture.isRenderTargetTexture = !0 } }).prototype.isWebGLArrayRenderTarget = !0;
class kt extends Ot { constructor(t = null, e = 1, n = 1, i = 1) { super(null), this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
kt.prototype.isData3DTexture = !0;
(class extends Ft { constructor(t, e, n) { super(t, e), this.depth = n, this.texture = new kt(null, t, e, n), this.texture.isRenderTargetTexture = !0 } }).prototype.isWebGL3DRenderTarget = !0;
(class extends Ft { constructor(t, e, n, i = {}) { super(t, e, i); const r = this.texture;
        this.texture = []; for (let t = 0; t < n; t++) this.texture[t] = r.clone(), this.texture[t].isRenderTargetTexture = !0 }
    setSize(t, e, n = 1) { if (this.width !== t || this.height !== e || this.depth !== n) { this.width = t, this.height = e, this.depth = n; for (let i = 0, r = this.texture.length; i < r; i++) this.texture[i].image.width = t, this.texture[i].image.height = e, this.texture[i].image.depth = n;
            this.dispose() } return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this }
    copy(t) { this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this.texture.length = 0; for (let e = 0, n = t.texture.length; e < n; e++) this.texture[e] = t.texture[e].clone(); return this } }).prototype.isWebGLMultipleRenderTargets = !0;
class Bt { constructor(t = 0, e = 0, n = 0, i = 1) { this._x = t, this._y = e, this._z = n, this._w = i }
    static slerp(t, e, n, i) { return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i) }
    static slerpFlat(t, e, n, i, r, s, a) { let o = n[i + 0],
            l = n[i + 1],
            h = n[i + 2],
            c = n[i + 3]; const u = r[s + 0],
            d = r[s + 1],
            p = r[s + 2],
            m = r[s + 3]; if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = h, void(t[e + 3] = c); if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void(t[e + 3] = m); if (c !== m || o !== u || l !== d || h !== p) { let t = 1 - a; const e = o * u + l * d + h * p + c * m,
                n = e >= 0 ? 1 : -1,
                i = 1 - e * e; if (i > Number.EPSILON) { const r = Math.sqrt(i),
                    s = Math.atan2(r, e * n);
                t = Math.sin(t * s) / r, a = Math.sin(a * s) / r } const r = a * n; if (o = o * t + u * r, l = l * t + d * r, h = h * t + p * r, c = c * t + m * r, t === 1 - a) { const t = 1 / Math.sqrt(o * o + l * l + h * h + c * c);
                o *= t, l *= t, h *= t, c *= t } }
        t[e] = o, t[e + 1] = l, t[e + 2] = h, t[e + 3] = c }
    static multiplyQuaternionsFlat(t, e, n, i, r, s) { const a = n[i],
            o = n[i + 1],
            l = n[i + 2],
            h = n[i + 3],
            c = r[s],
            u = r[s + 1],
            d = r[s + 2],
            p = r[s + 3]; return t[e] = a * p + h * c + o * d - l * u, t[e + 1] = o * p + h * u + l * c - a * d, t[e + 2] = l * p + h * d + a * u - o * c, t[e + 3] = h * p - a * c - o * u - l * d, t }
    get x() { return this._x }
    set x(t) { this._x = t, this._onChangeCallback() }
    get y() { return this._y }
    set y(t) { this._y = t, this._onChangeCallback() }
    get z() { return this._z }
    set z(t) { this._z = t, this._onChangeCallback() }
    get w() { return this._w }
    set w(t) { this._w = t, this._onChangeCallback() }
    set(t, e, n, i) { return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this }
    clone() { return new this.constructor(this._x, this._y, this._z, this._w) }
    copy(t) { return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this }
    setFromEuler(t, e) { if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."); const n = t._x,
            i = t._y,
            r = t._z,
            s = t._order,
            a = Math.cos,
            o = Math.sin,
            l = a(n / 2),
            h = a(i / 2),
            c = a(r / 2),
            u = o(n / 2),
            d = o(i / 2),
            p = o(r / 2); switch (s) {
            case "XYZ":
                this._x = u * h * c + l * d * p, this._y = l * d * c - u * h * p, this._z = l * h * p + u * d * c, this._w = l * h * c - u * d * p; break;
            case "YXZ":
                this._x = u * h * c + l * d * p, this._y = l * d * c - u * h * p, this._z = l * h * p - u * d * c, this._w = l * h * c + u * d * p; break;
            case "ZXY":
                this._x = u * h * c - l * d * p, this._y = l * d * c + u * h * p, this._z = l * h * p + u * d * c, this._w = l * h * c - u * d * p; break;
            case "ZYX":
                this._x = u * h * c - l * d * p, this._y = l * d * c + u * h * p, this._z = l * h * p - u * d * c, this._w = l * h * c + u * d * p; break;
            case "YZX":
                this._x = u * h * c + l * d * p, this._y = l * d * c + u * h * p, this._z = l * h * p - u * d * c, this._w = l * h * c - u * d * p; break;
            case "XZY":
                this._x = u * h * c - l * d * p, this._y = l * d * c - u * h * p, this._z = l * h * p + u * d * c, this._w = l * h * c + u * d * p; break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s) } return !1 !== e && this._onChangeCallback(), this }
    setFromAxisAngle(t, e) { const n = e / 2,
            i = Math.sin(n); return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this }
    setFromRotationMatrix(t) { const e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            s = e[1],
            a = e[5],
            o = e[9],
            l = e[2],
            h = e[6],
            c = e[10],
            u = n + a + c; if (u > 0) { const t = .5 / Math.sqrt(u + 1);
            this._w = .25 / t, this._x = (h - o) * t, this._y = (r - l) * t, this._z = (s - i) * t } else if (n > a && n > c) { const t = 2 * Math.sqrt(1 + n - a - c);
            this._w = (h - o) / t, this._x = .25 * t, this._y = (i + s) / t, this._z = (r + l) / t } else if (a > c) { const t = 2 * Math.sqrt(1 + a - n - c);
            this._w = (r - l) / t, this._x = (i + s) / t, this._y = .25 * t, this._z = (o + h) / t } else { const t = 2 * Math.sqrt(1 + c - n - a);
            this._w = (s - i) / t, this._x = (r + l) / t, this._y = (o + h) / t, this._z = .25 * t } return this._onChangeCallback(), this }
    setFromUnitVectors(t, e) { let n = t.dot(e) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize() }
    angleTo(t) { return 2 * Math.acos(Math.abs(ot(this.dot(t), -1, 1))) }
    rotateTowards(t, e) { const n = this.angleTo(t); if (0 === n) return this; const i = Math.min(1, e / n); return this.slerp(t, i), this }
    identity() { return this.set(0, 0, 0, 1) }
    invert() { return this.conjugate() }
    conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this }
    dot(t) { return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w }
    lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w }
    length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) }
    normalize() { let t = this.length(); return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this }
    multiply(t, e) { return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t) }
    premultiply(t) { return this.multiplyQuaternions(t, this) }
    multiplyQuaternions(t, e) { const n = t._x,
            i = t._y,
            r = t._z,
            s = t._w,
            a = e._x,
            o = e._y,
            l = e._z,
            h = e._w; return this._x = n * h + s * a + i * l - r * o, this._y = i * h + s * o + r * a - n * l, this._z = r * h + s * l + n * o - i * a, this._w = s * h - n * a - i * o - r * l, this._onChangeCallback(), this }
    slerp(t, e) { if (0 === e) return this; if (1 === e) return this.copy(t); const n = this._x,
            i = this._y,
            r = this._z,
            s = this._w; let a = s * t._w + n * t._x + i * t._y + r * t._z; if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this; const o = 1 - a * a; if (o <= Number.EPSILON) { const t = 1 - e; return this._w = t * s + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this } const l = Math.sqrt(o),
            h = Math.atan2(l, a),
            c = Math.sin((1 - e) * h) / l,
            u = Math.sin(e * h) / l; return this._w = s * c + this._w * u, this._x = n * c + this._x * u, this._y = i * c + this._y * u, this._z = r * c + this._z * u, this._onChangeCallback(), this }
    slerpQuaternions(t, e, n) { return this.copy(t).slerp(e, n) }
    random() { const t = Math.random(),
            e = Math.sqrt(1 - t),
            n = Math.sqrt(t),
            i = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random(); return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i)) }
    equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w }
    fromArray(t, e = 0) { return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this }
    toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t }
    fromBufferAttribute(t, e) { return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this }
    _onChange(t) { return this._onChangeCallback = t, this }
    _onChangeCallback() {} }
Bt.prototype.isQuaternion = !0;
class zt { constructor(t = 0, e = 0, n = 0) { this.x = t, this.y = e, this.z = n }
    set(t, e, n) { return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this }
    setScalar(t) { return this.x = t, this.y = t, this.z = t, this }
    setX(t) { return this.x = t, this }
    setY(t) { return this.y = t, this }
    setZ(t) { return this.z = t, this }
    setComponent(t, e) { switch (t) {
            case 0:
                this.x = e; break;
            case 1:
                this.y = e; break;
            case 2:
                this.z = e; break;
            default:
                throw new Error("index is out of range: " + t) } return this }
    getComponent(t) { switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t) } }
    clone() { return new this.constructor(this.x, this.y, this.z) }
    copy(t) { return this.x = t.x, this.y = t.y, this.z = t.z, this }
    add(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this) }
    addScalar(t) { return this.x += t, this.y += t, this.z += t, this }
    addVectors(t, e) { return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this }
    addScaledVector(t, e) { return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this }
    sub(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this) }
    subScalar(t) { return this.x -= t, this.y -= t, this.z -= t, this }
    subVectors(t, e) { return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this }
    multiply(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this) }
    multiplyScalar(t) { return this.x *= t, this.y *= t, this.z *= t, this }
    multiplyVectors(t, e) { return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this }
    applyEuler(t) { return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Vt.setFromEuler(t)) }
    applyAxisAngle(t, e) { return this.applyQuaternion(Vt.setFromAxisAngle(t, e)) }
    applyMatrix3(t) { const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements; return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this }
    applyNormalMatrix(t) { return this.applyMatrix3(t).normalize() }
    applyMatrix4(t) { const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this }
    applyQuaternion(t) { const e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            s = t.y,
            a = t.z,
            o = t.w,
            l = o * e + s * i - a * n,
            h = o * n + a * e - r * i,
            c = o * i + r * n - s * e,
            u = -r * e - s * n - a * i; return this.x = l * o + u * -r + h * -a - c * -s, this.y = h * o + u * -s + c * -r - l * -a, this.z = c * o + u * -a + l * -s - h * -r, this }
    project(t) { return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix) }
    unproject(t) { return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld) }
    transformDirection(t) { const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements; return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize() }
    divide(t) { return this.x /= t.x, this.y /= t.y, this.z /= t.z, this }
    divideScalar(t) { return this.multiplyScalar(1 / t) }
    min(t) { return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this }
    max(t) { return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this }
    clamp(t, e) { return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this }
    clampScalar(t, e) { return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this }
    clampLength(t, e) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n))) }
    floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this }
    ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this }
    round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this }
    roundToZero() { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this }
    negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this }
    dot(t) { return this.x * t.x + this.y * t.y + this.z * t.z }
    lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z }
    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) }
    normalize() { return this.divideScalar(this.length() || 1) }
    setLength(t) { return this.normalize().multiplyScalar(t) }
    lerp(t, e) { return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this }
    lerpVectors(t, e, n) { return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this }
    cross(t, e) { return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t) }
    crossVectors(t, e) { const n = t.x,
            i = t.y,
            r = t.z,
            s = e.x,
            a = e.y,
            o = e.z; return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this }
    projectOnVector(t) { const e = t.lengthSq(); if (0 === e) return this.set(0, 0, 0); const n = t.dot(this) / e; return this.copy(t).multiplyScalar(n) }
    projectOnPlane(t) { return Ht.copy(this).projectOnVector(t), this.sub(Ht) }
    reflect(t) { return this.sub(Ht.copy(t).multiplyScalar(2 * this.dot(t))) }
    angleTo(t) { const e = Math.sqrt(this.lengthSq() * t.lengthSq()); if (0 === e) return Math.PI / 2; const n = this.dot(t) / e; return Math.acos(ot(n, -1, 1)) }
    distanceTo(t) { return Math.sqrt(this.distanceToSquared(t)) }
    distanceToSquared(t) { const e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z; return e * e + n * n + i * i }
    manhattanDistanceTo(t) { return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z) }
    setFromSpherical(t) { return this.setFromSphericalCoords(t.radius, t.phi, t.theta) }
    setFromSphericalCoords(t, e, n) { const i = Math.sin(e) * t; return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this }
    setFromCylindrical(t) { return this.setFromCylindricalCoords(t.radius, t.theta, t.y) }
    setFromCylindricalCoords(t, e, n) { return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this }
    setFromMatrixPosition(t) { const e = t.elements; return this.x = e[12], this.y = e[13], this.z = e[14], this }
    setFromMatrixScale(t) { const e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length(); return this.x = e, this.y = n, this.z = i, this }
    setFromMatrixColumn(t, e) { return this.fromArray(t.elements, 4 * e) }
    setFromMatrix3Column(t, e) { return this.fromArray(t.elements, 3 * e) }
    setFromEuler(t) { return this.x = t._x, this.y = t._y, this.z = t._z, this }
    equals(t) { return t.x === this.x && t.y === this.y && t.z === this.z }
    fromArray(t, e = 0) { return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this }
    toArray(t = [], e = 0) { return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t }
    fromBufferAttribute(t, e, n) { return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this }
    random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this }
    randomDirection() { const t = 2 * (Math.random() - .5),
            e = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - t ** 2); return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this } * [Symbol.iterator]() { yield this.x, yield this.y, yield this.z } }
zt.prototype.isVector3 = !0;
const Ht = new zt,
    Vt = new Bt;
class Gt { constructor(t = new zt(1 / 0, 1 / 0, 1 / 0), e = new zt(-1 / 0, -1 / 0, -1 / 0)) { this.min = t, this.max = e }
    set(t, e) { return this.min.copy(t), this.max.copy(e), this }
    setFromArray(t) { let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0; for (let o = 0, l = t.length; o < l; o += 3) { const l = t[o],
                h = t[o + 1],
                c = t[o + 2];
            l < e && (e = l), h < n && (n = h), c < i && (i = c), l > r && (r = l), h > s && (s = h), c > a && (a = c) } return this.min.set(e, n, i), this.max.set(r, s, a), this }
    setFromBufferAttribute(t) { let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0; for (let o = 0, l = t.count; o < l; o++) { const l = t.getX(o),
                h = t.getY(o),
                c = t.getZ(o);
            l < e && (e = l), h < n && (n = h), c < i && (i = c), l > r && (r = l), h > s && (s = h), c > a && (a = c) } return this.min.set(e, n, i), this.max.set(r, s, a), this }
    setFromPoints(t) { this.makeEmpty(); for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]); return this }
    setFromCenterAndSize(t, e) { const n = jt.copy(e).multiplyScalar(.5); return this.min.copy(t).sub(n), this.max.copy(t).add(n), this }
    setFromObject(t, e = !1) { return this.makeEmpty(), this.expandByObject(t, e) }
    clone() { return (new this.constructor).copy(this) }
    copy(t) { return this.min.copy(t.min), this.max.copy(t.max), this }
    makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this }
    isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z }
    getCenter(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5) }
    getSize(t) { return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min) }
    expandByPoint(t) { return this.min.min(t), this.max.max(t), this }
    expandByVector(t) { return this.min.sub(t), this.max.add(t), this }
    expandByScalar(t) { return this.min.addScalar(-t), this.max.addScalar(t), this }
    expandByObject(t, e = !1) { t.updateWorldMatrix(!1, !1); const n = t.geometry; if (void 0 !== n)
            if (e && null != n.attributes && void 0 !== n.attributes.position) { const e = n.attributes.position; for (let n = 0, i = e.count; n < i; n++) jt.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld), this.expandByPoint(jt) } else null === n.boundingBox && n.computeBoundingBox(), qt.copy(n.boundingBox), qt.applyMatrix4(t.matrixWorld), this.union(qt);
        const i = t.children; for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e); return this }
    containsPoint(t) { return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z) }
    containsBox(t) { return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z }
    getParameter(t, e) { return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z)) }
    intersectsBox(t) { return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z) }
    intersectsSphere(t) { return this.clampPoint(t.center, jt), jt.distanceToSquared(t.center) <= t.radius * t.radius }
    intersectsPlane(t) { let e, n; return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant }
    intersectsTriangle(t) { if (this.isEmpty()) return !1;
        this.getCenter(Qt), te.subVectors(this.max, Qt), Xt.subVectors(t.a, Qt), Yt.subVectors(t.b, Qt), Jt.subVectors(t.c, Qt), Zt.subVectors(Yt, Xt), $t.subVectors(Jt, Yt), Kt.subVectors(Xt, Jt); let e = [0, -Zt.z, Zt.y, 0, -$t.z, $t.y, 0, -Kt.z, Kt.y, Zt.z, 0, -Zt.x, $t.z, 0, -$t.x, Kt.z, 0, -Kt.x, -Zt.y, Zt.x, 0, -$t.y, $t.x, 0, -Kt.y, Kt.x, 0]; return !!ie(e, Xt, Yt, Jt, te) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!ie(e, Xt, Yt, Jt, te) && (ee.crossVectors(Zt, $t), e = [ee.x, ee.y, ee.z], ie(e, Xt, Yt, Jt, te))) }
    clampPoint(t, e) { return e.copy(t).clamp(this.min, this.max) }
    distanceToPoint(t) { return jt.copy(t).clamp(this.min, this.max).sub(t).length() }
    getBoundingSphere(t) { return this.getCenter(t.center), t.radius = .5 * this.getSize(jt).length(), t }
    intersect(t) { return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this }
    union(t) { return this.min.min(t.min), this.max.max(t.max), this }
    applyMatrix4(t) { return this.isEmpty() || (Wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Wt)), this }
    translate(t) { return this.min.add(t), this.max.add(t), this }
    equals(t) { return t.min.equals(this.min) && t.max.equals(this.max) } }
Gt.prototype.isBox3 = !0;
const Wt = [new zt, new zt, new zt, new zt, new zt, new zt, new zt, new zt],
    jt = new zt,
    qt = new Gt,
    Xt = new zt,
    Yt = new zt,
    Jt = new zt,
    Zt = new zt,
    $t = new zt,
    Kt = new zt,
    Qt = new zt,
    te = new zt,
    ee = new zt,
    ne = new zt;

function ie(t, e, n, i, r) { for (let s = 0, a = t.length - 3; s <= a; s += 3) { ne.fromArray(t, s); const a = r.x * Math.abs(ne.x) + r.y * Math.abs(ne.y) + r.z * Math.abs(ne.z),
            o = e.dot(ne),
            l = n.dot(ne),
            h = i.dot(ne); if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > a) return !1 } return !0 }
const re = new Gt,
    se = new zt,
    ae = new zt,
    oe = new zt;
class le { constructor(t = new zt, e = -1) { this.center = t, this.radius = e }
    set(t, e) { return this.center.copy(t), this.radius = e, this }
    setFromPoints(t, e) { const n = this.center;
        void 0 !== e ? n.copy(e) : re.setFromPoints(t).getCenter(n); let i = 0; for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e])); return this.radius = Math.sqrt(i), this }
    copy(t) { return this.center.copy(t.center), this.radius = t.radius, this }
    isEmpty() { return this.radius < 0 }
    makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this }
    containsPoint(t) { return t.distanceToSquared(this.center) <= this.radius * this.radius }
    distanceToPoint(t) { return t.distanceTo(this.center) - this.radius }
    intersectsSphere(t) { const e = this.radius + t.radius; return t.center.distanceToSquared(this.center) <= e * e }
    intersectsBox(t) { return t.intersectsSphere(this) }
    intersectsPlane(t) { return Math.abs(t.distanceToPoint(this.center)) <= this.radius }
    clampPoint(t, e) { const n = this.center.distanceToSquared(t); return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e }
    getBoundingBox(t) { return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t) }
    applyMatrix4(t) { return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this }
    translate(t) { return this.center.add(t), this }
    expandByPoint(t) { oe.subVectors(t, this.center); const e = oe.lengthSq(); if (e > this.radius * this.radius) { const t = Math.sqrt(e),
                n = .5 * (t - this.radius);
            this.center.add(oe.multiplyScalar(n / t)), this.radius += n } return this }
    union(t) { return !0 === this.center.equals(t.center) ? ae.set(0, 0, 1).multiplyScalar(t.radius) : ae.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(se.copy(t.center).add(ae)), this.expandByPoint(se.copy(t.center).sub(ae)), this }
    equals(t) { return t.center.equals(this.center) && t.radius === this.radius }
    clone() { return (new this.constructor).copy(this) } }
const he = new zt,
    ce = new zt,
    ue = new zt,
    de = new zt,
    pe = new zt,
    me = new zt,
    fe = new zt;
class ge { constructor(t = new zt, e = new zt(0, 0, -1)) { this.origin = t, this.direction = e }
    set(t, e) { return this.origin.copy(t), this.direction.copy(e), this }
    copy(t) { return this.origin.copy(t.origin), this.direction.copy(t.direction), this }
    at(t, e) { return e.copy(this.direction).multiplyScalar(t).add(this.origin) }
    lookAt(t) { return this.direction.copy(t).sub(this.origin).normalize(), this }
    recast(t) { return this.origin.copy(this.at(t, he)), this }
    closestPointToPoint(t, e) { e.subVectors(t, this.origin); const n = e.dot(this.direction); return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin) }
    distanceToPoint(t) { return Math.sqrt(this.distanceSqToPoint(t)) }
    distanceSqToPoint(t) { const e = he.subVectors(t, this.origin).dot(this.direction); return e < 0 ? this.origin.distanceToSquared(t) : (he.copy(this.direction).multiplyScalar(e).add(this.origin), he.distanceToSquared(t)) }
    distanceSqToSegment(t, e, n, i) { ce.copy(t).add(e).multiplyScalar(.5), ue.copy(e).sub(t).normalize(), de.copy(this.origin).sub(ce); const r = .5 * t.distanceTo(e),
            s = -this.direction.dot(ue),
            a = de.dot(this.direction),
            o = -de.dot(ue),
            l = de.lengthSq(),
            h = Math.abs(1 - s * s); let c, u, d, p; if (h > 0)
            if (c = s * o - a, u = s * a - o, p = r * h, c >= 0)
                if (u >= -p)
                    if (u <= p) { const t = 1 / h;
                        c *= t, u *= t, d = c * (c + s * u + 2 * a) + u * (s * c + u + 2 * o) + l } else u = r, c = Math.max(0, -(s * u + a)), d = -c * c + u * (u + 2 * o) + l;
        else u = -r, c = Math.max(0, -(s * u + a)), d = -c * c + u * (u + 2 * o) + l;
        else u <= -p ? (c = Math.max(0, -(-s * r + a)), u = c > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -c * c + u * (u + 2 * o) + l) : u <= p ? (c = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (c = Math.max(0, -(s * r + a)), u = c > 0 ? r : Math.min(Math.max(-r, -o), r), d = -c * c + u * (u + 2 * o) + l);
        else u = s > 0 ? -r : r, c = Math.max(0, -(s * u + a)), d = -c * c + u * (u + 2 * o) + l; return n && n.copy(this.direction).multiplyScalar(c).add(this.origin), i && i.copy(ue).multiplyScalar(u).add(ce), d }
    intersectSphere(t, e) { he.subVectors(t.center, this.origin); const n = he.dot(this.direction),
            i = he.dot(he) - n * n,
            r = t.radius * t.radius; if (i > r) return null; const s = Math.sqrt(r - i),
            a = n - s,
            o = n + s; return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e) }
    intersectsSphere(t) { return this.distanceSqToPoint(t.center) <= t.radius * t.radius }
    distanceToPlane(t) { const e = t.normal.dot(this.direction); if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null; const n = -(this.origin.dot(t.normal) + t.constant) / e; return n >= 0 ? n : null }
    intersectPlane(t, e) { const n = this.distanceToPlane(t); return null === n ? null : this.at(n, e) }
    intersectsPlane(t) { const e = t.distanceToPoint(this.origin); if (0 === e) return !0; return t.normal.dot(this.direction) * e < 0 }
    intersectBox(t, e) { let n, i, r, s, a, o; const l = 1 / this.direction.x,
            h = 1 / this.direction.y,
            c = 1 / this.direction.z,
            u = this.origin; return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), h >= 0 ? (r = (t.min.y - u.y) * h, s = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, s = (t.min.y - u.y) * h), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), c >= 0 ? (a = (t.min.z - u.z) * c, o = (t.max.z - u.z) * c) : (a = (t.max.z - u.z) * c, o = (t.min.z - u.z) * c), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e))) }
    intersectsBox(t) { return null !== this.intersectBox(t, he) }
    intersectTriangle(t, e, n, i, r) { pe.subVectors(e, t), me.subVectors(n, t), fe.crossVectors(pe, me); let s, a = this.direction.dot(fe); if (a > 0) { if (i) return null;
            s = 1 } else { if (!(a < 0)) return null;
            s = -1, a = -a }
        de.subVectors(this.origin, t); const o = s * this.direction.dot(me.crossVectors(de, me)); if (o < 0) return null; const l = s * this.direction.dot(pe.cross(de)); if (l < 0) return null; if (o + l > a) return null; const h = -s * de.dot(fe); return h < 0 ? null : this.at(h / a, r) }
    applyMatrix4(t) { return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this }
    equals(t) { return t.origin.equals(this.origin) && t.direction.equals(this.direction) }
    clone() { return (new this.constructor).copy(this) } }
class ve { constructor() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.") }
    set(t, e, n, i, r, s, a, o, l, h, c, u, d, p, m, f) { const g = this.elements; return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = h, g[10] = c, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this }
    identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }
    clone() { return (new ve).fromArray(this.elements) }
    copy(t) { const e = this.elements,
            n = t.elements; return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this }
    copyPosition(t) { const e = this.elements,
            n = t.elements; return e[12] = n[12], e[13] = n[13], e[14] = n[14], this }
    setFromMatrix3(t) { const e = t.elements; return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this }
    extractBasis(t, e, n) { return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this }
    makeBasis(t, e, n) { return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this }
    extractRotation(t) { const e = this.elements,
            n = t.elements,
            i = 1 / ye.setFromMatrixColumn(t, 0).length(),
            r = 1 / ye.setFromMatrixColumn(t, 1).length(),
            s = 1 / ye.setFromMatrixColumn(t, 2).length(); return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this }
    makeRotationFromEuler(t) { t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."); const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            s = Math.cos(n),
            a = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            h = Math.cos(r),
            c = Math.sin(r); if ("XYZ" === t.order) { const t = s * h,
                n = s * c,
                i = a * h,
                r = a * c;
            e[0] = o * h, e[4] = -o * c, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = s * o } else if ("YXZ" === t.order) { const t = o * h,
                n = o * c,
                i = l * h,
                r = l * c;
            e[0] = t + r * a, e[4] = i * a - n, e[8] = s * l, e[1] = s * c, e[5] = s * h, e[9] = -a, e[2] = n * a - i, e[6] = r + t * a, e[10] = s * o } else if ("ZXY" === t.order) { const t = o * h,
                n = o * c,
                i = l * h,
                r = l * c;
            e[0] = t - r * a, e[4] = -s * c, e[8] = i + n * a, e[1] = n + i * a, e[5] = s * h, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o } else if ("ZYX" === t.order) { const t = s * h,
                n = s * c,
                i = a * h,
                r = a * c;
            e[0] = o * h, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * c, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = a * o, e[10] = s * o } else if ("YZX" === t.order) { const t = s * o,
                n = s * l,
                i = a * o,
                r = a * l;
            e[0] = o * h, e[4] = r - t * c, e[8] = i * c + n, e[1] = c, e[5] = s * h, e[9] = -a * h, e[2] = -l * h, e[6] = n * c + i, e[10] = t - r * c } else if ("XZY" === t.order) { const t = s * o,
                n = s * l,
                i = a * o,
                r = a * l;
            e[0] = o * h, e[4] = -c, e[8] = l * h, e[1] = t * c + r, e[5] = s * h, e[9] = n * c - i, e[2] = i * c - n, e[6] = a * h, e[10] = r * c + t } return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this }
    makeRotationFromQuaternion(t) { return this.compose(_e, t, be) }
    lookAt(t, e, n) { const i = this.elements; return Se.subVectors(t, e), 0 === Se.lengthSq() && (Se.z = 1), Se.normalize(), we.crossVectors(n, Se), 0 === we.lengthSq() && (1 === Math.abs(n.z) ? Se.x += 1e-4 : Se.z += 1e-4, Se.normalize(), we.crossVectors(n, Se)), we.normalize(), Me.crossVectors(Se, we), i[0] = we.x, i[4] = Me.x, i[8] = Se.x, i[1] = we.y, i[5] = Me.y, i[9] = Se.y, i[2] = we.z, i[6] = Me.z, i[10] = Se.z, this }
    multiply(t, e) { return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t) }
    premultiply(t) { return this.multiplyMatrices(t, this) }
    multiplyMatrices(t, e) { const n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[4],
            o = n[8],
            l = n[12],
            h = n[1],
            c = n[5],
            u = n[9],
            d = n[13],
            p = n[2],
            m = n[6],
            f = n[10],
            g = n[14],
            v = n[3],
            y = n[7],
            x = n[11],
            _ = n[15],
            b = i[0],
            w = i[4],
            M = i[8],
            S = i[12],
            T = i[1],
            E = i[5],
            A = i[9],
            R = i[13],
            C = i[2],
            L = i[6],
            P = i[10],
            D = i[14],
            I = i[3],
            O = i[7],
            N = i[11],
            F = i[15]; return r[0] = s * b + a * T + o * C + l * I, r[4] = s * w + a * E + o * L + l * O, r[8] = s * M + a * A + o * P + l * N, r[12] = s * S + a * R + o * D + l * F, r[1] = h * b + c * T + u * C + d * I, r[5] = h * w + c * E + u * L + d * O, r[9] = h * M + c * A + u * P + d * N, r[13] = h * S + c * R + u * D + d * F, r[2] = p * b + m * T + f * C + g * I, r[6] = p * w + m * E + f * L + g * O, r[10] = p * M + m * A + f * P + g * N, r[14] = p * S + m * R + f * D + g * F, r[3] = v * b + y * T + x * C + _ * I, r[7] = v * w + y * E + x * L + _ * O, r[11] = v * M + y * A + x * P + _ * N, r[15] = v * S + y * R + x * D + _ * F, this }
    multiplyScalar(t) { const e = this.elements; return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this }
    determinant() { const t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            s = t[1],
            a = t[5],
            o = t[9],
            l = t[13],
            h = t[2],
            c = t[6],
            u = t[10],
            d = t[14]; return t[3] * (+r * o * c - i * l * c - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * h - r * o * h) + t[11] * (+e * l * c - e * a * d - r * s * c + n * s * d + r * a * h - n * l * h) + t[15] * (-i * a * h - e * o * c + e * a * u + i * s * c - n * s * u + n * o * h) }
    transpose() { const t = this.elements; let e; return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this }
    setPosition(t, e, n) { const i = this.elements; return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this }
    invert() { const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            h = t[8],
            c = t[9],
            u = t[10],
            d = t[11],
            p = t[12],
            m = t[13],
            f = t[14],
            g = t[15],
            v = c * f * l - m * u * l + m * o * d - a * f * d - c * o * g + a * u * g,
            y = p * u * l - h * f * l - p * o * d + s * f * d + h * o * g - s * u * g,
            x = h * m * l - p * c * l + p * a * d - s * m * d - h * a * g + s * c * g,
            _ = p * c * o - h * m * o - p * a * u + s * m * u + h * a * f - s * c * f,
            b = e * v + n * y + i * x + r * _; if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const w = 1 / b; return t[0] = v * w, t[1] = (m * u * r - c * f * r - m * i * d + n * f * d + c * i * g - n * u * g) * w, t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * w, t[3] = (c * o * r - a * u * r - c * i * l + n * u * l + a * i * d - n * o * d) * w, t[4] = y * w, t[5] = (h * f * r - p * u * r + p * i * d - e * f * d - h * i * g + e * u * g) * w, t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * w, t[7] = (s * u * r - h * o * r + h * i * l - e * u * l - s * i * d + e * o * d) * w, t[8] = x * w, t[9] = (p * c * r - h * m * r - p * n * d + e * m * d + h * n * g - e * c * g) * w, t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * w, t[11] = (h * a * r - s * c * r - h * n * l + e * c * l + s * n * d - e * a * d) * w, t[12] = _ * w, t[13] = (h * m * i - p * c * i + p * n * u - e * m * u - h * n * f + e * c * f) * w, t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * w, t[15] = (s * c * i - h * a * i + h * n * o - e * c * o - s * n * u + e * a * u) * w, this }
    scale(t) { const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z; return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this }
    getMaxScaleOnAxis() { const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10]; return Math.sqrt(Math.max(e, n, i)) }
    makeTranslation(t, e, n) { return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this }
    makeRotationX(t) { const e = Math.cos(t),
            n = Math.sin(t); return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this }
    makeRotationY(t) { const e = Math.cos(t),
            n = Math.sin(t); return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this }
    makeRotationZ(t) { const e = Math.cos(t),
            n = Math.sin(t); return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this }
    makeRotationAxis(t, e) { const n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            s = t.x,
            a = t.y,
            o = t.z,
            l = r * s,
            h = r * a; return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, h * a + n, h * o - i * s, 0, l * o - i * a, h * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this }
    makeScale(t, e, n) { return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this }
    makeShear(t, e, n, i, r, s) { return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this }
    compose(t, e, n) { const i = this.elements,
            r = e._x,
            s = e._y,
            a = e._z,
            o = e._w,
            l = r + r,
            h = s + s,
            c = a + a,
            u = r * l,
            d = r * h,
            p = r * c,
            m = s * h,
            f = s * c,
            g = a * c,
            v = o * l,
            y = o * h,
            x = o * c,
            _ = n.x,
            b = n.y,
            w = n.z; return i[0] = (1 - (m + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (u + g)) * b, i[6] = (f + v) * b, i[7] = 0, i[8] = (p + y) * w, i[9] = (f - v) * w, i[10] = (1 - (u + m)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this }
    decompose(t, e, n) { const i = this.elements; let r = ye.set(i[0], i[1], i[2]).length(); const s = ye.set(i[4], i[5], i[6]).length(),
            a = ye.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], xe.copy(this); const o = 1 / r,
            l = 1 / s,
            h = 1 / a; return xe.elements[0] *= o, xe.elements[1] *= o, xe.elements[2] *= o, xe.elements[4] *= l, xe.elements[5] *= l, xe.elements[6] *= l, xe.elements[8] *= h, xe.elements[9] *= h, xe.elements[10] *= h, e.setFromRotationMatrix(xe), n.x = r, n.y = s, n.z = a, this }
    makePerspective(t, e, n, i, r, s) { void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."); const a = this.elements,
            o = 2 * r / (e - t),
            l = 2 * r / (n - i),
            h = (e + t) / (e - t),
            c = (n + i) / (n - i),
            u = -(s + r) / (s - r),
            d = -2 * s * r / (s - r); return a[0] = o, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = l, a[9] = c, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this }
    makeOrthographic(t, e, n, i, r, s) { const a = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            h = 1 / (s - r),
            c = (e + t) * o,
            u = (n + i) * l,
            d = (s + r) * h; return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -c, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this }
    equals(t) { const e = this.elements,
            n = t.elements; for (let t = 0; t < 16; t++)
            if (e[t] !== n[t]) return !1;
        return !0 }
    fromArray(t, e = 0) { for (let n = 0; n < 16; n++) this.elements[n] = t[n + e]; return this }
    toArray(t = [], e = 0) { const n = this.elements; return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t } }
ve.prototype.isMatrix4 = !0;
const ye = new zt,
    xe = new ve,
    _e = new zt(0, 0, 0),
    be = new zt(1, 1, 1),
    we = new zt,
    Me = new zt,
    Se = new zt,
    Te = new ve,
    Ee = new Bt;
class Ae { constructor(t = 0, e = 0, n = 0, i = Ae.DefaultOrder) { this._x = t, this._y = e, this._z = n, this._order = i }
    get x() { return this._x }
    set x(t) { this._x = t, this._onChangeCallback() }
    get y() { return this._y }
    set y(t) { this._y = t, this._onChangeCallback() }
    get z() { return this._z }
    set z(t) { this._z = t, this._onChangeCallback() }
    get order() { return this._order }
    set order(t) { this._order = t, this._onChangeCallback() }
    set(t, e, n, i = this._order) { return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this }
    clone() { return new this.constructor(this._x, this._y, this._z, this._order) }
    copy(t) { return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this }
    setFromRotationMatrix(t, e = this._order, n = !0) { const i = t.elements,
            r = i[0],
            s = i[4],
            a = i[8],
            o = i[1],
            l = i[5],
            h = i[9],
            c = i[2],
            u = i[6],
            d = i[10]; switch (e) {
            case "XYZ":
                this._y = Math.asin(ot(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0); break;
            case "YXZ":
                this._x = Math.asin(-ot(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-c, r), this._z = 0); break;
            case "ZXY":
                this._x = Math.asin(ot(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-c, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r)); break;
            case "ZYX":
                this._y = Math.asin(-ot(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l)); break;
            case "YZX":
                this._z = Math.asin(ot(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-c, r)) : (this._x = 0, this._y = Math.atan2(a, d)); break;
            case "XZY":
                this._z = Math.asin(-ot(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, d), this._y = 0); break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e) } return this._order = e, !0 === n && this._onChangeCallback(), this }
    setFromQuaternion(t, e, n) { return Te.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Te, e, n) }
    setFromVector3(t, e = this._order) { return this.set(t.x, t.y, t.z, e) }
    reorder(t) { return Ee.setFromEuler(this), this.setFromQuaternion(Ee, t) }
    equals(t) { return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order }
    fromArray(t) { return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this }
    toArray(t = [], e = 0) { return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t }
    _onChange(t) { return this._onChangeCallback = t, this }
    _onChangeCallback() {} }
Ae.prototype.isEuler = !0, Ae.DefaultOrder = "XYZ", Ae.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Re { constructor() { this.mask = 1 }
    set(t) { this.mask = (1 << t | 0) >>> 0 }
    enable(t) { this.mask |= 1 << t | 0 }
    enableAll() { this.mask = -1 }
    toggle(t) { this.mask ^= 1 << t | 0 }
    disable(t) { this.mask &= ~(1 << t | 0) }
    disableAll() { this.mask = 0 }
    test(t) { return 0 != (this.mask & t.mask) }
    isEnabled(t) { return 0 != (this.mask & (1 << t | 0)) } }
let Ce = 0;
const Le = new zt,
    Pe = new Bt,
    De = new ve,
    Ie = new zt,
    Oe = new zt,
    Ne = new zt,
    Fe = new Bt,
    Ue = new zt(1, 0, 0),
    ke = new zt(0, 1, 0),
    Be = new zt(0, 0, 1),
    ze = { type: "added" },
    He = { type: "removed" };
class Ve extends et { constructor() { super(), Object.defineProperty(this, "id", { value: Ce++ }), this.uuid = at(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ve.DefaultUp.clone(); const t = new zt,
            e = new Ae,
            n = new Bt,
            i = new zt(1, 1, 1);
        e._onChange((function() { n.setFromEuler(e, !1) })), n._onChange((function() { e.setFromQuaternion(n, void 0, !1) })), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: t }, rotation: { configurable: !0, enumerable: !0, value: e }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new ve }, normalMatrix: { value: new ft } }), this.matrix = new ve, this.matrixWorld = new ve, this.matrixAutoUpdate = Ve.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Re, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale) }
    applyQuaternion(t) { return this.quaternion.premultiply(t), this }
    setRotationFromAxisAngle(t, e) { this.quaternion.setFromAxisAngle(t, e) }
    setRotationFromEuler(t) { this.quaternion.setFromEuler(t, !0) }
    setRotationFromMatrix(t) { this.quaternion.setFromRotationMatrix(t) }
    setRotationFromQuaternion(t) { this.quaternion.copy(t) }
    rotateOnAxis(t, e) { return Pe.setFromAxisAngle(t, e), this.quaternion.multiply(Pe), this }
    rotateOnWorldAxis(t, e) { return Pe.setFromAxisAngle(t, e), this.quaternion.premultiply(Pe), this }
    rotateX(t) { return this.rotateOnAxis(Ue, t) }
    rotateY(t) { return this.rotateOnAxis(ke, t) }
    rotateZ(t) { return this.rotateOnAxis(Be, t) }
    translateOnAxis(t, e) { return Le.copy(t).applyQuaternion(this.quaternion), this.position.add(Le.multiplyScalar(e)), this }
    translateX(t) { return this.translateOnAxis(Ue, t) }
    translateY(t) { return this.translateOnAxis(ke, t) }
    translateZ(t) { return this.translateOnAxis(Be, t) }
    localToWorld(t) { return t.applyMatrix4(this.matrixWorld) }
    worldToLocal(t) { return t.applyMatrix4(De.copy(this.matrixWorld).invert()) }
    lookAt(t, e, n) { t.isVector3 ? Ie.copy(t) : Ie.set(t, e, n); const i = this.parent;
        this.updateWorldMatrix(!0, !1), Oe.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? De.lookAt(Oe, Ie, this.up) : De.lookAt(Ie, Oe, this.up), this.quaternion.setFromRotationMatrix(De), i && (De.extractRotation(i.matrixWorld), Pe.setFromRotationMatrix(De), this.quaternion.premultiply(Pe.invert())) }
    add(t) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++) this.add(arguments[t]); return this } return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(ze)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this) }
    remove(t) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]); return this } const e = this.children.indexOf(t); return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(He)), this }
    removeFromParent() { const t = this.parent; return null !== t && t.remove(this), this }
    clear() { for (let t = 0; t < this.children.length; t++) { const e = this.children[t];
            e.parent = null, e.dispatchEvent(He) } return this.children.length = 0, this }
    attach(t) { return this.updateWorldMatrix(!0, !1), De.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), De.multiply(t.parent.matrixWorld)), t.applyMatrix4(De), this.add(t), t.updateWorldMatrix(!1, !0), this }
    getObjectById(t) { return this.getObjectByProperty("id", t) }
    getObjectByName(t) { return this.getObjectByProperty("name", t) }
    getObjectByProperty(t, e) { if (this[t] === e) return this; for (let n = 0, i = this.children.length; n < i; n++) { const i = this.children[n].getObjectByProperty(t, e); if (void 0 !== i) return i } }
    getWorldPosition(t) { return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld) }
    getWorldQuaternion(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Oe, t, Ne), t }
    getWorldScale(t) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Oe, Fe, t), t }
    getWorldDirection(t) { this.updateWorldMatrix(!0, !1); const e = this.matrixWorld.elements; return t.set(e[8], e[9], e[10]).normalize() }
    raycast() {}
    traverse(t) { t(this); const e = this.children; for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t) }
    traverseVisible(t) { if (!1 === this.visible) return;
        t(this); const e = this.children; for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t) }
    traverseAncestors(t) { const e = this.parent;
        null !== e && (t(e), e.traverseAncestors(t)) }
    updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 }
    updateMatrixWorld(t) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0); const e = this.children; for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t) }
    updateWorldMatrix(t, e) { const n = this.parent; if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) { const t = this.children; for (let e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0) } }
    toJSON(t) { const e = void 0 === t || "string" == typeof t,
            n = {};
        e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }); const i = {};

        function r(e, n) { return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid } if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(t).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) { i.geometry = r(t.geometries, this.geometry); const e = this.geometry.parameters; if (void 0 !== e && void 0 !== e.shapes) { const n = e.shapes; if (Array.isArray(n))
                    for (let e = 0, i = n.length; e < i; e++) { const i = n[e];
                        r(t.shapes, i) } else r(t.shapes, n) } } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
            if (Array.isArray(this.material)) { const e = []; for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
                i.material = e } else i.material = r(t.materials, this.material);
        if (this.children.length > 0) { i.children = []; for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object) } if (this.animations.length > 0) { i.animations = []; for (let e = 0; e < this.animations.length; e++) { const n = this.animations[e];
                i.animations.push(r(t.animations, n)) } } if (e) { const e = s(t.geometries),
                i = s(t.materials),
                r = s(t.textures),
                a = s(t.images),
                o = s(t.shapes),
                l = s(t.skeletons),
                h = s(t.animations),
                c = s(t.nodes);
            e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), h.length > 0 && (n.animations = h), c.length > 0 && (n.nodes = c) } return n.object = i, n;

        function s(t) { const e = []; for (const n in t) { const i = t[n];
                delete i.metadata, e.push(i) } return e } }
    clone(t) { return (new this.constructor).copy(this, t) }
    copy(t, e = !0) { if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
            for (let e = 0; e < t.children.length; e++) { const n = t.children[e];
                this.add(n.clone()) }
        return this } }
Ve.DefaultUp = new zt(0, 1, 0), Ve.DefaultMatrixAutoUpdate = !0, Ve.prototype.isObject3D = !0;
const Ge = new zt,
    We = new zt,
    je = new zt,
    qe = new zt,
    Xe = new zt,
    Ye = new zt,
    Je = new zt,
    Ze = new zt,
    $e = new zt,
    Ke = new zt;
class Qe { constructor(t = new zt, e = new zt, n = new zt) { this.a = t, this.b = e, this.c = n }
    static getNormal(t, e, n, i) { i.subVectors(n, e), Ge.subVectors(t, e), i.cross(Ge); const r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0) }
    static getBarycoord(t, e, n, i, r) { Ge.subVectors(i, e), We.subVectors(n, e), je.subVectors(t, e); const s = Ge.dot(Ge),
            a = Ge.dot(We),
            o = Ge.dot(je),
            l = We.dot(We),
            h = We.dot(je),
            c = s * l - a * a; if (0 === c) return r.set(-2, -1, -1); const u = 1 / c,
            d = (l * o - a * h) * u,
            p = (s * h - a * o) * u; return r.set(1 - d - p, p, d) }
    static containsPoint(t, e, n, i) { return this.getBarycoord(t, e, n, i, qe), qe.x >= 0 && qe.y >= 0 && qe.x + qe.y <= 1 }
    static getUV(t, e, n, i, r, s, a, o) { return this.getBarycoord(t, e, n, i, qe), o.set(0, 0), o.addScaledVector(r, qe.x), o.addScaledVector(s, qe.y), o.addScaledVector(a, qe.z), o }
    static isFrontFacing(t, e, n, i) { return Ge.subVectors(n, e), We.subVectors(t, e), Ge.cross(We).dot(i) < 0 }
    set(t, e, n) { return this.a.copy(t), this.b.copy(e), this.c.copy(n), this }
    setFromPointsAndIndices(t, e, n, i) { return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this }
    setFromAttributeAndIndices(t, e, n, i) { return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this }
    clone() { return (new this.constructor).copy(this) }
    copy(t) { return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this }
    getArea() { return Ge.subVectors(this.c, this.b), We.subVectors(this.a, this.b), .5 * Ge.cross(We).length() }
    getMidpoint(t) { return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) }
    getNormal(t) { return Qe.getNormal(this.a, this.b, this.c, t) }
    getPlane(t) { return t.setFromCoplanarPoints(this.a, this.b, this.c) }
    getBarycoord(t, e) { return Qe.getBarycoord(t, this.a, this.b, this.c, e) }
    getUV(t, e, n, i, r) { return Qe.getUV(t, this.a, this.b, this.c, e, n, i, r) }
    containsPoint(t) { return Qe.containsPoint(t, this.a, this.b, this.c) }
    isFrontFacing(t) { return Qe.isFrontFacing(this.a, this.b, this.c, t) }
    intersectsBox(t) { return t.intersectsTriangle(this) }
    closestPointToPoint(t, e) { const n = this.a,
            i = this.b,
            r = this.c; let s, a;
        Xe.subVectors(i, n), Ye.subVectors(r, n), Ze.subVectors(t, n); const o = Xe.dot(Ze),
            l = Ye.dot(Ze); if (o <= 0 && l <= 0) return e.copy(n);
        $e.subVectors(t, i); const h = Xe.dot($e),
            c = Ye.dot($e); if (h >= 0 && c <= h) return e.copy(i); const u = o * c - h * l; if (u <= 0 && o >= 0 && h <= 0) return s = o / (o - h), e.copy(n).addScaledVector(Xe, s);
        Ke.subVectors(t, r); const d = Xe.dot(Ke),
            p = Ye.dot(Ke); if (p >= 0 && d <= p) return e.copy(r); const m = d * l - o * p; if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(Ye, a); const f = h * p - d * c; if (f <= 0 && c - h >= 0 && d - p >= 0) return Je.subVectors(r, i), a = (c - h) / (c - h + (d - p)), e.copy(i).addScaledVector(Je, a); const g = 1 / (f + m + u); return s = m * g, a = u * g, e.copy(n).addScaledVector(Xe, s).addScaledVector(Ye, a) }
    equals(t) { return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c) } }
let tn = 0;
class en extends et { constructor() { super(), Object.defineProperty(this, "id", { value: tn++ }), this.uuid = at(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 }
    get alphaTest() { return this._alphaTest }
    set alphaTest(t) { this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() { return this.onBeforeCompile.toString() }
    setValues(t) { if (void 0 !== t)
            for (const e in t) { const n = t[e]; if (void 0 === n) { console.warn("THREE.Material: '" + e + "' parameter is undefined."); continue } if ("shading" === e) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n; continue } const i = this[e];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.") } }
    toJSON(t) { const e = void 0 === t || "string" == typeof t;
        e && (t = { textures: {}, images: {} }); const n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };

        function i(t) { const e = []; for (const n in t) { const i = t[n];
                delete i.metadata, e.push(i) } return e } if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) { const e = i(t.textures),
                r = i(t.images);
            e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r) } return n }
    clone() { return (new this.constructor).copy(this) }
    copy(t) { this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite; const e = t.clippingPlanes; let n = null; if (null !== e) { const t = e.length;
            n = new Array(t); for (let i = 0; i !== t; ++i) n[i] = e[i].clone() } return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this }
    dispose() { this.dispatchEvent({ type: "dispose" }) }
    set needsUpdate(t) {!0 === t && this.version++ } }
en.prototype.isMaterial = !0, en.fromType = function() { return null };
class nn extends en { constructor(t) { super(), this.type = "MeshBasicMaterial", this.color = new Rt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t) }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this } }
nn.prototype.isMeshBasicMaterial = !0;
const rn = new zt,
    sn = new mt;
class an { constructor(t, e, n) { if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0 }
    onUploadCallback() {}
    set needsUpdate(t) {!0 === t && this.version++ }
    setUsage(t) { return this.usage = t, this }
    copy(t) { return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this }
    copyAt(t, e, n) { t *= this.itemSize, n *= e.itemSize; for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i]; return this }
    copyArray(t) { return this.array.set(t), this }
    copyColorsArray(t) { const e = this.array; let n = 0; for (let i = 0, r = t.length; i < r; i++) { let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new Rt), e[n++] = r.r, e[n++] = r.g, e[n++] = r.b } return this }
    copyVector2sArray(t) { const e = this.array; let n = 0; for (let i = 0, r = t.length; i < r; i++) { let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new mt), e[n++] = r.x, e[n++] = r.y } return this }
    copyVector3sArray(t) { const e = this.array; let n = 0; for (let i = 0, r = t.length; i < r; i++) { let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new zt), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z } return this }
    copyVector4sArray(t) { const e = this.array; let n = 0; for (let i = 0, r = t.length; i < r; i++) { let r = t[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new Nt), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z, e[n++] = r.w } return this }
    applyMatrix3(t) { if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++) sn.fromBufferAttribute(this, e), sn.applyMatrix3(t), this.setXY(e, sn.x, sn.y);
        else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++) rn.fromBufferAttribute(this, e), rn.applyMatrix3(t), this.setXYZ(e, rn.x, rn.y, rn.z); return this }
    applyMatrix4(t) { for (let e = 0, n = this.count; e < n; e++) rn.fromBufferAttribute(this, e), rn.applyMatrix4(t), this.setXYZ(e, rn.x, rn.y, rn.z); return this }
    applyNormalMatrix(t) { for (let e = 0, n = this.count; e < n; e++) rn.fromBufferAttribute(this, e), rn.applyNormalMatrix(t), this.setXYZ(e, rn.x, rn.y, rn.z); return this }
    transformDirection(t) { for (let e = 0, n = this.count; e < n; e++) rn.fromBufferAttribute(this, e), rn.transformDirection(t), this.setXYZ(e, rn.x, rn.y, rn.z); return this }
    set(t, e = 0) { return this.array.set(t, e), this }
    getX(t) { return this.array[t * this.itemSize] }
    setX(t, e) { return this.array[t * this.itemSize] = e, this }
    getY(t) { return this.array[t * this.itemSize + 1] }
    setY(t, e) { return this.array[t * this.itemSize + 1] = e, this }
    getZ(t) { return this.array[t * this.itemSize + 2] }
    setZ(t, e) { return this.array[t * this.itemSize + 2] = e, this }
    getW(t) { return this.array[t * this.itemSize + 3] }
    setW(t, e) { return this.array[t * this.itemSize + 3] = e, this }
    setXY(t, e, n) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this }
    setXYZ(t, e, n, i) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this }
    setXYZW(t, e, n, i, r) { return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this }
    onUpload(t) { return this.onUploadCallback = t, this }
    clone() { return new this.constructor(this.array, this.itemSize).copy(this) }
    toJSON() { const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.prototype.slice.call(this.array), normalized: this.normalized }; return "" !== this.name && (t.name = this.name), 35044 !== this.usage && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t } }
an.prototype.isBufferAttribute = !0;
class on extends an { constructor(t, e, n) { super(new Uint16Array(t), e, n) } }
class ln extends an { constructor(t, e, n) { super(new Uint32Array(t), e, n) } }(class extends an { constructor(t, e, n) { super(new Uint16Array(t), e, n) } }).prototype.isFloat16BufferAttribute = !0;
class hn extends an { constructor(t, e, n) { super(new Float32Array(t), e, n) } }
let cn = 0;
const un = new ve,
    dn = new Ve,
    pn = new zt,
    mn = new Gt,
    fn = new Gt,
    gn = new zt;
class vn extends et { constructor() { super(), Object.defineProperty(this, "id", { value: cn++ }), this.uuid = at(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} }
    getIndex() { return this.index }
    setIndex(t) { return Array.isArray(t) ? this.index = new(gt(t) ? ln : on)(t, 1) : this.index = t, this }
    getAttribute(t) { return this.attributes[t] }
    setAttribute(t, e) { return this.attributes[t] = e, this }
    deleteAttribute(t) { return delete this.attributes[t], this }
    hasAttribute(t) { return void 0 !== this.attributes[t] }
    addGroup(t, e, n = 0) { this.groups.push({ start: t, count: e, materialIndex: n }) }
    clearGroups() { this.groups = [] }
    setDrawRange(t, e) { this.drawRange.start = t, this.drawRange.count = e }
    applyMatrix4(t) { const e = this.attributes.position;
        void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0); const n = this.attributes.normal; if (void 0 !== n) { const e = (new ft).getNormalMatrix(t);
            n.applyNormalMatrix(e), n.needsUpdate = !0 } const i = this.attributes.tangent; return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this }
    applyQuaternion(t) { return un.makeRotationFromQuaternion(t), this.applyMatrix4(un), this }
    rotateX(t) { return un.makeRotationX(t), this.applyMatrix4(un), this }
    rotateY(t) { return un.makeRotationY(t), this.applyMatrix4(un), this }
    rotateZ(t) { return un.makeRotationZ(t), this.applyMatrix4(un), this }
    translate(t, e, n) { return un.makeTranslation(t, e, n), this.applyMatrix4(un), this }
    scale(t, e, n) { return un.makeScale(t, e, n), this.applyMatrix4(un), this }
    lookAt(t) { return dn.lookAt(t), dn.updateMatrix(), this.applyMatrix4(dn.matrix), this }
    center() { return this.computeBoundingBox(), this.boundingBox.getCenter(pn).negate(), this.translate(pn.x, pn.y, pn.z), this }
    setFromPoints(t) { const e = []; for (let n = 0, i = t.length; n < i; n++) { const i = t[n];
            e.push(i.x, i.y, i.z || 0) } return this.setAttribute("position", new hn(e, 3)), this }
    computeBoundingBox() { null === this.boundingBox && (this.boundingBox = new Gt); const t = this.attributes.position,
            e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new zt(-1 / 0, -1 / 0, -1 / 0), new zt(1 / 0, 1 / 0, 1 / 0)); if (void 0 !== t) { if (this.boundingBox.setFromBufferAttribute(t), e)
                for (let t = 0, n = e.length; t < n; t++) { const n = e[t];
                    mn.setFromBufferAttribute(n), this.morphTargetsRelative ? (gn.addVectors(this.boundingBox.min, mn.min), this.boundingBox.expandByPoint(gn), gn.addVectors(this.boundingBox.max, mn.max), this.boundingBox.expandByPoint(gn)) : (this.boundingBox.expandByPoint(mn.min), this.boundingBox.expandByPoint(mn.max)) } } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) }
    computeBoundingSphere() { null === this.boundingSphere && (this.boundingSphere = new le); const t = this.attributes.position,
            e = this.morphAttributes.position; if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new zt, 1 / 0); if (t) { const n = this.boundingSphere.center; if (mn.setFromBufferAttribute(t), e)
                for (let t = 0, n = e.length; t < n; t++) { const n = e[t];
                    fn.setFromBufferAttribute(n), this.morphTargetsRelative ? (gn.addVectors(mn.min, fn.min), mn.expandByPoint(gn), gn.addVectors(mn.max, fn.max), mn.expandByPoint(gn)) : (mn.expandByPoint(fn.min), mn.expandByPoint(fn.max)) }
            mn.getCenter(n); let i = 0; for (let e = 0, r = t.count; e < r; e++) gn.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(gn)); if (e)
                for (let r = 0, s = e.length; r < s; r++) { const s = e[r],
                        a = this.morphTargetsRelative; for (let e = 0, r = s.count; e < r; e++) gn.fromBufferAttribute(s, e), a && (pn.fromBufferAttribute(t, e), gn.add(pn)), i = Math.max(i, n.distanceToSquared(gn)) }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } }
    computeTangents() { const t = this.index,
            e = this.attributes; if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); const n = t.array,
            i = e.position.array,
            r = e.normal.array,
            s = e.uv.array,
            a = i.length / 3;!1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new an(new Float32Array(4 * a), 4)); const o = this.getAttribute("tangent").array,
            l = [],
            h = []; for (let t = 0; t < a; t++) l[t] = new zt, h[t] = new zt; const c = new zt,
            u = new zt,
            d = new zt,
            p = new mt,
            m = new mt,
            f = new mt,
            g = new zt,
            v = new zt;

        function y(t, e, n) { c.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), m.fromArray(s, 2 * e), f.fromArray(s, 2 * n), u.sub(c), d.sub(c), m.sub(p), f.sub(p); const r = 1 / (m.x * f.y - f.x * m.y);
            isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), h[t].add(v), h[e].add(v), h[n].add(v)) } let x = this.groups;
        0 === x.length && (x = [{ start: 0, count: n.length }]); for (let t = 0, e = x.length; t < e; ++t) { const e = x[t],
                i = e.start; for (let t = i, r = i + e.count; t < r; t += 3) y(n[t + 0], n[t + 1], n[t + 2]) } const _ = new zt,
            b = new zt,
            w = new zt,
            M = new zt;

        function S(t) { w.fromArray(r, 3 * t), M.copy(w); const e = l[t];
            _.copy(e), _.sub(w.multiplyScalar(w.dot(e))).normalize(), b.crossVectors(M, e); const n = b.dot(h[t]) < 0 ? -1 : 1;
            o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = n } for (let t = 0, e = x.length; t < e; ++t) { const e = x[t],
                i = e.start; for (let t = i, r = i + e.count; t < r; t += 3) S(n[t + 0]), S(n[t + 1]), S(n[t + 2]) } }
    computeVertexNormals() { const t = this.index,
            e = this.getAttribute("position"); if (void 0 !== e) { let n = this.getAttribute("normal"); if (void 0 === n) n = new an(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
            else
                for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0); const i = new zt,
                r = new zt,
                s = new zt,
                a = new zt,
                o = new zt,
                l = new zt,
                h = new zt,
                c = new zt; if (t)
                for (let u = 0, d = t.count; u < d; u += 3) { const d = t.getX(u + 0),
                        p = t.getX(u + 1),
                        m = t.getX(u + 2);
                    i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), h.subVectors(s, r), c.subVectors(i, r), h.cross(c), a.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, m), a.add(h), o.add(h), l.add(h), n.setXYZ(d, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z) } else
                    for (let t = 0, a = e.count; t < a; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), h.subVectors(s, r), c.subVectors(i, r), h.cross(c), n.setXYZ(t + 0, h.x, h.y, h.z), n.setXYZ(t + 1, h.x, h.y, h.z), n.setXYZ(t + 2, h.x, h.y, h.z);
            this.normalizeNormals(), n.needsUpdate = !0 } }
    merge(t, e) { if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
        void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")); const n = this.attributes; for (const i in n) { if (void 0 === t.attributes[i]) continue; const r = n[i].array,
                s = t.attributes[i],
                a = s.array,
                o = s.itemSize * e,
                l = Math.min(a.length, r.length - o); for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t] } return this }
    normalizeNormals() { const t = this.attributes.normal; for (let e = 0, n = t.count; e < n; e++) gn.fromBufferAttribute(t, e), gn.normalize(), t.setXYZ(e, gn.x, gn.y, gn.z) }
    toNonIndexed() {
        function t(t, e) { const n = t.array,
                i = t.itemSize,
                r = t.normalized,
                s = new n.constructor(e.length * i); let a = 0,
                o = 0; for (let r = 0, l = e.length; r < l; r++) { a = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i; for (let t = 0; t < i; t++) s[o++] = n[a++] } return new an(s, i, r) } if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const e = new vn,
            n = this.index.array,
            i = this.attributes; for (const r in i) { const s = t(i[r], n);
            e.setAttribute(r, s) } const r = this.morphAttributes; for (const i in r) { const s = [],
                a = r[i]; for (let e = 0, i = a.length; e < i; e++) { const i = t(a[e], n);
                s.push(i) }
            e.morphAttributes[i] = s }
        e.morphTargetsRelative = this.morphTargetsRelative; const s = this.groups; for (let t = 0, n = s.length; t < n; t++) { const n = s[t];
            e.addGroup(n.start, n.count, n.materialIndex) } return e }
    toJSON() { const t = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) { const e = this.parameters; for (const n in e) void 0 !== e[n] && (t[n] = e[n]); return t }
        t.data = { attributes: {} }; const e = this.index;
        null !== e && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) }); const n = this.attributes; for (const e in n) { const i = n[e];
            t.data.attributes[e] = i.toJSON(t.data) } const i = {}; let r = !1; for (const e in this.morphAttributes) { const n = this.morphAttributes[e],
                s = []; for (let e = 0, i = n.length; e < i; e++) { const i = n[e];
                s.push(i.toJSON(t.data)) }
            s.length > 0 && (i[e] = s, r = !0) }
        r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative); const s = this.groups;
        s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s))); const a = this.boundingSphere; return null !== a && (t.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t }
    clone() { return (new this.constructor).copy(this) }
    copy(t) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const e = {};
        this.name = t.name; const n = t.index;
        null !== n && this.setIndex(n.clone(e)); const i = t.attributes; for (const t in i) { const n = i[t];
            this.setAttribute(t, n.clone(e)) } const r = t.morphAttributes; for (const t in r) { const n = [],
                i = r[t]; for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
            this.morphAttributes[t] = n }
        this.morphTargetsRelative = t.morphTargetsRelative; const s = t.groups; for (let t = 0, e = s.length; t < e; t++) { const e = s[t];
            this.addGroup(e.start, e.count, e.materialIndex) } const a = t.boundingBox;
        null !== a && (this.boundingBox = a.clone()); const o = t.boundingSphere; return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), this }
    dispose() { this.dispatchEvent({ type: "dispose" }) } }
vn.prototype.isBufferGeometry = !0;
const yn = new ve,
    xn = new ge,
    _n = new le,
    bn = new zt,
    wn = new zt,
    Mn = new zt,
    Sn = new zt,
    Tn = new zt,
    En = new zt,
    An = new zt,
    Rn = new zt,
    Cn = new zt,
    Ln = new mt,
    Pn = new mt,
    Dn = new mt,
    In = new zt,
    On = new zt;
class Nn extends Ve { constructor(t = new vn, e = new nn) { super(), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets() }
    copy(t) { return super.copy(t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this }
    updateMorphTargets() { const t = this.geometry; if (t.isBufferGeometry) { const e = t.morphAttributes,
                n = Object.keys(e); if (n.length > 0) { const t = e[n[0]]; if (void 0 !== t) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let e = 0, n = t.length; e < n; e++) { const n = t[e].name || String(e);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e } } } } else { const e = t.morphTargets;
            void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") } }
    raycast(t, e) { const n = this.geometry,
            i = this.material,
            r = this.matrixWorld; if (void 0 === i) return; if (null === n.boundingSphere && n.computeBoundingSphere(), _n.copy(n.boundingSphere), _n.applyMatrix4(r), !1 === t.ray.intersectsSphere(_n)) return; if (yn.copy(r).invert(), xn.copy(t.ray).applyMatrix4(yn), null !== n.boundingBox && !1 === xn.intersectsBox(n.boundingBox)) return; let s; if (n.isBufferGeometry) { const r = n.index,
                a = n.attributes.position,
                o = n.morphAttributes.position,
                l = n.morphTargetsRelative,
                h = n.attributes.uv,
                c = n.attributes.uv2,
                u = n.groups,
                d = n.drawRange; if (null !== r)
                if (Array.isArray(i))
                    for (let n = 0, p = u.length; n < p; n++) { const p = u[n],
                            m = i[p.materialIndex]; for (let n = Math.max(p.start, d.start), i = Math.min(r.count, Math.min(p.start + p.count, d.start + d.count)); n < i; n += 3) { const i = r.getX(n),
                                u = r.getX(n + 1),
                                d = r.getX(n + 2);
                            s = Fn(this, m, t, xn, a, o, l, h, c, i, u, d), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = p.materialIndex, e.push(s)) } } else { for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) { const u = r.getX(n),
                                d = r.getX(n + 1),
                                p = r.getX(n + 2);
                            s = Fn(this, i, t, xn, a, o, l, h, c, u, d, p), s && (s.faceIndex = Math.floor(n / 3), e.push(s)) } } else if (void 0 !== a)
                        if (Array.isArray(i))
                            for (let n = 0, r = u.length; n < r; n++) { const r = u[n],
                                    p = i[r.materialIndex]; for (let n = Math.max(r.start, d.start), i = Math.min(a.count, Math.min(r.start + r.count, d.start + d.count)); n < i; n += 3) { s = Fn(this, p, t, xn, a, o, l, h, c, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = r.materialIndex, e.push(s)) } } else { for (let n = Math.max(0, d.start), r = Math.min(a.count, d.start + d.count); n < r; n += 3) { s = Fn(this, i, t, xn, a, o, l, h, c, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), e.push(s)) } } } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") } }

function Fn(t, e, n, i, r, s, a, o, l, h, c, u) { bn.fromBufferAttribute(r, h), wn.fromBufferAttribute(r, c), Mn.fromBufferAttribute(r, u); const d = t.morphTargetInfluences; if (s && d) { An.set(0, 0, 0), Rn.set(0, 0, 0), Cn.set(0, 0, 0); for (let t = 0, e = s.length; t < e; t++) { const e = d[t],
                n = s[t];
            0 !== e && (Sn.fromBufferAttribute(n, h), Tn.fromBufferAttribute(n, c), En.fromBufferAttribute(n, u), a ? (An.addScaledVector(Sn, e), Rn.addScaledVector(Tn, e), Cn.addScaledVector(En, e)) : (An.addScaledVector(Sn.sub(bn), e), Rn.addScaledVector(Tn.sub(wn), e), Cn.addScaledVector(En.sub(Mn), e))) }
        bn.add(An), wn.add(Rn), Mn.add(Cn) }
    t.isSkinnedMesh && (t.boneTransform(h, bn), t.boneTransform(c, wn), t.boneTransform(u, Mn)); const p = function(t, e, n, i, r, s, a, o) { let l; if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
        On.copy(o), On.applyMatrix4(t.matrixWorld); const h = n.ray.origin.distanceTo(On); return h < n.near || h > n.far ? null : { distance: h, point: On.clone(), object: t } }(t, e, n, i, bn, wn, Mn, In); if (p) { o && (Ln.fromBufferAttribute(o, h), Pn.fromBufferAttribute(o, c), Dn.fromBufferAttribute(o, u), p.uv = Qe.getUV(In, bn, wn, Mn, Ln, Pn, Dn, new mt)), l && (Ln.fromBufferAttribute(l, h), Pn.fromBufferAttribute(l, c), Dn.fromBufferAttribute(l, u), p.uv2 = Qe.getUV(In, bn, wn, Mn, Ln, Pn, Dn, new mt)); const t = { a: h, b: c, c: u, normal: new zt, materialIndex: 0 };
        Qe.getNormal(bn, wn, Mn, t.normal), p.face = t } return p }
Nn.prototype.isMesh = !0;
class Un extends vn { constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: s }; const a = this;
        i = Math.floor(i), r = Math.floor(r), s = Math.floor(s); const o = [],
            l = [],
            h = [],
            c = []; let u = 0,
            d = 0;

        function p(t, e, n, i, r, s, p, m, f, g, v) { const y = s / f,
                x = p / g,
                _ = s / 2,
                b = p / 2,
                w = m / 2,
                M = f + 1,
                S = g + 1; let T = 0,
                E = 0; const A = new zt; for (let s = 0; s < S; s++) { const a = s * x - b; for (let o = 0; o < M; o++) { const u = o * y - _;
                    A[t] = u * i, A[e] = a * r, A[n] = w, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = m > 0 ? 1 : -1, h.push(A.x, A.y, A.z), c.push(o / f), c.push(1 - s / g), T += 1 } } for (let t = 0; t < g; t++)
                for (let e = 0; e < f; e++) { const n = u + e + M * t,
                        i = u + e + M * (t + 1),
                        r = u + (e + 1) + M * (t + 1),
                        s = u + (e + 1) + M * t;
                    o.push(n, i, s), o.push(i, r, s), E += 6 }
            a.addGroup(d, E, v), d += E, u += T }
        p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new hn(l, 3)), this.setAttribute("normal", new hn(h, 3)), this.setAttribute("uv", new hn(c, 2)) }
    static fromJSON(t) { return new Un(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments) } }

function kn(t) { const e = {}; for (const n in t) { e[n] = {}; for (const i in t[n]) { const r = t[n][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r } } return e }

function Bn(t) { const e = {}; for (let n = 0; n < t.length; n++) { const i = kn(t[n]); for (const t in i) e[t] = i[t] } return e }
const zn = { clone: kn, merge: Bn };
class Hn extends en { constructor(t) { super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t)) }
    copy(t) { return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = kn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this }
    toJSON(t) { const e = super.toJSON(t);
        e.glslVersion = this.glslVersion, e.uniforms = {}; for (const n in this.uniforms) { const i = this.uniforms[n].value;
            i && i.isTexture ? e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid } : i && i.isColor ? e.uniforms[n] = { type: "c", value: i.getHex() } : i && i.isVector2 ? e.uniforms[n] = { type: "v2", value: i.toArray() } : i && i.isVector3 ? e.uniforms[n] = { type: "v3", value: i.toArray() } : i && i.isVector4 ? e.uniforms[n] = { type: "v4", value: i.toArray() } : i && i.isMatrix3 ? e.uniforms[n] = { type: "m3", value: i.toArray() } : i && i.isMatrix4 ? e.uniforms[n] = { type: "m4", value: i.toArray() } : e.uniforms[n] = { value: i } }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader; const n = {}; for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0); return Object.keys(n).length > 0 && (e.extensions = n), e } }
Hn.prototype.isShaderMaterial = !0;
class Vn extends Ve { constructor() { super(), this.type = "Camera", this.matrixWorldInverse = new ve, this.projectionMatrix = new ve, this.projectionMatrixInverse = new ve }
    copy(t, e) { return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this }
    getWorldDirection(t) { this.updateWorldMatrix(!0, !1); const e = this.matrixWorld.elements; return t.set(-e[8], -e[9], -e[10]).normalize() }
    updateMatrixWorld(t) { super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert() }
    updateWorldMatrix(t, e) { super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert() }
    clone() { return (new this.constructor).copy(this) } }
Vn.prototype.isCamera = !0;
class Gn extends Vn { constructor(t = 50, e = 1, n = .1, i = 2e3) { super(), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() }
    copy(t, e) { return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this }
    setFocalLength(t) { const e = .5 * this.getFilmHeight() / t;
        this.fov = 2 * st * Math.atan(e), this.updateProjectionMatrix() }
    getFocalLength() { const t = Math.tan(.5 * rt * this.fov); return .5 * this.getFilmHeight() / t }
    getEffectiveFOV() { return 2 * st * Math.atan(Math.tan(.5 * rt * this.fov) / this.zoom) }
    getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) }
    getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) }
    setViewOffset(t, e, n, i, r, s) { this.aspect = t / e, null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix() }
    clearViewOffset() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() }
    updateProjectionMatrix() { const t = this.near; let e = t * Math.tan(.5 * rt * this.fov) / this.zoom,
            n = 2 * e,
            i = this.aspect * n,
            r = -.5 * i; const s = this.view; if (null !== this.view && this.view.enabled) { const t = s.fullWidth,
                a = s.fullHeight;
            r += s.offsetX * i / t, e -= s.offsetY * n / a, i *= s.width / t, n *= s.height / a } const a = this.filmOffset;
        0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() }
    toJSON(t) { const e = super.toJSON(t); return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e } }
Gn.prototype.isPerspectiveCamera = !0;
class Wn extends Ve { constructor(t, e, n) { if (super(), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
        this.renderTarget = n; const i = new Gn(90, 1, t, e);
        i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new zt(1, 0, 0)), this.add(i); const r = new Gn(90, 1, t, e);
        r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new zt(-1, 0, 0)), this.add(r); const s = new Gn(90, 1, t, e);
        s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new zt(0, 1, 0)), this.add(s); const a = new Gn(90, 1, t, e);
        a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new zt(0, -1, 0)), this.add(a); const o = new Gn(90, 1, t, e);
        o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new zt(0, 0, 1)), this.add(o); const l = new Gn(90, 1, t, e);
        l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new zt(0, 0, -1)), this.add(l) }
    update(t, e) { null === this.parent && this.updateMatrixWorld(); const n = this.renderTarget,
            [i, r, s, a, o, l] = this.children,
            h = t.getRenderTarget(),
            c = t.outputEncoding,
            u = t.toneMapping,
            d = t.xr.enabled;
        t.outputEncoding = 3e3, t.toneMapping = 0, t.xr.enabled = !1; const p = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, a), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = p, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(h), t.outputEncoding = c, t.toneMapping = u, t.xr.enabled = d, n.texture.needsPMREMUpdate = !0 } }
class jn extends Ot { constructor(t, e, n, i, r, s, a, o, l, h) { super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, n, i, r, s, a, o, l, h), this.flipY = !1 }
    get images() { return this.image }
    set images(t) { this.image = t } }
jn.prototype.isCubeTexture = !0;
class qn extends Ft { constructor(t, e = {}) { super(t, t, e); const n = { width: t, height: t, depth: 1 },
            i = [n, n, n, n, n, n];
        this.texture = new jn(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : 1006 }
    fromEquirectangularTexture(t, e) { this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter; const n = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t", fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t" },
            i = new Un(5, 5, 5),
            r = new Hn({ name: "CubemapFromEquirect", uniforms: kn(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: 1, blending: 0 });
        r.uniforms.tEquirect.value = e; const s = new Nn(i, r),
            a = e.minFilter;
        1008 === e.minFilter && (e.minFilter = 1006); return new Wn(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this }
    clear(t, e, n, i) { const r = t.getRenderTarget(); for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
        t.setRenderTarget(r) } }
qn.prototype.isWebGLCubeRenderTarget = !0;
const Xn = new zt,
    Yn = new zt,
    Jn = new ft;
class Zn { constructor(t = new zt(1, 0, 0), e = 0) { this.normal = t, this.constant = e }
    set(t, e) { return this.normal.copy(t), this.constant = e, this }
    setComponents(t, e, n, i) { return this.normal.set(t, e, n), this.constant = i, this }
    setFromNormalAndCoplanarPoint(t, e) { return this.normal.copy(t), this.constant = -e.dot(this.normal), this }
    setFromCoplanarPoints(t, e, n) { const i = Xn.subVectors(n, e).cross(Yn.subVectors(t, e)).normalize(); return this.setFromNormalAndCoplanarPoint(i, t), this }
    copy(t) { return this.normal.copy(t.normal), this.constant = t.constant, this }
    normalize() { const t = 1 / this.normal.length(); return this.normal.multiplyScalar(t), this.constant *= t, this }
    negate() { return this.constant *= -1, this.normal.negate(), this }
    distanceToPoint(t) { return this.normal.dot(t) + this.constant }
    distanceToSphere(t) { return this.distanceToPoint(t.center) - t.radius }
    projectPoint(t, e) { return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t) }
    intersectLine(t, e) { const n = t.delta(Xn),
            i = this.normal.dot(n); if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null; const r = -(t.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start) }
    intersectsLine(t) { const e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end); return e < 0 && n > 0 || n < 0 && e > 0 }
    intersectsBox(t) { return t.intersectsPlane(this) }
    intersectsSphere(t) { return t.intersectsPlane(this) }
    coplanarPoint(t) { return t.copy(this.normal).multiplyScalar(-this.constant) }
    applyMatrix4(t, e) { const n = e || Jn.getNormalMatrix(t),
            i = this.coplanarPoint(Xn).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this }
    translate(t) { return this.constant -= t.dot(this.normal), this }
    equals(t) { return t.normal.equals(this.normal) && t.constant === this.constant }
    clone() { return (new this.constructor).copy(this) } }
Zn.prototype.isPlane = !0;
const $n = new le,
    Kn = new zt;
class Qn { constructor(t = new Zn, e = new Zn, n = new Zn, i = new Zn, r = new Zn, s = new Zn) { this.planes = [t, e, n, i, r, s] }
    set(t, e, n, i, r, s) { const a = this.planes; return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this }
    copy(t) { const e = this.planes; for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]); return this }
    setFromProjectionMatrix(t) { const e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            o = n[4],
            l = n[5],
            h = n[6],
            c = n[7],
            u = n[8],
            d = n[9],
            p = n[10],
            m = n[11],
            f = n[12],
            g = n[13],
            v = n[14],
            y = n[15]; return e[0].setComponents(a - i, c - o, m - u, y - f).normalize(), e[1].setComponents(a + i, c + o, m + u, y + f).normalize(), e[2].setComponents(a + r, c + l, m + d, y + g).normalize(), e[3].setComponents(a - r, c - l, m - d, y - g).normalize(), e[4].setComponents(a - s, c - h, m - p, y - v).normalize(), e[5].setComponents(a + s, c + h, m + p, y + v).normalize(), this }
    intersectsObject(t) { const e = t.geometry; return null === e.boundingSphere && e.computeBoundingSphere(), $n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere($n) }
    intersectsSprite(t) { return $n.center.set(0, 0, 0), $n.radius = .7071067811865476, $n.applyMatrix4(t.matrixWorld), this.intersectsSphere($n) }
    intersectsSphere(t) { const e = this.planes,
            n = t.center,
            i = -t.radius; for (let t = 0; t < 6; t++) { if (e[t].distanceToPoint(n) < i) return !1 } return !0 }
    intersectsBox(t) { const e = this.planes; for (let n = 0; n < 6; n++) { const i = e[n]; if (Kn.x = i.normal.x > 0 ? t.max.x : t.min.x, Kn.y = i.normal.y > 0 ? t.max.y : t.min.y, Kn.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Kn) < 0) return !1 } return !0 }
    containsPoint(t) { const e = this.planes; for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0) return !1;
        return !0 }
    clone() { return (new this.constructor).copy(this) } }

function ti() { let t = null,
        e = !1,
        n = null,
        i = null;

    function r(e, s) { n(e, s), i = t.requestAnimationFrame(r) } return { start: function() {!0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0) }, stop: function() { t.cancelAnimationFrame(i), e = !1 }, setAnimationLoop: function(t) { n = t }, setContext: function(e) { t = e } } }

function ei(t, e) { const n = e.isWebGL2,
        i = new WeakMap; return { get: function(t) { return t.isInterleavedBufferAttribute && (t = t.data), i.get(t) }, remove: function(e) { e.isInterleavedBufferAttribute && (e = e.data); const n = i.get(e);
            n && (t.deleteBuffer(n.buffer), i.delete(e)) }, update: function(e, r) { if (e.isGLBufferAttribute) { const t = i.get(e); return void((!t || t.version < e.version) && i.set(e, { buffer: e.buffer, type: e.type, bytesPerElement: e.elementSize, version: e.version })) }
            e.isInterleavedBufferAttribute && (e = e.data); const s = i.get(e);
            void 0 === s ? i.set(e, function(e, i) { const r = e.array,
                    s = e.usage,
                    a = t.createBuffer(); let o; if (t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
                else if (r instanceof Uint16Array)
                    if (e.isFloat16BufferAttribute) { if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                        o = 5131 } else o = 5123;
                else if (r instanceof Int16Array) o = 5122;
                else if (r instanceof Uint32Array) o = 5125;
                else if (r instanceof Int32Array) o = 5124;
                else if (r instanceof Int8Array) o = 5120;
                else if (r instanceof Uint8Array) o = 5121;
                else { if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                    o = 5121 } return { buffer: a, type: o, bytesPerElement: r.BYTES_PER_ELEMENT, version: e.version } }(e, r)) : s.version < e.version && (! function(e, i, r) { const s = i.array,
                    a = i.updateRange;
                t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1) }(s.buffer, e, r), s.version = e.version) } } }
class ni extends vn { constructor(t = 1, e = 1, n = 1, i = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: i }; const r = t / 2,
            s = e / 2,
            a = Math.floor(n),
            o = Math.floor(i),
            l = a + 1,
            h = o + 1,
            c = t / a,
            u = e / o,
            d = [],
            p = [],
            m = [],
            f = []; for (let t = 0; t < h; t++) { const e = t * u - s; for (let n = 0; n < l; n++) { const i = n * c - r;
                p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t / o) } } for (let t = 0; t < o; t++)
            for (let e = 0; e < a; e++) { const n = e + l * t,
                    i = e + l * (t + 1),
                    r = e + 1 + l * (t + 1),
                    s = e + 1 + l * t;
                d.push(n, i, s), d.push(i, r, s) }
        this.setIndex(d), this.setAttribute("position", new hn(p, 3)), this.setAttribute("normal", new hn(m, 3)), this.setAttribute("uv", new hn(f, 2)) }
    static fromJSON(t) { return new ni(t.width, t.height, t.widthSegments, t.heightSegments) } }
const ii = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed = vec3( position );", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif", envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif", map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;", normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif", output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif", shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif", shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif", uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif", uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif", uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}" },
    ri = { common: { diffuse: { value: new Rt(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new ft }, uv2Transform: { value: new ft }, alphaMap: { value: null }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new mt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Rt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Rt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new ft } }, sprite: { diffuse: { value: new Rt(16777215) }, opacity: { value: 1 }, center: { value: new mt(.5, .5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new ft } } },
    si = { basic: { uniforms: Bn([ri.common, ri.specularmap, ri.envmap, ri.aomap, ri.lightmap, ri.fog]), vertexShader: ii.meshbasic_vert, fragmentShader: ii.meshbasic_frag }, lambert: { uniforms: Bn([ri.common, ri.specularmap, ri.envmap, ri.aomap, ri.lightmap, ri.emissivemap, ri.fog, ri.lights, { emissive: { value: new Rt(0) } }]), vertexShader: ii.meshlambert_vert, fragmentShader: ii.meshlambert_frag }, phong: { uniforms: Bn([ri.common, ri.specularmap, ri.envmap, ri.aomap, ri.lightmap, ri.emissivemap, ri.bumpmap, ri.normalmap, ri.displacementmap, ri.fog, ri.lights, { emissive: { value: new Rt(0) }, specular: { value: new Rt(1118481) }, shininess: { value: 30 } }]), vertexShader: ii.meshphong_vert, fragmentShader: ii.meshphong_frag }, standard: { uniforms: Bn([ri.common, ri.envmap, ri.aomap, ri.lightmap, ri.emissivemap, ri.bumpmap, ri.normalmap, ri.displacementmap, ri.roughnessmap, ri.metalnessmap, ri.fog, ri.lights, { emissive: { value: new Rt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: ii.meshphysical_vert, fragmentShader: ii.meshphysical_frag }, toon: { uniforms: Bn([ri.common, ri.aomap, ri.lightmap, ri.emissivemap, ri.bumpmap, ri.normalmap, ri.displacementmap, ri.gradientmap, ri.fog, ri.lights, { emissive: { value: new Rt(0) } }]), vertexShader: ii.meshtoon_vert, fragmentShader: ii.meshtoon_frag }, matcap: { uniforms: Bn([ri.common, ri.bumpmap, ri.normalmap, ri.displacementmap, ri.fog, { matcap: { value: null } }]), vertexShader: ii.meshmatcap_vert, fragmentShader: ii.meshmatcap_frag }, points: { uniforms: Bn([ri.points, ri.fog]), vertexShader: ii.points_vert, fragmentShader: ii.points_frag }, dashed: { uniforms: Bn([ri.common, ri.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: ii.linedashed_vert, fragmentShader: ii.linedashed_frag }, depth: { uniforms: Bn([ri.common, ri.displacementmap]), vertexShader: ii.depth_vert, fragmentShader: ii.depth_frag }, normal: { uniforms: Bn([ri.common, ri.bumpmap, ri.normalmap, ri.displacementmap, { opacity: { value: 1 } }]), vertexShader: ii.meshnormal_vert, fragmentShader: ii.meshnormal_frag }, sprite: { uniforms: Bn([ri.sprite, ri.fog]), vertexShader: ii.sprite_vert, fragmentShader: ii.sprite_frag }, background: { uniforms: { uvTransform: { value: new ft }, t2D: { value: null } }, vertexShader: ii.background_vert, fragmentShader: ii.background_frag }, cube: { uniforms: Bn([ri.envmap, { opacity: { value: 1 } }]), vertexShader: ii.cube_vert, fragmentShader: ii.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: ii.equirect_vert, fragmentShader: ii.equirect_frag }, distanceRGBA: { uniforms: Bn([ri.common, ri.displacementmap, { referencePosition: { value: new zt }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: ii.distanceRGBA_vert, fragmentShader: ii.distanceRGBA_frag }, shadow: { uniforms: Bn([ri.lights, ri.fog, { color: { value: new Rt(0) }, opacity: { value: 1 } }]), vertexShader: ii.shadow_vert, fragmentShader: ii.shadow_frag } };

function ai(t, e, n, i, r, s) { const a = new Rt(0); let o, l, h = !0 === r ? 0 : 1,
        c = null,
        u = 0,
        d = null;

    function p(t, e) { n.buffers.color.setClear(t.r, t.g, t.b, e, s) } return { getClearColor: function() { return a }, setClearColor: function(t, e = 1) { a.set(t), h = e, p(a, h) }, getClearAlpha: function() { return h }, setClearAlpha: function(t) { h = t, p(a, h) }, render: function(n, r) { let s = !1,
                m = !0 === r.isScene ? r.background : null;
            m && m.isTexture && (m = e.get(m)); const f = t.xr,
                g = f.getSession && f.getSession();
            g && "additive" === g.environmentBlendMode && (m = null), null === m ? p(a, h) : m && m.isColor && (p(m, 1), s = !0), (t.autoClear || s) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || 306 === m.mapping) ? (void 0 === l && (l = new Nn(new Un(1, 1, 1), new Hn({ name: "BackgroundCubeMaterial", uniforms: kn(si.cube.uniforms), vertexShader: si.cube.vertexShader, fragmentShader: si.cube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1 })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(t, e, n) { this.matrixWorld.copyPosition(n.matrixWorld) }, Object.defineProperty(l.material, "envMap", { get: function() { return this.uniforms.envMap.value } }), i.update(l)), l.material.uniforms.envMap.value = m, l.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1, c === m && u === m.version && d === t.toneMapping || (l.material.needsUpdate = !0, c = m, u = m.version, d = t.toneMapping), n.unshift(l, l.geometry, l.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && (o = new Nn(new ni(2, 2), new Hn({ name: "BackgroundMaterial", uniforms: kn(si.background.uniforms), vertexShader: si.background.vertexShader, fragmentShader: si.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1 })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", { get: function() { return this.uniforms.t2D.value } }), i.update(o)), o.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), c === m && u === m.version && d === t.toneMapping || (o.material.needsUpdate = !0, c = m, u = m.version, d = t.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null)) } } }

function oi(t, e, n, i) { const r = t.getParameter(34921),
        s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        a = i.isWebGL2 || null !== s,
        o = {},
        l = p(null); let h = l,
        c = !1;

    function u(e) { return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e) }

    function d(e) { return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e) }

    function p(t) { const e = [],
            n = [],
            i = []; for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: e, enabledAttributes: n, attributeDivisors: i, object: t, attributes: {}, index: null } }

    function m() { const t = h.newAttributes; for (let e = 0, n = t.length; e < n; e++) t[e] = 0 }

    function f(t) { g(t, 0) }

    function g(n, r) { const s = h.newAttributes,
            a = h.enabledAttributes,
            o = h.attributeDivisors; if (s[n] = 1, 0 === a[n] && (t.enableVertexAttribArray(n), a[n] = 1), o[n] !== r) {
            (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r } }

    function v() { const e = h.newAttributes,
            n = h.enabledAttributes; for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0) }

    function y(e, n, r, s, a, o) {!0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o) }

    function x() { _(), c = !0, h !== l && (h = l, u(h.object)) }

    function _() { l.geometry = null, l.program = null, l.wireframe = !1 } return { setup: function(r, l, d, x, _) { let b = !1; if (a) { const e = function(e, n, r) { const a = !0 === r.wireframe; let l = o[e.id];
                    void 0 === l && (l = {}, o[e.id] = l); let h = l[n.id];
                    void 0 === h && (h = {}, l[n.id] = h); let c = h[a];
                    void 0 === c && (c = p(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), h[a] = c); return c }(x, d, l);
                h !== e && (h = e, u(h.object)), b = function(t, e) { const n = h.attributes,
                        i = t.attributes; let r = 0; for (const t in i) { const e = n[t],
                            s = i[t]; if (void 0 === e) return !0; if (e.attribute !== s) return !0; if (e.data !== s.data) return !0;
                        r++ } return h.attributesNum !== r || h.index !== e }(x, _), b && function(t, e) { const n = {},
                        i = t.attributes; let r = 0; for (const t in i) { const e = i[t],
                            s = {};
                        s.attribute = e, e.data && (s.data = e.data), n[t] = s, r++ }
                    h.attributes = n, h.attributesNum = r, h.index = e }(x, _) } else { const t = !0 === l.wireframe;
                h.geometry === x.id && h.program === d.id && h.wireframe === t || (h.geometry = x.id, h.program = d.id, h.wireframe = t, b = !0) }!0 === r.isInstancedMesh && (b = !0), null !== _ && n.update(_, 34963), (b || c) && (c = !1, function(r, s, a, o) { if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                m(); const l = o.attributes,
                    h = a.getAttributes(),
                    c = s.defaultAttributeValues; for (const e in h) { const i = h[e]; if (i.location >= 0) { let s = l[e]; if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) { const e = s.normalized,
                                a = s.itemSize,
                                l = n.get(s); if (void 0 === l) continue; const h = l.buffer,
                                c = l.type,
                                u = l.bytesPerElement; if (s.isInterleavedBufferAttribute) { const n = s.data,
                                    l = n.stride,
                                    d = s.offset; if (n.isInstancedInterleavedBuffer) { for (let t = 0; t < i.locationSize; t++) g(i.location + t, n.meshPerAttribute);!0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count) } else
                                    for (let t = 0; t < i.locationSize; t++) f(i.location + t);
                                t.bindBuffer(34962, h); for (let t = 0; t < i.locationSize; t++) y(i.location + t, a / i.locationSize, c, e, l * u, (d + a / i.locationSize * t) * u) } else { if (s.isInstancedBufferAttribute) { for (let t = 0; t < i.locationSize; t++) g(i.location + t, s.meshPerAttribute);!0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count) } else
                                    for (let t = 0; t < i.locationSize; t++) f(i.location + t);
                                t.bindBuffer(34962, h); for (let t = 0; t < i.locationSize; t++) y(i.location + t, a / i.locationSize, c, e, a * u, a / i.locationSize * t * u) } } else if (void 0 !== c) { const n = c[e]; if (void 0 !== n) switch (n.length) {
                                case 2:
                                    t.vertexAttrib2fv(i.location, n); break;
                                case 3:
                                    t.vertexAttrib3fv(i.location, n); break;
                                case 4:
                                    t.vertexAttrib4fv(i.location, n); break;
                                default:
                                    t.vertexAttrib1fv(i.location, n) } } } }
                v() }(r, l, d, x), null !== _ && t.bindBuffer(34963, n.get(_).buffer)) }, reset: x, resetDefaultState: _, dispose: function() { x(); for (const t in o) { const e = o[t]; for (const t in e) { const n = e[t]; for (const t in n) d(n[t].object), delete n[t];
                    delete e[t] }
                delete o[t] } }, releaseStatesOfGeometry: function(t) { if (void 0 === o[t.id]) return; const e = o[t.id]; for (const t in e) { const n = e[t]; for (const t in n) d(n[t].object), delete n[t];
                delete e[t] }
            delete o[t.id] }, releaseStatesOfProgram: function(t) { for (const e in o) { const n = o[e]; if (void 0 === n[t.id]) continue; const i = n[t.id]; for (const t in i) d(i[t].object), delete i[t];
                delete n[t.id] } }, initAttributes: m, enableAttribute: f, disableUnusedAttributes: v } }

function li(t, e, n, i) { const r = i.isWebGL2; let s;
    this.setMode = function(t) { s = t }, this.render = function(e, i) { t.drawArrays(s, e, i), n.update(i, s, 1) }, this.renderInstances = function(i, a, o) { if (0 === o) return; let l, h; if (r) l = t, h = "drawArraysInstanced";
        else if (l = e.get("ANGLE_instanced_arrays"), h = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        l[h](s, i, a, o), n.update(a, s, o) } }

function hi(t, e, n) { let i;

    function r(e) { if ("highp" === e) { if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            e = "mediump" } return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp" } const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext; let a = void 0 !== n.precision ? n.precision : "highp"; const o = r(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o); const l = s || e.has("WEBGL_draw_buffers"),
        h = !0 === n.logarithmicDepthBuffer,
        c = t.getParameter(34930),
        u = t.getParameter(35660),
        d = t.getParameter(3379),
        p = t.getParameter(34076),
        m = t.getParameter(34921),
        f = t.getParameter(36347),
        g = t.getParameter(36348),
        v = t.getParameter(36349),
        y = u > 0,
        x = s || e.has("OES_texture_float"); return { isWebGL2: s, drawBuffers: l, getMaxAnisotropy: function() { if (void 0 !== i) return i; if (!0 === e.has("EXT_texture_filter_anisotropic")) { const n = e.get("EXT_texture_filter_anisotropic");
                i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else i = 0; return i }, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: h, maxTextures: c, maxVertexTextures: u, maxTextureSize: d, maxCubemapSize: p, maxAttributes: m, maxVertexUniforms: f, maxVaryings: g, maxFragmentUniforms: v, vertexTextures: y, floatFragmentTextures: x, floatVertexTextures: y && x, maxSamples: s ? t.getParameter(36183) : 0 } }

function ci(t) { const e = this; let n = null,
        i = 0,
        r = !1,
        s = !1; const a = new Zn,
        o = new ft,
        l = { value: null, needsUpdate: !1 };

    function h() { l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0 }

    function c(t, n, i, r) { const s = null !== t ? t.length : 0; let h = null; if (0 !== s) { if (h = l.value, !0 !== r || null === h) { const e = i + 4 * s,
                    r = n.matrixWorldInverse;
                o.getNormalMatrix(r), (null === h || h.length < e) && (h = new Float32Array(e)); for (let e = 0, n = i; e !== s; ++e, n += 4) a.copy(t[e]).applyMatrix4(r, o), a.normal.toArray(h, n), h[n + 3] = a.constant }
            l.value = h, l.needsUpdate = !0 } return e.numPlanes = s, e.numIntersection = 0, h }
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, s) { const a = 0 !== t.length || e || 0 !== i || r; return r = e, n = c(t, s, 0), i = t.length, a }, this.beginShadows = function() { s = !0, c(null) }, this.endShadows = function() { s = !1, h() }, this.setState = function(e, a, o) { const u = e.clippingPlanes,
            d = e.clipIntersection,
            p = e.clipShadows,
            m = t.get(e); if (!r || null === u || 0 === u.length || s && !p) s ? c(null) : h();
        else { const t = s ? 0 : i,
                e = 4 * t; let r = m.clippingState || null;
            l.value = r, r = c(u, a, e, o); for (let t = 0; t !== e; ++t) r[t] = n[t];
            m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t } } }

function ui(t) { let e = new WeakMap;

    function n(t, e) { return 303 === e ? t.mapping = 301 : 304 === e && (t.mapping = 302), t }

    function i(t) { const n = t.target;
        n.removeEventListener("dispose", i); const r = e.get(n);
        void 0 !== r && (e.delete(n), r.dispose()) } return { get: function(r) { if (r && r.isTexture && !1 === r.isRenderTargetTexture) { const s = r.mapping; if (303 === s || 304 === s) { if (e.has(r)) { return n(e.get(r).texture, r.mapping) } { const s = r.image; if (s && s.height > 0) { const a = new qn(s.height / 2); return a.fromEquirectangularTexture(t, r), e.set(r, a), r.addEventListener("dispose", i), n(a.texture, r.mapping) } return null } } } return r }, dispose: function() { e = new WeakMap } } }
si.physical = { uniforms: Bn([si.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new mt(1, 1) }, clearcoatNormalMap: { value: null }, sheen: { value: 0 }, sheenColor: { value: new Rt(0) }, sheenColorMap: { value: null }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionSamplerSize: { value: new mt }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Rt(0) }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularColor: { value: new Rt(1, 1, 1) }, specularColorMap: { value: null } }]), vertexShader: ii.meshphysical_vert, fragmentShader: ii.meshphysical_frag };
class di extends Vn { constructor(t = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3) { super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix() }
    copy(t, e) { return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this }
    setViewOffset(t, e, n, i, r, s) { null === this.view && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix() }
    clearViewOffset() { null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix() }
    updateProjectionMatrix() { const t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2; let r = n - t,
            s = n + t,
            a = i + e,
            o = i - e; if (null !== this.view && this.view.enabled) { const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
                e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height }
        this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() }
    toJSON(t) { const e = super.toJSON(t); return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e } }
di.prototype.isOrthographicCamera = !0;
const pi = [.125, .215, .35, .446, .526, .582],
    mi = new di,
    fi = new Rt;
let gi = null;
const vi = (1 + Math.sqrt(5)) / 2,
    yi = 1 / vi,
    xi = [new zt(1, 1, 1), new zt(-1, 1, 1), new zt(1, 1, -1), new zt(-1, 1, -1), new zt(0, vi, yi), new zt(0, vi, -yi), new zt(yi, 0, vi), new zt(-yi, 0, vi), new zt(vi, yi, 0), new zt(-vi, yi, 0)];
class _i { constructor(t) { this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) }
    fromScene(t, e = 0, n = .1, i = 100) { gi = this._renderer.getRenderTarget(), this._setSize(256); const r = this._allocateTargets(); return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r }
    fromEquirectangular(t, e = null) { return this._fromTexture(t, e) }
    fromCubemap(t, e = null) { return this._fromTexture(t, e) }
    compileCubemapShader() { null === this._cubemapMaterial && (this._cubemapMaterial = Si(), this._compileMaterial(this._cubemapMaterial)) }
    compileEquirectangularShader() { null === this._equirectMaterial && (this._equirectMaterial = Mi(), this._compileMaterial(this._equirectMaterial)) }
    dispose() { this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose() }
    _setSize(t) { this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax) }
    _dispose() { null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose(); for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose() }
    _cleanup(t) { this._renderer.setRenderTarget(gi), t.scissorTest = !1, wi(t, 0, 0, t.width, t.height) }
    _fromTexture(t, e) { 301 === t.mapping || 302 === t.mapping ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), gi = this._renderer.getRenderTarget(); const n = e || this._allocateTargets(); return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n }
    _allocateTargets() { const t = 3 * Math.max(this._cubeSize, 112),
            e = 4 * this._cubeSize - 32,
            n = { magFilter: 1006, minFilter: 1006, generateMipmaps: !1, type: 1016, format: 1023, encoding: 3e3, depthBuffer: !1 },
            i = bi(t, e, n); if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t) { null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = bi(t, e, n); const { _lodMax: i } = this;
            ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function(t) { const e = [],
                    n = [],
                    i = []; let r = t; const s = t - 4 + 1 + pi.length; for (let a = 0; a < s; a++) { const s = Math.pow(2, r);
                    n.push(s); let o = 1 / s;
                    a > t - 4 ? o = pi[a - t + 4 - 1] : 0 === a && (o = 0), i.push(o); const l = 1 / (s - 1),
                        h = -l / 2,
                        c = 1 + l / 2,
                        u = [h, h, c, h, c, c, h, h, c, c, h, c],
                        d = 6,
                        p = 6,
                        m = 3,
                        f = 2,
                        g = 1,
                        v = new Float32Array(m * p * d),
                        y = new Float32Array(f * p * d),
                        x = new Float32Array(g * p * d); for (let t = 0; t < d; t++) { const e = t % 3 * 2 / 3 - 1,
                            n = t > 2 ? 0 : -1,
                            i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
                        v.set(i, m * p * t), y.set(u, f * p * t); const r = [t, t, t, t, t, t];
                        x.set(r, g * p * t) } const _ = new vn;
                    _.setAttribute("position", new an(v, m)), _.setAttribute("uv", new an(y, f)), _.setAttribute("faceIndex", new an(x, g)), e.push(_), r > 4 && r-- } return { lodPlanes: e, sizeLods: n, sigmas: i } }(i)), this._blurMaterial = function(t, e, n) { const i = new Float32Array(20),
                    r = new zt(0, 1, 0); return new Hn({ name: "SphericalGaussianBlur", defines: { n: 20, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / n, CUBEUV_MAX_MIP: `${t}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: Ti(), fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t", blending: 0, depthTest: !1, depthWrite: !1 }) }(i, t, e) } return i }
    _compileMaterial(t) { const e = new Nn(this._lodPlanes[0], t);
        this._renderer.compile(e, mi) }
    _sceneToCubeUV(t, e, n, i) { const r = new Gn(90, 1, e, n),
            s = [1, -1, 1, 1, 1, 1],
            a = [1, 1, 1, -1, -1, -1],
            o = this._renderer,
            l = o.autoClear,
            h = o.toneMapping;
        o.getClearColor(fi), o.toneMapping = 0, o.autoClear = !1; const c = new nn({ name: "PMREM.Background", side: 1, depthWrite: !1, depthTest: !1 }),
            u = new Nn(new Un, c); let d = !1; const p = t.background;
        p ? p.isColor && (c.color.copy(p), t.background = null, d = !0) : (c.color.copy(fi), d = !0); for (let e = 0; e < 6; e++) { const n = e % 3;
            0 === n ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0)) : 1 === n ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e])); const l = this._cubeSize;
            wi(i, n * l, e > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(u, r), o.render(t, r) }
        u.geometry.dispose(), u.material.dispose(), o.toneMapping = h, o.autoClear = l, t.background = p }
    _textureToCubeUV(t, e) { const n = this._renderer,
            i = 301 === t.mapping || 302 === t.mapping;
        i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Si()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Mi()); const r = i ? this._cubemapMaterial : this._equirectMaterial,
            s = new Nn(this._lodPlanes[0], r);
        r.uniforms.envMap.value = t; const a = this._cubeSize;
        wi(e, 0, 0, 3 * a, 2 * a), n.setRenderTarget(e), n.render(s, mi) }
    _applyPMREM(t) { const e = this._renderer,
            n = e.autoClear;
        e.autoClear = !1; for (let e = 1; e < this._lodPlanes.length; e++) { const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]),
                i = xi[(e - 1) % xi.length];
            this._blur(t, e - 1, e, n, i) }
        e.autoClear = n }
    _blur(t, e, n, i, r) { const s = this._pingPongRenderTarget;
        this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r) }
    _halfBlur(t, e, n, i, r, s, a) { const o = this._renderer,
            l = this._blurMaterial; "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!"); const h = new Nn(this._lodPlanes[i], l),
            c = l.uniforms,
            u = this._sizeLods[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
            p = r / d,
            m = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
        m > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`); const f = []; let g = 0; for (let t = 0; t < 20; ++t) { const e = t / p,
                n = Math.exp(-e * e / 2);
            f.push(n), 0 === t ? g += n : t < m && (g += 2 * n) } for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
        c.envMap.value = t.texture, c.samples.value = m, c.weights.value = f, c.latitudinal.value = "latitudinal" === s, a && (c.poleAxis.value = a); const { _lodMax: v } = this;
        c.dTheta.value = d, c.mipInt.value = v - n; const y = this._sizeLods[i];
        wi(e, 3 * y * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - y), 3 * y, 2 * y), o.setRenderTarget(e), o.render(h, mi) } }

function bi(t, e, n) { const i = new Ft(t, e, n); return i.texture.mapping = 306, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i }

function wi(t, e, n, i, r) { t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r) }

function Mi() { return new Hn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Ti(), fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t", blending: 0, depthTest: !1, depthWrite: !1 }) }

function Si() { return new Hn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Ti(), fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t", blending: 0, depthTest: !1, depthWrite: !1 }) }

function Ti() { return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t" }

function Ei(t) { let e = new WeakMap,
        n = null;

    function i(t) { const n = t.target;
        n.removeEventListener("dispose", i); const r = e.get(n);
        void 0 !== r && (e.delete(n), r.dispose()) } return { get: function(r) { if (r && r.isTexture) { const s = r.mapping,
                    a = 303 === s || 304 === s,
                    o = 301 === s || 302 === s; if (a || o) { if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) { r.needsPMREMUpdate = !1; let i = e.get(r); return null === n && (n = new _i(t)), i = a ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i), e.set(r, i), i.texture } if (e.has(r)) return e.get(r).texture; { const s = r.image; if (a && s && s.height > 0 || o && s && function(t) { let e = 0; const n = 6; for (let i = 0; i < n; i++) void 0 !== t[i] && e++; return e === n }(s)) { null === n && (n = new _i(t)); const s = a ? n.fromEquirectangular(r) : n.fromCubemap(r); return e.set(r, s), r.addEventListener("dispose", i), s.texture } return null } } } return r }, dispose: function() { e = new WeakMap, null !== n && (n.dispose(), n = null) } } }

function Ai(t) { const e = {};

    function n(n) { if (void 0 !== e[n]) return e[n]; let i; switch (n) {
            case "WEBGL_depth_texture":
                i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture"); break;
            case "EXT_texture_filter_anisotropic":
                i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break;
            case "WEBGL_compressed_texture_s3tc":
                i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break;
            case "WEBGL_compressed_texture_pvrtc":
                i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break;
            default:
                i = t.getExtension(n) } return e[n] = i, i } return { has: function(t) { return null !== n(t) }, init: function(t) { t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture") }, get: function(t) { const e = n(t); return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e } } }

function Ri(t, e, n, i) { const r = {},
        s = new WeakMap;

    function a(t) { const o = t.target;
        null !== o.index && e.remove(o.index); for (const t in o.attributes) e.remove(o.attributes[t]);
        o.removeEventListener("dispose", a), delete r[o.id]; const l = s.get(o);
        l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries-- }

    function o(t) { const n = [],
            i = t.index,
            r = t.attributes.position; let a = 0; if (null !== i) { const t = i.array;
            a = i.version; for (let e = 0, i = t.length; e < i; e += 3) { const i = t[e + 0],
                    r = t[e + 1],
                    s = t[e + 2];
                n.push(i, r, r, s, s, i) } } else { const t = r.array;
            a = r.version; for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) { const t = e + 0,
                    i = e + 1,
                    r = e + 2;
                n.push(t, i, i, r, r, t) } } const o = new(gt(n) ? ln : on)(n, 1);
        o.version = a; const l = s.get(t);
        l && e.remove(l), s.set(t, o) } return { get: function(t, e) { return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e }, update: function(t) { const n = t.attributes; for (const t in n) e.update(n[t], 34962); const i = t.morphAttributes; for (const t in i) { const n = i[t]; for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962) } }, getWireframeAttribute: function(t) { const e = s.get(t); if (e) { const n = t.index;
                null !== n && e.version < n.version && o(t) } else o(t); return s.get(t) } } }

function Ci(t, e, n, i) { const r = i.isWebGL2; let s, a, o;
    this.setMode = function(t) { s = t }, this.setIndex = function(t) { a = t.type, o = t.bytesPerElement }, this.render = function(e, i) { t.drawElements(s, i, a, e * o), n.update(i, s, 1) }, this.renderInstances = function(i, l, h) { if (0 === h) return; let c, u; if (r) c = t, u = "drawElementsInstanced";
        else if (c = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === c) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        c[u](s, l, a, i * o, h), n.update(l, s, h) } }

function Li(t) { const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; return { memory: { geometries: 0, textures: 0 }, render: e, programs: null, autoReset: !0, reset: function() { e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0 }, update: function(t, n, i) { switch (e.calls++, n) {
                case 4:
                    e.triangles += i * (t / 3); break;
                case 1:
                    e.lines += i * (t / 2); break;
                case 3:
                    e.lines += i * (t - 1); break;
                case 2:
                    e.lines += i * t; break;
                case 0:
                    e.points += i * t; break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", n) } } } }

function Pi(t, e) { return t[0] - e[0] }

function Di(t, e) { return Math.abs(e[1]) - Math.abs(t[1]) }

function Ii(t, e) { let n = 1; const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
    i instanceof Int8Array ? n = 127 : i instanceof Int16Array ? n = 32767 : i instanceof Int32Array ? n = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i), t.divideScalar(n) }

function Oi(t, e, n) { const i = {},
        r = new Float32Array(8),
        s = new WeakMap,
        a = new Nt,
        o = []; for (let t = 0; t < 8; t++) o[t] = [t, 0]; return { update: function(l, h, c, u) { const d = l.morphTargetInfluences; if (!0 === e.isWebGL2) { const i = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color,
                    r = void 0 !== i ? i.length : 0; let o = s.get(h); if (void 0 === o || o.count !== r) { void 0 !== o && o.texture.dispose(); const t = void 0 !== h.morphAttributes.position,
                        n = void 0 !== h.morphAttributes.normal,
                        i = void 0 !== h.morphAttributes.color,
                        l = h.morphAttributes.position || [],
                        c = h.morphAttributes.normal || [],
                        u = h.morphAttributes.color || []; let d = 0;!0 === t && (d = 1), !0 === n && (d = 2), !0 === i && (d = 3); let p = h.attributes.position.count * d,
                        m = 1;
                    p > e.maxTextureSize && (m = Math.ceil(p / e.maxTextureSize), p = e.maxTextureSize); const f = new Float32Array(p * m * 4 * r),
                        g = new Ut(f, p, m, r);
                    g.type = 1015, g.needsUpdate = !0; const v = 4 * d; for (let e = 0; e < r; e++) { const r = l[e],
                            s = c[e],
                            o = u[e],
                            h = p * m * 4 * e; for (let e = 0; e < r.count; e++) { const l = e * v;!0 === t && (a.fromBufferAttribute(r, e), !0 === r.normalized && Ii(a, r), f[h + l + 0] = a.x, f[h + l + 1] = a.y, f[h + l + 2] = a.z, f[h + l + 3] = 0), !0 === n && (a.fromBufferAttribute(s, e), !0 === s.normalized && Ii(a, s), f[h + l + 4] = a.x, f[h + l + 5] = a.y, f[h + l + 6] = a.z, f[h + l + 7] = 0), !0 === i && (a.fromBufferAttribute(o, e), !0 === o.normalized && Ii(a, o), f[h + l + 8] = a.x, f[h + l + 9] = a.y, f[h + l + 10] = a.z, f[h + l + 11] = 4 === o.itemSize ? a.w : 1) } }
                    o = { count: r, texture: g, size: new mt(p, m) }, s.set(h, o), h.addEventListener("dispose", (function t() { g.dispose(), s.delete(h), h.removeEventListener("dispose", t) })) } let l = 0; for (let t = 0; t < d.length; t++) l += d[t]; const c = h.morphTargetsRelative ? 1 : 1 - l;
                u.getUniforms().setValue(t, "morphTargetBaseInfluence", c), u.getUniforms().setValue(t, "morphTargetInfluences", d), u.getUniforms().setValue(t, "morphTargetsTexture", o.texture, n), u.getUniforms().setValue(t, "morphTargetsTextureSize", o.size) } else { const e = void 0 === d ? 0 : d.length; let n = i[h.id]; if (void 0 === n || n.length !== e) { n = []; for (let t = 0; t < e; t++) n[t] = [t, 0];
                    i[h.id] = n } for (let t = 0; t < e; t++) { const e = n[t];
                    e[0] = t, e[1] = d[t] }
                n.sort(Di); for (let t = 0; t < 8; t++) t < e && n[t][1] ? (o[t][0] = n[t][0], o[t][1] = n[t][1]) : (o[t][0] = Number.MAX_SAFE_INTEGER, o[t][1] = 0);
                o.sort(Pi); const s = h.morphAttributes.position,
                    a = h.morphAttributes.normal; let l = 0; for (let t = 0; t < 8; t++) { const e = o[t],
                        n = e[0],
                        i = e[1];
                    n !== Number.MAX_SAFE_INTEGER && i ? (s && h.getAttribute("morphTarget" + t) !== s[n] && h.setAttribute("morphTarget" + t, s[n]), a && h.getAttribute("morphNormal" + t) !== a[n] && h.setAttribute("morphNormal" + t, a[n]), r[t] = i, l += i) : (s && !0 === h.hasAttribute("morphTarget" + t) && h.deleteAttribute("morphTarget" + t), a && !0 === h.hasAttribute("morphNormal" + t) && h.deleteAttribute("morphNormal" + t), r[t] = 0) } const c = h.morphTargetsRelative ? 1 : 1 - l;
                u.getUniforms().setValue(t, "morphTargetBaseInfluence", c), u.getUniforms().setValue(t, "morphTargetInfluences", r) } } } }

function Ni(t, e, n, i) { let r = new WeakMap;

    function s(t) { const e = t.target;
        e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor) } return { update: function(t) { const a = i.render.frame,
                o = t.geometry,
                l = e.get(t, o); return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l }, dispose: function() { r = new WeakMap } } }
const Fi = new Ot,
    Ui = new Ut,
    ki = new kt,
    Bi = new jn,
    zi = [],
    Hi = [],
    Vi = new Float32Array(16),
    Gi = new Float32Array(9),
    Wi = new Float32Array(4);

function ji(t, e, n) { const i = t[0]; if (i <= 0 || i > 0) return t; const r = e * n; let s = zi[r]; if (void 0 === s && (s = new Float32Array(r), zi[r] = s), 0 !== e) { i.toArray(s, 0); for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(s, r) } return s }

function qi(t, e) { if (t.length !== e.length) return !1; for (let n = 0, i = t.length; n < i; n++)
        if (t[n] !== e[n]) return !1;
    return !0 }

function Xi(t, e) { for (let n = 0, i = e.length; n < i; n++) t[n] = e[n] }

function Yi(t, e) { let n = Hi[e];
    void 0 === n && (n = new Int32Array(e), Hi[e] = n); for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit(); return n }

function Ji(t, e) { const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e) }

function Zi(t, e) { const n = this.cache; if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else { if (qi(n, e)) return;
        t.uniform2fv(this.addr, e), Xi(n, e) } }

function $i(t, e) { const n = this.cache; if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
    else { if (qi(n, e)) return;
        t.uniform3fv(this.addr, e), Xi(n, e) } }

function Ki(t, e) { const n = this.cache; if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else { if (qi(n, e)) return;
        t.uniform4fv(this.addr, e), Xi(n, e) } }

function Qi(t, e) { const n = this.cache,
        i = e.elements; if (void 0 === i) { if (qi(n, e)) return;
        t.uniformMatrix2fv(this.addr, !1, e), Xi(n, e) } else { if (qi(n, i)) return;
        Wi.set(i), t.uniformMatrix2fv(this.addr, !1, Wi), Xi(n, i) } }

function tr(t, e) { const n = this.cache,
        i = e.elements; if (void 0 === i) { if (qi(n, e)) return;
        t.uniformMatrix3fv(this.addr, !1, e), Xi(n, e) } else { if (qi(n, i)) return;
        Gi.set(i), t.uniformMatrix3fv(this.addr, !1, Gi), Xi(n, i) } }

function er(t, e) { const n = this.cache,
        i = e.elements; if (void 0 === i) { if (qi(n, e)) return;
        t.uniformMatrix4fv(this.addr, !1, e), Xi(n, e) } else { if (qi(n, i)) return;
        Vi.set(i), t.uniformMatrix4fv(this.addr, !1, Vi), Xi(n, i) } }

function nr(t, e) { const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e) }

function ir(t, e) { const n = this.cache;
    qi(n, e) || (t.uniform2iv(this.addr, e), Xi(n, e)) }

function rr(t, e) { const n = this.cache;
    qi(n, e) || (t.uniform3iv(this.addr, e), Xi(n, e)) }

function sr(t, e) { const n = this.cache;
    qi(n, e) || (t.uniform4iv(this.addr, e), Xi(n, e)) }

function ar(t, e) { const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e) }

function or(t, e) { const n = this.cache;
    qi(n, e) || (t.uniform2uiv(this.addr, e), Xi(n, e)) }

function lr(t, e) { const n = this.cache;
    qi(n, e) || (t.uniform3uiv(this.addr, e), Xi(n, e)) }

function hr(t, e) { const n = this.cache;
    qi(n, e) || (t.uniform4uiv(this.addr, e), Xi(n, e)) }

function cr(t, e, n) { const i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || Fi, r) }

function ur(t, e, n) { const i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || ki, r) }

function dr(t, e, n) { const i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || Bi, r) }

function pr(t, e, n) { const i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Ui, r) }

function mr(t, e) { t.uniform1fv(this.addr, e) }

function fr(t, e) { const n = ji(e, this.size, 2);
    t.uniform2fv(this.addr, n) }

function gr(t, e) { const n = ji(e, this.size, 3);
    t.uniform3fv(this.addr, n) }

function vr(t, e) { const n = ji(e, this.size, 4);
    t.uniform4fv(this.addr, n) }

function yr(t, e) { const n = ji(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n) }

function xr(t, e) { const n = ji(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n) }

function _r(t, e) { const n = ji(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n) }

function br(t, e) { t.uniform1iv(this.addr, e) }

function wr(t, e) { t.uniform2iv(this.addr, e) }

function Mr(t, e) { t.uniform3iv(this.addr, e) }

function Sr(t, e) { t.uniform4iv(this.addr, e) }

function Tr(t, e) { t.uniform1uiv(this.addr, e) }

function Er(t, e) { t.uniform2uiv(this.addr, e) }

function Ar(t, e) { t.uniform3uiv(this.addr, e) }

function Rr(t, e) { t.uniform4uiv(this.addr, e) }

function Cr(t, e, n) { const i = e.length,
        r = Yi(n, i);
    t.uniform1iv(this.addr, r); for (let t = 0; t !== i; ++t) n.setTexture2D(e[t] || Fi, r[t]) }

function Lr(t, e, n) { const i = e.length,
        r = Yi(n, i);
    t.uniform1iv(this.addr, r); for (let t = 0; t !== i; ++t) n.setTexture3D(e[t] || ki, r[t]) }

function Pr(t, e, n) { const i = e.length,
        r = Yi(n, i);
    t.uniform1iv(this.addr, r); for (let t = 0; t !== i; ++t) n.setTextureCube(e[t] || Bi, r[t]) }

function Dr(t, e, n) { const i = e.length,
        r = Yi(n, i);
    t.uniform1iv(this.addr, r); for (let t = 0; t !== i; ++t) n.setTexture2DArray(e[t] || Ui, r[t]) }

function Ir(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) { switch (t) {
            case 5126:
                return Ji;
            case 35664:
                return Zi;
            case 35665:
                return $i;
            case 35666:
                return Ki;
            case 35674:
                return Qi;
            case 35675:
                return tr;
            case 35676:
                return er;
            case 5124:
            case 35670:
                return nr;
            case 35667:
            case 35671:
                return ir;
            case 35668:
            case 35672:
                return rr;
            case 35669:
            case 35673:
                return sr;
            case 5125:
                return ar;
            case 36294:
                return or;
            case 36295:
                return lr;
            case 36296:
                return hr;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return cr;
            case 35679:
            case 36299:
            case 36307:
                return ur;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return dr;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return pr } }(e.type) }

function Or(t, e, n) { this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) { switch (t) {
            case 5126:
                return mr;
            case 35664:
                return fr;
            case 35665:
                return gr;
            case 35666:
                return vr;
            case 35674:
                return yr;
            case 35675:
                return xr;
            case 35676:
                return _r;
            case 5124:
            case 35670:
                return br;
            case 35667:
            case 35671:
                return wr;
            case 35668:
            case 35672:
                return Mr;
            case 35669:
            case 35673:
                return Sr;
            case 5125:
                return Tr;
            case 36294:
                return Er;
            case 36295:
                return Ar;
            case 36296:
                return Rr;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return Cr;
            case 35679:
            case 36299:
            case 36307:
                return Lr;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Pr;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Dr } }(e.type) }

function Nr(t) { this.id = t, this.seq = [], this.map = {} }
Or.prototype.updateCache = function(t) { const e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Xi(e, t) }, Nr.prototype.setValue = function(t, e, n) { const i = this.seq; for (let r = 0, s = i.length; r !== s; ++r) { const s = i[r];
        s.setValue(t, e[s.id], n) } };
const Fr = /(\w+)(\])?(\[|\.)?/g;

function Ur(t, e) { t.seq.push(e), t.map[e.id] = e }

function kr(t, e, n) { const i = t.name,
        r = i.length; for (Fr.lastIndex = 0;;) { const s = Fr.exec(i),
            a = Fr.lastIndex; let o = s[1]; const l = "]" === s[2],
            h = s[3]; if (l && (o |= 0), void 0 === h || "[" === h && a + 2 === r) { Ur(n, void 0 === h ? new Ir(o, t, e) : new Or(o, t, e)); break } { let t = n.map[o];
            void 0 === t && (t = new Nr(o), Ur(n, t)), n = t } } }

function Br(t, e) { this.seq = [], this.map = {}; const n = t.getProgramParameter(e, 35718); for (let i = 0; i < n; ++i) { const n = t.getActiveUniform(e, i);
        kr(n, t.getUniformLocation(e, n.name), this) } }

function zr(t, e, n) { const i = t.createShader(e); return t.shaderSource(i, n), t.compileShader(i), i }
Br.prototype.setValue = function(t, e, n, i) { const r = this.map[e];
    void 0 !== r && r.setValue(t, n, i) }, Br.prototype.setOptional = function(t, e, n) { const i = e[n];
    void 0 !== i && this.setValue(t, n, i) }, Br.upload = function(t, e, n, i) { for (let r = 0, s = e.length; r !== s; ++r) { const s = e[r],
            a = n[s.id];!1 !== a.needsUpdate && s.setValue(t, a.value, i) } }, Br.seqWithValue = function(t, e) { const n = []; for (let i = 0, r = t.length; i !== r; ++i) { const r = t[i];
        r.id in e && n.push(r) } return n };
let Hr = 0;

function Vr(t, e, n) { const i = t.getShaderParameter(e, 35713),
        r = t.getShaderInfoLog(e).trim(); if (i && "" === r) return ""; const s = parseInt(/ERROR: 0:(\d+)/.exec(r)[1]); return n.toUpperCase() + "\n\n" + r + "\n\n" + function(t, e) { const n = t.split("\n"),
            i = [],
            r = Math.max(e - 6, 0),
            s = Math.min(e + 6, n.length); for (let t = r; t < s; t++) i.push(t + 1 + ": " + n[t]); return i.join("\n") }(t.getShaderSource(e), s) }

function Gr(t, e) { const n = function(t) { switch (t) {
            case 3e3:
                return ["Linear", "( value )"];
            case 3001:
                return ["sRGB", "( value )"];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"] } }(e); return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }" }

function Wr(t, e) { let n; switch (e) {
        case 1:
            n = "Linear"; break;
        case 2:
            n = "Reinhard"; break;
        case 3:
            n = "OptimizedCineon"; break;
        case 4:
            n = "ACESFilmic"; break;
        case 5:
            n = "Custom"; break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear" } return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }" }

function jr(t) { return "" !== t }

function qr(t, e) { return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) }

function Xr(t, e) { return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) }
const Yr = /^[ \t]*#include +<([\w\d./]+)>/gm;

function Jr(t) { return t.replace(Yr, Zr) }

function Zr(t, e) { const n = ii[e]; if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">"); return Jr(n) }
const $r = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    Kr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Qr(t) { return t.replace(Kr, es).replace($r, ts) }

function ts(t, e, n, i) { return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), es(t, e, n, i) }

function es(t, e, n, i) { let r = ""; for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t); return r }

function ns(t) { let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;"; return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e }

function is(t, e, n, i) { const r = t.getContext(),
        s = n.defines; let a = n.vertexShader,
        o = n.fragmentShader; const l = function(t) { let e = "SHADOWMAP_TYPE_BASIC"; return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e }(n),
        h = function(t) { let e = "ENVMAP_TYPE_CUBE"; if (t.envMap) switch (t.envMapMode) {
                case 301:
                case 302:
                    e = "ENVMAP_TYPE_CUBE"; break;
                case 306:
                    e = "ENVMAP_TYPE_CUBE_UV" }
            return e }(n),
        c = function(t) { let e = "ENVMAP_MODE_REFLECTION";
            t.envMap && 302 === t.envMapMode && (e = "ENVMAP_MODE_REFRACTION"); return e }(n),
        u = function(t) { let e = "ENVMAP_BLENDING_NONE"; if (t.envMap) switch (t.combine) {
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY"; break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX"; break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD" }
            return e }(n),
        d = function(t) { const e = t.envMapCubeUVHeight; if (null === e) return null; const n = Math.log2(e / 32 + 1) + 3,
                i = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)), texelHeight: i, maxMip: n } }(n),
        p = n.isWebGL2 ? "" : function(t) { return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(jr).join("\n") }(n),
        m = function(t) { const e = []; for (const n in t) { const i = t[n];!1 !== i && e.push("#define " + n + " " + i) } return e.join("\n") }(s),
        f = r.createProgram(); let g, v, y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (g = [m].filter(jr).join("\n"), g.length > 0 && (g += "\n"), v = [p, m].filter(jr).join("\n"), v.length > 0 && (v += "\n")) : (g = [ns(n), "#define SHADER_NAME " + n.shaderName, m, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(jr).join("\n"), v = [p, ns(n), "#define SHADER_NAME " + n.shaderName, m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? ii.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Wr("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", ii.encodings_pars_fragment, Gr("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(jr).join("\n")), a = Jr(a), a = qr(a, n), a = Xr(a, n), o = Jr(o), o = qr(o, n), o = Xr(o, n), a = Qr(a), o = Qr(o), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (y = "#version 300 es\n", g = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#define varying in", "300 es" === n.glslVersion ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", "300 es" === n.glslVersion ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v); const x = y + v + o,
        _ = zr(r, 35633, y + g + a),
        b = zr(r, 35632, x); if (r.attachShader(f, _), r.attachShader(f, b), void 0 !== n.index0AttributeName ? r.bindAttribLocation(f, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(f, 0, "position"), r.linkProgram(f), t.debug.checkShaderErrors) { const t = r.getProgramInfoLog(f).trim(),
            e = r.getShaderInfoLog(_).trim(),
            n = r.getShaderInfoLog(b).trim(); let i = !0,
            s = !0; if (!1 === r.getProgramParameter(f, 35714)) { i = !1; const e = Vr(r, _, "vertex"),
                n = Vr(r, b, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(f, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n) } else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== n || (s = !1);
        s && (this.diagnostics = { runnable: i, programLog: t, vertexShader: { log: e, prefix: g }, fragmentShader: { log: n, prefix: v } }) } let w, M; return r.deleteShader(_), r.deleteShader(b), this.getUniforms = function() { return void 0 === w && (w = new Br(r, f)), w }, this.getAttributes = function() { return void 0 === M && (M = function(t, e) { const n = {},
                i = t.getProgramParameter(e, 35721); for (let r = 0; r < i; r++) { const i = t.getActiveAttrib(e, r),
                    s = i.name; let a = 1;
                35674 === i.type && (a = 2), 35675 === i.type && (a = 3), 35676 === i.type && (a = 4), n[s] = { type: i.type, location: t.getAttribLocation(e, s), locationSize: a } } return n }(r, f)), M }, this.destroy = function() { i.releaseStatesOfProgram(this), r.deleteProgram(f), this.program = void 0 }, this.name = n.shaderName, this.id = Hr++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = _, this.fragmentShader = b, this }
let rs = 0;
class ss { constructor() { this.shaderCache = new Map, this.materialCache = new Map }
    update(t) { const e = t.vertexShader,
            n = t.fragmentShader,
            i = this._getShaderStage(e),
            r = this._getShaderStage(n),
            s = this._getShaderCacheForMaterial(t); return !1 === s.has(i) && (s.add(i), i.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this }
    remove(t) { const e = this.materialCache.get(t); for (const t of e) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code); return this.materialCache.delete(t), this }
    getVertexShaderID(t) { return this._getShaderStage(t.vertexShader).id }
    getFragmentShaderID(t) { return this._getShaderStage(t.fragmentShader).id }
    dispose() { this.shaderCache.clear(), this.materialCache.clear() }
    _getShaderCacheForMaterial(t) { const e = this.materialCache; return !1 === e.has(t) && e.set(t, new Set), e.get(t) }
    _getShaderStage(t) { const e = this.shaderCache; if (!1 === e.has(t)) { const n = new as(t);
            e.set(t, n) } return e.get(t) } }
class as { constructor(t) { this.id = rs++, this.code = t, this.usedTimes = 0 } }

function os(t, e, n, i, r, s, a) { const o = new Re,
        l = new ss,
        h = [],
        c = r.isWebGL2,
        u = r.logarithmicDepthBuffer,
        d = r.floatVertexTextures,
        p = r.maxVertexUniforms,
        m = r.vertexTextures; let f = r.precision; const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; return { getParameters: function(s, o, h, v, y) { const x = v.fog,
                _ = y.geometry,
                b = s.isMeshStandardMaterial ? v.environment : null,
                w = (s.isMeshStandardMaterial ? n : e).get(s.envMap || b),
                M = w && 306 === w.mapping ? w.image.height : null,
                S = g[s.type],
                T = y.isSkinnedMesh ? function(t) { const e = t.skeleton.bones; if (d) return 1024; { const t = p,
                            n = Math.floor((t - 20) / 4),
                            i = Math.min(n, e.length); return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i } }(y) : 0;
            null !== s.precision && (f = r.getMaxPrecision(s.precision), f !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", f, "instead.")); const E = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color,
                A = void 0 !== E ? E.length : 0; let R, C, L, P, D = 0; if (void 0 !== _.morphAttributes.position && (D = 1), void 0 !== _.morphAttributes.normal && (D = 2), void 0 !== _.morphAttributes.color && (D = 3), S) { const t = si[S];
                R = t.vertexShader, C = t.fragmentShader } else R = s.vertexShader, C = s.fragmentShader, l.update(s), L = l.getVertexShaderID(s), P = l.getFragmentShaderID(s); const I = t.getRenderTarget(),
                O = s.alphaTest > 0,
                N = s.clearcoat > 0; return { isWebGL2: c, shaderID: S, shaderName: s.type, vertexShader: R, fragmentShader: C, defines: s.defines, customVertexShaderID: L, customFragmentShaderID: P, isRawShaderMaterial: !0 === s.isRawShaderMaterial, glslVersion: s.glslVersion, precision: f, instancing: !0 === y.isInstancedMesh, instancingColor: !0 === y.isInstancedMesh && null !== y.instanceColor, supportsVertexTextures: m, outputEncoding: null === I ? t.outputEncoding : !0 === I.isXRRenderTarget ? I.texture.encoding : 3e3, map: !!s.map, matcap: !!s.matcap, envMap: !!w, envMapMode: w && w.mapping, envMapCubeUVHeight: M, lightMap: !!s.lightMap, aoMap: !!s.aoMap, emissiveMap: !!s.emissiveMap, bumpMap: !!s.bumpMap, normalMap: !!s.normalMap, objectSpaceNormalMap: 1 === s.normalMapType, tangentSpaceNormalMap: 0 === s.normalMapType, decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && 3001 === s.map.encoding, clearcoat: N, clearcoatMap: N && !!s.clearcoatMap, clearcoatRoughnessMap: N && !!s.clearcoatRoughnessMap, clearcoatNormalMap: N && !!s.clearcoatNormalMap, displacementMap: !!s.displacementMap, roughnessMap: !!s.roughnessMap, metalnessMap: !!s.metalnessMap, specularMap: !!s.specularMap, specularIntensityMap: !!s.specularIntensityMap, specularColorMap: !!s.specularColorMap, opaque: !1 === s.transparent && 1 === s.blending, alphaMap: !!s.alphaMap, alphaTest: O, gradientMap: !!s.gradientMap, sheen: s.sheen > 0, sheenColorMap: !!s.sheenColorMap, sheenRoughnessMap: !!s.sheenRoughnessMap, transmission: s.transmission > 0, transmissionMap: !!s.transmissionMap, thicknessMap: !!s.thicknessMap, combine: s.combine, vertexTangents: !!s.normalMap && !!_.attributes.tangent, vertexColors: s.vertexColors, vertexAlphas: !0 === s.vertexColors && !!_.attributes.color && 4 === _.attributes.color.itemSize, vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap), uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap), fog: !!x, useFog: s.fog, fogExp2: x && x.isFogExp2, flatShading: !!s.flatShading, sizeAttenuation: s.sizeAttenuation, logarithmicDepthBuffer: u, skinning: !0 === y.isSkinnedMesh && T > 0, maxBones: T, useVertexTexture: d, morphTargets: void 0 !== _.morphAttributes.position, morphNormals: void 0 !== _.morphAttributes.normal, morphColors: void 0 !== _.morphAttributes.color, morphTargetsCount: A, morphTextureStride: D, numDirLights: o.directional.length, numPointLights: o.point.length, numSpotLights: o.spot.length, numRectAreaLights: o.rectArea.length, numHemiLights: o.hemi.length, numDirLightShadows: o.directionalShadowMap.length, numPointLightShadows: o.pointShadowMap.length, numSpotLightShadows: o.spotShadowMap.length, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: s.dithering, shadowMapEnabled: t.shadowMap.enabled && h.length > 0, shadowMapType: t.shadowMap.type, toneMapping: s.toneMapped ? t.toneMapping : 0, physicallyCorrectLights: t.physicallyCorrectLights, premultipliedAlpha: s.premultipliedAlpha, doubleSided: 2 === s.side, flipSided: 1 === s.side, depthPacking: void 0 !== s.depthPacking && s.depthPacking, index0AttributeName: s.index0AttributeName, extensionDerivatives: s.extensions && s.extensions.derivatives, extensionFragDepth: s.extensions && s.extensions.fragDepth, extensionDrawBuffers: s.extensions && s.extensions.drawBuffers, extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD, rendererExtensionFragDepth: c || i.has("EXT_frag_depth"), rendererExtensionDrawBuffers: c || i.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: c || i.has("EXT_shader_texture_lod"), customProgramCacheKey: s.customProgramCacheKey() } }, getProgramCacheKey: function(e) { const n = []; if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), void 0 !== e.defines)
                for (const t in e.defines) n.push(t), n.push(e.defines[t]); return !1 === e.isRawShaderMaterial && (! function(t, e) { t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.maxBones), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection) }(n, e), function(t, e) { o.disableAll(), e.isWebGL2 && o.enable(0);
                e.supportsVertexTextures && o.enable(1);
                e.instancing && o.enable(2);
                e.instancingColor && o.enable(3);
                e.map && o.enable(4);
                e.matcap && o.enable(5);
                e.envMap && o.enable(6);
                e.lightMap && o.enable(7);
                e.aoMap && o.enable(8);
                e.emissiveMap && o.enable(9);
                e.bumpMap && o.enable(10);
                e.normalMap && o.enable(11);
                e.objectSpaceNormalMap && o.enable(12);
                e.tangentSpaceNormalMap && o.enable(13);
                e.clearcoat && o.enable(14);
                e.clearcoatMap && o.enable(15);
                e.clearcoatRoughnessMap && o.enable(16);
                e.clearcoatNormalMap && o.enable(17);
                e.displacementMap && o.enable(18);
                e.specularMap && o.enable(19);
                e.roughnessMap && o.enable(20);
                e.metalnessMap && o.enable(21);
                e.gradientMap && o.enable(22);
                e.alphaMap && o.enable(23);
                e.alphaTest && o.enable(24);
                e.vertexColors && o.enable(25);
                e.vertexAlphas && o.enable(26);
                e.vertexUvs && o.enable(27);
                e.vertexTangents && o.enable(28);
                e.uvsVertexOnly && o.enable(29);
                e.fog && o.enable(30);
                t.push(o.mask), o.disableAll(), e.useFog && o.enable(0);
                e.flatShading && o.enable(1);
                e.logarithmicDepthBuffer && o.enable(2);
                e.skinning && o.enable(3);
                e.useVertexTexture && o.enable(4);
                e.morphTargets && o.enable(5);
                e.morphNormals && o.enable(6);
                e.morphColors && o.enable(7);
                e.premultipliedAlpha && o.enable(8);
                e.shadowMapEnabled && o.enable(9);
                e.physicallyCorrectLights && o.enable(10);
                e.doubleSided && o.enable(11);
                e.flipSided && o.enable(12);
                e.depthPacking && o.enable(13);
                e.dithering && o.enable(14);
                e.specularIntensityMap && o.enable(15);
                e.specularColorMap && o.enable(16);
                e.transmission && o.enable(17);
                e.transmissionMap && o.enable(18);
                e.thicknessMap && o.enable(19);
                e.sheen && o.enable(20);
                e.sheenColorMap && o.enable(21);
                e.sheenRoughnessMap && o.enable(22);
                e.decodeVideoTexture && o.enable(23);
                e.opaque && o.enable(24);
                t.push(o.mask) }(n, e), n.push(t.outputEncoding)), n.push(e.customProgramCacheKey), n.join() }, getUniforms: function(t) { const e = g[t.type]; let n; if (e) { const t = si[e];
                n = zn.clone(t.uniforms) } else n = t.uniforms; return n }, acquireProgram: function(e, n) { let i; for (let t = 0, e = h.length; t < e; t++) { const e = h[t]; if (e.cacheKey === n) { i = e, ++i.usedTimes; break } } return void 0 === i && (i = new is(t, n, e, s), h.push(i)), i }, releaseProgram: function(t) { if (0 == --t.usedTimes) { const e = h.indexOf(t);
                h[e] = h[h.length - 1], h.pop(), t.destroy() } }, releaseShaderCache: function(t) { l.remove(t) }, programs: h, dispose: function() { l.dispose() } } }

function ls() { let t = new WeakMap; return { get: function(e) { let n = t.get(e); return void 0 === n && (n = {}, t.set(e, n)), n }, remove: function(e) { t.delete(e) }, update: function(e, n, i) { t.get(e)[n] = i }, dispose: function() { t = new WeakMap } } }

function hs(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id }

function cs(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id }

function us() { const t = []; let e = 0; const n = [],
        i = [],
        r = [];

    function s(n, i, r, s, a, o) { let l = t[e]; return void 0 === l ? (l = { id: n.id, object: n, geometry: i, material: r, groupOrder: s, renderOrder: n.renderOrder, z: a, group: o }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = s, l.renderOrder = n.renderOrder, l.z = a, l.group = o), e++, l } return { opaque: n, transmissive: i, transparent: r, init: function() { e = 0, n.length = 0, i.length = 0, r.length = 0 }, push: function(t, e, a, o, l, h) { const c = s(t, e, a, o, l, h);
            a.transmission > 0 ? i.push(c) : !0 === a.transparent ? r.push(c) : n.push(c) }, unshift: function(t, e, a, o, l, h) { const c = s(t, e, a, o, l, h);
            a.transmission > 0 ? i.unshift(c) : !0 === a.transparent ? r.unshift(c) : n.unshift(c) }, finish: function() { for (let n = e, i = t.length; n < i; n++) { const e = t[n]; if (null === e.id) break;
                e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null } }, sort: function(t, e) { n.length > 1 && n.sort(t || hs), i.length > 1 && i.sort(e || cs), r.length > 1 && r.sort(e || cs) } } }

function ds() { let t = new WeakMap; return { get: function(e, n) { let i; return !1 === t.has(e) ? (i = new us, t.set(e, [i])) : n >= t.get(e).length ? (i = new us, t.get(e).push(i)) : i = t.get(e)[n], i }, dispose: function() { t = new WeakMap } } }

function ps() { const t = {}; return { get: function(e) { if (void 0 !== t[e.id]) return t[e.id]; let n; switch (e.type) {
                case "DirectionalLight":
                    n = { direction: new zt, color: new Rt }; break;
                case "SpotLight":
                    n = { position: new zt, direction: new zt, color: new Rt, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break;
                case "PointLight":
                    n = { position: new zt, color: new Rt, distance: 0, decay: 0 }; break;
                case "HemisphereLight":
                    n = { direction: new zt, skyColor: new Rt, groundColor: new Rt }; break;
                case "RectAreaLight":
                    n = { color: new Rt, position: new zt, halfWidth: new zt, halfHeight: new zt } } return t[e.id] = n, n } } }
let ms = 0;

function fs(t, e) { return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0) }

function gs(t, e) { const n = new ps,
        i = function() { const t = {}; return { get: function(e) { if (void 0 !== t[e.id]) return t[e.id]; let n; switch (e.type) {
                        case "DirectionalLight":
                        case "SpotLight":
                            n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new mt }; break;
                        case "PointLight":
                            n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new mt, shadowCameraNear: 1, shadowCameraFar: 1e3 } } return t[e.id] = n, n } } }(),
        r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadow: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [] }; for (let t = 0; t < 9; t++) r.probe.push(new zt); const s = new zt,
        a = new ve,
        o = new ve; return { setup: function(s, a) { let o = 0,
                l = 0,
                h = 0; for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0); let c = 0,
                u = 0,
                d = 0,
                p = 0,
                m = 0,
                f = 0,
                g = 0,
                v = 0;
            s.sort(fs); const y = !0 !== a ? Math.PI : 1; for (let t = 0, e = s.length; t < e; t++) { const e = s[t],
                    a = e.color,
                    x = e.intensity,
                    _ = e.distance,
                    b = e.shadow && e.shadow.map ? e.shadow.map.texture : null; if (e.isAmbientLight) o += a.r * x * y, l += a.g * x * y, h += a.b * x * y;
                else if (e.isLightProbe)
                    for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], x);
                else if (e.isDirectionalLight) { const t = n.get(e); if (t.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) { const t = e.shadow,
                            n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[c] = n, r.directionalShadowMap[c] = b, r.directionalShadowMatrix[c] = e.shadow.matrix, f++ }
                    r.directional[c] = t, c++ } else if (e.isSpotLight) { const t = n.get(e); if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(a).multiplyScalar(x * y), t.distance = _, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) { const t = e.shadow,
                            n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.spotShadow[d] = n, r.spotShadowMap[d] = b, r.spotShadowMatrix[d] = e.shadow.matrix, v++ }
                    r.spot[d] = t, d++ } else if (e.isRectAreaLight) { const t = n.get(e);
                    t.color.copy(a).multiplyScalar(x), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++ } else if (e.isPointLight) { const t = n.get(e); if (t.color.copy(e.color).multiplyScalar(e.intensity * y), t.distance = e.distance, t.decay = e.decay, e.castShadow) { const t = e.shadow,
                            n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = b, r.pointShadowMatrix[u] = e.shadow.matrix, g++ }
                    r.point[u] = t, u++ } else if (e.isHemisphereLight) { const t = n.get(e);
                    t.skyColor.copy(e.color).multiplyScalar(x * y), t.groundColor.copy(e.groundColor).multiplyScalar(x * y), r.hemi[m] = t, m++ } }
            p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ri.LTC_FLOAT_1, r.rectAreaLTC2 = ri.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ri.LTC_HALF_1, r.rectAreaLTC2 = ri.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = h; const x = r.hash;
            x.directionalLength === c && x.pointLength === u && x.spotLength === d && x.rectAreaLength === p && x.hemiLength === m && x.numDirectionalShadows === f && x.numPointShadows === g && x.numSpotShadows === v || (r.directional.length = c, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotShadowMatrix.length = v, x.directionalLength = c, x.pointLength = u, x.spotLength = d, x.rectAreaLength = p, x.hemiLength = m, x.numDirectionalShadows = f, x.numPointShadows = g, x.numSpotShadows = v, r.version = ms++) }, setupView: function(t, e) { let n = 0,
                i = 0,
                l = 0,
                h = 0,
                c = 0; const u = e.matrixWorldInverse; for (let e = 0, d = t.length; e < d; e++) { const d = t[e]; if (d.isDirectionalLight) { const t = r.directional[n];
                    t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), n++ } else if (d.isSpotLight) { const t = r.spot[l];
                    t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), l++ } else if (d.isRectAreaLight) { const t = r.rectArea[h];
                    t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), h++ } else if (d.isPointLight) { const t = r.point[i];
                    t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++ } else if (d.isHemisphereLight) { const t = r.hemi[c];
                    t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), t.direction.normalize(), c++ } } }, state: r } }

function vs(t, e) { const n = new gs(t, e),
        i = [],
        r = []; return { init: function() { i.length = 0, r.length = 0 }, state: { lightsArray: i, shadowsArray: r, lights: n }, setupLights: function(t) { n.setup(i, t) }, setupLightsView: function(t) { n.setupView(i, t) }, pushLight: function(t) { i.push(t) }, pushShadow: function(t) { r.push(t) } } }

function ys(t, e) { let n = new WeakMap; return { get: function(i, r = 0) { let s; return !1 === n.has(i) ? (s = new vs(t, e), n.set(i, [s])) : r >= n.get(i).length ? (s = new vs(t, e), n.get(i).push(s)) : s = n.get(i)[r], s }, dispose: function() { n = new WeakMap } } }
class xs extends en { constructor(t) { super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t) }
    copy(t) { return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this } }
xs.prototype.isMeshDepthMaterial = !0;
class _s extends en { constructor(t) { super(), this.type = "MeshDistanceMaterial", this.referencePosition = new zt, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t) }
    copy(t) { return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this } }
_s.prototype.isMeshDistanceMaterial = !0;

function bs(t, e, n) { let i = new Qn; const r = new mt,
        s = new mt,
        a = new Nt,
        o = new xs({ depthPacking: 3201 }),
        l = new _s,
        h = {},
        c = n.maxTextureSize,
        u = { 0: 1, 1: 0, 2: 2 },
        d = new Hn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new mt }, radius: { value: 4 } }, vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }),
        p = d.clone();
    p.defines.HORIZONTAL_PASS = 1; const m = new vn;
    m.setAttribute("position", new an(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const f = new Nn(m, d),
        g = this;

    function v(n, i) { const r = e.update(f);
        d.defines.VSM_SAMPLES !== n.blurSamples && (d.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), d.uniforms.shadow_pass.value = n.map.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, d, f, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, p, f, null) }

    function y(e, n, i, r, s, a) { let c = null; const d = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial; if (c = void 0 !== d ? d : !0 === i.isPointLight ? l : o, t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0) { const t = c.uuid,
                e = n.uuid; let i = h[t];
            void 0 === i && (i = {}, h[t] = i); let r = i[e];
            void 0 === r && (r = c.clone(), i[e] = r), c = r } return c.visible = n.visible, c.wireframe = n.wireframe, c.side = 3 === a ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u[n.side], c.alphaMap = n.alphaMap, c.alphaTest = n.alphaTest, c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.displacementMap = n.displacementMap, c.displacementScale = n.displacementScale, c.displacementBias = n.displacementBias, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, !0 === i.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(i.matrixWorld), c.nearDistance = r, c.farDistance = s), c }

    function x(n, r, s, a, o) { if (!1 === n.visible) return; if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) { n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld); const i = e.update(n),
                r = n.material; if (Array.isArray(r)) { const e = i.groups; for (let l = 0, h = e.length; l < h; l++) { const h = e[l],
                        c = r[h.materialIndex]; if (c && c.visible) { const e = y(n, c, a, s.near, s.far, o);
                        t.renderBufferDirect(s, null, i, e, n, h) } } } else if (r.visible) { const e = y(n, r, a, s.near, s.far, o);
                t.renderBufferDirect(s, null, i, e, n, null) } } const l = n.children; for (let t = 0, e = l.length; t < e; t++) x(l[t], r, s, a, o) }
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, n, o) { if (!1 === g.enabled) return; if (!1 === g.autoUpdate && !1 === g.needsUpdate) return; if (0 === e.length) return; const l = t.getRenderTarget(),
            h = t.getActiveCubeFace(),
            u = t.getActiveMipmapLevel(),
            d = t.state;
        d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1); for (let l = 0, h = e.length; l < h; l++) { const h = e[l],
                u = h.shadow; if (void 0 === u) { console.warn("THREE.WebGLShadowMap:", h, "has no shadow."); continue } if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
            r.copy(u.mapSize); const p = u.getFrameExtents(); if (r.multiply(p), s.copy(u.mapSize), (r.x > c || r.y > c) && (r.x > c && (s.x = Math.floor(c / p.x), r.x = s.x * p.x, u.mapSize.x = s.x), r.y > c && (s.y = Math.floor(c / p.y), r.y = s.y * p.y, u.mapSize.y = s.y)), null !== u.map || u.isPointLightShadow || 3 !== this.type || (u.map = new Ft(r.x, r.y), u.map.texture.name = h.name + ".shadowMap", u.mapPass = new Ft(r.x, r.y), u.camera.updateProjectionMatrix()), null === u.map) { const t = { minFilter: 1003, magFilter: 1003, format: 1023 };
                u.map = new Ft(r.x, r.y, t), u.map.texture.name = h.name + ".shadowMap", u.camera.updateProjectionMatrix() }
            t.setRenderTarget(u.map), t.clear(); const m = u.getViewportCount(); for (let t = 0; t < m; t++) { const e = u.getViewport(t);
                a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w), d.viewport(a), u.updateMatrices(h, t), i = u.getFrustum(), x(n, o, u.camera, h, this.type) }
            u.isPointLightShadow || 3 !== this.type || v(u, o), u.needsUpdate = !1 }
        g.needsUpdate = !1, t.setRenderTarget(l, h, u) } }

function ws(t, e, n) { const i = n.isWebGL2; const r = new function() { let e = !1; const n = new Nt; let i = null; const r = new Nt(0, 0, 0, 0); return { setMask: function(n) { i === n || e || (t.colorMask(n, n, n, n), i = n) }, setLocked: function(t) { e = t }, setClear: function(e, i, s, a, o) {!0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n)) }, reset: function() { e = !1, i = null, r.set(-1, 0, 0, 0) } } },
        s = new function() { let e = !1,
                n = null,
                i = null,
                r = null; return { setTest: function(t) { t ? k(2929) : B(2929) }, setMask: function(i) { n === i || e || (t.depthMask(i), n = i) }, setFunc: function(e) { if (i !== e) { if (e) switch (e) {
                            case 0:
                                t.depthFunc(512); break;
                            case 1:
                                t.depthFunc(519); break;
                            case 2:
                                t.depthFunc(513); break;
                            case 3:
                            default:
                                t.depthFunc(515); break;
                            case 4:
                                t.depthFunc(514); break;
                            case 5:
                                t.depthFunc(518); break;
                            case 6:
                                t.depthFunc(516); break;
                            case 7:
                                t.depthFunc(517) } else t.depthFunc(515);
                        i = e } }, setLocked: function(t) { e = t }, setClear: function(e) { r !== e && (t.clearDepth(e), r = e) }, reset: function() { e = !1, n = null, i = null, r = null } } },
        a = new function() { let e = !1,
                n = null,
                i = null,
                r = null,
                s = null,
                a = null,
                o = null,
                l = null,
                h = null; return { setTest: function(t) { e || (t ? k(2960) : B(2960)) }, setMask: function(i) { n === i || e || (t.stencilMask(i), n = i) }, setFunc: function(e, n, a) { i === e && r === n && s === a || (t.stencilFunc(e, n, a), i = e, r = n, s = a) }, setOp: function(e, n, i) { a === e && o === n && l === i || (t.stencilOp(e, n, i), a = e, o = n, l = i) }, setLocked: function(t) { e = t }, setClear: function(e) { h !== e && (t.clearStencil(e), h = e) }, reset: function() { e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, h = null } } }; let o = {},
        l = {},
        h = new WeakMap,
        c = [],
        u = null,
        d = !1,
        p = null,
        m = null,
        f = null,
        g = null,
        v = null,
        y = null,
        x = null,
        _ = !1,
        b = null,
        w = null,
        M = null,
        S = null,
        T = null; const E = t.getParameter(35661); let A = !1,
        R = 0; const C = t.getParameter(7938); - 1 !== C.indexOf("WebGL") ? (R = parseFloat(/^WebGL (\d)/.exec(C)[1]), A = R >= 1) : -1 !== C.indexOf("OpenGL ES") && (R = parseFloat(/^OpenGL ES (\d)/.exec(C)[1]), A = R >= 2); let L = null,
        P = {}; const D = t.getParameter(3088),
        I = t.getParameter(2978),
        O = (new Nt).fromArray(D),
        N = (new Nt).fromArray(I);

    function F(e, n, i) { const r = new Uint8Array(4),
            s = t.createTexture();
        t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728); for (let e = 0; e < i; e++) t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r); return s } const U = {};

    function k(e) {!0 !== o[e] && (t.enable(e), o[e] = !0) }

    function B(e) {!1 !== o[e] && (t.disable(e), o[e] = !1) }
    U[3553] = F(3553, 3553, 1), U[34067] = F(34067, 34069, 6), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), k(2929), s.setFunc(3), G(!1), W(1), k(2884), V(0); const z = { 100: 32774, 101: 32778, 102: 32779 }; if (i) z[103] = 32775, z[104] = 32776;
    else { const t = e.get("EXT_blend_minmax");
        null !== t && (z[103] = t.MIN_EXT, z[104] = t.MAX_EXT) } const H = { 200: 0, 201: 1, 202: 768, 204: 770, 210: 776, 208: 774, 206: 772, 203: 769, 205: 771, 209: 775, 207: 773 };

    function V(e, n, i, r, s, a, o, l) { if (0 !== e) { if (!1 === d && (k(3042), d = !0), 5 === e) s = s || n, a = a || i, o = o || r, n === m && s === v || (t.blendEquationSeparate(z[n], z[s]), m = n, v = s), i === f && r === g && a === y && o === x || (t.blendFuncSeparate(H[i], H[r], H[a], H[o]), f = i, g = r, y = a, x = o), p = e, _ = null;
            else if (e !== p || l !== _) { if (100 === m && 100 === v || (t.blendEquation(32774), m = 100, v = 100), l) switch (e) {
                    case 1:
                        t.blendFuncSeparate(1, 771, 1, 771); break;
                    case 2:
                        t.blendFunc(1, 1); break;
                    case 3:
                        t.blendFuncSeparate(0, 769, 0, 1); break;
                    case 4:
                        t.blendFuncSeparate(0, 768, 0, 770); break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", e) } else switch (e) {
                    case 1:
                        t.blendFuncSeparate(770, 771, 1, 771); break;
                    case 2:
                        t.blendFunc(770, 1); break;
                    case 3:
                        t.blendFuncSeparate(0, 769, 0, 1); break;
                    case 4:
                        t.blendFunc(0, 768); break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", e) }
                f = null, g = null, y = null, x = null, p = e, _ = l } } else !0 === d && (B(3042), d = !1) }

    function G(e) { b !== e && (e ? t.frontFace(2304) : t.frontFace(2305), b = e) }

    function W(e) { 0 !== e ? (k(2884), e !== w && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : B(2884), w = e }

    function j(e, n, i) { e ? (k(32823), S === n && T === i || (t.polygonOffset(n, i), S = n, T = i)) : B(32823) }

    function q(e) { void 0 === e && (e = 33984 + E - 1), L !== e && (t.activeTexture(e), L = e) } return { buffers: { color: r, depth: s, stencil: a }, enable: k, disable: B, bindFramebuffer: function(e, n) { return l[e] !== n && (t.bindFramebuffer(e, n), l[e] = n, i && (36009 === e && (l[36160] = n), 36160 === e && (l[36009] = n)), !0) }, drawBuffers: function(i, r) { let s = c,
                a = !1; if (i)
                if (s = h.get(r), void 0 === s && (s = [], h.set(r, s)), i.isWebGLMultipleRenderTargets) { const t = i.texture; if (s.length !== t.length || 36064 !== s[0]) { for (let e = 0, n = t.length; e < n; e++) s[e] = 36064 + e;
                        s.length = t.length, a = !0 } } else 36064 !== s[0] && (s[0] = 36064, a = !0);
            else 1029 !== s[0] && (s[0] = 1029, a = !0);
            a && (n.isWebGL2 ? t.drawBuffers(s) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s)) }, useProgram: function(e) { return u !== e && (t.useProgram(e), u = e, !0) }, setBlending: V, setMaterial: function(t, e) { 2 === t.side ? B(2884) : k(2884); let n = 1 === t.side;
            e && (n = !n), G(n), 1 === t.blending && !1 === t.transparent ? V(0) : V(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), r.setMask(t.colorWrite); const i = t.stencilWrite;
            a.setTest(i), i && (a.setMask(t.stencilWriteMask), a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), j(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? k(32926) : B(32926) }, setFlipSided: G, setCullFace: W, setLineWidth: function(e) { e !== M && (A && t.lineWidth(e), M = e) }, setPolygonOffset: j, setScissorTest: function(t) { t ? k(3089) : B(3089) }, activeTexture: q, bindTexture: function(e, n) { null === L && q(); let i = P[L];
            void 0 === i && (i = { type: void 0, texture: void 0 }, P[L] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || U[e]), i.type = e, i.texture = n) }, unbindTexture: function() { const e = P[L];
            void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0) }, compressedTexImage2D: function() { try { t.compressedTexImage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texImage2D: function() { try { t.texImage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texImage3D: function() { try { t.texImage3D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texStorage2D: function() { try { t.texStorage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texStorage3D: function() { try { t.texStorage3D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texSubImage2D: function() { try { t.texSubImage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, texSubImage3D: function() { try { t.texSubImage3D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, compressedTexSubImage2D: function() { try { t.compressedTexSubImage2D.apply(t, arguments) } catch (t) { console.error("THREE.WebGLState:", t) } }, scissor: function(e) {!1 === O.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), O.copy(e)) }, viewport: function(e) {!1 === N.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), N.copy(e)) }, reset: function() { t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === i && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), o = {}, L = null, P = {}, l = {}, h = new WeakMap, c = [], u = null, d = !1, p = null, m = null, f = null, g = null, v = null, y = null, x = null, _ = !1, b = null, w = null, M = null, S = null, T = null, O.set(0, 0, t.canvas.width, t.canvas.height), N.set(0, 0, t.canvas.width, t.canvas.height), r.reset(), s.reset(), a.reset() } } }

function Ms(t, e, n, i, r, s, a) { const o = r.isWebGL2,
        l = r.maxTextures,
        h = r.maxCubemapSize,
        c = r.maxTextureSize,
        u = r.maxSamples,
        d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
        p = /OculusBrowser/g.test(navigator.userAgent),
        m = new WeakMap; let f; const g = new WeakMap; let v = !1; try { v = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d") } catch (t) {}

    function y(t, e) { return v ? new OffscreenCanvas(t, e) : vt("canvas") }

    function x(t, e, n, i) { let r = 1; if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) { if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) { const i = e ? dt : Math.floor,
                    s = i(r * t.width),
                    a = i(r * t.height);
                void 0 === f && (f = y(s, a)); const o = n ? y(s, a) : f;
                o.width = s, o.height = a; return o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o } return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t } return t }

    function _(t) { return ct(t.width) && ct(t.height) }

    function b(t, e) { return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter }

    function w(e) { t.generateMipmap(e) }

    function M(n, i, r, s, a = !1) { if (!1 === o) return i; if (null !== n) { if (void 0 !== t[n]) return t[n];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'") } let l = i; return 6403 === i && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === i && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === i && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = 3001 === s && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), l }

    function S(t, e, n) { return !0 === b(t, n) || t.isFramebufferTexture && 1003 !== t.minFilter && 1006 !== t.minFilter ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1 }

    function T(t) { return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729 }

    function E(t) { const e = t.target;
        e.removeEventListener("dispose", E),
            function(t) { const e = i.get(t); if (void 0 === e.__webglInit) return; const n = t.source,
                    r = g.get(n); if (r) { const i = r[e.__cacheKey];
                    i.usedTimes--, 0 === i.usedTimes && R(t), 0 === Object.keys(r).length && g.delete(n) }
                i.remove(t) }(e), e.isVideoTexture && m.delete(e) }

    function A(e) { const n = e.target;
        n.removeEventListener("dispose", A),
            function(e) { const n = e.texture,
                    r = i.get(e),
                    s = i.get(n);
                void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--);
                e.depthTexture && e.depthTexture.dispose(); if (e.isWebGLCubeRenderTarget)
                    for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
                else t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer); if (e.isWebGLMultipleRenderTargets)
                    for (let e = 0, r = n.length; e < r; e++) { const r = i.get(n[e]);
                        r.__webglTexture && (t.deleteTexture(r.__webglTexture), a.memory.textures--), i.remove(n[e]) }
                i.remove(n), i.remove(e) }(n) }

    function R(e) { const n = i.get(e);
        t.deleteTexture(n.__webglTexture); const r = e.source;
        delete g.get(r)[n.__cacheKey], a.memory.textures-- } let C = 0;

    function L(t, e) { const r = i.get(t); if (t.isVideoTexture && function(t) { const e = a.render.frame;
                m.get(t) !== e && (m.set(t, e), t.update()) }(t), !1 === t.isRenderTargetTexture && t.version > 0 && r.__version !== t.version) { const n = t.image; if (null === n) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else { if (!1 !== n.complete) return void N(r, t, e);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete") } }
        n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture) } const P = { 1e3: 10497, 1001: 33071, 1002: 33648 },
        D = { 1003: 9728, 1004: 9984, 1005: 9986, 1006: 9729, 1007: 9985, 1008: 9987 };

    function I(n, s, a) { if (a ? (t.texParameteri(n, 10242, P[s.wrapS]), t.texParameteri(n, 10243, P[s.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, P[s.wrapR]), t.texParameteri(n, 10240, D[s.magFilter]), t.texParameteri(n, 10241, D[s.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), 1001 === s.wrapS && 1001 === s.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, T(s.magFilter)), t.texParameteri(n, 10241, T(s.minFilter)), 1003 !== s.minFilter && 1006 !== s.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) { const a = e.get("EXT_texture_filter_anisotropic"); if (1015 === s.type && !1 === e.has("OES_texture_float_linear")) return; if (!1 === o && 1016 === s.type && !1 === e.has("OES_texture_half_float_linear")) return;
            (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy) } }

    function O(e, n) { let i = !1;
        void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", E)); const r = n.source; let s = g.get(r);
        void 0 === s && (s = {}, g.set(r, s)); const o = function(t) { const e = []; return e.push(t.wrapS), e.push(t.wrapT), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join() }(n); if (o !== e.__cacheKey) { void 0 === s[o] && (s[o] = { texture: t.createTexture(), usedTimes: 0 }, a.memory.textures++, i = !0), s[o].usedTimes++; const r = s[e.__cacheKey];
            void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && R(n)), e.__cacheKey = o, e.__webglTexture = s[o].texture } return i }

    function N(e, i, r) { let a = 3553;
        i.isDataArrayTexture && (a = 35866), i.isData3DTexture && (a = 32879); const l = O(e, i),
            h = i.source; if (n.activeTexture(33984 + r), n.bindTexture(a, e.__webglTexture), h.version !== h.__currentVersion || !0 === l) { t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0); const r = function(t) { return !o && (1001 !== t.wrapS || 1001 !== t.wrapT || 1003 !== t.minFilter && 1006 !== t.minFilter) }(i) && !1 === _(i.image); let l = x(i.image, r, !1, c);
            l = H(i, l); const u = _(l) || o,
                d = s.convert(i.format, i.encoding); let p, m = s.convert(i.type),
                f = M(i.internalFormat, d, m, i.encoding, i.isVideoTexture);
            I(a, i, u); const g = i.mipmaps,
                v = o && !0 !== i.isVideoTexture,
                y = void 0 === e.__version,
                T = S(i, l, u); if (i.isDepthTexture) f = 6402, o ? f = 1015 === i.type ? 36012 : 1014 === i.type ? 33190 : 1020 === i.type ? 35056 : 33189 : 1015 === i.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === i.format && 6402 === f && 1012 !== i.type && 1014 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = 1012, m = s.convert(i.type)), 1027 === i.format && 6402 === f && (f = 34041, 1020 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = 1020, m = s.convert(i.type))), v && y ? n.texStorage2D(3553, 1, f, l.width, l.height) : n.texImage2D(3553, 0, f, l.width, l.height, 0, d, m, null);
            else if (i.isDataTexture)
                if (g.length > 0 && u) { v && y && n.texStorage2D(3553, T, f, g[0].width, g[0].height); for (let t = 0, e = g.length; t < e; t++) p = g[t], v ? n.texSubImage2D(3553, t, 0, 0, p.width, p.height, d, m, p.data) : n.texImage2D(3553, t, f, p.width, p.height, 0, d, m, p.data);
                    i.generateMipmaps = !1 } else v ? (y && n.texStorage2D(3553, T, f, l.width, l.height), n.texSubImage2D(3553, 0, 0, 0, l.width, l.height, d, m, l.data)) : n.texImage2D(3553, 0, f, l.width, l.height, 0, d, m, l.data);
            else if (i.isCompressedTexture) { v && y && n.texStorage2D(3553, T, f, g[0].width, g[0].height); for (let t = 0, e = g.length; t < e; t++) p = g[t], 1023 !== i.format ? null !== d ? v ? n.compressedTexSubImage2D(3553, t, 0, 0, p.width, p.height, d, p.data) : n.compressedTexImage2D(3553, t, f, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v ? n.texSubImage2D(3553, t, 0, 0, p.width, p.height, d, m, p.data) : n.texImage2D(3553, t, f, p.width, p.height, 0, d, m, p.data) } else if (i.isDataArrayTexture) v ? (y && n.texStorage3D(35866, T, f, l.width, l.height, l.depth), n.texSubImage3D(35866, 0, 0, 0, 0, l.width, l.height, l.depth, d, m, l.data)) : n.texImage3D(35866, 0, f, l.width, l.height, l.depth, 0, d, m, l.data);
            else if (i.isData3DTexture) v ? (y && n.texStorage3D(32879, T, f, l.width, l.height, l.depth), n.texSubImage3D(32879, 0, 0, 0, 0, l.width, l.height, l.depth, d, m, l.data)) : n.texImage3D(32879, 0, f, l.width, l.height, l.depth, 0, d, m, l.data);
            else if (i.isFramebufferTexture) v && y ? n.texStorage2D(3553, T, f, l.width, l.height) : n.texImage2D(3553, 0, f, l.width, l.height, 0, d, m, null);
            else if (g.length > 0 && u) { v && y && n.texStorage2D(3553, T, f, g[0].width, g[0].height); for (let t = 0, e = g.length; t < e; t++) p = g[t], v ? n.texSubImage2D(3553, t, 0, 0, d, m, p) : n.texImage2D(3553, t, f, d, m, p);
                i.generateMipmaps = !1 } else v ? (y && n.texStorage2D(3553, T, f, l.width, l.height), n.texSubImage2D(3553, 0, 0, 0, d, m, l)) : n.texImage2D(3553, 0, f, d, m, l);
            b(i, u) && w(a), h.__currentVersion = h.version, i.onUpdate && i.onUpdate(i) }
        e.__version = i.version }

    function F(e, r, a, o, l) { const h = s.convert(a.format, a.encoding),
            c = s.convert(a.type),
            u = M(a.internalFormat, h, c, a.encoding);
        i.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, h, c, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, h, c, null)), n.bindFramebuffer(36160, e), z(r) ? d.framebufferTexture2DMultisampleEXT(36160, o, l, i.get(a).__webglTexture, 0, B(r)) : t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0), n.bindFramebuffer(36160, null) }

    function U(e, n, i) { if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) { let r = 33189; if (i || z(n)) { const e = n.depthTexture;
                e && e.isDepthTexture && (1015 === e.type ? r = 36012 : 1014 === e.type && (r = 33190)); const i = B(n);
                z(n) ? d.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height) : t.renderbufferStorageMultisample(36161, i, r, n.width, n.height) } else t.renderbufferStorage(36161, r, n.width, n.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e) } else if (n.depthBuffer && n.stencilBuffer) { const r = B(n);
            i && !1 === z(n) ? t.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height) : z(n) ? d.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height) : t.renderbufferStorage(36161, 34041, n.width, n.height), t.framebufferRenderbuffer(36160, 33306, 36161, e) } else { const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture,
                r = s.convert(e.format, e.encoding),
                a = s.convert(e.type),
                o = M(e.internalFormat, r, a, e.encoding),
                l = B(n);
            i && !1 === z(n) ? t.renderbufferStorageMultisample(36161, l, o, n.width, n.height) : z(n) ? d.renderbufferStorageMultisampleEXT(36161, l, o, n.width, n.height) : t.renderbufferStorage(36161, o, n.width, n.height) }
        t.bindRenderbuffer(36161, null) }

    function k(e) { const r = i.get(e),
            s = !0 === e.isWebGLCubeRenderTarget; if (e.depthTexture && !r.__autoAllocateDepthBuffer) { if (s) throw new Error("target.depthTexture not supported in Cube render targets");! function(e, r) { if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), L(r.depthTexture, 0); const s = i.get(r.depthTexture).__webglTexture,
                    a = B(r); if (1026 === r.depthTexture.format) z(r) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t.framebufferTexture2D(36160, 36096, 3553, s, 0);
                else { if (1027 !== r.depthTexture.format) throw new Error("Unknown depthTexture format");
                    z(r) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t.framebufferTexture2D(36160, 33306, 3553, s, 0) } }(r.__webglFramebuffer, e) } else if (s) { r.__webglDepthbuffer = []; for (let i = 0; i < 6; i++) n.bindFramebuffer(36160, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), U(r.__webglDepthbuffer[i], e, !1) } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), U(r.__webglDepthbuffer, e, !1);
        n.bindFramebuffer(36160, null) }

    function B(t) { return Math.min(u, t.samples) }

    function z(t) { const n = i.get(t); return o && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture }

    function H(t, n) { const i = t.encoding,
            r = t.format,
            s = t.type; return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || 1035 === t.format || 3e3 !== i && (3001 === i ? !1 === o ? !0 === e.has("EXT_sRGB") && 1023 === r ? (t.format = 1035, t.minFilter = 1006, t.generateMipmaps = !1) : n = Lt.sRGBToLinear(n) : 1023 === r && 1009 === s || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)), n }
    this.allocateTextureUnit = function() { const t = C; return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), C += 1, t }, this.resetTextureUnits = function() { C = 0 }, this.setTexture2D = L, this.setTexture2DArray = function(t, e) { const r = i.get(t);
        t.version > 0 && r.__version !== t.version ? N(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture)) }, this.setTexture3D = function(t, e) { const r = i.get(t);
        t.version > 0 && r.__version !== t.version ? N(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture)) }, this.setTextureCube = function(e, r) { const a = i.get(e);
        e.version > 0 && a.__version !== e.version ? function(e, i, r) { if (6 !== i.image.length) return; const a = O(e, i),
                l = i.source; if (n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), l.version !== l.__currentVersion || !0 === a) { t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0); const r = i.isCompressedTexture || i.image[0].isCompressedTexture,
                    a = i.image[0] && i.image[0].isDataTexture,
                    c = []; for (let t = 0; t < 6; t++) c[t] = r || a ? a ? i.image[t].image : i.image[t] : x(i.image[t], !1, !0, h), c[t] = H(i, c[t]); const u = c[0],
                    d = _(u) || o,
                    p = s.convert(i.format, i.encoding),
                    m = s.convert(i.type),
                    f = M(i.internalFormat, p, m, i.encoding),
                    g = o && !0 !== i.isVideoTexture,
                    v = void 0 === e.__version; let y, T = S(i, u, d); if (I(34067, i, d), r) { g && v && n.texStorage2D(34067, T, f, u.width, u.height); for (let t = 0; t < 6; t++) { y = c[t].mipmaps; for (let e = 0; e < y.length; e++) { const r = y[e];
                            1023 !== i.format ? null !== p ? g ? n.compressedTexSubImage2D(34069 + t, e, 0, 0, r.width, r.height, p, r.data) : n.compressedTexImage2D(34069 + t, e, f, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g ? n.texSubImage2D(34069 + t, e, 0, 0, r.width, r.height, p, m, r.data) : n.texImage2D(34069 + t, e, f, r.width, r.height, 0, p, m, r.data) } } } else { y = i.mipmaps, g && v && (y.length > 0 && T++, n.texStorage2D(34067, T, f, c[0].width, c[0].height)); for (let t = 0; t < 6; t++)
                        if (a) { g ? n.texSubImage2D(34069 + t, 0, 0, 0, c[t].width, c[t].height, p, m, c[t].data) : n.texImage2D(34069 + t, 0, f, c[t].width, c[t].height, 0, p, m, c[t].data); for (let e = 0; e < y.length; e++) { const i = y[e].image[t].image;
                                g ? n.texSubImage2D(34069 + t, e + 1, 0, 0, i.width, i.height, p, m, i.data) : n.texImage2D(34069 + t, e + 1, f, i.width, i.height, 0, p, m, i.data) } } else { g ? n.texSubImage2D(34069 + t, 0, 0, 0, p, m, c[t]) : n.texImage2D(34069 + t, 0, f, p, m, c[t]); for (let e = 0; e < y.length; e++) { const i = y[e];
                                g ? n.texSubImage2D(34069 + t, e + 1, 0, 0, p, m, i.image[t]) : n.texImage2D(34069 + t, e + 1, f, p, m, i.image[t]) } } }
                b(i, d) && w(34067), l.__currentVersion = l.version, i.onUpdate && i.onUpdate(i) }
            e.__version = i.version }(a, e, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture)) }, this.rebindTextures = function(t, e, n) { const r = i.get(t);
        void 0 !== e && F(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== n && k(t) }, this.setupRenderTarget = function(e) { const l = e.texture,
            h = i.get(e),
            c = i.get(l);
        e.addEventListener("dispose", A), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === c.__webglTexture && (c.__webglTexture = t.createTexture()), c.__version = l.version, a.memory.textures++); const u = !0 === e.isWebGLCubeRenderTarget,
            d = !0 === e.isWebGLMultipleRenderTargets,
            p = _(e) || o; if (u) { h.__webglFramebuffer = []; for (let e = 0; e < 6; e++) h.__webglFramebuffer[e] = t.createFramebuffer() } else if (h.__webglFramebuffer = t.createFramebuffer(), d)
            if (r.drawBuffers) { const n = e.texture; for (let e = 0, r = n.length; e < r; e++) { const r = i.get(n[e]);
                    void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), a.memory.textures++) } } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        else if (o && e.samples > 0 && !1 === z(e)) { h.__webglMultisampledFramebuffer = t.createFramebuffer(), h.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, h.__webglColorRenderbuffer); const i = s.convert(l.format, l.encoding),
                r = s.convert(l.type),
                a = M(l.internalFormat, i, r, l.encoding),
                o = B(e);
            t.renderbufferStorageMultisample(36161, o, a, e.width, e.height), n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, h.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (h.__webglDepthRenderbuffer = t.createRenderbuffer(), U(h.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null) } if (u) { n.bindTexture(34067, c.__webglTexture), I(34067, l, p); for (let t = 0; t < 6; t++) F(h.__webglFramebuffer[t], e, l, 36064, 34069 + t);
            b(l, p) && w(34067), n.unbindTexture() } else if (d) { const t = e.texture; for (let r = 0, s = t.length; r < s; r++) { const s = t[r],
                    a = i.get(s);
                n.bindTexture(3553, a.__webglTexture), I(3553, s, p), F(h.__webglFramebuffer, e, s, 36064 + r, 3553), b(s, p) && w(3553) }
            n.unbindTexture() } else { let t = 3553;
            (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(t, c.__webglTexture), I(t, l, p), F(h.__webglFramebuffer, e, l, 36064, t), b(l, p) && w(t), n.unbindTexture() }
        e.depthBuffer && k(e) }, this.updateRenderTargetMipmap = function(t) { const e = _(t) || o,
            r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture]; for (let s = 0, a = r.length; s < a; s++) { const a = r[s]; if (b(a, e)) { const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                    r = i.get(a).__webglTexture;
                n.bindTexture(e, r), w(e), n.unbindTexture() } } }, this.updateMultisampleRenderTarget = function(e) { if (o && e.samples > 0 && !1 === z(e)) { const r = e.width,
                s = e.height; let a = 16384; const o = [36064],
                l = e.stencilBuffer ? 33306 : 36096;
            e.depthBuffer && o.push(l); const h = i.get(e),
                c = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;!1 === c && (e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024)), n.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, h.__webglFramebuffer), !0 === c && (t.invalidateFramebuffer(36008, [l]), t.invalidateFramebuffer(36009, [l])), t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728), p && t.invalidateFramebuffer(36008, o), n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, h.__webglMultisampledFramebuffer) } }, this.setupDepthRenderbuffer = k, this.setupFrameBufferTexture = F, this.useMultisampledRTT = z }

function Ss(t, e, n) { const i = n.isWebGL2; return { convert: function(t, n = null) { let r; if (1009 === t) return 5121; if (1017 === t) return 32819; if (1018 === t) return 32820; if (1010 === t) return 5120; if (1011 === t) return 5122; if (1012 === t) return 5123; if (1013 === t) return 5124; if (1014 === t) return 5125; if (1015 === t) return 5126; if (1016 === t) return i ? 5131 : (r = e.get("OES_texture_half_float"), null !== r ? r.HALF_FLOAT_OES : null); if (1021 === t) return 6406; if (1023 === t) return 6408; if (1024 === t) return 6409; if (1025 === t) return 6410; if (1026 === t) return 6402; if (1027 === t) return 34041; if (1028 === t) return 6403; if (1022 === t) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408; if (1035 === t) return r = e.get("EXT_sRGB"), null !== r ? r.SRGB_ALPHA_EXT : null; if (1029 === t) return 36244; if (1030 === t) return 33319; if (1031 === t) return 33320; if (1033 === t) return 36249; if (33776 === t || 33777 === t || 33778 === t || 33779 === t)
                if (3001 === n) { if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === r) return null; if (33776 === t) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (33777 === t) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (33778 === t) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (33779 === t) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else { if (r = e.get("WEBGL_compressed_texture_s3tc"), null === r) return null; if (33776 === t) return r.COMPRESSED_RGB_S3TC_DXT1_EXT; if (33777 === t) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (33778 === t) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (33779 === t) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT }
            if (35840 === t || 35841 === t || 35842 === t || 35843 === t) { if (r = e.get("WEBGL_compressed_texture_pvrtc"), null === r) return null; if (35840 === t) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (35841 === t) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (35842 === t) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (35843 === t) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } if (36196 === t) return r = e.get("WEBGL_compressed_texture_etc1"), null !== r ? r.COMPRESSED_RGB_ETC1_WEBGL : null; if (37492 === t || 37496 === t) { if (r = e.get("WEBGL_compressed_texture_etc"), null === r) return null; if (37492 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2; if (37496 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC } if (37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t) { if (r = e.get("WEBGL_compressed_texture_astc"), null === r) return null; if (37808 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR; if (37809 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR; if (37810 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR; if (37811 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR; if (37812 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR; if (37813 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR; if (37814 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR; if (37815 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR; if (37816 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR; if (37817 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR; if (37818 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR; if (37819 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR; if (37820 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR; if (37821 === t) return 3001 === n ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR } if (36492 === t) { if (r = e.get("EXT_texture_compression_bptc"), null === r) return null; if (36492 === t) return 3001 === n ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT } return 1020 === t ? i ? 34042 : (r = e.get("WEBGL_depth_texture"), null !== r ? r.UNSIGNED_INT_24_8_WEBGL : null) : void 0 } } }
class Ts extends Gn { constructor(t = []) { super(), this.cameras = t } }
Ts.prototype.isArrayCamera = !0;
class Es extends Ve { constructor() { super(), this.type = "Group" } }
Es.prototype.isGroup = !0;
const As = { type: "move" };
class Rs { constructor() { this._targetRay = null, this._grip = null, this._hand = null }
    getHandSpace() { return null === this._hand && (this._hand = new Es, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand }
    getTargetRaySpace() { return null === this._targetRay && (this._targetRay = new Es, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new zt, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new zt), this._targetRay }
    getGripSpace() { return null === this._grip && (this._grip = new Es, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new zt, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new zt), this._grip }
    dispatchEvent(t) { return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this }
    disconnect(t) { return this.dispatchEvent({ type: "disconnected", data: t }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this }
    update(t, e, n) { let i = null,
            r = null,
            s = null; const a = this._targetRay,
            o = this._grip,
            l = this._hand; if (t && "visible-blurred" !== e.session.visibilityState)
            if (null !== a && (i = e.getPose(t.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(As))), l && t.hand) { s = !0; for (const i of t.hand.values()) { const t = e.getJointPose(i, n); if (void 0 === l.joints[i.jointName]) { const t = new Es;
                        t.matrixAutoUpdate = !1, t.visible = !1, l.joints[i.jointName] = t, l.add(t) } const r = l.joints[i.jointName];
                    null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t } const i = l.joints["index-finger-tip"],
                    r = l.joints["thumb-tip"],
                    a = i.position.distanceTo(r.position),
                    o = .02,
                    h = .005;
                l.inputState.pinching && a > o + h ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && a <= o - h && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this })) } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
        return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this } }
class Cs extends Ot { constructor(t, e, n, i, r, s, a, o, l, h) { if (1026 !== (h = void 0 !== h ? h : 1026) && 1027 !== h) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && 1026 === h && (n = 1012), void 0 === n && 1027 === h && (n = 1020), super(null, i, r, s, a, o, h, n, l), this.image = { width: t, height: e }, this.magFilter = void 0 !== a ? a : 1003, this.minFilter = void 0 !== o ? o : 1003, this.flipY = !1, this.generateMipmaps = !1 } }
Cs.prototype.isDepthTexture = !0;
class Ls extends et { constructor(t, e) { super(); const n = this; let i = null,
            r = 1,
            s = null,
            a = "local-floor",
            o = null,
            l = null,
            h = null,
            c = null,
            u = null; const d = e.getContextAttributes(); let p = null,
            m = null; const f = [],
            g = new Map,
            v = new Gn;
        v.layers.enable(1), v.viewport = new Nt; const y = new Gn;
        y.layers.enable(2), y.viewport = new Nt; const x = [v, y],
            _ = new Ts;
        _.layers.enable(1), _.layers.enable(2); let b = null,
            w = null;

        function M(t) { const e = g.get(t.inputSource);
            e && e.dispatchEvent({ type: t.type, data: t.inputSource }) }

        function S() { g.forEach((function(t, e) { t.disconnect(e) })), g.clear(), b = null, w = null, t.setRenderTarget(p), c = null, h = null, l = null, i = null, m = null, L.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" }) }

        function T(t) { const e = i.inputSources; for (let t = 0; t < f.length; t++) g.set(e[t], f[t]); for (let e = 0; e < t.removed.length; e++) { const n = t.removed[e],
                    i = g.get(n);
                i && (i.dispatchEvent({ type: "disconnected", data: n }), g.delete(n)) } for (let e = 0; e < t.added.length; e++) { const n = t.added[e],
                    i = g.get(n);
                i && i.dispatchEvent({ type: "connected", data: n }) } }
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) { let e = f[t]; return void 0 === e && (e = new Rs, f[t] = e), e.getTargetRaySpace() }, this.getControllerGrip = function(t) { let e = f[t]; return void 0 === e && (e = new Rs, f[t] = e), e.getGripSpace() }, this.getHand = function(t) { let e = f[t]; return void 0 === e && (e = new Rs, f[t] = e), e.getHandSpace() }, this.setFramebufferScaleFactor = function(t) { r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function(t) { a = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function() { return s }, this.getBaseLayer = function() { return null !== h ? h : c }, this.getBinding = function() { return l }, this.getFrame = function() { return u }, this.getSession = function() { return i }, this.setSession = async function(o) { if (i = o, null !== i) { if (p = t.getRenderTarget(), i.addEventListener("select", M), i.addEventListener("selectstart", M), i.addEventListener("selectend", M), i.addEventListener("squeeze", M), i.addEventListener("squeezestart", M), i.addEventListener("squeezeend", M), i.addEventListener("end", S), i.addEventListener("inputsourceschange", T), !0 !== d.xrCompatible && await e.makeXRCompatible(), void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2) { const n = { antialias: void 0 !== i.renderState.layers || d.antialias, alpha: d.alpha, depth: d.depth, stencil: d.stencil, framebufferScaleFactor: r };
                    c = new XRWebGLLayer(i, e, n), i.updateRenderState({ baseLayer: c }), m = new Ft(c.framebufferWidth, c.framebufferHeight, { format: 1023, type: 1009, encoding: t.outputEncoding }) } else { let n = null,
                        s = null,
                        a = null;
                    d.depth && (a = d.stencil ? 35056 : 33190, n = d.stencil ? 1027 : 1026, s = d.stencil ? 1020 : 1012); const o = { colorFormat: 3001 === t.outputEncoding ? 35907 : 32856, depthFormat: a, scaleFactor: r };
                    l = new XRWebGLBinding(i, e), h = l.createProjectionLayer(o), i.updateRenderState({ layers: [h] }), m = new Ft(h.textureWidth, h.textureHeight, { format: 1023, type: 1009, depthTexture: new Cs(h.textureWidth, h.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, n), stencilBuffer: d.stencil, encoding: t.outputEncoding, samples: d.antialias ? 4 : 0 });
                    t.properties.get(m).__ignoreDepthValues = h.ignoreDepthValues }
                m.isXRRenderTarget = !0, this.setFoveation(1), s = await i.requestReferenceSpace(a), L.setContext(i), L.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }; const E = new zt,
            A = new zt;

        function R(t, e) { null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert() }
        this.updateCamera = function(t) { if (null === i) return;
            _.near = y.near = v.near = t.near, _.far = y.far = v.far = t.far, b === _.near && w === _.far || (i.updateRenderState({ depthNear: _.near, depthFar: _.far }), b = _.near, w = _.far); const e = t.parent,
                n = _.cameras;
            R(_, e); for (let t = 0; t < n.length; t++) R(n[t], e);
            _.matrixWorld.decompose(_.position, _.quaternion, _.scale), t.position.copy(_.position), t.quaternion.copy(_.quaternion), t.scale.copy(_.scale), t.matrix.copy(_.matrix), t.matrixWorld.copy(_.matrixWorld); const r = t.children; for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
            2 === n.length ? function(t, e, n) { E.setFromMatrixPosition(e.matrixWorld), A.setFromMatrixPosition(n.matrixWorld); const i = E.distanceTo(A),
                    r = e.projectionMatrix.elements,
                    s = n.projectionMatrix.elements,
                    a = r[14] / (r[10] - 1),
                    o = r[14] / (r[10] + 1),
                    l = (r[9] + 1) / r[5],
                    h = (r[9] - 1) / r[5],
                    c = (r[8] - 1) / r[0],
                    u = (s[8] + 1) / s[0],
                    d = a * c,
                    p = a * u,
                    m = i / (-c + u),
                    f = m * -c;
                e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(f), t.translateZ(m), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert(); const g = a + m,
                    v = o + m,
                    y = d - f,
                    x = p + (i - f),
                    _ = l * o / v * g,
                    b = h * o / v * g;
                t.projectionMatrix.makePerspective(y, x, _, b, g, v) }(_, v, y) : _.projectionMatrix.copy(v.projectionMatrix) }, this.getCamera = function() { return _ }, this.getFoveation = function() { return null !== h ? h.fixedFoveation : null !== c ? c.fixedFoveation : void 0 }, this.setFoveation = function(t) { null !== h && (h.fixedFoveation = t), null !== c && void 0 !== c.fixedFoveation && (c.fixedFoveation = t) }; let C = null; const L = new ti;
        L.setAnimationLoop((function(e, n) { if (o = n.getViewerPose(s), u = n, null !== o) { const e = o.views;
                null !== c && (t.setRenderTargetFramebuffer(m, c.framebuffer), t.setRenderTarget(m)); let n = !1;
                e.length !== _.cameras.length && (_.cameras.length = 0, n = !0); for (let i = 0; i < e.length; i++) { const r = e[i]; let s = null; if (null !== c) s = c.getViewport(r);
                    else { const e = l.getViewSubImage(h, r);
                        s = e.viewport, 0 === i && (t.setRenderTargetTextures(m, e.colorTexture, h.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(m)) } const a = x[i];
                    a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === i && _.matrix.copy(a.matrix), !0 === n && _.cameras.push(a) } } const r = i.inputSources; for (let t = 0; t < f.length; t++) { const e = f[t],
                    i = r[t];
                e.update(i, n, s) }
            C && C(e, n), u = null })), this.setAnimationLoop = function(t) { C = t }, this.dispose = function() {} } }

function Ps(t, e) {
    function n(n, i) { n.opacity.value = i.opacity, i.color && n.diffuse.value.copy(i.color), i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (n.map.value = i.map), i.alphaMap && (n.alphaMap.value = i.alphaMap), i.bumpMap && (n.bumpMap.value = i.bumpMap, n.bumpScale.value = i.bumpScale, 1 === i.side && (n.bumpScale.value *= -1)), i.displacementMap && (n.displacementMap.value = i.displacementMap, n.displacementScale.value = i.displacementScale, n.displacementBias.value = i.displacementBias), i.emissiveMap && (n.emissiveMap.value = i.emissiveMap), i.normalMap && (n.normalMap.value = i.normalMap, n.normalScale.value.copy(i.normalScale), 1 === i.side && n.normalScale.value.negate()), i.specularMap && (n.specularMap.value = i.specularMap), i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest); const r = e.get(i).envMap; if (r && (n.envMap.value = r, n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, n.reflectivity.value = i.reflectivity, n.ior.value = i.ior, n.refractionRatio.value = i.refractionRatio), i.lightMap) { n.lightMap.value = i.lightMap; const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
            n.lightMapIntensity.value = i.lightMapIntensity * e } let s, a;
        i.aoMap && (n.aoMap.value = i.aoMap, n.aoMapIntensity.value = i.aoMapIntensity), i.map ? s = i.map : i.specularMap ? s = i.specularMap : i.displacementMap ? s = i.displacementMap : i.normalMap ? s = i.normalMap : i.bumpMap ? s = i.bumpMap : i.roughnessMap ? s = i.roughnessMap : i.metalnessMap ? s = i.metalnessMap : i.alphaMap ? s = i.alphaMap : i.emissiveMap ? s = i.emissiveMap : i.clearcoatMap ? s = i.clearcoatMap : i.clearcoatNormalMap ? s = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? s = i.clearcoatRoughnessMap : i.specularIntensityMap ? s = i.specularIntensityMap : i.specularColorMap ? s = i.specularColorMap : i.transmissionMap ? s = i.transmissionMap : i.thicknessMap ? s = i.thicknessMap : i.sheenColorMap ? s = i.sheenColorMap : i.sheenRoughnessMap && (s = i.sheenRoughnessMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), n.uvTransform.value.copy(s.matrix)), i.aoMap ? a = i.aoMap : i.lightMap && (a = i.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), n.uv2Transform.value.copy(a.matrix)) } return { refreshFogUniforms: function(t, e) { t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density) }, refreshMaterialUniforms: function(t, i, r, s, a) { i.isMeshBasicMaterial || i.isMeshLambertMaterial ? n(t, i) : i.isMeshToonMaterial ? (n(t, i), function(t, e) { e.gradientMap && (t.gradientMap.value = e.gradientMap) }(t, i)) : i.isMeshPhongMaterial ? (n(t, i), function(t, e) { t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4) }(t, i)) : i.isMeshStandardMaterial ? (n(t, i), function(t, n) { t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap);
                n.metalnessMap && (t.metalnessMap.value = n.metalnessMap);
                e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity) }(t, i), i.isMeshPhysicalMaterial && function(t, e, n) { t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap));
                e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate()));
                e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = n.texture, t.transmissionSamplerSize.value.set(n.width, n.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor));
                t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap);
                e.specularColorMap && (t.specularColorMap.value = e.specularColorMap) }(t, i, a)) : i.isMeshMatcapMaterial ? (n(t, i), function(t, e) { e.matcap && (t.matcap.value = e.matcap) }(t, i)) : i.isMeshDepthMaterial ? n(t, i) : i.isMeshDistanceMaterial ? (n(t, i), function(t, e) { t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance }(t, i)) : i.isMeshNormalMaterial ? n(t, i) : i.isLineBasicMaterial ? (function(t, e) { t.diffuse.value.copy(e.color), t.opacity.value = e.opacity }(t, i), i.isLineDashedMaterial && function(t, e) { t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) { t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map);
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest); let r;
                e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix)) }(t, i, r, s) : i.isSpriteMaterial ? function(t, e) { t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest); let n;
                e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix)) }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1) } } }

function Ds(t = {}) { const e = void 0 !== t.canvas ? t.canvas : function() { const t = vt("canvas"); return t.style.display = "block", t }(),
        n = void 0 !== t.context ? t.context : null,
        i = void 0 === t.depth || t.depth,
        r = void 0 === t.stencil || t.stencil,
        s = void 0 !== t.antialias && t.antialias,
        a = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
        o = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
        l = void 0 !== t.powerPreference ? t.powerPreference : "default",
        h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat; let c;
    c = void 0 !== t.context ? n.getContextAttributes().alpha : void 0 !== t.alpha && t.alpha; let u = null,
        d = null; const p = [],
        m = [];
    this.domElement = e, this.debug = { checkShaderErrors: !0 }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1; const f = this; let g = !1,
        v = 0,
        y = 0,
        x = null,
        _ = -1,
        b = null; const w = new Nt,
        M = new Nt; let S = null,
        T = e.width,
        E = e.height,
        A = 1,
        R = null,
        C = null; const L = new Nt(0, 0, T, E),
        P = new Nt(0, 0, T, E); let D = !1; const I = new Qn; let O = !1,
        N = !1,
        F = null; const U = new ve,
        k = new mt,
        B = new zt,
        z = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };

    function H() { return null === x ? A : 1 } let V, G, W, j, q, X, Y, J, Z, $, K, Q, tt, et, nt, it, rt, st, at, ot, lt, ht, ct, ut = n;

    function pt(t, n) { for (let i = 0; i < t.length; i++) { const r = t[i],
                s = e.getContext(r, n); if (null !== s) return s } return null } try { const t = { alpha: !0, depth: i, stencil: r, antialias: s, premultipliedAlpha: a, preserveDrawingBuffer: o, powerPreference: l, failIfMajorPerformanceCaveat: h }; if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r139"), e.addEventListener("webglcontextlost", yt, !1), e.addEventListener("webglcontextrestored", xt, !1), null === ut) { const e = ["webgl2", "webgl", "experimental-webgl"]; if (!0 === f.isWebGL1Renderer && e.shift(), ut = pt(e, t), null === ut) throw pt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") }
        void 0 === ut.getShaderPrecisionFormat && (ut.getShaderPrecisionFormat = function() { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (t) { throw console.error("THREE.WebGLRenderer: " + t.message), t }

    function ft() { V = new Ai(ut), G = new hi(ut, V, t), V.init(G), ht = new Ss(ut, V, G), W = new ws(ut, V, G), j = new Li(ut), q = new ls, X = new Ms(ut, V, W, q, G, ht, j), Y = new ui(f), J = new Ei(f), Z = new ei(ut, G), ct = new oi(ut, V, Z, G), $ = new Ri(ut, Z, j, ct), K = new Ni(ut, $, Z, j), at = new Oi(ut, G, X), it = new ci(q), Q = new os(f, Y, J, V, G, ct, it), tt = new Ps(f, q), et = new ds, nt = new ys(V, G), st = new ai(f, Y, W, K, c, a), rt = new bs(f, K, G), ot = new li(ut, V, j, G), lt = new Ci(ut, V, j, G), j.programs = Q.programs, f.capabilities = G, f.extensions = V, f.properties = q, f.renderLists = et, f.shadowMap = rt, f.state = W, f.info = j }
    ft(); const gt = new Ls(f, ut);

    function yt(t) { t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0 }

    function xt() { console.log("THREE.WebGLRenderer: Context Restored."), g = !1; const t = j.autoReset,
            e = rt.enabled,
            n = rt.autoUpdate,
            i = rt.needsUpdate,
            r = rt.type;
        ft(), j.autoReset = t, rt.enabled = e, rt.autoUpdate = n, rt.needsUpdate = i, rt.type = r }

    function _t(t) { const e = t.target;
        e.removeEventListener("dispose", _t),
            function(t) {
                (function(t) { const e = q.get(t).programs;
                    void 0 !== e && (e.forEach((function(t) { Q.releaseProgram(t) })), t.isShaderMaterial && Q.releaseShaderCache(t)) })(t), q.remove(t) }(e) }
    this.xr = gt, this.getContext = function() { return ut }, this.getContextAttributes = function() { return ut.getContextAttributes() }, this.forceContextLoss = function() { const t = V.get("WEBGL_lose_context");
        t && t.loseContext() }, this.forceContextRestore = function() { const t = V.get("WEBGL_lose_context");
        t && t.restoreContext() }, this.getPixelRatio = function() { return A }, this.setPixelRatio = function(t) { void 0 !== t && (A = t, this.setSize(T, E, !1)) }, this.getSize = function(t) { return t.set(T, E) }, this.setSize = function(t, n, i) { gt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (T = t, E = n, e.width = Math.floor(t * A), e.height = Math.floor(n * A), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n)) }, this.getDrawingBufferSize = function(t) { return t.set(T * A, E * A).floor() }, this.setDrawingBufferSize = function(t, n, i) { T = t, E = n, A = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n) }, this.getCurrentViewport = function(t) { return t.copy(w) }, this.getViewport = function(t) { return t.copy(L) }, this.setViewport = function(t, e, n, i) { t.isVector4 ? L.set(t.x, t.y, t.z, t.w) : L.set(t, e, n, i), W.viewport(w.copy(L).multiplyScalar(A).floor()) }, this.getScissor = function(t) { return t.copy(P) }, this.setScissor = function(t, e, n, i) { t.isVector4 ? P.set(t.x, t.y, t.z, t.w) : P.set(t, e, n, i), W.scissor(M.copy(P).multiplyScalar(A).floor()) }, this.getScissorTest = function() { return D }, this.setScissorTest = function(t) { W.setScissorTest(D = t) }, this.setOpaqueSort = function(t) { R = t }, this.setTransparentSort = function(t) { C = t }, this.getClearColor = function(t) { return t.copy(st.getClearColor()) }, this.setClearColor = function() { st.setClearColor.apply(st, arguments) }, this.getClearAlpha = function() { return st.getClearAlpha() }, this.setClearAlpha = function() { st.setClearAlpha.apply(st, arguments) }, this.clear = function(t = !0, e = !0, n = !0) { let i = 0;
        t && (i |= 16384), e && (i |= 256), n && (i |= 1024), ut.clear(i) }, this.clearColor = function() { this.clear(!0, !1, !1) }, this.clearDepth = function() { this.clear(!1, !0, !1) }, this.clearStencil = function() { this.clear(!1, !1, !0) }, this.dispose = function() { e.removeEventListener("webglcontextlost", yt, !1), e.removeEventListener("webglcontextrestored", xt, !1), et.dispose(), nt.dispose(), q.dispose(), Y.dispose(), J.dispose(), K.dispose(), ct.dispose(), Q.dispose(), gt.dispose(), gt.removeEventListener("sessionstart", wt), gt.removeEventListener("sessionend", Mt), F && (F.dispose(), F = null), St.stop() }, this.renderBufferDirect = function(t, e, n, i, r, s) { null === e && (e = z); const a = r.isMesh && r.matrixWorld.determinant() < 0,
            o = function(t, e, n, i, r) {!0 !== e.isScene && (e = z);
                X.resetTextureUnits(); const s = e.fog,
                    a = i.isMeshStandardMaterial ? e.environment : null,
                    o = null === x ? f.outputEncoding : !0 === x.isXRRenderTarget ? x.texture.encoding : 3e3,
                    l = (i.isMeshStandardMaterial ? J : Y).get(i.envMap || a),
                    h = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
                    c = !!i.normalMap && !!n.attributes.tangent,
                    u = !!n.morphAttributes.position,
                    p = !!n.morphAttributes.normal,
                    m = !!n.morphAttributes.color,
                    g = i.toneMapped ? f.toneMapping : 0,
                    v = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
                    y = void 0 !== v ? v.length : 0,
                    w = q.get(i),
                    M = d.state.lights; if (!0 === O && (!0 === N || t !== b)) { const e = t === b && i.id === _;
                    it.setState(i, t, e) } let S = !1;
                i.version === w.__version ? w.needsLights && w.lightsStateVersion !== M.state.version || w.outputEncoding !== o || r.isInstancedMesh && !1 === w.instancing ? S = !0 : r.isInstancedMesh || !0 !== w.instancing ? r.isSkinnedMesh && !1 === w.skinning ? S = !0 : r.isSkinnedMesh || !0 !== w.skinning ? w.envMap !== l || i.fog && w.fog !== s ? S = !0 : void 0 === w.numClippingPlanes || w.numClippingPlanes === it.numPlanes && w.numIntersection === it.numIntersection ? (w.vertexAlphas !== h || w.vertexTangents !== c || w.morphTargets !== u || w.morphNormals !== p || w.morphColors !== m || w.toneMapping !== g || !0 === G.isWebGL2 && w.morphTargetsCount !== y) && (S = !0) : S = !0 : S = !0 : S = !0 : (S = !0, w.__version = i.version); let T = w.currentProgram;!0 === S && (T = Ct(i, e, r)); let R = !1,
                    C = !1,
                    L = !1; const P = T.getUniforms(),
                    D = w.uniforms;
                W.useProgram(T.program) && (R = !0, C = !0, L = !0);
                i.id !== _ && (_ = i.id, C = !0); if (R || b !== t) { if (P.setValue(ut, "projectionMatrix", t.projectionMatrix), G.logarithmicDepthBuffer && P.setValue(ut, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), b !== t && (b = t, C = !0, L = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) { const e = P.map.cameraPosition;
                        void 0 !== e && e.setValue(ut, B.setFromMatrixPosition(t.matrixWorld)) }(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && P.setValue(ut, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && P.setValue(ut, "viewMatrix", t.matrixWorldInverse) } if (r.isSkinnedMesh) { P.setOptional(ut, r, "bindMatrix"), P.setOptional(ut, r, "bindMatrixInverse"); const t = r.skeleton;
                    t && (G.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), P.setValue(ut, "boneTexture", t.boneTexture, X), P.setValue(ut, "boneTextureSize", t.boneTextureSize)) : P.setOptional(ut, t, "boneMatrices")) } const I = n.morphAttributes;
                (void 0 !== I.position || void 0 !== I.normal || void 0 !== I.color && !0 === G.isWebGL2) && at.update(r, n, i, T);
                (C || w.receiveShadow !== r.receiveShadow) && (w.receiveShadow = r.receiveShadow, P.setValue(ut, "receiveShadow", r.receiveShadow));
                C && (P.setValue(ut, "toneMappingExposure", f.toneMappingExposure), w.needsLights && (k = L, (U = D).ambientLightColor.needsUpdate = k, U.lightProbe.needsUpdate = k, U.directionalLights.needsUpdate = k, U.directionalLightShadows.needsUpdate = k, U.pointLights.needsUpdate = k, U.pointLightShadows.needsUpdate = k, U.spotLights.needsUpdate = k, U.spotLightShadows.needsUpdate = k, U.rectAreaLights.needsUpdate = k, U.hemisphereLights.needsUpdate = k), s && i.fog && tt.refreshFogUniforms(D, s), tt.refreshMaterialUniforms(D, i, A, E, F), Br.upload(ut, w.uniformsList, D, X)); var U, k;
                i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (Br.upload(ut, w.uniformsList, D, X), i.uniformsNeedUpdate = !1);
                i.isSpriteMaterial && P.setValue(ut, "center", r.center); return P.setValue(ut, "modelViewMatrix", r.modelViewMatrix), P.setValue(ut, "normalMatrix", r.normalMatrix), P.setValue(ut, "modelMatrix", r.matrixWorld), T }(t, e, n, i, r);
        W.setMaterial(i, a); let l = n.index; const h = n.attributes.position; if (null === l) { if (void 0 === h || 0 === h.count) return } else if (0 === l.count) return; let c, u = 1;!0 === i.wireframe && (l = $.getWireframeAttribute(n), u = 2), ct.setup(r, i, o, n, l); let p = ot;
        null !== l && (c = Z.get(l), p = lt, p.setIndex(c)); const m = null !== l ? l.count : h.count,
            g = n.drawRange.start * u,
            v = n.drawRange.count * u,
            y = null !== s ? s.start * u : 0,
            w = null !== s ? s.count * u : 1 / 0,
            M = Math.max(g, y),
            S = Math.min(m, g + v, y + w) - 1,
            T = Math.max(0, S - M + 1); if (0 !== T) { if (r.isMesh) !0 === i.wireframe ? (W.setLineWidth(i.wireframeLinewidth * H()), p.setMode(1)) : p.setMode(4);
            else if (r.isLine) { let t = i.linewidth;
                void 0 === t && (t = 1), W.setLineWidth(t * H()), r.isLineSegments ? p.setMode(1) : r.isLineLoop ? p.setMode(2) : p.setMode(3) } else r.isPoints ? p.setMode(0) : r.isSprite && p.setMode(4); if (r.isInstancedMesh) p.renderInstances(M, T, r.count);
            else if (n.isInstancedBufferGeometry) { const t = Math.min(n.instanceCount, n._maxInstanceCount);
                p.renderInstances(M, T, t) } else p.render(M, T) } }, this.compile = function(t, e) { d = nt.get(t), d.init(), m.push(d), t.traverseVisible((function(t) { t.isLight && t.layers.test(e.layers) && (d.pushLight(t), t.castShadow && d.pushShadow(t)) })), d.setupLights(f.physicallyCorrectLights), t.traverse((function(e) { const n = e.material; if (n)
                if (Array.isArray(n))
                    for (let i = 0; i < n.length; i++) { Ct(n[i], t, e) } else Ct(n, t, e) })), m.pop(), d = null }; let bt = null;

    function wt() { St.stop() }

    function Mt() { St.start() } const St = new ti;

    function Tt(t, e, n, i) { if (!1 === t.visible) return; if (t.layers.test(e.layers))
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
        else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
        else if (t.isSprite) { if (!t.frustumCulled || I.intersectsSprite(t)) { i && B.setFromMatrixPosition(t.matrixWorld).applyMatrix4(U); const e = K.update(t),
                    r = t.material;
                r.visible && u.push(t, e, r, n, B.z, null) } } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== j.render.frame && (t.skeleton.update(), t.skeleton.frame = j.render.frame), !t.frustumCulled || I.intersectsObject(t))) { i && B.setFromMatrixPosition(t.matrixWorld).applyMatrix4(U); const e = K.update(t),
                r = t.material; if (Array.isArray(r)) { const i = e.groups; for (let s = 0, a = i.length; s < a; s++) { const a = i[s],
                        o = r[a.materialIndex];
                    o && o.visible && u.push(t, e, o, n, B.z, a) } } else r.visible && u.push(t, e, r, n, B.z, null) } const r = t.children; for (let t = 0, s = r.length; t < s; t++) Tt(r[t], e, n, i) }

    function Et(t, e, n, i) { const r = t.opaque,
            a = t.transmissive,
            o = t.transparent;
        d.setupLightsView(n), a.length > 0 && function(t, e, n) { const i = G.isWebGL2;
            null === F && (F = new Ft(1, 1, { generateMipmaps: !0, type: null !== ht.convert(1016) ? 1016 : 1009, minFilter: 1008, samples: i && !0 === s ? 4 : 0 }));
            f.getDrawingBufferSize(k), i ? F.setSize(k.x, k.y) : F.setSize(dt(k.x), dt(k.y)); const r = f.getRenderTarget();
            f.setRenderTarget(F), f.clear(); const a = f.toneMapping;
            f.toneMapping = 0, At(t, e, n), f.toneMapping = a, X.updateMultisampleRenderTarget(F), X.updateRenderTargetMipmap(F), f.setRenderTarget(r) }(r, e, n), i && W.viewport(w.copy(i)), r.length > 0 && At(r, e, n), a.length > 0 && At(a, e, n), o.length > 0 && At(o, e, n), W.buffers.depth.setTest(!0), W.buffers.depth.setMask(!0), W.buffers.color.setMask(!0), W.setPolygonOffset(!1) }

    function At(t, e, n) { const i = !0 === e.isScene ? e.overrideMaterial : null; for (let r = 0, s = t.length; r < s; r++) { const s = t[r],
                a = s.object,
                o = s.geometry,
                l = null === i ? s.material : i,
                h = s.group;
            a.layers.test(n.layers) && Rt(a, e, n, o, l, h) } }

    function Rt(t, e, n, i, r, s) { t.onBeforeRender(f, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(f, e, n, i, t, s), !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, f.renderBufferDirect(n, e, i, r, t, s), r.side = 0, r.needsUpdate = !0, f.renderBufferDirect(n, e, i, r, t, s), r.side = 2) : f.renderBufferDirect(n, e, i, r, t, s), t.onAfterRender(f, e, n, i, r, s) }

    function Ct(t, e, n) {!0 !== e.isScene && (e = z); const i = q.get(t),
            r = d.state.lights,
            s = d.state.shadowsArray,
            a = r.state.version,
            o = Q.getParameters(t, r.state, s, e, n),
            l = Q.getProgramCacheKey(o); let h = i.programs;
        i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t.isMeshStandardMaterial ? J : Y).get(t.envMap || i.environment), void 0 === h && (t.addEventListener("dispose", _t), h = new Map, i.programs = h); let c = h.get(l); if (void 0 !== c) { if (i.currentProgram === c && i.lightsStateVersion === a) return Lt(t, o), c } else o.uniforms = Q.getUniforms(t), t.onBuild(n, o, f), t.onBeforeCompile(o, f), c = Q.acquireProgram(o, l), h.set(l, c), i.uniforms = o.uniforms; const u = i.uniforms;
        (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = it.uniform), Lt(t, o), i.needsLights = function(t) { return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights }(t), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix); const p = c.getUniforms(),
            m = Br.seqWithValue(p.seq, u); return i.currentProgram = c, i.uniformsList = m, c }

    function Lt(t, e) { const n = q.get(t);
        n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping }
    St.setAnimationLoop((function(t) { bt && bt(t) })), "undefined" != typeof self && St.setContext(self), this.setAnimationLoop = function(t) { bt = t, gt.setAnimationLoop(t), null === t ? St.stop() : St.start() }, gt.addEventListener("sessionstart", wt), gt.addEventListener("sessionend", Mt), this.render = function(t, e) { if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); if (!0 === g) return;!0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === gt.enabled && !0 === gt.isPresenting && (!0 === gt.cameraAutoUpdate && gt.updateCamera(e), e = gt.getCamera()), !0 === t.isScene && t.onBeforeRender(f, t, e, x), d = nt.get(t, m.length), d.init(), m.push(d), U.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), I.setFromProjectionMatrix(U), N = this.localClippingEnabled, O = it.init(this.clippingPlanes, N, e), u = et.get(t, p.length), u.init(), p.push(u), Tt(t, e, 0, f.sortObjects), u.finish(), !0 === f.sortObjects && u.sort(R, C), !0 === O && it.beginShadows(); const n = d.state.shadowsArray; if (rt.render(n, t, e), !0 === O && it.endShadows(), !0 === this.info.autoReset && this.info.reset(), st.render(u, t), d.setupLights(f.physicallyCorrectLights), e.isArrayCamera) { const n = e.cameras; for (let e = 0, i = n.length; e < i; e++) { const i = n[e];
                Et(u, t, i, i.viewport) } } else Et(u, t, e);
        null !== x && (X.updateMultisampleRenderTarget(x), X.updateRenderTargetMipmap(x)), !0 === t.isScene && t.onAfterRender(f, t, e), ct.resetDefaultState(), _ = -1, b = null, m.pop(), d = m.length > 0 ? m[m.length - 1] : null, p.pop(), u = p.length > 0 ? p[p.length - 1] : null }, this.getActiveCubeFace = function() { return v }, this.getActiveMipmapLevel = function() { return y }, this.getRenderTarget = function() { return x }, this.setRenderTargetTextures = function(t, e, n) { q.get(t.texture).__webglTexture = e, q.get(t.depthTexture).__webglTexture = n; const i = q.get(t);
        i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === V.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i.__useRenderToTexture = !1)) }, this.setRenderTargetFramebuffer = function(t, e) { const n = q.get(t);
        n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e }, this.setRenderTarget = function(t, e = 0, n = 0) { x = t, v = e, y = n; let i = !0; if (t) { const e = q.get(t);
            void 0 !== e.__useDefaultFramebuffer ? (W.bindFramebuffer(36160, null), i = !1) : void 0 === e.__webglFramebuffer ? X.setupRenderTarget(t) : e.__hasExternalTextures && X.rebindTextures(t, q.get(t.texture).__webglTexture, q.get(t.depthTexture).__webglTexture) } let r = null,
            s = !1,
            a = !1; if (t) { const n = t.texture;
            (n.isData3DTexture || n.isDataArrayTexture) && (a = !0); const i = q.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget ? (r = i[e], s = !0) : r = G.isWebGL2 && t.samples > 0 && !1 === X.useMultisampledRTT(t) ? q.get(t).__webglMultisampledFramebuffer : i, w.copy(t.viewport), M.copy(t.scissor), S = t.scissorTest } else w.copy(L).multiplyScalar(A).floor(), M.copy(P).multiplyScalar(A).floor(), S = D; if (W.bindFramebuffer(36160, r) && G.drawBuffers && i && W.drawBuffers(t, r), W.viewport(w), W.scissor(M), W.setScissorTest(S), s) { const i = q.get(t.texture);
            ut.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n) } else if (a) { const i = q.get(t.texture),
                r = e || 0;
            ut.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r) }
        _ = -1 }, this.readRenderTargetPixels = function(t, e, n, i, r, s, a) { if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let o = q.get(t).__webglFramebuffer; if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) { W.bindFramebuffer(36160, o); try { const a = t.texture,
                    o = a.format,
                    l = a.type; if (1023 !== o && ht.convert(o) !== ut.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); const h = 1016 === l && (V.has("EXT_color_buffer_half_float") || G.isWebGL2 && V.has("EXT_color_buffer_float")); if (!(1009 === l || ht.convert(l) === ut.getParameter(35738) || 1015 === l && (G.isWebGL2 || V.has("OES_texture_float") || V.has("WEBGL_color_buffer_float")) || h)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && ut.readPixels(e, n, i, r, ht.convert(o), ht.convert(l), s) } finally { const t = null !== x ? q.get(x).__webglFramebuffer : null;
                W.bindFramebuffer(36160, t) } } }, this.copyFramebufferToTexture = function(t, e, n = 0) { if (!0 !== e.isFramebufferTexture) return void console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."); const i = Math.pow(2, -n),
            r = Math.floor(e.image.width * i),
            s = Math.floor(e.image.height * i);
        X.setTexture2D(e, 0), ut.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, s), W.unbindTexture() }, this.copyTextureToTexture = function(t, e, n, i = 0) { const r = e.image.width,
            s = e.image.height,
            a = ht.convert(n.format),
            o = ht.convert(n.type);
        X.setTexture2D(n, 0), ut.pixelStorei(37440, n.flipY), ut.pixelStorei(37441, n.premultiplyAlpha), ut.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? ut.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? ut.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : ut.texSubImage2D(3553, i, t.x, t.y, a, o, e.image), 0 === i && n.generateMipmaps && ut.generateMipmap(3553), W.unbindTexture() }, this.copyTextureToTexture3D = function(t, e, n, i, r = 0) { if (f.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."); const s = t.max.x - t.min.x + 1,
            a = t.max.y - t.min.y + 1,
            o = t.max.z - t.min.z + 1,
            l = ht.convert(i.format),
            h = ht.convert(i.type); let c; if (i.isData3DTexture) X.setTexture3D(i, 0), c = 32879;
        else { if (!i.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            X.setTexture2DArray(i, 0), c = 35866 }
        ut.pixelStorei(37440, i.flipY), ut.pixelStorei(37441, i.premultiplyAlpha), ut.pixelStorei(3317, i.unpackAlignment); const u = ut.getParameter(3314),
            d = ut.getParameter(32878),
            p = ut.getParameter(3316),
            m = ut.getParameter(3315),
            g = ut.getParameter(32877),
            v = n.isCompressedTexture ? n.mipmaps[0] : n.image;
        ut.pixelStorei(3314, v.width), ut.pixelStorei(32878, v.height), ut.pixelStorei(3316, t.min.x), ut.pixelStorei(3315, t.min.y), ut.pixelStorei(32877, t.min.z), n.isDataTexture || n.isData3DTexture ? ut.texSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, h, v.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), ut.compressedTexSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, v.data)) : ut.texSubImage3D(c, r, e.x, e.y, e.z, s, a, o, l, h, v), ut.pixelStorei(3314, u), ut.pixelStorei(32878, d), ut.pixelStorei(3316, p), ut.pixelStorei(3315, m), ut.pixelStorei(32877, g), 0 === r && i.generateMipmaps && ut.generateMipmap(c), W.unbindTexture() }, this.initTexture = function(t) { X.setTexture2D(t, 0), W.unbindTexture() }, this.resetState = function() { v = 0, y = 0, x = null, W.reset(), ct.reset() }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) }
Ds.prototype.isWebGLRenderer = !0;
(class extends Ds {}).prototype.isWebGL1Renderer = !0;
class Is extends Ve { constructor() { super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) }
    copy(t, e) { return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this }
    toJSON(t) { const e = super.toJSON(t); return null !== this.fog && (e.object.fog = this.fog.toJSON()), e } }
Is.prototype.isScene = !0;
class Os { constructor(t, e) { this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = at() }
    onUploadCallback() {}
    set needsUpdate(t) {!0 === t && this.version++ }
    setUsage(t) { return this.usage = t, this }
    copy(t) { return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this }
    copyAt(t, e, n) { t *= this.stride, n *= e.stride; for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i]; return this }
    set(t, e = 0) { return this.array.set(t, e), this }
    clone(t) { void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = at()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
            n = new this.constructor(e, this.stride); return n.setUsage(this.usage), n }
    onUpload(t) { return this.onUploadCallback = t, this }
    toJSON(t) { return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = at()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } }
Os.prototype.isInterleavedBuffer = !0;
const Ns = new zt;
class Fs { constructor(t, e, n, i = !1) { this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i }
    get count() { return this.data.count }
    get array() { return this.data.array }
    set needsUpdate(t) { this.data.needsUpdate = t }
    applyMatrix4(t) { for (let e = 0, n = this.data.count; e < n; e++) Ns.fromBufferAttribute(this, e), Ns.applyMatrix4(t), this.setXYZ(e, Ns.x, Ns.y, Ns.z); return this }
    applyNormalMatrix(t) { for (let e = 0, n = this.count; e < n; e++) Ns.fromBufferAttribute(this, e), Ns.applyNormalMatrix(t), this.setXYZ(e, Ns.x, Ns.y, Ns.z); return this }
    transformDirection(t) { for (let e = 0, n = this.count; e < n; e++) Ns.fromBufferAttribute(this, e), Ns.transformDirection(t), this.setXYZ(e, Ns.x, Ns.y, Ns.z); return this }
    setX(t, e) { return this.data.array[t * this.data.stride + this.offset] = e, this }
    setY(t, e) { return this.data.array[t * this.data.stride + this.offset + 1] = e, this }
    setZ(t, e) { return this.data.array[t * this.data.stride + this.offset + 2] = e, this }
    setW(t, e) { return this.data.array[t * this.data.stride + this.offset + 3] = e, this }
    getX(t) { return this.data.array[t * this.data.stride + this.offset] }
    getY(t) { return this.data.array[t * this.data.stride + this.offset + 1] }
    getZ(t) { return this.data.array[t * this.data.stride + this.offset + 2] }
    getW(t) { return this.data.array[t * this.data.stride + this.offset + 3] }
    setXY(t, e, n) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this }
    setXYZ(t, e, n, i) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this }
    setXYZW(t, e, n, i, r) { return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this }
    clone(t) { if (void 0 === t) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."); const t = []; for (let e = 0; e < this.count; e++) { const n = e * this.data.stride + this.offset; for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]) } return new an(new this.array.constructor(t), this.itemSize, this.normalized) } return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Fs(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) }
    toJSON(t) { if (void 0 === t) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."); const t = []; for (let e = 0; e < this.count; e++) { const n = e * this.data.stride + this.offset; for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } }
Fs.prototype.isInterleavedBufferAttribute = !0;
class Us extends en { constructor(t) { super(), this.type = "SpriteMaterial", this.color = new Rt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t) }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this } }
let ks;
Us.prototype.isSpriteMaterial = !0;
const Bs = new zt,
    zs = new zt,
    Hs = new zt,
    Vs = new mt,
    Gs = new mt,
    Ws = new ve,
    js = new zt,
    qs = new zt,
    Xs = new zt,
    Ys = new mt,
    Js = new mt,
    Zs = new mt;

function $s(t, e, n, i, r, s) { Vs.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (Gs.x = s * Vs.x - r * Vs.y, Gs.y = r * Vs.x + s * Vs.y) : Gs.copy(Vs), t.copy(e), t.x += Gs.x, t.y += Gs.y, t.applyMatrix4(Ws) }(class extends Ve { constructor(t) { if (super(), this.type = "Sprite", void 0 === ks) { ks = new vn; const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                e = new Os(t, 5);
            ks.setIndex([0, 1, 2, 0, 2, 3]), ks.setAttribute("position", new Fs(e, 3, 0, !1)), ks.setAttribute("uv", new Fs(e, 2, 3, !1)) }
        this.geometry = ks, this.material = void 0 !== t ? t : new Us, this.center = new mt(.5, .5) }
    raycast(t, e) { null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), zs.setFromMatrixScale(this.matrixWorld), Ws.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Hs.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && zs.multiplyScalar(-Hs.z); const n = this.material.rotation; let i, r;
        0 !== n && (r = Math.cos(n), i = Math.sin(n)); const s = this.center;
        $s(js.set(-.5, -.5, 0), Hs, s, zs, i, r), $s(qs.set(.5, -.5, 0), Hs, s, zs, i, r), $s(Xs.set(.5, .5, 0), Hs, s, zs, i, r), Ys.set(0, 0), Js.set(1, 0), Zs.set(1, 1); let a = t.ray.intersectTriangle(js, qs, Xs, !1, Bs); if (null === a && ($s(qs.set(-.5, .5, 0), Hs, s, zs, i, r), Js.set(0, 1), a = t.ray.intersectTriangle(js, Xs, qs, !1, Bs), null === a)) return; const o = t.ray.origin.distanceTo(Bs);
        o < t.near || o > t.far || e.push({ distance: o, point: Bs.clone(), uv: Qe.getUV(Bs, js, qs, Xs, Ys, Js, Zs, new mt), face: null, object: this }) }
    copy(t) { return super.copy(t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this } }).prototype.isSprite = !0;
const Ks = new zt,
    Qs = new Nt,
    ta = new Nt,
    ea = new zt,
    na = new ve;
class ia extends Nn { constructor(t, e) { super(t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ve, this.bindMatrixInverse = new ve }
    copy(t) { return super.copy(t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this }
    bind(t, e) { this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert() }
    pose() { this.skeleton.pose() }
    normalizeSkinWeights() { const t = new Nt,
            e = this.geometry.attributes.skinWeight; for (let n = 0, i = e.count; n < i; n++) { t.fromBufferAttribute(e, n); const i = 1 / t.manhattanLength();
            i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w) } }
    updateMatrixWorld(t) { super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) }
    boneTransform(t, e) { const n = this.skeleton,
            i = this.geometry;
        Qs.fromBufferAttribute(i.attributes.skinIndex, t), ta.fromBufferAttribute(i.attributes.skinWeight, t), Ks.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0); for (let t = 0; t < 4; t++) { const i = ta.getComponent(t); if (0 !== i) { const r = Qs.getComponent(t);
                na.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(ea.copy(Ks).applyMatrix4(na), i) } } return e.applyMatrix4(this.bindMatrixInverse) } }
ia.prototype.isSkinnedMesh = !0;
class ra extends Ve { constructor() { super(), this.type = "Bone" } }
ra.prototype.isBone = !0;
class sa extends Ot { constructor(t = null, e = 1, n = 1, i, r, s, a, o, l = 1003, h = 1003, c, u) { super(null, s, a, o, l, h, i, r, c, u), this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }
sa.prototype.isDataTexture = !0;
const aa = new ve,
    oa = new ve;
class la { constructor(t = [], e = []) { this.uuid = at(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init() }
    init() { const t = this.bones,
            e = this.boneInverses; if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
        else if (t.length !== e.length) { console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = []; for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new ve) } }
    calculateInverses() { this.boneInverses.length = 0; for (let t = 0, e = this.bones.length; t < e; t++) { const e = new ve;
            this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e) } }
    pose() { for (let t = 0, e = this.bones.length; t < e; t++) { const e = this.bones[t];
            e && e.matrixWorld.copy(this.boneInverses[t]).invert() } for (let t = 0, e = this.bones.length; t < e; t++) { const e = this.bones[t];
            e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale)) } }
    update() { const t = this.bones,
            e = this.boneInverses,
            n = this.boneMatrices,
            i = this.boneTexture; for (let i = 0, r = t.length; i < r; i++) { const r = t[i] ? t[i].matrixWorld : oa;
            aa.multiplyMatrices(r, e[i]), aa.toArray(n, 16 * i) }
        null !== i && (i.needsUpdate = !0) }
    clone() { return new la(this.bones, this.boneInverses) }
    computeBoneTexture() { let t = Math.sqrt(4 * this.bones.length);
        t = ut(t), t = Math.max(t, 4); const e = new Float32Array(t * t * 4);
        e.set(this.boneMatrices); const n = new sa(e, t, t, 1023, 1015); return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t, this }
    getBoneByName(t) { for (let e = 0, n = this.bones.length; e < n; e++) { const n = this.bones[e]; if (n.name === t) return n } }
    dispose() { null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null) }
    fromJSON(t, e) { this.uuid = t.uuid; for (let n = 0, i = t.bones.length; n < i; n++) { const i = t.bones[n]; let r = e[i];
            void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new ra), this.bones.push(r), this.boneInverses.push((new ve).fromArray(t.boneInverses[n])) } return this.init(), this }
    toJSON() { const t = { metadata: { version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
        t.uuid = this.uuid; const e = this.bones,
            n = this.boneInverses; for (let i = 0, r = e.length; i < r; i++) { const r = e[i];
            t.bones.push(r.uuid); const s = n[i];
            t.boneInverses.push(s.toArray()) } return t } }
class ha extends an { constructor(t, e, n, i = 1) { "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, n), this.meshPerAttribute = i }
    copy(t) { return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this }
    toJSON() { const t = super.toJSON(); return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t } }
ha.prototype.isInstancedBufferAttribute = !0;
const ca = new ve,
    ua = new ve,
    da = [],
    pa = new Nn;
(class extends Nn { constructor(t, e, n) { super(t, e), this.instanceMatrix = new ha(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1 }
    copy(t) { return super.copy(t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this }
    getColorAt(t, e) { e.fromArray(this.instanceColor.array, 3 * t) }
    getMatrixAt(t, e) { e.fromArray(this.instanceMatrix.array, 16 * t) }
    raycast(t, e) { const n = this.matrixWorld,
            i = this.count; if (pa.geometry = this.geometry, pa.material = this.material, void 0 !== pa.material)
            for (let r = 0; r < i; r++) { this.getMatrixAt(r, ca), ua.multiplyMatrices(n, ca), pa.matrixWorld = ua, pa.raycast(t, da); for (let t = 0, n = da.length; t < n; t++) { const n = da[t];
                    n.instanceId = r, n.object = this, e.push(n) }
                da.length = 0 } }
    setColorAt(t, e) { null === this.instanceColor && (this.instanceColor = new ha(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t) }
    setMatrixAt(t, e) { e.toArray(this.instanceMatrix.array, 16 * t) }
    updateMorphTargets() {}
    dispose() { this.dispatchEvent({ type: "dispose" }) } }).prototype.isInstancedMesh = !0;
class ma extends en { constructor(t) { super(), this.type = "LineBasicMaterial", this.color = new Rt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(t) }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this } }
ma.prototype.isLineBasicMaterial = !0;
const fa = new zt,
    ga = new zt,
    va = new ve,
    ya = new ge,
    xa = new le;
class _a extends Ve { constructor(t = new vn, e = new ma) { super(), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets() }
    copy(t) { return super.copy(t), this.material = t.material, this.geometry = t.geometry, this }
    computeLineDistances() { const t = this.geometry; if (t.isBufferGeometry)
            if (null === t.index) { const e = t.attributes.position,
                    n = [0]; for (let t = 1, i = e.count; t < i; t++) fa.fromBufferAttribute(e, t - 1), ga.fromBufferAttribute(e, t), n[t] = n[t - 1], n[t] += fa.distanceTo(ga);
                t.setAttribute("lineDistance", new hn(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); return this }
    raycast(t, e) { const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Line.threshold,
            s = n.drawRange; if (null === n.boundingSphere && n.computeBoundingSphere(), xa.copy(n.boundingSphere), xa.applyMatrix4(i), xa.radius += r, !1 === t.ray.intersectsSphere(xa)) return;
        va.copy(i).invert(), ya.copy(t.ray).applyMatrix4(va); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = new zt,
            h = new zt,
            c = new zt,
            u = new zt,
            d = this.isLineSegments ? 2 : 1; if (n.isBufferGeometry) { const i = n.index,
                r = n.attributes.position; if (null !== i) { for (let n = Math.max(0, s.start), a = Math.min(i.count, s.start + s.count) - 1; n < a; n += d) { const s = i.getX(n),
                        a = i.getX(n + 1);
                    l.fromBufferAttribute(r, s), h.fromBufferAttribute(r, a); if (ya.distanceSqToSegment(l, h, u, c) > o) continue;
                    u.applyMatrix4(this.matrixWorld); const d = t.ray.origin.distanceTo(u);
                    d < t.near || d > t.far || e.push({ distance: d, point: c.clone().applyMatrix4(this.matrixWorld), index: n, face: null, faceIndex: null, object: this }) } } else { for (let n = Math.max(0, s.start), i = Math.min(r.count, s.start + s.count) - 1; n < i; n += d) { l.fromBufferAttribute(r, n), h.fromBufferAttribute(r, n + 1); if (ya.distanceSqToSegment(l, h, u, c) > o) continue;
                    u.applyMatrix4(this.matrixWorld); const i = t.ray.origin.distanceTo(u);
                    i < t.near || i > t.far || e.push({ distance: i, point: c.clone().applyMatrix4(this.matrixWorld), index: n, face: null, faceIndex: null, object: this }) } } } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") }
    updateMorphTargets() { const t = this.geometry; if (t.isBufferGeometry) { const e = t.morphAttributes,
                n = Object.keys(e); if (n.length > 0) { const t = e[n[0]]; if (void 0 !== t) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let e = 0, n = t.length; e < n; e++) { const n = t[e].name || String(e);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e } } } } else { const e = t.morphTargets;
            void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.") } } }
_a.prototype.isLine = !0;
const ba = new zt,
    wa = new zt;
class Ma extends _a { constructor(t, e) { super(t, e), this.type = "LineSegments" }
    computeLineDistances() { const t = this.geometry; if (t.isBufferGeometry)
            if (null === t.index) { const e = t.attributes.position,
                    n = []; for (let t = 0, i = e.count; t < i; t += 2) ba.fromBufferAttribute(e, t), wa.fromBufferAttribute(e, t + 1), n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + ba.distanceTo(wa);
                t.setAttribute("lineDistance", new hn(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."); return this } }
Ma.prototype.isLineSegments = !0;
class Sa extends _a { constructor(t, e) { super(t, e), this.type = "LineLoop" } }
Sa.prototype.isLineLoop = !0;
class Ta extends en { constructor(t) { super(), this.type = "PointsMaterial", this.color = new Rt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(t) }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this } }
Ta.prototype.isPointsMaterial = !0;
const Ea = new ve,
    Aa = new ge,
    Ra = new le,
    Ca = new zt;
class La extends Ve { constructor(t = new vn, e = new Ta) { super(), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets() }
    copy(t) { return super.copy(t), this.material = t.material, this.geometry = t.geometry, this }
    raycast(t, e) { const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Points.threshold,
            s = n.drawRange; if (null === n.boundingSphere && n.computeBoundingSphere(), Ra.copy(n.boundingSphere), Ra.applyMatrix4(i), Ra.radius += r, !1 === t.ray.intersectsSphere(Ra)) return;
        Ea.copy(i).invert(), Aa.copy(t.ray).applyMatrix4(Ea); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a; if (n.isBufferGeometry) { const r = n.index,
                a = n.attributes.position; if (null !== r) { for (let n = Math.max(0, s.start), l = Math.min(r.count, s.start + s.count); n < l; n++) { const s = r.getX(n);
                    Ca.fromBufferAttribute(a, s), Pa(Ca, s, o, i, t, e, this) } } else { for (let n = Math.max(0, s.start), r = Math.min(a.count, s.start + s.count); n < r; n++) Ca.fromBufferAttribute(a, n), Pa(Ca, n, o, i, t, e, this) } } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.") }
    updateMorphTargets() { const t = this.geometry; if (t.isBufferGeometry) { const e = t.morphAttributes,
                n = Object.keys(e); if (n.length > 0) { const t = e[n[0]]; if (void 0 !== t) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let e = 0, n = t.length; e < n; e++) { const n = t[e].name || String(e);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e } } } } else { const e = t.morphTargets;
            void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.") } } }

function Pa(t, e, n, i, r, s, a) { const o = Aa.distanceSqToPoint(t); if (o < n) { const n = new zt;
        Aa.closestPointToPoint(t, n), n.applyMatrix4(i); const l = r.ray.origin.distanceTo(n); if (l < r.near || l > r.far) return;
        s.push({ distance: l, distanceToRay: Math.sqrt(o), point: n, index: e, face: null, object: a }) } }
La.prototype.isPoints = !0;
(class extends Ot { constructor(t, e, n, i, r, s, a, o, l) { super(t, e, n, i, r, s, a, o, l), this.minFilter = void 0 !== s ? s : 1006, this.magFilter = void 0 !== r ? r : 1006, this.generateMipmaps = !1; const h = this; "requestVideoFrameCallback" in t && t.requestVideoFrameCallback((function e() { h.needsUpdate = !0, t.requestVideoFrameCallback(e) })) }
    clone() { return new this.constructor(this.image).copy(this) }
    update() { const t = this.image;!1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0) } }).prototype.isVideoTexture = !0;
(class extends Ot { constructor(t, e, n) { super({ width: t, height: e }), this.format = n, this.magFilter = 1003, this.minFilter = 1003, this.generateMipmaps = !1, this.needsUpdate = !0 } }).prototype.isFramebufferTexture = !0;
class Da extends Ot { constructor(t, e, n, i, r, s, a, o, l, h, c, u) { super(null, s, a, o, l, h, i, r, c, u), this.image = { width: e, height: n }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1 } }
Da.prototype.isCompressedTexture = !0;
(class extends Ot { constructor(t, e, n, i, r, s, a, o, l) { super(t, e, n, i, r, s, a, o, l), this.needsUpdate = !0 } }).prototype.isCanvasTexture = !0;
class Ia { constructor() { this.type = "Curve", this.arcLengthDivisions = 200 }
    getPoint() { return console.warn("THREE.Curve: .getPoint() not implemented."), null }
    getPointAt(t, e) { const n = this.getUtoTmapping(t); return this.getPoint(n, e) }
    getPoints(t = 5) { const e = []; for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t)); return e }
    getSpacedPoints(t = 5) { const e = []; for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t)); return e }
    getLength() { const t = this.getLengths(); return t[t.length - 1] }
    getLengths(t = this.arcLengthDivisions) { if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1; const e = []; let n, i = this.getPoint(0),
            r = 0;
        e.push(0); for (let s = 1; s <= t; s++) n = this.getPoint(s / t), r += n.distanceTo(i), e.push(r), i = n; return this.cacheArcLengths = e, e }
    updateArcLengths() { this.needsUpdate = !0, this.getLengths() }
    getUtoTmapping(t, e) { const n = this.getLengths(); let i = 0; const r = n.length; let s;
        s = e || t * n[r - 1]; let a, o = 0,
            l = r - 1; for (; o <= l;)
            if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;
            else { if (!(a > 0)) { l = i; break }
                l = i - 1 }
        if (i = l, n[i] === s) return i / (r - 1); const h = n[i]; return (i + (s - h) / (n[i + 1] - h)) / (r - 1) }
    getTangent(t, e) { const n = 1e-4; let i = t - n,
            r = t + n;
        i < 0 && (i = 0), r > 1 && (r = 1); const s = this.getPoint(i),
            a = this.getPoint(r),
            o = e || (s.isVector2 ? new mt : new zt); return o.copy(a).sub(s).normalize(), o }
    getTangentAt(t, e) { const n = this.getUtoTmapping(t); return this.getTangent(n, e) }
    computeFrenetFrames(t, e) { const n = new zt,
            i = [],
            r = [],
            s = [],
            a = new zt,
            o = new ve; for (let e = 0; e <= t; e++) { const n = e / t;
            i[e] = this.getTangentAt(n, new zt) }
        r[0] = new zt, s[0] = new zt; let l = Number.MAX_VALUE; const h = Math.abs(i[0].x),
            c = Math.abs(i[0].y),
            u = Math.abs(i[0].z);
        h <= l && (l = h, n.set(1, 0, 0)), c <= l && (l = c, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]); for (let e = 1; e <= t; e++) { if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(i[e - 1], i[e]), a.length() > Number.EPSILON) { a.normalize(); const t = Math.acos(ot(i[e - 1].dot(i[e]), -1, 1));
                r[e].applyMatrix4(o.makeRotationAxis(a, t)) }
            s[e].crossVectors(i[e], r[e]) } if (!0 === e) { let e = Math.acos(ot(r[0].dot(r[t]), -1, 1));
            e /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e); for (let n = 1; n <= t; n++) r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n]) } return { tangents: i, normals: r, binormals: s } }
    clone() { return (new this.constructor).copy(this) }
    copy(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this }
    toJSON() { const t = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t }
    fromJSON(t) { return this.arcLengthDivisions = t.arcLengthDivisions, this } }
class Oa extends Ia { constructor(t = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0) { super(), this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o }
    getPoint(t, e) { const n = e || new mt,
            i = 2 * Math.PI; let r = this.aEndAngle - this.aStartAngle; const s = Math.abs(r) < Number.EPSILON; for (; r < 0;) r += i; for (; r > i;) r -= i;
        r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i); const a = this.aStartAngle + t * r; let o = this.aX + this.xRadius * Math.cos(a),
            l = this.aY + this.yRadius * Math.sin(a); if (0 !== this.aRotation) { const t = Math.cos(this.aRotation),
                e = Math.sin(this.aRotation),
                n = o - this.aX,
                i = l - this.aY;
            o = n * t - i * e + this.aX, l = n * e + i * t + this.aY } return n.set(o, l) }
    copy(t) { return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this }
    toJSON() { const t = super.toJSON(); return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t }
    fromJSON(t) { return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this } }
Oa.prototype.isEllipseCurve = !0;
class Na extends Oa { constructor(t, e, n, i, r, s) { super(t, e, n, n, i, r, s), this.type = "ArcCurve" } }

function Fa() { let t = 0,
        e = 0,
        n = 0,
        i = 0;

    function r(r, s, a, o) { t = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o } return { initCatmullRom: function(t, e, n, i, s) { r(e, n, s * (n - t), s * (i - e)) }, initNonuniformCatmullRom: function(t, e, n, i, s, a, o) { let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
                h = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
            l *= a, h *= a, r(e, n, l, h) }, calc: function(r) { const s = r * r; return t + e * r + n * s + i * (s * r) } } }
Na.prototype.isArcCurve = !0;
const Ua = new zt,
    ka = new Fa,
    Ba = new Fa,
    za = new Fa;
class Ha extends Ia { constructor(t = [], e = !1, n = "centripetal", i = .5) { super(), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i }
    getPoint(t, e = new zt) { const n = e,
            i = this.points,
            r = i.length,
            s = (r - (this.closed ? 0 : 1)) * t; let a, o, l = Math.floor(s),
            h = s - l;
        this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === h && l === r - 1 && (l = r - 2, h = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (Ua.subVectors(i[0], i[1]).add(i[0]), a = Ua); const c = i[l % r],
            u = i[(l + 1) % r]; if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (Ua.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = Ua), "centripetal" === this.curveType || "chordal" === this.curveType) { const t = "chordal" === this.curveType ? .5 : .25; let e = Math.pow(a.distanceToSquared(c), t),
                n = Math.pow(c.distanceToSquared(u), t),
                i = Math.pow(u.distanceToSquared(o), t);
            n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), ka.initNonuniformCatmullRom(a.x, c.x, u.x, o.x, e, n, i), Ba.initNonuniformCatmullRom(a.y, c.y, u.y, o.y, e, n, i), za.initNonuniformCatmullRom(a.z, c.z, u.z, o.z, e, n, i) } else "catmullrom" === this.curveType && (ka.initCatmullRom(a.x, c.x, u.x, o.x, this.tension), Ba.initCatmullRom(a.y, c.y, u.y, o.y, this.tension), za.initCatmullRom(a.z, c.z, u.z, o.z, this.tension)); return n.set(ka.calc(h), Ba.calc(h), za.calc(h)), n }
    copy(t) { super.copy(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { const n = t.points[e];
            this.points.push(n.clone()) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this }
    toJSON() { const t = super.toJSON();
        t.points = []; for (let e = 0, n = this.points.length; e < n; e++) { const n = this.points[e];
            t.points.push(n.toArray()) } return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t }
    fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { const n = t.points[e];
            this.points.push((new zt).fromArray(n)) } return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this } }

function Va(t, e, n, i, r) { const s = .5 * (i - e),
        a = .5 * (r - n),
        o = t * t; return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n }

function Ga(t, e, n, i) { return function(t, e) { const n = 1 - t; return n * n * e }(t, e) + function(t, e) { return 2 * (1 - t) * t * e }(t, n) + function(t, e) { return t * t * e }(t, i) }

function Wa(t, e, n, i, r) { return function(t, e) { const n = 1 - t; return n * n * n * e }(t, e) + function(t, e) { const n = 1 - t; return 3 * n * n * t * e }(t, n) + function(t, e) { return 3 * (1 - t) * t * t * e }(t, i) + function(t, e) { return t * t * t * e }(t, r) }
Ha.prototype.isCatmullRomCurve3 = !0;
class ja extends Ia { constructor(t = new mt, e = new mt, n = new mt, i = new mt) { super(), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i }
    getPoint(t, e = new mt) { const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3; return n.set(Wa(t, i.x, r.x, s.x, a.x), Wa(t, i.y, r.y, s.y, a.y)), n }
    copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this }
    toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t }
    fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this } }
ja.prototype.isCubicBezierCurve = !0;
class qa extends Ia { constructor(t = new zt, e = new zt, n = new zt, i = new zt) { super(), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i }
    getPoint(t, e = new zt) { const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3; return n.set(Wa(t, i.x, r.x, s.x, a.x), Wa(t, i.y, r.y, s.y, a.y), Wa(t, i.z, r.z, s.z, a.z)), n }
    copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this }
    toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t }
    fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this } }
qa.prototype.isCubicBezierCurve3 = !0;
class Xa extends Ia { constructor(t = new mt, e = new mt) { super(), this.type = "LineCurve", this.v1 = t, this.v2 = e }
    getPoint(t, e = new mt) { const n = e; return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n }
    getPointAt(t, e) { return this.getPoint(t, e) }
    getTangent(t, e) { const n = e || new mt; return n.copy(this.v2).sub(this.v1).normalize(), n }
    copy(t) { return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this }
    toJSON() { const t = super.toJSON(); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }
    fromJSON(t) { return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this } }
Xa.prototype.isLineCurve = !0;
class Ya extends Ia { constructor(t = new mt, e = new mt, n = new mt) { super(), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n }
    getPoint(t, e = new mt) { const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2; return n.set(Ga(t, i.x, r.x, s.x), Ga(t, i.y, r.y, s.y)), n }
    copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this }
    toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }
    fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this } }
Ya.prototype.isQuadraticBezierCurve = !0;
class Ja extends Ia { constructor(t = new zt, e = new zt, n = new zt) { super(), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n }
    getPoint(t, e = new zt) { const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2; return n.set(Ga(t, i.x, r.x, s.x), Ga(t, i.y, r.y, s.y), Ga(t, i.z, r.z, s.z)), n }
    copy(t) { return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this }
    toJSON() { const t = super.toJSON(); return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }
    fromJSON(t) { return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this } }
Ja.prototype.isQuadraticBezierCurve3 = !0;
class Za extends Ia { constructor(t = []) { super(), this.type = "SplineCurve", this.points = t }
    getPoint(t, e = new mt) { const n = e,
            i = this.points,
            r = (i.length - 1) * t,
            s = Math.floor(r),
            a = r - s,
            o = i[0 === s ? s : s - 1],
            l = i[s],
            h = i[s > i.length - 2 ? i.length - 1 : s + 1],
            c = i[s > i.length - 3 ? i.length - 1 : s + 2]; return n.set(Va(a, o.x, l.x, h.x, c.x), Va(a, o.y, l.y, h.y, c.y)), n }
    copy(t) { super.copy(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { const n = t.points[e];
            this.points.push(n.clone()) } return this }
    toJSON() { const t = super.toJSON();
        t.points = []; for (let e = 0, n = this.points.length; e < n; e++) { const n = this.points[e];
            t.points.push(n.toArray()) } return t }
    fromJSON(t) { super.fromJSON(t), this.points = []; for (let e = 0, n = t.points.length; e < n; e++) { const n = t.points[e];
            this.points.push((new mt).fromArray(n)) } return this } }
Za.prototype.isSplineCurve = !0;
var $a = Object.freeze({ __proto__: null, ArcCurve: Na, CatmullRomCurve3: Ha, CubicBezierCurve: ja, CubicBezierCurve3: qa, EllipseCurve: Oa, LineCurve: Xa, LineCurve3: class extends Ia { constructor(t = new zt, e = new zt) { super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = t, this.v2 = e }
        getPoint(t, e = new zt) { const n = e; return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n }
        getPointAt(t, e) { return this.getPoint(t, e) }
        copy(t) { return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this }
        toJSON() { const t = super.toJSON(); return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t }
        fromJSON(t) { return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this } }, QuadraticBezierCurve: Ya, QuadraticBezierCurve3: Ja, SplineCurve: Za });
class Ka extends Ia { constructor() { super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1 }
    add(t) { this.curves.push(t) }
    closePath() { const t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
        t.equals(e) || this.curves.push(new Xa(e, t)) }
    getPoint(t, e) { const n = t * this.getLength(),
            i = this.getCurveLengths(); let r = 0; for (; r < i.length;) { if (i[r] >= n) { const t = i[r] - n,
                    s = this.curves[r],
                    a = s.getLength(),
                    o = 0 === a ? 0 : 1 - t / a; return s.getPointAt(o, e) }
            r++ } return null }
    getLength() { const t = this.getCurveLengths(); return t[t.length - 1] }
    updateArcLengths() { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths() }
    getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; const t = []; let e = 0; for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e); return this.cacheLengths = t, t }
    getSpacedPoints(t = 40) { const e = []; for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t)); return this.autoClose && e.push(e[0]), e }
    getPoints(t = 12) { const e = []; let n; for (let i = 0, r = this.curves; i < r.length; i++) { const s = r[i],
                a = s.isEllipseCurve ? 2 * t : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t * s.points.length : t,
                o = s.getPoints(a); for (let t = 0; t < o.length; t++) { const i = o[t];
                n && n.equals(i) || (e.push(i), n = i) } } return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e }
    copy(t) { super.copy(t), this.curves = []; for (let e = 0, n = t.curves.length; e < n; e++) { const n = t.curves[e];
            this.curves.push(n.clone()) } return this.autoClose = t.autoClose, this }
    toJSON() { const t = super.toJSON();
        t.autoClose = this.autoClose, t.curves = []; for (let e = 0, n = this.curves.length; e < n; e++) { const n = this.curves[e];
            t.curves.push(n.toJSON()) } return t }
    fromJSON(t) { super.fromJSON(t), this.autoClose = t.autoClose, this.curves = []; for (let e = 0, n = t.curves.length; e < n; e++) { const n = t.curves[e];
            this.curves.push((new $a[n.type]).fromJSON(n)) } return this } }
class Qa extends Ka { constructor(t) { super(), this.type = "Path", this.currentPoint = new mt, t && this.setFromPoints(t) }
    setFromPoints(t) { this.moveTo(t[0].x, t[0].y); for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y); return this }
    moveTo(t, e) { return this.currentPoint.set(t, e), this }
    lineTo(t, e) { const n = new Xa(this.currentPoint.clone(), new mt(t, e)); return this.curves.push(n), this.currentPoint.set(t, e), this }
    quadraticCurveTo(t, e, n, i) { const r = new Ya(this.currentPoint.clone(), new mt(t, e), new mt(n, i)); return this.curves.push(r), this.currentPoint.set(n, i), this }
    bezierCurveTo(t, e, n, i, r, s) { const a = new ja(this.currentPoint.clone(), new mt(t, e), new mt(n, i), new mt(r, s)); return this.curves.push(a), this.currentPoint.set(r, s), this }
    splineThru(t) { const e = [this.currentPoint.clone()].concat(t),
            n = new Za(e); return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this }
    arc(t, e, n, i, r, s) { const a = this.currentPoint.x,
            o = this.currentPoint.y; return this.absarc(t + a, e + o, n, i, r, s), this }
    absarc(t, e, n, i, r, s) { return this.absellipse(t, e, n, n, i, r, s), this }
    ellipse(t, e, n, i, r, s, a, o) { const l = this.currentPoint.x,
            h = this.currentPoint.y; return this.absellipse(t + l, e + h, n, i, r, s, a, o), this }
    absellipse(t, e, n, i, r, s, a, o) { const l = new Oa(t, e, n, i, r, s, a, o); if (this.curves.length > 0) { const t = l.getPoint(0);
            t.equals(this.currentPoint) || this.lineTo(t.x, t.y) }
        this.curves.push(l); const h = l.getPoint(1); return this.currentPoint.copy(h), this }
    copy(t) { return super.copy(t), this.currentPoint.copy(t.currentPoint), this }
    toJSON() { const t = super.toJSON(); return t.currentPoint = this.currentPoint.toArray(), t }
    fromJSON(t) { return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this } }
new zt, new zt, new zt, new Qe;
class to extends Qa { constructor(t) { super(t), this.uuid = at(), this.type = "Shape", this.holes = [] }
    getPointsHoles(t) { const e = []; for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t); return e }
    extractPoints(t) { return { shape: this.getPoints(t), holes: this.getPointsHoles(t) } }
    copy(t) { super.copy(t), this.holes = []; for (let e = 0, n = t.holes.length; e < n; e++) { const n = t.holes[e];
            this.holes.push(n.clone()) } return this }
    toJSON() { const t = super.toJSON();
        t.uuid = this.uuid, t.holes = []; for (let e = 0, n = this.holes.length; e < n; e++) { const n = this.holes[e];
            t.holes.push(n.toJSON()) } return t }
    fromJSON(t) { super.fromJSON(t), this.uuid = t.uuid, this.holes = []; for (let e = 0, n = t.holes.length; e < n; e++) { const n = t.holes[e];
            this.holes.push((new Qa).fromJSON(n)) } return this } }
const eo = function(t, e, n = 2) { const i = e && e.length,
        r = i ? e[0] * n : t.length; let s = no(t, 0, r, n, !0); const a = []; if (!s || s.next === s.prev) return a; let o, l, h, c, u, d, p; if (i && (s = function(t, e, n, i) { const r = []; let s, a, o, l, h; for (s = 0, a = e.length; s < a; s++) o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t.length, h = no(t, o, l, i, !1), h === h.next && (h.steiner = !0), r.push(mo(h)); for (r.sort(ho), s = 0; s < r.length; s++) co(r[s], n), n = io(n, n.next); return n }(t, e, s, n)), t.length > 80 * n) { o = h = t[0], l = c = t[1]; for (let e = n; e < r; e += n) u = t[e], d = t[e + 1], u < o && (o = u), d < l && (l = d), u > h && (h = u), d > c && (c = d);
        p = Math.max(h - o, c - l), p = 0 !== p ? 1 / p : 0 } return ro(s, a, n, o, l, p), a };

function no(t, e, n, i, r) { let s, a; if (r === function(t, e, n, i) { let r = 0; for (let s = e, a = n - i; s < n; s += i) r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s; return r }(t, e, n, i) > 0)
        for (s = e; s < n; s += i) a = So(s, t[s], t[s + 1], a);
    else
        for (s = n - i; s >= e; s -= i) a = So(s, t[s], t[s + 1], a); return a && yo(a, a.next) && (To(a), a = a.next), a }

function io(t, e) { if (!t) return t;
    e || (e = t); let n, i = t;
    do { if (n = !1, i.steiner || !yo(i, i.next) && 0 !== vo(i.prev, i, i.next)) i = i.next;
        else { if (To(i), i = e = i.prev, i === i.next) break;
            n = !0 } } while (n || i !== e); return e }

function ro(t, e, n, i, r, s, a) { if (!t) return;!a && s && function(t, e, n, i) { let r = t;
        do { null === r.z && (r.z = po(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next } while (r !== t);
        r.prevZ.nextZ = null, r.prevZ = null,
            function(t) { let e, n, i, r, s, a, o, l, h = 1;
                do { for (n = t, t = null, s = null, a = 0; n;) { for (a++, i = n, o = 0, e = 0; e < h && (o++, i = i.nextZ, i); e++); for (l = h; o > 0 || l > 0 && i;) 0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
                        n = i }
                    s.nextZ = null, h *= 2 } while (a > 1) }(r) }(t, i, r, s); let o, l, h = t; for (; t.prev !== t.next;)
        if (o = t.prev, l = t.next, s ? ao(t, i, r, s) : so(t)) e.push(o.i / n), e.push(t.i / n), e.push(l.i / n), To(t), t = l.next, h = l.next;
        else if ((t = l) === h) { a ? 1 === a ? ro(t = oo(io(t), e, n), e, n, i, r, s, 2) : 2 === a && lo(t, e, n, i, r, s) : ro(io(t), e, n, i, r, s, 1); break } }

function so(t) { const e = t.prev,
        n = t,
        i = t.next; if (vo(e, n, i) >= 0) return !1; let r = t.next.next; for (; r !== t.prev;) { if (fo(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && vo(r.prev, r, r.next) >= 0) return !1;
        r = r.next } return !0 }

function ao(t, e, n, i) { const r = t.prev,
        s = t,
        a = t.next; if (vo(r, s, a) >= 0) return !1; const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x,
        l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y,
        h = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x,
        c = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y,
        u = po(o, l, e, n, i),
        d = po(h, c, e, n, i); let p = t.prevZ,
        m = t.nextZ; for (; p && p.z >= u && m && m.z <= d;) { if (p !== t.prev && p !== t.next && fo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && vo(p.prev, p, p.next) >= 0) return !1; if (p = p.prevZ, m !== t.prev && m !== t.next && fo(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && vo(m.prev, m, m.next) >= 0) return !1;
        m = m.nextZ } for (; p && p.z >= u;) { if (p !== t.prev && p !== t.next && fo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && vo(p.prev, p, p.next) >= 0) return !1;
        p = p.prevZ } for (; m && m.z <= d;) { if (m !== t.prev && m !== t.next && fo(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && vo(m.prev, m, m.next) >= 0) return !1;
        m = m.nextZ } return !0 }

function oo(t, e, n) { let i = t;
    do { const r = i.prev,
            s = i.next.next;!yo(r, s) && xo(r, i, i.next, s) && wo(r, s) && wo(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), To(i), To(i.next), i = t = s), i = i.next } while (i !== t); return io(i) }

function lo(t, e, n, i, r, s) { let a = t;
    do { let t = a.next.next; for (; t !== a.prev;) { if (a.i !== t.i && go(a, t)) { let o = Mo(a, t); return a = io(a, a.next), o = io(o, o.next), ro(a, e, n, i, r, s), void ro(o, e, n, i, r, s) }
            t = t.next }
        a = a.next } while (a !== t) }

function ho(t, e) { return t.x - e.x }

function co(t, e) { if (e = function(t, e) { let n = e; const i = t.x,
                r = t.y; let s, a = -1 / 0;
            do { if (r <= n.y && r >= n.next.y && n.next.y !== n.y) { const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y); if (t <= i && t > a) { if (a = t, t === i) { if (r === n.y) return n; if (r === n.next.y) return n.next }
                        s = n.x < n.next.x ? n : n.next } }
                n = n.next } while (n !== e); if (!s) return null; if (i === a) return s; const o = s,
                l = s.x,
                h = s.y; let c, u = 1 / 0;
            n = s;
            do { i >= n.x && n.x >= l && i !== n.x && fo(r < h ? i : a, r, l, h, r < h ? a : i, r, n.x, n.y) && (c = Math.abs(r - n.y) / (i - n.x), wo(n, t) && (c < u || c === u && (n.x > s.x || n.x === s.x && uo(s, n))) && (s = n, u = c)), n = n.next } while (n !== o); return s }(t, e), e) { const n = Mo(e, t);
        io(e, e.next), io(n, n.next) } }

function uo(t, e) { return vo(t.prev, t, e.prev) < 0 && vo(e.next, t, t.next) < 0 }

function po(t, e, n, i, r) { return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1 }

function mo(t) { let e = t,
        n = t;
    do {
        (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next } while (e !== t); return n }

function fo(t, e, n, i, r, s, a, o) { return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0 }

function go(t, e) { return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) { let n = t;
        do { if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && xo(n, n.next, t, e)) return !0;
            n = n.next } while (n !== t); return !1 }(t, e) && (wo(t, e) && wo(e, t) && function(t, e) { let n = t,
            i = !1; const r = (t.x + e.x) / 2,
            s = (t.y + e.y) / 2;
        do { n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next } while (n !== t); return i }(t, e) && (vo(t.prev, t, e.prev) || vo(t, e.prev, e)) || yo(t, e) && vo(t.prev, t, t.next) > 0 && vo(e.prev, e, e.next) > 0) }

function vo(t, e, n) { return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y) }

function yo(t, e) { return t.x === e.x && t.y === e.y }

function xo(t, e, n, i) { const r = bo(vo(t, e, n)),
        s = bo(vo(t, e, i)),
        a = bo(vo(n, i, t)),
        o = bo(vo(n, i, e)); return r !== s && a !== o || (!(0 !== r || !_o(t, n, e)) || (!(0 !== s || !_o(t, i, e)) || (!(0 !== a || !_o(n, t, i)) || !(0 !== o || !_o(n, e, i))))) }

function _o(t, e, n) { return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y) }

function bo(t) { return t > 0 ? 1 : t < 0 ? -1 : 0 }

function wo(t, e) { return vo(t.prev, t, t.next) < 0 ? vo(t, e, t.next) >= 0 && vo(t, t.prev, e) >= 0 : vo(t, e, t.prev) < 0 || vo(t, t.next, e) < 0 }

function Mo(t, e) { const n = new Eo(t.i, t.x, t.y),
        i = new Eo(e.i, e.x, e.y),
        r = t.next,
        s = e.prev; return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i }

function So(t, e, n, i) { const r = new Eo(t, e, n); return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r }

function To(t) { t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ) }

function Eo(t, e, n) { this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1 }
class Ao { static area(t) { const e = t.length; let n = 0; for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y; return .5 * n }
    static isClockWise(t) { return Ao.area(t) < 0 }
    static triangulateShape(t, e) { const n = [],
            i = [],
            r = [];
        Ro(t), Co(n, t); let s = t.length;
        e.forEach(Ro); for (let t = 0; t < e.length; t++) i.push(s), s += e[t].length, Co(n, e[t]); const a = eo(n, i); for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3)); return r } }

function Ro(t) { const e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop() }

function Co(t, e) { for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y) }
class Lo extends vn { constructor(t = new to([new mt(.5, .5), new mt(-.5, .5), new mt(-.5, -.5), new mt(.5, -.5)]), e = {}) { super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t]; const n = this,
            i = [],
            r = []; for (let e = 0, n = t.length; e < n; e++) { s(t[e]) }

        function s(t) { const s = [],
                a = void 0 !== e.curveSegments ? e.curveSegments : 12,
                o = void 0 !== e.steps ? e.steps : 1; let l = void 0 !== e.depth ? e.depth : 1,
                h = void 0 === e.bevelEnabled || e.bevelEnabled,
                c = void 0 !== e.bevelThickness ? e.bevelThickness : .2,
                u = void 0 !== e.bevelSize ? e.bevelSize : c - .1,
                d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
                p = void 0 !== e.bevelSegments ? e.bevelSegments : 3; const m = e.extrudePath,
                f = void 0 !== e.UVGenerator ? e.UVGenerator : Po;
            void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount); let g, v, y, x, _, b = !1;
            m && (g = m.getSpacedPoints(o), b = !0, h = !1, v = m.computeFrenetFrames(o, !1), y = new zt, x = new zt, _ = new zt), h || (p = 0, c = 0, u = 0, d = 0); const w = t.extractPoints(a); let M = w.shape; const S = w.holes; if (!Ao.isClockWise(M)) { M = M.reverse(); for (let t = 0, e = S.length; t < e; t++) { const e = S[t];
                    Ao.isClockWise(e) && (S[t] = e.reverse()) } } const T = Ao.triangulateShape(M, S),
                E = M; for (let t = 0, e = S.length; t < e; t++) { const e = S[t];
                M = M.concat(e) }

            function A(t, e, n) { return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t) } const R = M.length,
                C = T.length;

            function L(t, e, n) { let i, r, s; const a = t.x - e.x,
                    o = t.y - e.y,
                    l = n.x - t.x,
                    h = n.y - t.y,
                    c = a * a + o * o,
                    u = a * h - o * l; if (Math.abs(u) > Number.EPSILON) { const u = Math.sqrt(c),
                        d = Math.sqrt(l * l + h * h),
                        p = e.x - o / u,
                        m = e.y + a / u,
                        f = ((n.x - h / d - p) * h - (n.y + l / d - m) * l) / (a * h - o * l);
                    i = p + a * f - t.x, r = m + o * f - t.y; const g = i * i + r * r; if (g <= 2) return new mt(i, r);
                    s = Math.sqrt(g / 2) } else { let t = !1;
                    a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(h) && (t = !0), t ? (i = -o, r = a, s = Math.sqrt(c)) : (i = a, r = o, s = Math.sqrt(c / 2)) } return new mt(i / s, r / s) } const P = []; for (let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++, n++, i++) n === e && (n = 0), i === e && (i = 0), P[t] = L(E[t], E[n], E[i]); const D = []; let I, O = P.concat(); for (let t = 0, e = S.length; t < e; t++) { const e = S[t];
                I = []; for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++) i === n && (i = 0), r === n && (r = 0), I[t] = L(e[t], e[i], e[r]);
                D.push(I), O = O.concat(I) } for (let t = 0; t < p; t++) { const e = t / p,
                    n = c * Math.cos(e * Math.PI / 2),
                    i = u * Math.sin(e * Math.PI / 2) + d; for (let t = 0, e = E.length; t < e; t++) { const e = A(E[t], P[t], i);
                    U(e.x, e.y, -n) } for (let t = 0, e = S.length; t < e; t++) { const e = S[t];
                    I = D[t]; for (let t = 0, r = e.length; t < r; t++) { const r = A(e[t], I[t], i);
                        U(r.x, r.y, -n) } } } const N = u + d; for (let t = 0; t < R; t++) { const e = h ? A(M[t], O[t], N) : M[t];
                b ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g[0]).add(x).add(y), U(_.x, _.y, _.z)) : U(e.x, e.y, 0) } for (let t = 1; t <= o; t++)
                for (let e = 0; e < R; e++) { const n = h ? A(M[e], O[e], N) : M[e];
                    b ? (x.copy(v.normals[t]).multiplyScalar(n.x), y.copy(v.binormals[t]).multiplyScalar(n.y), _.copy(g[t]).add(x).add(y), U(_.x, _.y, _.z)) : U(n.x, n.y, l / o * t) }
            for (let t = p - 1; t >= 0; t--) { const e = t / p,
                    n = c * Math.cos(e * Math.PI / 2),
                    i = u * Math.sin(e * Math.PI / 2) + d; for (let t = 0, e = E.length; t < e; t++) { const e = A(E[t], P[t], i);
                    U(e.x, e.y, l + n) } for (let t = 0, e = S.length; t < e; t++) { const e = S[t];
                    I = D[t]; for (let t = 0, r = e.length; t < r; t++) { const r = A(e[t], I[t], i);
                        b ? U(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : U(r.x, r.y, l + n) } } }

            function F(t, e) { let n = t.length; for (; --n >= 0;) { const i = n; let r = n - 1;
                    r < 0 && (r = t.length - 1); for (let t = 0, n = o + 2 * p; t < n; t++) { const n = R * t,
                            s = R * (t + 1);
                        B(e + i + n, e + r + n, e + r + s, e + i + s) } } }

            function U(t, e, n) { s.push(t), s.push(e), s.push(n) }

            function k(t, e, r) { z(t), z(e), z(r); const s = i.length / 3,
                    a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
                H(a[0]), H(a[1]), H(a[2]) }

            function B(t, e, r, s) { z(t), z(e), z(s), z(e), z(r), z(s); const a = i.length / 3,
                    o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                H(o[0]), H(o[1]), H(o[3]), H(o[1]), H(o[2]), H(o[3]) }

            function z(t) { i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]) }

            function H(t) { r.push(t.x), r.push(t.y) }! function() { const t = i.length / 3; if (h) { let t = 0,
                        e = R * t; for (let t = 0; t < C; t++) { const n = T[t];
                        k(n[2] + e, n[1] + e, n[0] + e) }
                    t = o + 2 * p, e = R * t; for (let t = 0; t < C; t++) { const n = T[t];
                        k(n[0] + e, n[1] + e, n[2] + e) } } else { for (let t = 0; t < C; t++) { const e = T[t];
                        k(e[2], e[1], e[0]) } for (let t = 0; t < C; t++) { const e = T[t];
                        k(e[0] + R * o, e[1] + R * o, e[2] + R * o) } }
                n.addGroup(t, i.length / 3 - t, 0) }(),
            function() { const t = i.length / 3; let e = 0;
                F(E, e), e += E.length; for (let t = 0, n = S.length; t < n; t++) { const n = S[t];
                    F(n, e), e += n.length }
                n.addGroup(t, i.length / 3 - t, 1) }() }
        this.setAttribute("position", new hn(i, 3)), this.setAttribute("uv", new hn(r, 2)), this.computeVertexNormals() }
    toJSON() { const t = super.toJSON(); return function(t, e, n) { if (n.shapes = [], Array.isArray(t))
                for (let e = 0, i = t.length; e < i; e++) { const i = t[e];
                    n.shapes.push(i.uuid) } else n.shapes.push(t.uuid);
            void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()); return n }(this.parameters.shapes, this.parameters.options, t) }
    static fromJSON(t, e) { const n = []; for (let i = 0, r = t.shapes.length; i < r; i++) { const r = e[t.shapes[i]];
            n.push(r) } const i = t.options.extrudePath; return void 0 !== i && (t.options.extrudePath = (new $a[i.type]).fromJSON(i)), new Lo(n, t.options) } }
const Po = { generateTopUV: function(t, e, n, i, r) { const s = e[3 * n],
            a = e[3 * n + 1],
            o = e[3 * i],
            l = e[3 * i + 1],
            h = e[3 * r],
            c = e[3 * r + 1]; return [new mt(s, a), new mt(o, l), new mt(h, c)] }, generateSideWallUV: function(t, e, n, i, r, s) { const a = e[3 * n],
            o = e[3 * n + 1],
            l = e[3 * n + 2],
            h = e[3 * i],
            c = e[3 * i + 1],
            u = e[3 * i + 2],
            d = e[3 * r],
            p = e[3 * r + 1],
            m = e[3 * r + 2],
            f = e[3 * s],
            g = e[3 * s + 1],
            v = e[3 * s + 2]; return Math.abs(o - c) < Math.abs(a - h) ? [new mt(a, 1 - l), new mt(h, 1 - u), new mt(d, 1 - m), new mt(f, 1 - v)] : [new mt(o, 1 - l), new mt(c, 1 - u), new mt(p, 1 - m), new mt(g, 1 - v)] } };
class Do extends vn { constructor(t = new to([new mt(0, .5), new mt(-.5, -.5), new mt(.5, -.5)]), e = 12) { super(), this.type = "ShapeGeometry", this.parameters = { shapes: t, curveSegments: e }; const n = [],
            i = [],
            r = [],
            s = []; let a = 0,
            o = 0; if (!1 === Array.isArray(t)) l(t);
        else
            for (let e = 0; e < t.length; e++) l(t[e]), this.addGroup(a, o, e), a += o, o = 0;

        function l(t) { const a = i.length / 3,
                l = t.extractPoints(e); let h = l.shape; const c = l.holes;!1 === Ao.isClockWise(h) && (h = h.reverse()); for (let t = 0, e = c.length; t < e; t++) { const e = c[t];!0 === Ao.isClockWise(e) && (c[t] = e.reverse()) } const u = Ao.triangulateShape(h, c); for (let t = 0, e = c.length; t < e; t++) { const e = c[t];
                h = h.concat(e) } for (let t = 0, e = h.length; t < e; t++) { const e = h[t];
                i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y) } for (let t = 0, e = u.length; t < e; t++) { const e = u[t],
                    i = e[0] + a,
                    r = e[1] + a,
                    s = e[2] + a;
                n.push(i, r, s), o += 3 } }
        this.setIndex(n), this.setAttribute("position", new hn(i, 3)), this.setAttribute("normal", new hn(r, 3)), this.setAttribute("uv", new hn(s, 2)) }
    toJSON() { const t = super.toJSON(); return function(t, e) { if (e.shapes = [], Array.isArray(t))
                for (let n = 0, i = t.length; n < i; n++) { const i = t[n];
                    e.shapes.push(i.uuid) } else e.shapes.push(t.uuid); return e }(this.parameters.shapes, t) }
    static fromJSON(t, e) { const n = []; for (let i = 0, r = t.shapes.length; i < r; i++) { const r = e[t.shapes[i]];
            n.push(r) } return new Do(n, t.curveSegments) } }
class Io extends en { constructor(t) { super(), this.type = "ShadowMaterial", this.color = new Rt(0), this.transparent = !0, this.setValues(t) }
    copy(t) { return super.copy(t), this.color.copy(t.color), this } }
Io.prototype.isShadowMaterial = !0;
class Oo extends Hn { constructor(t) { super(t), this.type = "RawShaderMaterial" } }
Oo.prototype.isRawShaderMaterial = !0;
class No extends en { constructor(t) { super(), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Rt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Rt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new mt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(t) }
    copy(t) { return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this } }
No.prototype.isMeshStandardMaterial = !0;
class Fo extends No { constructor(t) { super(), this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new mt(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() { return ot(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1) }, set: function(t) { this.ior = (1 + .4 * t) / (1 - .4 * t) } }), this.sheenColor = new Rt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new Rt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Rt(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(t) }
    get sheen() { return this._sheen }
    set sheen(t) { this._sheen > 0 != t > 0 && this.version++, this._sheen = t }
    get clearcoat() { return this._clearcoat }
    set clearcoat(t) { this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t }
    get transmission() { return this._transmission }
    set transmission(t) { this._transmission > 0 != t > 0 && this.version++, this._transmission = t }
    copy(t) { return super.copy(t), this.defines = { STANDARD: "", PHYSICAL: "" }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this } }
Fo.prototype.isMeshPhysicalMaterial = !0;
class Uo extends en { constructor(t) { super(), this.type = "MeshPhongMaterial", this.color = new Rt(16777215), this.specular = new Rt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Rt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new mt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(t) }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this } }
Uo.prototype.isMeshPhongMaterial = !0;
class ko extends en { constructor(t) { super(), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new Rt(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Rt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new mt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t) }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this } }
ko.prototype.isMeshToonMaterial = !0;
class Bo extends en { constructor(t) { super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new mt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(t) }
    copy(t) { return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this } }
Bo.prototype.isMeshNormalMaterial = !0;
class zo extends en { constructor(t) { super(), this.type = "MeshLambertMaterial", this.color = new Rt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Rt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(t) }
    copy(t) { return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this } }
zo.prototype.isMeshLambertMaterial = !0;
class Ho extends en { constructor(t) { super(), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new Rt(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new mt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(t) }
    copy(t) { return super.copy(t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this } }
Ho.prototype.isMeshMatcapMaterial = !0;
class Vo extends ma { constructor(t) { super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t) }
    copy(t) { return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this } }
Vo.prototype.isLineDashedMaterial = !0;
const Go = { ShadowMaterial: Io, SpriteMaterial: Us, RawShaderMaterial: Oo, ShaderMaterial: Hn, PointsMaterial: Ta, MeshPhysicalMaterial: Fo, MeshStandardMaterial: No, MeshPhongMaterial: Uo, MeshToonMaterial: ko, MeshNormalMaterial: Bo, MeshLambertMaterial: zo, MeshDepthMaterial: xs, MeshDistanceMaterial: _s, MeshBasicMaterial: nn, MeshMatcapMaterial: Ho, LineDashedMaterial: Vo, LineBasicMaterial: ma, Material: en };
en.fromType = function(t) { return new Go[t] };
const Wo = { arraySlice: function(t, e, n) { return Wo.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n) }, convertArray: function(t, e, n) { return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t) }, isTypedArray: function(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }, getKeyframeOrder: function(t) { const e = t.length,
            n = new Array(e); for (let t = 0; t !== e; ++t) n[t] = t; return n.sort((function(e, n) { return t[e] - t[n] })), n }, sortedArray: function(t, e, n) { const i = t.length,
            r = new t.constructor(i); for (let s = 0, a = 0; a !== i; ++s) { const i = n[s] * e; for (let n = 0; n !== e; ++n) r[a++] = t[i + n] } return r }, flattenJSON: function(t, e, n, i) { let r = 1,
            s = t[0]; for (; void 0 !== s && void 0 === s[i];) s = t[r++]; if (void 0 === s) return; let a = s[i]; if (void 0 !== a)
            if (Array.isArray(a))
                do { a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t[r++] } while (void 0 !== s);
            else if (void 0 !== a.toArray)
            do { a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t[r++] } while (void 0 !== s);
        else
            do { a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t[r++] } while (void 0 !== s) }, subclip: function(t, e, n, i, r = 30) { const s = t.clone();
        s.name = e; const a = []; for (let t = 0; t < s.tracks.length; ++t) { const e = s.tracks[t],
                o = e.getValueSize(),
                l = [],
                h = []; for (let t = 0; t < e.times.length; ++t) { const s = e.times[t] * r; if (!(s < n || s >= i)) { l.push(e.times[t]); for (let n = 0; n < o; ++n) h.push(e.values[t * o + n]) } }
            0 !== l.length && (e.times = Wo.convertArray(l, e.times.constructor), e.values = Wo.convertArray(h, e.values.constructor), a.push(e)) }
        s.tracks = a; let o = 1 / 0; for (let t = 0; t < s.tracks.length; ++t) o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]); for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * o); return s.resetDuration(), s }, makeClipAdditive: function(t, e = 0, n = t, i = 30) { i <= 0 && (i = 30); const r = n.tracks.length,
            s = e / i; for (let e = 0; e < r; ++e) { const i = n.tracks[e],
                r = i.ValueTypeName; if ("bool" === r || "string" === r) continue; const a = t.tracks.find((function(t) { return t.name === i.name && t.ValueTypeName === r })); if (void 0 === a) continue; let o = 0; const l = i.getValueSize();
            i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3); let h = 0; const c = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = c / 3); const u = i.times.length - 1; let d; if (s <= i.times[0]) { const t = o,
                    e = l - o;
                d = Wo.arraySlice(i.values, t, e) } else if (s >= i.times[u]) { const t = u * l + o,
                    e = t + l - o;
                d = Wo.arraySlice(i.values, t, e) } else { const t = i.createInterpolant(),
                    e = o,
                    n = l - o;
                t.evaluate(s), d = Wo.arraySlice(t.resultBuffer, e, n) } if ("quaternion" === r) {
                (new Bt).fromArray(d).normalize().conjugate().toArray(d) } const p = a.times.length; for (let t = 0; t < p; ++t) { const e = t * c + h; if ("quaternion" === r) Bt.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                else { const t = c - 2 * h; for (let n = 0; n < t; ++n) a.values[e + n] -= d[n] } } } return t.blendMode = 2501, t } };
class jo { constructor(t, e, n, i) { this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} }
    evaluate(t) { const e = this.parameterPositions; let n = this._cachedIndex,
            i = e[n],
            r = e[n - 1];
        t: { e: { let s;n: { i: if (!(t < i)) { for (let s = n + 2;;) { if (void 0 === i) { if (t < r) break i; return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r) } if (n === s) break; if (r = i, i = e[++n], t < i) break e }
                        s = e.length; break n } if (t >= r) break t; { const a = e[1];
                        t < a && (n = 2, r = a); for (let s = n - 2;;) { if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i); if (n === s) break; if (i = r, r = e[--n - 1], t >= r) break e }
                        s = n, n = 0 } } for (; n < s;) { const i = n + s >>> 1;
                    t < e[i] ? s = i : n = i + 1 } if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i); if (void 0 === i) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t) }
            this._cachedIndex = n, this.intervalChanged_(n, r, i) }
        return this.interpolate_(n, r, t, i) }
    getSettings_() { return this.settings || this.DefaultSettings_ }
    copySampleValue_(t) { const e = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = t * i; for (let t = 0; t !== i; ++t) e[t] = n[r + t]; return e }
    interpolate_() { throw new Error("call to abstract method") }
    intervalChanged_() {} }
jo.prototype.beforeStart_ = jo.prototype.copySampleValue_, jo.prototype.afterEnd_ = jo.prototype.copySampleValue_;
class qo extends jo { constructor(t, e, n, i) { super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 } }
    intervalChanged_(t, e, n) { const i = this.parameterPositions; let r = t - 2,
            s = t + 1,
            a = i[r],
            o = i[s]; if (void 0 === a) switch (this.getSettings_().endingStart) {
            case 2401:
                r = t, a = 2 * e - n; break;
            case 2402:
                r = i.length - 2, a = e + i[r] - i[r + 1]; break;
            default:
                r = t, a = n }
        if (void 0 === o) switch (this.getSettings_().endingEnd) {
            case 2401:
                s = t, o = 2 * n - e; break;
            case 2402:
                s = 1, o = n + i[1] - i[0]; break;
            default:
                s = t - 1, o = e }
        const l = .5 * (n - e),
            h = this.valueSize;
        this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * h, this._offsetNext = s * h }
    interpolate_(t, e, n, i) { const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            h = this._offsetPrev,
            c = this._offsetNext,
            u = this._weightPrev,
            d = this._weightNext,
            p = (n - e) / (i - e),
            m = p * p,
            f = m * p,
            g = -u * f + 2 * u * m - u * p,
            v = (1 + u) * f + (-1.5 - 2 * u) * m + (-.5 + u) * p + 1,
            y = (-1 - d) * f + (1.5 + d) * m + .5 * p,
            x = d * f - d * m; for (let t = 0; t !== a; ++t) r[t] = g * s[h + t] + v * s[l + t] + y * s[o + t] + x * s[c + t]; return r } }
class Xo extends jo { constructor(t, e, n, i) { super(t, e, n, i) }
    interpolate_(t, e, n, i) { const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            h = (n - e) / (i - e),
            c = 1 - h; for (let t = 0; t !== a; ++t) r[t] = s[l + t] * c + s[o + t] * h; return r } }
class Yo extends jo { constructor(t, e, n, i) { super(t, e, n, i) }
    interpolate_(t) { return this.copySampleValue_(t - 1) } }
class Jo { constructor(t, e, n, i) { if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = Wo.convertArray(e, this.TimeBufferType), this.values = Wo.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation) }
    static toJSON(t) { const e = t.constructor; let n; if (e.toJSON !== this.toJSON) n = e.toJSON(t);
        else { n = { name: t.name, times: Wo.convertArray(t.times, Array), values: Wo.convertArray(t.values, Array) }; const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (n.interpolation = e) } return n.type = t.ValueTypeName, n }
    InterpolantFactoryMethodDiscrete(t) { return new Yo(this.times, this.values, this.getValueSize(), t) }
    InterpolantFactoryMethodLinear(t) { return new Xo(this.times, this.values, this.getValueSize(), t) }
    InterpolantFactoryMethodSmooth(t) { return new qo(this.times, this.values, this.getValueSize(), t) }
    setInterpolation(t) { let e; switch (t) {
            case 2300:
                e = this.InterpolantFactoryMethodDiscrete; break;
            case 2301:
                e = this.InterpolantFactoryMethodLinear; break;
            case 2302:
                e = this.InterpolantFactoryMethodSmooth } if (void 0 === e) { const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (void 0 === this.createInterpolant) { if (t === this.DefaultInterpolation) throw new Error(e);
                this.setInterpolation(this.DefaultInterpolation) } return console.warn("THREE.KeyframeTrack:", e), this } return this.createInterpolant = e, this }
    getInterpolation() { switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return 2300;
            case this.InterpolantFactoryMethodLinear:
                return 2301;
            case this.InterpolantFactoryMethodSmooth:
                return 2302 } }
    getValueSize() { return this.values.length / this.times.length }
    shift(t) { if (0 !== t) { const e = this.times; for (let n = 0, i = e.length; n !== i; ++n) e[n] += t } return this }
    scale(t) { if (1 !== t) { const e = this.times; for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t } return this }
    trim(t, e) { const n = this.times,
            i = n.length; let r = 0,
            s = i - 1; for (; r !== i && n[r] < t;) ++r; for (; - 1 !== s && n[s] > e;) --s; if (++s, 0 !== r || s !== i) { r >= s && (s = Math.max(s, 1), r = s - 1); const t = this.getValueSize();
            this.times = Wo.arraySlice(n, r, s), this.values = Wo.arraySlice(this.values, r * t, s * t) } return this }
    validate() { let t = !0; const e = this.getValueSize();
        e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1); const n = this.times,
            i = this.values,
            r = n.length;
        0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1); let s = null; for (let e = 0; e !== r; e++) { const i = n[e]; if ("number" == typeof i && isNaN(i)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1; break } if (null !== s && s > i) { console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), t = !1; break }
            s = i } if (void 0 !== i && Wo.isTypedArray(i))
            for (let e = 0, n = i.length; e !== n; ++e) { const n = i[e]; if (isNaN(n)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t = !1; break } }
        return t }
    optimize() { const t = Wo.arraySlice(this.times),
            e = Wo.arraySlice(this.values),
            n = this.getValueSize(),
            i = 2302 === this.getInterpolation(),
            r = t.length - 1; let s = 1; for (let a = 1; a < r; ++a) { let r = !1; const o = t[a]; if (o !== t[a + 1] && (1 !== a || o !== t[0]))
                if (i) r = !0;
                else { const t = a * n,
                        i = t - n,
                        s = t + n; for (let a = 0; a !== n; ++a) { const n = e[t + a]; if (n !== e[i + a] || n !== e[s + a]) { r = !0; break } } }
            if (r) { if (a !== s) { t[s] = t[a]; const i = a * n,
                        r = s * n; for (let t = 0; t !== n; ++t) e[r + t] = e[i + t] }++s } } if (r > 0) { t[s] = t[r]; for (let t = r * n, i = s * n, a = 0; a !== n; ++a) e[i + a] = e[t + a];++s } return s !== t.length ? (this.times = Wo.arraySlice(t, 0, s), this.values = Wo.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this }
    clone() { const t = Wo.arraySlice(this.times, 0),
            e = Wo.arraySlice(this.values, 0),
            n = new(0, this.constructor)(this.name, t, e); return n.createInterpolant = this.createInterpolant, n } }
Jo.prototype.TimeBufferType = Float32Array, Jo.prototype.ValueBufferType = Float32Array, Jo.prototype.DefaultInterpolation = 2301;
class Zo extends Jo {}
Zo.prototype.ValueTypeName = "bool", Zo.prototype.ValueBufferType = Array, Zo.prototype.DefaultInterpolation = 2300, Zo.prototype.InterpolantFactoryMethodLinear = void 0, Zo.prototype.InterpolantFactoryMethodSmooth = void 0;
class $o extends Jo {}
$o.prototype.ValueTypeName = "color";
class Ko extends Jo {}
Ko.prototype.ValueTypeName = "number";
class Qo extends jo { constructor(t, e, n, i) { super(t, e, n, i) }
    interpolate_(t, e, n, i) { const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = (n - e) / (i - e); let l = t * a; for (let t = l + a; l !== t; l += 4) Bt.slerpFlat(r, 0, s, l - a, s, l, o); return r } }
class tl extends Jo { InterpolantFactoryMethodLinear(t) { return new Qo(this.times, this.values, this.getValueSize(), t) } }
tl.prototype.ValueTypeName = "quaternion", tl.prototype.DefaultInterpolation = 2301, tl.prototype.InterpolantFactoryMethodSmooth = void 0;
class el extends Jo {}
el.prototype.ValueTypeName = "string", el.prototype.ValueBufferType = Array, el.prototype.DefaultInterpolation = 2300, el.prototype.InterpolantFactoryMethodLinear = void 0, el.prototype.InterpolantFactoryMethodSmooth = void 0;
class nl extends Jo {}
nl.prototype.ValueTypeName = "vector";
class il { constructor(t, e = -1, n, i = 2500) { this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = at(), this.duration < 0 && this.resetDuration() }
    static parse(t) { const e = [],
            n = t.tracks,
            i = 1 / (t.fps || 1); for (let t = 0, r = n.length; t !== r; ++t) e.push(rl(n[t]).scale(i)); const r = new this(t.name, t.duration, e, t.blendMode); return r.uuid = t.uuid, r }
    static toJSON(t) { const e = [],
            n = t.tracks,
            i = { name: t.name, duration: t.duration, tracks: e, uuid: t.uuid, blendMode: t.blendMode }; for (let t = 0, i = n.length; t !== i; ++t) e.push(Jo.toJSON(n[t])); return i }
    static CreateFromMorphTargetSequence(t, e, n, i) { const r = e.length,
            s = []; for (let t = 0; t < r; t++) { let a = [],
                o = [];
            a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0); const l = Wo.getKeyframeOrder(a);
            a = Wo.sortedArray(a, 1, l), o = Wo.sortedArray(o, 1, l), i || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new Ko(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / n)) } return new this(t, -1, s) }
    static findByName(t, e) { let n = t; if (!Array.isArray(t)) { const e = t;
            n = e.geometry && e.geometry.animations || e.animations } for (let t = 0; t < n.length; t++)
            if (n[t].name === e) return n[t];
        return null }
    static CreateClipsFromMorphTargetSequences(t, e, n) { const i = {},
            r = /^([\w-]*?)([\d]+)$/; for (let e = 0, n = t.length; e < n; e++) { const n = t[e],
                s = n.name.match(r); if (s && s.length > 1) { const t = s[1]; let e = i[t];
                e || (i[t] = e = []), e.push(n) } } const s = []; for (const t in i) s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n)); return s }
    static parseAnimation(t, e) { if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; const n = function(t, e, n, i, r) { if (0 !== n.length) { const s = [],
                        a = [];
                    Wo.flattenJSON(n, s, a, i), 0 !== s.length && r.push(new t(e, s, a)) } },
            i = [],
            r = t.name || "default",
            s = t.fps || 30,
            a = t.blendMode; let o = t.length || -1; const l = t.hierarchy || []; for (let t = 0; t < l.length; t++) { const r = l[t].keys; if (r && 0 !== r.length)
                if (r[0].morphTargets) { const t = {}; let e; for (e = 0; e < r.length; e++)
                        if (r[e].morphTargets)
                            for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
                    for (const n in t) { const t = [],
                            s = []; for (let i = 0; i !== r[e].morphTargets.length; ++i) { const i = r[e];
                            t.push(i.time), s.push(i.morphTarget === n ? 1 : 0) }
                        i.push(new Ko(".morphTargetInfluence[" + n + "]", t, s)) }
                    o = t.length * s } else { const s = ".bones[" + e[t].name + "]";
                    n(nl, s + ".position", r, "pos", i), n(tl, s + ".quaternion", r, "rot", i), n(nl, s + ".scale", r, "scl", i) } } if (0 === i.length) return null; return new this(r, o, i, a) }
    resetDuration() { let t = 0; for (let e = 0, n = this.tracks.length; e !== n; ++e) { const n = this.tracks[e];
            t = Math.max(t, n.times[n.times.length - 1]) } return this.duration = t, this }
    trim() { for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration); return this }
    validate() { let t = !0; for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate(); return t }
    optimize() { for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize(); return this }
    clone() { const t = []; for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone()); return new this.constructor(this.name, this.duration, t, this.blendMode) }
    toJSON() { return this.constructor.toJSON(this) } }

function rl(t) { if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); const e = function(t) { switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return Ko;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return nl;
            case "color":
                return $o;
            case "quaternion":
                return tl;
            case "bool":
            case "boolean":
                return Zo;
            case "string":
                return el } throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t) }(t.type); if (void 0 === t.times) { const e = [],
            n = [];
        Wo.flattenJSON(t.keys, e, n, "value"), t.times = e, t.values = n } return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation) }
const sl = { enabled: !1, files: {}, add: function(t, e) {!1 !== this.enabled && (this.files[t] = e) }, get: function(t) { if (!1 !== this.enabled) return this.files[t] }, remove: function(t) { delete this.files[t] }, clear: function() { this.files = {} } };
const al = new class { constructor(t, e, n) { const i = this; let r, s = !1,
            a = 0,
            o = 0; const l = [];
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) { o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), s = !0 }, this.itemEnd = function(t) { a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad()) }, this.itemError = function(t) { void 0 !== i.onError && i.onError(t) }, this.resolveURL = function(t) { return r ? r(t) : t }, this.setURLModifier = function(t) { return r = t, this }, this.addHandler = function(t, e) { return l.push(t, e), this }, this.removeHandler = function(t) { const e = l.indexOf(t); return -1 !== e && l.splice(e, 2), this }, this.getHandler = function(t) { for (let e = 0, n = l.length; e < n; e += 2) { const n = l[e],
                    i = l[e + 1]; if (n.global && (n.lastIndex = 0), n.test(t)) return i } return null } } };
class ol { constructor(t) { this.manager = void 0 !== t ? t : al, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} }
    load() {}
    loadAsync(t, e) { const n = this; return new Promise((function(i, r) { n.load(t, i, e, r) })) }
    parse() {}
    setCrossOrigin(t) { return this.crossOrigin = t, this }
    setWithCredentials(t) { return this.withCredentials = t, this }
    setPath(t) { return this.path = t, this }
    setResourcePath(t) { return this.resourcePath = t, this }
    setRequestHeader(t) { return this.requestHeader = t, this } }
const ll = {};
class hl extends ol { constructor(t) { super(t) }
    load(t, e, n, i) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); const r = sl.get(t); if (void 0 !== r) return this.manager.itemStart(t), setTimeout((() => { e && e(r), this.manager.itemEnd(t) }), 0), r; if (void 0 !== ll[t]) return void ll[t].push({ onLoad: e, onProgress: n, onError: i });
        ll[t] = [], ll[t].push({ onLoad: e, onProgress: n, onError: i }); const s = new Request(t, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }),
            a = this.mimeType,
            o = this.responseType;
        fetch(s).then((e => { if (200 === e.status || 0 === e.status) { if (0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e; const n = ll[t],
                    i = e.body.getReader(),
                    r = e.headers.get("Content-Length"),
                    s = r ? parseInt(r) : 0,
                    a = 0 !== s; let o = 0; const l = new ReadableStream({ start(t) {! function e() { i.read().then((({ done: i, value: r }) => { if (i) t.close();
                                else { o += r.byteLength; const i = new ProgressEvent("progress", { lengthComputable: a, loaded: o, total: s }); for (let t = 0, e = n.length; t < e; t++) { const e = n[t];
                                        e.onProgress && e.onProgress(i) }
                                    t.enqueue(r), e() } })) }() } }); return new Response(l) } throw Error(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`) })).then((t => { switch (o) {
                case "arraybuffer":
                    return t.arrayBuffer();
                case "blob":
                    return t.blob();
                case "document":
                    return t.text().then((t => (new DOMParser).parseFromString(t, a)));
                case "json":
                    return t.json();
                default:
                    if (void 0 === a) return t.text(); { const e = /charset="?([^;"\s]*)"?/i.exec(a),
                            n = e && e[1] ? e[1].toLowerCase() : void 0,
                            i = new TextDecoder(n); return t.arrayBuffer().then((t => i.decode(t))) } } })).then((e => { sl.add(t, e); const n = ll[t];
            delete ll[t]; for (let t = 0, i = n.length; t < i; t++) { const i = n[t];
                i.onLoad && i.onLoad(e) } })).catch((e => { const n = ll[t]; if (void 0 === n) throw this.manager.itemError(t), e;
            delete ll[t]; for (let t = 0, i = n.length; t < i; t++) { const i = n[t];
                i.onError && i.onError(e) }
            this.manager.itemError(t) })).finally((() => { this.manager.itemEnd(t) })), this.manager.itemStart(t) }
    setResponseType(t) { return this.responseType = t, this }
    setMimeType(t) { return this.mimeType = t, this } }
class cl extends ol { constructor(t) { super(t) }
    load(t, e, n, i) { void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); const r = this,
            s = sl.get(t); if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() { e && e(s), r.manager.itemEnd(t) }), 0), s; const a = vt("img");

        function o() { h(), sl.add(t, this), e && e(this), r.manager.itemEnd(t) }

        function l(e) { h(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t) }

        function h() { a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1) } return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a } }
class ul extends ol { constructor(t) { super(t) }
    load(t, e, n, i) { const r = new jn,
            s = new cl(this.manager);
        s.setCrossOrigin(this.crossOrigin), s.setPath(this.path); let a = 0;

        function o(n) { s.load(t[n], (function(t) { r.images[n] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r)) }), void 0, i) } for (let e = 0; e < t.length; ++e) o(e); return r } }
class dl extends ol { constructor(t) { super(t) }
    load(t, e, n, i) { const r = this,
            s = new sa,
            a = new hl(this.manager); return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t, (function(t) { const n = r.parse(t);
            n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : 1001, s.wrapT = void 0 !== n.wrapT ? n.wrapT : 1001, s.magFilter = void 0 !== n.magFilter ? n.magFilter : 1006, s.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = 1008), 1 === n.mipmapCount && (s.minFilter = 1006), void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps), s.needsUpdate = !0, e && e(s, n)) }), n, i), s } }
class pl extends ol { constructor(t) { super(t) }
    load(t, e, n, i) { const r = new Ot,
            s = new cl(this.manager); return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function(t) { r.image = t, r.needsUpdate = !0, void 0 !== e && e(r) }), n, i), r } }
class ml extends Ve { constructor(t, e = 1) { super(), this.type = "Light", this.color = new Rt(t), this.intensity = e }
    dispose() {}
    copy(t) { return super.copy(t), this.color.copy(t.color), this.intensity = t.intensity, this }
    toJSON(t) { const e = super.toJSON(t); return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e } }
ml.prototype.isLight = !0;
(class extends ml { constructor(t, e, n) { super(t, n), this.type = "HemisphereLight", this.position.copy(Ve.DefaultUp), this.updateMatrix(), this.groundColor = new Rt(e) }
    copy(t) { return ml.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this } }).prototype.isHemisphereLight = !0;
const fl = new ve,
    gl = new zt,
    vl = new zt;
class yl { constructor(t) { this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new mt(512, 512), this.map = null, this.mapPass = null, this.matrix = new ve, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Qn, this._frameExtents = new mt(1, 1), this._viewportCount = 1, this._viewports = [new Nt(0, 0, 1, 1)] }
    getViewportCount() { return this._viewportCount }
    getFrustum() { return this._frustum }
    updateMatrices(t) { const e = this.camera,
            n = this.matrix;
        gl.setFromMatrixPosition(t.matrixWorld), e.position.copy(gl), vl.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(vl), e.updateMatrixWorld(), fl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(fl), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse) }
    getViewport(t) { return this._viewports[t] }
    getFrameExtents() { return this._frameExtents }
    dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() }
    copy(t) { return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this }
    clone() { return (new this.constructor).copy(this) }
    toJSON() { const t = {}; return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t } }
class xl extends yl { constructor() { super(new Gn(50, 1, .5, 500)), this.focus = 1 }
    updateMatrices(t) { const e = this.camera,
            n = 2 * st * t.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            r = t.distance || e.far;
        n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t) }
    copy(t) { return super.copy(t), this.focus = t.focus, this } }
xl.prototype.isSpotLightShadow = !0;
class _l extends ml { constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1) { super(t, e), this.type = "SpotLight", this.position.copy(Ve.DefaultUp), this.updateMatrix(), this.target = new Ve, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.shadow = new xl }
    get power() { return this.intensity * Math.PI }
    set power(t) { this.intensity = t / Math.PI }
    dispose() { this.shadow.dispose() }
    copy(t) { return super.copy(t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } }
_l.prototype.isSpotLight = !0;
const bl = new ve,
    wl = new zt,
    Ml = new zt;
class Sl extends yl { constructor() { super(new Gn(90, 1, .5, 500)), this._frameExtents = new mt(4, 2), this._viewportCount = 6, this._viewports = [new Nt(2, 1, 1, 1), new Nt(0, 1, 1, 1), new Nt(3, 1, 1, 1), new Nt(1, 1, 1, 1), new Nt(3, 0, 1, 1), new Nt(1, 0, 1, 1)], this._cubeDirections = [new zt(1, 0, 0), new zt(-1, 0, 0), new zt(0, 0, 1), new zt(0, 0, -1), new zt(0, 1, 0), new zt(0, -1, 0)], this._cubeUps = [new zt(0, 1, 0), new zt(0, 1, 0), new zt(0, 1, 0), new zt(0, 1, 0), new zt(0, 0, 1), new zt(0, 0, -1)] }
    updateMatrices(t, e = 0) { const n = this.camera,
            i = this.matrix,
            r = t.distance || n.far;
        r !== n.far && (n.far = r, n.updateProjectionMatrix()), wl.setFromMatrixPosition(t.matrixWorld), n.position.copy(wl), Ml.copy(n.position), Ml.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Ml), n.updateMatrixWorld(), i.makeTranslation(-wl.x, -wl.y, -wl.z), bl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(bl) } }
Sl.prototype.isPointLightShadow = !0;
class Tl extends ml { constructor(t, e, n = 0, i = 1) { super(t, e), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Sl }
    get power() { return 4 * this.intensity * Math.PI }
    set power(t) { this.intensity = t / (4 * Math.PI) }
    dispose() { this.shadow.dispose() }
    copy(t) { return super.copy(t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this } }
Tl.prototype.isPointLight = !0;
class El extends yl { constructor() { super(new di(-5, 5, 5, -5, .5, 500)) } }
El.prototype.isDirectionalLightShadow = !0;
class Al extends ml { constructor(t, e) { super(t, e), this.type = "DirectionalLight", this.position.copy(Ve.DefaultUp), this.updateMatrix(), this.target = new Ve, this.shadow = new El }
    dispose() { this.shadow.dispose() }
    copy(t) { return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this } }
Al.prototype.isDirectionalLight = !0;
(class extends ml { constructor(t, e) { super(t, e), this.type = "AmbientLight" } }).prototype.isAmbientLight = !0;
(class extends ml { constructor(t, e, n = 10, i = 10) { super(t, e), this.type = "RectAreaLight", this.width = n, this.height = i }
    get power() { return this.intensity * this.width * this.height * Math.PI }
    set power(t) { this.intensity = t / (this.width * this.height * Math.PI) }
    copy(t) { return super.copy(t), this.width = t.width, this.height = t.height, this }
    toJSON(t) { const e = super.toJSON(t); return e.object.width = this.width, e.object.height = this.height, e } }).prototype.isRectAreaLight = !0;
class Rl { constructor() { this.coefficients = []; for (let t = 0; t < 9; t++) this.coefficients.push(new zt) }
    set(t) { for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]); return this }
    zero() { for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0); return this }
    getAt(t, e) { const n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients; return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e }
    getIrradianceAt(t, e) { const n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients; return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e }
    add(t) { for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]); return this }
    addScaledSH(t, e) { for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e); return this }
    scale(t) { for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t); return this }
    lerp(t, e) { for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e); return this }
    equals(t) { for (let e = 0; e < 9; e++)
            if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
        return !0 }
    copy(t) { return this.set(t.coefficients) }
    clone() { return (new this.constructor).copy(this) }
    fromArray(t, e = 0) { const n = this.coefficients; for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i); return this }
    toArray(t = [], e = 0) { const n = this.coefficients; for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i); return t }
    static getBasisAt(t, e) { const n = t.x,
            i = t.y,
            r = t.z;
        e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i) } }
Rl.prototype.isSphericalHarmonics3 = !0;
class Cl extends ml { constructor(t = new Rl, e = 1) { super(void 0, e), this.sh = t }
    copy(t) { return super.copy(t), this.sh.copy(t.sh), this }
    fromJSON(t) { return this.intensity = t.intensity, this.sh.fromArray(t.sh), this }
    toJSON(t) { const e = super.toJSON(t); return e.object.sh = this.sh.toArray(), e } }
Cl.prototype.isLightProbe = !0;
class Ll { static decodeText(t) { if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t); let e = ""; for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]); try { return decodeURIComponent(escape(e)) } catch (t) { return e } }
    static extractUrlBase(t) { const e = t.lastIndexOf("/"); return -1 === e ? "./" : t.slice(0, e + 1) }
    static resolveURL(t, e) { return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t) } }(class extends vn { constructor() { super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0 }
    copy(t) { return super.copy(t), this.instanceCount = t.instanceCount, this }
    clone() { return (new this.constructor).copy(this) }
    toJSON() { const t = super.toJSON(this); return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t } }).prototype.isInstancedBufferGeometry = !0;
class Pl extends ol { constructor(t) { super(t), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" } }
    setOptions(t) { return this.options = t, this }
    load(t, e, n, i) { void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t); const r = this,
            s = sl.get(t); if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() { e && e(s), r.manager.itemEnd(t) }), 0), s; const a = {};
        a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then((function(t) { return t.blob() })).then((function(t) { return createImageBitmap(t, Object.assign(r.options, { colorSpaceConversion: "none" })) })).then((function(n) { sl.add(t, n), e && e(n), r.manager.itemEnd(t) })).catch((function(e) { i && i(e), r.manager.itemError(t), r.manager.itemEnd(t) })), r.manager.itemStart(t) } }
let Dl;
Pl.prototype.isImageBitmapLoader = !0;
const Il = function() { return void 0 === Dl && (Dl = new(window.AudioContext || window.webkitAudioContext)), Dl };
class Ol extends ol { constructor(t) { super(t) }
    load(t, e, n, i) { const r = this,
            s = new hl(this.manager);
        s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (function(n) { try { const t = n.slice(0);
                Il().decodeAudioData(t, (function(t) { e(t) })) } catch (e) { i ? i(e) : console.error(e), r.manager.itemError(t) } }), n, i) } }(class extends Cl { constructor(t, e, n = 1) { super(void 0, n); const i = (new Rt).set(t),
            r = (new Rt).set(e),
            s = new zt(i.r, i.g, i.b),
            a = new zt(r.r, r.g, r.b),
            o = Math.sqrt(Math.PI),
            l = o * Math.sqrt(.75);
        this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l) } }).prototype.isHemisphereLightProbe = !0;
(class extends Cl { constructor(t, e = 1) { super(void 0, e); const n = (new Rt).set(t);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI)) } }).prototype.isAmbientLightProbe = !0;
class Nl { constructor(t, e, n) { let i, r, s; switch (this.binding = t, this.valueSize = n, e) {
            case "quaternion":
                i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5; break;
            case "string":
            case "bool":
                i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n); break;
            default:
                i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n) }
        this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0 }
    accumulate(t, e) { const n = this.buffer,
            i = this.valueSize,
            r = t * i + i; let s = this.cumulativeWeight; if (0 === s) { for (let t = 0; t !== i; ++t) n[r + t] = n[t];
            s = e } else { s += e; const t = e / s;
            this._mixBufferRegion(n, r, 0, t, i) }
        this.cumulativeWeight = s }
    accumulateAdditive(t) { const e = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
        0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t }
    apply(t) { const e = this.valueSize,
            n = this.buffer,
            i = t * e + e,
            r = this.cumulativeWeight,
            s = this.cumulativeWeightAdditive,
            a = this.binding; if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) { const t = e * this._origIndex;
            this._mixBufferRegion(n, i, t, 1 - r, e) }
        s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e); for (let t = e, r = e + e; t !== r; ++t)
            if (n[t] !== n[t + e]) { a.setValue(n, i); break } }
    saveOriginalState() { const t = this.binding,
            e = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
        t.getValue(e, i); for (let t = n, r = i; t !== r; ++t) e[t] = e[i + t % n];
        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0 }
    restoreOriginalState() { const t = 3 * this.valueSize;
        this.binding.setValue(this.buffer, t) }
    _setAdditiveIdentityNumeric() { const t = this._addIndex * this.valueSize,
            e = t + this.valueSize; for (let n = t; n < e; n++) this.buffer[n] = 0 }
    _setAdditiveIdentityQuaternion() { this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1 }
    _setAdditiveIdentityOther() { const t = this._origIndex * this.valueSize,
            e = this._addIndex * this.valueSize; for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n] }
    _select(t, e, n, i, r) { if (i >= .5)
            for (let i = 0; i !== r; ++i) t[e + i] = t[n + i] }
    _slerp(t, e, n, i) { Bt.slerpFlat(t, e, t, e, t, n, i) }
    _slerpAdditive(t, e, n, i, r) { const s = this._workIndex * r;
        Bt.multiplyQuaternionsFlat(t, s, t, e, t, n), Bt.slerpFlat(t, e, t, e, t, s, i) }
    _lerp(t, e, n, i, r) { const s = 1 - i; for (let a = 0; a !== r; ++a) { const r = e + a;
            t[r] = t[r] * s + t[n + a] * i } }
    _lerpAdditive(t, e, n, i, r) { for (let s = 0; s !== r; ++s) { const r = e + s;
            t[r] = t[r] + t[n + s] * i } } }
const Fl = new RegExp("[\\[\\]\\.:\\/]", "g"),
    Ul = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
    kl = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    Bl = /(WCOD+)?/.source.replace("WCOD", Ul),
    zl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    Hl = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    Vl = new RegExp("^" + kl + Bl + zl + Hl + "$"),
    Gl = ["material", "materials", "bones"];
class Wl { constructor(t, e, n) { this.path = e, this.parsedPath = n || Wl.parseTrackName(e), this.node = Wl.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound }
    static create(t, e, n) { return t && t.isAnimationObjectGroup ? new Wl.Composite(t, e, n) : new Wl(t, e, n) }
    static sanitizeNodeName(t) { return t.replace(/\s/g, "_").replace(Fl, "") }
    static parseTrackName(t) { const e = Vl.exec(t); if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t); const n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] },
            i = n.nodeName && n.nodeName.lastIndexOf("."); if (void 0 !== i && -1 !== i) { const t = n.nodeName.substring(i + 1); - 1 !== Gl.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t) } if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t); return n }
    static findNode(t, e) { if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t; if (t.skeleton) { const n = t.skeleton.getBoneByName(e); if (void 0 !== n) return n } if (t.children) { const n = function(t) { for (let i = 0; i < t.length; i++) { const r = t[i]; if (r.name === e || r.uuid === e) return r; const s = n(r.children); if (s) return s } return null },
                i = n(t.children); if (i) return i } return null }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) { t[e] = this.targetObject[this.propertyName] }
    _getValue_array(t, e) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i] }
    _getValue_arrayElement(t, e) { t[e] = this.resolvedProperty[this.propertyIndex] }
    _getValue_toArray(t, e) { this.resolvedProperty.toArray(t, e) }
    _setValue_direct(t, e) { this.targetObject[this.propertyName] = t[e] }
    _setValue_direct_setNeedsUpdate(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0 }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) { this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 }
    _setValue_array(t, e) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++] }
    _setValue_array_setNeedsUpdate(t, e) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        this.targetObject.needsUpdate = !0 }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0 }
    _setValue_arrayElement(t, e) { this.resolvedProperty[this.propertyIndex] = t[e] }
    _setValue_arrayElement_setNeedsUpdate(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0 }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) { this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0 }
    _setValue_fromArray(t, e) { this.resolvedProperty.fromArray(t, e) }
    _setValue_fromArray_setNeedsUpdate(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0 }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) { this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0 }
    _getValue_unbound(t, e) { this.bind(), this.getValue(t, e) }
    _setValue_unbound(t, e) { this.bind(), this.setValue(t, e) }
    bind() { let t = this.node; const e = this.parsedPath,
            n = e.objectName,
            i = e.propertyName; let r = e.propertyIndex; if (t || (t = Wl.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found."); if (n) { let i = e.objectIndex; switch (n) {
                case "materials":
                    if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    t = t.material.materials; break;
                case "bones":
                    if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    t = t.skeleton.bones; for (let e = 0; e < t.length; e++)
                        if (t[e].name === i) { i = e; break }
                    break;
                default:
                    if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    t = t[n] } if (void 0 !== i) { if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                t = t[i] } } const s = t[i]; if (void 0 === s) { const n = e.nodeName; return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t) } let a = this.Versioning.None;
        this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate); let o = this.BindingType.Direct; if (void 0 !== r) { if ("morphTargetInfluences" === i) { if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this); if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]) }
            o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a] }
    unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } }
Wl.Composite = class { constructor(t, e, n) { const i = n || Wl.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, i) }
    getValue(t, e) { this.bind(); const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
        void 0 !== i && i.getValue(t, e) }
    setValue(t, e) { const n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e) }
    bind() { const t = this._bindings; for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind() }
    unbind() { const t = this._bindings; for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind() } }, Wl.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Wl.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, Wl.prototype.GetterByBindingType = [Wl.prototype._getValue_direct, Wl.prototype._getValue_array, Wl.prototype._getValue_arrayElement, Wl.prototype._getValue_toArray], Wl.prototype.SetterByBindingTypeAndVersioning = [
    [Wl.prototype._setValue_direct, Wl.prototype._setValue_direct_setNeedsUpdate, Wl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
    [Wl.prototype._setValue_array, Wl.prototype._setValue_array_setNeedsUpdate, Wl.prototype._setValue_array_setMatrixWorldNeedsUpdate],
    [Wl.prototype._setValue_arrayElement, Wl.prototype._setValue_arrayElement_setNeedsUpdate, Wl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
    [Wl.prototype._setValue_fromArray, Wl.prototype._setValue_fromArray_setNeedsUpdate, Wl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
];
class jl { constructor(t, e, n = null, i = e.blendMode) { this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i; const r = e.tracks,
            s = r.length,
            a = new Array(s),
            o = { endingStart: 2400, endingEnd: 2400 }; for (let t = 0; t !== s; ++t) { const e = r[t].createInterpolant(null);
            a[t] = e, e.settings = o }
        this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0 }
    play() { return this._mixer._activateAction(this), this }
    stop() { return this._mixer._deactivateAction(this), this.reset() }
    reset() { return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping() }
    isRunning() { return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this) }
    isScheduled() { return this._mixer._isActiveAction(this) }
    startAt(t) { return this._startTime = t, this }
    setLoop(t, e) { return this.loop = t, this.repetitions = e, this }
    setEffectiveWeight(t) { return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading() }
    getEffectiveWeight() { return this._effectiveWeight }
    fadeIn(t) { return this._scheduleFading(t, 0, 1) }
    fadeOut(t) { return this._scheduleFading(t, 1, 0) }
    crossFadeFrom(t, e, n) { if (t.fadeOut(e), this.fadeIn(e), n) { const n = this._clip.duration,
                i = t._clip.duration,
                r = i / n,
                s = n / i;
            t.warp(1, r, e), this.warp(s, 1, e) } return this }
    crossFadeTo(t, e, n) { return t.crossFadeFrom(this, e, n) }
    stopFading() { const t = this._weightInterpolant; return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this }
    setEffectiveTimeScale(t) { return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping() }
    getEffectiveTimeScale() { return this._effectiveTimeScale }
    setDuration(t) { return this.timeScale = this._clip.duration / t, this.stopWarping() }
    syncWith(t) { return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping() }
    halt(t) { return this.warp(this._effectiveTimeScale, 0, t) }
    warp(t, e, n) { const i = this._mixer,
            r = i.time,
            s = this.timeScale; let a = this._timeScaleInterpolant;
        null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a); const o = a.parameterPositions,
            l = a.sampleValues; return o[0] = r, o[1] = r + n, l[0] = t / s, l[1] = e / s, this }
    stopWarping() { const t = this._timeScaleInterpolant; return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this }
    getMixer() { return this._mixer }
    getClip() { return this._clip }
    getRoot() { return this._localRoot || this._mixer._root }
    _update(t, e, n, i) { if (!this.enabled) return void this._updateWeight(t); const r = this._startTime; if (null !== r) { const i = (t - r) * n; if (i < 0 || 0 === n) return;
            this._startTime = null, e = n * i }
        e *= this._updateTimeScale(t); const s = this._updateTime(e),
            a = this._updateWeight(t); if (a > 0) { const t = this._interpolants,
                e = this._propertyBindings; if (2501 === this.blendMode)
                for (let n = 0, i = t.length; n !== i; ++n) t[n].evaluate(s), e[n].accumulateAdditive(a);
            else
                for (let n = 0, r = t.length; n !== r; ++n) t[n].evaluate(s), e[n].accumulate(i, a) } }
    _updateWeight(t) { let e = 0; if (this.enabled) { e = this.weight; const n = this._weightInterpolant; if (null !== n) { const i = n.evaluate(t)[0];
                e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1)) } } return this._effectiveWeight = e, e }
    _updateTimeScale(t) { let e = 0; if (!this.paused) { e = this.timeScale; const n = this._timeScaleInterpolant; if (null !== n) { e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e) } } return this._effectiveTimeScale = e, e }
    _updateTime(t) { const e = this._clip.duration,
            n = this.loop; let i = this.time + t,
            r = this._loopCount; const s = 2202 === n; if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i; if (2200 === n) {-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            t: { if (i >= e) i = e;
                else { if (!(i < 0)) { this.time = i; break t }
                    i = 0 }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t < 0 ? -1 : 1 }) } } else { if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) { const n = Math.floor(i / e);
                i -= e * n, r += Math.abs(n); const a = this.repetitions - r; if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t > 0 ? 1 : -1 });
                else { if (1 === a) { const e = t < 0;
                        this._setEndings(e, !e, s) } else this._setEndings(!1, !1, s);
                    this._loopCount = r, this.time = i, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: n }) } } else this.time = i; if (s && 1 == (1 & r)) return e - i } return i }
    _setEndings(t, e, n) { const i = this._interpolantSettings;
        n ? (i.endingStart = 2401, i.endingEnd = 2401) : (i.endingStart = t ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, i.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402) }
    _scheduleFading(t, e, n) { const i = this._mixer,
            r = i.time; let s = this._weightInterpolant;
        null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s); const a = s.parameterPositions,
            o = s.sampleValues; return a[0] = r, o[0] = e, a[1] = r + t, o[1] = n, this } }
class ql extends et { constructor(t) { super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1 }
    _bindAction(t, e) { const n = t._localRoot || this._root,
            i = t._clip.tracks,
            r = i.length,
            s = t._propertyBindings,
            a = t._interpolants,
            o = n.uuid,
            l = this._bindingsByRootAndName; let h = l[o];
        void 0 === h && (h = {}, l[o] = h); for (let t = 0; t !== r; ++t) { const r = i[t],
                l = r.name; let c = h[l]; if (void 0 !== c) ++c.referenceCount, s[t] = c;
            else { if (c = s[t], void 0 !== c) { null === c._cacheIndex && (++c.referenceCount, this._addInactiveBinding(c, o, l)); continue } const i = e && e._propertyBindings[t].binding.parsedPath;
                c = new Nl(Wl.create(n, l, i), r.ValueTypeName, r.getValueSize()), ++c.referenceCount, this._addInactiveBinding(c, o, l), s[t] = c }
            a[t].resultBuffer = c.buffer } }
    _activateAction(t) { if (!this._isActiveAction(t)) { if (null === t._cacheIndex) { const e = (t._localRoot || this._root).uuid,
                    n = t._clip.uuid,
                    i = this._actionsByClip[n];
                this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e) } const e = t._propertyBindings; for (let t = 0, n = e.length; t !== n; ++t) { const n = e[t];
                0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState()) }
            this._lendAction(t) } }
    _deactivateAction(t) { if (this._isActiveAction(t)) { const e = t._propertyBindings; for (let t = 0, n = e.length; t !== n; ++t) { const n = e[t];
                0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n)) }
            this._takeBackAction(t) } }
    _initMemoryManager() { this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0; const t = this;
        this.stats = { actions: {get total() { return t._actions.length }, get inUse() { return t._nActiveActions } }, bindings: {get total() { return t._bindings.length }, get inUse() { return t._nActiveBindings } }, controlInterpolants: {get total() { return t._controlInterpolants.length }, get inUse() { return t._nActiveControlInterpolants } } } }
    _isActiveAction(t) { const e = t._cacheIndex; return null !== e && e < this._nActiveActions }
    _addInactiveAction(t, e, n) { const i = this._actions,
            r = this._actionsByClip; let s = r[e]; if (void 0 === s) s = { knownActions: [t], actionByRoot: {} }, t._byClipCacheIndex = 0, r[e] = s;
        else { const e = s.knownActions;
            t._byClipCacheIndex = e.length, e.push(t) }
        t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t }
    _removeInactiveAction(t) { const e = this._actions,
            n = e[e.length - 1],
            i = t._cacheIndex;
        n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null; const r = t._clip.uuid,
            s = this._actionsByClip,
            a = s[r],
            o = a.knownActions,
            l = o[o.length - 1],
            h = t._byClipCacheIndex;
        l._byClipCacheIndex = h, o[h] = l, o.pop(), t._byClipCacheIndex = null;
        delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t) }
    _removeInactiveBindingsForAction(t) { const e = t._propertyBindings; for (let t = 0, n = e.length; t !== n; ++t) { const n = e[t];
            0 == --n.referenceCount && this._removeInactiveBinding(n) } }
    _lendAction(t) { const e = this._actions,
            n = t._cacheIndex,
            i = this._nActiveActions++,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r }
    _takeBackAction(t) { const e = this._actions,
            n = t._cacheIndex,
            i = --this._nActiveActions,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r }
    _addInactiveBinding(t, e, n) { const i = this._bindingsByRootAndName,
            r = this._bindings; let s = i[e];
        void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t) }
    _removeInactiveBinding(t) { const e = this._bindings,
            n = t.binding,
            i = n.rootNode.uuid,
            r = n.path,
            s = this._bindingsByRootAndName,
            a = s[i],
            o = e[e.length - 1],
            l = t._cacheIndex;
        o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i] }
    _lendBinding(t) { const e = this._bindings,
            n = t._cacheIndex,
            i = this._nActiveBindings++,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r }
    _takeBackBinding(t) { const e = this._bindings,
            n = t._cacheIndex,
            i = --this._nActiveBindings,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r }
    _lendControlInterpolant() { const t = this._controlInterpolants,
            e = this._nActiveControlInterpolants++; let n = t[e]; return void 0 === n && (n = new Xo(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n }
    _takeBackControlInterpolant(t) { const e = this._controlInterpolants,
            n = t.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            r = e[i];
        t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r }
    clipAction(t, e, n) { const i = e || this._root,
            r = i.uuid; let s = "string" == typeof t ? il.findByName(i, t) : t; const a = null !== s ? s.uuid : t,
            o = this._actionsByClip[a]; let l = null; if (void 0 === n && (n = null !== s ? s.blendMode : 2500), void 0 !== o) { const t = o.actionByRoot[r]; if (void 0 !== t && t.blendMode === n) return t;
            l = o.knownActions[0], null === s && (s = l._clip) } if (null === s) return null; const h = new jl(this, s, e, n); return this._bindAction(h, l), this._addInactiveAction(h, a, r), h }
    existingAction(t, e) { const n = e || this._root,
            i = n.uuid,
            r = "string" == typeof t ? il.findByName(n, t) : t,
            s = r ? r.uuid : t,
            a = this._actionsByClip[s]; return void 0 !== a && a.actionByRoot[i] || null }
    stopAllAction() { const t = this._actions; for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop(); return this }
    update(t) { t *= this.timeScale; const e = this._actions,
            n = this._nActiveActions,
            i = this.time += t,
            r = Math.sign(t),
            s = this._accuIndex ^= 1; for (let a = 0; a !== n; ++a) { e[a]._update(i, t, r, s) } const a = this._bindings,
            o = this._nActiveBindings; for (let t = 0; t !== o; ++t) a[t].apply(s); return this }
    setTime(t) { this.time = 0; for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0; return this.update(t) }
    getRoot() { return this._root }
    uncacheClip(t) { const e = this._actions,
            n = t.uuid,
            i = this._actionsByClip,
            r = i[n]; if (void 0 !== r) { const t = r.knownActions; for (let n = 0, i = t.length; n !== i; ++n) { const i = t[n];
                this._deactivateAction(i); const r = i._cacheIndex,
                    s = e[e.length - 1];
                i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i) }
            delete i[n] } }
    uncacheRoot(t) { const e = t.uuid,
            n = this._actionsByClip; for (const t in n) { const i = n[t].actionByRoot[e];
            void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i)) } const i = this._bindingsByRootAndName[e]; if (void 0 !== i)
            for (const t in i) { const e = i[t];
                e.restoreOriginalState(), this._removeInactiveBinding(e) } }
    uncacheAction(t, e) { const n = this.existingAction(t, e);
        null !== n && (this._deactivateAction(n), this._removeInactiveAction(n)) } }
ql.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
(class extends Os { constructor(t, e, n = 1) { super(t, e), this.meshPerAttribute = n }
    copy(t) { return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this }
    clone(t) { const e = super.clone(t); return e.meshPerAttribute = this.meshPerAttribute, e }
    toJSON(t) { const e = super.toJSON(t); return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e } }).prototype.isInstancedInterleavedBuffer = !0;

function Xl(t, e) { return t.distance - e.distance }

function Yl(t, e, n, i) { if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) { const i = t.children; for (let t = 0, r = i.length; t < r; t++) Yl(i[t], e, n, !0) } }
class Jl { constructor(t = 1, e = 0, n = 0) { return this.radius = t, this.phi = e, this.theta = n, this }
    set(t, e, n) { return this.radius = t, this.phi = e, this.theta = n, this }
    copy(t) { return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this }
    makeSafe() { const t = 1e-6; return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this }
    setFromVector3(t) { return this.setFromCartesianCoords(t.x, t.y, t.z) }
    setFromCartesianCoords(t, e, n) { return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ot(e / this.radius, -1, 1))), this }
    clone() { return (new this.constructor).copy(this) } }
const Zl = new zt,
    $l = new ve,
    Kl = new ve;

function Ql(t) { const e = [];!0 === t.isBone && e.push(t); for (let n = 0; n < t.children.length; n++) e.push.apply(e, Ql(t.children[n])); return e }
class th { static toHalfFloat(t) { Math.abs(t) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t = ot(t, -65504, 65504), nh[0] = t; const e = ih[0],
            n = e >> 23 & 511; return rh[n] + ((8388607 & e) >> sh[n]) }
    static fromHalfFloat(t) { const e = t >> 10; return ih[0] = ah[lh[e] + (1023 & t)] + oh[e], nh[0] } }
const eh = new ArrayBuffer(4),
    nh = new Float32Array(eh),
    ih = new Uint32Array(eh),
    rh = new Uint32Array(512),
    sh = new Uint32Array(512);
for (let t = 0; t < 256; ++t) { const e = t - 127;
    e < -27 ? (rh[t] = 0, rh[256 | t] = 32768, sh[t] = 24, sh[256 | t] = 24) : e < -14 ? (rh[t] = 1024 >> -e - 14, rh[256 | t] = 1024 >> -e - 14 | 32768, sh[t] = -e - 1, sh[256 | t] = -e - 1) : e <= 15 ? (rh[t] = e + 15 << 10, rh[256 | t] = e + 15 << 10 | 32768, sh[t] = 13, sh[256 | t] = 13) : e < 128 ? (rh[t] = 31744, rh[256 | t] = 64512, sh[t] = 24, sh[256 | t] = 24) : (rh[t] = 31744, rh[256 | t] = 64512, sh[t] = 13, sh[256 | t] = 13) }
const ah = new Uint32Array(2048),
    oh = new Uint32Array(64),
    lh = new Uint32Array(64);
for (let t = 1; t < 1024; ++t) { let e = t << 13,
        n = 0; for (; 0 == (8388608 & e);) e <<= 1, n -= 8388608;
    e &= -8388609, n += 947912704, ah[t] = e | n }
for (let t = 1024; t < 2048; ++t) ah[t] = 939524096 + (t - 1024 << 13);
for (let t = 1; t < 31; ++t) oh[t] = t << 23;
oh[31] = 1199570944, oh[32] = 2147483648;
for (let t = 33; t < 63; ++t) oh[t] = 2147483648 + (t - 32 << 23);
oh[63] = 3347054592;
for (let t = 1; t < 64; ++t) 32 !== t && (lh[t] = 1024);
Ia.create = function(t, e) { return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Ia.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t }, Qa.prototype.fromPoints = function(t) { return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t) }, class extends Ma { constructor(t = 10, e = 10, n = 4473924, i = 8947848) { n = new Rt(n), i = new Rt(i); const r = e / 2,
            s = t / e,
            a = t / 2,
            o = [],
            l = []; for (let t = 0, h = 0, c = -a; t <= e; t++, c += s) { o.push(-a, 0, c, a, 0, c), o.push(c, 0, -a, c, 0, a); const e = t === r ? n : i;
            e.toArray(l, h), h += 3, e.toArray(l, h), h += 3, e.toArray(l, h), h += 3, e.toArray(l, h), h += 3 } const h = new vn;
        h.setAttribute("position", new hn(o, 3)), h.setAttribute("color", new hn(l, 3));
        super(h, new ma({ vertexColors: !0, toneMapped: !1 })), this.type = "GridHelper" } }.prototype.setColors = function() { console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.") }, class extends Ma { constructor(t) { const e = Ql(t),
            n = new vn,
            i = [],
            r = [],
            s = new Rt(0, 0, 1),
            a = new Rt(0, 1, 0); for (let t = 0; t < e.length; t++) { const n = e[t];
            n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b)) }
        n.setAttribute("position", new hn(i, 3)), n.setAttribute("color", new hn(r, 3));
        super(n, new ma({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 })), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1 }
    updateMatrixWorld(t) { const e = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
        Kl.copy(this.root.matrixWorld).invert(); for (let t = 0, n = 0; t < e.length; t++) { const r = e[t];
            r.parent && r.parent.isBone && ($l.multiplyMatrices(Kl, r.matrixWorld), Zl.setFromMatrixPosition($l), i.setXYZ(n, Zl.x, Zl.y, Zl.z), $l.multiplyMatrices(Kl, r.parent.matrixWorld), Zl.setFromMatrixPosition($l), i.setXYZ(n + 1, Zl.x, Zl.y, Zl.z), n += 2) }
        n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t) } }.prototype.update = function() { console.error("THREE.SkeletonHelper: update() no longer needs to be called.") }, ol.prototype.extractUrlBase = function(t) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Ll.extractUrlBase(t) }, ol.Handlers = { add: function() { console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.") }, get: function() { console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.") } }, Gt.prototype.center = function(t) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t) }, Gt.prototype.empty = function() { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, Gt.prototype.isIntersectionBox = function(t) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, Gt.prototype.isIntersectionSphere = function(t) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t) }, Gt.prototype.size = function(t) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t) }, Ae.prototype.toVector3 = function() { console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead") }, le.prototype.empty = function() { return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty() }, Qn.prototype.setFromMatrix = function(t) { return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t) }, ft.prototype.flattenToArrayOffset = function(t, e) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e) }, ft.prototype.multiplyVector3 = function(t) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this) }, ft.prototype.multiplyVector3Array = function() { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.") }, ft.prototype.applyToBufferAttribute = function(t) { return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this) }, ft.prototype.applyToVector3Array = function() { console.error("THREE.Matrix3: .applyToVector3Array() has been removed.") }, ft.prototype.getInverse = function(t) { return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert() }, ve.prototype.extractPosition = function(t) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t) }, ve.prototype.flattenToArrayOffset = function(t, e) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e) }, ve.prototype.getPosition = function() { return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new zt).setFromMatrixColumn(this, 3) }, ve.prototype.setRotationFromQuaternion = function(t) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t) }, ve.prototype.multiplyToArray = function() { console.warn("THREE.Matrix4: .multiplyToArray() has been removed.") }, ve.prototype.multiplyVector3 = function(t) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, ve.prototype.multiplyVector4 = function(t) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, ve.prototype.multiplyVector3Array = function() { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.") }, ve.prototype.rotateAxis = function(t) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this) }, ve.prototype.crossVector = function(t) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, ve.prototype.translate = function() { console.error("THREE.Matrix4: .translate() has been removed.") }, ve.prototype.rotateX = function() { console.error("THREE.Matrix4: .rotateX() has been removed.") }, ve.prototype.rotateY = function() { console.error("THREE.Matrix4: .rotateY() has been removed.") }, ve.prototype.rotateZ = function() { console.error("THREE.Matrix4: .rotateZ() has been removed.") }, ve.prototype.rotateByAxis = function() { console.error("THREE.Matrix4: .rotateByAxis() has been removed.") }, ve.prototype.applyToBufferAttribute = function(t) { return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this) }, ve.prototype.applyToVector3Array = function() { console.error("THREE.Matrix4: .applyToVector3Array() has been removed.") }, ve.prototype.makeFrustum = function(t, e, n, i, r, s) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s) }, ve.prototype.getInverse = function(t) { return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert() }, Zn.prototype.isIntersectionLine = function(t) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t) }, Bt.prototype.multiplyVector3 = function(t) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this) }, Bt.prototype.inverse = function() { return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert() }, ge.prototype.isIntersectionBox = function(t) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t) }, ge.prototype.isIntersectionPlane = function(t) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t) }, ge.prototype.isIntersectionSphere = function(t) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t) }, Qe.prototype.area = function() { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea() }, Qe.prototype.barycoordFromPoint = function(t, e) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e) }, Qe.prototype.midpoint = function(t) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t) }, Qe.prototypenormal = function(t) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t) }, Qe.prototype.plane = function(t) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t) }, Qe.barycoordFromPoint = function(t, e, n, i, r) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Qe.getBarycoord(t, e, n, i, r) }, Qe.normal = function(t, e, n, i) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Qe.getNormal(t, e, n, i) }, to.prototype.extractAllPoints = function(t) { return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t) }, to.prototype.extrude = function(t) { return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Lo(this, t) }, to.prototype.makeGeometry = function(t) { return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Do(this, t) }, mt.prototype.fromAttribute = function(t, e, n) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n) }, mt.prototype.distanceToManhattan = function(t) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t) }, mt.prototype.lengthManhattan = function() { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() }, zt.prototype.setEulerFromRotationMatrix = function() { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.") }, zt.prototype.setEulerFromQuaternion = function() { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.") }, zt.prototype.getPositionFromMatrix = function(t) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t) }, zt.prototype.getScaleFromMatrix = function(t) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t) }, zt.prototype.getColumnFromMatrix = function(t, e) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t) }, zt.prototype.applyProjection = function(t) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t) }, zt.prototype.fromAttribute = function(t, e, n) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n) }, zt.prototype.distanceToManhattan = function(t) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t) }, zt.prototype.lengthManhattan = function() { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() }, Nt.prototype.fromAttribute = function(t, e, n) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n) }, Nt.prototype.lengthManhattan = function() { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength() }, Ve.prototype.getChildByName = function(t) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t) }, Ve.prototype.renderDepth = function() { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.") }, Ve.prototype.translate = function(t, e) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t) }, Ve.prototype.getWorldRotation = function() { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.") }, Ve.prototype.applyMatrix = function(t) { return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t) }, Object.defineProperties(Ve.prototype, { eulerOrder: { get: function() { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order }, set: function(t) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t } }, useQuaternion: { get: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") }, set: function() { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.") } } }), Nn.prototype.setDrawMode = function() { console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.") }, Object.defineProperties(Nn.prototype, { drawMode: { get: function() { return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0 }, set: function() { console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.") } } }), ia.prototype.initBones = function() { console.error("THREE.SkinnedMesh: initBones() has been removed.") }, Gn.prototype.setLens = function(t, e) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t) }, Object.defineProperties(ml.prototype, { onlyShadow: { set: function() { console.warn("THREE.Light: .onlyShadow has been removed.") } }, shadowCameraFov: { set: function(t) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t } }, shadowCameraLeft: { set: function(t) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t } }, shadowCameraRight: { set: function(t) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t } }, shadowCameraTop: { set: function(t) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t } }, shadowCameraBottom: { set: function(t) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t } }, shadowCameraNear: { set: function(t) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t } }, shadowCameraFar: { set: function(t) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t } }, shadowCameraVisible: { set: function() { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.") } }, shadowBias: { set: function(t) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t } }, shadowDarkness: { set: function() { console.warn("THREE.Light: .shadowDarkness has been removed.") } }, shadowMapWidth: { set: function(t) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t } }, shadowMapHeight: { set: function(t) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t } } }), Object.defineProperties(an.prototype, { length: { get: function() { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length } }, dynamic: { get: function() { return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), 35048 === this.usage }, set: function() { console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(35048) } } }), an.prototype.setDynamic = function(t) { return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? 35048 : 35044), this }, an.prototype.copyIndicesArray = function() { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.") }, an.prototype.setArray = function() { console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers") }, vn.prototype.addIndex = function(t) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t) }, vn.prototype.addAttribute = function(t, e) { return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new an(arguments[1], arguments[2]))) }, vn.prototype.addDrawCall = function(t, e, n) { void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e) }, vn.prototype.clearDrawCalls = function() { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups() }, vn.prototype.computeOffsets = function() { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.") }, vn.prototype.removeAttribute = function(t) { return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t) }, vn.prototype.applyMatrix = function(t) { return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t) }, Object.defineProperties(vn.prototype, { drawcalls: { get: function() { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups } }, offsets: { get: function() { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups } } }), Os.prototype.setDynamic = function(t) { return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? 35048 : 35044), this }, Os.prototype.setArray = function() { console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers") }, Lo.prototype.getArrays = function() { console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.") }, Lo.prototype.addShapeList = function() { console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.") }, Lo.prototype.addShape = function() { console.error("THREE.ExtrudeGeometry: .addShape() has been removed.") }, Is.prototype.dispose = function() { console.error("THREE.Scene: .dispose() has been removed.") }, Object.defineProperties(en.prototype, { wrapAround: { get: function() { console.warn("THREE.Material: .wrapAround has been removed.") }, set: function() { console.warn("THREE.Material: .wrapAround has been removed.") } }, overdraw: { get: function() { console.warn("THREE.Material: .overdraw has been removed.") }, set: function() { console.warn("THREE.Material: .overdraw has been removed.") } }, wrapRGB: { get: function() { return console.warn("THREE.Material: .wrapRGB has been removed."), new Rt } }, shading: { get: function() { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.") }, set: function(t) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t } }, stencilMask: { get: function() { return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask }, set: function(t) { console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t } }, vertexTangents: { get: function() { console.warn("THREE." + this.type + ": .vertexTangents has been removed.") }, set: function() { console.warn("THREE." + this.type + ": .vertexTangents has been removed.") } } }), Object.defineProperties(Hn.prototype, { derivatives: { get: function() { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives }, set: function(t) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t } } }), Ds.prototype.clearTarget = function(t, e, n, i) { console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i) }, Ds.prototype.animate = function(t) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t) }, Ds.prototype.getCurrentRenderTarget = function() { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget() }, Ds.prototype.getMaxAnisotropy = function() { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy() }, Ds.prototype.getPrecision = function() { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision }, Ds.prototype.resetGLState = function() { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset() }, Ds.prototype.supportsFloatTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float") }, Ds.prototype.supportsHalfFloatTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float") }, Ds.prototype.supportsStandardDerivatives = function() { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives") }, Ds.prototype.supportsCompressedTextureS3TC = function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc") }, Ds.prototype.supportsCompressedTexturePVRTC = function() { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc") }, Ds.prototype.supportsBlendMinMax = function() { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax") }, Ds.prototype.supportsVertexTextures = function() { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures }, Ds.prototype.supportsInstancedArrays = function() { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays") }, Ds.prototype.enableScissorTest = function(t) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t) }, Ds.prototype.initMaterial = function() { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.") }, Ds.prototype.addPrePlugin = function() { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.") }, Ds.prototype.addPostPlugin = function() { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.") }, Ds.prototype.updateShadowMap = function() { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.") }, Ds.prototype.setFaceCulling = function() { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.") }, Ds.prototype.allocTextureUnit = function() { console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.") }, Ds.prototype.setTexture = function() { console.warn("THREE.WebGLRenderer: .setTexture() has been removed.") }, Ds.prototype.setTexture2D = function() { console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.") }, Ds.prototype.setTextureCube = function() { console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.") }, Ds.prototype.getActiveMipMapLevel = function() { return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel() }, Object.defineProperties(Ds.prototype, { shadowMapEnabled: { get: function() { return this.shadowMap.enabled }, set: function(t) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t } }, shadowMapType: { get: function() { return this.shadowMap.type }, set: function(t) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t } }, shadowMapCullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.") } }, context: { get: function() { return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext() } }, vr: { get: function() { return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr } }, gammaInput: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1 }, set: function() { console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.") } }, gammaOutput: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1 }, set: function(t) { console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? 3001 : 3e3 } }, toneMappingWhitePoint: { get: function() { return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1 }, set: function() { console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.") } }, gammaFactor: { get: function() { return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2 }, set: function() { console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.") } } }), Object.defineProperties(bs.prototype, { cullFace: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.") } }, renderReverseSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.") } }, renderSingleSided: { get: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") }, set: function() { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.") } } }), Object.defineProperties(Ft.prototype, { wrapS: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t } }, wrapT: { get: function() { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t } }, magFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t } }, minFilter: { get: function() { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t } }, anisotropy: { get: function() { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t } }, offset: { get: function() { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t } }, repeat: { get: function() { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t } }, format: { get: function() { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t } }, type: { get: function() { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t } }, generateMipmaps: { get: function() { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps }, set: function(t) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t } } }), class extends Ve { constructor(t) { super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [] }
    getOutput() { return this.gain }
    setNodeSource(t) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this }
    setMediaElementSource(t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this }
    setMediaStreamSource(t) { return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this }
    setBuffer(t) { return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this }
    play(t = 0) { if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing."); if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
        this._startedAt = this.context.currentTime + t; const e = this.context.createBufferSource(); return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect() }
    pause() { if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
        console.warn("THREE.Audio: this Audio has no playback control.") }
    stop() { if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
        console.warn("THREE.Audio: this Audio has no playback control.") }
    connect() { if (this.filters.length > 0) { this.source.connect(this.filters[0]); for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
            this.filters[this.filters.length - 1].connect(this.getOutput()) } else this.source.connect(this.getOutput()); return this._connected = !0, this }
    disconnect() { if (this.filters.length > 0) { this.source.disconnect(this.filters[0]); for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput()) } else this.source.disconnect(this.getOutput()); return this._connected = !1, this }
    getFilters() { return this.filters }
    setFilters(t) { return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this }
    setDetune(t) { if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this }
    getDetune() { return this.detune }
    getFilter() { return this.getFilters()[0] }
    setFilter(t) { return this.setFilters(t ? [t] : []) }
    setPlaybackRate(t) { if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
        console.warn("THREE.Audio: this Audio has no playback control.") }
    getPlaybackRate() { return this.playbackRate }
    onEnded() { this.isPlaying = !1 }
    getLoop() { return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop }
    setLoop(t) { if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
        console.warn("THREE.Audio: this Audio has no playback control.") }
    setLoopStart(t) { return this.loopStart = t, this }
    setLoopEnd(t) { return this.loopEnd = t, this }
    getVolume() { return this.gain.gain.value }
    setVolume(t) { return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this } }.prototype.load = function(t) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); const e = this; return (new Ol).load(t, (function(t) { e.setBuffer(t) })), this }, Wn.prototype.updateCubeMap = function(t, e) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e) }, Wn.prototype.clear = function(t, e, n, i) { return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i) }, Lt.crossOrigin = void 0, Lt.loadTexture = function(t, e, n, i) { console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."); const r = new pl;
    r.setCrossOrigin(this.crossOrigin); const s = r.load(t, n, void 0, i); return e && (s.mapping = e), s }, Lt.loadTextureCube = function(t, e, n, i) { console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."); const r = new ul;
    r.setCrossOrigin(this.crossOrigin); const s = r.load(t, n, void 0, i); return e && (s.mapping = e), s }, Lt.loadCompressedTexture = function() { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.") }, Lt.loadCompressedTextureCube = function() { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.") }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "139" } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "139");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hh = null != navigator.xr && null != self.XRSession && null != navigator.xr.isSessionSupported,
    ch = hh && self.XRSession.prototype.requestHitTestSource,
    uh = null != self.ResizeObserver,
    dh = null != self.IntersectionObserver,
    ph = ch;
(() => { const t = navigator.userAgent || navigator.vendor || self.opera; let e = !1;
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0) })(), /\bCrOS\b/.test(navigator.userAgent);
const mh = /android/i.test(navigator.userAgent),
    fh = /iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
    gh = (() => { const t = document.createElement("a"); return Boolean(t.relList && t.relList.supports && t.relList.supports("ar")) })();
/Safari\//.test(navigator.userAgent);
const vh = /firefox/i.test(navigator.userAgent),
    yh = /OculusBrowser/.test(navigator.userAgent);
fh && /CriOS\//.test(navigator.userAgent);
const xh = mh && !vh && !yh;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _h = U `
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

/* NOTE: This ruleset is our integration surface area with the
 * :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196 */
:host([data-js-focus-visible]:focus:not(.focus-visible)),
:host([data-js-focus-visible]) :focus:not(.focus-visible) {
  outline: none;
}

.container {
  position: relative;
}

.userInput {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  overflow: hidden;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

canvas.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  opacity: 0;
  transition: opacity 0.3s 0.3s;
  background-color: inherit;
}

.slot.poster.show {
  opacity: 1;
  transition: none;
}

.slot.poster.quick {
  transition: none;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--poster-color, #fff);
  background-image: var(--poster-image, none);
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--progress-mask, #fff);
  transition: opacity 0.3s;
  opacity: 0.2;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  align-items: center;
  justify-content: center;

  opacity: 0;
  will-change: opacity;
  overflow: hidden;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.slot.interaction-prompt > .animated-container {
  will-change: transform, opacity;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${U`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt">
    <div class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${U`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}
      </slot>
    </div>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="mask" part="default-progress-mask"></div>
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${U`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,bh=new WeakMap;function wh(){let t,e;function n(t,e,n,i,r,s){const a=s.num_components(),o=n.num_points()*a,l=o*r.BYTES_PER_ELEMENT,h=function(t,e){switch(e){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32}}(t,r),c=t._malloc(l);e.GetAttributeDataArrayForAllPoints(n,s,h,l,c);const u=new r(t.HEAPF32.buffer,c,o).slice();return t._free(c),{name:i,array:u,itemSize:a}}onmessage=function(i){const r=i.data;switch(r.type){case"init":t=r.decoderConfig,e=new Promise((function(e){t.onModuleLoaded=function(t){e({draco:t})},DracoDecoderModule(t)}));break;case"decode":const i=r.buffer,s=r.taskConfig;e.then((t=>{const e=t.draco,a=new e.Decoder,o=new e.DecoderBuffer;o.Init(new Int8Array(i),i.byteLength);try{const t=function(t,e,i,r){const s=r.attributeIDs,a=r.attributeTypes;let o,l;const h=e.GetEncodedGeometryType(i);if(h===t.TRIANGULAR_MESH)o=new t.Mesh,l=e.DecodeBufferToMesh(i,o);else{if(h!==t.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");o=new t.PointCloud,l=e.DecodeBufferToPointCloud(i,o)}if(!l.ok()||0===o.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+l.error_msg());const c={index:null,attributes:[]};for(const i in s){const l=self[a[i]];let h,u;if(r.useUniqueIDs)u=s[i],h=e.GetAttributeByUniqueId(o,u);else{if(u=e.GetAttributeId(o,t[s[i]]),-1===u)continue;h=e.GetAttribute(o,u)}c.attributes.push(n(t,e,o,i,l,h))}h===t.TRIANGULAR_MESH&&(c.index=function(t,e,n){const i=3*n.num_faces(),r=4*i,s=t._malloc(r);e.GetTrianglesUInt32Array(n,r,s);const a=new Uint32Array(t.HEAPF32.buffer,s,i).slice();return t._free(s),{array:a,itemSize:1}}(t,e,o));return t.destroy(o),c}(e,a,o,s),i=t.attributes.map((t=>t.array.buffer));t.index&&i.push(t.index.array.buffer),self.postMessage({type:"decode",id:r.id,geometry:t},i)}catch(t){console.error(t),self.postMessage({type:"error",id:r.id,error:t.message})}finally{e.destroy(o),e.destroy(a)}}))}}}class Mh extends ol{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register((function(t){return new Rh(t)})),this.register((function(t){return new Oh(t)})),this.register((function(t){return new Nh(t)})),this.register((function(t){return new Ch(t)})),this.register((function(t){return new Lh(t)})),this.register((function(t){return new Ph(t)})),this.register((function(t){return new Dh(t)})),this.register((function(t){return new Ih(t)})),this.register((function(t){return new Eh(t)})),this.register((function(t){return new Fh(t)}))}load(t,e,n,i){const r=this;let s;s=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:Ll.extractUrlBase(t),this.manager.itemStart(t);const a=function(e){i?i(e):console.error(e),r.manager.itemError(t),r.manager.itemEnd(t)},o=new hl(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,(function(n){try{r.parse(n,s,(function(n){e(n),r.manager.itemEnd(t)}),a)}catch(t){a(t)}}),n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return-1===this.pluginCallbacks.indexOf(t)&&this.pluginCallbacks.push(t),this}unregister(t){return-1!==this.pluginCallbacks.indexOf(t)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const s={},a={};if("string"==typeof t)r=t;else{if(Ll.decodeText(new Uint8Array(t,0,4))===Uh){try{s[Th.KHR_BINARY_GLTF]=new zh(t)}catch(t){return void(i&&i(t))}r=s[Th.KHR_BINARY_GLTF].content}else r=Ll.decodeText(new Uint8Array(t))}const o=JSON.parse(r);if(void 0===o.asset||o.asset.version[0]<2)return void(i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));const l=new xc(o,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){const e=this.pluginCallbacks[t](l);a[e.name]=e,s[e.name]=!0}if(o.extensionsUsed)for(let t=0;t<o.extensionsUsed.length;++t){const e=o.extensionsUsed[t],n=o.extensionsRequired||[];switch(e){case Th.KHR_MATERIALS_UNLIT:s[e]=new Ah;break;case Th.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[e]=new Wh;break;case Th.KHR_DRACO_MESH_COMPRESSION:s[e]=new Hh(o,this.dracoLoader);break;case Th.KHR_TEXTURE_TRANSFORM:s[e]=new Vh;break;case Th.KHR_MESH_QUANTIZATION:s[e]=new jh;break;default:n.indexOf(e)>=0&&void 0===a[e]&&console.warn('THREE.GLTFLoader: Unknown extension "'+e+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise((function(i,r){n.parse(t,e,i,r)}))}}function Sh(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}const Th={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Eh{constructor(t){this.parser=t,this.name=Th.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const i=e[n];i.extensions&&i.extensions[this.name]&&void 0!==i.extensions[this.name].light&&t._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,s=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let a;const o=new Rt(16777215);void 0!==s.color&&o.fromArray(s.color);const l=void 0!==s.range?s.range:0;switch(s.type){case"directional":a=new Al(o),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new Tl(o),a.distance=l;break;case"spot":a=new _l(o),a.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=void 0!==s.spot.innerConeAngle?s.spot.innerConeAngle:0,s.spot.outerConeAngle=void 0!==s.spot.outerConeAngle?s.spot.outerConeAngle:Math.PI/4,a.angle=s.spot.outerConeAngle,a.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return a.position.set(0,0,0),a.decay=2,void 0!==s.intensity&&(a.intensity=s.intensity),a.name=e.createUniqueName(s.name||"light_"+t),i=Promise.resolve(a),e.cache.add(n,i),i}createNodeAttachment(t){const e=this,n=this.parser,i=n.json.nodes[t],r=(i.extensions&&i.extensions[this.name]||{}).light;return void 0===r?null:this._loadLight(r).then((function(t){return n._getNodeRef(e.cache,r,t)}))}}class Ah{constructor(){this.name=Th.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(t,e,n){const i=[];t.color=new Rt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const e=r.baseColorFactor;t.color.fromArray(e),t.opacity=e[3]}void 0!==r.baseColorTexture&&i.push(n.assignTexture(t,"map",r.baseColorTexture,3001))}return Promise.all(i)}}class Rh{constructor(t){this.parser=t,this.name=Th.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?Fo:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(void 0!==s.clearcoatFactor&&(e.clearcoat=s.clearcoatFactor),void 0!==s.clearcoatTexture&&r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture)),void 0!==s.clearcoatRoughnessFactor&&(e.clearcoatRoughness=s.clearcoatRoughnessFactor),void 0!==s.clearcoatRoughnessTexture&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),void 0!==s.clearcoatNormalTexture&&(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),void 0!==s.clearcoatNormalTexture.scale)){const t=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new mt(t,t)}return Promise.all(r)}}class Ch{constructor(t){this.parser=t,this.name=Th.KHR_MATERIALS_SHEEN}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?Fo:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Rt(0,0,0),e.sheenRoughness=0,e.sheen=1;const s=i.extensions[this.name];return void 0!==s.sheenColorFactor&&e.sheenColor.fromArray(s.sheenColorFactor),void 0!==s.sheenRoughnessFactor&&(e.sheenRoughness=s.sheenRoughnessFactor),void 0!==s.sheenColorTexture&&r.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,3001)),void 0!==s.sheenRoughnessTexture&&r.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Lh{constructor(t){this.parser=t,this.name=Th.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?Fo:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return void 0!==s.transmissionFactor&&(e.transmission=s.transmissionFactor),void 0!==s.transmissionTexture&&r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Ph{constructor(t){this.parser=t,this.name=Th.KHR_MATERIALS_VOLUME}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?Fo:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];e.thickness=void 0!==s.thicknessFactor?s.thicknessFactor:0,void 0!==s.thicknessTexture&&r.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture)),e.attenuationDistance=s.attenuationDistance||0;const a=s.attenuationColor||[1,1,1];return e.attenuationColor=new Rt(a[0],a[1],a[2]),Promise.all(r)}}class Dh{constructor(t){this.parser=t,this.name=Th.KHR_MATERIALS_IOR}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?Fo:null}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return e.ior=void 0!==i.ior?i.ior:1.5,Promise.resolve()}}class Ih{constructor(t){this.parser=t,this.name=Th.KHR_MATERIALS_SPECULAR}getMaterialType(t){const e=this.parser.json.materials[t];return e.extensions&&e.extensions[this.name]?Fo:null}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];e.specularIntensity=void 0!==s.specularFactor?s.specularFactor:1,void 0!==s.specularTexture&&r.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return e.specularColor=new Rt(a[0],a[1],a[2]),void 0!==s.specularColorTexture&&r.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,3001)),Promise.all(r)}}class Oh{constructor(t){this.parser=t,this.name=Th.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=e.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,s)}}class Nh{constructor(t){this.parser=t,this.name=Th.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],a=i.images[s.source];let o=n.textureLoader;if(a.uri){const t=n.options.manager.getHandler(a.uri);null!==t&&(o=t)}return this.detectSupport().then((function(r){if(r)return n.loadTextureImage(t,s.source,o);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)}))}detectSupport(){return this.isSupported||(this.isSupported=new Promise((function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(1===e.height)}}))),this.isSupported}}class Fh{constructor(t){this.name=Th.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const t=n.extensions[this.name],i=this.parser.getDependency("buffer",t.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([i,r.ready]).then((function(e){const n=t.byteOffset||0,i=t.byteLength||0,s=t.count,a=t.byteStride,o=new ArrayBuffer(s*a),l=new Uint8Array(e[0],n,i);return r.decodeGltfBuffer(new Uint8Array(o),s,a,l,t.mode,t.filter),o}))}return null}}const Uh="glTF",kh=1313821514,Bh=5130562;class zh{constructor(t){this.name=Th.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,12);if(this.header={magic:Ll.decodeText(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Uh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-12,i=new DataView(t,12);let r=0;for(;r<n;){const e=i.getUint32(r,!0);r+=4;const n=i.getUint32(r,!0);if(r+=4,n===kh){const n=new Uint8Array(t,12+r,e);this.content=Ll.decodeText(n)}else if(n===Bh){const n=12+r;this.body=t.slice(n,n+e)}r+=e}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hh{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Th.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,a={},o={},l={};for(const t in s){const e=ac[t]||t.toLowerCase();a[e]=s[t]}for(const e in t.attributes){const i=ac[e]||e.toLowerCase();if(void 0!==s[e]){const r=n.accessors[t.attributes[e]],s=nc[r.componentType];l[i]=s,o[i]=!0===r.normalized}}return e.getDependency("bufferView",r).then((function(t){return new Promise((function(e){i.decodeDracoFile(t,(function(t){for(const e in t.attributes){const n=t.attributes[e],i=o[e];void 0!==i&&(n.normalized=i)}e(t)}),a,l)}))}))}}class Vh{constructor(){this.name=Th.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return void 0!==e.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),void 0===e.offset&&void 0===e.rotation&&void 0===e.scale||(t=t.clone(),void 0!==e.offset&&t.offset.fromArray(e.offset),void 0!==e.rotation&&(t.rotation=e.rotation),void 0!==e.scale&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Gh extends No{constructor(t){super(),this.isGLTFSpecularGlossinessMaterial=!0;const e=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join("\n"),n=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join("\n"),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join("\n"),a={specular:{value:(new Rt).setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(t){for(const e in a)t.uniforms[e]=a[e];t.fragmentShader=t.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",e).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(t){a.specular.value=t}},specularMap:{get:function(){return a.specularMap.value},set:function(t){a.specularMap.value=t,t?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(t){a.glossiness.value=t}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(t){a.glossinessMap.value=t,t?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(t)}copy(t){return super.copy(t),this.specularMap=t.specularMap,this.specular.copy(t.specular),this.glossinessMap=t.glossinessMap,this.glossiness=t.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Wh{constructor(){this.name=Th.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Gh}extendParams(t,e,n){const i=e.extensions[this.name];t.color=new Rt(1,1,1),t.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const e=i.diffuseFactor;t.color.fromArray(e),t.opacity=e[3]}if(void 0!==i.diffuseTexture&&r.push(n.assignTexture(t,"map",i.diffuseTexture,3001)),t.emissive=new Rt(0,0,0),t.glossiness=void 0!==i.glossinessFactor?i.glossinessFactor:1,t.specular=new Rt(1,1,1),Array.isArray(i.specularFactor)&&t.specular.fromArray(i.specularFactor),void 0!==i.specularGlossinessTexture){const e=i.specularGlossinessTexture;r.push(n.assignTexture(t,"glossinessMap",e)),r.push(n.assignTexture(t,"specularMap",e,3001))}return Promise.all(r)}createMaterial(t){const e=new Gh(t);return e.fog=!0,e.color=t.color,e.map=void 0===t.map?null:t.map,e.lightMap=null,e.lightMapIntensity=1,e.aoMap=void 0===t.aoMap?null:t.aoMap,e.aoMapIntensity=1,e.emissive=t.emissive,e.emissiveIntensity=1,e.emissiveMap=void 0===t.emissiveMap?null:t.emissiveMap,e.bumpMap=void 0===t.bumpMap?null:t.bumpMap,e.bumpScale=1,e.normalMap=void 0===t.normalMap?null:t.normalMap,e.normalMapType=0,t.normalScale&&(e.normalScale=t.normalScale),e.displacementMap=null,e.displacementScale=1,e.displacementBias=0,e.specularMap=void 0===t.specularMap?null:t.specularMap,e.specular=t.specular,e.glossinessMap=void 0===t.glossinessMap?null:t.glossinessMap,e.glossiness=t.glossiness,e.alphaMap=null,e.envMap=void 0===t.envMap?null:t.envMap,e.envMapIntensity=1,e}}class jh{constructor(){this.name=Th.KHR_MESH_QUANTIZATION}}class qh extends jo{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let t=0;t!==i;t++)e[t]=n[r+t];return e}}qh.prototype.beforeStart_=qh.prototype.copySampleValue_,qh.prototype.afterEnd_=qh.prototype.copySampleValue_,qh.prototype.interpolate_=function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=2*a,l=3*a,h=i-e,c=(n-e)/h,u=c*c,d=u*c,p=t*l,m=p-l,f=-2*d+3*u,g=d-u,v=1-f,y=g-u+c;for(let t=0;t!==a;t++){const e=s[m+t+a],n=s[m+t+o]*h,i=s[p+t+a],l=s[p+t]*h;r[t]=v*e+y*n+f*i+g*l}return r};const Xh=new Bt;class Yh extends qh{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Xh.fromArray(r).normalize().toArray(r),r}}const Jh=0,Zh=1,$h=2,Kh=3,Qh=4,tc=5,ec=6,nc={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ic={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},rc={33071:1001,33648:1002,10497:1e3},sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},oc={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lc={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},hc="OPAQUE",cc="MASK",uc="BLEND";function dc(t){return void 0===t.DefaultMaterial&&(t.DefaultMaterial=new No({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),t.DefaultMaterial}function pc(t,e,n){for(const i in n.extensions)void 0===t[i]&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function mc(t,e){void 0!==e.extras&&("object"==typeof e.extras?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fc(t,e){if(t.updateMorphTargets(),void 0!==e.weights)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let e=0,i=n.length;e<i;e++)t.morphTargetDictionary[n[e]]=e}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gc(t){const e=t.extensions&&t.extensions[Th.KHR_DRACO_MESH_COMPRESSION];let n;return n=e?"draco:"+e.bufferView+":"+e.indices+":"+vc(e.attributes):t.indices+":"+vc(t.attributes)+":"+t.mode,n}function vc(t){let e="";const n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function yc(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class xc{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Sh,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={},"undefined"!=typeof createImageBitmap&&!1===/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?this.textureLoader=new Pl(this.options.manager):this.textureLoader=new pl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll((function(t){return t._markDefs&&t._markDefs()})),Promise.all(this._invokeAll((function(t){return t.beforeRoot&&t.beforeRoot()}))).then((function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])})).then((function(e){const s={scene:e[0][i.scene||0],scenes:e[0],animations:e[1],cameras:e[2],asset:i.asset,parser:n,userData:{}};pc(r,s,i),mc(s,i),Promise.all(n._invokeAll((function(t){return t.afterRoot&&t.afterRoot(s)}))).then((function(){t(s)}))})).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let n=0,i=e.length;n<i;n++){const i=e[n].joints;for(let e=0,n=i.length;e<n;e++)t[i[e]].isBone=!0}for(let e=0,i=t.length;e<i;e++){const i=t[e];void 0!==i.mesh&&(this._addNodeRef(this.meshCache,i.mesh),void 0!==i.skin&&(n[i.mesh].isSkinnedMesh=!0)),void 0!==i.camera&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(t,e){void 0!==e&&(void 0===t.refs[e]&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(t,e)=>{const n=this.associations.get(t);null!=n&&this.associations.set(e,n);for(const[n,i]of t.children.entries())r(i,e.children[n])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this.loadNode(e);break;case"mesh":i=this._invokeOne((function(t){return t.loadMesh&&t.loadMesh(e)}));break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne((function(t){return t.loadBufferView&&t.loadBufferView(e)}));break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne((function(t){return t.loadMaterial&&t.loadMaterial(e)}));break;case"texture":i=this._invokeOne((function(t){return t.loadTexture&&t.loadTexture(e)}));break;case"skin":i=this.loadSkin(e);break;case"animation":i=this.loadAnimation(e);break;case"camera":i=this.loadCamera(e);break;default:throw new Error("Unknown type: "+t)}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+("mesh"===t?"es":"s")]||[];e=Promise.all(i.map((function(e,i){return n.getDependency(t,i)}))),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&"arraybuffer"!==e.type)throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(void 0===e.uri&&0===t)return Promise.resolve(this.extensions[Th.KHR_BINARY_GLTF].body);const i=this.options;return new Promise((function(t,r){n.load(Ll.resolveURL(e.uri,i.path),t,void 0,(function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))}))}))}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then((function(t){const n=e.byteLength||0,i=e.byteOffset||0;return t.slice(i,i+n)}))}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(void 0===i.bufferView&&void 0===i.sparse)return Promise.resolve(null);const r=[];return void 0!==i.bufferView?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),void 0!==i.sparse&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then((function(t){const r=t[0],s=sc[i.type],a=nc[i.componentType],o=a.BYTES_PER_ELEMENT,l=o*s,h=i.byteOffset||0,c=void 0!==i.bufferView?n.bufferViews[i.bufferView].byteStride:void 0,u=!0===i.normalized;let d,p;if(c&&c!==l){const t=Math.floor(h/c),n="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+t+":"+i.count;let l=e.cache.get(n);l||(d=new a(r,t*c,i.count*c/o),l=new Os(d,c/o),e.cache.add(n,l)),p=new Fs(l,s,h%c/o,u)}else d=null===r?new a(i.count*s):new a(r,h,i.count*s),p=new an(d,s,u);if(void 0!==i.sparse){const e=sc.SCALAR,n=nc[i.sparse.indices.componentType],o=i.sparse.indices.byteOffset||0,l=i.sparse.values.byteOffset||0,h=new n(t[1],o,i.sparse.count*e),c=new a(t[2],l,i.sparse.count*s);null!==r&&(p=new an(p.array.slice(),p.itemSize,p.normalized));for(let t=0,e=h.length;t<e;t++){const e=h[t];if(p.setX(e,c[t*s]),s>=2&&p.setY(e,c[t*s+1]),s>=3&&p.setZ(e,c[t*s+2]),s>=4&&p.setW(e,c[t*s+3]),s>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p}))}loadTexture(t){const e=this.json,n=this.options,i=e.textures[t].source,r=e.images[i];let s=this.textureLoader;if(r.uri){const t=n.manager.getHandler(r.uri);null!==t&&(s=t)}return this.loadTextureImage(t,i,s)}loadTextureImage(t,e,n){const i=this,r=this.json,s=r.textures[t],a=r.images[e],o=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];const l=this.loadImageSource(e,n).then((function(e){e.flipY=!1,s.name&&(e.name=s.name);const n=(r.samplers||{})[s.sampler]||{};return e.magFilter=ic[n.magFilter]||1006,e.minFilter=ic[n.minFilter]||1008,e.wrapS=rc[n.wrapS]||1e3,e.wrapT=rc[n.wrapT]||1e3,i.associations.set(e,{textures:t}),e})).catch((function(){return null}));return this.textureCache[o]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(void 0!==this.sourceCache[t])return this.sourceCache[t].then((t=>t.clone()));const s=i.images[t],a=self.URL||self.webkitURL;let o=s.uri||"",l=!1;if(void 0!==s.bufferView)o=n.getDependency("bufferView",s.bufferView).then((function(t){l=!0;const e=new Blob([t],{type:s.mimeType});return o=a.createObjectURL(e),o}));else if(void 0===s.uri)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(o).then((function(t){return new Promise((function(n,i){let s=n;!0===e.isImageBitmapLoader&&(s=function(t){const e=new Ot(t);e.needsUpdate=!0,n(e)}),e.load(Ll.resolveURL(t,r.path),s,void 0,i)}))})).then((function(t){var e;return!0===l&&a.revokeObjectURL(o),t.userData.mimeType=s.mimeType||((e=s.uri).search(/\.jpe?g($|\?)/i)>0||0===e.search(/^data\:image\/jpeg/)?"image/jpeg":e.search(/\.webp($|\?)/i)>0||0===e.search(/^data\:image\/webp/)?"image/webp":"image/png"),t})).catch((function(t){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),t}));return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then((function(s){if(void 0===n.texCoord||0==n.texCoord||"aoMap"===e&&1==n.texCoord||console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+e+" not yet supported."),r.extensions[Th.KHR_TEXTURE_TRANSFORM]){const t=void 0!==n.extensions?n.extensions[Th.KHR_TEXTURE_TRANSFORM]:void 0;if(t){const e=r.associations.get(s);s=r.extensions[Th.KHR_TEXTURE_TRANSFORM].extendTexture(s,t),r.associations.set(s,e)}}return void 0!==i&&(s.encoding=i),t[e]=s,s}))}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=void 0===e.attributes.tangent,r=void 0!==e.attributes.color,s=void 0===e.attributes.normal;if(t.isPoints){const t="PointsMaterial:"+n.uuid;let e=this.cache.get(t);e||(e=new Ta,en.prototype.copy.call(e,n),e.color.copy(n.color),e.map=n.map,e.sizeAttenuation=!1,this.cache.add(t,e)),n=e}else if(t.isLine){const t="LineBasicMaterial:"+n.uuid;let e=this.cache.get(t);e||(e=new ma,en.prototype.copy.call(e,n),e.color.copy(n.color),this.cache.add(t,e)),n=e}if(i||r||s){let t="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(t+="specular-glossiness:"),i&&(t+="derivative-tangents:"),r&&(t+="vertex-colors:"),s&&(t+="flat-shading:");let e=this.cache.get(t);e||(e=n.clone(),r&&(e.vertexColors=!0),s&&(e.flatShading=!0),i&&(e.normalScale&&(e.normalScale.y*=-1),e.clearcoatNormalScale&&(e.clearcoatNormalScale.y*=-1)),this.cache.add(t,e),this.associations.set(e,this.associations.get(n))),n=e}n.aoMap&&void 0===e.attributes.uv2&&void 0!==e.attributes.uv&&e.setAttribute("uv2",e.attributes.uv),t.material=n}getMaterialType(){return No}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let s;const a={},o=r.extensions||{},l=[];if(o[Th.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const t=i[Th.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=t.getMaterialType(),l.push(t.extendParams(a,r,e))}else if(o[Th.KHR_MATERIALS_UNLIT]){const t=i[Th.KHR_MATERIALS_UNLIT];s=t.getMaterialType(),l.push(t.extendParams(a,r,e))}else{const n=r.pbrMetallicRoughness||{};if(a.color=new Rt(1,1,1),a.opacity=1,Array.isArray(n.baseColorFactor)){const t=n.baseColorFactor;a.color.fromArray(t),a.opacity=t[3]}void 0!==n.baseColorTexture&&l.push(e.assignTexture(a,"map",n.baseColorTexture,3001)),a.metalness=void 0!==n.metallicFactor?n.metallicFactor:1,a.roughness=void 0!==n.roughnessFactor?n.roughnessFactor:1,void 0!==n.metallicRoughnessTexture&&(l.push(e.assignTexture(a,"metalnessMap",n.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",n.metallicRoughnessTexture))),s=this._invokeOne((function(e){return e.getMaterialType&&e.getMaterialType(t)})),l.push(Promise.all(this._invokeAll((function(e){return e.extendMaterialParams&&e.extendMaterialParams(t,a)}))))}!0===r.doubleSided&&(a.side=2);const h=r.alphaMode||hc;if(h===uc?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===cc&&(a.alphaTest=void 0!==r.alphaCutoff?r.alphaCutoff:.5)),void 0!==r.normalTexture&&s!==nn&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new mt(1,1),void 0!==r.normalTexture.scale)){const t=r.normalTexture.scale;a.normalScale.set(t,t)}return void 0!==r.occlusionTexture&&s!==nn&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),void 0!==r.occlusionTexture.strength&&(a.aoMapIntensity=r.occlusionTexture.strength)),void 0!==r.emissiveFactor&&s!==nn&&(a.emissive=(new Rt).fromArray(r.emissiveFactor)),void 0!==r.emissiveTexture&&s!==nn&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,3001)),Promise.all(l).then((function(){let n;return n=s===Gh?i[Th.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):new s(a),r.name&&(n.name=r.name),mc(n,r),e.associations.set(n,{materials:t}),r.extensions&&pc(i,n,r),n}))}createUniqueName(t){const e=Wl.sanitizeNodeName(t||"");let n=e;for(let t=1;this.nodeNamesUsed[n];++t)n=e+"_"+t;return this.nodeNamesUsed[n]=!0,n}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(t){return n[Th.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(t,e).then((function(n){return bc(n,t,e)}))}const s=[];for(let n=0,a=t.length;n<a;n++){const a=t[n],o=gc(a),l=i[o];if(l)s.push(l.promise);else{let t;t=a.extensions&&a.extensions[Th.KHR_DRACO_MESH_COMPRESSION]?r(a):bc(new vn,a,e),i[o]={primitive:a,promise:t},s.push(t)}}return Promise.all(s)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],s=r.primitives,a=[];for(let t=0,e=s.length;t<e;t++){const e=void 0===s[t].material?dc(this.cache):this.getDependency("material",s[t].material);a.push(e)}return a.push(e.loadGeometries(s)),Promise.all(a).then((function(n){const a=n.slice(0,n.length-1),o=n[n.length-1],l=[];for(let n=0,h=o.length;n<h;n++){const h=o[n],c=s[n];let u;const d=a[n];if(c.mode===Qh||c.mode===tc||c.mode===ec||void 0===c.mode)u=!0===r.isSkinnedMesh?new ia(h,d):new Nn(h,d),!0!==u.isSkinnedMesh||u.geometry.attributes.skinWeight.normalized||u.normalizeSkinWeights(),c.mode===tc?u.geometry=wc(u.geometry,1):c.mode===ec&&(u.geometry=wc(u.geometry,2));else if(c.mode===Zh)u=new Ma(h,d);else if(c.mode===Kh)u=new _a(h,d);else if(c.mode===$h)u=new Sa(h,d);else{if(c.mode!==Jh)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+c.mode);u=new La(h,d)}Object.keys(u.geometry.morphAttributes).length>0&&fc(u,r),u.name=e.createUniqueName(r.name||"mesh_"+t),mc(u,r),c.extensions&&pc(i,u,c),e.assignFinalMaterial(u),l.push(u)}for(let n=0,i=l.length;n<i;n++)e.associations.set(l[n],{meshes:t,primitives:n});if(1===l.length)return l[0];const h=new Es;e.associations.set(h,{meshes:t});for(let t=0,e=l.length;t<e;t++)h.add(l[t]);return h}))}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(i)return"perspective"===n.type?e=new Gn(pt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):"orthographic"===n.type&&(e=new di(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),mc(e,n),Promise.resolve(e);console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(t){const e=this.json.skins[t],n={joints:e.joints};return void 0===e.inverseBindMatrices?Promise.resolve(n):this.getDependency("accessor",e.inverseBindMatrices).then((function(t){return n.inverseBindMatrices=t,n}))}loadAnimation(t){const e=this.json.animations[t],n=[],i=[],r=[],s=[],a=[];for(let t=0,o=e.channels.length;t<o;t++){const o=e.channels[t],l=e.samplers[o.sampler],h=o.target,c=void 0!==h.node?h.node:h.id,u=void 0!==e.parameters?e.parameters[l.input]:l.input,d=void 0!==e.parameters?e.parameters[l.output]:l.output;n.push(this.getDependency("node",c)),i.push(this.getDependency("accessor",u)),r.push(this.getDependency("accessor",d)),s.push(l),a.push(h)}return Promise.all([Promise.all(n),Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(a)]).then((function(n){const i=n[0],r=n[1],s=n[2],a=n[3],o=n[4],l=[];for(let t=0,e=i.length;t<e;t++){const e=i[t],n=r[t],h=s[t],c=a[t],u=o[t];if(void 0===e)continue;let d;switch(e.updateMatrix(),e.matrixAutoUpdate=!0,oc[u.path]){case oc.weights:d=Ko;break;case oc.rotation:d=tl;break;default:d=nl}const p=e.name?e.name:e.uuid,m=void 0!==c.interpolation?lc[c.interpolation]:2301,f=[];oc[u.path]===oc.weights?e.traverse((function(t){t.morphTargetInfluences&&f.push(t.name?t.name:t.uuid)})):f.push(p);let g=h.array;if(h.normalized){const t=yc(g.constructor),e=new Float32Array(g.length);for(let n=0,i=g.length;n<i;n++)e[n]=g[n]*t;g=e}for(let t=0,e=f.length;t<e;t++){const e=new d(f[t]+"."+oc[u.path],n.array,g,m);"CUBICSPLINE"===c.interpolation&&(e.createInterpolant=function(t){return new(this instanceof tl?Yh:qh)(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),l.push(e)}}const h=e.name?e.name:"animation_"+t;return new il(h,void 0,l)}))}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return void 0===i.mesh?null:n.getDependency("mesh",i.mesh).then((function(t){const e=n._getNodeRef(n.meshCache,i.mesh,t);return void 0!==i.weights&&e.traverse((function(t){if(t.isMesh)for(let e=0,n=i.weights.length;e<n;e++)t.morphTargetInfluences[e]=i.weights[e]})),e}))}loadNode(t){const e=this.json,n=this.extensions,i=this,r=e.nodes[t],s=r.name?i.createUniqueName(r.name):"";return function(){const e=[],n=i._invokeOne((function(e){return e.createNodeMesh&&e.createNodeMesh(t)}));return n&&e.push(n),void 0!==r.camera&&e.push(i.getDependency("camera",r.camera).then((function(t){return i._getNodeRef(i.cameraCache,r.camera,t)}))),i._invokeAll((function(e){return e.createNodeAttachment&&e.createNodeAttachment(t)})).forEach((function(t){e.push(t)})),Promise.all(e)}().then((function(e){let a;if(a=!0===r.isBone?new ra:e.length>1?new Es:1===e.length?e[0]:new Ve,a!==e[0])for(let t=0,n=e.length;t<n;t++)a.add(e[t]);if(r.name&&(a.userData.name=r.name,a.name=s),mc(a,r),r.extensions&&pc(n,a,r),void 0!==r.matrix){const t=new ve;t.fromArray(r.matrix),a.applyMatrix4(t)}else void 0!==r.translation&&a.position.fromArray(r.translation),void 0!==r.rotation&&a.quaternion.fromArray(r.rotation),void 0!==r.scale&&a.scale.fromArray(r.scale);return i.associations.has(a)||i.associations.set(a,{}),i.associations.get(a).nodes=t,a}))}loadScene(t){const e=this.json,n=this.extensions,i=this.json.scenes[t],r=this,s=new Es;i.name&&(s.name=r.createUniqueName(i.name)),mc(s,i),i.extensions&&pc(n,s,i);const a=i.nodes||[],o=[];for(let t=0,n=a.length;t<n;t++)o.push(_c(a[t],s,e,r));return Promise.all(o).then((function(){return r.associations=(t=>{const e=new Map;for(const[t,n]of r.associations)(t instanceof en||t instanceof Ot)&&e.set(t,n);return t.traverse((t=>{const n=r.associations.get(t);null!=n&&e.set(t,n)})),e})(s),s}))}}function _c(t,e,n,i){const r=n.nodes[t];return i.getDependency("node",t).then((function(t){if(void 0===r.skin)return t;let e;return i.getDependency("skin",r.skin).then((function(t){e=t;const n=[];for(let t=0,r=e.joints.length;t<r;t++)n.push(i.getDependency("node",e.joints[t]));return Promise.all(n)})).then((function(n){return t.traverse((function(t){if(!t.isMesh)return;const i=[],r=[];for(let t=0,s=n.length;t<s;t++){const s=n[t];if(s){i.push(s);const n=new ve;void 0!==e.inverseBindMatrices&&n.fromArray(e.inverseBindMatrices.array,16*t),r.push(n)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[t])}t.bind(new la(i,r),t.matrixWorld)})),t}))})).then((function(t){e.add(t);const s=[];if(r.children){const e=r.children;for(let r=0,a=e.length;r<a;r++){const a=e[r];s.push(_c(a,t,n,i))}}return Promise.all(s)}))}function bc(t,e,n){const i=e.attributes,r=[];function s(e,i){return n.getDependency("accessor",e).then((function(e){t.setAttribute(i,e)}))}for(const e in i){const n=ac[e]||e.toLowerCase();n in t.attributes||r.push(s(i[e],n))}if(void 0!==e.indices&&!t.index){const i=n.getDependency("accessor",e.indices).then((function(e){t.setIndex(e)}));r.push(i)}return mc(t,e),function(t,e,n){const i=e.attributes,r=new Gt;if(void 0===i.POSITION)return;{const t=n.json.accessors[i.POSITION],e=t.min,s=t.max;if(void 0===e||void 0===s)return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(r.set(new zt(e[0],e[1],e[2]),new zt(s[0],s[1],s[2])),t.normalized){const e=yc(nc[t.componentType]);r.min.multiplyScalar(e),r.max.multiplyScalar(e)}}const s=e.targets;if(void 0!==s){const t=new zt,e=new zt;for(let i=0,r=s.length;i<r;i++){const r=s[i];if(void 0!==r.POSITION){const i=n.json.accessors[r.POSITION],s=i.min,a=i.max;if(void 0!==s&&void 0!==a){if(e.setX(Math.max(Math.abs(s[0]),Math.abs(a[0]))),e.setY(Math.max(Math.abs(s[1]),Math.abs(a[1]))),e.setZ(Math.max(Math.abs(s[2]),Math.abs(a[2]))),i.normalized){const t=yc(nc[i.componentType]);e.multiplyScalar(t)}t.max(e)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(t)}t.boundingBox=r;const a=new le;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=a}(t,e,n),Promise.all(r).then((function(){return void 0!==e.targets?function(t,e,n){let i=!1,r=!1,s=!1;for(let t=0,n=e.length;t<n;t++){const n=e[t];if(void 0!==n.POSITION&&(i=!0),void 0!==n.NORMAL&&(r=!0),void 0!==n.COLOR_0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);const a=[],o=[],l=[];for(let h=0,c=e.length;h<c;h++){const c=e[h];if(i){const e=void 0!==c.POSITION?n.getDependency("accessor",c.POSITION):t.attributes.position;a.push(e)}if(r){const e=void 0!==c.NORMAL?n.getDependency("accessor",c.NORMAL):t.attributes.normal;o.push(e)}if(s){const e=void 0!==c.COLOR_0?n.getDependency("accessor",c.COLOR_0):t.attributes.color;l.push(e)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then((function(e){const n=e[0],a=e[1],o=e[2];return i&&(t.morphAttributes.position=n),r&&(t.morphAttributes.normal=a),s&&(t.morphAttributes.color=o),t.morphTargetsRelative=!0,t}))}(t,e.targets,n):t}))}function wc(t,e){let n=t.getIndex();if(null===n){const e=[],i=t.getAttribute("position");if(void 0===i)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t;for(let t=0;t<i.count;t++)e.push(t);t.setIndex(e),n=t.getIndex()}const i=n.count-2,r=[];if(2===e)for(let t=1;t<=i;t++)r.push(n.getX(0)),r.push(n.getX(t)),r.push(n.getX(t+1));else for(let t=0;t<i;t++)t%2==0?(r.push(n.getX(t)),r.push(n.getX(t+1)),r.push(n.getX(t+2))):(r.push(n.getX(t+2)),r.push(n.getX(t+1)),r.push(n.getX(t)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=t.clone();return s.setIndex(r),s}class Mc{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(t){if(!this.workers[t]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){const n=this.workersResolve[t];if(n&&n(e),this.queue.length){const{resolve:e,msg:n,transfer:i}=this.queue.shift();this.workersResolve[t]=e,this.workers[t].postMessage(n,i)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise((n=>{const i=this._getIdleWorker();-1!==i?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(t,e)):this.queue.push({resolve:n,msg:t,transfer:e})}))}dispose(){this.workers.forEach((t=>t.terminate())),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Sc=new WeakMap;let Tc=0;class Ec extends ol{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Mc,this.workerSourceURL="",this.workerConfig=null,"undefined"!=typeof MSC_TRANSCODER&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}detectSupport(t){return this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},t.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const t=new hl(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const e=t.loadAsync("basis_transcoder.js"),n=new hl(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([e,i]).then((([t,e])=>{const n=Ec.BasisWorker.toString(),i=["/* constants */","let _EngineFormat = "+JSON.stringify(Ec.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(Ec.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Ec.BasisFormat),"/* basis_transcoder.js */",t,"/* worker */",n.substring(n.indexOf("{")+1,n.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([i])),this.transcoderBinary=e,this.workerPool.setWorkerCreator((()=>{const t=new Worker(this.workerSourceURL),e=this.transcoderBinary.slice(0);return t.postMessage({type:"init",config:this.workerConfig,transcoderBinary:e},[e]),t}))})),Tc>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Tc++}return this.transcoderPending}load(t,e,n,i){if(null===this.workerConfig)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new hl(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials);const s=new Da;return r.load(t,(t=>{if(Sc.has(t)){return Sc.get(t).promise.then(e).catch(i)}this._createTexture([t]).then((function(t){s.copy(t),s.needsUpdate=!0,e&&e(s)})).catch(i)}),n,i),s}_createTextureFrom(t){const{mipmaps:e,width:n,height:i,format:r,type:s,error:a,dfdTransferFn:o,dfdFlags:l}=t;if("error"===s)return Promise.reject(a);const h=new Da(e,n,i,r,1009);return h.minFilter=1===e.length?1006:1008,h.magFilter=1006,h.generateMipmaps=!1,h.needsUpdate=!0,h.encoding=2===o?3001:3e3,h.premultiplyAlpha=!!(1&l),h}_createTexture(t,e={}){const n=e,i=this.init().then((()=>this.workerPool.postMessage({type:"transcode",buffers:t,taskConfig:n},t))).then((t=>this._createTextureFrom(t.data)));return Sc.set(t[0],{promise:i}),i}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Tc--,this}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ac,Rc;Ec.BasisFormat={ETC1S:0,UASTC_4x4:1},Ec.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16},Ec.EngineFormat={RGBAFormat:1023,RGBA_ASTC_4x4_Format:37808,RGBA_BPTC_Format:36492,RGBA_ETC2_EAC_Format:37496,RGBA_PVRTC_4BPPV1_Format:35842,RGBA_S3TC_DXT5_Format:33779,RGB_ETC1_Format:36196,RGB_ETC2_Format:37492,RGB_PVRTC_4BPPV1_Format:35840,RGB_S3TC_DXT1_Format:33776},Ec.BasisWorker=function(){let t,e,n;const i=_EngineFormat,r=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",(function(a){const c=a.data;switch(c.type){case"init":t=c.config,u=c.transcoderBinary,e=new Promise((t=>{n={wasmBinary:u,onRuntimeInitialized:t},BASIS(n)})).then((()=>{n.initializeBasis(),void 0===n.KTX2File&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")}));break;case"transcode":e.then((()=>{try{const{width:e,height:a,hasAlpha:u,mipmaps:d,format:p,dfdTransferFn:m,dfdFlags:f}=function(e){const a=new n.KTX2File(new Uint8Array(e));function c(){a.close(),a.delete()}if(!a.isValid())throw c(),new Error("THREE.KTX2Loader:\tInvalid or unsupported .ktx2 file");const u=a.isUASTC()?s.UASTC_4x4:s.ETC1S,d=a.getWidth(),p=a.getHeight(),m=a.getLevels(),f=a.getHasAlpha(),g=a.getDFDTransferFunc(),v=a.getDFDFlags(),{transcoderFormat:y,engineFormat:x}=function(e,n,a,c){let u,d;const p=e===s.ETC1S?o:l;for(let i=0;i<p.length;i++){const r=p[i];if(t[r.if]&&(r.basisFormat.includes(e)&&!(c&&r.transcoderFormat.length<2)&&(!r.needsPowerOfTwo||h(n)&&h(a))))return u=r.transcoderFormat[c?1:0],d=r.engineFormat[c?1:0],{transcoderFormat:u,engineFormat:d}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),u=r.RGBA32,d=i.RGBAFormat,{transcoderFormat:u,engineFormat:d}}(u,d,p,f);if(!d||!p||!m)throw c(),new Error("THREE.KTX2Loader:\tInvalid texture");if(!a.startTranscoding())throw c(),new Error("THREE.KTX2Loader: .startTranscoding failed");const _=[];for(let t=0;t<m;t++){const e=a.getImageLevelInfo(t,0,0),n=e.origWidth,i=e.origHeight,r=new Uint8Array(a.getImageTranscodedSizeInBytes(t,0,0,y));if(!a.transcodeImage(r,t,0,0,y,0,-1,-1))throw c(),new Error("THREE.KTX2Loader: .transcodeImage failed.");_.push({data:r,width:n,height:i})}return c(),{width:d,height:p,hasAlpha:f,mipmaps:_,format:x,dfdTransferFn:g,dfdFlags:v}}(c.buffers[0]),g=[];for(let t=0;t<d.length;++t)g.push(d[t].data.buffer);self.postMessage({type:"transcode",id:c.id,width:e,height:a,hasAlpha:u,mipmaps:d,format:p,dfdTransferFn:m,dfdFlags:f},g)}catch(t){console.error(t),self.postMessage({type:"error",id:c.id,error:t.message})}}))}var u}));const a=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[r.BC1,r.BC3],engineFormat:[i.RGB_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[r.ETC1],engineFormat:[i.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],o=a.sort((function(t,e){return t.priorityETC1S-e.priorityETC1S})),l=a.sort((function(t,e){return t.priorityUASTC-e.priorityUASTC}));function h(t){return t<=2||0==(t&t-1)&&0!==t}};const Cc=Symbol("retainerCount"),Lc=Symbol("recentlyUsed"),Pc=Symbol("evict"),Dc=Symbol("evictionThreshold"),Ic=Symbol("cache");class Oc{constructor(t,e=5){this[Ac]=new Map,this[Rc]=[],this[Ic]=t,this[Dc]=e}set evictionThreshold(t){this[Dc]=t,this[Pc]()}get evictionThreshold(){return this[Dc]}get cache(){return this[Ic]}retainerCount(t){return this[Cc].get(t)||0}reset(){this[Cc].clear(),this[Lc]=[]}retain(t){this[Cc].has(t)||this[Cc].set(t,0),this[Cc].set(t,this[Cc].get(t)+1);const e=this[Lc].indexOf(t);-1!==e&&this[Lc].splice(e,1),this[Lc].unshift(t),this[Pc]()}release(t){this[Cc].has(t)&&this[Cc].set(t,Math.max(this[Cc].get(t)-1,0)),this[Pc]()}[(Ac=Cc,Rc=Lc,Pc)](){if(!(this[Lc].length<this[Dc]))for(let t=this[Lc].length-1;t>=this[Dc];--t){const e=this[Lc][t];0===this[Cc].get(e)&&(this[Ic].delete(e),this[Lc].splice(t,1))}}}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=t=>{const e=new Map;for(const n of t.mappings)for(const t of n.variants)e.set(t,{material:null,gltfMaterialIndex:n.material});return e};class Fc{constructor(t){this.parser=t,this.name="KHR_materials_variants"}afterRoot(t){const e=this.parser,n=e.json;if(void 0===n.extensions||void 0===n.extensions[this.name])return null;const i=(t=>{const e=[],n=new Set;for(const i of t){let t=i,r=0;for(;n.has(t);)t=i+"."+ ++r;n.add(t),e.push(t)}return e})((n.extensions[this.name].variants||[]).map((t=>t.name)));for(const i of t.scenes)i.traverse((t=>{const i=t;if(!i.isMesh)return;const r=e.associations.get(i);if(null==r||null==r.meshes||null==r.primitives)return;const s=n.meshes[r.meshes].primitives[r.primitives].extensions;s&&s[this.name]&&(i.userData.variantMaterials=Nc(s[this.name]))}));return t.userData.variants=i,Promise.resolve()}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Uc,kc;const Bc=new Map,zc=new Map;let Hc;const Vc=new class extends ol{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,n,i){const r=new hl(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,(t=>{const n={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(t,n).then(e).catch(i)}),n,i)}decodeDracoFile(t,e,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(t,r).then(e)}decodeGeometry(t,e){for(const t in e.attributeTypes){const n=e.attributeTypes[t];void 0!==n.BYTES_PER_ELEMENT&&(e.attributeTypes[t]=n.name)}const n=JSON.stringify(e);if(bh.has(t)){const e=bh.get(t);if(e.key===n)return e.promise;if(0===t.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,s=t.byteLength,a=this._getWorker(r,s).then((n=>(i=n,new Promise(((n,s)=>{i._callbacks[r]={resolve:n,reject:s},i.postMessage({type:"decode",id:r,taskConfig:e,buffer:t},[t])}))))).then((t=>this._createGeometry(t.geometry)));return a.catch((()=>!0)).then((()=>{i&&r&&this._releaseTask(i,r)})),bh.set(t,{key:n,promise:a}),a}_createGeometry(t){const e=new vn;t.index&&e.setIndex(new an(t.index.array,1));for(let n=0;n<t.attributes.length;n++){const i=t.attributes[n],r=i.name,s=i.array,a=i.itemSize;e.setAttribute(r,new an(s,a))}return e}_loadLibrary(t,e){const n=new hl(this.manager);return n.setPath(this.decoderPath),n.setResponseType(e),n.setWithCredentials(this.withCredentials),new Promise(((e,i)=>{n.load(t,e,void 0,i)}))}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then((e=>{const n=e[0];t||(this.decoderConfig.wasmBinary=e[1]);const i=wh.toString(),r=["/* draco decoder */",n,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([r]))})),this.decoderPending}_getWorker(t,e){return this._initDecoder().then((()=>{if(this.workerPool.length<this.workerLimit){const t=new Worker(this.workerSourceURL);t._callbacks={},t._taskCosts={},t._taskLoad=0,t.postMessage({type:"init",decoderConfig:this.decoderConfig}),t.onmessage=function(e){const n=e.data;switch(n.type){case"decode":t._callbacks[n.id].resolve(n);break;case"error":t._callbacks[n.id].reject(n);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+n.type+'"')}},this.workerPool.push(t)}else this.workerPool.sort((function(t,e){return t._taskLoad>e._taskLoad?-1:1}));const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[t]=e,n._taskLoad+=e,n}))}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map((t=>t._taskLoad)))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this}};let Gc;const Wc=new Ec;let jc,qc;const Xc=Symbol("loader"),Yc=Symbol("evictionPolicy"),Jc=Symbol("GLTFInstance");class Zc extends et{constructor(t){super(),this[kc]=(new Mh).register((t=>new Fc(t))),this[Jc]=t,this[Xc].setDRACOLoader(Vc),this[Xc].setKTX2Loader(Wc)}static setDRACODecoderLocation(t){Hc=t,Vc.setDecoderPath(t)}static getDRACODecoderLocation(){return Hc}static setKTX2TranscoderLocation(t){Gc=t,Wc.setTranscoderPath(t)}static getKTX2TranscoderLocation(){return Gc}static setMeshoptDecoderLocation(t){var e;jc!==t&&(jc=t,qc=(e=t,new Promise(((t,n)=>{const i=document.createElement("script");document.body.appendChild(i),i.onload=t,i.onerror=n,i.async=!0,i.src=e}))).then((()=>MeshoptDecoder.ready)).then((()=>MeshoptDecoder)))}static getMeshoptDecoderLocation(){return jc}static initializeKTX2Loader(t){Wc.detectSupport(t)}static get cache(){return Bc}static clearCache(){Bc.forEach(((t,e)=>{this.delete(e)})),this[Yc].reset()}static has(t){return Bc.has(t)}static async delete(t){if(!this.has(t))return;const e=Bc.get(t);zc.delete(t),Bc.delete(t);(await e).dispose()}static hasFinishedLoading(t){return!!zc.get(t)}get[(Uc=Yc,kc=Xc,Yc)](){return this.constructor[Yc]}async preload(t,e,n=(()=>{})){if(this[Xc].setWithCredentials(Zc.withCredentials),this.dispatchEvent({type:"preload",element:e,src:t}),!Bc.has(t)){null!=qc&&this[Xc].setMeshoptDecoder(await qc);const e=((t,e,n=(()=>{}))=>{const i=t=>{const e=t.loaded/t.total;n(Math.max(0,Math.min(1,isFinite(e)?e:1)))};return new Promise(((n,r)=>{e.load(t,n,i,r)}))})(t,this[Xc],(t=>{n(.8*t)})),i=this[Jc],r=e.then((t=>i.prepare(t))).then((t=>(n(.9),new i(t)))).catch((t=>(console.error(t),new i)));Bc.set(t,r)}await Bc.get(t),zc.set(t,!0),n&&n(1)}async load(t,e,n=(()=>{})){await this.preload(t,e,n);const i=await Bc.get(t),r=await i.clone();return this[Yc].retain(t),r.dispose=(()=>{const e=r.dispose;let n=!1;return()=>{n||(n=!0,e.apply(r),this[Yc].release(t))}})(),r}}Zc[Uc]=new Oc(Zc);class $c extends Ve{constructor(t=document.createElement("div")){super(),this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",(function(){this.traverse((function(t){t.element instanceof Element&&null!==t.element.parentNode&&t.element.parentNode.removeChild(t.element)}))}))}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}$c.prototype.isCSS2DObject=!0;const Kc=new zt,Qc=new ve,tu=new ve,eu=new zt,nu=new zt;class iu{constructor(t={}){const e=this;let n,i,r,s;const a={objects:new WeakMap},o=void 0!==t.element?t.element:document.createElement("div");function l(t,n,i){if(t.isCSS2DObject){Kc.setFromMatrixPosition(t.matrixWorld),Kc.applyMatrix4(tu);const l=!0===t.visible&&Kc.z>=-1&&Kc.z<=1&&!0===t.layers.test(i.layers);if(t.element.style.display=!0===l?"":"none",!0===l){t.onBeforeRender(e,n,i);const a=t.element;/apple/i.test(navigator.vendor)?a.style.transform="translate(-50%,-50%) translate("+Math.round(Kc.x*r+r)+"px,"+Math.round(-Kc.y*s+s)+"px)":a.style.transform="translate(-50%,-50%) translate("+(Kc.x*r+r)+"px,"+(-Kc.y*s+s)+"px)",a.parentNode!==o&&o.appendChild(a),t.onAfterRender(e,n,i)}const c={distanceToCameraSquared:h(i,t)};a.objects.set(t,c)}for(let e=0,r=t.children.length;e<r;e++)l(t.children[e],n,i)}function h(t,e){return eu.setFromMatrixPosition(t.matrixWorld),nu.setFromMatrixPosition(e.matrixWorld),eu.distanceToSquared(nu)}o.style.overflow="hidden",this.domElement=o,this.getSize=function(){return{width:n,height:i}},this.render=function(t,e){!0===t.autoUpdate&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),Qc.copy(e.matrixWorldInverse),tu.multiplyMatrices(e.projectionMatrix,Qc),l(t,t,e),function(t){const e=function(t){const e=[];return t.traverse((function(t){t.isCSS2DObject&&e.push(t)})),e}(t).sort((function(t,e){if(t.renderOrder!==e.renderOrder)return e.renderOrder-t.renderOrder;return a.objects.get(t).distanceToCameraSquared-a.objects.get(e).distanceToCameraSquared})),n=e.length;for(let t=0,i=e.length;t<i;t++)e[t].element.style.zIndex=n-t}(t)},this.setSize=function(t,e){n=t,i=e,r=n/2,s=i/2,o.style.width=t+"px",o.style.height=e+"px"}}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=t=>t&&"null"!==t?au(t):null,su=()=>{if(ph)return;const t=[];throw hh||t.push("WebXR Device API"),ch||t.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${t.join(", ")}`)},au=t=>new URL(t,window.location.toString()).toString(),ou=(t,e)=>{let n=null;return(...i)=>{null!=n&&self.clearTimeout(n),n=self.setTimeout((()=>{n=null,t(...i)}),e)}},lu=(t,e,n)=>Math.max(e,Math.min(n,t)),hu=(()=>{const t=(()=>{var t;if(null===(t=document.documentElement.getAttribute("itemtype"))||void 0===t?void 0:t.includes("schema.org/SearchResultsPage"))return!0;const e=null!=document.head?Array.from(document.head.querySelectorAll("meta")):[];for(const t of e)if("viewport"===t.name)return!0;return!1})();return t||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>t?window.devicePixelRatio:1})(),cu=(()=>{const t=new RegExp("[?&]model-viewer-debug-mode(&|$)");return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(t)})(),uu=(t=0)=>new Promise((e=>setTimeout(e,t)));class du{constructor(t=50){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(t)}setDecayTime(t){this.naturalFrequency=1/Math.max(.001,t)}update(t,e,n,i){const r=2e-4*this.naturalFrequency;if(null==t||0===i)return e;if(t===e&&0===this.velocity)return e;if(n<0)return t;const s=t-e,a=this.velocity+this.naturalFrequency*s,o=s+n*a,l=Math.exp(-this.naturalFrequency*n),h=(a-this.naturalFrequency*o)*l,c=-this.naturalFrequency*(h+a*l);return Math.abs(h)<r*Math.abs(i)&&c*s>=0?(this.velocity=0,e):(this.velocity=h,e+o*l)}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=(t,e)=>({type:"number",number:t,unit:e}),mu=(()=>{const t={};return e=>{const n=e;if(n in t)return t[n];const i=[];let r=0;for(;e;){if(++r>1e3){e="";break}const t=fu(e),n=t.nodes[0];if(null==n||0===n.terms.length)break;i.push(n),e=t.remainingInput}return t[n]=i}})(),fu=(()=>{const t=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,n=/^[\),]/;return i=>{const r=[];for(;i.length&&(i=i.trim(),!n.test(i));)if("("===i[0]){const{nodes:t,remainingInput:e}=xu(i);i=e,r.push({type:"function",name:{type:"ident",value:"calc"},arguments:t})}else if(t.test(i)){const t=gu(i),e=t.nodes[0];if("("===(i=t.remainingInput)[0]){const{nodes:t,remainingInput:n}=xu(i);r.push({type:"function",name:e,arguments:t}),i=n}else r.push(e)}else if(e.test(i))r.push({type:"operator",value:i[0]}),i=i.slice(1);else{const{nodes:t,remainingInput:e}="#"===i[0]?yu(i):vu(i);if(0===t.length)break;r.push(t[0]),i=e}return{nodes:[{type:"expression",terms:r}],remainingInput:i}}})(),gu=(()=>{const t=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const n=e.match(t);return{nodes:[{type:"ident",value:null==n?e:e.substr(0,n.index)}],remainingInput:null==n?"":e.substr(n.index)}}})(),vu=(()=>{const t=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,n=/^(m|mm|cm|rad|deg|[%])$/;return i=>{const r=i.match(t),s=null==r?"0":r[0],a=(i=null==s?i:i.slice(s.length)).match(e);let o=null!=a&&""!==a[0]?a[0]:null;const l=null==a?i:i.slice(o.length);return null==o||n.test(o)||(o=null),{nodes:[{type:"number",number:parseFloat(s)||0,unit:o}],remainingInput:l}}})(),yu=(()=>{const t=/^[a-f0-9]*/i;return e=>{const n=(e=e.slice(1).trim()).match(t);return{nodes:null==n?[]:[{type:"hex",value:n[0]}],remainingInput:null==n?e:e.slice(n[0].length)}}})(),xu=t=>{const e=[];for(t=t.slice(1).trim();t.length;){const n=fu(t);if(e.push(n.nodes[0]),","===(t=n.remainingInput.trim())[0])t=t.slice(1).trim();else if(")"===t[0]){t=t.slice(1);break}}return{nodes:e,remainingInput:t}},_u=Symbol("visitedTypes");class bu{constructor(t){this[_u]=t}walk(t,e){const n=t.slice();for(;n.length;){const t=n.shift();switch(this[_u].indexOf(t.type)>-1&&e(t),t.type){case"expression":n.unshift(...t.terms);break;case"function":n.unshift(t.name,...t.arguments)}}}}const wu=Object.freeze({type:"number",number:0,unit:null}),Mu=(t,e=0)=>{let{number:n,unit:i}=t;if(isFinite(n)){if("rad"===t.unit||null==t.unit)return t}else n=e,i="rad";return{type:"number",number:("deg"===i&&null!=n?n:0)*Math.PI/180,unit:"rad"}},Su=(t,e=0)=>{let n,{number:i,unit:r}=t;if(isFinite(i)){if("m"===t.unit)return t}else i=e,r="m";switch(r){default:n=1;break;case"cm":n=.01;break;case"mm":n=.001}return{type:"number",number:n*i,unit:"m"}},Tu=(()=>{const t=t=>t,e={rad:t,deg:Mu,m:t,mm:Su,cm:Su};return(t,n=wu)=>{isFinite(t.number)||(t.number=n.number,t.unit=n.unit);const{unit:i}=t;if(null==i)return t;const r=e[i];return null==r?n:r(t)}})();
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu extends $c{constructor(t){super(document.createElement("div")),this.normal=new zt(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=t.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(t.position),this.updateNormal(t.normal)}get facingCamera(){return!this.element.classList.contains("hide")}show(){this.facingCamera&&this.initialized||this.updateVisibility(!0)}hide(){!this.facingCamera&&this.initialized||this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,0===this.referenceCount}updatePosition(t){if(null==t)return;const e=mu(t)[0].terms;for(let t=0;t<3;++t)this.position.setComponent(t,Tu(e[t]).number);this.updateMatrixWorld()}updateNormal(t){if(null==t)return;const e=mu(t)[0].terms;for(let t=0;t<3;++t)this.normal.setComponent(t,Tu(e[t]).number)}orient(t){this.pivot.style.transform=`rotate(${t}rad)`}updateVisibility(t){t?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;const n=e,i=n.dataset.visibilityAttribute;if(null!=i){const e=`data-${i}`;t?n.setAttribute(e,""):n.removeAttribute(e)}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:t}}))})),this.initialized=!0}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=(t,e,n)=>{let i=n;const r=new zt;return t.traverseVisible((t=>{let n,s;t.updateWorldMatrix(!1,!1);const a=t.geometry;if(void 0!==a)if(a.isGeometry){const o=a.vertices;for(n=0,s=o.length;n<s;n++)r.copy(o[n]),t.isSkinnedMesh?t.boneTransform(n,r):r.applyMatrix4(t.matrixWorld),i=e(i,r)}else if(a.isBufferGeometry){const{position:o}=a.attributes;if(void 0!==o){const a=(t=>{if(!t.normalized)return 1;const e=t.array;return e instanceof Int8Array?1/127:e instanceof Uint8Array?1/255:e instanceof Int16Array?1/32767:e instanceof Uint16Array?1/65535:1})(o);for(n=0,s=o.count;n<s;n++)r.fromBufferAttribute(o,n),r.multiplyScalar(a),t.isSkinnedMesh?t.boneTransform(n,r):r.applyMatrix4(t.matrixWorld),i=e(i,r)}}})),i},Ru={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform float h;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 sum = vec4( 0.0 );\n\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n\t\t\tgl_FragColor = sum;\n\n\t\t}"},Cu={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform float v;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 sum = vec4( 0.0 );\n\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n\t\t\tgl_FragColor = sum;\n\n\t\t}"},Lu=[];for(let t=0;t<256;t++)Lu[t]=(t<16?"0":"")+t.toString(16);function Pu(t,e,n){return(1-n)*t+n*e}
/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Ve{constructor(t,e,n){super(),this.camera=new di,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new xs,this.horizontalBlurMaterial=new Hn(Ru),this.verticalBlurMaterial=new Hn(Cu),this.intensity=0,this.softness=1,this.boundingBox=new Gt,this.size=new zt,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:i}=this;i.rotation.x=Math.PI/2,i.left=-.5,i.right=.5,i.bottom=-.5,i.top=.5,this.add(i);const r=new ni,s=new nn({opacity:1,transparent:!0,side:1});this.floor=new Nn(r,s),this.floor.userData.shadow=!0,i.add(this.floor),this.blurPlane=new Nn(r),this.blurPlane.visible=!1,i.add(this.blurPlane),t.target.add(this),this.depthMaterial.onBeforeCompile=function(t){t.fragmentShader=t.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(t,e,n)}setScene(t,e,n){const{boundingBox:i,size:r,rotation:s,position:a}=this;if(this.isAnimated=t.animationNames.length>0,this.boundingBox.copy(t.boundingBox),this.size.copy(t.size),this.maxDimension=Math.max(r.x,r.y,r.z)*(this.isAnimated?2:1),this.boundingBox.getCenter(a),"back"===n){const{min:t,max:e}=i;[t.y,t.z]=[t.z,t.y],[e.y,e.z]=[e.z,e.y],[r.y,r.z]=[r.z,r.y],s.x=Math.PI/2,s.y=Math.PI}else s.x=0,s.y=0;if(this.isAnimated){const t=i.min.y,e=i.max.y;r.y=this.maxDimension,i.expandByVector(r.subScalar(this.maxDimension).multiplyScalar(-.5)),i.min.y=t,i.max.y=e,r.set(this.maxDimension,e-t,this.maxDimension)}"bottom"===n?a.y=i.min.y:a.z=i.min.y,this.setSoftness(e)}setSoftness(t){this.softness=t;const{size:e,camera:n}=this,i=this.isAnimated?2:1,r=i*Math.pow(2,9-3*t);this.setMapSize(r);const s=e.y/2,a=e.y*i;n.near=0,n.far=Pu(a,s,t),this.depthMaterial.opacity=1/t,n.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(t){const{size:e}=this;this.isAnimated&&(t*=2);const n=Math.floor(e.x>e.z?t:t*e.x/e.z),i=Math.floor(e.x>e.z?t*e.z/e.x:t),r=10+n,s=10+i;if(null==this.renderTarget||this.renderTarget.width===r&&this.renderTarget.height===s||(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),null==this.renderTarget){const t={format:1023};this.renderTarget=new Ft(r,s,t),this.renderTargetBlur=new Ft(r,s,t),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(e.x*(1+10/n),e.z*(1+10/i),1),this.needsUpdate=!0}setIntensity(t){this.intensity=t,t>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=t*Pu(.3,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(t){this.floor.position.z=-t+.001*this.maxDimension}render(t,e){e.overrideMaterial=this.depthMaterial;const n=t.getClearAlpha();t.setClearAlpha(0),this.floor.visible=!1;const i=t.xr.enabled;t.xr.enabled=!1;const r=t.getRenderTarget();t.setRenderTarget(this.renderTarget),t.render(e,this.camera),e.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(t),t.xr.enabled=i,t.setRenderTarget(r),t.setClearAlpha(n)}blurShadow(t){const{camera:e,horizontalBlurMaterial:n,verticalBlurMaterial:i,renderTarget:r,renderTargetBlur:s,blurPlane:a}=this;a.visible=!0,a.material=n,n.uniforms.h.value=1/this.renderTarget.width,n.uniforms.tDiffuse.value=this.renderTarget.texture,t.setRenderTarget(s),t.render(a,e),a.material=i,i.uniforms.v.value=1/this.renderTarget.height,i.uniforms.tDiffuse.value=this.renderTargetBlur.texture,t.setRenderTarget(r),t.render(a,e),a.visible=!1}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new zt,Ou=new zt,Nu=new zt,Fu=new class{constructor(t,e,n=0,i=1/0){this.ray=new ge(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Re,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Yl(t,this,n,e),n.sort(Xl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Yl(t[i],this,n,e);return n.sort(Xl),n}},Uu=new zt,ku=new mt;class Bu extends Is{constructor({canvas:t,element:e,width:n,height:i}){super(),this.context=null,this.annotationRenderer=new iu,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.renderCount=0,this.externalRenderer=null,this.camera=new Gn(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new Ve,this.modelContainer=new Ve,this.animationNames=[],this.boundingBox=new Gt,this.boundingSphere=new le,this.size=new zt,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=Array(),this.exposure=1,this.canScale=!0,this.tightBounds=!1,this.isDirty=!1,this.goalTarget=new zt,this.targetDamperX=new du,this.targetDamperY=new du,this.targetDamperZ=new du,this._currentGLTF=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.name="ModelScene",this.element=e,this.canvas=t,this.camera=new Gn(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(n,i),this.target.name="Target",this.modelContainer.name="ModelContainer",this.target.add(this.modelContainer),this.mixer=new ql(this.modelContainer);const{domElement:r}=this.annotationRenderer,{style:s}=r;s.display="none",s.pointerEvents="none",s.position="absolute",s.top="0",this.element.shadowRoot.querySelector(".default").appendChild(r),this.schemaElement.setAttribute("type","application/ld+json")}createContext(){this.context=this.canvas.getContext("2d")}getCamera(){return null!=this.xrCamera?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}async setObject(t){this.reset(),this.modelContainer.add(t),await this.setupScene()}async setSource(t,e=(()=>{})){if(!t||t===this.url)return void e(1);if(this.reset(),this.url=t,null!=this.externalRenderer){const t=await this.externalRenderer.load(e);return this.boundingSphere.radius=t.framedRadius,this.idealAspect=t.fieldOfViewAspect,void this.dispatchEvent({type:"model-load",url:this.url})}let n;null!=this.cancelPendingSourceChange&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);try{n=await new Promise((async(n,i)=>{this.cancelPendingSourceChange=()=>i();try{n(await this.element[Ep].loader.load(t,this.element,e))}catch(t){i(t)}}))}catch(t){if(null==t)return;throw t}this.reset(),this.url=t,this._currentGLTF=n,null!=n&&this.modelContainer.add(n.scene);const{animations:i}=n,r=new Map,s=[];for(const t of i)r.set(t.name,t),s.push(t.name);this.animations=i,this.animationsByName=r,this.animationNames=s,await this.setupScene()}async setupScene(){this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.dispatchEvent({type:"model-load",url:this.url})}reset(){this.url=null,this.queueRender(),null!=this.shadow&&this.shadow.setIntensity(0);const t=this._currentGLTF;if(null!=t){for(const t of this.modelContainer.children)this.modelContainer.remove(t);t.dispose(),this._currentGLTF=null}null!=this.currentAnimationAction&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}get currentGLTF(){return this._currentGLTF}setSize(t,e){if(this.width!==t||this.height!==e){if(this.width=Math.max(t,1),this.height=Math.max(e,1),this.annotationRenderer.setSize(t,e),this.aspect=this.width/this.height,null!=this.externalRenderer){const n=hu();this.externalRenderer.resize(t*n,e*n)}this.queueRender()}}findBakedShadows(t){const e=new Gt;t.traverse((t=>{const n=t;if(!n.isMesh)return;const i=n.material;if(!i.isMeshBasicMaterial||!i.transparent)return;e.setFromObject(n);const r=e.getSize(Uu),s=Math.min(r.x,r.y,r.z);Math.max(r.x,r.y,r.z)<100*s||(this.bakedShadows.push(n),n.userData.shadow=!0)}))}updateBoundingBox(){if(this.target.remove(this.modelContainer),this.findBakedShadows(this.modelContainer),!0===this.tightBounds){const t=(t,e)=>t.expandByPoint(e);this.setBakedShadowVisibility(!1),this.boundingBox=Au(this.modelContainer,t,new Gt),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows=[],this.boundingBox=Au(this.modelContainer,t,new Gt)),this.setBakedShadowVisibility()}else this.boundingBox.setFromObject(this.modelContainer);this.boundingBox.getSize(this.size),this.target.add(this.modelContainer)}async updateFraming(){this.target.remove(this.modelContainer),this.setBakedShadowVisibility(!1);const{center:t}=this.boundingSphere;!0===this.tightBounds?(await this.element.requestUpdate("cameraTarget"),t.copy(this.getTarget())):this.boundingBox.getCenter(t);this.boundingSphere.radius=Math.sqrt(Au(this.modelContainer,((e,n)=>Math.max(e,t.distanceToSquared(n))),0));this.idealAspect=Au(this.modelContainer,((e,n)=>{n.sub(t);const i=Math.sqrt(n.x*n.x+n.z*n.z);return Math.max(e,i/(this.idealCameraDistance()-Math.abs(n.y)))}),0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(this.modelContainer)}setBakedShadowVisibility(t=this.shadowIntensity<=0){for(const e of this.bakedShadows)e.visible=t}idealCameraDistance(){const t=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(t)}adjustedFoV(t){const e=Math.tan(t/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(e)*180/Math.PI}getNDC(t,e){if(null!=this.xrCamera)ku.set(t/window.screen.width,e/window.screen.height);else{const n=this.element.getBoundingClientRect();ku.set((t-n.x)/this.width,(e-n.y)/this.height)}return ku.multiplyScalar(2).subScalar(1),ku.y*=-1,ku}getSize(){return{width:this.width,height:this.height}}setTarget(t,e,n){this.goalTarget.set(-t,-e,-n)}setTargetDamperDecayTime(t){this.targetDamperX.setDecayTime(t),this.targetDamperY.setDecayTime(t),this.targetDamperZ.setDecayTime(t)}getTarget(){return Uu.copy(this.goalTarget).multiplyScalar(-1)}jumpToGoal(){this.updateTarget(1e4)}updateTarget(t){const e=this.goalTarget,n=this.target.position;if(!e.equals(n)){const i=this.boundingSphere.radius/10;let{x:r,y:s,z:a}=n;r=this.targetDamperX.update(r,e.x,t,i),s=this.targetDamperY.update(s,e.y,t,i),a=this.targetDamperZ.update(a,e.z,t,i),this.target.position.set(r,s,a),this.target.updateMatrixWorld(),this.queueRender()}}pointTowards(t,e){const{x:n,z:i}=this.position;this.yaw=Math.atan2(t-n,e-i)}set yaw(t){this.rotation.y=t,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(t){this.mixer.setTime(t),this.queueShadowRender()}get animationTime(){if(null!=this.currentAnimationAction){const t=Math.max(this.currentAnimationAction._loopCount,0);return 2202===this.currentAnimationAction.loop&&1==(1&t)?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(t){this.mixer.timeScale=t}get animationTimeScale(){return this.mixer.timeScale}get duration(){return null!=this.currentAnimationAction&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return null!=this.currentAnimationAction}playAnimation(t=null,e=0,n=2201,i=1/0){if(null==this._currentGLTF)return;const{animations:r}=this;if(null==r||0===r.length)return void console.warn("Cannot play animation (model does not have any animations)");let s=null;if(null!=t&&(s=this.animationsByName.get(t),null==s)){const e=parseInt(t);!isNaN(e)&&e>=0&&e<r.length&&(s=r[e])}null==s&&(s=r[0]);try{const{currentAnimationAction:t}=this,r=this.mixer.clipAction(s,this);this.currentAnimationAction=r,this.element.paused?this.mixer.stopAllAction():(r.paused=!1,null!=t&&r!==t?r.crossFadeFrom(t,e,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),r.setLoop(n,i),r.enabled=!0,r.clampWhenFinished=!0,r.play()}catch(t){console.error(t)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(t){this.mixer.update(t),this.queueShadowRender()}subscribeMixerEvent(t,e){this.mixer.addEventListener(t,e)}updateShadow(){const t=this.shadow;if(null!=t){const e="wall"===this.element.arPlacement?"back":"bottom";t.setScene(this,this.shadowSoftness,e),t.needsUpdate=!0}}renderShadow(t){const e=this.shadow;null!=e&&1==e.needsUpdate&&(e.render(t,this),e.needsUpdate=!1)}queueShadowRender(){null!=this.shadow&&(this.shadow.needsUpdate=!0)}setShadowIntensity(t){if(this.shadowIntensity=t,null!=this._currentGLTF&&(this.setBakedShadowVisibility(),!(t<=0&&null==this.shadow))){if(null==this.shadow){const t="wall"===this.element.arPlacement?"back":"bottom";this.shadow=new Du(this,this.shadowSoftness,t)}this.shadow.setIntensity(t)}}setShadowSoftness(t){this.shadowSoftness=t;const e=this.shadow;null!=e&&e.setSoftness(t)}setShadowOffset(t){const e=this.shadow;null!=e&&e.setOffset(t)}get raycaster(){return Fu}positionAndNormalFromPoint(t,e=this){this.raycaster.setFromCamera(t,this.getCamera());const n=this.raycaster.intersectObject(e,!0).find((t=>!t.object.userData.shadow));return null==n||null==n.face?null:null==n.uv?{position:n.point,normal:n.face.normal,uv:null}:(n.face.normal.applyNormalMatrix((new ft).getNormalMatrix(n.object.matrixWorld)),{position:n.point,normal:n.face.normal,uv:n.uv})}addHotspot(t){this.target.add(t),this.annotationRenderer.domElement.appendChild(t.element)}removeHotspot(t){this.target.remove(t)}forHotspots(t){const{children:e}=this.target;for(let n=0,i=e.length;n<i;n++){const i=e[n];i instanceof Eu&&t(i)}}updateHotspots(t){this.forHotspots((e=>{Iu.copy(t),Ou.setFromMatrixPosition(e.matrixWorld),Iu.sub(Ou),Nu.copy(e.normal).transformDirection(this.target.matrixWorld),Iu.dot(Nu)<0?e.hide():e.show()}))}orientHotspots(t){this.forHotspots((e=>{e.orient(t)}))}setHotspotsVisibility(t){this.forHotspots((e=>{e.visible=t}))}updateSchema(t){var e;const{schemaElement:n,element:i}=this,{alt:r,poster:s,iosSrc:a}=i;if(null!=t){const i=[{"@type":"MediaObject",contentUrl:t,encodingFormat:"gltf"===(null===(e=t.split(".").pop())||void 0===e?void 0:e.toLowerCase())?"model/gltf+json":"model/gltf-binary"}];a&&i.push({"@type":"MediaObject",contentUrl:a,encodingFormat:"model/vnd.usdz+zip"});const o={"@context":"http://schema.org/","@type":"3DModel",image:null!=s?s:void 0,name:null!=r?r:void 0,encoding:i};n.textContent=JSON.stringify(o),document.head.appendChild(n)}else null!=n.parentElement&&n.parentElement.removeChild(n)}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zu=function(t,e,n,i){for(var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const Hu=Symbol("currentEnvironmentMap"),Vu=Symbol("applyEnvironmentMap"),Gu=Symbol("updateEnvironment"),Wu=Symbol("cancelEnvironmentUpdate"),ju=Symbol("onPreload");class qu{constructor(t,e,n,i,r){this.xrLight=t,this.renderer=e,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=r,this.frameCallback=this.onXRFrame.bind(this);const s=e.xr.getSession();if(i&&"XRWebGLBinding"in window){const n=new qn(16);t.environment=n.texture;const i=e.getContext();switch(s.preferredReflectionFormat){case"srgba8":i.getExtension("EXT_sRGB");break;case"rgba16f":i.getExtension("OES_texture_half_float")}this.xrWebGLBinding=new XRWebGLBinding(s,i),this.lightProbe.addEventListener("reflectionchange",(()=>{this.updateReflection()}))}s.requestAnimationFrame(this.frameCallback)}updateReflection(){const t=this.renderer.properties.get(this.xrLight.environment);if(t){const e=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);e&&(t.__webglTexture=e,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(t,e){if(!this.xrLight)return;e.session.requestAnimationFrame(this.frameCallback);const n=e.getLightEstimate(this.lightProbe);if(n){this.xrLight.lightProbe.sh.fromArray(n.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const t=Math.max(1,Math.max(n.primaryLightIntensity.x,Math.max(n.primaryLightIntensity.y,n.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(n.primaryLightIntensity.x/t,n.primaryLightIntensity.y/t,n.primaryLightIntensity.z/t),this.xrLight.directionalLight.intensity=t,this.xrLight.directionalLight.position.copy(n.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class Xu extends Es{constructor(t,e=!0){super(),this.lightProbe=new Cl,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new Al,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,i=!1;t.xr.addEventListener("sessionstart",(()=>{const r=t.xr.getSession();"requestLightProbe"in r&&r.requestLightProbe({reflectionFormat:r.preferredReflectionFormat}).then((r=>{n=new qu(this,t,r,e,(()=>{i=!0,this.dispatchEvent({type:"estimationstart"})}))}))})),t.xr.addEventListener("sessionend",(()=>{n&&(n.dispose(),n=null),i&&this.dispatchEvent({type:"estimationend"})})),this.dispose=()=>{n&&(n.dispose(),n=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=Math.PI/24,Ju=new mt,Zu=(t,e,n)=>{let i=e>0?n>0?0:-Math.PI/2:n>0?Math.PI/2:Math.PI;for(let r=0;r<=12;++r)t.push(e+.17*Math.cos(i),n+.17*Math.sin(i),0,e+.2*Math.cos(i),n+.2*Math.sin(i),0),i+=Yu};class $u extends Nn{constructor(t,e){const n=new vn,i=[],r=[],{size:s,boundingBox:a}=t,o=s.x/2,l=("back"===e?s.y:s.z)/2;Zu(r,o,l),Zu(r,-o,l),Zu(r,-o,-l),Zu(r,o,-l);const h=r.length/3;for(let t=0;t<h-2;t+=2)i.push(t,t+1,t+3,t,t+3,t+2);const c=h-2;i.push(c,c+1,1,c,1,0),n.setAttribute("position",new hn(r,3)),n.setIndex(i),super(n),this.side=e;const u=this.material;switch(u.side=0,u.transparent=!0,u.opacity=0,this.goalOpacity=0,this.opacityDamper=new du,this.hitPlane=new Nn(new ni(2*(o+.2),2*(l+.2))),this.hitPlane.visible=!1,this.add(this.hitPlane),a.getCenter(this.position),e){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=a.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=a.min.z,this.position.z=this.shadowHeight}t.target.add(this),this.offsetHeight=0}getHit(t,e,n){Ju.set(e,-n),this.hitPlane.visible=!0;const i=t.positionAndNormalFromPoint(Ju,this.hitPlane);return this.hitPlane.visible=!1,null==i?null:i.position}getExpandedHit(t,e,n){this.hitPlane.scale.set(1e3,1e3,1e3);const i=this.getHit(t,e,n);return this.hitPlane.scale.set(1,1,1),i}set offsetHeight(t){t-=.001,"back"===this.side?this.position.z=this.shadowHeight+t:this.position.y=this.shadowHeight+t}get offsetHeight(){return"back"===this.side?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(t){this.goalOpacity=t?.75:0}updateOpacity(t){const e=this.material;e.opacity=this.opacityDamper.update(e.opacity,this.goalOpacity,t,1),this.visible=e.opacity>0}dispose(){var t;const{geometry:e,material:n}=this.hitPlane;e.dispose(),n.dispose(),this.geometry.dispose(),this.material.dispose(),null===(t=this.parent)||void 0===t||t.remove(this)}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="not-presenting",Qu="session-started",td="object-placed",ed="failed",nd="tracking",id="not-tracking",rd=new zt,sd=new ve,ad=new zt,od=new Gn(45,1,.1,100);class ld extends et{constructor(t){super(),this.renderer=t,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.oldBackground=null,this.oldEnvironment=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new zt,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new zt,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new zt,this.goalYaw=0,this.goalScale=1,this.xDamper=new du,this.yDamper=new du,this.zDamper=new du,this.yawDamper=new du,this.scaleDamper=new du,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{null!=this.placementBox&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new $u(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const e=this.transientHitTestSource;if(null==e)return;const n=this.frame.getHitTestResultsForTransientInput(e),i=this.presentedScene,r=this.placementBox;if(1===n.length){this.inputSource=t.inputSource;const{axes:e}=this.inputSource.gamepad,n=r.getHit(this.presentedScene,e[0],e[1]);r.show=!0,null!=n?(this.isTranslating=!0,this.lastDragPosition.copy(n)):!1===this.placeOnWall&&(this.isRotating=!0,this.lastAngle=1.5*e[0])}else if(2===n.length){r.show=!0,this.isTwoFingering=!0;const{separation:t}=this.fingerPolar(n);this.firstRatio=t/i.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=t.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){su();const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:{root:this.overlay}});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(t),this.threeRenderer.xr.cameraAutoUpdate=!1,t}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return su(),await navigator.xr.isSessionSupported("immersive-ar")}catch(t){return console.warn("Request to present in WebXR denied:"),console.warn(t),console.warn("Falling back to next ar-mode"),!1}}async present(t,e=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let n=new Promise(((t,e)=>{requestAnimationFrame((()=>t()))}));t.setHotspotsVisibility(!1),t.queueRender(),await n,this._presentedScene=t,this.overlay=t.element.shadowRoot.querySelector("div.default"),!0===e&&(this.xrLight=new Xu(this.threeRenderer),this.xrLight.addEventListener("estimationstart",(()=>{if(!this.isPresenting||null==this.xrLight)return;const t=this.presentedScene;t.add(this.xrLight),this.oldEnvironment=t.environment,t.environment=this.xrLight.environment})));const i=await this.resolveARSession();i.addEventListener("end",(()=>{this.postSessionCleanup()}),{once:!0});const r=t.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");r.classList.add("enabled"),r.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=r;const s=await i.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=t.yaw,this.goalYaw=t.yaw,this.goalScale=1,this.oldBackground=t.background,t.background=null,this.oldShadowIntensity=t.shadowIntensity,t.setShadowIntensity(.01),this.oldTarget.copy(t.getTarget()),t.addEventListener("model-load",this.onUpdateScene);const a=20*Math.PI/180,o=!0===this.placeOnWall?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(a),z:-Math.cos(a)});i.requestHitTestSource({space:s,offsetRay:o}).then((t=>{this.initialHitSource=t})),this.currentSession=i,this.placementBox=new $u(t,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:Qu})}async stopPresenting(){if(!this.isPresenting)return;const t=new Promise((t=>{this.resolveCleanup=t}));try{await this.currentSession.end(),await t}catch(t){console.warn("Error while trying to end WebXR AR session"),console.warn(t),this.postSessionCleanup()}}get isPresenting(){return null!=this.presentedScene}get target(){return this.oldTarget}updateTarget(){const t=this.presentedScene;if(null!=t){const e=t.getTarget();this.oldTarget.copy(e),this.placeOnWall?e.z=t.boundingBox.min.z:e.y=t.boundingBox.min.y,t.setTarget(e.x,e.y,e.z)}}postSessionCleanup(){const t=this.currentSession;null!=t&&(t.removeEventListener("selectstart",this.onSelectStart),t.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const e=this.presentedScene;if(null!=e){const{element:t}=e;null!=this.xrLight&&(e.remove(this.xrLight),null!=this.oldEnvironment&&(e.environment=this.oldEnvironment,this.oldEnvironment=null),this.xrLight.dispose(),this.xrLight=null),e.position.set(0,0,0),e.scale.set(1,1,1),e.setShadowOffset(0);const n=this.turntableRotation;null!=n&&(e.yaw=n);const i=this.oldShadowIntensity;null!=i&&e.setShadowIntensity(i);const r=this.oldBackground;null!=r&&(e.background=r);const s=this.oldTarget;e.setTarget(s.x,s.y,s.z),e.xrCamera=null,e.removeEventListener("model-load",this.onUpdateScene),e.orientHotspots(0),t.requestUpdate("cameraTarget"),t.requestUpdate("maxCameraOrbit"),t[Tp](t.getBoundingClientRect())}this.renderer.height=0;const n=this.exitWebXRButtonContainer;null!=n&&(n.classList.remove("enabled"),n.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const i=this.transientHitTestSource;null!=i&&(i.cancel(),this.transientHitTestSource=null);const r=this.initialHitSource;null!=r&&(r.cancel(),this.initialHitSource=null),null!=this.placementBox&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.oldBackground=null,this._presentedScene=null,this.frame=null,this.inputSource=null,this.overlay=null,null!=this.resolveCleanup&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:Ku})}updateView(t){const e=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(od),e.xrCamera=n.getCamera();const{elements:i}=e.getCamera().matrixWorld;if(e.orientHotspots(Math.atan2(i[1],i[5])),this.initialized||(this.placeInitially(),this.initialized=!0),t.requestViewportScale&&t.recommendedViewportScale){const e=t.recommendedViewportScale;t.requestViewportScale(Math.max(e,.25))}const r=this.currentSession.renderState.baseLayer.getViewport(t);this.threeRenderer.setViewport(r.x,r.y,r.width,r.height)}placeInitially(){const t=this.presentedScene,{position:e,element:n}=t,i=t.getCamera(),{width:r,height:s}=this.overlay.getBoundingClientRect();t.setSize(r,s),i.projectionMatrixInverse.copy(i.projectionMatrix).invert();const{theta:a,radius:o}=n.getCameraOrbit(),l=i.getWorldDirection(rd);t.yaw=Math.atan2(-l.x,-l.z)-a,this.goalYaw=t.yaw,e.copy(i.position).add(l.multiplyScalar(o)),this.updateTarget();const h=t.getTarget();e.add(h).sub(this.oldTarget),this.goalPosition.copy(e),t.setHotspotsVisibility(!0);const{session:c}=this.frame;c.addEventListener("selectstart",this.onSelectStart),c.addEventListener("selectend",this.onSelectEnd),c.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then((t=>{this.transientHitTestSource=t}))}getTouchLocation(){const{axes:t}=this.inputSource.gamepad;let e=this.placementBox.getExpandedHit(this.presentedScene,t[0],t[1]);return null!=e&&(rd.copy(e).sub(this.presentedScene.getCamera().position),rd.length()>10)?null:e}getHitPoint(t){const e=this.threeRenderer.xr.getReferenceSpace(),n=t.getPose(e);if(null==n)return null;const i=sd.fromArray(n.transform.matrix);return!0===this.placeOnWall&&(this.goalYaw=Math.atan2(i.elements[4],i.elements[6])),i.elements[5]>.75!==this.placeOnWall?ad.setFromMatrixPosition(i):null}moveToFloor(t){const e=this.initialHitSource;if(null==e)return;const n=t.getHitTestResults(e);if(0==n.length)return;const i=n[0],r=this.getHitPoint(i);null!=r&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(r):this.goalPosition.y=r.y),e.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:td}))}fingerPolar(t){const e=t[0].inputSource.gamepad.axes,n=t[1].inputSource.gamepad.axes,i=n[0]-e[0],r=n[1]-e[1],s=Math.atan2(r,i);let a=this.lastAngle-s;return a>Math.PI?a-=2*Math.PI:a<-Math.PI&&(a+=2*Math.PI),this.lastAngle=s,{separation:Math.sqrt(i*i+r*r),deltaYaw:a}}processInput(t){const e=this.transientHitTestSource;if(null==e)return;if(!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const n=t.getHitTestResultsForTransientInput(e),i=this.presentedScene,r=i.scale.x;if(this.isTwoFingering)if(n.length<2)this.isTwoFingering=!1;else{const{separation:t,deltaYaw:e}=this.fingerPolar(n);if(!1===this.placeOnWall&&(this.goalYaw+=e),i.canScale){const e=t/this.firstRatio;this.goalScale=e<1.3&&e>.7692307692307692?1:e}}else if(2!==n.length)if(this.isRotating){const t=1.5*this.inputSource.gamepad.axes[0];this.goalYaw+=t-this.lastAngle,this.lastAngle=t}else this.isTranslating&&n.forEach((t=>{if(t.inputSource!==this.inputSource)return;let e=null;if(t.results.length>0&&(e=this.getHitPoint(t.results[0])),null==e&&(e=this.getTouchLocation()),null!=e){if(this.goalPosition.sub(this.lastDragPosition),!1===this.placeOnWall){const t=e.y-this.lastDragPosition.y;if(t<0){this.placementBox.offsetHeight=t/r,this.presentedScene.setShadowOffset(t);const n=rd.copy(i.getCamera().position),s=-t/(n.y-e.y);n.multiplyScalar(s),e.multiplyScalar(1-s).add(n)}}this.goalPosition.add(e),this.lastDragPosition.copy(e)}}));else{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:t}=this.fingerPolar(n);this.firstRatio=t/r}}moveScene(t){const e=this.presentedScene,{position:n,yaw:i}=e,r=e.boundingSphere.radius,s=this.goalPosition,a=e.scale.x,o=this.placementBox;if(!s.equals(n)||this.goalScale!==a){let{x:i,y:l,z:h}=n;i=this.xDamper.update(i,s.x,t,r),l=this.yDamper.update(l,s.y,t,r),h=this.zDamper.update(h,s.z,t,r),n.set(i,l,h);const c=this.scaleDamper.update(a,this.goalScale,t,1);if(e.scale.set(c,c,c),!this.isTranslating){const t=s.y-l;this.placementComplete&&!1===this.placeOnWall?(o.offsetHeight=t/c,e.setShadowOffset(t)):0===t&&(this.placementComplete=!0,o.show=!1,e.setShadowIntensity(.8))}}o.updateOpacity(t),e.updateTarget(t),e.yaw=this.yawDamper.update(i,this.goalYaw,t,Math.PI)}onWebXRFrame(t,e){this.frame=e,++this.frames;const n=this.threeRenderer.xr.getReferenceSpace(),i=e.getViewerPose(n);null==i&&!0===this.tracking&&this.frames>30&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:id}));const r=this.presentedScene;if(null==i||null==r||!r.element[Pp]())return void this.threeRenderer.clear();!1===this.tracking&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:nd}));let s=!0;for(const n of i.views){if(this.updateView(n),s){this.moveToFloor(e),this.processInput(e);const n=t-this.lastTick;this.moveScene(n),this.renderer.preRender(r,t,n),this.lastTick=t,r.renderShadow(this.threeRenderer)}this.threeRenderer.render(r,r.getCamera()),s=!1}}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t){t.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then((()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:t,THREE:{ShaderMaterial:Hn,Texture:Ot,Mesh:Nn,Scene:Is,PlaneBufferGeometry:ni,OrthographicCamera:di,WebGLRenderTarget:Ft}}}))}))}addScene(t){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:t}}))}removeScene(t){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:t}}))}}function cd(t){const e=new Map,n=new Map,i=t.clone();return ud(t,i,(function(t,i){e.set(i,t),n.set(t,i)})),i.traverse((function(t){if(!t.isSkinnedMesh)return;const i=t,r=e.get(t),s=r.skeleton.bones;i.skeleton=r.skeleton.clone(),i.bindMatrix.copy(r.bindMatrix),i.skeleton.bones=s.map((function(t){return n.get(t)})),i.bind(i.skeleton,i.bindMatrix)})),i}function ud(t,e,n){n(t,e);for(let i=0;i<t.children.length;i++)ud(t.children[i],e.children[i],n)}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=Symbol("prepared"),pd=Symbol("prepare"),md=Symbol("preparedGLTF"),fd=Symbol("clone");class gd{constructor(t){this[md]=t}static prepare(t){if(null==t.scene)throw new Error("Model does not have a scene");if(t[dd])return t;const e=this[pd](t);return e[dd]=!0,e}static[pd](t){const{scene:e}=t,n=[e];return Object.assign(Object.assign({},t),{scene:e,scenes:n})}get parser(){return this[md].parser}get animations(){return this[md].animations}get scene(){return this[md].scene}get scenes(){return this[md].scenes}get cameras(){return this[md].cameras}get asset(){return this[md].asset}get userData(){return this[md].userData}clone(){return new(0,this.constructor)(this[fd]())}dispose(){this.scenes.forEach((t=>{t.traverse((t=>{if(!t.isMesh)return;const e=t;(Array.isArray(e.material)?e.material:[e.material]).forEach((t=>{for(const e in t){const n=t[e];n instanceof Ot&&n.dispose()}t.dispose()})),e.geometry.dispose()}))}))}[fd](){const t=this[md],e=cd(this.scene);vd(e,this.scene);const n=[e],i=t.userData?Object.assign({},t.userData):{};return Object.assign(Object.assign({},t),{scene:e,scenes:n,userData:i})}}const vd=(t,e)=>{yd(t,e,((t,e)=>{void 0!==e.userData.variantMaterials&&(t.userData.variantMaterials=new Map(e.userData.variantMaterials)),void 0!==e.userData.variantData&&(t.userData.variantData=e.userData.variantData),void 0!==e.userData.originalMaterial&&(t.userData.originalMaterial=e.userData.originalMaterial)}))},yd=(t,e,n)=>{n(t,e);for(let i=0;i<t.children.length;i++)yd(t.children[i],e.children[i],n)},xd=Symbol("threeGLTF"),_d=Symbol("gltf"),bd=Symbol("gltfElementMap"),wd=Symbol("threeObjectMap"),Md=Symbol("parallelTraverseThreeScene"),Sd=Symbol("correlateOriginalThreeGLTF"),Td=Symbol("correlateCloneThreeGLTF");class Ed{constructor(t,e,n,i){this[xd]=t,this[_d]=e,this[bd]=i,this[wd]=n}static from(t,e){return null!=e?this[Td](t,e):this[Sd](t)}static[Sd](t){const e=t.parser.json,n=t.parser.associations,i=new Map,r={name:"Default"},s={type:"materials",index:-1};for(const t of n.keys())t instanceof en&&null==n.get(t)&&(s.index<0&&(null==e.materials&&(e.materials=[]),s.index=e.materials.length,e.materials.push(r)),t.name=r.name,n.set(t,{materials:s.index}));for(const[t,r]of n){if(r){const e=t;e.userData=e.userData||{},e.userData.associations=r}for(const n in r)if(null!=n&&"primitives"!==n){const s=n,a=(e[s]||[])[r[s]];if(null==a)continue;let o=i.get(a);null==o&&(o=new Set,i.set(a,o)),o.add(t)}}return new Ed(t,e,n,i)}static[Td](t,e){const n=e.threeGLTF,i=e.gltf,r=JSON.parse(JSON.stringify(i)),s=new Map,a=new Map;for(let i=0;i<n.scenes.length;i++)this[Md](n.scenes[i],t.scenes[i],((t,n)=>{const i=e.threeObjectMap.get(t);if(null!=i)for(const t in i)if(null!=t&&"primitives"!==t){const e=t,o=i[e],l=r[e][o],h=s.get(n)||{};h[e]=o,s.set(n,h);const c=a.get(l)||new Set;c.add(n),a.set(l,c)}}));return new Ed(t,r,s,a)}static[Md](t,e,n){const i=(t,e)=>{if(n(t,e),t.isObject3D){if(t.isMesh)if(Array.isArray(t.material))for(let n=0;n<t.material.length;++n)i(t.material[n],e.material[n]);else i(t.material,e.material);for(let n=0;n<t.children.length;++n)i(t.children[n],e.children[n])}};i(t,e)}get threeGLTF(){return this[xd]}get gltf(){return this[_d]}get gltfElementMap(){return this[bd]}get threeObjectMap(){return this[wd]}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=Symbol("correlatedSceneGraph");class Rd extends gd{static[pd](t){const e=super[pd](t);null==e[Ad]&&(e[Ad]=Ed.from(e));const{scene:n}=e,i=new le(void 0,1/0);return n.traverse((t=>{t.renderOrder=1e3,t.frustumCulled=!1,t.name||(t.name=t.uuid);const e=t;if(e.isMesh){e.castShadow=!0,e.isSkinnedMesh&&(e.geometry.boundingSphere=i,e.geometry.boundingBox=null);const t=e.material;!0===t.isMeshBasicMaterial&&(t.toneMapped=!1),t.shadowSide=0}})),e}get correlatedSceneGraph(){return this[md][Ad]}[fd](){const t=super[fd](),e=new Map;return t.scene.traverse((t=>{if(t.isMesh){const n=t,i=n.material;if(null!=i){if(e.has(i.uuid))return void(n.material=e.get(i.uuid));n.material=i.clone(),e.set(i.uuid,n.material)}}})),t[Ad]=Ed.from(t,this.correlatedSceneGraph),t}}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cd extends Is{constructor(){super(),this.position.y=-3.5;const t=new Un;t.deleteAttribute("uv");const e=new No({metalness:0,side:1}),n=new No({metalness:0}),i=new Tl(16777215,500,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Nn(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const s=new Nn(t,n);s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),this.add(s);const a=new Nn(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const o=new Nn(t,n);o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),this.add(o);const l=new Nn(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Nn(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const c=new Nn(t,n);c.position.set(-2.193,-.369,-5.547),c.rotation.set(0,.516,0),c.scale.set(3.875,3.487,2.986),this.add(c);const u=new Nn(t,this.createAreaLightMaterial(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const d=new Nn(t,this.createAreaLightMaterial(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new Nn(t,this.createAreaLightMaterial(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const m=new Nn(t,this.createAreaLightMaterial(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const f=new Nn(t,this.createAreaLightMaterial(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const g=new Nn(t,this.createAreaLightMaterial(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}createAreaLightMaterial(t){const e=new nn;return e.color.setScalar(t),e}}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends Is{constructor(){super(),this.position.y=-3.5;const t=new Un;t.deleteAttribute("uv");const e=new No({metalness:0,side:1}),n=new No({metalness:0}),i=new Tl(16777215,400,28,2);i.position.set(.5,14,.5),this.add(i);const r=new Nn(t,e);r.position.set(0,13.2,0),r.scale.set(31.5,28.5,31.5),this.add(r);const s=new Nn(t,n);s.position.set(-10.906,-1,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),this.add(s);const a=new Nn(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const o=new Nn(t,n);o.position.set(6.167,-.16,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),this.add(o);const l=new Nn(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Nn(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const c=new Nn(t,n);c.position.set(-2.193,-.369,-5.547),c.rotation.set(0,.516,0),c.scale.set(3.875,3.487,2.986),this.add(c);const u=new Nn(t,this.createAreaLightMaterial(80));u.position.set(-14,10,8),u.scale.set(.1,2.5,2.5),this.add(u);const d=new Nn(t,this.createAreaLightMaterial(80));d.position.set(-14,14,-4),d.scale.set(.1,2.5,2.5),this.add(d);const p=new Nn(t,this.createAreaLightMaterial(23));p.position.set(14,12,0),p.scale.set(.1,5,5),this.add(p);const m=new Nn(t,this.createAreaLightMaterial(16));m.position.set(0,9,14),m.scale.set(5,5,.1),this.add(m);const f=new Nn(t,this.createAreaLightMaterial(80));f.position.set(7,8,-14),f.scale.set(2.5,2.5,.1),this.add(f);const g=new Nn(t,this.createAreaLightMaterial(80));g.position.set(-7,16,-14),g.scale.set(2.5,2.5,.1),this.add(g);const v=new Nn(t,this.createAreaLightMaterial(1));v.position.set(0,20,0),v.scale.set(.1,.1,.1),this.add(v)}createAreaLightMaterial(t){const e=new nn;return e.color.setScalar(t),e}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=/\.hdr(\.js)?$/,Dd=new pl,Id=new class extends dl{constructor(t){super(t),this.type=1016}parse(t){const e=function(t,e){switch(t){case 1:console.error("THREE.RGBELoader Read Error: "+(e||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(e||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(e||""));break;default:console.error("THREE.RGBELoader: Error: "+(e||""))}return-1},n=function(t,e,n){e=e||1024;let i=t.pos,r=-1,s=0,a="",o=String.fromCharCode.apply(null,new Uint16Array(t.subarray(i,i+128)));for(;0>(r=o.indexOf("\n"))&&s<e&&i<t.byteLength;)a+=o,s+=o.length,i+=128,o+=String.fromCharCode.apply(null,new Uint16Array(t.subarray(i,i+128)));return-1<r&&(!1!==n&&(t.pos+=s+r+1),a+o.slice(0,r))},i=function(t,e,n,i){const r=t[e+3],s=Math.pow(2,r-128)/255;n[i+0]=t[e+0]*s,n[i+1]=t[e+1]*s,n[i+2]=t[e+2]*s,n[i+3]=1},r=function(t,e,n,i){const r=t[e+3],s=Math.pow(2,r-128)/255;n[i+0]=th.toHalfFloat(Math.min(t[e+0]*s,65504)),n[i+1]=th.toHalfFloat(Math.min(t[e+1]*s,65504)),n[i+2]=th.toHalfFloat(Math.min(t[e+2]*s,65504)),n[i+3]=th.toHalfFloat(1)},s=new Uint8Array(t);s.pos=0;const a=function(t){const i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,r=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,a=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,o={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let l,h;if(t.pos>=t.byteLength||!(l=n(t)))return e(1,"no header found");if(!(h=l.match(/^#\?(\S+)/)))return e(3,"bad initial token");for(o.valid|=1,o.programtype=h[1],o.string+=l+"\n";l=n(t),!1!==l;)if(o.string+=l+"\n","#"!==l.charAt(0)){if((h=l.match(i))&&(o.gamma=parseFloat(h[1])),(h=l.match(r))&&(o.exposure=parseFloat(h[1])),(h=l.match(s))&&(o.valid|=2,o.format=h[1]),(h=l.match(a))&&(o.valid|=4,o.height=parseInt(h[1],10),o.width=parseInt(h[2],10)),2&o.valid&&4&o.valid)break}else o.comments+=l+"\n";return 2&o.valid?4&o.valid?o:e(3,"missing image size specifier"):e(3,"missing format specifier")}(s);if(-1!==a){const t=a.width,n=a.height,o=function(t,n,i){const r=n;if(r<8||r>32767||2!==t[0]||2!==t[1]||128&t[2])return new Uint8Array(t);if(r!==(t[2]<<8|t[3]))return e(3,"wrong scanline width");const s=new Uint8Array(4*n*i);if(!s.length)return e(4,"unable to allocate buffer space");let a=0,o=0;const l=4*r,h=new Uint8Array(4),c=new Uint8Array(l);let u=i;for(;u>0&&o<t.byteLength;){if(o+4>t.byteLength)return e(1);if(h[0]=t[o++],h[1]=t[o++],h[2]=t[o++],h[3]=t[o++],2!=h[0]||2!=h[1]||(h[2]<<8|h[3])!=r)return e(3,"bad rgbe scanline format");let n,i=0;for(;i<l&&o<t.byteLength;){n=t[o++];const r=n>128;if(r&&(n-=128),0===n||i+n>l)return e(3,"bad scanline data");if(r){const e=t[o++];for(let t=0;t<n;t++)c[i++]=e}else c.set(t.subarray(o,o+n),i),i+=n,o+=n}const d=r;for(let t=0;t<d;t++){let e=0;s[a]=c[t+e],e+=r,s[a+1]=c[t+e],e+=r,s[a+2]=c[t+e],e+=r,s[a+3]=c[t+e],a+=4}u--}return s}(s.subarray(s.pos),t,n);if(-1!==o){let e,s,l,h;switch(this.type){case 1015:h=o.length/4;const t=new Float32Array(4*h);for(let e=0;e<h;e++)i(o,4*e,t,4*e);e=t,l=1015;break;case 1016:h=o.length/4;const n=new Uint16Array(4*h);for(let t=0;t<h;t++)r(o,4*t,n,4*t);e=n,l=1016;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:t,height:n,data:e,header:a.string,gamma:a.gamma,exposure:a.exposure,format:s,type:l}}}return null}setDataType(t){return this.type=t,this}load(t,e,n,i){return super.load(t,(function(t,n){switch(t.type){case 1015:case 1016:t.encoding=3e3,t.minFilter=1006,t.magFilter=1006,t.generateMipmaps=!1,t.flipY=!0}e&&e(t,n)}),n,i)}};Id.setDataType(1016);class Od extends et{constructor(t){super(),this.threeRenderer=t,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}async load(t,e=(()=>{})){try{const n=Pd.test(t),i=n?Id:Dd,r=await new Promise(((n,r)=>i.load(t,n,(t=>{e(t.loaded/t.total*.9)}),r)));return e(1),r.name=t,r.mapping=303,n||(r.encoding=3001),r}finally{e&&e(1)}}async generateEnvironmentMapAndSkybox(t=null,e=null,n={}){const{progressTracker:i}=n,r="neutral"===e;!0===r&&(e=null),e=ru(e);let s,a=Promise.resolve(null);t&&(a=this.loadEquirectFromUrl(t,i)),s=e?this.loadEquirectFromUrl(e,i):t?this.loadEquirectFromUrl(t,i):!0===r?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();let[o,l]=await Promise.all([s,a]);if(null==o)throw new Error("Failed to load environment map.");return{environmentMap:o,skybox:l}}async loadEquirectFromUrl(t,e){if(!this.skyboxCache.has(t)){const n=e?e.beginActivity():()=>{},i=this.load(t,n);this.skyboxCache.set(t,i)}return this.skyboxCache.get(t)}async GenerateEnvironmentMap(t,e){await uu();const n=this.threeRenderer,i=new qn(256,{generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!0}),r=new Wn(.1,100,i),s=r.renderTarget.texture;s.name=e;const a=n.outputEncoding,o=n.toneMapping;return n.toneMapping=0,n.outputEncoding=3e3,r.update(n,t),this.blurCubemap(i,.04),n.toneMapping=o,n.outputEncoding=a,s}async loadGeneratedEnvironmentMap(){return null==this.generatedEnvironmentMap&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new Cd,"default")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return null==this.generatedEnvironmentMapAlt&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new Ld,"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(t,e){if(null==this.blurMaterial){this.blurMaterial=this.getBlurShader(20);const t=new Un,e=new Nn(t,this.blurMaterial);this.blurScene=new Is,this.blurScene.add(e)}const n=t.clone();this.halfblur(t,n,e,"latitudinal"),this.halfblur(n,t,e,"longitudinal")}halfblur(t,e,n,i){const r=t.width,s=isFinite(n)?Math.PI/(2*r):2*Math.PI/39,a=n/s,o=isFinite(n)?1+Math.floor(3*a):20;o>20&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${o} samples when the maximum is set to 20`);const l=[];let h=0;for(let t=0;t<20;++t){const e=t/a,n=Math.exp(-e*e/2);l.push(n),0==t?h+=n:t<o&&(h+=2*n)}for(let t=0;t<l.length;t++)l[t]=l[t]/h;const c=this.blurMaterial.uniforms;c.envMap.value=t.texture,c.samples.value=o,c.weights.value=l,c.latitudinal.value="latitudinal"===i,c.dTheta.value=s;new Wn(.1,100,e).update(this.threeRenderer,this.blurScene)}getBlurShader(t){const e=new Float32Array(t),n=new zt(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:"\n      \n      varying vec3 vOutputDirection;\n  \n      void main() {\n  \n        vOutputDirection = vec3( position );\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  \n      }\n    ",fragmentShader:"\n        varying vec3 vOutputDirection;\n  \n        uniform samplerCube envMap;\n        uniform int samples;\n        uniform float weights[ n ];\n        uniform bool latitudinal;\n        uniform float dTheta;\n        uniform vec3 poleAxis;\n  \n        vec3 getSample( float theta, vec3 axis ) {\n  \n          float cosTheta = cos( theta );\n          // Rodrigues' axis-angle rotation\n          vec3 sampleDirection = vOutputDirection * cosTheta\n            + cross( axis, vOutputDirection ) * sin( theta )\n            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n  \n          return vec3( textureCube( envMap, sampleDirection ) );\n  \n        }\n  \n        void main() {\n  \n          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n  \n          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n  \n            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n  \n          }\n  \n          axis = normalize( axis );\n  \n          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n  \n          for ( int i = 1; i < n; i++ ) {\n  \n            if ( i >= samples ) {\n  \n              break;\n  \n            }\n  \n            float theta = dTheta * float( i );\n            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n  \n          }\n        }\n      ",blending:0,depthTest:!1,depthWrite:!1,side:1})}async dispose(){for(const[,t]of this.skyboxCache){(await t).dispose()}null!=this.generatedEnvironmentMap&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),null!=this.generatedEnvironmentMapAlt&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),null!=this.blurMaterial&&this.blurMaterial.dispose()}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=[1,.79,.62,.5,.4,.31,.25];class Fd extends et{constructor(t){super(),this.loader=new Zc(Rd),this.width=0,this.height=0,this.dpr=1,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.scaleStep=0,this.lastStep=3,this.avgFrameDuration=22,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;null===(t=this.textureUtils)||void 0===t||t.dispose(),this.textureUtils=new Od(this.threeRenderer);for(const t of this.scenes)t.element[Gu]()},this.dpr=hu(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas";try{this.threeRenderer=new Ds({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:t.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=3001,this.threeRenderer.physicallyCorrectLights=!0,this.threeRenderer.setPixelRatio(1),this.debugger=t.debug?new hd(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=4}catch(t){console.warn(t)}this.arRenderer=new ld(this),this.textureUtils=this.canRender?new Od(this.threeRenderer):null,Zc.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize(),this.lastTick=performance.now(),this.avgFrameDuration=0}static get singleton(){return this._singleton}static resetSingleton(){const t=this._singleton.dispose();for(const e of t)e.disconnectedCallback();this._singleton=new Fd({powerPreference:(self.ModelViewerElement||{}).powerPreference||"high-performance",debug:cu()});for(const e of t)e.connectedCallback()}get canRender(){return null!=this.threeRenderer}get scaleFactor(){return Nd[this.scaleStep]}set minScale(t){let e=1;for(;e<Nd.length&&!(Nd[e]<t);)++e;this.lastStep=e-1}updateRendererSize(){const t=hu();if(t!==this.dpr)for(const t of this.scenes){const{element:e}=t;e[op](e.getBoundingClientRect())}let e=0,n=0;for(const t of this.scenes)e=Math.max(e,t.width),n=Math.max(n,t.height);if(e===this.width&&n===this.height&&t===this.dpr)return;this.width=e,this.height=n,this.dpr=t,this.canRender&&this.threeRenderer.setSize(e*t,n*t,!1);const i=this.scaleFactor,r=e/i,s=n/i;this.canvas3D.style.width=`${r}px`,this.canvas3D.style.height=`${s}px`;for(const i of this.scenes){const{canvas:a}=i;a.width=Math.round(e*t),a.height=Math.round(n*t),a.style.width=`${r}px`,a.style.height=`${s}px`,i.queueRender()}}updateRendererScale(){const t=this.scaleStep;if(this.avgFrameDuration>26?++this.scaleStep:this.avgFrameDuration<18&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),t==this.scaleStep)return;const e=this.scaleFactor;this.avgFrameDuration=22;const n=this.width/e,i=this.height/e;this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${i}px`;for(const t of this.scenes){const{style:e}=t.canvas;e.width=`${n}px`,e.height=`${i}px`,t.queueRender(),this.dispatchRenderScale(t)}}dispatchRenderScale(t){const e=this.scaleFactor,n=this.dpr*e,i=e<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";t.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:n,minimumDpr:this.dpr*Nd[this.lastStep],pixelWidth:Math.ceil(t.width*n),pixelHeight:Math.ceil(t.height*n),reason:i}}))}registerScene(t){this.scenes.add(t);const{canvas:e}=t,n=this.scaleFactor;e.width=Math.round(this.width*this.dpr),e.height=Math.round(this.height*this.dpr),e.style.width=this.width/n+"px",e.style.height=this.height/n+"px",this.multipleScenesVisible&&e.classList.add("show"),t.queueRender(),this.dispatchRenderScale(t),this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop(((t,e)=>this.render(t,e))),null!=this.debugger&&this.debugger.addScene(t)}unregisterScene(t){this.scenes.delete(t),this.canRender&&0===this.scenes.size&&this.threeRenderer.setAnimationLoop(null),null!=this.debugger&&this.debugger.removeScene(t)}displayCanvas(t){return this.multipleScenesVisible?t.element[_p]:this.canvas3D}selectCanvas(){let t=0,e=null;for(const n of this.scenes){const{element:i}=n;i.modelIsVisible&&null==n.externalRenderer&&(++t,e=n.canvas)}if(null==e)return;const n=t>1,{canvas3D:i}=this;if(n!==this.multipleScenesVisible||!n&&i.parentElement!==e.parentElement){this.multipleScenesVisible=n,n&&i.classList.remove("show");for(const t of this.scenes){if(null!=t.externalRenderer)continue;const r=t.element[_p];n?(r.classList.add("show"),t.queueRender()):t.canvas===e&&(t.canvas.parentElement.appendChild(i),i.classList.add("show"),r.classList.remove("show"),t.queueRender())}}}orderedScenes(){const t=[];for(const e of[!1,!0])for(const n of this.scenes)n.element.modelIsVisible===e&&t.push(n);return t}get isPresenting(){return this.arRenderer.isPresenting}preRender(t,e,n){const{element:i,exposure:r}=t;i[Mp](e,n);const s="number"==typeof r&&!self.isNaN(r);this.threeRenderer.toneMappingExposure=s?r:1}render(t,e){if(null!=e)return void this.arRenderer.onWebXRFrame(t,e);const n=t-this.lastTick;if(this.lastTick=t,!this.canRender||this.isPresenting)return;this.avgFrameDuration+=lu(.2*(n-this.avgFrameDuration),-2,2),this.selectCanvas(),this.updateRendererSize(),this.updateRendererScale();const{dpr:i,scaleFactor:r}=this;for(const e of this.orderedScenes()){const{element:s}=e;if(!s.modelIsVisible&&e.renderCount>0)continue;if(this.preRender(e,t,n),!e.shouldRender())continue;if(null!=e.externalRenderer){const t=e.getCamera();t.updateMatrix();const{matrix:n,projectionMatrix:i}=t,r=n.elements.slice(),s=e.getTarget();r[12]+=s.x,r[13]+=s.y,r[14]+=s.z,e.externalRenderer.render({viewMatrix:r,projectionMatrix:i.elements});continue}if(!s.modelIsVisible&&!this.multipleScenesVisible)for(const t of this.scenes)t.element.modelIsVisible&&t.queueRender();const a=Math.min(Math.ceil(e.width*r*i),this.canvas3D.width),o=Math.min(Math.ceil(e.height*r*i),this.canvas3D.height);if(e.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.floor(this.height*i)-o,a,o),this.threeRenderer.render(e,e.camera),this.multipleScenesVisible){null==e.context&&e.createContext();const t=e.context;t.clearRect(0,0,a,o),t.drawImage(this.canvas3D,0,0,a,o,0,0,a,o)}e.hasRendered(),s.loaded&&++e.renderCount}}dispose(){null!=this.textureUtils&&this.textureUtils.dispose(),null!=this.threeRenderer&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const t=[];for(const e of this.scenes)t.push(e.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),t}}Fd._singleton=new Fd({powerPreference:(self.ModelViewerElement||{}).powerPreference||"high-performance",debug:cu()});
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(){const t={progress:0,completed:!1};return this.ongoingActivities.add(t),1===this.ongoingActivityCount&&this.announceTotalProgress(t,0),e=>{let n;return n=Math.max(lu(e,0,1),t.progress),n!==t.progress&&this.announceTotalProgress(t,n),t.progress}}announceTotalProgress(t,e){let n=0,i=0;1==e&&(t.completed=!0);for(const t of this.ongoingActivities){const{progress:e}=t;n+=1-e,!0===t.completed&&i++}const r=t.progress;t.progress=e,this.totalProgress+=(e-r)*(1-this.totalProgress)/n;const s=i===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:s}})),i===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kd,Bd,zd,Hd,Vd,Gd,Wd,jd,qd,Xd,Yd,Jd,Zd=function(t,e,n,i){for(var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const $d=document.createElement("canvas"),Kd=Symbol("fallbackResizeHandler"),Qd=Symbol("defaultAriaLabel"),tp=Symbol("resizeObserver"),ep=Symbol("clearModelTimeout"),np=Symbol("onContextLost"),ip=Symbol("loaded"),rp=Symbol("status"),sp=Symbol("onFocus"),ap=Symbol("onBlur"),op=Symbol("updateSize"),lp=Symbol("intersectionObserver"),hp=Symbol("isElementInViewport"),cp=Symbol("announceModelVisibility"),up=Symbol("ariaLabel"),dp=Symbol("altDefaulted"),pp=Symbol("statusElement"),mp=Symbol("updateStatus"),fp=Symbol("loadedTime"),gp=Symbol("updateSource"),vp=Symbol("markLoaded"),yp=Symbol("container"),xp=Symbol("input"),_p=Symbol("canvas"),bp=Symbol("scene"),wp=Symbol("needsRender"),Mp=Symbol("tick"),Sp=Symbol("onModelLoad"),Tp=Symbol("onResize"),Ep=Symbol("renderer"),Ap=Symbol("progressTracker"),Rp=Symbol("getLoaded"),Cp=Symbol("getModelIsVisible"),Lp=Symbol("shouldAttemptPreload"),Pp=Symbol("sceneIsReady"),Dp=Symbol("hasTransitioned"),Ip=t=>({x:t.x,y:t.y,z:t.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),Op=t=>({u:t.x,v:t.y,toString(){return`${this.u} ${this.v}`}});class Np extends X{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this[kd]=!1,this[Bd]=!1,this[zd]=0,this[Hd]=null,this[Vd]=ou((()=>{const t=this.getBoundingClientRect();this[op](t)}),50),this[Gd]=ou((t=>{const e=this.modelIsVisible;e!==t&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:e}}))}),0),this[Wd]=null,this[jd]=null,this[qd]=new Ud,this[Xd]=()=>{this[pp].textContent=this[rp]},this[Yd]=()=>{this[pp].textContent=""},this[Jd]=t=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:t.sourceEvent}}))},this.attachShadow({mode:"open"});const t=this.shadowRoot;let e,n;if((t=>{N(_h,t)})(t),this[yp]=t.querySelector(".container"),this[xp]=t.querySelector(".userInput"),this[_p]=t.querySelector("canvas"),this[pp]=t.querySelector("#status"),this[Qd]=this[xp].getAttribute("aria-label"),this.isConnected){const t=this.getBoundingClientRect();e=t.width,n=t.height}else e=300,n=150;this[bp]=new Bu({canvas:this[_p],element:this,width:e,height:n}),this[bp].addEventListener("model-load",(async t=>{this[vp](),this[Sp](),await uu(),this.dispatchEvent(new CustomEvent("load",{detail:{url:t.url}}))})),Promise.resolve().then((()=>{this[op](this.getBoundingClientRect())})),uh&&(this[tp]=new ResizeObserver((t=>{if(!this[Ep].isPresenting)for(let e of t)e.target===this&&this[op](e.contentRect)}))),dh?this[lp]=new IntersectionObserver((t=>{for(let e of t)if(e.target===this){const t=this.modelIsVisible;this[hp]=e.isIntersecting,this[cp](t),this[hp]&&!this[Pp]()&&this[gp]()}}),{root:null,rootMargin:"0px",threshold:0}):this[hp]=!0}static get is(){return"model-viewer"}static set modelCacheSize(t){Zc[Yc].evictionThreshold=t}static get modelCacheSize(){return Zc[Yc].evictionThreshold}static set minimumRenderScale(t){t>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),Fd.singleton.minScale=t}static get minimumRenderScale(){return Fd.singleton.minScale}get loaded(){return this[Rp]()}get[(kd=hp,Bd=ip,zd=fp,Hd=ep,Vd=Kd,Gd=cp,Wd=tp,jd=lp,qd=Ap,Ep)](){return Fd.singleton}get modelIsVisible(){return this[Cp]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),uh?this[tp].observe(this):self.addEventListener("resize",this[Kd]),dh&&this[lp].observe(this),this.addEventListener("focus",this[sp]),this.addEventListener("blur",this[ap]);const t=this[Ep];t.addEventListener("contextlost",this[np]),t.registerScene(this[bp]),null!=this[ep]&&(self.clearTimeout(this[ep]),this[ep]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),uh?this[tp].unobserve(this):self.removeEventListener("resize",this[Kd]),dh&&this[lp].unobserve(this),this.removeEventListener("focus",this[sp]),this.removeEventListener("blur",this[ap]);const t=this[Ep];t.removeEventListener("contextlost",this[np]),t.unregisterScene(this[bp]),this[ep]=self.setTimeout((()=>{this[bp].reset()}),1e3)}updated(t){super.updated(t),t.has("src")&&(null==this.src?(this[ip]=!1,this[fp]=0,this[bp].reset()):this.src!==this[bp].url&&(this[ip]=!1,this[fp]=0,this[gp]())),t.has("alt")&&this[xp].setAttribute("aria-label",this[up]),t.has("withCredentials")&&(Zc.withCredentials=this.withCredentials)}toDataURL(t,e){return this[Ep].displayCanvas(this[bp]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,n=t?t.qualityArgument:void 0,i=t?t.idealAspect:void 0,{width:r,height:s,idealAspect:a,aspect:o}=this[bp],{dpr:l,scaleFactor:h}=this[Ep];let c=r*h*l,u=s*h*l,d=0,p=0;if(!0===i)if(a>o){const t=u;u=Math.round(c/a),p=(t-u)/2}else{const t=c;c=Math.round(u*a),d=(t-c)/2}$d.width=c,$d.height=u;try{return new Promise((async(t,i)=>($d.getContext("2d").drawImage(this[Ep].displayCanvas(this[bp]),d,p,c,u,0,0,c,u),!$d.msToBlob||e&&"image/png"!==e?$d.toBlob?void $d.toBlob((e=>{if(!e)return i(new Error("Unable to retrieve canvas blob"));t(e)}),e,n):t(await(async t=>new Promise(((e,n)=>{const i=t.match(/data:(.*);/);if(!i)return n(new Error(`${t} is not a valid data Url`));const r=i[1],s=t.replace(/data:image\/\w+;base64,/,""),a=atob(s),o=[];for(let t=0;t<a.length;t+=512){const e=a.slice(t,t+512),n=new Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);const i=new Uint8Array(n);o.push(i)}e(new Blob(o,{type:r}))})))($d.toDataURL(e,n))):t($d.msToBlob()))))}finally{this[op]({width:r,height:s})}}registerRenderer(t){this[bp].externalRenderer=t}unregisterRenderer(){this[bp].externalRenderer=null}get[up](){return this[dp]}get[dp](){return null==this.alt||"null"===this.alt?this[Qd]:this.alt}[Rp](){return this[ip]}[Cp](){return this.loaded&&this[hp]}[Dp](){return this.modelIsVisible}[Lp](){return!!this.src&&this[hp]}[Pp](){return this[ip]}[op]({width:t,height:e}){this[yp].style.width=`${t}px`,this[yp].style.height=`${e}px`,this[Tp]({width:parseFloat(t),height:parseFloat(e)})}[Mp](t,e){}[vp](){this[ip]||(this[ip]=!0,this[fp]=performance.now())}[wp](){this[bp].queueRender()}[Sp](){}[mp](t){this[rp]=t;const e=this.getRootNode();null!=e&&e.activeElement===this&&this[pp].textContent!=t&&(this[pp].textContent=t)}[(Xd=sp,Yd=ap,Tp)](t){this[bp].setSize(t.width,t.height)}async[(Jd=np,gp)](){if(this.loaded||!this[Lp]())return;const t=this[Ap].beginActivity(),e=this.src;try{await this[bp].setSource(e,(e=>t(.95*e)));const n={url:e};this.dispatchEvent(new CustomEvent("preload",{detail:n}))}catch(t){this.dispatchEvent(new CustomEvent("error",{detail:t}))}finally{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t(1)}))}))}}}Zd([J({type:String})],Np.prototype,"alt",void 0),Zd([J({type:String})],Np.prototype,"src",void 0),Zd([J({type:Boolean,attribute:"with-credentials"})],Np.prototype,"withCredentials",void 0);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fp=function(t,e,n,i){for(var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const Up=Symbol("changeAnimation"),kp=Symbol("paused"),Bp={repetitions:1/0,pingpong:!1},zp=Symbol("hotspotMap"),Hp=Symbol("mutationCallback"),Vp=Symbol("observer"),Gp=Symbol("addHotspot"),Wp=Symbol("removeHotspot"),jp=new ve,qp=new ft;
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var Xp=function(t){return URL.createObjectURL(new Blob([t],{type:"text/javascript"}))};try{URL.revokeObjectURL(Xp(""))}catch(t){Xp=function(t){return"data:application/javascript;charset=UTF-8,"+encodeURI(t)}}var Yp=Uint8Array,Jp=Uint16Array,Zp=Uint32Array,$p=new Yp([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Kp=new Yp([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Qp=new Yp([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tm=function(t,e){for(var n=new Jp(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];var r=new Zp(n[30]);for(i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return[n,r]},em=tm($p,2),nm=em[0],im=em[1];nm[28]=258,im[258]=28;for(var rm=tm(Kp,0)[1],sm=new Jp(32768),am=0;am<32768;++am){var om=(43690&am)>>>1|(21845&am)<<1;om=(61680&(om=(52428&om)>>>2|(13107&om)<<2))>>>4|(3855&om)<<4,sm[am]=((65280&om)>>>8|(255&om)<<8)>>>1}var lm=function(t,e,n){for(var i=t.length,r=0,s=new Jp(e);r<i;++r)++s[t[r]-1];var a,o=new Jp(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;if(n){a=new Jp(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var h=r<<4|t[r],c=e-t[r],u=o[t[r]-1]++<<c,d=u|(1<<c)-1;u<=d;++u)a[sm[u]>>>l]=h}else for(a=new Jp(i),r=0;r<i;++r)t[r]&&(a[r]=sm[o[t[r]-1]++]>>>15-t[r]);return a},hm=new Yp(288);for(am=0;am<144;++am)hm[am]=8;for(am=144;am<256;++am)hm[am]=9;for(am=256;am<280;++am)hm[am]=7;for(am=280;am<288;++am)hm[am]=8;var cm=new Yp(32);for(am=0;am<32;++am)cm[am]=5;var um=lm(hm,9,0),dm=lm(cm,5,0),pm=function(t){return(t/8|0)+(7&t&&1)},mm=function(t,e,n){(null==e||e<0)&&(e=0),(null==n||n>t.length)&&(n=t.length);var i=new(t instanceof Jp?Jp:t instanceof Zp?Zp:Yp)(n-e);return i.set(t.subarray(e,n)),i},fm=function(t,e,n){n<<=7&e;var i=e/8|0;t[i]|=n,t[i+1]|=n>>>8},gm=function(t,e,n){n<<=7&e;var i=e/8|0;t[i]|=n,t[i+1]|=n>>>8,t[i+2]|=n>>>16},vm=function(t,e){for(var n=[],i=0;i<t.length;++i)t[i]&&n.push({s:i,f:t[i]});var r=n.length,s=n.slice();if(!r)return[Sm,0];if(1==r){var a=new Yp(n[0].s+1);return a[n[0].s]=1,[a,1]}n.sort((function(t,e){return t.f-e.f})),n.push({s:-1,f:25001});var o=n[0],l=n[1],h=0,c=1,u=2;for(n[0]={s:-1,f:o.f+l.f,l:o,r:l};c!=r-1;)o=n[n[h].f<n[u].f?h++:u++],l=n[h!=c&&n[h].f<n[u].f?h++:u++],n[c++]={s:-1,f:o.f+l.f,l:o,r:l};var d=s[0].s;for(i=1;i<r;++i)s[i].s>d&&(d=s[i].s);var p=new Jp(d+1),m=ym(n[c-1],p,0);if(m>e){i=0;var f=0,g=m-e,v=1<<g;for(s.sort((function(t,e){return p[e.s]-p[t.s]||t.f-e.f}));i<r;++i){var y=s[i].s;if(!(p[y]>e))break;f+=v-(1<<m-p[y]),p[y]=e}for(f>>>=g;f>0;){var x=s[i].s;p[x]<e?f-=1<<e-p[x]++-1:++i}for(;i>=0&&f;--i){var _=s[i].s;p[_]==e&&(--p[_],++f)}m=e}return[new Yp(p),m]},ym=function(t,e,n){return-1==t.s?Math.max(ym(t.l,e,n+1),ym(t.r,e,n+1)):e[t.s]=n},xm=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new Jp(++e),i=0,r=t[0],s=1,a=function(t){n[i++]=t},o=1;o<=e;++o)if(t[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=t[o]}return[n.subarray(0,i),e]},_m=function(t,e){for(var n=0,i=0;i<e.length;++i)n+=t[i]*e[i];return n},bm=function(t,e,n){var i=n.length,r=pm(e+2);t[r]=255&i,t[r+1]=i>>>8,t[r+2]=255^t[r],t[r+3]=255^t[r+1];for(var s=0;s<i;++s)t[r+s+4]=n[s];return 8*(r+4+i)},wm=function(t,e,n,i,r,s,a,o,l,h,c){fm(e,c++,n),++r[256];for(var u=vm(r,15),d=u[0],p=u[1],m=vm(s,15),f=m[0],g=m[1],v=xm(d),y=v[0],x=v[1],_=xm(f),b=_[0],w=_[1],M=new Jp(19),S=0;S<y.length;++S)M[31&y[S]]++;for(S=0;S<b.length;++S)M[31&b[S]]++;for(var T=vm(M,7),E=T[0],A=T[1],R=19;R>4&&!E[Qp[R-1]];--R);var C,L,P,D,I=h+5<<3,O=_m(r,hm)+_m(s,cm)+a,N=_m(r,d)+_m(s,f)+a+14+3*R+_m(M,E)+(2*M[16]+3*M[17]+7*M[18]);if(I<=O&&I<=N)return bm(e,c,t.subarray(l,l+h));if(fm(e,c,1+(N<O)),c+=2,N<O){C=lm(d,p,0),L=d,P=lm(f,g,0),D=f;var F=lm(E,A,0);fm(e,c,x-257),fm(e,c+5,w-1),fm(e,c+10,R-4),c+=14;for(S=0;S<R;++S)fm(e,c+3*S,E[Qp[S]]);c+=3*R;for(var U=[y,b],k=0;k<2;++k){var B=U[k];for(S=0;S<B.length;++S){var z=31&B[S];fm(e,c,F[z]),c+=E[z],z>15&&(fm(e,c,B[S]>>>5&127),c+=B[S]>>>12)}}}else C=um,L=hm,P=dm,D=cm;for(S=0;S<o;++S)if(i[S]>255){z=i[S]>>>18&31;gm(e,c,C[z+257]),c+=L[z+257],z>7&&(fm(e,c,i[S]>>>23&31),c+=$p[z]);var H=31&i[S];gm(e,c,P[H]),c+=D[H],H>3&&(gm(e,c,i[S]>>>5&8191),c+=Kp[H])}else gm(e,c,C[i[S]]),c+=L[i[S]];return gm(e,c,C[256]),c+L[256]},Mm=new Zp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Sm=new Yp(0),Tm=function(){for(var t=new Zp(256),e=0;e<256;++e){for(var n=e,i=9;--i;)n=(1&n&&3988292384)^n>>>1;t[e]=n}return t}(),Em=function(){var t=-1;return{p:function(e){for(var n=t,i=0;i<e.length;++i)n=Tm[255&n^e[i]]^n>>>8;t=n},d:function(){return~t}}},Am=function(t,e,n,i,r){return function(t,e,n,i,r,s){var a=t.length,o=new Yp(i+a+5*(1+Math.ceil(a/7e3))+r),l=o.subarray(i,o.length-r),h=0;if(!e||a<8)for(var c=0;c<=a;c+=65535){var u=c+65535;u<a?h=bm(l,h,t.subarray(c,u)):(l[c]=s,h=bm(l,h,t.subarray(c,a)))}else{for(var d=Mm[e-1],p=d>>>13,m=8191&d,f=(1<<n)-1,g=new Jp(32768),v=new Jp(f+1),y=Math.ceil(n/3),x=2*y,_=function(e){return(t[e]^t[e+1]<<y^t[e+2]<<x)&f},b=new Zp(25e3),w=new Jp(288),M=new Jp(32),S=0,T=0,E=(c=0,0),A=0,R=0;c<a;++c){var C=_(c),L=32767&c,P=v[C];if(g[L]=P,v[C]=L,A<=c){var D=a-c;if((S>7e3||E>24576)&&D>423){h=wm(t,l,0,b,w,M,T,E,R,c-R,h),E=S=T=0,R=c;for(var I=0;I<286;++I)w[I]=0;for(I=0;I<30;++I)M[I]=0}var O=2,N=0,F=m,U=L-P&32767;if(D>2&&C==_(c-U))for(var k=Math.min(p,D)-1,B=Math.min(32767,c),z=Math.min(258,D);U<=B&&--F&&L!=P;){if(t[c+O]==t[c+O-U]){for(var H=0;H<z&&t[c+H]==t[c+H-U];++H);if(H>O){if(O=H,N=U,H>k)break;var V=Math.min(U,H-2),G=0;for(I=0;I<V;++I){var W=c-U+I+32768&32767,j=W-g[W]+32768&32767;j>G&&(G=j,P=W)}}}U+=(L=P)-(P=g[L])+32768&32767}if(N){b[E++]=268435456|im[O]<<18|rm[N];var q=31&im[O],X=31&rm[N];T+=$p[q]+Kp[X],++w[257+q],++M[X],A=c+O,++S}else b[E++]=t[c],++w[t[c]]}}h=wm(t,l,s,b,w,M,T,E,R,c-R,h),!s&&7&h&&(h=bm(l,h+1,Sm))}return mm(o,0,i+pm(h)+r)}(t,null==e.level?6:e.level,null==e.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(t.length)))):12+e.mem,n,i,!r)},Rm=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n},Cm=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function Lm(t,e){return Am(t,e||{},0,0)}var Pm=function(t,e,n,i){for(var r in t){var s=t[r],a=e+r;s instanceof Yp?n[a]=[s,i]:Array.isArray(s)?n[a]=[s[0],Rm(i,s[1])]:Pm(s,a+"/",n,i)}},Dm="undefined"!=typeof TextEncoder&&new TextEncoder,Im="undefined"!=typeof TextDecoder&&new TextDecoder;try{Im.decode(Sm,{stream:!0}),1}catch(t){}function Om(t,e){if(e){for(var n=new Yp(t.length),i=0;i<t.length;++i)n[i]=t.charCodeAt(i);return n}if(Dm)return Dm.encode(t);var r=t.length,s=new Yp(t.length+(t.length>>1)),a=0,o=function(t){s[a++]=t};for(i=0;i<r;++i){if(a+5>s.length){var l=new Yp(a+8+(r-i<<1));l.set(s),s=l}var h=t.charCodeAt(i);h<128||e?o(h):h<2048?(o(192|h>>6),o(128|63&h)):h>55295&&h<57344?(o(240|(h=65536+(1047552&h)|1023&t.charCodeAt(++i))>>18),o(128|h>>12&63),o(128|h>>6&63),o(128|63&h)):(o(224|h>>12),o(128|h>>6&63),o(128|63&h))}return mm(s,0,a)}var Nm=function(t){var e=0;if(t)for(var n in t){var i=t[n].length;if(i>65535)throw"extra field too long";e+=i+4}return e},Fm=function(t,e,n,i,r,s,a,o){var l=i.length,h=n.extra,c=o&&o.length,u=Nm(h);Cm(t,e,null!=a?33639248:67324752),e+=4,null!=a&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(null==s&&8),t[e++]=r&&8,t[e++]=255&n.compression,t[e++]=n.compression>>8;var d=new Date(null==n.mtime?Date.now():n.mtime),p=d.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(Cm(t,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,null!=s&&(Cm(t,e,n.crc),Cm(t,e+4,s),Cm(t,e+8,n.size)),Cm(t,e+12,l),Cm(t,e+14,u),e+=16,null!=a&&(Cm(t,e,c),Cm(t,e+6,n.attrs),Cm(t,e+10,a),e+=14),t.set(i,e),e+=l,u)for(var m in h){var f=h[m],g=f.length;Cm(t,e,+m),Cm(t,e+2,g),t.set(f,e+4),e+=4+g}return c&&(t.set(o,e),e+=c),e};function Um(t,e){e||(e={});var n={},i=[];Pm(t,"",n,e);var r=0,s=0;for(var a in n){var o=n[a],l=o[0],h=o[1],c=0==h.level?0:8,u=(M=Om(a)).length,d=h.comment,p=d&&Om(d),m=p&&p.length,f=Nm(h.extra);if(u>65535)throw"filename too long";var g=c?Lm(l,h):l,v=g.length,y=Em();y.p(l),i.push(Rm(h,{size:l.length,crc:y.d(),c:g,f:M,m:p,u:u!=a.length||p&&d.length!=m,o:r,compression:c})),r+=30+u+f+v,s+=76+2*(u+f)+(m||0)+v}for(var x=new Yp(s+22),_=r,b=s-r,w=0;w<i.length;++w){var M=i[w];Fm(x,M.o,M,M.f,M.u,M.c.length);var S=30+M.f.length+Nm(M.extra);x.set(M.c,M.o+S),Fm(x,r,M,M.f,M.u,M.c.length,M.o,M.m),r+=16+S+(M.m?M.m.length:0)}return function(t,e,n,i,r){Cm(t,e,101010256),Cm(t,e+8,n),Cm(t,e+10,n),Cm(t,e+12,i),Cm(t,e+16,r)}(x,r,i.length,b,_),x}class km{async parse(t){const e={};e["model.usda"]=null;let n=zm();const i={},r={};t.traverseVisible((t=>{if(t.isMesh)if(t.material.isMeshStandardMaterial){const r=t.geometry,s=t.material,a="geometries/Geometry_"+r.id+".usd";if(!(a in e)){const t=function(t){return`\ndef "Geometry"\n{\n  ${function(t){const e="Geometry",n=t.attributes,i=n.position.count;return`\n    def Mesh "${e}"\n    {\n        int[] faceVertexCounts = [${function(t){const e=null!==t.index?t.index.count:t.attributes.position.count;return Array(e/3).fill(3).join(", ")}(t)}]\n        int[] faceVertexIndices = [${function(t){const e=t.index,n=[];if(null!==e)for(let t=0;t<e.count;t++)n.push(e.getX(t));else{const e=t.attributes.position.count;for(let t=0;t<e;t++)n.push(t)}return n.join(", ")}(t)}]\n        normal3f[] normals = [${Vm(n.normal,i)}] (\n            interpolation = "vertex"\n        )\n        point3f[] points = [${Vm(n.position,i)}]\n        float2[] primvars:st = [${function(t,e){if(void 0===t)return console.warn("USDZExporter: UVs missing."),Array(e).fill("(0, 0)").join(", ");const n=[];for(let e=0;e<t.count;e++){const i=t.getX(e),r=t.getY(e);n.push(`(${i.toPrecision(7)}, ${1-r.toPrecision(7)})`)}return n.join(", ")}(n.uv,i)}] (\n            interpolation = "vertex"\n        )\n        uniform token subdivisionScheme = "none"\n    }\n`}(t)}\n}\n`}(r);e[a]=function(t){let e=zm();return e+=t,Om(e)}(t)}s.uuid in i||(i[s.uuid]=s),n+=function(t,e,n){const i="Object_"+t.id,r=function(t){const e=t.elements;return`( ${Hm(e,0)}, ${Hm(e,4)}, ${Hm(e,8)}, ${Hm(e,12)} )`}(t.matrixWorld);t.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",t);return`def Xform "${i}" (\n    prepend references = @./geometries/Geometry_${e.id}.usd@</Geometry>\n)\n{\n    matrix4d xformOp:transform = ${r}\n    uniform token[] xformOpOrder = ["xformOp:transform"]\n\n    rel material:binding = </Materials/Material_${n.id}>\n}\n\n`}(t,r,s)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",t)})),n+=function(t,e){const n=[];for(const i in t){const r=t[i];n.push(Gm(r,e))}return`def "Materials"\n{\n${n.join("")}\n}\n\n`}(i,r),e["model.usda"]=Om(n),n=null;for(const t in r){const n=r[t],i=t.split("_")[1],s=1023===n.format,a=Bm(n.image,i),o=await new Promise((t=>a.toBlob(t,s?"image/png":"image/jpeg",1)));e[`textures/Texture_${t}.${s?"png":"jpg"}`]=new Uint8Array(await o.arrayBuffer())}let s=0;for(const t in e){const n=e[t];s+=34+t.length;const i=63&s;if(4!==i){const r=new Uint8Array(64-i);e[t]=[n,{extra:{12345:r}}]}s=n.length}return Um(e,{level:0})}}function Bm(t,e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const n=1024/Math.max(t.width,t.height),i=document.createElement("canvas");i.width=t.width*Math.min(1,n),i.height=t.height*Math.min(1,n);const r=i.getContext("2d");if(r.drawImage(t,0,0,i.width,i.height),void 0!==e){const t=parseInt(e,16),n=(t>>16&255)/255,s=(t>>8&255)/255,a=(255&t)/255,o=r.getImageData(0,0,i.width,i.height),l=o.data;for(let t=0;t<l.length;t+=4)l[t+0]=l[t+0]*n,l[t+1]=l[t+1]*s,l[t+2]=l[t+2]*a;r.putImageData(o,0,0)}return i}}function zm(){return'#usda 1.0\n(\n    customLayerData = {\n        string creator = "Three.js USDZExporter"\n    }\n    metersPerUnit = 1\n    upAxis = "Y"\n)\n\n'}function Hm(t,e){return`(${t[e+0]}, ${t[e+1]}, ${t[e+2]}, ${t[e+3]})`}function Vm(t,e){if(void 0===t)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const n=[];for(let e=0;e<t.count;e++){const i=t.getX(e),r=t.getY(e),s=t.getZ(e);n.push(`(${i.toPrecision(7)}, ${r.toPrecision(7)}, ${s.toPrecision(7)})`)}return n.join(", ")}function Gm(t,e){const n="            ",i=[],r=[];function s(n,i,r){const s=n.id+(r?"_"+r.getHexString():""),a=1023===n.format;return e[s]=n,`\n        def Shader "Transform2d_${i}" (\n            sdrMetadata = {\n                string role = "math"\n            }\n        )\n        {\n            uniform token info:id = "UsdTransform2d"\n            float2 inputs:in.connect = </Materials/Material_${t.id}/uvReader_st.outputs:result>\n            float2 inputs:scale = ${jm(n.repeat)}\n            float2 inputs:translation = ${jm(n.offset)}\n            float2 outputs:result\n        }\n\n        def Shader "Texture_${n.id}_${i}"\n        {\n            uniform token info:id = "UsdUVTexture"\n            asset inputs:file = @textures/Texture_${s}.${a?"png":"jpg"}@\n            float2 inputs:st.connect = </Materials/Material_${t.id}/Transform2d_${i}.outputs:result>\n            token inputs:wrapS = "repeat"\n            token inputs:wrapT = "repeat"\n            float outputs:r\n            float outputs:g\n            float outputs:b\n            float3 outputs:rgb\n            ${t.transparent||t.alphaTest>0?"float outputs:a":""}\n        }`}return null!==t.map?(i.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:rgb>`),t.transparent?i.push(`${n}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`):t.alphaTest>0&&(i.push(`${n}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`),i.push(`${n}float inputs:opacityThreshold = ${t.alphaTest}`)),r.push(s(t.map,"diffuse",t.color))):i.push(`${n}color3f inputs:diffuseColor = ${Wm(t.color)}`),null!==t.emissiveMap?(i.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${t.id}/Texture_${t.emissiveMap.id}_emissive.outputs:rgb>`),r.push(s(t.emissiveMap,"emissive"))):t.emissive.getHex()>0&&i.push(`${n}color3f inputs:emissiveColor = ${Wm(t.emissive)}`),null!==t.normalMap&&(i.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${t.id}/Texture_${t.normalMap.id}_normal.outputs:rgb>`),r.push(s(t.normalMap,"normal"))),null!==t.aoMap&&(i.push(`${n}float inputs:occlusion.connect = </Materials/Material_${t.id}/Texture_${t.aoMap.id}_occlusion.outputs:r>`),r.push(s(t.aoMap,"occlusion"))),null!==t.roughnessMap&&1===t.roughness?(i.push(`${n}float inputs:roughness.connect = </Materials/Material_${t.id}/Texture_${t.roughnessMap.id}_roughness.outputs:g>`),r.push(s(t.roughnessMap,"roughness"))):i.push(`${n}float inputs:roughness = ${t.roughness}`),null!==t.metalnessMap&&1===t.metalness?(i.push(`${n}float inputs:metallic.connect = </Materials/Material_${t.id}/Texture_${t.metalnessMap.id}_metallic.outputs:b>`),r.push(s(t.metalnessMap,"metallic"))):i.push(`${n}float inputs:metallic = ${t.metalness}`),null!==t.alphaMap?(i.push(`${n}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.alphaMap.id}_opacity.outputs:r>`),i.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(s(t.alphaMap,"opacity"))):i.push(`${n}float inputs:opacity = ${t.opacity}`),t.isMeshPhysicalMaterial&&(i.push(`${n}float inputs:clearcoat = ${t.clearcoat}`),i.push(`${n}float inputs:clearcoatRoughness = ${t.clearcoatRoughness}`),i.push(`${n}float inputs:ior = ${t.ior}`)),`\n    def Material "Material_${t.id}"\n    {\n        def Shader "PreviewSurface"\n        {\n            uniform token info:id = "UsdPreviewSurface"\n${i.join("\n")}\n            int inputs:useSpecularWorkflow = 0\n            token outputs:surface\n        }\n\n        token outputs:surface.connect = </Materials/Material_${t.id}/PreviewSurface.outputs:surface>\n        token inputs:frame:stPrimvarName = "st"\n\n        def Shader "uvReader_st"\n        {\n            uniform token info:id = "UsdPrimvarReader_float2"\n            token inputs:varname.connect = </Materials/Material_${t.id}.inputs:frame:stPrimvarName>\n            float2 inputs:fallback = (0.0, 0.0)\n            float2 outputs:result\n        }\n\n${r.join("\n")}\n\n    }\n`}function Wm(t){return`(${t.r}, ${t.g}, ${t.b})`}function jm(t){return`(${t.x}, ${t.y})`}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var qm=function(t,e,n,i){for(var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};let Xm=!1,Ym=!1;const Jm=(Zm=["quick-look","scene-viewer","webxr","none"],t=>{try{const e=mu(t),n=(e.length?e[0].terms:[]).filter((t=>t&&"ident"===t.type)).map((t=>t.value)).filter((t=>Zm.indexOf(t)>-1)),i=new Set;for(const t of n)i.add(t);return i}catch(t){}return new Set});var Zm;const $m="quick-look",Km="scene-viewer",Qm="webxr",tf="none",ef=Symbol("arButtonContainer"),nf=Symbol("enterARWithWebXR"),rf=Symbol("openSceneViewer"),sf=Symbol("openIOSARQuickLook"),af=Symbol("canActivateAR"),of=Symbol("arMode"),lf=Symbol("arModes"),hf=Symbol("arAnchor"),cf=Symbol("preload"),uf=Symbol("onARButtonContainerClick"),df=Symbol("onARStatus"),pf=Symbol("onARTracking"),mf=Symbol("onARTap"),ff=Symbol("selectARMode"),gf=Symbol("triggerLoad");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vf,yf,xf;const _f=Symbol("evaluate"),bf=Symbol("lastValue");class wf{constructor(){this[vf]=null}static evaluatableFor(t,e=wu){if(t instanceof wf)return t;if("number"===t.type)return"%"===t.unit?new Tf(t,e):t;switch(t.name.value){case"calc":return new Lf(t,e);case"env":return new Af(t)}return wu}static evaluate(t){return t instanceof wf?t.evaluate():t}static isConstant(t){return!(t instanceof wf)||t.isConstant}static applyIntrinsics(t,e){const{basis:n,keywords:i}=e,{auto:r}=i;return n.map(((e,n)=>{const s=null==r[n]?e:r[n];let a=t[n]?t[n]:s;if("ident"===a.type){const t=a.value;t in i&&(a=i[t][n])}return null!=a&&"ident"!==a.type||(a=s),"%"===a.unit?pu(a.number/100*e.number,e.unit):(a=Tu(a,e),a.unit!==e.unit?e:a)}))}get isConstant(){return!1}evaluate(){return this.isConstant&&null!=this[bf]||(this[bf]=this[_f]()),this[bf]}}vf=bf;const Mf=Symbol("percentage"),Sf=Symbol("basis");class Tf extends wf{constructor(t,e){super(),this[Mf]=t,this[Sf]=e}get isConstant(){return!0}[_f](){return pu(this[Mf].number/100*this[Sf].number,this[Sf].unit)}}const Ef=Symbol("identNode");class Af extends wf{constructor(t){super(),this[yf]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;null!=e&&"ident"===e.type&&(this[Ef]=e)}get isConstant(){return!1}[(yf=Ef,_f)](){if(null!=this[Ef]&&"window-scroll-y"===this[Ef].value){return{type:"number",number:window.pageYOffset/(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight)||0,unit:null}}return wu}}const Rf=/[\*\/]/,Cf=Symbol("evalutor");class Lf extends wf{constructor(t,e=wu){if(super(),this[xf]=null,1!==t.arguments.length)return;const n=t.arguments[0].terms.slice(),i=[];for(;n.length;){const t=n.shift();if(i.length>0){const n=i[i.length-1];if("operator"===n.type&&Rf.test(n.value)){const n=i.pop(),r=i.pop();if(null==r)return;i.push(new Of(n,wf.evaluatableFor(r,e),wf.evaluatableFor(t,e)));continue}}i.push("operator"===t.type?t:wf.evaluatableFor(t,e))}for(;i.length>2;){const[t,n,r]=i.splice(0,3);if("operator"!==n.type)return;i.unshift(new Of(n,wf.evaluatableFor(t,e),wf.evaluatableFor(r,e)))}1===i.length&&(this[Cf]=i[0])}get isConstant(){return null==this[Cf]||wf.isConstant(this[Cf])}[(xf=Cf,_f)](){return null!=this[Cf]?wf.evaluate(this[Cf]):wu}}const Pf=Symbol("operator"),Df=Symbol("left"),If=Symbol("right");class Of extends wf{constructor(t,e,n){super(),this[Pf]=t,this[Df]=e,this[If]=n}get isConstant(){return wf.isConstant(this[Df])&&wf.isConstant(this[If])}[_f](){const t=Tu(wf.evaluate(this[Df])),e=Tu(wf.evaluate(this[If])),{number:n,unit:i}=t,{number:r,unit:s}=e;if(null!=s&&null!=i&&s!=i)return wu;const a=i||s;let o;switch(this[Pf].value){case"+":o=n+r;break;case"-":o=n-r;break;case"/":o=n/r;break;case"*":o=n*r;break;default:return wu}return{type:"number",number:o,unit:a}}}const Nf=Symbol("evaluatables"),Ff=Symbol("intrinsics");class Uf extends wf{constructor(t,e){super(),this[Ff]=e;const n=t[0],i=null!=n?n.terms:[];this[Nf]=e.basis.map(((t,e)=>{const n=i[e];return null==n?{type:"ident",value:"auto"}:"ident"===n.type?n:wf.evaluatableFor(n,t)}))}get isConstant(){for(const t of this[Nf])if(!wf.isConstant(t))return!1;return!0}[_f](){const t=this[Nf].map((t=>wf.evaluate(t)));return wf.applyIntrinsics(t,this[Ff]).map((t=>t.number))}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kf,Bf,zf,Hf;const Vf=Symbol("instances"),Gf=Symbol("activateListener"),Wf=Symbol("deactivateListener"),jf=Symbol("notifyInstances"),qf=Symbol("notify"),Xf=Symbol("callback");class Yf{constructor(t){this[Xf]=t}static[jf](){for(const t of Yf[Vf])t[qf]()}static[(kf=Vf,Gf)](){window.addEventListener("scroll",this[jf],{passive:!0})}static[Wf](){window.removeEventListener("scroll",this[jf])}observe(){0===Yf[Vf].size&&Yf[Gf](),Yf[Vf].add(this)}disconnect(){Yf[Vf].delete(this),0===Yf[Vf].size&&Yf[Wf]()}[qf](){this[Xf]()}}Yf[kf]=new Set;const Jf=Symbol("computeStyleCallback"),Zf=Symbol("astWalker"),$f=Symbol("dependencies"),Kf=Symbol("onScroll");class Qf{constructor(t){this[Bf]={},this[zf]=new bu(["function"]),this[Hf]=()=>{this[Jf]({relatedState:"window-scroll"})},this[Jf]=t}observeEffectsFor(t){const e={},n=this[$f];this[Zf].walk(t,(t=>{const{name:i}=t,r=t.arguments[0].terms[0];if("env"===i.value&&null!=r&&"ident"===r.type&&"window-scroll-y"===r.value)if(null==e["window-scroll"]){const t="window-scroll"in n?n["window-scroll"]:new Yf(this[Kf]);t.observe(),delete n["window-scroll"],e["window-scroll"]=t}}));for(const t in n){n[t].disconnect()}this[$f]=e}dispose(){for(const t in this[$f]){this[$f][t].disconnect()}}}Bf=$f,zf=Zf,Hf=Kf;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tg=t=>{const e=t.observeEffects||!1,n=t.intrinsics instanceof Function?t.intrinsics:()=>t.intrinsics;return(i,r)=>{const s=i.updated,a=i.connectedCallback,o=i.disconnectedCallback,l=Symbol(`${r}StyleEffector`),h=Symbol(`${r}StyleEvaluator`),c=Symbol(`${r}UpdateEvaluator`),u=Symbol(`${r}EvaluateAndSync`);Object.defineProperties(i,{[l]:{value:null,writable:!0},[h]:{value:null,writable:!0},[c]:{value:function(){const t=mu(this[r]);this[h]=new Uf(t,n(this)),null==this[l]&&e&&(this[l]=new Qf((()=>this[u]()))),null!=this[l]&&this[l].observeEffectsFor(t)}},[u]:{value:function(){if(null==this[h])return;const e=this[h].evaluate();this[t.updateHandler](e)}},updated:{value:function(t){t.has(r)&&(this[c](),this[u]()),s.call(this,t)}},connectedCallback:{value:function(){a.call(this),this.requestUpdate(r,this[r])}},disconnectedCallback:{value:function(){o.call(this),null!=this[l]&&(this[l].dispose(),this[l]=null)}}})}},eg=new mt,ng=new zt,ig=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,interactionPolicy:"always-allow",touchAction:"pan-y"}),rg=Math.PI/8,sg=33,ag=34,og=37,lg=38,hg=39,cg=40,ug="user-interaction",dg="none";
/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends et{constructor(t,e,n){super(),this.camera=t,this.element=e,this.scene=n,this.sensitivity=1,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserChange=!1,this.isUserPointing=!1,this.enablePan=!0,this.panProjection=new ft,this.panPerPixel=0,this.spherical=new Jl,this.goalSpherical=new Jl,this.thetaDamper=new du,this.phiDamper=new du,this.radiusDamper=new du,this.logFov=Math.log(ig.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new du,this.touchMode=null,this.lastPointerPosition={clientX:0,clientY:0},this.startPointerPosition={clientX:0,clientY:0},this.touchDecided=!1,this.onMouseMove=t=>{this.panPerPixel>0?this.movePan(t.clientX,t.clientY):this.handleSinglePointerMove(t),t.cancelable&&t.preventDefault()},this.onTouchMove=t=>{null!==this.touchMode&&(this.touchMode(t),null!==this.touchMode&&t.cancelable&&t.preventDefault())},this.touchModeZoom=t=>{const{targetTouches:e}=t;if(this.lastTouches.length>1&&e.length>1){if(!this._disableZoom){const t=.04*(this.twoTouchDistance(this.lastTouches[0],this.lastTouches[1])-this.twoTouchDistance(e[0],e[1]))/10;this.userAdjustOrbit(0,0,t)}if(this.panPerPixel>0){const t=.5*(e[0].clientX+e[1].clientX),n=.5*(e[0].clientY+e[1].clientY);this.movePan(t,n)}this.lastTouches=e}},this.touchModeRotate=t=>{const{targetTouches:e}=t,{touchAction:n}=this._options;if(!this.touchDecided&&"none"!==n){this.touchDecided=!0;const{clientX:t,clientY:i}=e[0],r=Math.abs(t-this.lastPointerPosition.clientX),s=Math.abs(i-this.lastPointerPosition.clientY);if("pan-y"===n&&s>r||"pan-x"===n&&r>s)return void(this.touchMode=null)}this.handleSinglePointerMove(e[0]),this.lastTouches=e},this.onMouseDown=t=>{this.onPointerDown((()=>{self.addEventListener("mousemove",this.onMouseMove),self.addEventListener("mouseup",this.onMouseUp,{once:!0}),this.enablePan&&(2===t.button||t.ctrlKey||t.metaKey||t.shiftKey)&&this.initializePan(),this.lastPointerPosition.clientX=t.clientX,this.lastPointerPosition.clientY=t.clientY,this.startPointerPosition.clientX=t.clientX,this.startPointerPosition.clientY=t.clientY,this.element.style.cursor="grabbing"}))},this.onTouchStart=t=>{this.onPointerDown((()=>{const{targetTouches:e,changedTouches:n,touches:i}=t;e.length===n.length&&(this.touchMode=null,this.touchDecided=!1),e.length===i.length&&this.onTouchChange(t)}))},this.onMouseUp=t=>{self.removeEventListener("mousemove",this.onMouseMove),this.panPerPixel>0?this.resetRadius():this.recenter(t),this.onPointerUp()},this.onTouchEnd=t=>{t.targetTouches.length>0&&null!==this.touchMode&&this.onTouchChange(t),0===t.targetTouches.length&&(this.panPerPixel>0?this.resetRadius():this.recenter(t.changedTouches[0])),this.onPointerUp()},this.onWheel=t=>{if(!this.canInteract)return;const e=t.deltaY*(1==t.deltaMode?18:1)*.04/30;this.userAdjustOrbit(0,0,e),t.cancelable&&t.preventDefault()},this.onKeyDown=t=>{let e=!1;switch(t.keyCode){case sg:e=!0,this.userAdjustOrbit(0,0,.04);break;case ag:e=!0,this.userAdjustOrbit(0,0,-.04);break;case lg:e=!0,this.userAdjustOrbit(0,-rg,0);break;case cg:e=!0,this.userAdjustOrbit(0,rg,0);break;case og:e=!0,this.userAdjustOrbit(-rg,0,0);break;case hg:e=!0,this.userAdjustOrbit(rg,0,0)}e&&t.cancelable&&t.preventDefault()},this._options=Object.assign({},ig),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(!1===this._interactionEnabled){const{element:t}=this;t.addEventListener("mousedown",this.onMouseDown),this._disableZoom||t.addEventListener("wheel",this.onWheel),t.addEventListener("keydown",this.onKeyDown),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!1}),t.addEventListener("touchend",this.onTouchEnd),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(!0===this._interactionEnabled){const{element:t}=this;self.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("mousedown",this.onMouseDown),this._disableZoom||t.removeEventListener("wheel",this.onWheel),t.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("touchstart",this.onTouchStart),t.removeEventListener("touchmove",this.onTouchMove),self.removeEventListener("mouseup",this.onMouseUp),t.removeEventListener("touchend",this.onTouchEnd),t.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(t){this._disableZoom!=t&&(this._disableZoom=t,!0===t?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(t=new Jl){return t.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(t){Object.assign(this._options,t),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(t,e){this.camera.near=Math.max(t,e/1e3),this.camera.far=e,this.camera.updateProjectionMatrix()}updateAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setOrbit(t=this.goalSpherical.theta,e=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:r,minimumPolarAngle:s,maximumPolarAngle:a,minimumRadius:o,maximumRadius:l}=this._options,{theta:h,phi:c,radius:u}=this.goalSpherical,d=lu(t,i,r);isFinite(i)||isFinite(r)||(this.spherical.theta=this.wrapAngle(this.spherical.theta-d)+d);const p=lu(e,s,a),m=lu(n,o,l);return(d!==h||p!==c||m!==u)&&(this.goalSpherical.theta=d,this.goalSpherical.phi=p,this.goalSpherical.radius=m,this.goalSpherical.makeSafe(),this.isUserChange=!1,!0)}setRadius(t){this.goalSpherical.radius=t,this.setOrbit()}setFieldOfView(t){const{minimumFieldOfView:e,maximumFieldOfView:n}=this._options;t=lu(t,e,n),this.goalLogFov=Math.log(t)}setDamperDecayTime(t){this.thetaDamper.setDecayTime(t),this.phiDamper.setDecayTime(t),this.radiusDamper.setDecayTime(t),this.fovDamper.setDecayTime(t)}adjustOrbit(t,e,n){const{theta:i,phi:r,radius:s}=this.goalSpherical,{minimumRadius:a,maximumRadius:o,minimumFieldOfView:l,maximumFieldOfView:h}=this._options,c=this.spherical.theta-i,u=Math.PI-.001,d=i-lu(t,-u-c,u-c),p=r-e,m=0===n?0:((n>0?o:a)-s)/(Math.log(n>0?h:l)-this.goalLogFov),f=s+n*(isFinite(m)?m:2*(o-a));if(this.setOrbit(d,p,f),0!==n){const t=this.goalLogFov+n;this.setFieldOfView(Math.exp(t))}}jumpToGoal(){this.update(0,1e4)}update(t,e){if(this.isStationary())return;const{maximumPolarAngle:n,maximumRadius:i}=this._options,r=this.spherical.theta-this.goalSpherical.theta;Math.abs(r)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=2*Math.sign(r)*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,e,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,e,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,e,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,e,1),this.moveCamera()}updateTouchActionStyle(){const{style:t}=this.element;if(this._interactionEnabled){const{touchAction:e}=this._options;this._disableZoom&&"none"!==e?t.touchAction="manipulation":t.touchAction=e}else t.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new Ae(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix());const t=this.isUserChange?ug:dg;this.dispatchEvent({type:"change",source:t})}get canInteract(){if("allow-when-focused"==this._options.interactionPolicy){return this.element.getRootNode().activeElement===this.element}return"always-allow"===this._options.interactionPolicy}userAdjustOrbit(t,e,n){this.adjustOrbit(t*this.sensitivity,e*this.sensitivity,n),this.isUserChange=!0,this.dispatchEvent({type:"change",source:ug})}wrapAngle(t){const e=(t+Math.PI)/(2*Math.PI);return 2*(e-Math.floor(e))*Math.PI-Math.PI}pixelLengthToSphericalAngle(t){return 2*Math.PI*t/this.element.clientHeight}twoTouchDistance(t,e){const{clientX:n,clientY:i}=t,{clientX:r,clientY:s}=e,a=r-n,o=s-i;return Math.sqrt(a*a+o*o)}handleSinglePointerMove(t){const{clientX:e,clientY:n}=t,i=this.pixelLengthToSphericalAngle(e-this.lastPointerPosition.clientX),r=this.pixelLengthToSphericalAngle(n-this.lastPointerPosition.clientY);this.lastPointerPosition.clientX=e,this.lastPointerPosition.clientY=n,!1===this.isUserPointing&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start",pointer:Object.assign({},t)})),this.userAdjustOrbit(i,r,0)}initializePan(){this.scene.element[zg].style.opacity=1;const{theta:t,phi:e}=this.spherical,n=t-this.scene.yaw;this.panPerPixel=.018/this.scene.height,this.panProjection.set(-Math.cos(n),-Math.cos(e)*Math.sin(n),0,0,Math.sin(e),0,Math.sin(n),-Math.cos(e)*Math.cos(n),0)}movePan(t,e){const{scene:n,lastPointerPosition:i}=this,r=ng.set(t-i.clientX,e-i.clientY,0),s=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;r.multiplyScalar(s),i.clientX=t,i.clientY=e;const a=n.getTarget();a.add(r.applyMatrix3(this.panProjection)),n.boundingSphere.clampPoint(a,a),n.setTarget(a.x,a.y,a.z)}recenter(t){const{scene:e}=this;if(e.element[zg].style.opacity=0,!this.enablePan||Math.abs(t.clientX-this.startPointerPosition.clientX)>2||Math.abs(t.clientY-this.startPointerPosition.clientY)>2)return;const n=e.positionAndNormalFromPoint(e.getNDC(t.clientX,t.clientY));if(null==n){const{cameraTarget:t}=e.element;e.element.cameraTarget="",e.element.cameraTarget=t,this.userAdjustOrbit(0,0,1)}else e.target.worldToLocal(n.position),e.setTarget(n.position.x,n.position.y,n.position.z)}resetRadius(){const{scene:t}=this;if(t.element[zg].style.opacity=0,!this.enablePan||0===this.panPerPixel)return;const e=t.positionAndNormalFromPoint(eg.set(0,0));if(null==e)return;t.target.worldToLocal(e.position);const n=t.getTarget(),{theta:i,phi:r}=this.spherical,s=i-t.yaw,a=ng.set(Math.sin(r)*Math.sin(s),Math.cos(r),Math.sin(r)*Math.cos(s)),o=a.dot(e.position.sub(n));n.add(a.multiplyScalar(o)),t.setTarget(n.x,n.y,n.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-o)}onPointerDown(t){this.canInteract&&(this.isUserPointing=!1,t())}onTouchChange(t){const{targetTouches:e,changedTouches:n}=t;switch(e.length){default:case 1:this.touchMode=this.touchModeRotate,this.lastPointerPosition.clientX=e[0].clientX,this.lastPointerPosition.clientY=e[0].clientY,e[0].identifier===n[0].identifier?(this.startPointerPosition.clientX=e[0].clientX,this.startPointerPosition.clientY=e[0].clientY):this.resetRadius();break;case 2:if(this.touchMode=this.touchDecided&&null===this.touchMode?null:this.touchModeZoom,this.touchDecided=!0,this.enablePan&&null!=this.touchMode){this.initializePan();const t=.5*(e[0].clientX+e[1].clientX),n=.5*(e[0].clientY+e[1].clientY);this.lastPointerPosition.clientX=t,this.lastPointerPosition.clientY=n,this.startPointerPosition.clientX=t,this.startPointerPosition.clientY=n}}this.lastTouches=e}onPointerUp(){this.element.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end",pointer:Object.assign({},this.lastPointerPosition)})}}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=t=>t<.5?2*t*t:(4-2*t)*t-1,fg=(t,e,n=mg)=>i=>t+(e-t)*n(i),gg=(t,e)=>{const n=[],i=[];let r=t;for(let t=0;t<e.length;++t){const s=e[t],{value:a,frames:o}=s,l=s.ease||mg,h=fg(r,a,l);n.push(h),i.push(o),r=a}return((t,e)=>{const n=e.reduce(((t,e)=>t+e),0),i=e.map((t=>t/n));return e=>{let n=0,r=1/0,s=()=>0;for(let a=0;a<i.length&&(r=i[a],s=t[a],!(e<=n+r));++a)n+=r;return s((e-n)/r)}})(n,i)};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vg=function(t,e,n,i){for(var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const yg=gg(0,[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]),xg=gg(0,[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]),_g=["front","right","back","left"],bg=["upper-","","lower-"],wg="auto",Mg="when-focused",Sg="wiggle",Tg="always-allow",Eg="pan-y",Ag=t=>{const e=t.enablePan?30:45;return{basis:[Mu(pu(e,"deg"))],keywords:{auto:[null]}}},Rg=t=>{const e=t.enablePan?12:25;return{basis:[Mu(pu(e,"deg"))],keywords:{auto:[null]}}},Cg=(()=>{const t=mu("0deg 75deg 105%")[0].terms,e=Tu(t[0]),n=Tu(t[1]);return t=>{const i=t[bp].idealCameraDistance();return{basis:[e,n,pu(i,"m")],keywords:{auto:[null,null,pu(105,"%")]}}}})(),Lg=t=>{const e=1.1*t[bp].boundingSphere.radius*(t.enablePan?2:1);return{basis:[pu(-1/0,"rad"),pu(Math.PI/8,"rad"),pu(e,"m")],keywords:{auto:[null,null,null]}}},Pg=t=>{const e=Cg(t),n=new Uf([],e).evaluate()[2];return{basis:[pu(1/0,"rad"),pu(Math.PI-Math.PI/8,"rad"),pu(n,"m")],keywords:{auto:[null,null,null]}}},Dg=t=>{const e=t[bp].boundingBox.getCenter(new zt);return{basis:[pu(e.x,"m"),pu(e.y,"m"),pu(e.z,"m")],keywords:{auto:[null,null,null]}}},Ig=t=>{t.preventDefault()},Og=Math.PI/2,Ng=Math.PI/3,Fg=Og/2,Ug=2*Math.PI,kg=Symbol("controls"),Bg=Symbol("promptElement"),zg=Symbol("panElement"),Hg=Symbol("promptAnimatedContainer"),Vg=Symbol("deferInteractionPrompt"),Gg=Symbol("updateAria"),Wg=Symbol("updateCameraForRadius"),jg=Symbol("onBlur"),qg=Symbol("onFocus"),Xg=Symbol("onChange"),Yg=Symbol("onPointerChange"),Jg=Symbol("waitingToPromptUser"),Zg=Symbol("userHasInteracted"),$g=Symbol("promptElementVisibleTime"),Kg=Symbol("lastPromptOffset"),Qg=Symbol("focusedTime"),tv=Symbol("lastSpherical"),ev=Symbol("jumpCamera"),nv=Symbol("initialized"),iv=Symbol("maintainThetaPhi"),rv=Symbol("syncCameraOrbit"),sv=Symbol("syncFieldOfView"),av=Symbol("syncCameraTarget"),ov=Symbol("syncMinCameraOrbit"),lv=Symbol("syncMaxCameraOrbit"),hv=Symbol("syncMinFieldOfView"),cv=Symbol("syncMaxFieldOfView");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uv=function(t,e,n,i){for(var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const dv="auto",pv="manual",mv="auto",fv="eager",gv="interaction",vv=Symbol("defaultProgressBarElement"),yv=Symbol("defaultProgressMaskElement"),xv=Symbol("posterContainerElement"),_v=Symbol("defaultPosterElement"),bv=Symbol("posterDismissalSource"),wv=Symbol("hidePoster"),Mv=Symbol("modelIsRevealed"),Sv=Symbol("updateProgressBar"),Tv=Symbol("lastReportedProgress"),Ev=Symbol("transitioned"),Av=Symbol("onTransitionEnd"),Rv=Symbol("ariaLabelCallToAction"),Cv=Symbol("onClick"),Lv=Symbol("onKeydown"),Pv=Symbol("onProgress");class Dv{constructor(){this.pluginCallbacks=[],this.register((function(t){return new ay(t)})),this.register((function(t){return new oy(t)})),this.register((function(t){return new ly(t)})),this.register((function(t){return new cy(t)})),this.register((function(t){return new uy(t)})),this.register((function(t){return new hy(t)}))}register(t){return-1===this.pluginCallbacks.indexOf(t)&&this.pluginCallbacks.push(t),this}unregister(t){return-1!==this.pluginCallbacks.indexOf(t)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){"object"==typeof n&&(console.warn("THREE.GLTFExporter: parse() expects options as the fourth argument now."),i=n);const r=new sy,s=[];for(let t=0,e=this.pluginCallbacks.length;t<e;t++)s.push(this.pluginCallbacks[t](r));r.setPlugins(s),r.write(t,e,i).catch(n)}parseAsync(t,e){const n=this;return new Promise((function(i,r){n.parse(t,i,r,e)}))}}const Iv=0,Ov=1,Nv=2,Fv=3,Uv=4,kv=5121,Bv=5123,zv=5126,Hv=5125,Vv=34962,Gv=34963,Wv=9728,jv=9729,qv=9984,Xv=9985,Yv=9986,Jv=9987,Zv=33071,$v=33648,Kv=10497,Qv={};Qv[1003]=Wv,Qv[1004]=qv,Qv[1005]=Yv,Qv[1006]=jv,Qv[1007]=Xv,Qv[1008]=Jv,Qv[1001]=Zv,Qv[1e3]=Kv,Qv[1002]=$v;const ty={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"};function ey(t,e){return t.length===e.length&&t.every((function(t,n){return t===e[n]}))}function ny(t){return 4*Math.ceil(t/4)}function iy(t,e=0){const n=ny(t.byteLength);if(n!==t.byteLength){const i=new Uint8Array(n);if(i.set(new Uint8Array(t)),0!==e)for(let r=t.byteLength;r<n;r++)i[r]=e;return i.buffer}return t}let ry=null;class sy{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(t){this.plugins=t}async write(t,e,n){this.options=Object.assign({},{binary:!1,trs:!1,onlyVisible:!0,truncateDrawRange:!0,embedImages:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(t),await Promise.all(this.pending);const i=this,r=i.buffers,s=i.json;n=i.options;const a=i.extensionsUsed,o=new Blob(r,{type:"application/octet-stream"}),l=Object.keys(a);if(l.length>0&&(s.extensionsUsed=l),s.buffers&&s.buffers.length>0&&(s.buffers[0].byteLength=o.size),!0===n.binary){const t=new window.FileReader;t.readAsArrayBuffer(o),t.onloadend=function(){const n=iy(t.result),i=new DataView(new ArrayBuffer(8));i.setUint32(0,n.byteLength,!0),i.setUint32(4,5130562,!0);const r=iy(function(t){if(void 0!==window.TextEncoder)return(new TextEncoder).encode(t).buffer;const e=new Uint8Array(new ArrayBuffer(t.length));for(let n=0,i=t.length;n<i;n++){const i=t.charCodeAt(n);e[n]=i>255?32:i}return e.buffer}(JSON.stringify(s)),32),a=new DataView(new ArrayBuffer(8));a.setUint32(0,r.byteLength,!0),a.setUint32(4,1313821514,!0);const o=new ArrayBuffer(12),l=new DataView(o);l.setUint32(0,1179937895,!0),l.setUint32(4,2,!0);const h=12+a.byteLength+r.byteLength+i.byteLength+n.byteLength;l.setUint32(8,h,!0);const c=new Blob([o,a,r,i,n],{type:"application/octet-stream"}),u=new window.FileReader;u.readAsArrayBuffer(c),u.onloadend=function(){e(u.result)}}}else if(s.buffers&&s.buffers.length>0){const t=new window.FileReader;t.readAsDataURL(o),t.onloadend=function(){const n=t.result;s.buffers[0].uri=n,e(s)}}else e(s)}serializeUserData(t,e){if(0===Object.keys(t.userData).length)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&r.gltfExtensions){void 0===e.extensions&&(e.extensions={});for(const t in r.gltfExtensions)e.extensions[t]=r.gltfExtensions[t],i[t]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(e.extras=r)}catch(e){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+e.message)}}getUID(t){return this.uids.has(t)||this.uids.set(t,this.uid++),this.uids.get(t)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const e=new zt;for(let n=0,i=t.count;n<i;n++)if(Math.abs(e.fromBufferAttribute(t,n).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),i=new zt;for(let t=0,e=n.count;t<e;t++)i.fromBufferAttribute(n,t),0===i.x&&0===i.y&&0===i.z?i.setX(1):i.normalize(),n.setXYZ(t,i.x,i.y,i.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const i={};0===e.offset.x&&0===e.offset.y||(i.offset=e.offset.toArray(),n=!0),0!==e.rotation&&(i.rotation=e.rotation,n=!0),1===e.repeat.x&&1===e.repeat.y||(i.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(t,e){if(t===e)return t;console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.");const n=t?.image,i=e?.image,r=Math.max(n?.width||0,i?.width||0),s=Math.max(n?.height||0,i?.height||0),a=document.createElement("canvas");a.width=r,a.height=s;const o=a.getContext("2d");o.fillStyle="#00ffff",o.fillRect(0,0,r,s);const l=o.getImageData(0,0,r,s);if(n){o.drawImage(n,0,0,r,s);const t=o.getImageData(0,0,r,s).data;for(let e=2;e<t.length;e+=4)l.data[e]=t[e]}if(i){o.drawImage(i,0,0,r,s);const t=o.getImageData(0,0,r,s).data;for(let e=1;e<t.length;e+=4)l.data[e]=t[e]}o.putImageData(l,0,0);const h=(t||e).clone();return h.source=new Pt(a),h}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,i,r){const s=this.json;let a;s.bufferViews||(s.bufferViews=[]),a=e===kv?1:e===Bv?2:4;const o=ny(i*t.itemSize*a),l=new DataView(new ArrayBuffer(o));let h=0;for(let r=n;r<n+i;r++)for(let n=0;n<t.itemSize;n++){let i;t.itemSize>4?i=t.array[r*t.itemSize+n]:0===n?i=t.getX(r):1===n?i=t.getY(r):2===n?i=t.getZ(r):3===n&&(i=t.getW(r)),e===zv?l.setFloat32(h,i,!0):e===Hv?l.setUint32(h,i,!0):e===Bv?l.setUint16(h,i,!0):e===kv&&l.setUint8(h,i),h+=a}const c={buffer:this.processBuffer(l.buffer),byteOffset:this.byteOffset,byteLength:o};void 0!==r&&(c.target=r),r===Vv&&(c.byteStride=t.itemSize*a),this.byteOffset+=o,s.bufferViews.push(c);return{id:s.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise((function(i){const r=new window.FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){const t=iy(r.result),s={buffer:e.processBuffer(t),byteOffset:e.byteOffset,byteLength:t.byteLength};e.byteOffset+=t.byteLength,i(n.bufferViews.push(s)-1)}}))}processAccessor(t,e,n,i){const r=this.options,s=this.json;let a;if(t.array.constructor===Float32Array)a=zv;else if(t.array.constructor===Uint32Array)a=Hv;else if(t.array.constructor===Uint16Array)a=Bv;else{if(t.array.constructor!==Uint8Array)throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");a=kv}if(void 0===n&&(n=0),void 0===i&&(i=t.count),r.truncateDrawRange&&void 0!==e&&null===e.index){const r=n+i,s=e.drawRange.count===1/0?t.count:e.drawRange.start+e.drawRange.count;n=Math.max(n,e.drawRange.start),(i=Math.min(r,s)-n)<0&&(i=0)}if(0===i)return null;const o=function(t,e,n){const i={min:new Array(t.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(t.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let r=e;r<e+n;r++)for(let e=0;e<t.itemSize;e++){let n;t.itemSize>4?n=t.array[r*t.itemSize+e]:0===e?n=t.getX(r):1===e?n=t.getY(r):2===e?n=t.getZ(r):3===e&&(n=t.getW(r)),i.min[e]=Math.min(i.min[e],n),i.max[e]=Math.max(i.max[e],n)}return i}(t,n,i);let l;void 0!==e&&(l=t===e.index?Gv:Vv);const h=this.processBufferView(t,a,n,i,l),c={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:o.max,min:o.min,type:{1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",16:"MAT4"}[t.itemSize]};return!0===t.normalized&&(c.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(c)-1}processImage(t,e,n,i="image/png"){const r=this,s=r.cache,a=r.json,o=r.options,l=r.pending;s.images.has(t)||s.images.set(t,{});const h=s.images.get(t),c=i+":flipY/"+n.toString();if(void 0!==h[c])return h[c];a.images||(a.images=[]);const u={mimeType:i};if(o.embedImages){const s=ry=ry||document.createElement("canvas");s.width=Math.min(t.width,o.maxTextureSize),s.height=Math.min(t.height,o.maxTextureSize);const a=s.getContext("2d");if(!0===n&&(a.translate(0,s.height),a.scale(1,-1)),"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap)a.drawImage(t,0,0,s.width,s.height);else{1023!==e&&console.error("GLTFExporter: Only RGBAFormat is supported."),(t.width>o.maxTextureSize||t.height>o.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const n=new Uint8ClampedArray(t.height*t.width*4);for(let e=0;e<n.length;e+=4)n[e+0]=t.data[e+0],n[e+1]=t.data[e+1],n[e+2]=t.data[e+2],n[e+3]=t.data[e+3];a.putImageData(new ImageData(n,t.width,t.height),0,0)}!0===o.binary?l.push(new Promise((function(t){s.toBlob((function(e){r.processBufferViewImage(e).then((function(e){u.bufferView=e,t()}))}),i)}))):u.uri=s.toDataURL(i)}else u.uri=t.src;const d=a.images.push(u)-1;return h[c]=d,d}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:Qv[t.magFilter],minFilter:Qv[t.minFilter],wrapS:Qv[t.wrapS],wrapT:Qv[t.wrapT]};return e.samplers.push(n)-1}processTexture(t){const e=this.cache,n=this.json;if(e.textures.has(t))return e.textures.get(t);n.textures||(n.textures=[]);let i=t.userData.mimeType;"image/webp"===i&&(i="image/png");const r={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,i)};t.name&&(r.name=t.name),this._invokeAll((function(e){e.writeTexture&&e.writeTexture(t,r)}));const s=n.textures.push(r)-1;return e.textures.set(t,s),s}processMaterial(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};!0!==t.isMeshStandardMaterial&&!0!==t.isMeshBasicMaterial&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=t.color.toArray().concat([t.opacity]);if(ey(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),t.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=t.metalness,i.pbrMetallicRoughness.roughnessFactor=t.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),t.metalnessMap||t.roughnessMap){const e=this.buildMetalRoughTexture(t.metalnessMap,t.roughnessMap),n={index:this.processTexture(e)};this.applyTextureTransform(n,e),i.pbrMetallicRoughness.metallicRoughnessTexture=n}if(t.map){const e={index:this.processTexture(t.map)};this.applyTextureTransform(e,t.map),i.pbrMetallicRoughness.baseColorTexture=e}if(t.emissive){const e=t.emissive.clone().multiplyScalar(t.emissiveIntensity),n=Math.max(e.r,e.g,e.b);if(n>1&&(e.multiplyScalar(1/n),console.warn("THREE.GLTFExporter: Some emissive components exceed 1; emissive has been limited")),n>0&&(i.emissiveFactor=e.toArray()),t.emissiveMap){const e={index:this.processTexture(t.emissiveMap)};this.applyTextureTransform(e,t.emissiveMap),i.emissiveTexture=e}}if(t.normalMap){const e={index:this.processTexture(t.normalMap)};t.normalScale&&1!==t.normalScale.x&&(e.scale=t.normalScale.x),this.applyTextureTransform(e,t.normalMap),i.normalTexture=e}if(t.aoMap){const e={index:this.processTexture(t.aoMap),texCoord:1};1!==t.aoMapIntensity&&(e.strength=t.aoMapIntensity),this.applyTextureTransform(e,t.aoMap),i.occlusionTexture=e}t.transparent?i.alphaMode="BLEND":t.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=t.alphaTest),2===t.side&&(i.doubleSided=!0),""!==t.name&&(i.name=t.name),this.serializeUserData(t,i),this._invokeAll((function(e){e.writeMaterial&&e.writeMaterial(t,i)}));const s=n.materials.push(i)-1;return e.materials.set(t,s),s}processMesh(t){const e=this.cache,n=this.json,i=[t.geometry.uuid];if(Array.isArray(t.material))for(let e=0,n=t.material.length;e<n;e++)i.push(t.material[e].uuid);else i.push(t.material.uuid);const r=i.join(":");if(e.meshes.has(r))return e.meshes.get(r);const s=t.geometry;let a;if(a=t.isLineSegments?Ov:t.isLineLoop?Nv:t.isLine?Fv:t.isPoints?Iv:t.material.wireframe?Ov:Uv,!0!==s.isBufferGeometry)throw new Error("THREE.GLTFExporter: Geometry is not of type THREE.BufferGeometry.");const o={},l={},h=[],c=[],u={uv:"TEXCOORD_0",uv2:"TEXCOORD_1",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=s.getAttribute("normal");void 0===d||this.isNormalizedNormalAttribute(d)||(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),s.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let p=null;for(let t in s.attributes){if("morph"===t.slice(0,5))continue;const n=s.attributes[t];t=u[t]||t.toUpperCase();if(/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(t)||(t="_"+t),e.attributes.has(this.getUID(n))){l[t]=e.attributes.get(this.getUID(n));continue}p=null;const i=n.array;"JOINTS_0"!==t||i instanceof Uint16Array||i instanceof Uint8Array||(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=new an(new Uint16Array(i),n.itemSize,n.normalized));const r=this.processAccessor(p||n,s);null!==r&&(l[t]=r,e.attributes.set(this.getUID(n),r))}if(void 0!==d&&s.setAttribute("normal",d),0===Object.keys(l).length)return null;if(void 0!==t.morphTargetInfluences&&t.morphTargetInfluences.length>0){const n=[],i=[],r={};if(void 0!==t.morphTargetDictionary)for(const e in t.morphTargetDictionary)r[t.morphTargetDictionary[e]]=e;for(let a=0;a<t.morphTargetInfluences.length;++a){const o={};let l=!1;for(const t in s.morphAttributes){if("position"!==t&&"normal"!==t){l||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),l=!0);continue}const n=s.morphAttributes[t][a],i=t.toUpperCase(),r=s.attributes[t];if(e.attributes.has(this.getUID(n))){o[i]=e.attributes.get(this.getUID(n));continue}const h=n.clone();if(!s.morphTargetsRelative)for(let t=0,e=n.count;t<e;t++)h.setXYZ(t,n.getX(t)-r.getX(t),n.getY(t)-r.getY(t),n.getZ(t)-r.getZ(t));o[i]=this.processAccessor(h,s),e.attributes.set(this.getUID(r),o[i])}c.push(o),n.push(t.morphTargetInfluences[a]),void 0!==t.morphTargetDictionary&&i.push(r[a])}o.weights=n,i.length>0&&(o.extras={},o.extras.targetNames=i)}const m=Array.isArray(t.material);if(m&&0===s.groups.length)return null;const f=m?t.material:[t.material],g=m?s.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let t=0,n=g.length;t<n;t++){const n={mode:a,attributes:l};if(this.serializeUserData(s,n),c.length>0&&(n.targets=c),null!==s.index){let i=this.getUID(s.index);void 0===g[t].start&&void 0===g[t].count||(i+=":"+g[t].start+":"+g[t].count),e.attributes.has(i)?n.indices=e.attributes.get(i):(n.indices=this.processAccessor(s.index,s,g[t].start,g[t].count),e.attributes.set(i,n.indices)),null===n.indices&&delete n.indices}const i=this.processMaterial(f[g[t].materialIndex]);null!==i&&(n.material=i),h.push(n)}o.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll((function(e){e.writeMesh&&e.writeMesh(t,o)}));const v=n.meshes.push(o)-1;return e.meshes.set(r,v),v}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:2*t.right,ymag:2*t.top,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:i.perspective={aspectRatio:t.aspect,yfov:pt.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},""!==t.name&&(i.name=t.type),e.cameras.push(i)-1}processAnimation(t,e){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]);const r=(t=Dv.Utils.mergeMorphTargetTracks(t.clone(),e)).tracks,s=[],a=[];for(let t=0;t<r.length;++t){const n=r[t],o=Wl.parseTrackName(n.name);let l=Wl.findNode(e,o.nodeName);const h=ty[o.propertyName];if("bones"===o.objectName&&(l=!0===l.isSkinnedMesh?l.skeleton.getBoneByName(o.objectIndex):void 0),!l||!h)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',n.name),null;const c=1;let u,d=n.values.length/n.times.length;h===ty.morphTargetInfluences&&(d/=l.morphTargetInfluences.length),!0===n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline?(u="CUBICSPLINE",d/=3):u=2300===n.getInterpolation()?"STEP":"LINEAR",a.push({input:this.processAccessor(new an(n.times,c)),output:this.processAccessor(new an(n.values,d)),interpolation:u}),s.push({sampler:a.length-1,target:{node:i.get(l),path:h}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:a,channels:s}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,i=e.nodes[n.get(t)],r=t.skeleton;if(void 0===r)return null;const s=t.skeleton.bones[0];if(void 0===s)return null;const a=[],o=new Float32Array(16*r.bones.length),l=new ve;for(let e=0;e<r.bones.length;++e)a.push(n.get(r.bones[e])),l.copy(r.boneInverses[e]),l.multiply(t.bindMatrix).toArray(o,16*e);void 0===e.skins&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new an(o,16)),joints:a,skeleton:n.get(s)});return i.skin=e.skins.length-1}processNode(t){const e=this.json,n=this.options,i=this.nodeMap;e.nodes||(e.nodes=[]);const r={};if(n.trs){const e=t.quaternion.toArray(),n=t.position.toArray(),i=t.scale.toArray();ey(e,[0,0,0,1])||(r.rotation=e),ey(n,[0,0,0])||(r.translation=n),ey(i,[1,1,1])||(r.scale=i)}else t.matrixAutoUpdate&&t.updateMatrix(),!1===ey(t.matrix.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])&&(r.matrix=t.matrix.elements);if(""!==t.name&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){const e=this.processMesh(t);null!==e&&(r.mesh=e)}else t.isCamera&&(r.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const e=[];for(let i=0,r=t.children.length;i<r;i++){const r=t.children[i];if(r.visible||!1===n.onlyVisible){const t=this.processNode(r);null!==t&&e.push(t)}}e.length>0&&(r.children=e)}this._invokeAll((function(e){e.writeNode&&e.writeNode(t,r)}));const s=e.nodes.push(r)-1;return i.set(t,s),s}processScene(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const i={};""!==t.name&&(i.name=t.name),e.scenes.push(i);const r=[];for(let e=0,i=t.children.length;e<i;e++){const i=t.children[e];if(i.visible||!1===n.onlyVisible){const t=this.processNode(i);null!==t&&r.push(t)}}r.length>0&&(i.nodes=r),this.serializeUserData(t,i)}processObjects(t){const e=new Is;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);this.processScene(e)}processInput(t){const e=this.options;t=t instanceof Array?t:[t],this._invokeAll((function(e){e.beforeParse&&e.beforeParse(t)}));const n=[];for(let e=0;e<t.length;e++)t[e]instanceof Is?this.processScene(t[e]):n.push(t[e]);n.length>0&&this.processObjects(n);for(let t=0;t<this.skins.length;++t)this.processSkin(this.skins[t]);for(let n=0;n<e.animations.length;++n)this.processAnimation(e.animations[n],t[0]);this._invokeAll((function(e){e.afterParse&&e.afterParse(t)}))}_invokeAll(t){for(let e=0,n=this.plugins.length;e<n;e++)t(this.plugins[e])}}class ay{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight)return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);const n=this.writer,i=n.json,r=n.extensionsUsed,s={};t.name&&(s.name=t.name),s.color=t.color.toArray(),s.intensity=t.intensity,t.isDirectionalLight?s.type="directional":t.isPointLight?(s.type="point",t.distance>0&&(s.range=t.distance)):t.isSpotLight&&(s.type="spot",t.distance>0&&(s.range=t.distance),s.spot={},s.spot.innerConeAngle=(t.penumbra-1)*t.angle*-1,s.spot.outerConeAngle=t.angle),void 0!==t.decay&&2!==t.decay&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),!t.target||t.target.parent===t&&0===t.target.position.x&&0===t.target.position.y&&-1===t.target.position.z||console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const a=i.extensions[this.name].lights;a.push(s),e.extensions=e.extensions||{},e.extensions[this.name]={light:a.length-1}}}class oy{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}writeMaterial(t,e){if(!t.isMeshBasicMaterial)return;const n=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},n[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class ly{constructor(t){this.writer=t,this.name="KHR_materials_pbrSpecularGlossiness"}writeMaterial(t,e){if(!t.isGLTFSpecularGlossinessMaterial)return;const n=this.writer,i=n.extensionsUsed,r={};e.pbrMetallicRoughness.baseColorFactor&&(r.diffuseFactor=e.pbrMetallicRoughness.baseColorFactor);const s=[1,1,1];if(t.specular.toArray(s,0),r.specularFactor=s,r.glossinessFactor=t.glossiness,e.pbrMetallicRoughness.baseColorTexture&&(r.diffuseTexture=e.pbrMetallicRoughness.baseColorTexture),t.specularMap){const e={index:n.processTexture(t.specularMap)};n.applyTextureTransform(e,t.specularMap),r.specularGlossinessTexture=e}e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class hy{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){const e={index:n.processTexture(t.clearcoatMap)};n.applyTextureTransform(e,t.clearcoatMap),r.clearcoatTexture=e}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const e={index:n.processTexture(t.clearcoatRoughnessMap)};n.applyTextureTransform(e,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=e}if(t.clearcoatNormalMap){const e={index:n.processTexture(t.clearcoatNormalMap)};n.applyTextureTransform(e,t.clearcoatNormalMap),r.clearcoatNormalTexture=e}e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class cy{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||0===t.transmission)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){const e={index:n.processTexture(t.transmissionMap)};n.applyTextureTransform(e,t.transmissionMap),r.transmissionTexture=e}e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class uy{constructor(t){this.writer=t,this.name="KHR_materials_volume"}writeMaterial(t,e){if(!t.isMeshPhysicalMaterial||0===t.transmission)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){const e={index:n.processTexture(t.thicknessMap)};n.applyTextureTransform(e,t.thicknessMap),r.thicknessTexture=e}r.attenuationDistance=t.attenuationDistance,r.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}Dv.Utils={insertKeyframe:function(t,e){const n=.001,i=t.getValueSize(),r=new t.TimeBufferType(t.times.length+1),s=new t.ValueBufferType(t.values.length+i),a=t.createInterpolant(new t.ValueBufferType(i));let o;if(0===t.times.length){r[0]=e;for(let t=0;t<i;t++)s[t]=0;o=0}else if(e<t.times[0]){if(Math.abs(t.times[0]-e)<n)return 0;r[0]=e,r.set(t.times,1),s.set(a.evaluate(e),0),s.set(t.values,i),o=0}else if(e>t.times[t.times.length-1]){if(Math.abs(t.times[t.times.length-1]-e)<n)return t.times.length-1;r[r.length-1]=e,r.set(t.times,0),s.set(t.values,0),s.set(a.evaluate(e),t.values.length),o=r.length-1}else for(let l=0;l<t.times.length;l++){if(Math.abs(t.times[l]-e)<n)return l;if(t.times[l]<e&&t.times[l+1]>e){r.set(t.times.slice(0,l+1),0),r[l+1]=e,r.set(t.times.slice(l+1),l+2),s.set(t.values.slice(0,(l+1)*i),0),s.set(a.evaluate(e),(l+1)*i),s.set(t.values.slice((l+1)*i),(l+2)*i),o=l+1;break}}return t.times=r,t.values=s,o},mergeMorphTargetTracks:function(t,e){const n=[],i={},r=t.tracks;for(let t=0;t<r.length;++t){let s=r[t];const a=Wl.parseTrackName(s.name),o=Wl.findNode(e,a.nodeName);if("morphTargetInfluences"!==a.propertyName||void 0===a.propertyIndex){n.push(s);continue}if(s.createInterpolant!==s.InterpolantFactoryMethodDiscrete&&s.createInterpolant!==s.InterpolantFactoryMethodLinear){if(s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),s=s.clone(),s.setInterpolation(2301)}const l=o.morphTargetInfluences.length,h=o.morphTargetDictionary[a.propertyIndex];if(void 0===h)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let c;if(void 0===i[o.uuid]){c=s.clone();const t=new c.ValueBufferType(l*c.times.length);for(let e=0;e<c.times.length;e++)t[e*l+h]=c.values[e];c.name=(a.nodeName||"")+".morphTargetInfluences",c.values=t,i[o.uuid]=c,n.push(c);continue}const u=s.createInterpolant(new s.ValueBufferType(1));c=i[o.uuid];for(let t=0;t<c.times.length;t++)c.values[t*l+h]=u.evaluate(c.times[t]);for(let t=0;t<s.times.length;t++){const e=this.insertKeyframe(c,s.times[t]);c.values[e*l+h]=s.values[t]}}return t.tracks=n,t}};
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dy=t=>void 0!==t.material&&t.userData&&t.userData.variantMaterials&&!!Array.from(t.userData.variantMaterials.values()).filter((t=>py(t.material))),py=t=>t&&t.isMaterial&&!Array.isArray(t);class my{constructor(t){this.writer=t,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(t){const e=new Set;for(const n of t)n.traverse((t=>{if(!dy(t))return;const n=t.userData.variantMaterials,i=t.userData.variantData;for(const[t,r]of i){const i=n.get(r.index);py(i.material)&&e.add(t)}}));e.forEach((t=>this.variantNames.push(t)))}writeMesh(t,e){if(!dy(t))return;const n=t.userData,i=n.variantMaterials,r=n.variantData,s=new Map,a=new Map,o=Array.from(r.values()).sort(((t,e)=>t.index-e.index));for(const[t,e]of o.entries())a.set(e.index,t);for(const t of r.values()){const e=i.get(t.index).material;if(!py(e))continue;const n=this.writer.processMaterial(e);s.has(n)||s.set(n,{material:n,variants:[]}),s.get(n).variants.push(a.get(t.index))}const l=Array.from(s.values()).map((t=>t.variants.sort(((t,e)=>t-e))&&t)).sort(((t,e)=>t.material-e.material));if(0===l.length)return;const h=py(n.originalMaterial)?this.writer.processMaterial(n.originalMaterial):-1;for(const t of e.primitives)h>=0&&(t.material=h),t.extensions=t.extensions||{},t.extensions[this.name]={mappings:l}}afterParse(){if(0===this.variantNames.length)return;const t=this.writer.json;t.extensions=t.extensions||{};const e=this.variantNames.map((t=>({name:t})));t.extensions[this.name]={variants:e},this.writer.extensionsUsed[this.name]=!0}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=Symbol("correlatedObjects"),gy=Symbol("sourceObject"),vy=Symbol("onUpdate");class yy{constructor(t,e,n=null){this[vy]=t,this[gy]=e,this[fy]=n}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new cl,_y=new nn,by=new ni(2,2);let wy=0;const My=Symbol("threeTexture");class Sy extends yy{get[My](){var t;return console.assert(null!=this[fy]&&this[fy].size>0,"Image correlated object is undefined"),null===(t=this[fy])||void 0===t?void 0:t.values().next().value}constructor(t,e,n){super(t,n=null!=n?n:{name:e&&e.image&&e.image.src?e.image.src.split("/").pop():"adhoc_image",uri:e&&e.image&&e.image.src?e.image.src:"adhoc_image"+wy++},new Set(e?[e]:[]))}get name(){return this[gy].name||""}get uri(){return this[gy].uri}get bufferView(){return this[gy].bufferView}get type(){return null!=this.uri?"external":"embedded"}set name(t){this[gy].name=t}async setURI(t){this[gy].uri=t,this[gy].name=t.split("/").pop();const e=await new Promise(((e,n)=>{xy.load(t,e,void 0,n)})),n=this[My];n.image=e,n.needsUpdate=!0,this[vy]()}async createThumbnail(t,e){const n=new Is;_y.map=this[My];const i=new Nn(by,_y);n.add(i);const r=new di(-1,1,1,-1,0,1),{threeRenderer:s}=Fd.singleton,a=new Ft(t,e);s.setRenderTarget(a),s.render(n,r),s.setRenderTarget(null);const o=new Uint8Array(t*e*4);s.readRenderTargetPixels(a,0,0,t,e,o),$d.width=t,$d.height=e;const l=$d.getContext("2d"),h=l.createImageData(t,e);return h.data.set(o),l.putImageData(h,0,0),new Promise((async(t,e)=>{$d.toBlob((n=>{if(!n)return e("Failed to capture thumbnail.");t(URL.createObjectURL(n))}),"image/png")}))}}var Ty,Ey;!function(t){t[t.Nearest=9728]="Nearest",t[t.Linear=9729]="Linear",t[t.NearestMipmapNearest=9984]="NearestMipmapNearest",t[t.LinearMipmapNearest=9985]="LinearMipmapNearest",t[t.NearestMipmapLinear=9986]="NearestMipmapLinear",t[t.LinearMipmapLinear=9987]="LinearMipmapLinear"}(Ty||(Ty={})),function(t){t[t.ClampToEdge=33071]="ClampToEdge",t[t.MirroredRepeat=33648]="MirroredRepeat",t[t.Repeat=10497]="Repeat"}(Ey||(Ey={}));
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ay=(()=>{const t=[Ty.Nearest,Ty.Linear,Ty.NearestMipmapNearest,Ty.LinearMipmapLinear,Ty.NearestMipmapLinear,Ty.LinearMipmapLinear];return e=>t.indexOf(e)>-1})(),Ry=(()=>{const t=[Ty.Nearest,Ty.Linear];return e=>t.indexOf(e)>-1})(),Cy=(()=>{const t=[Ey.ClampToEdge,Ey.MirroredRepeat,Ey.Repeat];return e=>t.indexOf(e)>-1})(),Ly=Symbol("threeTextures"),Py=Symbol("setProperty"),Dy=Symbol("sourceSampler");class Iy extends yy{get[Ly](){return console.assert(null!=this[fy]&&this[fy].size>0,"Sampler correlated object is undefined"),this[fy]}get[Dy](){return console.assert(null!=this[gy],"Sampler source is undefined"),this[gy]}constructor(t,e,n){null==(n=null!=n?n:{}).minFilter&&(n.minFilter=e?e.minFilter:Ty.LinearMipmapLinear),null==n.magFilter&&(n.magFilter=e?e.magFilter:Ty.Linear),null==n.wrapS&&(n.wrapS=e?e.wrapS:Ey.Repeat),null==n.wrapT&&(n.wrapT=e?e.wrapT:Ey.Repeat),super(t,n,new Set(e?[e]:[]))}get name(){return this[gy].name||""}get minFilter(){return this[Dy].minFilter}get magFilter(){return this[Dy].magFilter}get wrapS(){return this[Dy].wrapS}get wrapT(){return this[Dy].wrapT}setMinFilter(t){this[Py]("minFilter",t)}setMagFilter(t){this[Py]("magFilter",t)}setWrapS(t){this[Py]("wrapS",t)}setWrapT(t){this[Py]("wrapT",t)}[Py](t,e){const n=this[Dy];if(null!=n){if(((t,e)=>{switch(t){case"minFilter":return Ay(e);case"magFilter":return Ry(e);case"wrapS":case"wrapT":return Cy(e);default:throw new Error(`Cannot configure property "${t}" on Sampler`)}})(t,e)){n[t]=e;for(const n of this[Ly])n[t]=e,n.needsUpdate=!0}this[vy]()}}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=Symbol("image"),Ny=Symbol("sampler");class Fy extends yy{constructor(t,e,n=null,i=null,r=null){super(t,n||{},new Set(e?[e]:[])),this[Ny]=new Iy(t,e,i),this[Oy]=new Sy(t,e,r)}get name(){return this[gy].name||""}set name(t){this[gy].name=t}get sampler(){return this[Ny]}get source(){return this[Oy]}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Uy,ky;const By=Symbol("texture"),zy=Symbol("transform"),Hy=Symbol("materials"),Vy=Symbol("usage");var Gy;!function(t){t[t.Base=0]="Base",t[t.MetallicRoughness=1]="MetallicRoughness",t[t.Normal=2]="Normal",t[t.Occlusion=3]="Occlusion",t[t.Emissive=4]="Emissive"}(Gy||(Gy={}));class Wy{constructor(t,e,n,i,r,s){if(this[Uy]=null,this[ky]={rotation:0,scale:new mt(1,1),offset:new mt(0,0)},s&&n){const e=r.textures?r.textures[s.index]:null,i=e&&r.samplers?r.samplers[e.sampler]:null,a=e&&r.images?r.images[e.source]:null;this[zy].rotation=n.rotation,this[zy].scale.copy(n.repeat),this[zy].offset.copy(n.offset),this[By]=new Fy(t,n,e,i,a)}this.onUpdate=t,this[Hy]=i,this[Vy]=e}get texture(){return this[By]}setTexture(t){const e=null!=t?t.source[My]:null;let n=3001;if(this[By]=t,this[Hy])for(const t of this[Hy]){switch(this[Vy]){case Gy.Base:t.map=e;break;case Gy.MetallicRoughness:n=3e3,t.metalnessMap=e,t.roughnessMap=e;break;case Gy.Normal:n=3e3,t.normalMap=e;break;case Gy.Occlusion:n=3e3,t.aoMap=e;break;case Gy.Emissive:t.emissiveMap=e}t.needsUpdate=!0}e&&(e.encoding=n,e.rotation=this[zy].rotation,e.repeat=this[zy].scale,e.offset=this[zy].offset),this.onUpdate()}}Uy=By,ky=zy;
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jy=Symbol("threeMaterials"),qy=Symbol("baseColorTexture"),Xy=Symbol("metallicRoughnessTexture");class Yy extends yy{constructor(t,e,n,i){super(t,n,i),null==n.baseColorFactor&&(n.baseColorFactor=[1,1,1,1]),null==n.roughnessFactor&&(n.roughnessFactor=1),null==n.metallicFactor&&(n.metallicFactor=1);const{baseColorTexture:r,metallicRoughnessTexture:s}=n,{map:a,metalnessMap:o}=i.values().next().value;this[qy]=new Wy(t,Gy.Base,a,i,e,r||null),this[Xy]=new Wy(t,Gy.MetallicRoughness,o,i,e,s||null)}get[jy](){return this[fy]}get baseColorFactor(){return this[gy].baseColorFactor}get metallicFactor(){return this[gy].metallicFactor}get roughnessFactor(){return this[gy].roughnessFactor}get baseColorTexture(){return this[qy]}get metallicRoughnessTexture(){return this[Xy]}setBaseColorFactor(t){for(const e of this[jy])e.color.fromArray(t),e.opacity=t[3];this[gy].baseColorFactor=t,this[vy]()}setMetallicFactor(t){for(const e of this[jy])e.metalness=t;this[gy].metallicFactor=t,this[vy]()}setRoughnessFactor(t){for(const e of this[jy])e.roughness=t;this[gy].roughnessFactor=t,this[vy]()}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jy;const Zy=Symbol("pbrMetallicRoughness"),$y=Symbol("normalTexture"),Ky=Symbol("occlusionTexture"),Qy=Symbol("emissiveTexture"),tx=Symbol("backingThreeMaterial"),ex=Symbol("applyAlphaCutoff"),nx=Symbol("lazyLoadGLTFInfo"),ix=Symbol("initialize"),rx=Symbol("getLoadedMaterial"),sx=Symbol("ensureMaterialIsLoaded"),ax=Symbol("gltfIndex"),ox=Symbol("setActive"),lx=Symbol("variantIndices"),hx=Symbol("isActive"),cx=Symbol("variantSet"),ux=Symbol("modelVariants");class dx extends yy{constructor(t,e,n,i,r,s,a,o){super(t,n,a),this[Jy]=new Set,this[ax]=i,this[hx]=r,this[ux]=s,null==o?this[ix](e):this[nx]=o}get[(Jy=cx,tx)](){return this[fy].values().next().value}[ix](t){const e=this[vy],n=this[gy],i=this[fy];n.extensions&&n.extensions.KHR_materials_pbrSpecularGlossiness&&console.warn(`Material ${n.name} uses a deprecated extension\n          "KHR_materials_pbrSpecularGlossiness", please use\n          "pbrMetallicRoughness" instead. Specular Glossiness materials are\n          currently supported for rendering, but not for our scene-graph API,\n          nor for auto-generation of USDZ for Quick Look.`),null==n.pbrMetallicRoughness&&(n.pbrMetallicRoughness={}),this[Zy]=new Yy(e,t,n.pbrMetallicRoughness,i),null==n.emissiveFactor&&(n.emissiveFactor=[0,0,0]),null==n.doubleSided&&(n.doubleSided=!1),null==n.alphaMode&&(n.alphaMode="OPAQUE"),null==n.alphaCutoff&&(n.alphaCutoff=.5);const{normalTexture:r,occlusionTexture:s,emissiveTexture:a}=n,{normalMap:o,aoMap:l,emissiveMap:h}=i.values().next().value;this[$y]=new Wy(e,Gy.Normal,o,i,t,r||null),this[Ky]=new Wy(e,Gy.Occlusion,l,i,t,s||null),this[Qy]=new Wy(e,Gy.Emissive,h,i,t,a||null)}async[rx](){if(null!=this[nx]){const{set:t,material:e}=await this[nx].doLazyLoad();return this[fy]=t,this[ix](this[nx].gltf),this[nx]=void 0,this.ensureLoaded=async()=>{},e}return this[fy].values().next().value}[sx](){if(null!=this[nx])throw new Error(`Material "${this.name}" has not been loaded, call 'await\n    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[rx]()}get isLoaded(){return null==this[nx]}get isActive(){return this[hx]}[ox](t){this[hx]=t}get name(){return this[gy].name}set name(t){const e=this[gy];if(null!=e&&(e.name=t),null!=this[fy])for(const e of this[fy])e.name=t}get pbrMetallicRoughness(){return this[sx](),this[Zy]}get normalTexture(){return this[sx](),this[$y]}get occlusionTexture(){return this[sx](),this[Ky]}get emissiveTexture(){return this[sx](),this[Qy]}get emissiveFactor(){return this[sx](),this[gy].emissiveFactor}get index(){return this[ax]}[lx](){return this[cx]}hasVariant(t){const e=this[ux].get(t);return null!=e&&this[cx].has(e.index)}setEmissiveFactor(t){this[sx]();for(const e of this[fy])e.emissive.fromArray(t);this[gy].emissiveFactor=t,this[vy]()}[ex](){this[sx]();const t=this[gy];for(const e of this[fy])"MASK"===this[gy].alphaMode?e.alphaTest=t.alphaCutoff:e.alphaTest=void 0,e.needsUpdate=!0}setAlphaCutoff(t){this[sx](),this[gy].alphaCutoff=t,this[ex](),this[vy]()}getAlphaCutoff(){return this[sx](),this[gy].alphaCutoff}setDoubleSided(t){this[sx]();for(const e of this[fy])e.side=t?2:0,e.needsUpdate=!0;this[gy].doubleSided=t,this[vy]()}getDoubleSided(){return this[sx](),this[gy].doubleSided}setAlphaMode(t){this[sx]();const e=(t,e)=>{t.transparent=e,t.depthWrite=!e};this[gy].alphaMode=t;for(const n of this[fy])e(n,"BLEND"===t),this[ex](),n.needsUpdate=!0;this[vy]()}getAlphaMode(){return this[sx](),this[gy].alphaMode}}var px,mx,fx;const gx=Symbol("materials"),vx=Symbol("variantToMaterialMap"),yx=Symbol("modelVariants"),xx=Symbol("mesh"),_x=Symbol("children"),bx=Symbol("initialMaterialIdx"),wx=Symbol("activeMaterialIdx");class Mx{constructor(t){this.name="",this[px]=new Array,this.name=t}}px=_x;class Sx extends Mx{constructor(t,e,n,i){super(t.name),this[mx]=new Map,this[fx]=new Map,this[xx]=t;const{gltf:r,threeGLTF:s,threeObjectMap:a}=i;this[yx]=n,this.mesh.userData.variantData=n;const o=a.get(t.material);null!=o.materials?this[bx]=this[wx]=o.materials:console.error(`Primitive (${t.name}) missing initial material reference.`);const l=t.userData.associations||{};if(null==l.meshes)return void console.error("Mesh is missing primitive index association");const h=((r.meshes||[])[l.meshes].primitives||[])[l.primitives];if(null!=h){if(null!=h.material)this[gx].set(h.material,e[h.material]);else{const t=e.findIndex((t=>"Default"===t.name));t>=0?this[gx].set(t,e[t]):console.warn("gltfPrimitive has no material!")}if(h.extensions&&h.extensions.KHR_materials_variants){const t=h.extensions.KHR_materials_variants,i=s.parser.json.extensions.KHR_materials_variants.variants;for(const r of t.mappings){const t=e[r.material];this[gx].set(r.material,t);for(const e of r.variants){const{name:r}=i[e];this[vx].set(e,t),t[lx]().add(e),n.has(r)||n.set(r,{name:r,index:e})}}}}else console.error("Mesh primitive definition is missing.")}get mesh(){return this[xx]}async setActiveMaterial(t){const e=this[gx].get(t);return null!=e&&(this.mesh.material=await e[rx](),this[wx]=t),this.mesh.material}getActiveMaterial(){return this[gx].get(this[wx])}getMaterial(t){return this[gx].get(t)}async enableVariant(t){if(null==t)return this.setActiveMaterial(this[bx]);if(null!=this[vx]&&this[yx].has(t)){const e=this[yx].get(t);return this.enableVariantHelper(e.index)}return null}async enableVariantHelper(t){if(null!=this[vx]&&null!=t){const e=this[vx].get(t);if(null!=e)return this.setActiveMaterial(e.index)}return null}async instantiateVariants(){if(null!=this[vx])for(const t of this[vx].keys()){if(null!=this.mesh.userData.variantMaterials.get(t).material)continue;const e=await this.enableVariantHelper(t);null!=e&&(this.mesh.userData.variantMaterials.get(t).material=e)}}get variantInfo(){return this[vx]}addVariant(t,e){if(!this.ensureVariantIsUnused(e))return!1;this[yx].has(e)||this[yx].set(e,{name:e,index:this[yx].size});const n=this[yx].get(e).index;return t[lx]().add(n),this[vx].set(n,t),this[gx].set(t.index,t),this.updateVariantUserData(n,t),!0}deleteVariant(t){if(this.variantInfo.has(t)){this.variantInfo.delete(t);const e=this.mesh.userData.variantMaterials;null!=e&&e.delete(t)}}updateVariantUserData(t,e){e[lx]().add(t),this.mesh.userData.variantData=this[yx],this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map;this.mesh.userData.variantMaterials.set(t,{material:e[fy].values().next().value,gltfMaterialIndex:e.index})}ensureVariantIsUnused(t){const e=this[yx].get(t);return null==e||!this.variantInfo.has(e.index)||(console.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`),!1)}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Tx,Ex,Ax,Rx,Cx,Lx;mx=gx,fx=vx;const Px=Symbol("materials"),Dx=Symbol("hierarchy"),Ix=Symbol("roots"),Ox=Symbol("primitives"),Nx=Symbol("correlatedSceneGraph"),Fx=Symbol("prepareVariantsForExport"),Ux=Symbol("switchVariant"),kx=Symbol("threeScene"),Bx=Symbol("materialsFromPoint"),zx=Symbol("materialFromPoint"),Hx=Symbol("variantData"),Vx=Symbol("availableVariants"),Gx=Symbol("modelOnUpdate"),Wx=Symbol("cloneMaterial");class jx{constructor(t,e,n,i){this.gltf=t,this.gltfElementMap=e,this.mapKey=n,this.doLazyLoad=i}}class qx{constructor(t,e=(()=>{})){this[Tx]=new Array,this[Ex]=new Array,this[Ax]=new Array,this[Rx]=new Array,this[Cx]=()=>{},this[Lx]=new Map,this[Gx]=e,this[Nx]=t;const{gltf:n,threeGLTF:i,gltfElementMap:r}=t;this[kx]=i.scene;for(const[t,s]of n.materials.entries()){const a=r.get(s);if(null!=a)this[Px].push(new dx(e,n,s,t,!0,this[Hx],a));else{const s=(n.materials||[])[t],o=t,l=async()=>{const t=await i.parser.getDependency("material",o),e=new Set;return r.set(s,e),e.add(t),{set:e,material:t}};this[Px].push(new dx(e,n,s,t,!1,this[Hx],a,new jx(n,r,s,l)))}}const s=new Map,a=new Array;for(const t of i.scene.children)a.push(t);for(;a.length>0;){const e=a.pop();let n=null;e instanceof Nn?(n=new Sx(e,this.materials,this[Hx],t),this[Ox].push(n)):n=new Mx(e.name);const i=s.get(e);null!=i?i[_x].push(n):this[Ix].push(n),this[Dx].push(n);for(const t of e.children)a.push(t),s.set(e,n)}}get materials(){return this[Px]}[(Tx=Px,Ex=Dx,Ax=Ix,Rx=Ox,Cx=Gx,Lx=Hx,Vx)](){const t=Array.from(this[Hx].values());return t.sort(((t,e)=>t.index-e.index)),t.map((t=>t.name))}getMaterialByName(t){const e=this[Px].filter((e=>e.name===t));return e.length>0?e[0]:null}[Bx](t){return t.intersectObject(this[kx],!0).map((t=>{const e=this[Dx].find((e=>{if(e instanceof Sx){if(e.mesh===t.object)return!0}return!1}));return null!=e?e.getActiveMaterial():null}))}[zx](t){const e=this[Bx](t);return e.length>0?e[0]:null}async[Ux](t){for(const e of this[Ox])await e.enableVariant(t);for(const t of this.materials)t[ox](!1);for(const t of this[Ox])this.materials[t.getActiveMaterial().index][ox](!0)}async[Fx](){const t=new Array;for(const e of this[Ox])t.push(e.instantiateVariants());await Promise.all(t)}[Wx](t,e){const n=this.materials[t];n.isLoaded||console.error("Cloning an unloaded material,\n           call 'material.ensureLoaded() before cloning the material.");const i=n[fy],r=JSON.parse(JSON.stringify(n[gy]));r.name=e;this[Nx].gltf.materials.push(r);const s=new Set;for(const[t,n]of i.entries()){const r=n.clone();r.name=e+(i.size>1?"_inst"+t:""),s.add(r)}const a=new dx(this[Gx],this[Nx].gltf,r,this[Px].length,!1,this[Hx],s);return this[Px].push(a),a}createMaterialInstanceForVariant(t,e,n,i=!0){let r=null;for(const i of this[Ox]){const s=this[Hx].get(n);null!=s&&i.variantInfo.has(s.index)||null!=i.getMaterial(t)&&(this.hasVariant(n)||this.createVariant(n),null==r&&(r=this[Wx](t,e)),i.addVariant(r,n))}if(i&&null!=r){r[ox](!0),this.materials[t][ox](!1);for(const t of this[Ox])t.enableVariant(n)}return r}createVariant(t){this[Hx].has(t)?console.warn(`Variant '${t}'' already exists`):this[Hx].set(t,{name:t,index:this[Hx].size})}hasVariant(t){return this[Hx].has(t)}setMaterialToVariant(t,e){if(null!=this[Vx]().find((t=>t===e)))if(t<0||t>=this.materials.length)console.error("setMaterialToVariant(): materialIndex is out of bounds.");else for(const n of this[Ox]){const i=n.getMaterial(t);null!=i&&n.addVariant(i,e)}else console.warn(`Can't add material to '${e}', the variant does not exist.'`)}updateVariantName(t,e){const n=this[Hx].get(t);null!=n&&(n.name=e,this[Hx].set(e,n),this[Hx].delete(t))}deleteVariant(t){const e=this[Hx].get(t);if(null!=e){for(const n of this.materials)n.hasVariant(t)&&n[cx].delete(e.index);for(const t of this[Ox])t.deleteVariant(e.index);this[Hx].delete(t)}}}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xx=function(t,e,n,i){for(var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const Yx=Symbol("currentGLTF"),Jx=Symbol("model"),Zx=Symbol("getOnUpdateMethod"),$x=Symbol("textureLoader"),Kx=Symbol("originalGltfJson");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qx=function(t,e,n,i){for(var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i,o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a};const t_=Math.PI/32,e_={basis:[Mu(pu(t_,"rad"))],keywords:{auto:[null]}},n_=Symbol("autoRotateStartTime"),i_=Symbol("radiansPerSecond"),r_=Symbol("syncRotationRate"),s_=Symbol("onCameraChange"),a_=(t=>{var e,n,i;class r extends t{constructor(){super(...arguments),this[e]=new Map,this[n]=t=>{t.forEach((t=>{t instanceof MutationRecord&&"childList"!==t.type||(t.addedNodes.forEach((t=>{this[Gp](t)})),t.removedNodes.forEach((t=>{this[Wp](t)})),this[wp]())}))},this[i]=new MutationObserver(this[Hp])}connectedCallback(){super.connectedCallback();for(let t=0;t<this.children.length;++t)this[Gp](this.children[t]);const{ShadyDOM:t}=self;null==t?this[Vp].observe(this,{childList:!0}):this[Vp]=t.observeChildren(this,this[Hp])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:t}=self;null==t?this[Vp].disconnect():t.unobserveChildren(this[Vp])}[(e=zp,n=Hp,i=Vp,Mp)](t,e){super[Mp](t,e);const n=this[bp],{annotationRenderer:i}=n,r=n.getCamera();n.shouldRender()&&(n.updateHotspots(r.position),i.domElement.style.display="",i.render(n,r))}updateHotspot(t){const e=this[zp].get(t.name);null!=e&&(e.updatePosition(t.position),e.updateNormal(t.normal),this[wp]())}positionAndNormalFromPoint(t,e){const n=this[bp],i=n.getNDC(t,e),r=n.positionAndNormalFromPoint(i);if(null==r)return null;jp.copy(n.target.matrixWorld).invert();const s=Ip(r.position.applyMatrix4(jp));qp.getNormalMatrix(jp);const a=Ip(r.normal.applyNormalMatrix(qp));let o=null;return null!=r.uv&&(o=Op(r.uv)),{position:s,normal:a,uv:o}}[Gp](t){if(!(t instanceof HTMLElement&&0===t.slot.indexOf("hotspot")))return;let e=this[zp].get(t.slot);null!=e?e.increment():(e=new Eu({name:t.slot,position:t.dataset.position,normal:t.dataset.normal}),this[zp].set(t.slot,e),this[bp].addHotspot(e)),this[bp].queueRender()}[Wp](t){if(!(t instanceof HTMLElement))return;const e=this[zp].get(t.slot);e&&(e.decrement()&&(this[bp].removeHotspot(e),this[zp].delete(t.slot)),this[bp].queueRender())}}return r})((t=>{var e,n,i,r;class s extends t{constructor(){super(...arguments),this[e]=void 0,this[n]=null,this[i]=new pl,this[r]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Jx]}get availableVariants(){return this.model?this.model[Vx]():[]}get originalGltfJson(){return this[Kx]}[(e=Jx,n=Yx,i=$x,r=Kx,Zx)](){return()=>{this[wp]()}}async createTexture(t,e="image/png"){const n=this[Yx],i=await new Promise((e=>this[$x].load(t,e)));return n&&i?(i.encoding=3001,i.wrapS=1e3,i.wrapT=1e3,i.flipY=!1,i.userData.mimeType=e,new Fy(this[Zx](),i)):null}async updated(t){if(super.updated(t),t.has("variantName")){const t=this[Yx],{variantName:e}=this;null!=t&&(await this[Jx][Ux](e),this[wp](),this.dispatchEvent(new CustomEvent("variant-applied")))}if(t.has("orientation")||t.has("scale")){const{modelContainer:t}=this[bp],e=mu(this.orientation)[0].terms,n=Tu(e[0]).number,i=Tu(e[1]).number,r=Tu(e[2]).number;t.quaternion.setFromEuler(new Ae(i,r,n,"YXZ"));const s=mu(this.scale)[0].terms;t.scale.set(s[0].number,s[1].number,s[2].number),this[bp].updateBoundingBox(),this[bp].updateShadow(),this[Ep].arRenderer.onUpdateScene(),this[wp]()}}[Sp](){super[Sp]();const{currentGLTF:t}=this[bp];if(null!=t){const{correlatedSceneGraph:e}=t;null!=e&&t!==this[Yx]&&(this[Jx]=new qx(e,this[Zx]()),this[Kx]=JSON.parse(JSON.stringify(e.gltf))),"variants"in t.userData&&this.requestUpdate("variantName")}this[Yx]=t,this.dispatchEvent(new CustomEvent("scene-graph-ready"))}async exportScene(t){const e=this[bp];return new Promise((async n=>{const i={binary:!0,onlyVisible:!0,maxTextureSize:1/0,forcePowerOfTwoTextures:!1,includeCustomExtensions:!1,embedImages:!0};Object.assign(i,t),i.animations=e.animations,i.truncateDrawRange=!0;const r=e.shadow;let s=!1;null!=r&&(s=r.visible,r.visible=!1),await this[Jx][Fx]();(new Dv).register((t=>new my(t))).parse(e.modelContainer.children[0],(t=>n(new Blob([i.binary?t:JSON.stringify(t)],{type:i.binary?"application/octet-stream":"application/json"}))),i),null!=r&&(r.visible=s)}))}materialFromPoint(t,e){const n=this[bp],i=n.getNDC(t,e);return n.raycaster.setFromCamera(i,n.getCamera()),this[Jx][zx](n.raycaster)}}return Xx([J({type:String,attribute:"variant-name"})],s.prototype,"variantName",void 0),Xx([J({type:String,attribute:"orientation"})],s.prototype,"orientation",void 0),Xx([J({type:String,attribute:"scale"})],s.prototype,"scale",void 0),s})((t=>{var e,n,i;class r extends t{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=3e3,this.rotationPerSecond="auto",this[e]=performance.now(),this[n]=0,this[i]=t=>{this.autoRotate&&"user-interaction"===t.detail.source&&(this[n_]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[s_]),this[n_]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[s_]),this[n_]=performance.now()}updated(t){super.updated(t),t.has("autoRotate")&&(this[n_]=performance.now())}[(e=n_,n=i_,r_)](t){this[i_]=t[0]}[Mp](t,e){if(super[Mp](t,e),!this.autoRotate||!this[Dp]()||this[Ep].isPresenting)return;const n=Math.min(e,t-this[n_]-this.autoRotateDelay);n>0&&(this[bp].yaw=this.turntableRotation+this[i_]*n*.001)}get turntableRotation(){return this[bp].yaw}resetTurntableRotation(t=0){this[bp].yaw=t}}return i=s_,Qx([J({type:Boolean,attribute:"auto-rotate"})],r.prototype,"autoRotate",void 0),Qx([J({type:Number,attribute:"auto-rotate-delay"})],r.prototype,"autoRotateDelay",void 0),Qx([tg({intrinsics:e_,updateHandler:r_}),J({type:String,attribute:"rotation-per-second"})],r.prototype,"rotationPerSecond",void 0),r})((t=>{var e,n,i;class r extends t{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=0,this.shadowSoftness=1,this.exposure=1,this[e]=null,this[n]=null,this[i]=t=>{t.element===this&&this[Gu]()}}connectedCallback(){super.connectedCallback(),this[Ep].loader.addEventListener("preload",this[ju])}disconnectedCallback(){super.disconnectedCallback(),this[Ep].loader.removeEventListener("preload",this[ju])}updated(t){super.updated(t),t.has("shadowIntensity")&&(this[bp].setShadowIntensity(.5*this.shadowIntensity),this[wp]()),t.has("shadowSoftness")&&(this[bp].setShadowSoftness(this.shadowSoftness),this[wp]()),t.has("exposure")&&(this[bp].exposure=this.exposure,this[wp]()),(t.has("environmentImage")||t.has("skyboxImage"))&&this[Lp]()&&this[Gu]()}hasBakedShadow(){return this[bp].bakedShadows.length>0}[(e=Hu,n=Wu,i=ju,Sp)](){super[Sp](),null!=this[Hu]&&this[Vu](this[Hu])}async[Gu](){const{skyboxImage:t,environmentImage:e}=this;null!=this[Wu]&&(this[Wu](),this[Wu]=null);const{textureUtils:n}=this[Ep];if(null!=n)try{const{environmentMap:i,skybox:r}=await new Promise((async(i,r)=>{const s=n.generateEnvironmentMapAndSkybox(ru(t),e,{progressTracker:this[Ap]});this[Wu]=()=>r(s),i(await s)}));this[bp].background=null!=r?r.name===i.name?i:r:null,this[Vu](i),this[bp].dispatchEvent({type:"envmap-update"})}catch(t){if(t instanceof Error)throw this[Vu](null),t}}[Vu](t){this[bp].environment!==t&&(this[Hu]=t,this[bp].environment=this[Hu],this.dispatchEvent(new CustomEvent("environment-change")),this[wp]())}}return zu([J({type:String,attribute:"environment-image"})],r.prototype,"environmentImage",void 0),zu([J({type:String,attribute:"skybox-image"})],r.prototype,"skyboxImage",void 0),zu([J({type:Number,attribute:"shadow-intensity"})],r.prototype,"shadowIntensity",void 0),zu([J({type:Number,attribute:"shadow-softness"})],r.prototype,"shadowSoftness",void 0),zu([J({type:Number})],r.prototype,"exposure",void 0),r})((t=>{var e,n,i,r,s,a,o,l,h,c,u,d,p,m,f,g,v;class y extends t{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit="0deg 75deg 105%",this.cameraTarget="auto auto auto",this.fieldOfView="auto",this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=3e3,this.interactionPromptStyle=Sg,this.interactionPrompt=wg,this.interactionPolicy=Tg,this.orbitSensitivity=1,this.touchAction=Eg,this.disableZoom=!1,this.enablePan=!1,this.interpolationDecay=50,this.bounds="legacy",this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[n]=this.shadowRoot.querySelector(".interaction-prompt > .animated-container"),this[i]=this.shadowRoot.querySelector(".pan-target"),this[r]=1/0,this[s]=0,this[a]=1/0,this[o]=!1,this[l]=!1,this[h]=new pg(this[bp].camera,this[xp],this[bp]),this[c]=new Jl,this[u]=!1,this[d]=!1,this[p]=!1,this[m]=()=>{isFinite(this[Qg])||(this[Qg]=performance.now()),this.interactionPrompt!==Mg||this[Zg]||(this[Jg]=!0)},this[f]=()=>{this.interactionPrompt===Mg&&(this[Jg]=!1,this[Bg].classList.remove("visible"),this[$g]=1/0,this[Qg]=1/0)},this[g]=({source:t})=>{this[Gg](),this[wp](),t===ug&&(this[Zg]=!0,this[Vg]()),this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:t}}))},this[v]=t=>{"pointer-change-start"===t.type?this[yp].classList.add("pointer-tumbling"):this[yp].classList.remove("pointer-tumbling")}}getCameraOrbit(){const{theta:t,phi:e,radius:n}=this[tv];return{theta:t,phi:e,radius:n,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return Ip(this[Ep].isPresenting?this[Ep].arRenderer.target:this[bp].getTarget())}getFieldOfView(){return this[kg].getFieldOfView()}getMinimumFieldOfView(){return this[kg].options.minimumFieldOfView}getMaximumFieldOfView(){return this[kg].options.maximumFieldOfView}getIdealAspect(){return this[bp].idealAspect}jumpCameraToGoal(){this[ev]=!0,this.requestUpdate(ev,!1)}resetInteractionPrompt(){this[Kg]=0,this[$g]=1/0,this[Zg]=!1,this[Jg]=this.interactionPrompt===wg&&this.cameraControls}zoom(t){const e=new WheelEvent("wheel",{deltaY:-30*t});this[xp].dispatchEvent(e)}connectedCallback(){super.connectedCallback(),this[kg].addEventListener("change",this[Xg]),this[kg].addEventListener("pointer-change-start",this[Yg]),this[kg].addEventListener("pointer-change-end",this[Yg])}disconnectedCallback(){super.disconnectedCallback(),this[kg].removeEventListener("change",this[Xg]),this[kg].removeEventListener("pointer-change-start",this[Yg]),this[kg].removeEventListener("pointer-change-end",this[Yg])}updated(t){super.updated(t);const e=this[kg],n=this[xp];if(t.has("cameraControls")&&(this.cameraControls?(e.enableInteraction(),this.interactionPrompt===wg&&(this[Jg]=!0),n.addEventListener("focus",this[qg]),n.addEventListener("blur",this[jg])):(n.removeEventListener("focus",this[qg]),n.removeEventListener("blur",this[jg]),e.disableInteraction(),this[Vg]()),this[xp].setAttribute("aria-label",this[up])),t.has("disableZoom")&&(e.disableZoom=this.disableZoom),t.has("enablePan")&&(e.enablePan=this.enablePan,this.enablePan?this.addEventListener("contextmenu",Ig):this.removeEventListener("contextmenu",Ig)),t.has("bounds")&&(this[bp].tightBounds="tight"===this.bounds),(t.has("interactionPrompt")||t.has("cameraControls")||t.has("src"))&&(this.interactionPrompt===wg&&this.cameraControls&&!this[Zg]?this[Jg]=!0:this[Vg]()),t.has("interactionPromptStyle")&&this[Bg].classList.toggle("wiggle",this.interactionPromptStyle===Sg),t.has("interactionPolicy")){const t=this.interactionPolicy;e.applyOptions({interactionPolicy:t})}if(t.has("touchAction")){const t=this.touchAction;e.applyOptions({touchAction:t}),e.updateTouchActionStyle()}t.has("orbitSensitivity")&&(e.sensitivity=this.orbitSensitivity),t.has("interpolationDecay")&&(e.setDamperDecayTime(this.interpolationDecay),this[bp].setTargetDamperDecayTime(this.interpolationDecay)),!0===this[ev]&&Promise.resolve().then((()=>{e.jumpToGoal(),this[bp].jumpToGoal(),this[ev]=!1}))}async updateFraming(){const t=this[bp],e=t.adjustedFoV(t.framedFoVDeg);await t.updateFraming();const n=t.adjustedFoV(t.framedFoVDeg),i=this[kg].getFieldOfView()/e;this[kg].setFieldOfView(n*i),this[iv]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),await this.requestUpdate("cameraOrbit")}[(e=Bg,n=Hg,i=zg,r=Qg,s=Kg,a=$g,o=Zg,l=Jg,h=kg,c=tv,u=ev,d=nv,p=iv,sv)](t){const e=this[bp];e.framedFoVDeg=180*t[0]/Math.PI,this[kg].setFieldOfView(e.adjustedFoV(e.framedFoVDeg))}[rv](t){if(this[iv]){const{theta:e,phi:n}=this.getCameraOrbit();t[0]=e,t[1]=n,this[iv]=!1}this[kg].setOrbit(t[0],t[1],t[2])}[ov](t){this[kg].applyOptions({minimumAzimuthalAngle:t[0],minimumPolarAngle:t[1],minimumRadius:t[2]}),this.jumpCameraToGoal()}[lv](t){this[kg].applyOptions({maximumAzimuthalAngle:t[0],maximumPolarAngle:t[1],maximumRadius:t[2]}),this[Wg](t[2]),this.jumpCameraToGoal()}[hv](t){this[kg].applyOptions({minimumFieldOfView:180*t[0]/Math.PI}),this.jumpCameraToGoal()}[cv](t){const e=this[bp].adjustedFoV(180*t[0]/Math.PI);this[kg].applyOptions({maximumFieldOfView:e}),this.jumpCameraToGoal()}[av](t){const[e,n,i]=t;this[Ep].arRenderer.isPresenting||this[bp].setTarget(e,n,i),this[Ep].arRenderer.updateTarget()}[Mp](t,e){if(super[Mp](t,e),this[Ep].isPresenting||!this[Dp]())return;const n=performance.now();if(this[Jg]){const t=this.interactionPrompt===wg?this[fp]:this[Qg];this.loaded&&n>t+this.interactionPromptThreshold&&(this[Jg]=!1,this[$g]=n,this[Bg].classList.add("visible"))}if(isFinite(this[$g])&&this.interactionPromptStyle===Sg){const t=this[bp],e=(n-this[$g])/5e3%1,i=yg(e),r=xg(e);if(this[Hg].style.opacity=`${r}`,i!==this[Kg]){const e=i*t.width*.05,n=(i-this[Kg])*Math.PI/16;this[Hg].style.transform=`translateX(${e}px)`,this[kg].adjustOrbit(n,0,0),this[Kg]=i}}this[kg].update(t,e),this[bp].updateTarget(e)}[Vg](){this[Jg]=!1,this[Bg].classList.remove("visible"),this[$g]=1/0}[Wg](t){const e=2*Math.max(this[bp].boundingSphere.radius,t);this[kg].updateNearFar(0,e)}[Gg](){const{theta:t,phi:e}=this[kg].getCameraSpherical(this[tv]),n=(4+Math.floor((t%Ug+Fg)/Og))%4,i=Math.floor(e/Ng),r=_g[n],s=bg[i];this[mp](`View from stage ${s}${r}`)}get[up](){return super[up]+(this.cameraControls?". Use mouse, touch or arrow keys to move.":"")}async[Tp](t){const e=this[kg],n=this[bp],i=n.adjustedFoV(n.framedFoVDeg);super[Tp](t);const r=n.adjustedFoV(n.framedFoVDeg)/i,s=e.getFieldOfView()*(isFinite(r)?r:1);e.updateAspect(this[bp].aspect),await this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this[kg].setFieldOfView(s),this.jumpCameraToGoal()}[Sp](){super[Sp](),this[nv]?this[iv]=!0:this[nv]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}}return m=qg,f=jg,g=Xg,v=Yg,vg([J({type:Boolean,attribute:"camera-controls"})],y.prototype,"cameraControls",void 0),vg([tg({intrinsics:Cg,observeEffects:!0,updateHandler:rv}),J({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],y.prototype,"cameraOrbit",void 0),vg([tg({intrinsics:Dg,observeEffects:!0,updateHandler:av}),J({type:String,attribute:"camera-target",hasChanged:()=>!0})],y.prototype,"cameraTarget",void 0),vg([tg({intrinsics:Ag,observeEffects:!0,updateHandler:sv}),J({type:String,attribute:"field-of-view",hasChanged:()=>!0})],y.prototype,"fieldOfView",void 0),vg([tg({intrinsics:Lg,updateHandler:ov}),J({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],y.prototype,"minCameraOrbit",void 0),vg([tg({intrinsics:Pg,updateHandler:lv}),J({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],y.prototype,"maxCameraOrbit",void 0),vg([tg({intrinsics:Rg,updateHandler:hv}),J({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],y.prototype,"minFieldOfView",void 0),vg([tg({intrinsics:Ag,updateHandler:cv}),J({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],y.prototype,"maxFieldOfView",void 0),vg([J({type:Number,attribute:"interaction-prompt-threshold"})],y.prototype,"interactionPromptThreshold",void 0),vg([J({type:String,attribute:"interaction-prompt-style"})],y.prototype,"interactionPromptStyle",void 0),vg([J({type:String,attribute:"interaction-prompt"})],y.prototype,"interactionPrompt",void 0),vg([J({type:String,attribute:"interaction-policy"})],y.prototype,"interactionPolicy",void 0),vg([J({type:Number,attribute:"orbit-sensitivity"})],y.prototype,"orbitSensitivity",void 0),vg([J({type:String,attribute:"touch-action"})],y.prototype,"touchAction",void 0),vg([J({type:Boolean,attribute:"disable-zoom"})],y.prototype,"disableZoom",void 0),vg([J({type:Boolean,attribute:"enable-pan"})],y.prototype,"enablePan",void 0),vg([J({type:Number,attribute:"interpolation-decay"})],y.prototype,"interpolationDecay",void 0),vg([J({type:String,attribute:"bounds"})],y.prototype,"bounds",void 0),y})((t=>{var e,n,i,r,s,a,o,l,h,c;class u extends t{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes="webxr scene-viewer",this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[n]=this.shadowRoot.querySelector(".ar-button"),this[i]=document.createElement("a"),this[r]=new Set,this[s]=tf,this[a]=!1,this[o]=t=>{t.preventDefault(),this.activateAR()},this[l]=({status:t})=>{t!==Ku&&this[Ep].arRenderer.presentedScene!==this[bp]||(this.setAttribute("ar-status",t),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:t}})),t===Ku?this.removeAttribute("ar-tracking"):t===Qu&&this.setAttribute("ar-tracking",nd))},this[h]=({status:t})=>{this.setAttribute("ar-tracking",t),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:t}}))},this[c]=t=>{"_apple_ar_quicklook_button_tapped"==t.data&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[of]!==tf}connectedCallback(){super.connectedCallback(),this[Ep].arRenderer.addEventListener("status",this[df]),this.setAttribute("ar-status",Ku),this[Ep].arRenderer.addEventListener("tracking",this[pf]),this[hf].addEventListener("message",this[mf])}disconnectedCallback(){super.disconnectedCallback(),this[Ep].arRenderer.removeEventListener("status",this[df]),this[Ep].arRenderer.removeEventListener("tracking",this[pf]),this[hf].removeEventListener("message",this[mf])}async update(t){super.update(t),t.has("arScale")&&(this[bp].canScale="fixed"!==this.arScale),t.has("arPlacement")&&(this[bp].updateShadow(),this[wp]()),(t.has("ar")||t.has("arModes")||t.has("src")||t.has("iosSrc"))&&(t.has("arModes")&&(this[lf]=Jm(this.arModes)),this[ff]())}async activateAR(){switch(this[of]){case $m:this[sf]();break;case Qm:await this[nf]();break;case Km:this[rf]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities")}}async[(e=af,n=ef,i=hf,r=lf,s=of,a=cf,o=uf,l=df,h=pf,c=mf,ff)](){if(this[of]=tf,this.ar){if(null!=this.src)for(const t of this[lf]){if("webxr"===t&&ph&&!Xm&&await this[Ep].arRenderer.supportsPresentation()){this[of]=Qm;break}if("scene-viewer"===t&&xh&&!Ym){this[of]=Km;break}if("quick-look"===t&&gh){this[of]=$m;break}}!this.canActivateAR&&null!=this.iosSrc&&gh&&(this[of]=$m)}if(this.canActivateAR)this[ef].classList.add("enabled"),this[ef].addEventListener("click",this[uf]);else if(this[ef].classList.contains("enabled")){this[ef].removeEventListener("click",this[uf]),this[ef].classList.remove("enabled");const t=ed;this.setAttribute("ar-status",t),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:t}}))}}async[nf](){console.log("Attempting to present in AR with WebXR..."),await this[gf]();try{this[ef].removeEventListener("click",this[uf]);const{arRenderer:t}=this[Ep];t.placeOnWall="wall"===this.arPlacement,await t.present(this[bp],this.xrEnvironment)}catch(t){console.warn("Error while trying to present in AR with WebXR"),console.error(t),await this[Ep].arRenderer.stopPresenting(),Xm=!0,console.warn("Falling back to next ar-mode"),await this[ff](),this.activateAR()}finally{this[ff]()}}async[gf](){this.loaded||(this[cf]=!0,this[gp](),await((t,e,n=null)=>new Promise((i=>{t.addEventListener(e,(function r(s){n&&!n(s)||(i(s),t.removeEventListener(e,r))}))})))
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this,"load"),this[cf]=!1)}[Lp](){return super[Lp]()||this[cf]}[rf](){const t=self.location.toString(),e=new URL(t),n=new URL(this.src,t),i=new URLSearchParams(n.search);if(e.hash="#model-viewer-no-ar-fallback",i.set("mode","ar_preferred"),i.has("disable_occlusion")||i.set("disable_occlusion","true"),"fixed"===this.arScale&&i.set("resizable","false"),"wall"===this.arPlacement&&i.set("enable_vertical_placement","true"),i.has("sound")){const e=new URL(i.get("sound"),t);i.set("sound",e.toString())}if(i.has("link")){const e=new URL(i.get("link"),t);i.set("link",e.toString())}const r=`intent://arvr.google.com/scene-viewer/1.0?${i.toString()+"&file="+encodeURIComponent(n.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(e.toString())};end;`;self.addEventListener("hashchange",(()=>{"#model-viewer-no-ar-fallback"===self.location.hash&&(Ym=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[ff]())}),{once:!0}),this[hf].setAttribute("href",r),console.log("Attempting to present in AR with Scene Viewer..."),this[hf].click()}async[sf](){const t=!this.iosSrc;this[ef].classList.remove("enabled");const e=t?await this.prepareUSDZ():this.iosSrc,n=new URL(e,self.location.toString());"fixed"===this.arScale&&(n.hash&&(n.hash+="&"),n.hash+="allowsContentScaling=0");const i=this[hf];i.setAttribute("rel","ar");const r=document.createElement("img");i.appendChild(r),i.setAttribute("href",n.toString()),t&&i.setAttribute("download","model.usdz"),console.log("Attempting to present in AR with Quick Look..."),i.click(),i.removeChild(r),t&&URL.revokeObjectURL(e),this[ef].classList.add("enabled")}async prepareUSDZ(){const t=this[Ap].beginActivity();await this[gf]();const e=this[bp],n=e.shadow;let i=!1;null!=n&&(i=n.visible,n.visible=!1),t(.2);const r=new km,s=await r.parse(e.modelContainer),a=new Blob([s],{type:"model/vnd.usdz+zip"}),o=URL.createObjectURL(a);return t(1),null!=n&&(n.visible=i),o}}return qm([J({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),qm([J({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),qm([J({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),qm([J({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),qm([J({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),qm([J({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u})((t=>{var e,n,i,r,s,a,o,l,h,c,u,d,p,m;class f extends t{constructor(...t){super(...t),this.poster=null,this.reveal=dv,this.loading=mv,this.generateSchema=!1,this.seamlessPoster=!1,this[e]=!1,this[n]=!1,this[i]=0,this[r]=null,this[s]=this.shadowRoot.querySelector(".slot.poster"),this[a]=this.shadowRoot.querySelector("#default-poster"),this[o]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[l]=this.shadowRoot.querySelector("#default-progress-bar > .mask"),this[h]=this[_v].getAttribute("aria-label"),this[c]=((t,e)=>{let n=null;const i=(...i)=>{null==n&&(t(...i),n=self.setTimeout((()=>n=null),e))};return i.flush=()=>{null!=n&&(self.clearTimeout(n),n=null)},i})((t=>{const e=this[vv].parentNode;requestAnimationFrame((()=>{this[yv].style.opacity=""+.2*(1-t),this[vv].style.transform=`scaleX(${t})`,0===t&&(e.removeChild(this[vv]),e.appendChild(this[vv])),1===t?this[vv].classList.add("hide"):this[vv].classList.remove("hide")}))}),100),this[u]=()=>{this.reveal!==pv&&this.reveal!==dv&&this.dismissPoster()},this[d]=t=>{if(this.reveal!==pv)switch(t.keyCode){case 32:case 13:this.dismissPoster()}},this[p]=t=>{const e=t.detail.totalProgress;this[Tv]=Math.max(e,this[Tv]),1===e&&(this[Sv].flush(),!this[Pp]()||null==this[bv]&&this.reveal!==dv||this[wv]()),this[Sv](e),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:e}}))},this[m]=()=>{this[Ev]=!0;const t=this.getRootNode();t&&t.activeElement===this&&this[xp].focus();const e=this[_v];e.setAttribute("aria-hidden","true"),e.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))};const f=self.ModelViewerElement||{},g=f.dracoDecoderLocation||"https://www.gstatic.com/draco/versioned/decoders/1.4.1/";Zc.setDRACODecoderLocation(g);const v=f.ktx2TranscoderLocation||"https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";Zc.setKTX2TranscoderLocation(v),f.meshoptDecoderLocation&&Zc.setMeshoptDecoderLocation(f.meshoptDecoderLocation)}static set dracoDecoderLocation(t){Zc.setDRACODecoderLocation(t)}static get dracoDecoderLocation(){return Zc.getDRACODecoderLocation()}static set ktx2TranscoderLocation(t){Zc.setKTX2TranscoderLocation(t)}static get ktx2TranscoderLocation(){return Zc.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(t){Zc.setMeshoptDecoderLocation(t)}static get meshoptDecoderLocation(){return Zc.getMeshoptDecoderLocation()}static mapURLs(t){Fd.singleton.loader[Xc].manager.setURLModifier(t)}dismissPoster(){this[Pp]()?this[wv]():(this[bv]=gv,this[gp]())}showPoster(){const t=this[xv],e=this[_v];e.removeAttribute("tabindex"),e.removeAttribute("aria-hidden"),t.classList.add("show");const n=this.modelIsVisible;this[Mv]=!1,this[cp](n),this[Ev]=!1}getDimensions(){return Ip(this[bp].size)}connectedCallback(){super.connectedCallback(),this[xv].addEventListener("click",this[Cv]),this[xv].addEventListener("keydown",this[Lv]),this[Ap].addEventListener("progress",this[Pv])}disconnectedCallback(){super.disconnectedCallback(),this[xv].removeEventListener("click",this[Cv]),this[xv].removeEventListener("keydown",this[Lv]),this[Ap].removeEventListener("progress",this[Pv])}async updated(t){super.updated(t),t.has("poster")&&null!=this.poster&&(this[_v].style.backgroundImage=`url(${this.poster})`),t.has("alt")&&this[_v].setAttribute("aria-label",this[dp]),(t.has("reveal")||t.has("loading"))&&this[gp](),t.has("generateSchema")&&(!0===this.generateSchema?this[bp].updateSchema(this.src):this[bp].updateSchema(null)),t.has("seamlessPoster")&&(!0===this.seamlessPoster?this[xv].classList.add("quick"):this[xv].classList.remove("quick"))}[(e=Mv,n=Ev,i=Tv,r=bv,s=xv,a=_v,o=vv,l=yv,h=Rv,c=Sv,u=Cv,d=Lv,p=Pv,Lp)](){return!!this.src&&(null!=this[bv]||this.loading===fv||this.reveal===dv&&this[hp])}[Pp](){const{src:t}=this;return!!t&&super[Pp]()&&1===this[Tv]}[(m=Av,wv)](){this[bv]=null;const t=this[xv];if(t.classList.contains("show")){const e=this.modelIsVisible;this[Mv]=!0,this[cp](e),requestAnimationFrame((()=>{t.classList.remove("show"),!0===this.seamlessPoster?this[Av]():t.addEventListener("transitionend",this[Av],{once:!0})}))}else this[Ev]=!0}[Cp](){return super[Cp]()&&this[Mv]}[Dp](){return super[Dp]()&&this[Ev]}async[gp](){this[Tv]=0,!0===this.generateSchema&&this[bp].updateSchema(this.src),null!=this[bp].currentGLTF&&null!=this.src&&this[Lp]()||this.showPoster(),this[mp]("Loading"),await super[gp]()}}return uv([J({type:String})],f.prototype,"poster",void 0),uv([J({type:String})],f.prototype,"reveal",void 0),uv([J({type:String})],f.prototype,"loading",void 0),uv([J({type:Boolean,attribute:"generate-schema"})],f.prototype,"generateSchema",void 0),uv([J({type:Boolean,attribute:"seamless-poster"})],f.prototype,"seamlessPoster",void 0),f})((t=>{var e;class n extends t{constructor(...t){super(t),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0,this[bp].subscribeMixerEvent("loop",(t=>{const e=t.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:e}}))})),this[bp].subscribeMixerEvent("finished",(()=>{this[kp]=!0,this.dispatchEvent(new CustomEvent("finished"))}))}get availableAnimations(){return this.loaded?this[bp].animationNames:[]}get duration(){return this[bp].duration}get paused(){return this[kp]}get currentTime(){return this[bp].animationTime}set currentTime(t){this[bp].animationTime=t,this[wp]()}get timeScale(){return this[bp].animationTimeScale}set timeScale(t){this[bp].animationTimeScale=t}pause(){this[kp]||(this[kp]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(t){this.availableAnimations.length>0&&(this[kp]=!1,this[Up](t),this.dispatchEvent(new CustomEvent("play")))}[(e=kp,Sp)](){super[Sp](),this[kp]=!0,this.autoplay&&this.play()}[Mp](t,e){super[Mp](t,e),this[kp]||!this[Dp]()&&!this[Ep].isPresenting||(this[bp].updateAnimation(e/1e3),this[wp]())}updated(t){super.updated(t),t.has("autoplay")&&this.autoplay&&this.play(),t.has("animationName")&&this[Up]()}async[gp](){return this[bp].stopAnimation(),super[gp]()}[Up](t=Bp){var e;const n=null!==(e=t.repetitions)&&void 0!==e?e:1/0,i=t.pingpong?2202:1===n?2200:2201;this[bp].playAnimation(this.animationName,this.animationCrossfadeDuration/1e3,i,n),this[kp]&&(this[bp].updateAnimation(0),this[wp]())}}return Fp([J({type:Boolean})],n.prototype,"autoplay",void 0),Fp([J({type:String,attribute:"animation-name"})],n.prototype,"animationName",void 0),Fp([J({type:Number,attribute:"animation-crossfade-duration"})],n.prototype,"animationCrossfadeDuration",void 0),n})((t=>{var e;const n=Symbol("endPolyfillCoordination");return e=n,class extends t{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),null==this[n]&&(this[n]=(t=>{if(null==t.shadowRoot||t.hasAttribute("data-js-focus-visible"))return()=>{};if(!self.applyFocusVisiblePolyfill){const e=()=>{self.applyFocusVisiblePolyfill(t.shadowRoot)};return self.addEventListener("focus-visible-polyfill-ready",e,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",e)}}return self.applyFocusVisiblePolyfill(t.shadowRoot),()=>{}})(this))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),null!=this[n]&&(this[n](),this[n]=null)}}})(Np)))))))));customElements.define("model-viewer",a_);export{a_ as ModelViewerElement};
//# sourceMappingURL=model-viewer.min.js.map