import style from './style.css'
import styleMenuBtn from '@/css/menu_btn.css'
import { TDictionaryKey } from '@/schema'
import { useScrollView } from '@/hooks/useScrollView'
import {
  useContextMenu,
  TContextMenuSchema,
  TContextMenuContext,
} from '@/context/ContextMenu'
import {
  preventDefault,
  stopPropagation,
  preventDefaultAndStopPropagation,
  dictionary,
  getObjectName,
} from '@/utils'

export type TMenuBarSchema = {
  [K in TDictionaryKey]?: null | TContextMenuSchema
}[]

export function MenuBar({ schema }: { schema: TMenuBarSchema }) {
  const id = R.useId()
  const refContextMenu = R.useRef<TContextMenuContext>(null)
  const contextMenuData = (refContextMenu.current = useContextMenu())[0]

  // console.log('MenuBar')

  // const ref = R.useRef<any>(null)
  // let cache = ref.current
  // if (!cache) {
  //   cache = ref.current = {
  //     onKeydown(e: KeyboardEvent) {
  //       stopPropagation(e)
  //       switch (e.code) {
  //         case 'Tab':
  //         case 'Enter':
  //         case 'Space':
  //           break
  //         // case 'Escape':
  //         //   preventDefault(e)
  //         //   break
  //         default:
  //           console.log([e.code, e])
  //           preventDefault(e)
  //       }
  //     },
  //   }
  // }
  return (
    <section
      className={[
        style._menubar,
        contextMenuData && contextMenuData.id === id && 'show',
      ]}
      // onKeydown={cache.onKeydown}
    >
      <MenuBarForm id={id} schema={schema} refContextMenu={refContextMenu} />
    </section>
  )
}

function MenuBarForm({
  id,
  schema,
  refContextMenu: refCM,
}: {
  id: string
  schema: TMenuBarSchema
  refContextMenu: R.RefObject<TContextMenuContext | null>
}) {
  const refForm = useScrollView<HTMLFormElement>({ wheel: 'x', touch: 'x' })
  console.log('MenuBarForm')

  return (
    <form
      ref={refForm}
      tabIndex={0}
      onSubmit={preventDefault}
      onClick={function (e) {
        stopPropagation(e)
        const { 0: cmData, 1: setCmData } = refCM.current!
        if (cmData && cmData.id === id) setCmData(null)
      }}
    >
      {schema.map((block) => {
        return (
          <div>
            {Object.keys(block).map((dict) => {
              const label = dictionary(dict as TDictionaryKey)
              const contextMenuSchema = block[dict as TDictionaryKey]

              switch (getObjectName(contextMenuSchema)) {
                case 'Null':
                case 'Undefined':
                  return (
                    <input
                      type='button'
                      tabIndex={-1}
                      value={label}
                      ariaDisabled='true'
                      className={[styleMenuBtn._menu_btn, 'disabled']}
                    />
                  )

                case 'Array':
                  return (
                    <input
                      type='button'
                      tabIndex={0}
                      value={label}
                      className={styleMenuBtn._menu_btn}
                      onClick={function (this, e) {
                        stopPropagation(e)
                        const { 0: cmData, 1: setCmData } = refCM.current!
                        if (cmData && cmData.schema === contextMenuSchema) {
                          setCmData(null)
                        } else {
                          const rect = this.getBoundingClientRect()
                          setCmData({
                            id,
                            x: rect.left,
                            y: rect.top + rect.height + 9,
                            btnWidth: rect.width,
                            schema: contextMenuSchema!,
                          })
                        }
                      }}
                      // onMouseenter={function (this: HTMLInputElement, e) {
                      //   const { 0: cmData, 1: setCmData } = refCM.current!
                      //   if (
                      //     cmData &&
                      //     cmData.id === id &&
                      //     cmData.schema !== contextMenuSchema
                      //   ) {
                      //     this.click()
                      //   }
                      // }}
                    />
                  )

                default:
                  throw `${label} - incorrect data in MenuBar`
              }
            })}
          </div>
        )
      })}
    </form>
  )
}
