!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var i,o,u,f,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function h(e){return c=e,a=setTimeout(w,t),d?b(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=p();if(O(e))return T(e);a=setTimeout(w,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function T(e){return a=void 0,v&&i?b(e):(i=o=void 0,f)}function S(){var e=p(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===a)return h(l);if(s)return a=setTimeout(w,t),b(l)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=o=a=void 0},S.flush=function(){return void 0===a?f:T(p())},S}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=f.test(t);return r||a.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var h="feedback-form-state",O=document.querySelector(".feedback-form"),w={},T=localStorage;if(O.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,T.setItem(h,JSON.stringify(w))}),500)),O.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements,n=t.email,i=t.message;if(""===n.value||""===i.value)return void alert("Please fill in all the fields!");console.log(w),e.target.reset(),T.removeItem(h),w={}})),T.getItem(h))for(var S in w=JSON.parse(T.getItem(h)))O.elements[S].value=w[S]}();
//# sourceMappingURL=03-feedback.c54121b3.js.map