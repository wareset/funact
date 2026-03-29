console.log('heract')

// export const test = () => import('@/ui/Header')
// export const test2 = () => import('@/ui/bs/Container')
// ;(async () => {
//   console.log(await test())
//   console.log(await test2())
// })()

// import { createRoot } from 'barely-react'

// import Test from '@/routes/test/page'

// console.log(createRoot(document.body).render(<Test />))

// import Bootstrap from '@/routes/bootstrap/page'

// function App() {
//   return <Bootstrap />
// }

// console.log(render(document.body, <App />))

import { Icon } from '@/ui'
import { Container, Progress, Spinner } from '@/ui'

function Test() {
  console.log(12)
  // return (<h1>H1</h1>)
}

function App() {
  return (
    <Container sm>
      <div className={['asd', 'zxc']} ariaAutoComplete={'qwe'} data-qwe={12}>
        work
        <div children={'sp'}></div>
        <Test />
        <Icon name='arrow-bar-left' className='aaaa'></Icon>
      </div>
      <div>
      </div>
    </Container>
  )
}

console.log(R.render(<App />, document.body))
