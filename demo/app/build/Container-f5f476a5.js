
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import {v as ve,C,i as isString}from'./index-56aa294f.js';function Container({
  children,
  as: TagName = 'div',
  fluid,
  ...attrs
}) {
  return (
    ve(TagName, {
      ...attrs,
      className: C(
        'container' + (fluid ? (isString(fluid) ? '-' + fluid : '-fluid') : ''),
        attrs.className
      ),}

      , children
    )
  )
}export{Container};