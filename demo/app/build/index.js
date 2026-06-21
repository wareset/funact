
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
/* eslint-disable */
function Fragment(e){return e.children}function e(e,o,t){for(var n,r=e.length,l=o.length,a=t?r-l:l-r,u=0;u<r&&u<l;++u)if(n=e[u]-o[u]){a=n;break}return a>0?1:a<0?-1:0}var o=function(e,t){return (o=Object.is||function(e,o){return e===o?0!==e||1/e==1/o:e!=e&&o!=o})(e,t)},t={__proto__:null},n=!0;var r=/([A-Z])/g,l={__proto__:null},a=function(e){return function(){if(n){n=!1;try{var e=/^-[^-]+-/,o=getComputedStyle(document.documentElement);for(var r in o)if(+r>-1){var l=(r=o[r]).replace(e,"");l!==r&&(t[l]=r);}}catch(a){}}}(),(a=function(e){return "-"===e[0]?e:(e=e in l?l[e]:l[e]=e.replace(r,"-$1").toLowerCase())in t?t[e]:e})(e)};function u(e){switch(typeof e){case"string":return e;case"object":var o=[];if(Array.isArray(e))for(var t,n=0,r=e.length;n<r;++n)(t=u(e[n]))&&o.push(t);else if(e)for(var l in e)v(e[l])&&o.push(a(l)+":"+e[l]);return o.join(";")}return ""}function i(e){switch(typeof e){case"string":return e;case"object":var o=[];if(Array.isArray(e))for(var t,n=0,r=e.length;n<r;++n)(t=i(e[n]))&&o.push(t);else if(e)for(var l in e)e[l]&&o.push(l);return o.join(" ")}return ""}function v(e){return null!=e&&""!==e&&"object"!=typeof e}function c(e,o,t){v(t)?e.setAttribute(o,String(t)):e.removeAttribute(o);}var s={__proto__:null};function p(e,o,t){o=s[o]||(s[o]="xlink:"+function(e,o){return "-"===e[o]?e.slice(o+1):e[o].toLowerCase()+e.slice(o+1)}(o,5)),v(t)?e.setAttributeNS(g,o,String(t)):e.removeAttributeNS(g,o);}var f={__proto__:null};function d(e,o,t){o in e&&function(e,o){var t=e.localName,n=f[t]||(f[t]={__proto__:null});if(!(o in n)){for(var r,l=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor;(e=l(e))&&!(r=a(e,o)););n[o]=r&&r.set;}return n[o]}(e,o)?e[o]=t:c(e,o,t);}var h=/Capture$/;function k(e,o,t,n){h.test(o)?(o=o.slice(2,-7).toLowerCase(),n&&e.removeEventListener(o,n,!0),t&&e.addEventListener(o,t,!0)):(o=o.slice(2).toLowerCase(),n&&e.removeEventListener(o,n),t&&e.addEventListener(o,t));}var x=/^on[A-Za-z]/,H=/^xlink[A-Z]/;function m(e,o,t){var n,r={__proto__:null};for(var l in o)"children"!==l&&"ref"!==l&&"key"!==l&&((n=o[l])==n||(n=null),"style"===l?(n=u(n))!==t.style&&(e.style.cssText=n):"className"===l||"class"===l?(l="class",(n=i(n))!==t.class&&c(e,l,n)):n!==t[l]&&(x.test(l)?k(e,l,n,t[l]):H.test(l)?p(e,l,n):d(e,l,n)),r[l]=n);for(var a in t)a in r||(x.test(a)?k(e,a,null,t[a]):H.test(a)?p(e,a,null):d(e,a,null));return r}var N="http://www.w3.org/",y={__proto__:null,svg:N+"2000/svg",math:N+"1998/Math/MathML"},g=N+"1999/xlink";function T(e,o){return document.createElementNS(e in y?y[e]:(o&&"foreignObject"!==o.localName?o:document.documentElement).namespaceURI,e)}function w(e){for(;e=e.parent;)if(e.fc===XMLElement||e.fc===Portal)return e.xmlContext}function C(o,t,n){var r=t.node;if(r){for(var l=t.childVNodes,a=l.length;a-- >0&&!(e(l[a].deep,n.deep)<0););var u=l[++a]&&l[a].xmlContext.node;u&&u.parentNode===r||(u=r.childNodes[a]||null),r.insertBefore(o,u),l.splice(a,0,n);}}function _(e,o,t){var n=e.parentNode;if(n){var r=o.childVNodes,l=r.lastIndexOf(t);n&&n===o.node&&n.removeChild(e),-1===l||r.splice(l,1);}}function b(e){var o=typeof e;return "string"===o?e:"number"===o?e.toString():""}function E(e){var o,t=e.xmlContext;t&&(o=t.node)&&(_(o,t.parentContext,e),function(e,o){if(o)for(var t in o)x.test(t)&&k(e,t,null,o[t]);}(o,t.attrs));}function M(e,o){if(e.hookType!==o)throw new Error("Incorrect hook: "+o.name)}function j(e,t){if(e!==t){if(e&&t&&e.length===t.length){for(var n=e.length;n-- >0;)if(!o(e[n],t[n]))return !1;return !0}return !1}return !0}var S,L="function"==typeof queueMicrotask?queueMicrotask:"undefined"!=typeof Promise?function(e){Promise.resolve(null).then(e);}:setTimeout,X=[],A=[],P=[],V=[],D=0;function O(){for(var e;e=X.pop();)if(e.dirty&&e.alive){if(D>4e4)throw "loop";V.length=P.length=A.length=0,Y(e),V.forEach(J),P.forEach(q),A.forEach(I),A.forEach(q);}D=0;}function J(e){var o;(o=e.i).length&&(I(o),q(o)),(o=e.l).length&&(I(o),o[0].vNode.alive&&P.push(o));}function I(e){for(var o,t,n=0;n<e.length;++n)(t=(o=e[n]).cleanup)&&(o.cleanup=null,t());}function q(e){for(var o,t=e[0].vNode,n=0;n<e.length&&t.alive;++n)(o=e[n]).cleanup=o.value();}function R(o){if(!o.dirty&&o.alive){o.dirty=!0;for(var t=o.deep,n=X.length;n-- >0&&!(e(X[n].deep,t,!0)>0););X.splice(n+1,0,o),D++||L(O);}}function U(o,t){for(var n,r=o.vNode.deep,l=V.length;l-- >0&&!((n=e(V[l].deep,r))<0);)if(0===n)return void(t?V[l].i:V[l].l).push(o);V.splice(l+1,0,t?{deep:r,i:[o],l:[]}:{deep:r,i:[],l:[o]});}function F(o){for(var t,n=o.vNode.deep,r=A.length;r-- >0&&!((t=e(A[r][0].vNode.deep,n))<0);)if(0===t)return void A[r].push(o);A.splice(r+1,0,[o]);}function Z(e,o){var t=K(),n=t.prevHook,r=!1,l=n.nextHook;l?(M(l,Z),j(l.deps,l.deps=o)&&o||(r=!0)):(r=!0,l=n.nextHook={nextHook:null,hookType:Z,vNode:t,value:e,deps:o,cleanup:null}),t.prevHook=l,r&&(l.value=e,U(l,0));}function XMLText(e){var o=null,t=e.xmlContext,n=b(e.jsx);if(e._="text: "+n,t){if((o=t.node)&&t.text!==(t.text=n)){var r=1===o.childNodes.length&&o.childNodes[0];r&&3===r.nodeType?r.data=n:o.textContent=n;}}else if(n){var l=w(e);l&&l.node&&((o=T("font",l.node)).style.verticalAlign="inherit",o.textContent=n,C(o,l,e)),e.xmlContext={node:o,text:n,parentContext:l};}}function XMLElement(e){var o=K(),t=null,n=o.xmlContext,r=e.ref;if(n)(t=n.node)&&(n.attrs=m(t,e,n.attrs));else {var l=o.jsx.type;switch(l){case"html":case"body":case"link":case"meta":case"script":case"style":case"title":throw 'Tag "'+l+'" is not supported yet';default:var a=w(o);a&&a.node&&C(t=T(l,a.node),a,o),o.xmlContext=n={node:t,attrs:t?m(t,e,{}):{},parentContext:a,tempEffectDeps:[r,null],childVNodes:[]};}}var u=n.tempEffectDeps;return !r&&!u[0]||u[0]===r&&u[1]===t||Z(function(){if(r&&t)return "function"==typeof r?(r(t),function(){r(null);}):(r.current=t,function(){r.current=null;})},n.tempEffectDeps=[r,t]),e.children}class VNode{constructor(e,o,t,n){if(this._="",this.jsx=o,this.alive=!0,this.dirty=!1,this.children=[],(this.parent=e)?(e.children[n]=this,(this.deep=e.deep.slice()).push(n)):this.deep=[n],t){var r=K();Q(this),this.prevHook=this.headHook={nextHook:null},"string"==typeof o.type?(this.fc=XMLElement,this._="elem: "+o.type):(this.fc=o.type,this._="comp: "+this.fc.name),W(this,this.fc(o.props),0),Q(r);}else this.fc=XMLText,XMLText(this);}}class JSXNode{constructor(e,o){this.type=e,this.props=o;}}function B(e,o){var t=K(),n=t.prevHook,r=!1,l=n.nextHook;l?(M(l,B),j(l.deps,l.deps=o)&&o||(r=!0)):(r=!0,l=n.nextHook={nextHook:null,hookType:B,vNode:t,value:e,deps:o,cleanup:null}),t.prevHook=l,r&&(l.value=e,U(l,1));}function $(e,o){var t=K(),n=t.prevHook,r=!1,l=n.nextHook;l?(M(l,$),j(l.deps,l.deps=o)&&o||(r=!0)):(r=!0,l=n.nextHook={nextHook:null,hookType:$,vNode:t,value:e,deps:o,cleanup:null}),t.prevHook=l,r&&(l.value=e,F(l));}function z(e,t){if(e!==t){var n,r=Object.keys(e),l=r.length;if(l!==Object.keys(t).length)return !1;for(;l--;)if(!((n=r[l])in t)||!o(e[n],t[n]))return !1}return !0}
function K(){return S}function Q(e){S=e;}function W(e,o,t,n){if(Array.isArray(o))if(n)new VNode(e,new JSXNode(Fragment,{children:o}),1,t);else for(var r=0;r<o.length;++r)W(e,o[r],r,1);else o instanceof JSXNode?new VNode(e,o,1,t):b(o)&&new VNode(e,o,0,t);}function Y(e){if(e.alive){e.dirty=!1;var o=K();Q(e),e.prevHook=e.headHook;var t=e.fc(e.jsx.props);Q(o),ee(e,Array.isArray(t)?t:[t]);}}function ee(e,t){for(var n,r,l=e.children,a=Array.isArray,u=0;u<t.length;++u)if(r=l[u],(n=t[u])instanceof JSXNode)if(r&&r.jsx instanceof JSXNode&&o(r.jsx.type,n.type)){if(r.fc===XMLElement||!(r.fc.compare||z)(r.jsx.props,n.props)){if(r.jsx.props===n.props)throw "props";r.jsx=n,Y(r);}}else oe(r),new VNode(e,n,1,u);else a(n)?r&&r.fc===Fragment?ee(r,n):(oe(r),new VNode(e,new JSXNode(Fragment,{children:n}),1,u)):r&&r.fc===XMLText?(r.jsx=n,XMLText(r)):(oe(r),b(n)?new VNode(e,n,0,u):l[u]=null);for(;l.length>u;)oe(l.pop());}function oe(e){if(e&&e.alive)switch(e.alive=e.dirty=!1,e.children.forEach(oe),e.fc){case XMLText:(l=(n=e).xmlContext)&&(r=l.node)&&_(r,l.parentContext,n);break;case XMLElement:E(e);default:for(var o,t=e.headHook;t=t.nextHook;)if(o=t.cleanup)switch(t.hookType){case B:U(t,1);break;case Z:U(t,0);break;case $:F(t);break;default:t.cleanup=null,o();}}var n,r,l;}function Portal(e){var o=K(),t=e.domNode,n=o.xmlContext;if(n){if(n.node!==t){var r=n.node;if(r.namespaceURI!==t.namespaceURI)throw "Portal: incorrect namespaceURI";n.node=t;for(var l,a=n.childVNodes,u=0;u<a.length;++u){if((l=a[u].xmlContext.node).parentNode!==r)throw "Portal: wrong parent";t.appendChild(l);}}}else o.xmlContext={node:t,childVNodes:[]};return e.children}function re(e){var o=K(),t=o.prevHook,n=t.nextHook;if(n?M(n,re):n=t.nextHook={nextHook:null,hookType:re,vNode:o,value:null,context:null,users:null,cleanup(){if(n.users){var e=n.users.lastIndexOf(n);-1===e||n.users.splice(e,1),n.users=null;}}},o.prevHook=n,n.context!==e&&n.cleanup)for(n.cleanup(),n.value=(n.context=e).defaultValue;o=o.parent;)if(o.fc===e){n.value=(e=o.context).value,(n.users=e.users).push(n);break}return n.value}function ue(){var e=K(),o=e.prevHook,t=o.nextHook;return t?M(t,ue):t=o.nextHook={nextHook:null,hookType:ue,vNode:e,value:(6e16*Math.random()+4e16).toString(36)},e.prevHook=t,t.value}function pe(e){var o=K(),t=o.prevHook,n=t.nextHook;return n?M(n,pe):n=t.nextHook={nextHook:null,hookType:pe,vNode:o,value:{current:e}},o.prevHook=n,n.value}function fe(e){var t=K(),n=t.prevHook,r=n.nextHook;return r?M(r,fe):r=n.nextHook={nextHook:null,hookType:fe,vNode:t,value:"function"==typeof e?e():e,update(e){r.vNode.alive&&("function"==typeof e&&(e=e(r.value)),o(r.value,e)||(r.value=e,R(r.vNode)));}},t.prevHook=r,[r.value,r.update]}/*@__NO_SIDE_EFFECTS__*/function xe(e){function ContextProvider(e){var t=K(),n=t.context,r=e.value;if(n){if(!o(n.value,r)){n.value=r;for(var l=n.users,a=0,u=l.length;a<u;++a)l[a].value=r,R(l[a].vNode);}}else t.context={value:r,users:[]};return e.children}return ContextProvider.Provider=ContextProvider,ContextProvider.defaultValue=e,ContextProvider}
/*@__NO_SIDE_EFFECTS__*/function me(e,o,...t){return o||(o={}),t.length&&(o.children=t.length>1?t:t[0]),o.style&&(o.style=u(o.style)),o.className&&(o.className=i(o.className)),new JSXNode(e,o)}function Root(e){var o=fe(),t=o[0],n=o[1];return t||n(new JSXNode(Portal,e)),t}var Ne=0;function ye(e,o){return new VNode(null,new JSXNode(Root,{domNode:o,children:e}),1,++Ne)}var style$6 = {"_main":"fzpy3rzue34_main"};var style$5 = {"_menubar":"dgbc9wfqdzk_menubar"};var styleMenuBtn = {"_menu_btn":"luumq9iwygg_menu_btn"};var style$4 = {"_grabbing":"k9p30s4ywv4_grabbing"};function isString(thing) {
  return typeof thing === 'string'
}function clamp(x, lower, upper) {
  return x < lower ? lower : x > upper ? upper : x
}function getClientXYFromEvent(e) {
  let { clientX: x, clientY: y } =
    'touches' in e ? e.touches[0] || { clientX: 0, clientY: 0 } : e;
  return { x, y }
}

