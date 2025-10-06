console.log('barely-react')

// export const test = () => import('@/ui/Header')
// export const test2 = () => import('@/ui/bs/Container')
// ;(async () => {
//   console.log(await test())
//   console.log(await test2())
// })()

import { render } from 'barely-react'

import Test from '@/routes/test/page'

console.log(render(document.body, <Test />))

// import Bootstrap from '@/routes/bootstrap/page'

// function App() {
//   return <Bootstrap />
// }

// console.log(render(document.body, <App />))
