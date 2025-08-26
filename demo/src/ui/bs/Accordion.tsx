import { classnames } from 'barely-react'

import {
  CollapseGroup,
  Collapse,
  CollapseTrigger,
  CollapseContent,
} from './Collapse'

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: any
  flush?: boolean
  alwaysOpen?: boolean
}
export function Accordion({
  children,
  flush,
  alwaysOpen,
  ...attrs
}: AccordionProps) {
  return (
    <div
      {...attrs}
      className={classnames([
        'accordion',
        attrs.className,
        flush && 'accordion-flush'
      ])}
    >
      <CollapseGroup alwaysOpen={alwaysOpen}>{children}</CollapseGroup>
    </div>
  )
}

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: any
  expanded?: boolean
}
export function AccordionItem({
  children,
  expanded,
  ...attrs
}: AccordionItemProps) {
  return (
    <div {...attrs} className={classnames(['accordion-item', attrs.className])}>
      <Collapse group expanded={expanded}>
        {children}
      </Collapse>
    </div>
  )
}

export interface AccordionHeaderProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: any
  as?: React.ElementType
}
export function AccordionHeader({
  children,
  as: TagName = 'h2',
  ...attrs
}: AccordionHeaderProps) {
  return (
    <TagName className='accordion-header'>
      <CollapseTrigger
        {...attrs}
        className={classnames(['accordion-button', attrs.className])}
      >
        {children}
      </CollapseTrigger>
    </TagName>
  )
}

export interface AccordionBodyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: any
}
export function AccordionBody({ children, ...attrs }: AccordionBodyProps) {
  return (
    <CollapseContent className='accordion-collapse'>
      <div
        {...attrs}
        className={classnames(['accordion-body', attrs.className])}
      >
        {children}
      </div>
    </CollapseContent>
  )
}
