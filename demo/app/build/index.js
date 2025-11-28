/* eslint-disable */
function Fragment(e){return e.children}var e=["key"];class JSXNode{constructor(t,n,o){var r=n||{},l=r.key,a=function(e,t){if(null==e)return {};var n,o,r=function(e,t){if(null==e)return {};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(-1!==t.indexOf(o))continue;n[o]=e[o];}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);}return r}(r,e);o.length&&(a.children=o.length>1?o:o[0]),this.type=t,this.key=l,this.props=a;}}function t(e,t){for(var n,o=e.length,r=t.length,l=r-o,a=0;a<o&&a<r;++a)if(n=e[a]-t[a]){l=n;break}return l>0?1:l<0?-1:0}var n="http://www.w3.org/",o={__proto__:null,svg:n+"2000/svg",math:n+"1998/Math/MathML",xlink:n+"1999/xlink"};function r(e,t){return document.createElementNS(e in o?o[e]:(t&&"foreignObject"!==t.localName?t:document.documentElement).namespaceURI,e)}function l(e){for(;e=e.parent;)if(e.fc===XMLElement||e.fc===Portal)return e.contextValue}function a(e,n,o){for(var r=n.childNodes,l=n.childDeeps,a=l.length;a-- >0&&!(t(l[a],o)<0););n.node.insertBefore(e,r[++a]||null),r.splice(a,0,e),l.splice(a,0,o);}function u(e,t,n){e.parentNode&&e.parentNode.removeChild(e);var o=t.childNodes,r=t.childDeeps,l=r.lastIndexOf(n);-1===l||r.splice(l,1),o[l]===e||(l=o.lastIndexOf(e)),-1===l||o.splice(l,1);}function i(e){var t=typeof e;return "string"===t||"number"===t||"bigint"===t?""+e:""}var c={__proto__:null},s=!0;var v=/([A-Z])/g,p={__proto__:null},f=function(e){return function(){if(s){s=!1;try{var e=/^-[^-]+-/,t=getComputedStyle(document.documentElement);for(var n in t)+n>-1&&(n=t[n],c[n.replace(e,"")]=n);}catch(o){}}}(),(f=function(e){return "-"===e[0]?e:(e=e in p?p[e]:p[e]=e.replace(v,"-$1").toLowerCase())in c?c[e]:e})(e)};function d(e){switch(typeof e){case"string":return ";"===e[e.length-1]?e.slice(0,-1):e;case"object":var t=[];if(Array.isArray(e))for(var n,o=0,r=e.length;o<r;++o)(n=d(e[o]))&&t.push(n);else if(e)for(var l in e)k(e[l])&&t.push(f(l)+":"+e[l]);return t.join(";")}return ""}function h(e){switch(typeof e){case"string":return e;case"number":return ""+e;case"object":var t=[];if(Array.isArray(e))for(var n,o=0,r=e.length;o<r;++o)(n=h(e[o]))&&t.push(n);else if(e)for(var l in e)e[l]&&t.push(l);return t.join(" ")}return ""}function k(e){return null!=e&&""!==e}function x(e,t,n){e[k(n)?"setAttribute":"removeAttribute"](t,""+n);}function H(e,t,n){e[k(n)?"setAttributeNS":"removeAttributeNS"](o.xlink,"xlink:"+function(e,t){return "-"===e[t]?e.slice(t+1):e[t].toLowerCase()+e.slice(t+1)}(t,5),""+n);}var y={};function g(e,t,n){t in e&&function(e,t,n){var o=y[e]||(y[e]={});if(!o.hasOwnProperty(t)){for(var r,l=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor;(n=l(n))&&!(r=a(n,t)););o[t]=r&&r.set;}return o[t]}(e.localName,t,e)?e[t]=n:x(e,t,n);}var m=/Capture$/;function N(e,t,n,o){n!==o&&(m.test(t)?(t=t.slice(2,-7).toLocaleLowerCase(),o&&e.removeEventListener(t,o,!0),n&&e.addEventListener(t,n,!0)):(t=t.slice(2).toLocaleLowerCase(),o&&e.removeEventListener(t,o),n&&e.addEventListener(t,n)));}var b=/^on[A-Z][a-z]/,T=/^xlink[A-Z][a-z]/;function w(e,t,n){var o,r={};for(var l in t)"ref"!==l&&"children"!==l&&((o=t[l])==o||(o=null),"style"===l?(o=d(o),n[l]!==o&&x(e,l,o)):"className"===l||"class"===l?(l="class",o=h(o),n[l]!==o&&x(e,l,o)):b.test(l)?N(e,l,o,n[l]):T.test(l)?n[l]!==o&&H(e,l,o):n[l]!==o&&g(e,l,o),r[l]=o,delete n[l]);for(var a in n)b.test(a)?N(e,a,null,n[a]):T.test(a)?H(e,a,null):g(e,a,null);return r}function j(e,t){if(e.hookType!==t)throw new Error("Incorrect hook: "+t.name)}function V(e,t){if(e!==t){if(e&&t&&e.length===t.length){for(var n=Object.is,o=e.length;o-- >0;)if(!n(e[o],t[o]))return !1;return !0}return !1}return !0}var O,L="function"==typeof queueMicrotask?queueMicrotask:"undefined"!=typeof Promise?function(e){Promise.resolve(null).then(e);}:setTimeout,A=[],E=[],M=[],X=[],S=0;function _(){if(S>4e4)throw "loop";var e=S,t=U(),n=A;A=[],n.forEach(F),C(E,E=[]),C(M,M=[]),C(X,X=[]),J(t),e===S?S=0:L(_);}function C(e){for(var t,n=0;n<e.length;++n)if((t=e[n]).length){J(t[0].vNode);for(var o,r=0;r<t.length;++r)(o=t[r]).cleanup&&(o.cleanup(),o.cleanup=null);}for(var l,a=0;a<e.length;++a)if((l=e[a]).length){J(l[0].vNode);for(var u,i=0;i<l.length;++i)(u=l[i]).vNode.alive&&(u.cleanup=u.value());}}function P(e){if(!e.dirty&&e.alive){e.dirty=!0;for(var n=e.deep,o=A.length;o-- >0&&!(t(A[o].deep,n)<0););A.splice(o+1,0,e),S++||L(_);}}function D(e,n){var o=e.vNode;if(o.alive){for(var r,l=o.deep,a=n.length;a-- >0&&!((r=t(n[a][0].vNode.deep,l))<0);)if(0===r)return void n[a].push(e);n.splice(a+1,0,[e]),S++||L(_);}}function I(e,t){var n=U(),o=n.prevHook,r=!1,l=o.nextHook;l?(j(l,I),V(l.deps,l.deps=t)&&t||(r=!0)):(r=!0,l=o.nextHook={nextHook:null,hookType:I,vNode:n,value:e,deps:t}),n.prevHook=l,r&&(l.value=e,function(e){D(e,M);}(l));}function XMLText(e,t){var n=U(),o=null;if(t){var i=n.contextValue;if(i&&(o=i.node))u(o,i.parentContext,n.deep);}else if(n.contextValue){if(o=n.contextValue.node){var c=1===o.childNodes.length&&o.childNodes[0];c&&3===c.nodeType?c.data=e:o.textContent=e;}}else {var s=l(n);s&&s.node&&((o=r("font",s.node)).style.verticalAlign="inherit",o.textContent=e,a(o,s,n.deep)),n.contextValue={node:o,parentContext:s};}}function XMLElement(e,t){var n=U(),o=null;if(t){var i=n.contextValue;if(i&&(o=i.node)){var c=i.parentContext;u(o,c,n.deep),function(e,t){if(t)for(var n in t)b.test(n)&&(N(e,n,null,t[n]),delete t[n]);}(o,i.nodeAttrs);}}else if(n.contextValue){if(o=n.contextValue.node){var s=n.contextValue;s.nodeAttrs=w(o,e,s.nodeAttrs);}}else {var v=n.jsx.type;switch(v){case"html":case"body":case"link":case"meta":case"script":case"style":case"title":throw 'Tag "'+v+'" is not supported yet';default:var p=l(n);p&&p.node&&a(o=r(v,p.node),p,n.deep),n.contextValue={tempEffectDeps:[e.ref,null],nodeAttrs:o?w(o,e,{}):null,node:o,childNodes:[],childDeeps:[],parentContext:p};}}var f=n.contextValue.tempEffectDeps;return f[0]===e.ref&&f[1]===o||(n.contextValue.tempEffectDeps=f=[e.ref,o],I(function(){if(o){var t=e.ref;if(t)return "function"==typeof t?(t(o),function(){t(null);}):(t.current=o,function(){t.current=null;})}},f)),e.children}class VNode{constructor(e,t,n){if(this._="",this.alive=!0,this.dirty=!1,this.children=[],this.parent=e,e){var o=e.children;this.deep=e.deep.slice(),void 0===n?(this.deep.push(o.length),o.push(this)):(this.deep.push(n),o[n]=this);}else this.deep=[0];var r=U();J(this),this.prevHook=this.headHook={nextHook:null},t instanceof JSXNode?("string"!=typeof t.type?(this.fc=t.type,this._="comp: "+this.fc.name):(this.fc=XMLElement,this._="node: "+t.type),this.jsx=t,q(this,this.fc(t.props))):(this.fc=XMLText,this._="text: "+t,(this.jsx=i(t))&&XMLText(t)),J(r);}}function U(){return O}function J(e){O=e;}function q(e,t,n){if(n||null!=t)if(Array.isArray(t))if(n)new VNode(e,new JSXNode(Fragment,null,[t]));else for(var o=0;o<t.length&&e.alive;++o)q(e,t[o],!0);else e.alive&&new VNode(e,t);}function F(e){if(e.dirty&&e.alive){e.dirty=!1;var t=U();J(e),e.prevHook=e.headHook;var n=e.fc(e.jsx.props);J(t),R(e,Array.isArray(n)?n:[n]);}}function R(e,t){for(var n=e.children,o=Array.isArray,r=Object.is,l=0,a=t.length;l<a;++l){var u=t[l],c=n[l];if(o(u))c&&c.fc===Fragment?R(c,u):(Z(c),new VNode(e,new JSXNode(Fragment,null,[u]),l));else if(u instanceof JSXNode)c&&c.jsx instanceof JSXNode&&r(c.jsx.type,u.type)&&r(c.jsx.key,u.key)?c.fc.compare&&c.fc.compare(c.jsx,u)||(c.jsx=u,c.dirty=!0,F(c)):(Z(c),new VNode(e,u,l));else if(c&&c.fc===XMLText){if(c.jsx!==(c.jsx=i(u))){var s=U();J(c),e.prevHook=e.headHook,XMLText(c.jsx),J(s);}}else Z(c),new VNode(e,u,l);}for(;n.length>l;)Z(n.pop());}function Z(e){if(e&&e.alive){e.alive=!1;for(var t=e.children;t.length>0;)Z(t.pop());var n=U();switch(J(e),e.prevHook=e.headHook,e.fc){case XMLText:XMLText("",!0);break;case XMLElement:XMLElement({},!0);default:for(var o=e.headHook;o=o.nextHook;)o.cleanup&&(o.cleanup(),o.cleanup=null);}J(n);}}function Portal(e){var t=U(),n=e.domNode;if(t.contextValue){if(t.contextValue.node!==n){if(t.contextValue.node.namespaceURI!==n.namespaceURI)throw new Error("Portal: incorrect namespaceURI");t.contextValue.node=n;for(var o=t.contextValue.childNodes,r=0;r<o.length;++r)n.appendChild(o[r]);}}else t.contextValue={node:n,childNodes:[],childDeeps:[]};return e.children}function $(e){var t=U(),n=t.prevHook,o=n.nextHook;if(o?j(o,$):o=n.nextHook={nextHook:null,hookType:$,vNode:t,value:null,context:null,users:null,cleanup(){if(o.users){var e=o.users.lastIndexOf(o);-1===e||o.users.splice(e,1),o.users=null;}}},o.context!==e&&o.cleanup){o.cleanup(),o.value=(o.context=e).defaultValue;for(var r=t;r=r.parent;)if(r.fc===e){o.value=r.contextValue,(o.users=r.contextUsers).push(o);break}}return t.prevHook=o,o.value}function Q(e,t){var n=U(),o=n.prevHook,r=!1,l=o.nextHook;l?(j(l,Q),V(l.deps,l.deps=t)&&t||(r=!0)):(r=!0,l=o.nextHook={nextHook:null,hookType:Q,vNode:n,value:e,deps:t}),n.prevHook=l,r&&(l.value=e,function(e){D(e,X);}(l));}function W(){var e=U(),t=e.prevHook,n=t.nextHook;return n?j(n,W):n=t.nextHook={nextHook:null,hookType:W,vNode:e,value:(6e16*Math.random()+4e16).toString(36)},e.prevHook=n,n.value}function oe(e,t,n){var o=U(),r=o.prevHook,l=r.nextHook;return l?(j(l,oe),l.reducer=e):l=r.nextHook={nextHook:null,hookType:oe,vNode:o,value:n?n(t):t,reducer:e,dispatch(...e){e=l.reducer(l.value,...e),Object.is(l.value,e)||(l.value=e,P(l.vNode));}},o.prevHook=l,[l.value,l.dispatch]}function re(e){var t=U(),n=t.prevHook,o=n.nextHook;return o?j(o,re):o=n.nextHook={nextHook:null,hookType:re,vNode:t,value:{current:e}},t.prevHook=o,o.value}function le(e){var t=U(),n=t.prevHook,o=n.nextHook;return o?j(o,le):o=n.nextHook={nextHook:null,hookType:le,vNode:t,value:"function"==typeof e?e():e,update(e){"function"==typeof e&&(e=e(o.value)),Object.is(o.value,e)||(o.value=e,P(o.vNode));}},t.prevHook=o,[o.value,o.update]}/*@__NO_SIDE_EFFECTS__*/function ce(e){var ContextProvider=function(e){var t=U(),n=e.value,o=t.contextUsers||(t.contextUsers=[]);if(!Object.is(t.contextValue,n)){t.contextValue=n;for(var r=0,l=o.length;r<l;++r)o[r].value=n,P(o[r].vNode);}return e.children};return ContextProvider.Provider=ContextProvider,ContextProvider.defaultValue=e,ContextProvider}/*@__NO_SIDE_EFFECTS__*/function fe(e,t,...n){return new JSXNode(e,t,n)}function de(e){return {render:t=>new VNode(null,new JSXNode(Portal,{domNode:e,children:t},[]))}}
function isString(thing) {
  return typeof thing === 'function'
}function Container({
  children,
  as: TagName = 'div',
  fluid,
  ...attrs
}) {
  return (
    fe(TagName, {
      ...attrs,
      className: h([
        'container' + (fluid ? (isString(fluid) ? '-' + fluid : '-fluid') : ''),
        attrs.className
      ]),}

      , children
    )
  )
}const CollapseGroupContext = ce(null);




