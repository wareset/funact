/* eslint-disable */
function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function t(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,u,l=[],i=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1;}else for(;!(i=(o=a.call(n)).done)&&(l.push(o.value),l.length!==t);i=!0);}catch(e){c=!0,r=e;}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw r}}return l}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o={}.toString.call(t).slice(8,-1);return "Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fragment(e){return e.children}var n=["key"];class JSXNode{constructor(e,t,o){var r=t||{},a=r.key,u=function(e,t){if(null==e)return {};var n,o,r=function(e,t){if(null==e)return {};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(-1!==t.indexOf(o))continue;n[o]=e[o];}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);}return r}(r,n);o.length&&(u.children=o.length>1?o:o[0]),this.type=e,this.key=a,this.props=u;}}function o(e,t){for(var n,o=e.length,r=t.length,a=r-o,u=0;u<o&&u<r;++u)if(n=e[u]-t[u]){a=n;break}return a>0?1:a<0?-1:0}function r(e,t,n){if(e.hookType!==t||e.hookIdx!==n)throw new Error("Incorrect hook: "+t.name)}function a(e,t){if(e!==t){if(e&&t&&e.length===t.length){for(var n=Object.is,o=e.length;o-- >0;)if(!n(e[o],t[o]))return !1;return !0}return !1}return !0}var u="http://www.w3.org/",l={__proto__:null,svg:u+"2000/svg",math:u+"1998/Math/MathML",xlink:u+"1999/xlink"};function i(e,t){return document.createElementNS(e in l?l[e]:(t&&"foreignObject"!==t.localName?t:document.documentElement).namespaceURI,e)}function c(e){for(;e=e.parent;)if(e.fc===XMLElement||e.fc===Portal)return e.contextValue}function s(e,t,n){for(var r=t.childNodes,a=t.childDeeps,u=a.length;u-- >0&&!(o(a[u],n)<0););t.node.insertBefore(e,r[++u]||null),r.splice(u,0,e),a.splice(u,0,n);}function d(e,t,n){e.parentNode&&e.parentNode.removeChild(e);var o=t.childNodes,r=t.childDeeps,a=r.lastIndexOf(n);-1===a||r.splice(a,1),o[a]===e||(a=o.lastIndexOf(e)),-1===a||o.splice(a,1);}function f(e){var t=typeof e;return "string"===t||"number"===t||"bigint"===t?""+e:""}var v={__proto__:null},h=!0;var p=/([A-Z])/g,x={__proto__:null},k=function(e){return function(){if(h){h=!1;try{var e=/^-[^-]+-/,t=getComputedStyle(document.documentElement);for(var n in t)+n>-1&&(n=t[n],v[n.replace(e,"")]=n);}catch(o){}}}(),(k=function(e){return "-"===e[0]?e:(e=e in x?x[e]:x[e]=e.replace(p,"-$1").toLowerCase())in v?v[e]:e})(e)};function y(e){switch(typeof e){case"string":return ";"===e[e.length-1]?e.slice(0,-1):e;case"object":var t=[];if(Array.isArray(e))for(var n,o=0,r=e.length;o<r;++o)(n=y(e[o]))&&t.push(n);else if(e)for(var a in e)g(e[a])&&t.push(k(a)+":"+e[a]);return t.join(";")}return ""}function m(e){switch(typeof e){case"string":return e;case"number":return ""+e;case"object":var t=[];if(Array.isArray(e))for(var n,o=0,r=e.length;o<r;++o)(n=m(e[o]))&&t.push(n);else if(e)for(var a in e)e[a]&&t.push(a);return t.join(" ")}return ""}function g(e){return null!=e&&""!==e}function N(e,t,n){e[g(n)?"setAttribute":"removeAttribute"](t,""+n);}function b(e,t,n){e[g(n)?"setAttributeNS":"removeAttributeNS"](l.xlink,"xlink:"+function(e,t){return "-"===e[t]?e.slice(t+1):e[t].toLowerCase()+e.slice(t+1)}(t,5),""+n);}var I={};function T(e,t,n){t in e&&function(e,t,n){var o=I[e]||(I[e]={});if(!o.hasOwnProperty(t)){for(var r,a=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor;(n=a(n))&&!(r=u(n,t)););o[t]=r&&r.set;}return o[t]}(e.localName,t,e)?e[t]=n:N(e,t,n);}var j=/Capture$/;function w(e,t,n,o){n!==o&&(j.test(t)?(t=t.slice(2,-7).toLocaleLowerCase(),o&&e.removeEventListener(t,o,!0),n&&e.addEventListener(t,n,!0)):(t=t.slice(2).toLocaleLowerCase(),o&&e.removeEventListener(t,o),n&&e.addEventListener(t,n)));}var V=/^on[A-Z][a-z]/,O=/^xlink[A-Z][a-z]/;function A(e,t,n){var o,r={};for(var a in t)"ref"!==a&&"children"!==a&&((o=t[a])==o||(o=null),"style"===a?(o=y(o),n[a]!==o&&N(e,a,o)):"className"===a||"class"===a?(a="class",o=m(o),n[a]!==o&&N(e,a,o)):V.test(a)?w(e,a,o,n[a]):O.test(a)?n[a]!==o&&b(e,a,o):n[a]!==o&&T(e,a,o),r[a]=o,delete n[a]);for(var u in n)V.test(u)?w(e,u,null,n[u]):O.test(u)?b(e,u,null):T(e,u,null);return r}var S,L="function"==typeof queueMicrotask?queueMicrotask:"undefined"!=typeof Promise?function(e){return Promise.resolve(null).then(e)}:setTimeout,E=[],X=[],M=[],_=[],C=!1;function P(){var e=E,t=X,n=M,o=_;C=!1,E=[],X=[],M=[],_=[];for(var r=0;r<e.length;++r)$(e[r]);U(t),U(n),document.body.clientWidth,U(o);}function U(e){for(var t,n=R(),o=0;o<e.length;++o)if((t=e[o]).length){F(t[0].vNode);for(var r,a=0;a<t.length;++a)(r=t[a]).cleanup&&(r.cleanup(),r.cleanup=null);}for(var u,l=0;l<e.length;++l)if((u=e[l]).length){F(u[0].vNode);for(var i,c=0;c<u.length;++c)(i=u[c]).vNode.alive&&(i.cleanup=i.value());}F(n);}function D(e){if(!e.dirty&&e.alive){e.dirty=!0;for(var t=e.deep,n=E.length;n-- >0&&!(o(E[n].deep,t)<0););E.splice(n+1,0,e),C||(C=!0,L(P));}}function J(e,t){var n=e.vNode;if(n.alive){for(var r,a=n.deep,u=t.length;u-- >0&&!((r=o(t[u][0].vNode.deep,a))<0);)if(0===r)return void t[u].push(e);t.splice(u+1,0,[e]),C||(C=!0,L(P));}}function q(e,t){var n=!1,o=R(),u=++o.hookIdx,l=o.hooks,i=l[u]||(n=!0,l[u]={hookIdx:u,hookType:q,vNode:o,value:e,deps:null});r(i,q,u),a(i.deps,i.deps=t)||!t||(n=!0),n&&(i.value=e,J(i,M));}function XMLText(e,t){var n=R(),o=null;if(t){var r=n.contextValue;if(r&&(o=r.node))d(o,r.parentContext,n.deep);}else if(n.contextValue){if(o=n.contextValue.node){var a=1===o.childNodes.length&&o.childNodes[0];a&&3===a.nodeType?a.data=e:o.textContent=e;}}else {var u=c(n);u&&u.node&&((o=i("font",u.node)).style.verticalAlign="inherit",o.textContent=e,s(o,u,n.deep)),n.contextValue={node:o,parentContext:u};}}function XMLElement(e,t){var n=R(),o=null;if(t){var r=n.contextValue;if(r&&(o=r.node)){var a=r.parentContext;d(o,a,n.deep),function(e,t){if(t)for(var n in t)V.test(n)&&(w(e,n,null,t[n]),delete t[n]);}(o,r.nodeAttrs);}}else if(n.contextValue){if(o=n.contextValue.node){var u=n.contextValue;u.nodeAttrs=A(o,e,u.nodeAttrs);}}else {var l=n.jsx.type;switch(l){case"html":case"body":case"link":case"meta":case"script":case"style":case"title":throw 'Tag "'+l+'" is not supported yet';default:var f=c(n);f&&f.node&&s(o=i(l,f.node),f,n.deep),n.contextValue={tempEffectDeps:[e.ref,null],nodeAttrs:o?A(o,e,{}):null,node:o,childNodes:[],childDeeps:[],parentContext:f};}}var v=n.contextValue.tempEffectDeps;return v[0]===e.ref&&v[1]===o||(n.contextValue.tempEffectDeps=v=[e.ref,o],q(function(){if(o){var t=e.ref;if(t)return "function"==typeof t?(t(o),function(){t(null);}):(t.current=o,function(){t.current=null;})}},v)),e.children}class VNode{constructor(e,t,n){if(this._="",this.alive=!0,this.dirty=!1,this.children=[],this.parent=e,e){var o=e.children;this.deep=e.deep.slice(),void 0===n?(this.deep.push(o.length),o.push(this)):(this.deep.push(n),o[n]=this);}else this.deep=[0];var r=R();F(this),this.hookIdx=-1,this.hooks=[],t instanceof JSXNode?("string"!=typeof t.type?(this.fc=t.type,this._="comp: "+this.fc.name):(this.fc=XMLElement,this._="node: "+t.type),this.jsx=t,Z(this,this.fc(t.props))):(this.fc=XMLText,this._="text: "+t,(this.jsx=f(t))&&XMLText(t)),F(r);}}function R(){return S}function F(e){S=e;}function Z(e,t,n){if(n||null!=t)if(Array.isArray(t))if(n)new VNode(e,new JSXNode(Fragment,null,[t]));else for(var o=0;o<t.length&&e.alive;++o)Z(e,t[o],!0);else e.alive&&new VNode(e,t);}function $(e){if(e.dirty&&e.alive){e.dirty=!1;var t=R();F(e),e.hookIdx=-1;var n=e.fc(e.jsx.props);F(t),z(e,Array.isArray(n)?n:[n]);}}function z(e,t){for(var n=e.children,o=Array.isArray,r=Object.is,a=0,u=t.length;a<u;++a){var l=t[a],i=n[a];if(o(l))i&&i.fc===Fragment?z(i,l):(B(i),new VNode(e,new JSXNode(Fragment,null,[l]),a));else if(l instanceof JSXNode)i&&i.jsx instanceof JSXNode&&r(i.jsx.type,l.type)&&r(i.jsx.key,l.key)?i.fc.compare&&i.fc.compare(i.jsx,l)||(i.jsx=l,i.dirty=!0,$(i)):(B(i),new VNode(e,l,a));else if(i&&i.fc===XMLText){if(i.jsx!==(i.jsx=f(l))){var c=R();F(i),i.hookIdx=-1,XMLText(i.jsx),F(c);}}else B(i),new VNode(e,l,a);}for(;n.length>a;)B(n.pop());}function B(e){if(e&&e.alive){e.alive=!1;for(var t=e.children;t.length>0;)B(t.pop());var n=R();switch(F(e),e.hookIdx=-1,e.fc){case XMLText:XMLText("",!0);break;case XMLElement:XMLElement({},!0);default:for(var o,r=e.hooks,a=0;a<r.length;++a)(o=r[a]).cleanup&&o.cleanup(),o.cleanup=null;}F(n);}}function Portal(e){var t=R(),n=e.domNode;if(t.contextValue){if(t.contextValue.node!==n){if(t.contextValue.node.namespaceURI!==n.namespaceURI)throw new Error("Portal: incorrect namespaceURI");t.contextValue.node=n;for(var o=t.contextValue.childNodes,r=0;r<o.length;++r)n.appendChild(o[r]);}}else t.contextValue={node:n,childNodes:[],childDeeps:[]};return e.children}function H(e){var t=R(),n=++t.hookIdx,o=t.hooks,a=o[n]||(o[n]={hookIdx:n,hookType:H,vNode:t,value:null,context:null,users:null,cleanup(){if(a.users){var e=a.users.lastIndexOf(a);-1===e||a.users.splice(e,1),a.users=null;}}});if(r(a,H,n),a.context!==e&&a.cleanup){a.cleanup(),a.value=(a.context=e).defaultValue;for(var u=t;u=u.parent;)if(u.fc===e){a.value=u.contextValue,(a.users=u.contextUsers).push(a);break}}return a.value}function Y(e,t){var n=!1,o=R(),u=++o.hookIdx,l=o.hooks,i=l[u]||(n=!0,l[u]={hookIdx:u,hookType:Y,vNode:o,value:e,deps:null});r(i,Y,u),a(i.deps,i.deps=t)||!t||(n=!0),n&&(i.value=e,J(i,_));}function ee(e){for(var t=0,n=0;n<e.length;++n)t=(t<<5)-t+e.charCodeAt(n);return t>>>0}function te(){var e=R(),t=++e.hookIdx,n=e.hooks,o=n[t]||(n[t]={hookIdx:t,hookType:te,vNode:e,value:"id"+ee(e.deep.join("_")+"__"+t)});return r(o,te,t),o.value}function ue(e,t,n){var o=R(),a=++o.hookIdx,u=o.hooks,l=u[a]||(u[a]={hookIdx:a,hookType:ue,vNode:o,value:n?n(t):t,reducer:e,dispatch(...e){e=l.reducer(l.value,...e),Object.is(l.value,e)||(l.value=e,D(l.vNode));}});return r(l,ue,a),l.reducer=e,[l.value,l.dispatch]}function le(e){var t=R(),n=++t.hookIdx,o=t.hooks,a=o[n]||(o[n]={hookIdx:n,hookType:le,vNode:t,value:{current:e}});return r(a,le,n),a.value}function ie(e){var t=R(),n=++t.hookIdx,o=t.hooks,a=o[n]||(o[n]={hookIdx:n,hookType:ie,vNode:t,value:"function"==typeof e?e():e,update(e){"function"==typeof e&&(e=e(a.value)),Object.is(a.value,e)||(a.value=e,D(a.vNode));}});return r(a,ie,n),[a.value,a.update]}/*@__NO_SIDE_EFFECTS__*/function fe(e){var ContextProvider=function(e){var t=R(),n=e.value,o=t.contextUsers||(t.contextUsers=[]);if(!Object.is(t.contextValue,n)){t.contextValue=n;for(var r=0,a=o.length;r<a;++r)o[r].value=n,D(o[r].vNode);}return e.children};return ContextProvider.Provider=ContextProvider,ContextProvider.defaultValue=e,ContextProvider}/*@__NO_SIDE_EFFECTS__*/function xe(e,t,...n){return new JSXNode(e,t,n)}function Root(e){var n=t(ie(),2),o=n[0],r=n[1];return o||r(new JSXNode(Portal,e,[])),o}function ke(e,t){return new VNode(null,new JSXNode(Root,{domNode:e,children:t},[]))}
function isString(thing) {
  return typeof thing === 'function'
}function Container({
  children,
  as: TagName = 'div',
  fluid,
  ...attrs
}) {
  return (
    xe(TagName, {
      ...attrs,
      className: m([
        'container' + (fluid ? (isString(fluid) ? '-' + fluid : '-fluid') : ''),
        attrs.className
      ]),}

      , children
    )
  )
}const CollapseGroupContext = fe(null);




