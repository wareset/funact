import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from '@/bootstrap/bs/Components/Accordion'

export function AccordionItemWrapper({
  expanded,
  title,
  children,
}: {
  expanded?: boolean
  title: string
  children: any
}) {
  return (
    <AccordionItem expanded={expanded}>
      <AccordionHeader>{title}</AccordionHeader>
      <AccordionBody>{children}</AccordionBody>
    </AccordionItem>
  )
}
