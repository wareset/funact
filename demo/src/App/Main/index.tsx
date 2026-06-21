import style from './style.css'

import { MainMenuBar } from './MainMenuBar'
import { MainToolBar } from './MainToolBar'

import { SplitGrid } from '@/ui/SplitGrid'
import { Viewport } from '@/components/Viewport'

function MainSurface() {
  return (
    <SplitGrid direction='row' item='two' size={50}>
      {[
        <SplitGrid direction='row' item='one' size={50}>
          {[
            'Left',
            <Viewport>
              {{
                topLeft: 1,
                topRight: 2,
                bottomLeft: 3,
                bottomRight: 4,
              }}
            </Viewport>,
          ]}
        </SplitGrid>,
        'Right',
      ]}
    </SplitGrid>
  )
}

export function Main() {
  console.log('Main')
  return (
    <section className={style._main}>
      <div className='menubar'>
        <MainMenuBar />
      </div>
      <div className='toolbar'>
        <MainToolBar />
      </div>
      <div className='surface'>
        <MainSurface />
      </div>
      <div className='control'>control</div>
    </section>
  )
}
