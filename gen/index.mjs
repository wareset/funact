if (process.execArgv[0] === '--inspect') {
  console.log('gen-dev: started')
  setTimeout(() => console.log('gen-dev: stopped'), 1000 * 60 * 60 * 24 * 7 * 3)
}

// import './jsx.mjs'

;(async () => {
  await import('./jsx.mjs')
})()