function isValidTouch(e) {
  return 'touches' in e ? e.touches.length === 1 : e.button === 0
}

function preventDefault(e) {
  e.defaultPrevented || e.preventDefault();
}

function stopPropagation(e) {
  e.stopPropagation();
}const DICTIONARY = {
  __proto__: null,

  // main menubar
  FILE: 'File',
  EDIT: 'Edit',
  TOOLS: 'Tools',
  GROUP: 'Group',
  VIEWS: 'Views',
  CREATE: 'Create',
  MODIFIERS: 'Modifiers',
  ANIMATION: 'Animation',
  GRAPH_EDITORS: 'Graph Editors',
  RENDERING: 'Rendering',
  CUSTOMIZE: 'Customize',
  SCRIPTING: 'Scripting',
  HELP: 'Help',

  // file
  NEW: 'New',
  RESET: 'Reset',
  OPEN: 'Open',
  SAVE: 'Save',
  SAVE_AS: 'Save As',
  IMPORT: 'Import',
  EXPORT: 'Export',

  // edit
  UNDO: 'Undo',
  REDO: 'Redo',

  HOLD: 'Hold',
  FETCH: 'Fetch',

  DELETE: 'Delete',
  CLONE: 'Clone',

  MOVE: 'Move',
  ROTATE: 'Rotate',
  SCALE: 'Scale',
  PLACEMENT: 'Placement',

  SELECT_ALL: 'Select All',
  SELECT_NONE: 'Select None',
  SELECT_INVERT: 'Select Invert',

  SELECT_SIMILAR: 'Select Similar',
  SELECT_INSTANCES: 'Select instances',
  SELECT_BY: 'Select by',
  NAME: 'Name',
  LAYER: 'Layer',
  LAYER_WITH_DOTS: 'Layer...',
  COLOR: 'Color',

  SELECTION_REGION: 'Selection region',
  RECTANGULAR_REGION: 'Rectangular region',
  CIRCULAR_REGION: 'Circular region',
  FENCE_REGION: 'Fence region',
  LASSO_REGION: 'Lasso region',
  PAINT_SELECTION_REGION: 'Paint lasso region',
  WINDOW: 'Window',
  CROSSING: 'Crossing',

  MANAGE_SELECTION_SETS_WITH_DOTS: 'Manage selection sets...',
  
  OBJECT_PROPERTIES_WITH_DOTS: 'Object Properties...',

  // tools
  SCENE_EXPORTER_WITH_DOTS: 'Scene Exporter...',
  LAYER_EXPORTER_WITH_DOTS: 'Layer Exporter...',
  CREASE_EXPORTER_WITH_DOTS: 'Crease Exporter...',
  ALL_GLOBAL_EXPORTERS: 'All Global Exporters',

  CONTAINERS: 'Containers',
  INHERIT_CONTAINER: 'Inherit Container',
  CREATE_CONTAINER_FROM_SELECTION: 'Create Container from Selection',
  LOAD_CONTAINER: 'Load Container',
  UNLOAD_CONTAINER: 'Unload Container',
  OPEN_CONTAINER: 'Open Container',
  CLOSE_CONTAINER: 'Close Container',
  UPDATE_CONTAINER: 'Update Container',
  EDIT_CONTAINER: 'Edit Container',
  LOCAL_CONTENT: 'Local Content',
  ADD_SELECTED_TO_CONTAINER: 'Add Selected to Container',
  REMOVE_SELECTED_FROM_CONTAINER: 'Remove Selected from Container',
  SAVE_CONTAINER: 'Save Container',
  RELOAD_CONTAINER: 'Reload Container',
  INHERITED_CONTENT: 'Inherited Content',
  MERGE_CONTAINER_SOURCE: 'Merge Container Source',

  ISOLATE_SELECTION: 'Isolate selection',
  END_ISOLATE: 'End Isolate',

  DISPLAY_FLOATER_WITH_DOTS: 'Display Floater...',

  MIRROR_WITH_DOTS: 'Mirror...',
  ARRAY_WITH_DOTS: 'Array...',
  ALIGN: 'Align',
  ALIGN_WITH_DOTS: 'Align...',
  QUICK_ALIGN: 'Quick Align',
  SPACING_TOOL_WITH_DOTS: 'Spacing tool...',
  CLONE_AND_ALIGN_WITH_DOTS: 'Clone and Align...',
  ALIGN_TO_VIEW_WITH_DOTS: 'Align to View...',
  NORMAL_ALIGN_WITH_DOTS: 'Normal Align...',
  ALIGN_CAMERA: 'Align Camera',
  PLACE_HIGHLIGHT: 'Place Highlight',
  SNAPSHOT_WITH_DOTS: 'Snapshot...',

  RENAME_OBJECTS_WITH_DOTS: 'Rename Objects...',

  ASSIGN_VERTEX_COLORS_WITH_DOTS: 'Assign Vertex Colors...',
  COLOR_CLIPBOARD_WITH_DOTS: 'Color Clipboard...',
  PERSPECTIVE_MATCH_WITH_DOTS: 'Perspective Match...',

  VIEWPORT_CANVAS_WITH_DOTS: 'Viewport canvas...',

  GRIDS_AND_SNAPS: 'Grids and Snaps',
  GRID_AND_SNAP_SETTINGS_WITH_DOTS: 'Grid and Snap Settings...',
  SHOW_HOME_GRID: 'Show Home Grid',
  ACTIVATE_HOME_GRID: 'Activate Home Grid',
  ACTIVATE_GRID_OBJECT: 'Activate Grid Object',
  ALIGN_GRID_TO_VIEW: 'Align Grid to View',
  SNAPS_TOGGLE: 'Snaps Toggle',
  ANGLE_SNAP_TOGGLE: 'Angle Snap Toggle',
  PERCENT_SNAP_TOGGLE: 'Percent Snap Toggle',
  ENABLE_AXIS_CONSTRAINTS_IN_SNAPS: 'Enable Axis Constraints in Snaps',
  MEASURE_DISTANCE_WITH_DOTS: 'Measure Distance...',

  CHANNEL_INFO_WITH_DOTS: 'Channel Info...',
  MESH_INSPECTOR: 'Mesh Inspector',
  ACTIVATE_MESH_INSPECTOR: 'Activate Mesh Inspector',
  MESH_AUTO_REPAIR: 'Mesh Auto Repair',

  // group
  GROUP_WITH_DOTS: 'Group...',
  UNGROUP: 'Ungroup',
  OPEN_RECURSIVELY: 'Open Recursively',
  CLOSE: 'Close',

  ATTACH: 'Attach',
  DETACH: 'Detach',

  EXPLODE: 'Explode',

  ASSEMBLE: 'Assemble',
  DISASSEMBLE: 'Disassemble',

  // views
  UNDO_VIEW_CHANGE: 'Undo View Change',
  REDO_VIEW_CHANGE: 'Redo View Change',

  VIEWPORT_CONFIGURATION_WITH_DOTS: 'Viewport Configuration...',
  REDRAW_ALL_VIEWS: 'Redraw All Views',

  SET_ACTIVE_VIEWPORT: 'Set Active Viewport',
  PERSPECTIVE: 'Perspective',
  ORTHOGRAPHIC: 'Orthographic',
  FRONT: 'Front',
  BACK: 'Back',
  TOP: 'Top',
  BOTTOM: 'Bottom',
  LEFT: 'Left',
  RIGHT: 'Right',
  SAVE_ACTIVE_PERSPECTIVE_VIEW: 'Save Active Perspective View',
  RESTORE_ACTIVE_PERSPECTIVE_VIEW: 'Restore Active Perspective View',

  CREATE_CAMERA_FROM_VIEW: 'Create Camera from View',

  SHOW_TRANSFORM_GIZMO: 'Show Transform Gizmo',
  SHOW_GHOSTING: 'Show Ghosting',
  SHOW_KEY_TIMES: 'Show Key Times',
  SHADE_SELECTED: 'Shade Selected',
  SHOW_DEPENDENCIES: 'Show Dependencies',

  UPDATE_DURING_SPINNER_DRAG: 'Update During Spinner Drag',
  ADAPTIVE_DEGRADATION: 'Adaptive Degradation',

  EXPERT_MODE: 'Expert Mode',

  // create
  STANDARD_PRIMITIVES: 'Standard Primitives',
  BOX: 'Box',
  CONE: 'Cone',
  SPHERE: 'Sphere',
  CYLINDER: 'Cylinder',
  TUBE: 'Tube',
  TORUS: 'Torus',
  PYRAMID: 'Pyramid',
  PLANE: 'Plane',
  EXTENDED_PRIMITIVES: 'Extended Primitives',

  LIGHTS: 'Lights',
  CAMERAS: 'Cameras',

  HELPERS: 'Helpers',
  SYSTEMS: 'Systems',
};function dictionary(is) {
  const text = DICTIONARY[is];
  if (isString(text)) return text
  else throw `${is} - not found in Dictionary`
}function getObjectName(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}function onWheelX( e) {
  const prev = this.scrollLeft;
  this.scrollLeft += e.deltaY;
  if (prev !== this.scrollLeft) {
    stopPropagation(e);
  }
}