function CollapseGroup({
  children,
  alwaysOpen = false,
}) {
  const context = le(null);
  if (!context.current) {
    context.current = { alwaysOpen, collapses: [] };
  } else if (context.current.alwaysOpen !== alwaysOpen) {
    context.current.alwaysOpen = alwaysOpen;
    if (!alwaysOpen) {
      let isShowed = false;
      for (let a = context.current.collapses, i = 0; i < a.length; i++) {
        if (a[i].show) {
          if (!isShowed) isShowed = true;
          else a[i].setShow(false);
        }
      }
    }
  }

  return (
    xe(CollapseGroupContext, { value: context.current,}
      , children
    )
  )
}










const CollapseContext = fe(null );





function Collapse({ children, group, expanded = false }) {
  const id = te();
  const [show, setShow] = ie(expanded);
  const context = le(null);
  if (!context.current) {
    context.current = { id, show, setShow, timeoutId: null };
  }

  const collapseGroup = H(CollapseGroupContext);
  Y(() => {
    if (group && collapseGroup) {
      const item = context.current;
      const collapses = collapseGroup.collapses;
      // if (show && !collapseGroup.alwaysOpen) {
      //   for (let i = collapses.length; i-- > 0; )
      //     if (collapses[i].show) collapses[i].setShow(false)
      // }
      collapses.push(item);
      return () => {
        const idx = collapses.indexOf(item);
        idx < 0 || collapses.splice(idx, 1);
      }
    }
  }, [collapseGroup]);

  Y(() => {
    const item = context.current;
    item.show = show;

    if (item.timeoutId !== null) {
      clearTimeout(item.timeoutId), (item.timeoutId = null);
    }

    if (item.nodeTriggerRef) {
      const node = item.nodeTriggerRef.current;
      if (node) {
        node.classList[show ? 'remove' : 'add']('collapsed');
        node.setAttribute('aria-expanded', show ? 'true' : 'false');
      }
    }

    if (item.nodeContentRef) {
      const node = item.nodeContentRef.current;
      if (node) {
        let complete;
        const style = node.style,
          classList = node.classList;

        if (!show) {
          style.height = `${node.scrollHeight}px`;
          node.clientHeight; // reflow
          classList.remove('collapse', 'show'), classList.add('collapsing');
          complete = () => {
            item.timeoutId = null;
            if (!item.show) {
              classList.remove('collapsing'), classList.add('collapse');
            }
          };
          style.height = '';
        } else {
          style.height = '0';
          node.clientHeight; // reflow
          classList.remove('collapse'), classList.add('collapsing');
          complete = () => {
            item.timeoutId = null;
            if (item.show) {
              classList.remove('collapsing'), classList.add('collapse', 'show');
              style.height = '';
            }
          };
          style.height = `${node.scrollHeight}px`;

          if (group && collapseGroup && !collapseGroup.alwaysOpen) {
            const collapses = collapseGroup.collapses;
            for (let i = collapses.length; i-- > 0; ) {
              if (collapses[i] !== item && collapses[i].show)
                collapses[i].setShow(false);
            }
          }
        }
        if (item.isDelay) {
          item.timeoutId = setTimeout(complete, 500); 
        } else {
          item.isDelay = true;
          complete();
        }
      }
    }
  }, [show]);

  return xe(CollapseContext, { value: context.current,}, children)
}





