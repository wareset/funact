
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import {v as ve,C,l as le,o as oe,u as ue,Y,a as v,h as he}from'./index-56aa294f.js';import {Container}from'./Container-f5f476a5.js';function Icon({
  children,
  as: TagName = 'i',
  name,
  ...attrs
}) {
  return (
    ve(TagName, {
      ...attrs,
      className: C('bi bi-' + name, attrs.className),}
    )
  )
}const CollapseGroupContext = he(null);









const CollapseContext = he(null );





function Collapse({ children, group, expanded = false }) {
  const [show, setShow] = le(expanded);
  const id = oe();
  const context = ue(null);
  if (!context.current) {
    context.current = { id, show, setShow, timeoutId: null };
  }

  const collapseGroup = Y(CollapseGroupContext);
  v(() => {
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
        idx === -1 || collapses.splice(idx, 1);
      }
    }
  }, [collapseGroup]);

  v(() => {
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
          classList.remove('collapse'), classList.add('collapsing');
          style.height = '0';
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

        item.timeoutId = setTimeout(complete, 500); 
      }
    }
  }, [show]);

  return ve(CollapseContext, { value: context.current,}, children)
}





function CollapseTrigger({
  children,
  ...attrs
}) {
  const item = Y(CollapseContext);
  const nodeTriggerRef = (item.nodeTriggerRef = ue(null));
  const itemId = item.id;

  const clickRef = ue(null);
  if (!clickRef.current) {
    clickRef.current = () => {
      item.setShow(!item.show);
    };
  }

  return (
    ve('button', {
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





function CollapseContent({
  children,
  ...attrs
}) {
  const item = Y(CollapseContext);
  const nodeContentRef = ue(null);
  const itemId = item.id;

  item.nodeContentRef = nodeContentRef;

  return (
    ve('div', {
      ...attrs,
      ref: nodeContentRef,
      id: 'collapse-' + itemId,
      'aria-labelledby': 'heading-' + itemId,}

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
    ve(TagName, {
      'aria-current': active ? true : void 0,
      'aria-disabled': disabled ? true : void 0,
      ...attrs,
      className: C(
        'nav-link',
        attrs.className,
        dropdown && 'dropdown-toggle',
        active && 'active',
        disabled && 'disabled'
      ),}

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
    ve(TagName, {
      ...attrs,
      'data-bs-theme': theme,
      className: C(
        'navbar',
        attrs.className,
        expand && 'navbar-expand-' + expand,
        theme && 'navbar-' + theme,
        bg && 'bg-' + bg
      ),}

      , ve(Collapse, null, children)
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
    ve(TagName, { ...attrs, className: C('navbar-brand', attrs.className),}
      , children
    )
  )
}





function NavbarToggler(attrs) {
  return (
    ve(CollapseTrigger, {
      ...attrs,
      className: C('navbar-toggler', attrs.className),}

      , ve('span', { className: "navbar-toggler-icon",})
    )
  )
}





function NavbarCollapse({ children, ...attrs }) {
  return (
    ve(CollapseContent, {
      ...attrs,
      className: C('navbar-collapse', attrs.className),}

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
    ve(TagName, {
      ...attrs,
      className: C(
        'navbar-nav',
        attrs.className,
        scroll && 'navbar-nav-scroll'
      ),}

      , children
    )
  )
}function Header() {
  return (
    ve(Navbar, { as: "header", expand: "sm", theme: "dark", bg: "dark",}
      , ve(Container, { fluid: true,}
        , ve(NavbarBrand, null, "Barely-react")
        , ve(NavbarToggler, null )
        , ve(NavbarCollapse, null
          , ve(NavbarNav, { as: "nav",}
            , ve(NavLink, null, "TODO")
            , ve(NavLink, null, "TODO")
            , ve(NavLink, null, "TODO")
          )
          , ve('hr', { className: "text-white d-sm-none" ,} )
          , ve(NavbarNav, { as: "nav", className: "ms-sm-auto",}
            , ve(NavLink, {
              href: "https://github.com/wareset/barely-react",
              target: "_blank",
              rel: "noopener",}

              , ve(Icon, { name: "github",} )
              , ve('small', { className: "d-sm-none ms-2" ,}, "Github")
            )
          )
        )
      )
    )
  )
}export{Header};