function onWheelY( e) {
  const prev = this.scrollTop;
  this.scrollTop += e.deltaY;
  if (prev !== this.scrollTop) {
    stopPropagation(e);
  }
}

const WHEEL = {
  __proto__: null,
  x: onWheelX,
  y: onWheelY,
}; 

let isDown$1 = false;
let posX$1 = 0;
let posY$1 = 0;
let allowClick = true;
let activeElement;
const ELEMENTS_FOR_X = [];
const ELEMENTS_FOR_Y = [];

function initDown$1(e) {
  if (!isDown$1) {
    isDown$1 = true;
    addEventListener('touchmove', touchMove$2, true);
    addEventListener('mousemove', touchMove$2, true);
    addEventListener('touchend', touchUp$2, true);
    addEventListener('mouseup', touchUp$2, true)
    ;({ x: posX$1, y: posY$1 } = getClientXYFromEvent(e));
    activeElement = document.activeElement;
  }
  allowClick = true;
}
function touchDownX( e) {
  if (isValidTouch(e)) {
    initDown$1(e);
    ELEMENTS_FOR_X.push(this);
  }
}
function touchDownY( e) {
  if (isValidTouch(e)) {
    initDown$1(e);
    ELEMENTS_FOR_Y.push(this);
  }
}
function touchDown( e) {
  if (isValidTouch(e)) {
    initDown$1(e);
    ELEMENTS_FOR_X.push(this);
    ELEMENTS_FOR_Y.push(this);
  }
}
const TOUCH = {
  __proto__: null,
  x: touchDownX,
  y: touchDownY,
  xy: touchDown,
}; 

