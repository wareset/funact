import style from './style.css'
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
  getClientXYFromEvent,
  dictionary,
  getObjectName,
} from '@/utils'

export type TToolBarSchema = {
  [K in TDictionaryKey]?: {
    svgId: string
    contextMenu?: null | TContextMenuSchema
  }
}[]

export function ToolBar({ schema }: { schema: TToolBarSchema }) {
  return (
    <section className={style._toolbar}>
      <ToolBarForm schema={schema} />
    </section>
  )
}

function ToolBarForm({ schema }: { schema: TToolBarSchema }) {
  const refForm = useScrollView<HTMLFormElement>({ wheel: 'x', touch: 'x' })
  return (
    <form ref={refForm} tabIndex={0} onSubmit={preventDefault}>
      {schema.map((block) => {
        return (
          <div>
            {Object.keys(block).map((dict) => {
              const label = dictionary(dict as TDictionaryKey)
              const { svgId, contextMenu } = block[dict as TDictionaryKey]!

              switch (getObjectName(contextMenu)) {
                case 'Null':
                case 'Undefined':
                  return (
                    <button type='button' title={label}>
                      <svg>
                        <use href={svgId}></use>
                      </svg>
                    </button>
                  )

                case 'Array':
                  return
              }
            })}
          </div>
        )
      })}
    </form>
  )
}
