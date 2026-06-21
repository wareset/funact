// console.log('heract')

// export const test = () => import('@/ui/Header')
// export const test2 = () => import('@/ui/bs/Container')
// ;(async () => {
//   console.log(await test())
//   console.log(await test2())
// })()

import '@/style.css'
import { App } from '@/App'

addEventListener('keydown', (e) => {
  console.log('window keydown:', e.key)
})

// addEventListener('focus', (e) => {
//   console.log('window focus:', e)
// })

// addEventListener('blur', (e) => {
//   console.log('window blur:', e)
// })

console.log(R.render(<App />, document.body))