function touchMove$2(e) {
  if (isValidTouch(e)) {
    const { x, y } = getClientXYFromEvent(e);
    const offsetX = posX$1 - (posX$1 = x);
    const offsetY = posY$1 - (posY$1 = y);

    if (offsetX)
      for (let a = ELEMENTS_FOR_X, i = a.length; i-- > 0; ) {
        const node = a[i];
        const prev = node.scrollLeft;
        node.scrollLeft += offsetX;
        if (prev !== node.scrollLeft) {
          if (allowClick) setCursorGrabbing(), (allowClick = false);
          break
        }
      }

    if (offsetY)
      for (let a = ELEMENTS_FOR_Y, i = a.length; i-- > 0; ) {
        const node = a[i];
        const prev = node.scrollTop;
        node.scrollTop += offsetY;
        if (prev !== node.scrollTop) {
          if (allowClick) setCursorGrabbing(), (allowClick = false);
          allowClick = false;
          break
        }
      }
  }
}

function touchUp$2(e) {
  isDown$1 = false;
  setCursorEmpty$2();
  ELEMENTS_FOR_X.length = ELEMENTS_FOR_Y.length = 0;
  removeEventListener('touchmove', touchMove$2, true);
  removeEventListener('mousemove', touchMove$2, true);
  removeEventListener('touchend', touchUp$2, true);
  removeEventListener('mouseup', touchUp$2, true);
  if (
    activeElement !== (activeElement = document.activeElement) &&
    activeElement
  ) {
(activeElement ).blur();
  }
}

