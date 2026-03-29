
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
/* eslint-disable */
function Fragment(e){return e.children}function e(e,o,t){for(var n,r=e.length,l=o.length,a=t?r-l:l-r,u=0;u<r&&u<l;++u)if(n=e[u]-o[u]){a=n;break}return a>0?1:a<0?-1:0}var o=function(e,t){return (o=Object.is||function(e,o){return e===o?0!==e||1/e==1/o:e!=e&&o!=o})(e,t)},t={__proto__:null},n=!0;var r=/([A-Z])/g,l={__proto__:null},a=function(e){return function(){if(n){n=!1;try{var e=/^-[^-]+-/,o=getComputedStyle(document.documentElement);for(var r in o)+r>-1&&(r=o[r],t[r.replace(e,"")]=r);}catch(l){}}}(),(a=function(e){return "-"===e[0]?e:(e=e in l?l[e]:l[e]=e.replace(r,"-$1").toLowerCase())in t?t[e]:e})(e)};function u(e){switch(typeof e){case"string":return e;case"object":var o=[];if(Array.isArray(e))for(var t,n=0,r=e.length;n<r;++n)(t=u(e[n]))&&o.push(t);else if(e)for(var l in e)v(e[l])&&o.push(a(l)+":"+e[l]);return o.join(";")}return ""}function i(e){switch(typeof e){case"string":return e;case"number":return e+"";case"bigint":return e+"n";case"object":var o=[];if(Array.isArray(e))for(var t,n=0,r=e.length;n<r;++n)(t=i(e[n]))&&o.push(t);else if(e)for(var l in e)e[l]&&o.push(l);return o.join(" ")}return ""}function v(e){return null!=e&&""!==e&&"object"!=typeof e}function c(e,o,t){e[v(t)?"setAttribute":"removeAttribute"](o,""+t);}function s(e,o,t){e[v(t)?"setAttributeNS":"removeAttributeNS"](N.xlink,"xlink:"+function(e,o){return "-"===e[o]?e.slice(o+1):e[o].toLowerCase()+e.slice(o+1)}(o,5),""+t);}var p={__proto__:null};function f(e,o,t){o in e&&function(e,o,t){var n=p[e]||(p[e]={__proto__:null});if(!(o in n)){for(var r,l=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor;(t=l(t))&&!(r=a(t,o)););n[o]=r&&r.set;}return n[o]}(e.localName,o,e)?e[o]=t:c(e,o,t);}var d=/[Cc]apture$/;function h(e,o,t,n){d.test(o)?(o=o.slice(2,-7).toLowerCase(),n&&e.removeEventListener(o,n,!0),t&&e.addEventListener(o,t,!0)):(o=o.slice(2).toLowerCase(),n&&e.removeEventListener(o,n),t&&e.addEventListener(o,t));}var k=/^on[A-Za-z][a-z]/,x=/^xlink[A-Z][a-z]/;function H(e,o,t){var n,r={__proto__:null};for(var l in o)"children"!==l&&"ref"!==l&&"key"!==l&&((n=o[l])==n||(n=null),"style"===l?(n=u(n),t[l]!==n&&(e.style.cssText=n)):"className"===l||"class"===l?(l="class",n=i(n),t[l]!==n&&c(e,l,n)):t[l]!==n&&(k.test(l)?h(e,l,n,t[l]):x.test(l)?s(e,l,n):f(e,l,n)),r[l]=n,delete t[l]);for(var a in t)k.test(a)?h(e,a,null,t[a]):x.test(a)?s(e,a,null):f(e,a,null);return r}var m="http://www.w3.org/",N={__proto__:null,svg:m+"2000/svg",math:m+"1998/Math/MathML",xlink:m+"1999/xlink"};function y(e,o){return document.createElementNS(e in N?N[e]:(o&&"foreignObject"!==o.localName?o:document.documentElement).namespaceURI,e)}function g(e){for(;e=e.parent;)if(e.fc===XMLElement||e.fc===Portal)return e.xmlContext}function T(o,t,n){var r=t.node;if(r){for(var l=t.childVNodes,a=l.length;a-- >0&&!(e(l[a].deep,n.deep)<0););var u=l[++a]&&l[a].xmlContext.node;u&&u.parentNode===r||(u=r.childNodes[a]||null),r.insertBefore(o,u),l.splice(a,0,n);}}function C(e){var o=typeof e;return "string"===o?e:"number"===o?e.toString():""}function b(e,o){if(e.hookType!==o)throw new Error("Incorrect hook: "+o.name)}function E(e,t){if(e!==t){if(e&&t&&e.length===t.length){for(var n=e.length;n-- >0;)if(!o(e[n],t[n]))return !1;return !0}return !1}return !0}var M,S=[];function q(o,t){for(var n,r=o.vNode.deep,l=S.length;l-- >0&&!((n=e(S[l].deep,r))<0);)if(0===n)return void S[l][t?"i":"l"].push(o);S.splice(l+1,0,t?{deep:r,i:[o],l:[]}:{deep:r,i:[],l:[o]});}function F(e,o){var t=$(),n=t.prevHook,r=!1,l=n.nextHook;l?(b(l,F),E(l.deps,l.deps=o)&&o||(r=!0)):(r=!0,l=n.nextHook={nextHook:null,hookType:F,vNode:t,value:e,deps:o,cleanup:null}),t.prevHook=l,r&&(l.value=e,q(l,0));}function XMLText(e){var o=null,t=e.xmlContext,n=C(e.jsx);if(e._="text: "+n,t){if((o=t.node)&&t.text!==(t.text=n)){var r=1===o.childNodes.length&&o.childNodes[0];r&&3===r.nodeType?r.data=n:o.textContent=n;}}else if(n){var l=g(e);l&&l.node&&((o=y("font",l.node)).style.verticalAlign="inherit",o.textContent=n,T(o,l,e)),e.xmlContext={node:o,text:n,parentContext:l};}}function XMLElement(e){var o=$(),t=null,n=o.xmlContext,r=e.ref;if(n)(t=n.node)&&(n.attrs=H(t,e,n.attrs));else {var l=o.jsx.type;switch(l){case"html":case"body":case"link":case"meta":case"script":case"style":case"title":throw 'Tag "'+l+'" is not supported yet';default:var a=g(o);a&&a.node&&T(t=y(l,a.node),a,o),o.xmlContext=n={node:t,attrs:t?H(t,e,{}):{},parentContext:a,tempEffectDeps:[r,null],childVNodes:[]};}}var u=n.tempEffectDeps;return !r&&!u[0]||u[0]===r&&u[1]===t||F(function(){if(r&&t)return "function"==typeof r?(r(t),function(){r(null);}):(r.current=t,function(){r.current=null;})},n.tempEffectDeps=[r,t]),e.children}class VNode{constructor(e,o,t,n){if(this._="",this.jsx=o,this.alive=!0,this.dirty=!1,this.children=[],(this.parent=e)?(e.children[n]=this,(this.deep=e.deep.slice()).push(n)):this.deep=[n],t){var r=$();G(this),this.prevHook=this.headHook={nextHook:null},"string"==typeof o.type?(this.fc=XMLElement,this._="elem: "+o.type):(this.fc=o.type,this._="comp: "+this.fc.name),K(this,this.fc(o.props),0),G(r);}else this.fc=XMLText,XMLText(this);}}class JSXNode{constructor(e,o){this.type=e,this.props=o;}}function $(){return M}function G(e){M=e;}function K(e,o,t,n){if(Array.isArray(o))if(n)new VNode(e,new JSXNode(Fragment,{children:o}),1,t);else for(var r=0;r<o.length;++r)K(e,o[r],r,1);else o instanceof JSXNode?new VNode(e,o,1,t):C(o)&&new VNode(e,o,0,t);}function Portal(e){var o=$(),t=e.domNode,n=o.xmlContext;if(n){if(n.node!==t){var r=n.node;if(r.namespaceURI!==t.namespaceURI)throw "Portal: incorrect namespaceURI";n.node=t;for(var l,a=n.childVNodes,u=0;u<a.length;++u){if((l=a[u].xmlContext.node).parentNode!==r)throw "Portal: wrong parent";t.appendChild(l);}}}else o.xmlContext={node:t,childVNodes:[]};return e.children}/*@__NO_SIDE_EFFECTS__*/function xe(e,o,...t){return o||(o={}),t.length&&(o.children=t.length>1?t:t[0]),o.style&&(o.style=u(o.style)),o.className&&(o.className=i(o.className)),new JSXNode(e,o)}var He=0;function me(e,o){return new VNode(null,new JSXNode(Portal,{domNode:o,children:e}),1,++He)}
function Icon({
  children,
  as,
  name,
  ...attrs
}



) {
  const TagName = (as ) || 'i';
  return xe(TagName, { ...attrs, className: ['bi bi-' + name, attrs.className],} )
}function isString(thing) {
  return typeof thing === 'string'
}// export const BREAKPOINTS = {
//   sm: true as boolean,
//   md: true as boolean,
//   lg: true as boolean,
//   xl: true as boolean,
//   xxl: true as boolean,
// }

