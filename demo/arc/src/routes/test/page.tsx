import { Header } from '@/bootstrap/Header'
import { Container } from '@/bootstrap/bs/Layout/Container'
import { Accordion } from '@/bootstrap/bs/Components/Accordion'

import { AccordionItemWrapper } from './_include/AccordionItemWrapper'

import Description from './_include/Description'

import HookUseState from './_include/HookUseState'
import HookUseReducer from './_include/HookUseReducer'

export default function () {
  return (
    <>
      <Header />

      <Container>
        <Description />

        <Accordion alwaysOpen>
          <AccordionItemWrapper title={'useState'} expanded>
            <HookUseState />
          </AccordionItemWrapper>

          <AccordionItemWrapper title={'useReducer'}>
            <HookUseReducer />
          </AccordionItemWrapper>

          <AccordionItemWrapper title={'useEffect'}>
            TODO: useEffect
          </AccordionItemWrapper>
        </Accordion>
      </Container>
    </>
  )
}
