
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
/* eslint-disable */
function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function t(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,s=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1;}else for(;!(u=(o=i.call(n)).done)&&(s.push(o.value),s.length!==t);u=!0);}catch(e){l=!0,r=e;}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return s}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o={}.toString.call(t).slice(8,-1);return "Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fragment(e){return e.children}class JSXNode{constructor(e,t,n){var o,r={},i=[];if(t)for(var a=Object.keys(t),s=0,u=a.length;s<u;s++){var l=a[s],c=t[l];switch(l){case"key":o=c;break;case"children":n.length||(n=Array.isArray(c)?c:[c]);break;default:r[l]=c,i.push(l,c);}}n.length&&(r.children=n.length>1?n:n[0]),this.type=e,this.key=o,this.props=r,this._pList=i,this._cList=n,this._pListChanged=null,this._cListChanged=null;}}function n(e,t){for(var n,o=e.length,r=t.length,i=r-o,a=0;a<o&&a<r;a++)if(n=e[a]-t[a]){i=n;break}return i>0?1:i<0?-1:0}function o(e,t,n){if(e.hook!==t||e.idx!==n)throw new Error("Incorrect hook "+t.name)}var r="function"==typeof queueMicrotask?queueMicrotask:"undefined"!=typeof Promise?function(e){return Promise.resolve(null).then(e)}:setTimeout,i=[],a=[],s=[],u=[],l=!1;function c(){var e=i,t=a,n=s,o=u;l=!1,i=[],a=[],s=[],u=[];for(var r=0;r<e.length;r++)B(e[r]);d(t),d(n),document.body.clientWidth,d(o);}function d(e){for(var t,n=Z(),o=0;o<e.length;o++)if((t=e[o]).length){$(t[0].vNode);for(var r,i=0;i<t.length;i++)(r=t[i]).cleanup&&(r.cleanup(),r.cleanup=null);}for(var a,s=0;s<e.length;s++)if((a=e[s]).length){$(a[0].vNode);for(var u,l=0;l<a.length;l++)(u=a[l]).vNode.alive&&(u.cleanup=u.effect());}$(n);}function f(e){if(!e.dirty&&e.alive){e.dirty=!0;for(var t=e.deep,o=i.length;o-- >0&&!(n(i[o].deep,t)<0););i.splice(++o,0,e),l||(l=!0,r(c));}}function h(e,t){var o=e.vNode;if(o.alive){for(var i,a=o.deep,s=t.length;s-- >0&&!((i=n(t[s][0].vNode.deep,a))<0);)0===i&&(t[s].push(e),e=null);e&&t.splice(++s,0,[e]),l||(l=!0,r(c));}}function v(e,t){var n=!1,r=F(),i=r.hookIdx,a=r.hooks,s=a[i]||(n=!0,a[i]={idx:i,hook:v,vNode:r,effect:e,deps:[],cleanup:null});if(o(s,v,i),t)for(var l=Object.is,c=s.deps,d=t.length;d-- >0;)l(c[d],t[d])||(c[d]=t[d],n=!0);else n=!0;n&&(s.effect=e,function(e){h(e,u);}(s));}function p(e,t){var n=!1,r=F(),i=r.hookIdx,a=r.hooks,u=a[i]||(n=!0,a[i]={idx:i,hook:p,vNode:r,effect:e,deps:[],cleanup:null});if(o(u,p,i),t)for(var l=Object.is,c=u.deps,d=t.length;d-- >0;)l(c[d],t[d])||(c[d]=t[d],n=!0);else n=!0;n&&(u.effect=e,function(e){h(e,s);}(u));}function g(e,t){var n=!1,r=F(),i=r.hookIdx,s=r.hooks,u=s[i]||(n=!0,s[i]={idx:i,hook:g,vNode:r,effect:e,deps:[],cleanup:null});if(o(u,g,i),t)for(var l=Object.is,c=u.deps,d=t.length;d-- >0;)l(c[d],t[d])||(c[d]=t[d],n=!0);else n=!0;n&&(u.effect=e,function(e){h(e,a);}(u));}var x="http://www.w3.org/",k={svg:x+"2000/svg",math:x+"1998/Math/MathML",xlink:x+"1999/xlink"};function m(e,t){return document.createElementNS(k.hasOwnProperty(e)?k[e]:(t&&"foreignObject"!==t.localName?t:document.documentElement).namespaceURI,e)}function y(e){var t=typeof e;return "string"===t||"number"===t||"bigint"===t?""+e:""}var b={},N=!0;var L=/([A-Z])/g,j={},w=function(e){return function(){if(N){N=!1;try{var e=/^-[^-]+-/,t=getComputedStyle(document.documentElement);for(var n in t)+n>-1&&(n=t[n],b[n.replace(e,"")]=n);}catch(o){}}}(),(w=function(e){return "-"===e[0]?e:b.hasOwnProperty(e=j.hasOwnProperty(e)?j[e]:j[e]=e.replace(L,"-$1").toLowerCase())?b[e]:e})(e)};function I(e){switch(typeof e){case"string":";"===e[e.length-1]&&(e=e.slice(0,-1));break;case"object":var t=[];if(Array.isArray(e))for(var n,o=0,r=e.length;o<r;o++)(n=I(e[o]))&&t.push(n);else if(e)for(var i in e)_(e[i])&&t.push(w(i)+":"+e[i]);e=t.join(";");break;default:e="";}return e}function A(e){switch(typeof e){case"string":break;case"number":e=""+e;break;case"object":var t=[];if(Array.isArray(e))for(var n,o=0,r=e.length;o<r;o++)(n=A(e[o]))&&t.push(n);else if(e)for(var i in e)e[i]&&t.push(i);e=t.join(" ");break;default:e="";}return e}function C(...e){for(var t,n=[],o=0,r=e.length;o<r;o++)(t=A(e[o]))&&n.push(t);return n.join(" ")}function _(e){return null!=e&&""!==e}function V(e,t,n){e[_(n)?"setAttribute":"removeAttribute"](t,""+n);}function S(e,t,n){e[_(n)?"setAttributeNS":"removeAttributeNS"](k.xlink,"xlink:"+function(e,t){return "-"===e[t]?e.slice(t+1):e[t].toLowerCase()+e.slice(t+1)}(t,5),""+n);}var X={};function M(e,t,n){t in e&&function(e,t,n){var o=X[e]||(X[e]={});if(!o.hasOwnProperty(t)){for(var r,i=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor;(n=i(n))&&!(r=a(n,t)););o[t]=r&&r.set;}return o[t]}(e.localName,t,e)?e[t]=n:V(e,t,n);}var T=/Capture$/;function E(e,t,n,o){n!==o&&(T.test(t)?(t=t.slice(2,-7).toLocaleLowerCase(),o&&e.removeEventListener(t,o,!0),n&&e.addEventListener(t,n,!0)):(t=t.slice(2).toLocaleLowerCase(),o&&e.removeEventListener(t,o),n&&e.addEventListener(t,n)));}var P,J=/^on[A-Z][a-z]/,U=/^xlink[A-Z][a-z]/;function q(e){for(;e=e.parent;)if(e.fc===XMLElement||e.fc===Portal)return e.contextValue}function D(e,t,o){for(var r=t.childNodes,i=t.childDeeps,a=i.length;a-- >0&&!(n(i[a],o)<0););t.node.insertBefore(e,r[++a]||null),r.splice(a,0,e),i.splice(a,0,o);}function R(e,t,n){if(e.parentNode&&e.parentNode.removeChild(e),t){var o=t.childNodes,r=t.childDeeps,i=r.lastIndexOf(n);-1===i||r.splice(i,1),o[i]===e||(i=o.lastIndexOf(e)),-1===i||o.splice(i,1);}}function XMLText(e,t){var n=Z(),o=n.domNode;if(t&&o)R(o,n.contextValue.parentContext,n.deep),n.domNode=o=null;else if(!o&&e){var r=q(n);r&&r.node&&((o=m("font",r.node)).style.verticalAlign="inherit",o.textContent=e,D(o,r,n.deep),n.domNode=o,o=null),n.contextValue={parentContext:r};}if(o){var i=1===o.childNodes.length&&o.childNodes[0];i&&3===i.nodeType?i.data=e:o.textContent=e;}}function XMLElement(e,t){var n=Z(),o=n.domNode;if(t&&o){var r=n.contextValue.parentContext;R(o,r,n.deep),function(e,t){if(t)for(var n in t)J.test(n)&&(E(e,n,null,t[n]),delete t[n]);}(o,n.domNodeAttrs),n.domNode=o=null;}else if(!n.contextValue){var i=n.jsx.type;switch(i){case"html":case"body":case"link":case"meta":case"script":case"style":case"title":throw 'Tag "'+i+'" is not supported yet';default:var a=q(n);a&&a.node&&(D(o=m(i,a.node),a,n.deep),n.domNode=o),n.contextValue={node:o,childNodes:[],childDeeps:[],parentContext:a};}}return o&&(n.domNodeAttrs=function(e,t,n){var o,r={};for(var i in t)"ref"!==i&&"children"!==i&&((o=t[i])==o||(o=null),"style"===i?(o=I(o),n[i]!==o&&V(e,i,o)):"className"===i||"class"===i?(i="class",o=A(o),n[i]!==o&&V(e,i,o)):J.test(i)?E(e,i,o,n[i]):U.test(i)?n[i]!==o&&S(e,i,o):n[i]!==o&&M(e,i,o),r[i]=o,delete n[i]);for(var a in n)J.test(a)?E(e,a,null,n[a]):U.test(a)?S(e,a,null):M(e,a,null);return r}(o,e,n.domNodeAttrs||{})),p(function(){if(o){var t=e.ref;if(t)return "function"==typeof t?(t(o),function(){t(null);}):(t.current=o,function(){t.current=null;})}},[e.ref,o]),e.children}function F(){return P.hookIdx++,P}function Z(){return P}function $(e){P=e;}class VNode{constructor(e,t,n){if(this._name="",this.alive=!0,this.dirty=!1,this.children=[],this.hooks=[],this.parent=e){var o=e.children;void 0===n?((this.deep=e.deep.slice()).push(o.length),o.push(this)):((this.deep=e.deep.slice()).push(n),o[n]=this);}else this.deep=[0];var r=P;P=this,this.hookIdx=-1,t instanceof JSXNode?(this.fc="string"==typeof t.type?XMLElement:t.type,this.jsx=t,z(this,this.fc(t.props))):(this.fc=XMLText,(this.jsx=y(t))&&XMLText(this.jsx)),this._name=this.fc.name,P=r;}}function z(e,t,n){if(n||null!=t)if(Array.isArray(t))if(n)new VNode(e,new JSXNode(Fragment,null,[t]));else for(var o=0;o<t.length&&e.alive;o++)z(e,t[o],!0);else e.alive&&new VNode(e,t);}function B(e){if(e.dirty&&e.alive){e.dirty=!1;var t=P;P=e,e.hookIdx=-1;var n=e.fc(e.jsx.props);P=t,W(e,Array.isArray(n)?n:[n]);}}function G(e,t){var n=e.length===t.length;if(n)for(var o,r,i=Object.is,a=e.length;a-- >0;)if(o=e[a],r=t[a],o instanceof JSXNode){if(!(r instanceof JSXNode)||o.type!==r.type||o.key!==r.key||r._pListChanged||r._cListChanged||null===r._pListChanged&&(r._pListChanged=!G(o._pList,r._pList))||null===r._cListChanged&&(r._cListChanged=!G(o._cList,r._cList))){n=!1;break}}else if(!i(o,r)){n=!1;break}return n}function W(e,t){for(var n=e.children,o=Array.isArray,r=0,i=t.length;r<i;r++){var a=t[r],s=n[r];if(o(a))s&&s.fc===Fragment?W(s,a):(s&&H(s),new VNode(e,new JSXNode(Fragment,null,[a]),r));else if(a instanceof JSXNode)s&&s.jsx instanceof JSXNode&&s.jsx.type===a.type&&s.jsx.key===a.key?(s.fc===XMLElement||a._pListChanged||null===a._pListChanged&&(a._pListChanged=!G(s.jsx._pList,a._pList))||a._cListChanged||null===a._cListChanged&&(a._cListChanged=!G(s.jsx._cList,a._cList)))&&(s.jsx=a,s.dirty=!0,B(s)):(s&&H(s),new VNode(e,a,r));else if(s&&s.fc===XMLText){if(s.jsx!==(s.jsx=y(a))){var u=P;P=s,s.hookIdx=-1,XMLText(s.jsx),P=u;}}else s&&H(s),new VNode(e,a,r);}for(;n.length>r;)H(n.pop());}function H(e){if(e.alive){e.alive=!1,function(e){for(var t=e.children;t.length>0;)H(t.pop());}(e);var t=P;switch(P=e,e.hookIdx=-1,e.fc){case XMLText:XMLText("",!0);break;case XMLElement:XMLElement({},!0);default:for(var n,o=e.hooks,r=0;r<o.length;r++)switch((n=o[r]).hook){case v:case p:case g:n.cleanup&&n.cleanup(),n.cleanup=null;}}P=t;}}function Portal(e){var t=Z(),n=e.domNode;if(t.contextValue){if(t.contextValue.node!==n){if(t.contextValue.node.namespaceURI!==n.namespaceURI)throw new Error("Portal: incorrect namespaceURI");t.contextValue.node=n;for(var o=t.contextValue.childNodes,r=0;r<o.length;r++)n.appendChild(o[r]);}}else t.contextValue={node:n,childNodes:[],childDeeps:[]};return e.children}function Y(e){var t=F(),n=t.hookIdx,r=t.hooks,i=r[n]||(r[n]={idx:n,hook:Y,vNode:t,context:null,value:null,users:null,sub(e){Object.is(i.value,e)||(i.value=e,f(i.vNode));},unsub(){if(i.users){var e=i.users.lastIndexOf(i.sub);-1===e||i.users.splice(e,1),i.users=null;}},deps:[],effect:()=>i.unsub()});if(o(i,Y,n),i.context!==e){i.unsub(),i.value=(i.context=e).defaultValue;for(var a=t;a=a.parent;)if(a.fc===e){i.value=a.contextValue,(i.users=a.contextUsers).push(i.sub);break}}return v(i.effect,i.deps),i.value}function ne(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n);return t>>>0}function oe(){var e=F(),t=e.hookIdx,n=e.hooks,r=n[t]||(n[t]={idx:t,hook:oe,value:"id"+ne(e.deep.join("_")+"__"+t)});return o(r,oe,t),r.value}function ue(e){var t=F(),n=t.hookIdx,r=t.hooks,i=r[n]||(r[n]={idx:n,hook:ue,value:{current:e}});return o(i,ue,n),i.value}function le(e){var t=F(),n=t.hookIdx,r=t.hooks,i=r[n]||(r[n]={idx:n,hook:le,vNode:t,value:"function"==typeof e?e():e,update(e){"function"==typeof e&&(e=e(i.value)),Object.is(i.value,e)||(i.value=e,f(i.vNode));}});return o(i,le,n),[i.value,i.update]}/*@__NO_SIDE_EFFECTS__*/function he(e){var ContextProvider=function(e){var t=Z(),n=e.value,o=t.contextUsers||(t.contextUsers=[]);if(!Object.is(t.contextValue,n)){t.contextValue=n;for(var r=0,i=o.length;r<i;r++)o[r](n);}return e.children};return ContextProvider.Provider=ContextProvider,ContextProvider.defaultValue=e,ContextProvider}
/*@__NO_SIDE_EFFECTS__*/function ve(e,t,...n){return new JSXNode(e,t,n)}function Root(e){var n=t(le(),2),o=n[0],r=n[1];return o||r(new JSXNode(Portal,e,[])),o}function xe(e,t){return new VNode(null,new JSXNode(Root,{domNode:e,children:t},[]))}function isString(thing) {
  return typeof thing === 'function'
}