function CollapseTrigger({ children, ...attrs }) {
  const item = H(CollapseContext);
  const nodeTriggerRef = (item.nodeTriggerRef =
    le(null));
  const itemId = item.id;

  const clickRef = le(null);
  if (!clickRef.current) {
    clickRef.current = () => {
      item.setShow(!item.show);
    };
  }

  return (
    xe('button', {
      ...attrs,
      id: 'heading-' + itemId,
      type: "button",
      ref: nodeTriggerRef,
      onClick: clickRef.current,
      'aria-expanded': item.show,
      'aria-controls': 'collapse-' + itemId,}

      , children
    )
  )
}





function CollapseContent({ children, ...attrs }) {
  const item = H(CollapseContext);
  const nodeContentRef = le(null);
  const itemId = item.id;

  item.nodeContentRef = nodeContentRef;

  return (
    xe('div', {
      ...attrs,
      ref: nodeContentRef,
      id: 'collapse-' + itemId,
      'aria-labelledby': 'heading-' + itemId,}

      , children
    )
  )
}function Navbar({
  children,
  as: TagName = 'nav',
  expand,
  theme,
  bg,
  ...attrs
}) {
  return (
    xe(TagName, {
      ...attrs,
      'data-bs-theme': theme,
      className: m([
        'navbar',
        attrs.className,
        expand && 'navbar-expand-' + expand,
        theme && 'navbar-' + theme,
        bg && 'bg-' + bg,
      ]),}

      , xe(Collapse, null, children)
    )
  )
}






