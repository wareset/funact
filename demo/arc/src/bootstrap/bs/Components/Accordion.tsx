import {
  CollapseGroup,
  Collapse,
  CollapseTrigger,
  CollapseContent,
} from './Collapse'

export function Accordion({
  children,
  className,
  flush,
  alwaysOpen,
  ...attrs
}: R.JSX.IntrinsicElements['div'] & {
  flush?: boolean
  alwaysOpen?: boolean
}) {
  return (
    <div
      {...attrs}
      className={['accordion', className, flush && 'accordion-flush']}
    >
      <CollapseGroup alwaysOpen={alwaysOpen}>{children}</CollapseGroup>
    </div>
  )
}

export function AccordionItem({
  children,
  className,
  expanded,
  ...attrs
}: R.JSX.IntrinsicElements['div'] & { expanded?: boolean }) {
  return (
    <div {...attrs} className={['accordion-item', className]}>
      <Collapse group expanded={expanded}>
        {children}
      </Collapse>
    </div>
  )
}

export function AccordionHeader<T extends keyof HTMLElementTagNameMap = 'h2'>({
  children,
  className,
  as,
  ...attrs
}: R.JSX.IntrinsicElements[T] & {
  as?: T
}) {
  const TagName = (as as 'h2') || 'h2'
  return (
    <TagName className='accordion-header'>
      <CollapseTrigger {...attrs} className={['accordion-button', className]}>
        {children}
      </CollapseTrigger>
    </TagName>
  )
}

export function AccordionBody({
  children,
  className,
  ...attrs
}: R.JSX.IntrinsicElements['div']) {
  return (
    <CollapseContent className='accordion-collapse'>
      <div {...attrs} className={['accordion-body', className]}>
        {children}
      </div>
    </CollapseContent>
  )
}
