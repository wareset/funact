console.log('barely-react')

// export const test = () => import('@/ui/Header')
// export const test2 = () => import('@/ui/bs/Container')
// ;(async () => {
//   console.log(await test())
//   console.log(await test2())
// })()

import { render, useId, useState, useEffect } from 'barely-react'

import { Header } from '@/ui/Header'

import { Container } from '@/ui/bs/Container'
import { Row } from '@/ui/bs/Row'
import { Col } from '@/ui/bs/Col'

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from '@/ui/bs/Accordion'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>1111</Col>
          <Col>2222</Col>
        </Row>
        <Accordion>
          <AccordionItem>
            <AccordionHeader>Accordion Item #1</AccordionHeader>
            <AccordionBody>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem expanded>
            <AccordionHeader>Accordion Item #2</AccordionHeader>
            <AccordionBody>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem expanded>
            <AccordionHeader>Accordion Item #3</AccordionHeader>
            <AccordionBody>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>{' '}
          <AccordionItem>
            <AccordionHeader>Accordion Item #4</AccordionHeader>
            <AccordionBody>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  )
}

console.log(render(document.body, <App />))

// import Bootstrap from '@/routes/bootstrap/page'

// function App() {
//   return <Bootstrap />
// }

// console.log(render(document.body, <App />))