function NavbarBrand({
  children,
  as: TagName = 'span',
  ...attrs
}) {
  if (attrs.href) TagName = 'a';
  return (
    xe(TagName, {
      ...attrs,
      className: m(['navbar-brand', attrs.className]),}

      , children
    )
  )
}





function NavbarToggler(attrs) {
  return (
    xe(CollapseTrigger, {
      ...attrs,
      className: m(['navbar-toggler', attrs.className]),}

      , xe('span', { className: "navbar-toggler-icon",})
    )
  )
}





function NavbarCollapse({ children, ...attrs }) {
  return (
    xe(CollapseContent, {
      ...attrs,
      className: m(['navbar-collapse', attrs.className]),}

      , children
    )
  )
}






function NavbarNav({
  children,
  as: TagName = 'ul',
  scroll,
  ...attrs
}) {
  return (
    xe(TagName, {
      ...attrs,
      className: m([
        'navbar-nav',
        attrs.className,
        scroll && 'navbar-nav-scroll',
      ]),}

      , children
    )
  )
}function NavLink({
  children,
  as: TagName = 'span',
  dropdown,
  active,
  disabled,
  ...attrs
}) {
  if (attrs.href) TagName = 'a';
  return (
    xe(TagName, {
      'aria-current': active ? true : void 0,
      'aria-disabled': disabled ? true : void 0,
      ...attrs,
      className: m([
        'nav-link',
        attrs.className,
        dropdown && 'dropdown-toggle',
        active && 'active',
        disabled && 'disabled',
      ]),}

      , children
    )
  )
}function Icon({
  children,
  as: TagName = 'i',
  name,
  ...attrs
}) {
  return (
    xe(TagName, {
      ...attrs,
      className: m(['bi bi-' + name, attrs.className]),}
    )
  )
}function Header() {
  return (
    xe(Navbar, { as: "header", expand: "sm", theme: "dark", bg: "dark",}
      , xe(Container, { fluid: true,}
        , xe(NavbarBrand, null, "Barely-react")
        , xe(NavbarToggler, null )
        , xe(NavbarCollapse, null
          , xe(NavbarNav, { as: "nav",}
            , xe(NavLink, null, "TODO")
            , xe(NavLink, null, "TODO")
          )
          , xe('hr', { className: "text-white d-sm-none" ,} )
          , xe(NavbarNav, { as: "nav", className: "ms-sm-auto",}
            , xe(NavLink, {
              href: "https://github.com/wareset/barely-react",
              target: "_blank",
              rel: "noopener",}

              , xe(Icon, { name: "github",} )
              , xe('small', { className: "d-sm-none ms-2" ,}, "Github")
            )
          )
        )
      )
    )
  )
}function Accordion({
  children,
  flush,
  alwaysOpen,
  ...attrs
}) {
  return (
    xe('div', {
      ...attrs,
      className: m([
        'accordion',
        attrs.className,
        flush && 'accordion-flush',
      ]),}

      , xe(CollapseGroup, { alwaysOpen: alwaysOpen,}, children)
    )
  )
}