function onClick(e) {
  if (!allowClick) {
    stopPropagation(e);
    allowClick = true;
  }
}

function setCursorGrabbing() {
  // node.style.setProperty('cursor', 'grabbing', 'important')
  document.body.classList.add(style$4._grabbing);
}
function setCursorEmpty$2() {
  // node.style.setProperty('cursor', '')
  document.body.classList.remove(style$4._grabbing);
}

// export function ScrollView({
//   wheel,
//   touch,
//   children,
// }: {
//   wheel?: null | 'x' | 'y'
//   touch?: null | 'x' | 'y' | 'xy'
//   children?: any
// }) {
//   return (
//     <section
//       className={style._scroll_view}
//       onWheel={WHEEL[wheel!]}
//       onClickCapture={onClick}
//       onMousedownCapture={TOUCH[touch!]}
//       onTouchstartCapture={TOUCH[touch!]}
//     >
//       {children}
//     </section>
//   )
// }

function useScrollView({
  // ref,
  wheel,
  touch,
}



) {
  const ref = pe(null);

  $(() => {
    const node = ref.current; 
    if (node) {
      const onWheel = wheel && WHEEL[wheel];
      const onTouch = touch && TOUCH[touch];
      // node.style.setProperty('overflow', 'hidden', 'important')

      node.addEventListener('click', onClick, true);
      if (onWheel) node.addEventListener('wheel', onWheel);
      if (onTouch) {
        node.addEventListener('touchstart', onTouch, true);
        node.addEventListener('mousedown', onTouch, true);
      }
      return () => {
        node.removeEventListener('click', onClick, true);
        if (onWheel) node.removeEventListener('wheel', onWheel);
        if (onTouch) {
          node.removeEventListener('touchstart', onTouch, true);
          node.removeEventListener('mousedown', onTouch, true);
        }
      }
    }
  }, [wheel, touch]);

  return ref
}var style$3 = {"_context_menu":"optmejzmp8w_context_menu"};const ContextMenuContext = xe(null );

function ContextMenuProvider({ children }) {
  // const { 0: contextMenu, 1: setContextMenu } = R.useState(null)
  const state = fe(null);

  return (
    me(ContextMenuContext.Provider, { value: state, children: [
      children
      , me(ContextMenu, { state: state,} )
    ]})
  )
}

function useContextMenu() {
  return re(ContextMenuContext)
}

function ContextMenu({ state }) {
  return (
    me('section', {
      className: [style$3._context_menu, 'fade', state[0] && 'show'],
      onClick: state[0] && (() => state[1](null)),
 children: 
      state[0] && me(ContextMenuForms, { state: state,} )
    })
  )
}

function ContextMenuForms({ state }) {
  const refSubState = pe(null);
  const subState = fe(null);
  refSubState.current = subState;

  return [
    me(ContextMenuForm, {
      refSubState: refSubState,
      setData: state[1],
      data: state[0],}
    ),
    subState[0] && me(ContextMenuForms, { state: subState,} ),
  ]
}

function ContextMenuForm({
  data: { x, y, btnWidth, schema },
  setData,
  refSubState: refSS,
}



) {
  const refForm = useScrollView({ wheel: 'y', touch: 'y' });

  $(() => {
    let node = refForm.current;
    if (node) {
      node.focus();
      const { innerWidth: W, innerHeight: H } = window;
      const { offsetWidth: w, offsetHeight: h } = node;
      const nodeStyle = node.style;

      if (x + w > W) x += btnWidth - w;

      nodeStyle.left = `${clamp(x, 2, W - w - 2)}px`;
      nodeStyle.top = `${clamp(y, 2, H - h - 2)}px`;
    }
    return refSS.current[1]
  }, [x, y, btnWidth]);

  return (
    me('form', {
      ref: refForm,
      tabIndex: 0,
      onClick: function (e) {
        stopPropagation(e);
        const { 0: subData, 1: setSubData } = refSS.current;
        subData ? setSubData(null) : setData(null);
      },
 children: 
      schema.map((block) => {
        return (
          me('div', { children: 
            Object.keys(block).map((dict) => {
              const label = dictionary(dict );
              const subContextMenuSchema = block[dict ];

              switch (getObjectName(subContextMenuSchema)) {
                case 'Null':
                case 'Undefined':
                  return (
                    me('button', {
                      type: "button",
                      tabIndex: -1,
                      ariaDisabled: "true",
                      className: [styleMenuBtn._menu_btn, 'disabled'],
 children: [
                      label, " " , me('code', { children: "Ctrl+W"})
                    ]})
                  )

                case 'Array':
                  return (
                    me('button', {
                      type: "button",
                      tabIndex: 0,
                      className: styleMenuBtn._menu_btn,
                      onClick: function ( e) {
                        stopPropagation(e);
                        const { 0: subData, 1: setSubData } = refSS.current;

                        if (
                          subData &&
                          subData.schema === subContextMenuSchema
                        ) {
                          setSubData(null);
                        } else {
                          const rect = this.getBoundingClientRect();
                          const width =
                            this.parentElement.parentElement.offsetWidth;
                          setSubData({
                            x: rect.left + width, // - 2.5,
                            y: rect.top - rect.height * 0.1875,
                            btnWidth: -width - (width - rect.width), // + 5,
                            schema: subContextMenuSchema ,
                          });
                        }
                      },



 children: [
                      label, " " , me('code', { className: "arrow", children: '›'})
                    ]})
                  )

                default:
                  throw `${label} - incorrect child in ContextMenu`
              }
            })
          })
        )
      })
    })
  )
}function MenuBar({ schema }) {
  const id = ue();
  const refContextMenu = pe(null);
  const contextMenuData = (refContextMenu.current = useContextMenu())[0];

  // console.log('MenuBar')

  // const ref = R.useRef<any>(null)
  // let cache = ref.current
  // if (!cache) {
  //   cache = ref.current = {
  //     onKeydown(e: KeyboardEvent) {
  //       stopPropagation(e)
  //       switch (e.code) {
  //         case 'Tab':
  //         case 'Enter':
  //         case 'Space':
  //           break
  //         // case 'Escape':
  //         //   preventDefault(e)
  //         //   break
  //         default:
  //           console.log([e.code, e])
  //           preventDefault(e)
  //       }
  //     },
  //   }
  // }
  return (
    me('section', {
      className: [
        style$5._menubar,
        contextMenuData && contextMenuData.id === id && 'show',
      ],

 children: 
      me(MenuBarForm, { id: id, schema: schema, refContextMenu: refContextMenu,} )
    })
  )
}

