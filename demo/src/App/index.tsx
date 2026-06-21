import { Main } from './Main'
import { ContextMenuProvider } from '@/context/ContextMenu'

export function App() {
  return (
    <ContextMenuProvider>
      <Main />
    </ContextMenuProvider>
  )
}
