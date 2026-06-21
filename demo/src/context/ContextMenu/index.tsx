import style from './style.css'
import styleMenuBtn from '@/css/menu_btn.css'
import { TDictionaryKey } from '@/schema'
import { useScrollView } from '@/hooks/useScrollView'
import {
  clamp,
  dictionary,
  getObjectName,
  preventDefault,
  preventDefaultAndStopPropagation,
  stopPropagation,
} from '@/utils'

export type TContextMenuSchema = {
  [K in TDictionaryKey]?: null | TContextMenuSchema | ((e: MouseEvent) => any)
}[]

export type TContextMenuData = {
  id?: string
  x: number
  y: number
  btnWidth: number
  schema: TContextMenuSchema
}

export type TContextMenuContext = [
  contextMenuData: null | TContextMenuData | undefined,
  setContextMenuData: (
    value:
      | TContextMenuData
      | ((prevState: TContextMenuData | null) => TContextMenuData | null)
      | null
  ) => void,
]

const ContextMenuContext = R.createContext<TContextMenuContext>(null as any)

export function ContextMenuProvider({ children }: { children?: any }) {
  // const { 0: contextMenu, 1: setContextMenu } = R.useState(null)
  const state = R.useState<TContextMenuData | null>(null)

  return (
    <ContextMenuContext.Provider value={state}>
      {children}
      <ContextMenu state={state} />
    </ContextMenuContext.Provider>
  )
}

export function useContextMenu() {
  return R.useContext(ContextMenuContext)
}

function ContextMenu({ state }: { state: TContextMenuContext }) {
  return (
    <section
      className={[style._context_menu, 'fade', state[0] && 'show']}
      onClick={state[0] && (() => state[1](null))}
    >
      {state[0] && <ContextMenuForms state={state} />}
    </section>
  )
}

function ContextMenuForms({ state }: { state: TContextMenuContext }) {
  const refSubState = R.useRef<TContextMenuContext>(null)
  const subState = R.useState<TContextMenuData | null>(null)
  refSubState.current = subState

  return [
    <ContextMenuForm
      refSubState={refSubState}
      setData={state[1]}
      data={state[0]!}
    />,
    subState[0] && <ContextMenuForms state={subState} />,
  ]
}

function ContextMenuForm({
  data: { x, y, btnWidth, schema },
  setData,
  refSubState: refSS,
}: {
  data: TContextMenuData
  setData: TContextMenuContext[1]
  refSubState: R.RefObject<TContextMenuContext | null>
}) {
  const refForm = useScrollView<HTMLFormElement>({ wheel: 'y', touch: 'y' })

  R.useEffect(() => {
    let node = refForm.current
    if (node) {
      node.focus()
      const { innerWidth: W, innerHeight: H } = window
      const { offsetWidth: w, offsetHeight: h } = node
      const nodeStyle = node.style

      if (x + w > W) x += btnWidth - w

      nodeStyle.left = `${clamp(x, 2, W - w - 2)}px`
      nodeStyle.top = `${clamp(y, 2, H - h - 2)}px`
    }
    return refSS.current![1]
  }, [x, y, btnWidth])

  return (
    <form
      ref={refForm}
      tabIndex={0}
      onClick={function (e) {
        stopPropagation(e)
        const { 0: subData, 1: setSubData } = refSS.current!
        subData ? setSubData(null) : setData(null)
      }}
    >
      {schema.map((block) => {
        return (
          <div>
            {Object.keys(block).map((dict) => {
              const label = dictionary(dict as TDictionaryKey)
              const subContextMenuSchema = block[dict as TDictionaryKey]

              switch (getObjectName(subContextMenuSchema)) {
                case 'Null':
                case 'Undefined':
                  return (
                    <button
                      type='button'
                      tabIndex={-1}
                      ariaDisabled='true'
                      className={[styleMenuBtn._menu_btn, 'disabled']}
                    >
                      {label} <code>Ctrl+W</code>
                    </button>
                  )

                case 'Array':
                  return (
                    <button
                      type='button'
                      tabIndex={0}
                      className={styleMenuBtn._menu_btn}
                      onClick={function (this: HTMLButtonElement, e) {
                        stopPropagation(e)
                        const { 0: subData, 1: setSubData } = refSS.current!

                        if (
                          subData &&
                          subData.schema === subContextMenuSchema
                        ) {
                          setSubData(null)
                        } else {
                          const rect = this.getBoundingClientRect()
                          const width =
                            this.parentElement!.parentElement!.offsetWidth
                          setSubData({
                            x: rect.left + width, // - 2.5,
                            y: rect.top - rect.height * 0.1875,
                            btnWidth: -width - (width - rect.width), // + 5,
                            schema: subContextMenuSchema as TContextMenuSchema,
                          })
                        }
                      }}
                      // onMouseenter={function (this: HTMLButtonElement) {
                      //   this.click()
                      // }}
                    >
                      {label} <code className='arrow'>{'›'}</code>
                    </button>
                  )

                default:
                  throw `${label} - incorrect child in ContextMenu`
              }
            })}
          </div>
        )
      })}
    </form>
  )
}