function MenuBarForm({
  id,
  schema,
  refContextMenu: refCM,
}



) {
  const refForm = useScrollView({ wheel: 'x', touch: 'x' });
  console.log('MenuBarForm');

  return (
    me('form', {
      ref: refForm,
      tabIndex: 0,
      onSubmit: preventDefault,
      onClick: function (e) {
        stopPropagation(e);
        const { 0: cmData, 1: setCmData } = refCM.current;
        if (cmData && cmData.id === id) setCmData(null);
      },
 children: 
      schema.map((block) => {
        return (
          me('div', { children: 
            Object.keys(block).map((dict) => {
              const label = dictionary(dict );
              const contextMenuSchema = block[dict ];

              switch (getObjectName(contextMenuSchema)) {
                case 'Null':
                case 'Undefined':
                  return (
                    me('input', {
                      type: "button",
                      tabIndex: -1,
                      value: label,
                      ariaDisabled: "true",
                      className: [styleMenuBtn._menu_btn, 'disabled'],}
                    )
                  )

                case 'Array':
                  return (
                    me('input', {
                      type: "button",
                      tabIndex: 0,
                      value: label,
                      className: styleMenuBtn._menu_btn,
                      onClick: function ( e) {
                        stopPropagation(e);
                        const { 0: cmData, 1: setCmData } = refCM.current;
                        if (cmData && cmData.schema === contextMenuSchema) {
                          setCmData(null);
                        } else {
                          const rect = this.getBoundingClientRect();
                          setCmData({
                            id,
                            x: rect.left,
                            y: rect.top + rect.height + 9,
                            btnWidth: rect.width,
                            schema: contextMenuSchema,
                          });
                        }
                      },}
                      // onMouseenter={function (this: HTMLInputElement, e) {
                      //   const { 0: cmData, 1: setCmData } = refCM.current!
                      //   if (
                      //     cmData &&
                      //     cmData.id === id &&
                      //     cmData.schema !== contextMenuSchema
                      //   ) {
                      //     this.click()
                      //   }
                      // }}
                    )
                  )

                default:
                  throw `${label} - incorrect data in MenuBar`
              }
            })
          })
        )
      })
    })
  )
}const MAIN_MENU_BAR_SCHEMA = [
  {
    FILE: [
      { NEW: null, OPEN: null },
      { SAVE: null, SAVE_AS: null },
      { IMPORT: null, EXPORT: null },
    ],
    EDIT: [
      { UNDO: null, REDO: null },
      { HOLD: null, FETCH: null },
      { DELETE: null, CLONE: null },
      { MOVE: null, ROTATE: null, SCALE: null, PLACEMENT: null },
      { SELECT_ALL: null, SELECT_NONE: null, SELECT_INVERT: null },
      {
        SELECT_SIMILAR: null,
        SELECT_INSTANCES: null,
        SELECT_BY: [{ NAME: null, LAYER_WITH_DOTS: null, COLOR: null }],
      },

      {
        SELECTION_REGION: [
          {
            RECTANGULAR_REGION: null,
            CIRCULAR_REGION: null,
            FENCE_REGION: null,
            LASSO_REGION: null,
            PAINT_SELECTION_REGION: null,
          },
          { WINDOW: null, CROSSING: null },
        ],
      },
      { MANAGE_SELECTION_SETS_WITH_DOTS: null },
      { OBJECT_PROPERTIES_WITH_DOTS: null },
    ],
  },
  {
    CREATE: null,
    MODIFIERS: null,
    ANIMATION: null,
    GRAPH_EDITORS: null,
    RENDERING: null,
  },
  {
    TOOLS: [
      {
        SCENE_EXPORTER_WITH_DOTS: null,
        LAYER_EXPORTER_WITH_DOTS: null,
        CREASE_EXPORTER_WITH_DOTS: null,
      },
      {
        CONTAINERS: [
          { INHERIT_CONTAINER: null, CREATE_CONTAINER_FROM_SELECTION: null },
          { LOAD_CONTAINER: null, UNLOAD_CONTAINER: null },
          {
            OPEN_CONTAINER: null,
            CLOSE_CONTAINER: null,
            UPDATE_CONTAINER: null,
            EDIT_CONTAINER: null,
          },
          {
            LOCAL_CONTENT: [
              {
                ADD_SELECTED_TO_CONTAINER: null,
                REMOVE_SELECTED_FROM_CONTAINER: null,
                SAVE_CONTAINER: null,
                RELOAD_CONTAINER: null,
              },
            ],
            INHERITED_CONTENT: [{ MERGE_CONTAINER_SOURCE: null }],
          },
        ],
      },
      { ISOLATE_SELECTION: null, END_ISOLATE: null },
      { DISPLAY_FLOATER_WITH_DOTS: null },
      {
        MIRROR_WITH_DOTS: null,
        ARRAY_WITH_DOTS: null,
        ALIGN: [
          {
            ALIGN_WITH_DOTS: null,
            QUICK_ALIGN: null,
            SPACING_TOOL_WITH_DOTS: null,
            CLONE_AND_ALIGN_WITH_DOTS: null,
          },
          {
            ALIGN_TO_VIEW_WITH_DOTS: null,
            NORMAL_ALIGN_WITH_DOTS: null,
            ALIGN_CAMERA: null,
            PLACE_HIGHLIGHT: null,
          },
        ],
      },
      { SNAPSHOT_WITH_DOTS: null },
      { RENAME_OBJECTS_WITH_DOTS: null },
      {
        ASSIGN_VERTEX_COLORS_WITH_DOTS: null,
        COLOR_CLIPBOARD_WITH_DOTS: null,
        PERSPECTIVE_MATCH_WITH_DOTS: null,
      },
      { VIEWPORT_CANVAS_WITH_DOTS: null },
      {
        GRIDS_AND_SNAPS: [
          { GRID_AND_SNAP_SETTINGS_WITH_DOTS: null },
          {
            SHOW_HOME_GRID: null,
            ACTIVATE_HOME_GRID: null,
            ACTIVATE_GRID_OBJECT: null,
            ALIGN_GRID_TO_VIEW: null,
          },
          {
            SNAPS_TOGGLE: null,
            ANGLE_SNAP_TOGGLE: null,
            PERCENT_SNAP_TOGGLE: null,
            ENABLE_AXIS_CONSTRAINTS_IN_SNAPS: null,
          },
        ],
        MEASURE_DISTANCE_WITH_DOTS: null,
      },
      {
        CHANNEL_INFO_WITH_DOTS: null,
        MESH_INSPECTOR: [
          { ACTIVATE_MESH_INSPECTOR: null, MESH_AUTO_REPAIR: null },
        ],
      },
    ],
    GROUP: [
      { GROUP_WITH_DOTS: null, UNGROUP: null },
      { OPEN: null, OPEN_RECURSIVELY: null, CLOSE: null },
      { ATTACH: null, DETACH: null },
      { EXPLODE: null },
      {
        ASSEMBLE: [
          { ASSEMBLE: null, DISASSEMBLE: null },
          { OPEN: null, CLOSE: null },
          { ATTACH: null, DETACH: null },
          { EXPLODE: null },
        ],
      },
    ],
    VIEWS: null,
  },

  {
    CUSTOMIZE: null,
    SCRIPTING: null,
    HELP: null,
  },
];

