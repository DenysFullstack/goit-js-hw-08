function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var i,r,o,f,a,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function h(e){return l=e,a=setTimeout(T,t),c?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function T(){var e=m();if(j(e))return w(e);a=setTimeout(T,function(e){var n=t-(e-u);return s?v(n,o-(e-l)):n}(e))}function w(e){return a=void 0,p&&i?y(e):(i=r=void 0,f)}function O(){var e=m(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(T,t),y(u)}return void 0===a&&(a=setTimeout(T,t)),f}return t=b(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=u=r=a=void 0},O.flush=function(){return void 0===a?f:w(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");let h={};const j=localStorage;if(y.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,j.setItem("feedback-form-state",JSON.stringify(h))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.target.elements;if(""===t.value||""===n.value)return void alert("Please fill in all the fields!");e.currentTarget.reset(),localStorage.clear()})),j.getItem("feedback-form-state")){h=JSON.parse(j.getItem("feedback-form-state"));for(let e in h)y.elements[e].value=h[e]}
//# sourceMappingURL=03-feedback.3a7fd758.js.map