function AccordionItem({
  children,
  expanded,
  ...attrs
}) {
  return (
    xe('div', {
      ...attrs,
      className: m(['accordion-item', attrs.className]),}

      , xe(Collapse, { group: true, expanded: expanded,}
        , children
      )
    )
  )
}






function AccordionHeader({
  children,
  as: TagName = 'h2',
  ...attrs
}) {
  return (
    xe(TagName, { className: "accordion-header",}
      , xe(CollapseTrigger, {
        ...attrs,
        className: m(['accordion-button', attrs.className]),}

        , children
      )
    )
  )
}





function AccordionBody({ children, ...attrs }) {
  return (
    xe(CollapseContent, { className: "accordion-collapse",}
      , xe('div', {
        ...attrs,
        className: m(['accordion-body', attrs.className]),}

        , children
      )
    )
  )
}function AccordionItemWrapper({
  expanded,
  title,
  children,
}



) {
  return (
    xe(AccordionItem, { expanded: expanded,}
      , xe(AccordionHeader, null, title)
      , xe(AccordionBody, null, children)
    )
  )
}const list = `
- Components:
  - Fragment
  - Portal (используется вместо \`createPortal\` из \`react-dom\`)
- Hooks:
  - useActionState
  - useCallback
  - useContext
  - useDebugValue (просто выводит что-то в консоль)
  - useDeferredValue
  - useEffect
  - useId
  - useImperativeHandle
  - useInsertionEffect
  - useLayoutEffect
  - useMemo
  - useOptimistic
  - useReducer
  - useRef
  - useState
  - useSyncExternalStore (без параметра \`getServerSnapshot\`)
  - useTransition
- APIs:
  - createElement
  - render (используется вместо \`createRoot\` из \`react-dom\`)
  - cache
  - createContext (пока без \`Consumer\`)
  - memo
  - use (пока поддерживает только \`contexts\`)
- А так же:
  - classnames (приводит классы к строке)
  - stylesheet (приводит стили к строке)
`;