function MainMenuBar() {
  return me(MenuBar, { schema: MAIN_MENU_BAR_SCHEMA,})
}var style$2 = {"_toolbar":"i8pak6of4kw_toolbar"};function ToolBar({ schema }) {
  return (
    me('section', { className: style$2._toolbar, children: 
      me(ToolBarForm, { schema: schema,} )
    })
  )
}

function ToolBarForm({ schema }) {
  const refForm = useScrollView({ wheel: 'x', touch: 'x' });
  return (
    me('form', { ref: refForm, tabIndex: 0, onSubmit: preventDefault, children: 
      schema.map((block) => {
        return (
          me('div', { children: 
            Object.keys(block).map((dict) => {
              const label = dictionary(dict );
              const { svgId, contextMenu } = block[dict ];

              switch (getObjectName(contextMenu)) {
                case 'Null':
                case 'Undefined':
                  return (
                    me('button', { type: "button", title: label, children: 
                      me('svg', { children: 
                        me('use', { href: svgId,})
                      })
                    })
                  )

                case 'Array':
                  return
              }
            })
          })
        )
      })
    })
  )
}var svgUndo = "/build/icons.svg?icx24dwgs40#uo1xuypkvs0_undo";var svgRedo = "/build/icons.svg?r39oy344t8g#unqymoh2fj4_redo";const MAIN_TOOL_BAR_SCHEMA = [
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
];

function MainToolBar() {
  return me(ToolBar, { schema: MAIN_TOOL_BAR_SCHEMA,} )
}var style$1 = {"_split_grid":"z6q2jl2cmc0_split_grid","_move_row":"z6q2jl2cmc0_move_row","_move_col":"z6q2jl2cmc0_move_col"};let globalStart = 0;
let globalNodeStyle;
let globalDirection;
let globalItem;
let globalBasis = 0;

function setCursorMoveRow() {
  document.body.classList.add(style$1._move_row);
}
function setCursorMoveCol() {
  document.body.classList.add(style$1._move_col);
}
function setCursorEmpty$1() {
  const classList = document.body.classList;
  classList.remove(style$1._move_row);
  classList.remove(style$1._move_col);
}

function touchMove$1(e) {
  if (globalNodeStyle && isValidTouch(e)) {
    let coord = globalStart;
    let offset = 0;
    switch (globalDirection) {
      case 'row':
        coord = getClientXYFromEvent(e).x;
        break
      case 'col':
        coord = getClientXYFromEvent(e).y;
        break
    }
    switch (globalItem) {
      case 'one':
        offset = globalStart - coord;
        break
      case 'two':
        offset = -globalStart + coord;
        break
    }
    globalNodeStyle.flex = `0 0 ${globalBasis - offset}px`;
  }
}
function touchUp$1(e) {
  globalNodeStyle = null;
  setCursorEmpty$1();
  removeEventListener('touchmove', touchMove$1, true);
  removeEventListener('mousemove', touchMove$1, true);
  removeEventListener('touchend', touchUp$1, true);
  removeEventListener('mouseup', touchUp$1, true);
}

function SplitGrid({
  children,
  direction,
  item,
  size,
  // unit,
}





) {
  const refDivOne = pe(null);
  const refDivTwo = pe(null);

  $(() => {
    const nodeOne = refDivOne.current;
    const nodeTwo = refDivTwo.current;
    if (nodeOne && nodeTwo) {
      const nodeStyleOne = nodeOne.style;
      const nodeStyleTwo = nodeTwo.style;

      // if (unit !== 'px' && unit !== '%') {
      //   throw `SplitGrid: 'unit' must be "px" | "%"`
      // }
      if (direction !== 'row' && direction !== 'col') {
        throw `SplitGrid: 'direction' must be "row" | "col"`
      }

      switch (item) {
        case 'one':
          nodeStyleTwo.flex = '1 1 auto';
          nodeStyleOne.flex = `0 0 ${size}px`;
          break
        case 'two':
          nodeStyleOne.flex = '1 1 auto';
          nodeStyleTwo.flex = `0 0 ${size}px`;
          break
        default:
          throw `SplitGrid: 'item' must be "one" | "two"`
      }
    }
  }, [direction, item, size]);

  const refForDivListener = pe(null);
  let divListener = refForDivListener.current;
  if (!divListener) {
    divListener = refForDivListener.current = function (
      
      e
    ) {
      if (!globalNodeStyle && isValidTouch(e)) {
        const nodeOne = refDivOne.current;
        const nodeTwo = refDivTwo.current;
        if (nodeOne && nodeTwo) {
          const node = item === 'one' ? nodeOne : nodeTwo;
          switch ((globalDirection = direction)) {
            case 'row':
              setCursorMoveRow();
              globalBasis = node.clientWidth;
              globalStart = getClientXYFromEvent(e).x;
              break
            case 'col':
              setCursorMoveCol();
              globalBasis = node.clientHeight;
              globalStart = getClientXYFromEvent(e).y;
              break
            default:
              return
          }
          globalItem = item;
          globalNodeStyle = node.style;
          addEventListener('touchmove', touchMove$1, true);
          addEventListener('mousemove', touchMove$1, true);
          addEventListener('touchend', touchUp$1, true);
          addEventListener('mouseup', touchUp$1, true);
        }
      }
    };
  }

  return (
    me('section', { className: [style$1._split_grid, direction], children: [
      me('div', { ref: refDivOne, className: "one", children: 
        children[0]
      })
      , me('div', { ref: refDivTwo, className: "two", children: 
        children[1]
      })
      , me('div', {
        className: "div",
        onContextmenu: preventDefault,
        onMousedownCapture: divListener,
        onTouchstartCapture: divListener,
})
    ]})
  )
}var style = {"_viewport":"ndxminast5s_viewport","_move_x":"ndxminast5s_move_x","_move_y":"ndxminast5s_move_y","_move_xy":"ndxminast5s_move_xy"};let isDown = false;
let globalNodeTop;
let globalNodeTopLeft;
let globalNodeBottomLeft;
let posX = 0;
let posY = 0;
let clientWidth = 0;
let clientHeight = 0;