const BREAKPOINTS = ['sm', 'md', 'lg', 'xl', 'xxl']; 


function getBreakpoint(
  sm,
  md,
  lg,
  xl,
  xxl,
  breakpoint
) {
  return isString(breakpoint)
    ? BREAKPOINTS.includes(breakpoint) && breakpoint
    : breakpoint ||
        (xxl && 'xxl') ||
        (xl && 'xl') ||
        (lg && 'lg') ||
        (md && 'md') ||
        (sm && 'sm')
}

// export const TEXT_COLOR_VARIANTS = [
//   ...VARIANTS,
//   'black',
//   'white',
//   'muted',
//   'reset',
// ] as const
// export type TTextColorVariants = (typeof TEXT_COLOR_VARIANTS)[number]

// export function getTextColorVariant(
//   primary: boolean | undefined,
//   secondary: boolean | undefined,
//   success: boolean | undefined,
//   info: boolean | undefined,
//   warning: boolean | undefined,
//   danger: boolean | undefined,
//   light: boolean | undefined,
//   dark: boolean | undefined,
//   black: boolean | undefined,
//   white: boolean | undefined,
//   muted: boolean | undefined,
//   reset: boolean | undefined,
//   variant: undefined | TTextColorVariants
// ): undefined | TTextColorVariants {
//   return isString(variant)
//     ? TEXT_COLOR_VARIANTS.includes(variant)
//       ? variant
//       : void 0
//     : variant ||
//         (reset && 'reset') ||
//         (muted && 'muted') ||
//         (white && 'white') ||
//         (black && 'black') ||
//         (dark && 'dark') ||
//         (light && 'light') ||
//         (danger && 'danger') ||
//         (warning && 'warning') ||
//         (primary && 'primary') ||
//         (info && 'info') ||
//         (success && 'success') ||
//         (secondary && 'secondary') ||
//         (primary && 'primary') ||
//         void 0
// }
function Container({
  children,
  className,
  as,

  sm,
  md,
  lg,
  xl,
  xxl,
  fluid,

  ...attrs
}








) {
  const TagName = (as ) || 'div';

  fluid = getBreakpoint(sm, md, lg, xl, xxl, fluid);

  return (
    xe(TagName, {
      ...attrs,
      className: [
        'container' + (fluid ? (isString(fluid) ? '-' + fluid : '-fluid') : ''),
        className,
      ],
 children: 
      children
    })
  )
}console.log('heract');

function Test() {
  console.log(12);
  // return (<h1>H1</h1>)
}

function App() {
  return (
    xe(Container, { sm: true, children: [
      xe('div', { className: ['asd', 'zxc'], ariaAutoComplete: 'qwe', 'data-qwe': 12, children: ["work"

        , xe('div', { children: 'sp',})
        , xe(Test, {} )
        , xe(Icon, { name: "arrow-bar-left", className: "aaaa",})
      ]})
      , xe('div', {
      })
    ]})
  )
}

console.log(me(xe(App, {} ), document.body));