function Description() {
  return (
    xe('div', null
      , xe('h1', null, "Barely-react")
      , xe('p', null, "В данный момент демо, как и сама библиотека, еще не готовы. Но ниже есть примеры работы хуков для демонстрации того, что библиотека действительно работает."



      )
      , xe('h5', null, "Список того что уже готово:"    )
      , xe('pre', null, list)
      , xe('p', null, "Ссылка на github:"

        , xe('br', null )
        , xe('a', { href: "https://github.com/wareset/barely-react", target: "_blank",}, "https://github.com/wareset/barely-react"

        )
      )
      , xe('p', null, "Ссылки на исходники текущей страницы:"

        , xe('br', null )
        , xe('a', {
          href: "https://github.com/wareset/barely-react/blob/main/demo/src/routes/test/page.tsx",
          target: "_blank",}
, "https://github.com/wareset/barely-react/blob/main/demo/src/routes/test/page.tsx"

        )
        , xe('br', null ), "и"

        , xe('br', null )
        , xe('a', {
          href: "https://github.com/wareset/barely-react/blob/main/demo/src/app/index.tsx",
          target: "_blank",}
, "https://github.com/wareset/barely-react/blob/main/demo/src/app/index.tsx"

        )
      )
    )
  )
}function Button({
  children,
  as: TagName = 'button',
  variant,
  outline,
  size,
  active,
  disabled,
  ...attrs
}) {
  if (attrs.href) TagName = 'a';
  return (
    xe(TagName, {
      type: TagName === 'button' ? TagName : void 0,
      role: TagName !== 'button' ? 'button' : void 0,
      'aria-pressed': active ? true : void 0,
      'aria-disabled': disabled ? true : void 0,
      ...attrs,
      className: m([
        'btn',
        attrs.className,
        variant &&
          'btn-' + (outline && variant !== 'link' ? '-outline' : '') + variant,
        size && 'btn-' + size,
        active && 'active',
        disabled && 'disabled'
      ]),
      disabled: disabled ? true : void 0,}

      , children
    )
  )
}const code$1 = `import { useState, useRef } from 'barely-react'
import { Button } from '@/ui/bs/Button'

export default function HookUseState() {
  const [count, setCount] = useState(0)
  const countFuncsRef = useRef<any>(null)

  /**
   * Функции сохранены в реф, чтобы при обновлении
   * каждый раз не пересоздаваться
   */
  if (!countFuncsRef.current) {
    countFuncsRef.current = {
      increment: () => {
        setCount((count) => count + 1)
      },
      decrement: () => {
        setCount((count) => count - 1)
      },
    }
  }

  const { increment, decrement } = countFuncsRef.current

  return (
    <>
      <p>Код:</p>
      <small>
        <pre>
          <code className='language-tsx'>{code}</code>
        </pre>
      </small>
      <p className='pt-3'>Результат:</p>
      <div>Count: {count}</div>
      <hr />
      <Button onClick={decrement} variant={'danger'}>
        decrement
      </Button>{' '}
      <Button onClick={increment} variant={'primary'}>
        increment
      </Button>
    </>
  )
}

`;