function isBoolean(thing) {
  return typeof thing === 'boolean'
}function Col({
  children,
  as: TagName = 'div',

  col,
  'col-xs': col_xs,
  'col-sm': col_sm,
  'col-md': col_md,
  'col-lg': col_lg,
  'col-xl': col_xl,
  'col-xxl': col_xxl,

  order,
  'order-xs': order_xs,
  'order-sm': order_sm,
  'order-md': order_md,
  'order-lg': order_lg,
  'order-xl': order_xl,
  'order-xxl': order_xxl,

  offset,
  'offset-xs': offset_xs,
  'offset-sm': offset_sm,
  'offset-md': offset_md,
  'offset-lg': offset_lg,
  'offset-xl': offset_xl,
  'offset-xxl': offset_xxl,

  ...attrs
}) {
  return (
    ve(TagName, {
      ...attrs,
      className: C(
        'col',
        attrs.className,

        col && 'col-' + col,
        col_xs && 'col-xs' + (isBoolean(col_xs) ? '' : '-' + col_xs),
        col_sm && 'col-sm' + (isBoolean(col_sm) ? '' : '-' + col_sm),
        col_md && 'col-md' + (isBoolean(col_md) ? '' : '-' + col_md),
        col_lg && 'col-lg' + (isBoolean(col_lg) ? '' : '-' + col_lg),
        col_xl && 'col-xl' + (isBoolean(col_xl) ? '' : '-' + col_xl),
        col_xxl && 'col-xxl' + (isBoolean(col_xxl) ? '' : '-' + col_xxl),

        order && 'order-' + order,
        order_xs && 'order-xs-' + order_xs,
        order_sm && 'order-sm-' + order_sm,
        order_md && 'order-md-' + order_md,
        order_lg && 'order-lg-' + order_lg,
        order_xl && 'order-xl-' + order_xl,
        order_xxl && 'order-xxl-' + order_xxl,

        offset && 'offset-' + offset,
        offset_xs && 'offset-xs-' + offset_xs,
        offset_sm && 'offset-sm-' + offset_sm,
        offset_md && 'offset-md-' + offset_md,
        offset_lg && 'offset-lg-' + offset_lg,
        offset_xl && 'offset-xl-' + offset_xl,
        offset_xxl && 'offset-xxl-' + offset_xxl
      ),}

      , children
    )
  )
}function Row({
  children,
  as: TagName = 'div',

  cols,
  'cols-xs': cols_xs,
  'cols-sm': cols_sm,
  'cols-md': cols_md,
  'cols-lg': cols_lg,
  'cols-xl': cols_xl,
  'cols-xxl': cols_xxl,

  ...attrs
}) {
  return (
    ve(TagName, {
      ...attrs,
      className: C(
        'row',
        attrs.className,

        cols && 'row-cols-' + cols,
        cols_xs && 'row-cols-xs-' + cols_xs,
        cols_sm && 'row-cols-sm-' + cols_sm,
        cols_md && 'row-cols-md-' + cols_md,
        cols_lg && 'row-cols-lg-' + cols_lg,
        cols_xl && 'row-cols-xl-' + cols_xl,
        cols_xxl && 'row-cols-xxl-' + cols_xxl
      ),}

      , children
    )
  )
}function Navbars() {
  return (
    ve('div', { className: "bs-docs-section clearfix" ,}
      , ve(Row, null
        , ve(Col, { 'col-lg': 12,}
          , ve('div', { className: "page-header",}
            , ve('h1', null, "Navbars")
          )

          , ve('div', { className: "bs-component",}
            , ve('nav', {
              className: "navbar navbar-expand-lg bg-primary"  ,
              'data-bs-theme': "dark",}

              , ve('div', { className: "container-fluid",}
                , ve('a', { className: "navbar-brand", href: "#",}, "Navbar"

                )
                , ve('button', {
                  className: "navbar-toggler",
                  type: "button",
                  'data-bs-toggle': "collapse",
                  'data-bs-target': "#navbarColor01",
                  'aria-controls': "navbarColor01",
                  'aria-expanded': "false",
                  'aria-label': "Toggle navigation" ,}

                  , ve('span', { className: "navbar-toggler-icon",})
                )

                , ve('div', { className: "collapse navbar-collapse" , id: "navbarColor01",}
                  , ve('ul', { className: "navbar-nav me-auto" ,}
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link active" , href: "#",}, "Home"

                        , ve('span', { className: "visually-hidden",}, "(current)")
                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "Features"

                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "Pricing"

                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "About"

                      )
                    )
                    , ve('li', { className: "nav-item dropdown" ,}
                      , ve('a', {
                        className: "nav-link dropdown-toggle" ,
                        'data-bs-toggle': "dropdown",
                        href: "#",
                        role: "button",
                        'aria-haspopup': "true",
                        'aria-expanded': "false",}
, "Dropdown"

                      )
                      , ve('div', { className: "dropdown-menu",}
                        , ve('a', { className: "dropdown-item", href: "#",}, "Action"

                        )
                        , ve('a', { className: "dropdown-item", href: "#",}, "Another action"

                        )
                        , ve('a', { className: "dropdown-item", href: "#",}, "Something else here"

                        )
                        , ve('div', { className: "dropdown-divider",})
                        , ve('a', { className: "dropdown-item", href: "#",}, "Separated link"

                        )
                      )
                    )
                  )
                  , ve('form', { className: "d-flex",}
                    , ve('input', {
                      className: "form-control me-sm-2" ,
                      type: "search",
                      placeholder: "Search",}
                    )
                    , ve('button', {
                      className: "btn btn-secondary my-2 my-sm-0"   ,
                      type: "submit",}
, "Search"

                    )
                  )
                )
              )
            )
          )

          , ve('div', { className: "bs-component",}
            , ve('nav', {
              className: "navbar navbar-expand-lg bg-dark"  ,
              'data-bs-theme': "dark",}

              , ve('div', { className: "container-fluid",}
                , ve('a', { className: "navbar-brand", href: "#",}, "Navbar"

                )
                , ve('button', {
                  className: "navbar-toggler",
                  type: "button",
                  'data-bs-toggle': "collapse",
                  'data-bs-target': "#navbarColor02",
                  'aria-controls': "navbarColor02",
                  'aria-expanded': "false",
                  'aria-label': "Toggle navigation" ,}

                  , ve('span', { className: "navbar-toggler-icon",})
                )

                , ve('div', { className: "collapse navbar-collapse" , id: "navbarColor02",}
                  , ve('ul', { className: "navbar-nav me-auto" ,}
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link active" , href: "#",}, "Home"

                        , ve('span', { className: "visually-hidden",}, "(current)")
                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "Features"

                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "Pricing"

                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "About"

                      )
                    )
                    , ve('li', { className: "nav-item dropdown" ,}
                      , ve('a', {
                        className: "nav-link dropdown-toggle" ,
                        'data-bs-toggle': "dropdown",
                        href: "#",
                        role: "button",
                        'aria-haspopup': "true",
                        'aria-expanded': "false",}
, "Dropdown"

                      )
                      , ve('div', { className: "dropdown-menu",}
                        , ve('a', { className: "dropdown-item", href: "#",}, "Action"

                        )
                        , ve('a', { className: "dropdown-item", href: "#",}, "Another action"

                        )
                        , ve('a', { className: "dropdown-item", href: "#",}, "Something else here"

                        )
                        , ve('div', { className: "dropdown-divider",})
                        , ve('a', { className: "dropdown-item", href: "#",}, "Separated link"

                        )
                      )
                    )
                  )
                  , ve('form', { className: "d-flex",}
                    , ve('input', {
                      className: "form-control me-sm-2" ,
                      type: "search",
                      placeholder: "Search",}
                    )
                    , ve('button', {
                      className: "btn btn-secondary my-2 my-sm-0"   ,
                      type: "submit",}
, "Search"

                    )
                  )
                )
              )
            )
          )

          , ve('div', { className: "bs-component",}
            , ve('nav', {
              className: "navbar navbar-expand-lg bg-light"  ,
              'data-bs-theme': "light",}

              , ve('div', { className: "container-fluid",}
                , ve('a', { className: "navbar-brand", href: "#",}, "Navbar"

                )
                , ve('button', {
                  className: "navbar-toggler",
                  type: "button",
                  'data-bs-toggle': "collapse",
                  'data-bs-target': "#navbarColor03",
                  'aria-controls': "navbarColor03",
                  'aria-expanded': "false",
                  'aria-label': "Toggle navigation" ,}

                  , ve('span', { className: "navbar-toggler-icon",})
                )

                , ve('div', { className: "collapse navbar-collapse" , id: "navbarColor03",}
                  , ve('ul', { className: "navbar-nav me-auto" ,}
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link active" , href: "#",}, "Home"

                        , ve('span', { className: "visually-hidden",}, "(current)")
                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "Features"

                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "Pricing"

                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "About"

                      )
                    )
                    , ve('li', { className: "nav-item dropdown" ,}
                      , ve('a', {
                        className: "nav-link dropdown-toggle" ,
                        'data-bs-toggle': "dropdown",
                        href: "#",
                        role: "button",
                        'aria-haspopup': "true",
                        'aria-expanded': "false",}
, "Dropdown"

                      )
                      , ve('div', { className: "dropdown-menu",}
                        , ve('a', { className: "dropdown-item", href: "#",}, "Action"

                        )
                        , ve('a', { className: "dropdown-item", href: "#",}, "Another action"

                        )
                        , ve('a', { className: "dropdown-item", href: "#",}, "Something else here"

                        )
                        , ve('div', { className: "dropdown-divider",})
                        , ve('a', { className: "dropdown-item", href: "#",}, "Separated link"

                        )
                      )
                    )
                  )
                  , ve('form', { className: "d-flex",}
                    , ve('input', {
                      className: "form-control me-sm-2" ,
                      type: "search",
                      placeholder: "Search",}
                    )
                    , ve('button', {
                      className: "btn btn-secondary my-2 my-sm-0"   ,
                      type: "submit",}
, "Search"

                    )
                  )
                )
              )
            )
          )

          , ve('div', { className: "bs-component",}
            , ve('nav', { className: "navbar navbar-expand-lg bg-body-tertiary"  ,}
              , ve('div', { className: "container-fluid",}
                , ve('a', { className: "navbar-brand", href: "#",}, "Navbar"

                )
                , ve('button', {
                  className: "navbar-toggler",
                  type: "button",
                  'data-bs-toggle': "collapse",
                  'data-bs-target': "#navbarColor04",
                  'aria-controls': "navbarColor04",
                  'aria-expanded': "false",
                  'aria-label': "Toggle navigation" ,}

                  , ve('span', { className: "navbar-toggler-icon",})
                )

                , ve('div', { className: "collapse navbar-collapse" , id: "navbarColor04",}
                  , ve('ul', { className: "navbar-nav me-auto" ,}
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link active" , href: "#",}, "Home"

                        , ve('span', { className: "visually-hidden",}, "(current)")
                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "Features"

                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "Pricing"

                      )
                    )
                    , ve('li', { className: "nav-item",}
                      , ve('a', { className: "nav-link", href: "#",}, "About"

                      )
                    )
                    , ve('li', { className: "nav-item dropdown" ,}
                      , ve('a', {
                        className: "nav-link dropdown-toggle" ,
                        'data-bs-toggle': "dropdown",
                        href: "#",
                        role: "button",
                        'aria-haspopup': "true",
                        'aria-expanded': "false",}
, "Dropdown"

                      )
                      , ve('div', { className: "dropdown-menu",}
                        , ve('a', { className: "dropdown-item", href: "#",}, "Action"

                        )
                        , ve('a', { className: "dropdown-item", href: "#",}, "Another action"

                        )
                        , ve('a', { className: "dropdown-item", href: "#",}, "Something else here"

                        )
                        , ve('div', { className: "dropdown-divider",})
                        , ve('a', { className: "dropdown-item", href: "#",}, "Separated link"

                        )
                      )
                    )
                  )
                  , ve('form', { className: "d-flex",}
                    , ve('input', {
                      className: "form-control me-sm-2" ,
                      type: "search",
                      placeholder: "Search",}
                    )
                    , ve('button', {
                      className: "btn btn-secondary my-2 my-sm-0"   ,
                      type: "submit",}
, "Search"

                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
}function Bootstrap() {
  return (
    ve('div', { className: "container",}
      , ve(Navbars, null )
      /* <Buttons />
      <Typography />
      <Tables />
      <Forms />
      <Navs />
      <Indicators />
      <Progress />
      <Containers />
      <Dialogs /> */
    )
  )
}console.log('barely-react');

const test = () => import('./Header-775994f7.js');
const test2 = () => import('./Container-f5f476a5.js')
;(async () => {
  console.log(await test());
  console.log(await test2());
})();

function App() {
  return ve(Bootstrap, null )
}

console.log(xe(document.body, ve(App, null )));export{C,Y,v as a,test2 as b,he as h,isString as i,le as l,oe as o,test as t,ue as u,ve as v};