function setCursorMoveX() {
  document.body.classList.add(style._move_x);
}
function setCursorMoveY() {
  document.body.classList.add(style._move_y);
}
function setCursorMoveXY() {
  document.body.classList.add(style._move_xy);
}
function setCursorEmpty() {
  const classList = document.body.classList;
  classList.remove(style._move_x);
  classList.remove(style._move_y);
  classList.remove(style._move_xy);
}

function initDown() {
  isDown = true;
  addEventListener('touchmove', touchMove, true);
  addEventListener('mousemove', touchMove, true);
  addEventListener('touchend', touchUp, true);
  addEventListener('mouseup', touchUp, true);
}

function touchMove(e) {
  if (isValidTouch(e)) {
    const { x, y } = getClientXYFromEvent(e);

    if (globalNodeTop) {
      globalNodeTop.style.flex = `0 0 ${clientHeight - (posY - y)}px`;
    }

    if (globalNodeTopLeft) {
      globalNodeTopLeft.style.flex =
        globalNodeBottomLeft.style.flex = `0 0 ${clientWidth - (posX - x)}px`;
    }
  }
}
function touchUp() {
  isDown = false;
  setCursorEmpty();

  if (globalNodeTop) {
    const cH = globalNodeTop.clientHeight;
    const pH = globalNodeTop.parentElement.clientHeight;
    globalNodeTop.style.flex = `0 0 ${(100 * cH) / pH}%`;
    globalNodeTop = null;
  }

  if (globalNodeTopLeft) {
    const cW = globalNodeTopLeft.clientWidth;
    const pW = globalNodeTopLeft.parentElement.clientWidth;
    globalNodeTopLeft.style.flex =
      globalNodeBottomLeft.style.flex = `0 0 ${(100 * cW) / pW}%`;
    globalNodeTopLeft = globalNodeBottomLeft = null;
  }

  removeEventListener('touchmove', touchMove, true);
  removeEventListener('mousemove', touchMove, true);
  removeEventListener('touchend', touchUp, true);
  removeEventListener('mouseup', touchUp, true);
}

function Viewport({
  children,
}

) {
  const refNodeTop = pe(null);
  const refNodeTopLeft = pe(null);
  const refNodeBottomLeft = pe(null);

  const refForListeners = pe



(null);
  let listeners = refForListeners.current;
  if (!listeners) {
    listeners = refForListeners.current = {
      top( e) {
        if (this !== e.target) return
        if (!isDown && isValidTouch(e)) {
          const nodeTop = refNodeTop.current;
          if (nodeTop) {
            setCursorMoveY();
            globalNodeTop = nodeTop;
            globalNodeTopLeft = globalNodeBottomLeft = null
            ;({ clientHeight } = nodeTop)
            ;({ y: posY } = getClientXYFromEvent(e));
            initDown();
          }
        }
      },
      left( e) {
        if (this !== e.target) return
        if (!isDown && isValidTouch(e)) {
          const nodeTopLeft = refNodeTopLeft.current;
          const nodeBottomLeft = refNodeBottomLeft.current;
          if (nodeTopLeft && nodeBottomLeft) {
            setCursorMoveX();
            globalNodeTop = null;
            globalNodeTopLeft = nodeTopLeft;
            globalNodeBottomLeft = nodeBottomLeft
            ;({ clientWidth } = nodeTopLeft)
            ;({ x: posX } = getClientXYFromEvent(e));
            initDown();
          }
        }
      },
      cross( e) {
        if (this !== e.target) return
        if (!isDown && isValidTouch(e)) {
          const nodeTop = refNodeTop.current;
          const nodeTopLeft = refNodeTopLeft.current;
          const nodeBottomLeft = refNodeBottomLeft.current;
          if (nodeTop && nodeTopLeft && nodeBottomLeft) {
            setCursorMoveXY();
            globalNodeTop = nodeTop;
            globalNodeTopLeft = nodeTopLeft;
            globalNodeBottomLeft = nodeBottomLeft
            ;({ clientHeight } = nodeTop)
            ;({ clientWidth } = nodeTopLeft)
            ;({ x: posX, y: posY } = getClientXYFromEvent(e));
            initDown();
          }
        }
      },
    };
  }

  return (
    me('section', { className: style._viewport, children: [
      me('div', { className: "top", ref: refNodeTop, children: [
        me('div', { className: "left", ref: refNodeTopLeft, children: 
          children.topLeft
        })
        , me('div', { className: "right", children: children.topRight})
        , me('div', {
          className: "div",
          onContextmenu: preventDefault,
          onMousedownCapture: listeners.left,
          onTouchstartCapture: listeners.left,
})
      ]})
      , me('div', { className: "bottom", children: [
        me('div', { className: "left", ref: refNodeBottomLeft, children: 
          children.bottomLeft
        })
        , me('div', { className: "right", children: children.bottomRight})
        , me('div', {
          className: "div",
          onContextmenu: preventDefault,
          onMousedownCapture: listeners.left,
          onTouchstartCapture: listeners.left,
 children: 
          me('div', {
            className: "cross",
            onContextmenu: preventDefault,
            onMousedownCapture: listeners.cross,
            onTouchstartCapture: listeners.cross,
})
        })
      ]})
      , me('div', {
        className: "div",
        onContextmenu: preventDefault,
        onMousedownCapture: listeners.top,
        onTouchstartCapture: listeners.top,
})
    ]})
  )
}function MainSurface() {
  return (
    me(SplitGrid, { direction: "row", item: "two", size: 50, children: 
      [
        me(SplitGrid, { direction: "row", item: "one", size: 50, children: 
          [
            'Left',
            me(Viewport, { children: 
              {
                topLeft: 1,
                topRight: 2,
                bottomLeft: 3,
                bottomRight: 4,
              }
            }),
          ]
        }),
        'Right',
      ]
    })
  )
}

function Main() {
  console.log('Main');
  return (
    me('section', { className: style$6._main, children: [
      me('div', { className: "menubar", children: 
        me(MainMenuBar, {} )
      })
      , me('div', { className: "toolbar", children: 
        me(MainToolBar, {} )
      })
      , me('div', { className: "surface", children: 
        me(MainSurface, {} )
      })
      , me('div', { className: "control", children: "control"})
    ]})
  )
}function App() {
  return (
    me(ContextMenuProvider, { children: 
      me(Main, {} )
    })
  )
}addEventListener('keydown', (e) => {
  console.log('window keydown:', e.key);
});

// addEventListener('focus', (e) => {
//   console.log('window focus:', e)
// })

// addEventListener('blur', (e) => {
//   console.log('window blur:', e)
// })

console.log(ye(me(App, {} ), document.body));