function HookUseState() {
  const [count, setCount] = ie(0);
  const countFuncsRef = le(null);

  /**
   * Функции сохранены в реф, чтобы при обновлении
   * каждый раз не пересоздаваться
   */
  if (!countFuncsRef.current) {
    countFuncsRef.current = {
      increment: () => {
        setCount((count) => count + 1);
      },
      decrement: () => {
        setCount((count) => count - 1);
      },
    };
  }

  const { increment, decrement } = countFuncsRef.current;

  return (
    xe(Fragment, null
      , xe('p', null, "Код:")
      , xe('small', null
        , xe('pre', null
          , xe('code', { className: "language-tsx",}, code$1)
        )
      )
      , xe('p', { className: "pt-3",}, "Результат:")
      , xe('div', null, "Count: " , count)
      , xe('hr', null )
      , xe(Button, { onClick: decrement, variant: 'danger',}, "decrement"

      ), ' '
      , xe(Button, { onClick: increment, variant: 'primary',}, "increment"

      )
    )
  )
}const code = `import { useReducer, useRef } from 'barely-react'

import { Button } from '@/ui/bs/Button'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    case 'DECREMENT': {
      return state - 1
    }
    case 'RESET': {
      return 0
    }
  }
  throw Error('Unknown action: ' + action.type)
}

export default function HookUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0)
  const countFuncsRef = useRef<any>(null)

  /**
   * Функции сохранены в реф, чтобы при обновлении
   * каждый раз не пересоздаваться
   */
  if (!countFuncsRef.current) {
    countFuncsRef.current = {
      increment: () => {
        dispatch({ type: 'INCREMENT' })
      },
      decrement: () => {
        dispatch({ type: 'DECREMENT' })
      },
      reset: () => {
        dispatch({ type: 'RESET' })
      },
    }
  }

  const { increment, decrement, reset } = countFuncsRef.current

  return (
    <>
      <p>Код:</p>
      <small>
        <pre>
          <code className='language-tsx'>{code}</code>
        </pre>
      </small>
      <p className='pt-3'>Результат:</p>
      <div>Count: {count}</div>
      <hr />
      <Button onClick={decrement} variant={'danger'}>
        decrement
      </Button>{' '}
      <Button onClick={reset} variant={'dark'}>
        set 0
      </Button>{' '}
      <Button onClick={increment} variant={'primary'}>
        increment
      </Button>
    </>
  )
}
`;

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    case 'DECREMENT': {
      return state - 1
    }
    case 'RESET': {
      return 0
    }
  }
  throw Error('Unknown action: ' + action.type)
}

