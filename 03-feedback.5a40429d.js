function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),g=Object.prototype.toString,p=Math.max,m=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var r,i,a,f,u,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=y();if(b(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-c);return d?m(n,a-(e-l)):n}(e))}function h(e){return u=void 0,v&&r?g(e):(r=i=void 0,f)}function w(){var e=y(),n=b(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(S,t),s?g(e):f}(c);if(d)return u=setTimeout(S,t),g(c)}return void 0===u&&(u=setTimeout(S,t)),f}return t=j(t)||0,O(n)&&(s=!!n.leading,a=(d="maxWait"in n)?p(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},w.flush=function(){return void 0===u?f:h(y())},w}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==i}(e))return r;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):f.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return O(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})},document.addEventListener("DOMContentLoaded",(function(){const n="feedback-form-state";let o={};const r=document.querySelector(".feedback-form");r.addEventListener("input",e(t)((function(e){o[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(o))}),500)),function(){if(localStorage.getItem(n)){o=JSON.parse(localStorage.getItem(n));for(let e in o)r.elements[e].value=o[e]}}(),r.addEventListener("submit",(function(e){e.preventDefault(),""===r[0].value||""===r[1].value?alert("Треба заповнити всі поля форми"):(console.log(JSON.parse(localStorage.getItem(n))),r.reset(),Object.getOwnPropertyNames(o).forEach((e=>o[e]="")),localStorage.removeItem(n))}))}));
//# sourceMappingURL=03-feedback.5a40429d.js.map