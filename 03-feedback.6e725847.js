!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=s||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return d.Date.now()};function y(e,t,n){var o,r,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function T(){var e=b();if(y(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,d&&o?v(e):(o=r=void 0,u)}function w(){var e=b(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(T,t),s?v(e):u}(l);if(m)return f=setTimeout(T,t),v(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,j(n)&&(s=!!n.leading,a=(m="maxWait"in n)?g(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const T=document.querySelector(".feedback-form"),h=document.querySelector('[name ="email"]'),w=document.querySelector('[name ="message"]');h.setAttribute("id","email"),w.setAttribute("id","message"),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);h.value=t.email,w.value=t.message,void 0===t.email&&(h.value=""),void 0===t.message&&(w.value="")}}(),T.addEventListener("input",e(t)((function(e){e.preventDefault();const t=e.target,n=e.target.value;"email"===t.getAttribute("id")?O.email=n:O.message=n;const i=JSON.stringify(O);localStorage.setItem("feedback-form-state",i)}),500)),T.addEventListener("submit",(function(e){if(e.preventDefault(),!O.email||!O.message)return void alert("Треба заповнити всі поля форми");e.currentTarget.reset();const t={email:O.email,message:O.message};console.log(t),localStorage.removeItem("feedback-form-state")}));let O={}}();
//# sourceMappingURL=03-feedback.6e725847.js.map