function HookUseReducer() {
  const [count, dispatch] = ue(reducer, 0);
  const countFuncsRef = le(null);

  /**
   * Функции сохранены в реф, чтобы при обновлении
   * каждый раз не пересоздаваться
   */
  if (!countFuncsRef.current) {
    countFuncsRef.current = {
      increment: () => {
        dispatch({ type: 'INCREMENT' });
      },
      decrement: () => {
        dispatch({ type: 'DECREMENT' });
      },
      reset: () => {
        dispatch({ type: 'RESET' });
      },
    };
  }

  const { increment, decrement, reset } = countFuncsRef.current;

  return (
    xe(Fragment, null
      , xe('p', null, "Код:")
      , xe('small', null
        , xe('pre', null
          , xe('code', { className: "language-tsx",}, code)
        )
      )
      , xe('p', { className: "pt-3",}, "Результат:")
      , xe('div', null, "Count: " , count)
      , xe('hr', null )
      , xe(Button, { onClick: decrement, variant: 'danger',}, "decrement"

      ), ' '
      , xe(Button, { onClick: reset, variant: 'dark',}, "set 0"

      ), ' '
      , xe(Button, { onClick: increment, variant: 'primary',}, "increment"

      )
    )
  )
}function Test () {
  return (
    xe(Fragment, null
      , xe(Header, null )

      , xe(Container, null
        , xe(Description, null )

        , xe(Accordion, { alwaysOpen: true,}
          , xe(AccordionItemWrapper, { title: 'useState', expanded: true,}
            , xe(HookUseState, null )
          )

          , xe(AccordionItemWrapper, { title: 'useReducer',}
            , xe(HookUseReducer, null )
          )

          , xe(AccordionItemWrapper, { title: 'useEffect',}, "TODO: useEffect"

          )
        )
      )
    )
  )
}console.log('barely-react');

console.log(ke(document.body, xe(Test, null )));

// import Bootstrap from '@/routes/bootstrap/page'

// function App() {
//   return <Bootstrap />
// }

// console.log(render(document.body, <App />))