function CollapseGroup({
  children,
  alwaysOpen = false,
}) {
  const context = re(null);
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
    fe(CollapseGroupContext, { value: context.current,}
      , children
    )
  )
}










const CollapseContext = ce(null );





function Collapse({ children, group, expanded = false }) {
  const id = W();
  const [show, setShow] = le(expanded);
  const context = re(null);
  if (!context.current) {
    context.current = { id, show, setShow, timeoutId: null };
  }

  const collapseGroup = $(CollapseGroupContext);
  Q(() => {
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

  Q(() => {
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

  return fe(CollapseContext, { value: context.current,}, children)
}





function CollapseTrigger({ children, ...attrs }) {
  const item = $(CollapseContext);
  const nodeTriggerRef = (item.nodeTriggerRef =
    re(null));
  const itemId = item.id;

  const clickRef = re(null);
  if (!clickRef.current) {
    clickRef.current = () => {
      item.setShow(!item.show);
    };
  }

  return (
    fe('button', {
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
  const item = $(CollapseContext);
  const nodeContentRef = re(null);
  const itemId = item.id;

  item.nodeContentRef = nodeContentRef;

  return (
    fe('div', {
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
    fe(TagName, {
      ...attrs,
      'data-bs-theme': theme,
      className: h([
        'navbar',
        attrs.className,
        expand && 'navbar-expand-' + expand,
        theme && 'navbar-' + theme,
        bg && 'bg-' + bg,
      ]),}

      , fe(Collapse, null, children)
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
    fe(TagName, {
      ...attrs,
      className: h(['navbar-brand', attrs.className]),}

      , children
    )
  )
}





function NavbarToggler(attrs) {
  return (
    fe(CollapseTrigger, {
      ...attrs,
      className: h(['navbar-toggler', attrs.className]),}

      , fe('span', { className: "navbar-toggler-icon",})
    )
  )
}





function NavbarCollapse({ children, ...attrs }) {
  return (
    fe(CollapseContent, {
      ...attrs,
      className: h(['navbar-collapse', attrs.className]),}

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
    fe(TagName, {
      ...attrs,
      className: h([
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
    fe(TagName, {
      'aria-current': active ? true : void 0,
      'aria-disabled': disabled ? true : void 0,
      ...attrs,
      className: h([
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
    fe(TagName, {
      ...attrs,
      className: h(['bi bi-' + name, attrs.className]),}
    )
  )
}function Header() {
  return (
    fe(Navbar, { as: "header", expand: "sm", theme: "dark", bg: "dark",}
      , fe(Container, { fluid: true,}
        , fe(NavbarBrand, null, "Barely-react")
        , fe(NavbarToggler, null )
        , fe(NavbarCollapse, null
          , fe(NavbarNav, { as: "nav",}
            , fe(NavLink, null, "TODO")
            , fe(NavLink, null, "TODO")
          )
          , fe('hr', { className: "text-white d-sm-none" ,} )
          , fe(NavbarNav, { as: "nav", className: "ms-sm-auto",}
            , fe(NavLink, {
              href: "https://github.com/wareset/barely-react",
              target: "_blank",
              rel: "noopener",}

              , fe(Icon, { name: "github",} )
              , fe('small', { className: "d-sm-none ms-2" ,}, "Github")
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
    fe('div', {
      ...attrs,
      className: h([
        'accordion',
        attrs.className,
        flush && 'accordion-flush',
      ]),}

      , fe(CollapseGroup, { alwaysOpen: alwaysOpen,}, children)
    )
  )
}






function AccordionItem({
  children,
  expanded,
  ...attrs
}) {
  return (
    fe('div', {
      ...attrs,
      className: h(['accordion-item', attrs.className]),}

      , fe(Collapse, { group: true, expanded: expanded,}
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
    fe(TagName, { className: "accordion-header",}
      , fe(CollapseTrigger, {
        ...attrs,
        className: h(['accordion-button', attrs.className]),}

        , children
      )
    )
  )
}





function AccordionBody({ children, ...attrs }) {
  return (
    fe(CollapseContent, { className: "accordion-collapse",}
      , fe('div', {
        ...attrs,
        className: h(['accordion-body', attrs.className]),}

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
    fe(AccordionItem, { expanded: expanded,}
      , fe(AccordionHeader, null, title)
      , fe(AccordionBody, null, children)
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
    fe('div', null
      , fe('h1', null, "Barely-react")
      , fe('p', null, "В данный момент демо, как и сама библиотека, еще не готовы. Но ниже есть примеры работы хуков для демонстрации того, что библиотека действительно работает. Абсолютно все компоненты которые здесь есть (Header, Accordion, Buttons, etc.) так же написаны на этой библиотеке."



      )
      , fe('h5', null, "Список того что уже готово:"    )
      , fe('pre', null, list)
      , fe('p', null, "Ссылка на github:"

        , fe('br', null )
        , fe('a', { href: "https://github.com/wareset/barely-react", target: "_blank",}, "https://github.com/wareset/barely-react"

        )
      )
      , fe('p', null, "Ссылки на исходники текущей страницы:"

        , fe('br', null )
        , fe('a', {
          href: "https://github.com/wareset/barely-react/blob/main/demo/src/routes/test/page.tsx",
          target: "_blank",}
, "https://github.com/wareset/barely-react/blob/main/demo/src/routes/test/page.tsx"

        )
        , fe('br', null ), "и"

        , fe('br', null )
        , fe('a', {
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
    fe(TagName, {
      type: TagName === 'button' ? TagName : void 0,
      role: TagName !== 'button' ? 'button' : void 0,
      'aria-pressed': active ? true : void 0,
      'aria-disabled': disabled ? true : void 0,
      ...attrs,
      className: h([
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
  const [count, setCount] = le(0);
  const countFuncsRef = re(null);

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
    fe(Fragment, null
      , fe('p', null, "Код:")
      , fe('small', null
        , fe('pre', null
          , fe('code', { className: "language-tsx",}, code$1)
        )
      )
      , fe('p', { className: "pt-3",}, "Результат:")
      , fe('div', null, "Count: " , count)
      , fe('hr', null )
      , fe(Button, { onClick: decrement, variant: 'danger',}, "decrement"

      ), ' '
      , fe(Button, { onClick: increment, variant: 'primary',}, "increment"

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
  const [count, dispatch] = oe(reducer, 0);
  const countFuncsRef = re(null);

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
    fe(Fragment, null
      , fe('p', null, "Код:")
      , fe('small', null
        , fe('pre', null
          , fe('code', { className: "language-tsx",}, code)
        )
      )
      , fe('p', { className: "pt-3",}, "Результат:")
      , fe('div', null, "Count: " , count)
      , fe('hr', null )
      , fe(Button, { onClick: decrement, variant: 'danger',}, "decrement"

      ), ' '
      , fe(Button, { onClick: reset, variant: 'dark',}, "set 0"

      ), ' '
      , fe(Button, { onClick: increment, variant: 'primary',}, "increment"

      )
    )
  )
}function Test () {
  return (
    fe(Fragment, null
      , fe(Header, null )

      , fe(Container, null
        , fe(Description, null )

        , fe(Accordion, { alwaysOpen: true,}
          , fe(AccordionItemWrapper, { title: 'useState', expanded: true,}
            , fe(HookUseState, null )
          )

          , fe(AccordionItemWrapper, { title: 'useReducer',}
            , fe(HookUseReducer, null )
          )

          , fe(AccordionItemWrapper, { title: 'useEffect',}, "TODO: useEffect"

          )
        )
      )
    )
  )
}console.log('barely-react');

console.log(de(document.body).render(fe(Test, null )));

// import Bootstrap from '@/routes/bootstrap/page'

// function App() {
//   return <Bootstrap />
// }

// console.log(render(document.body, <App />))