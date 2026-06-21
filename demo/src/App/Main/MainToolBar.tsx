import { ToolBar, TToolBarSchema } from '@/ui/ToolBar'

import svgUndo from '@/svg/undo.svg'
import svgRedo from '@/svg/redo.svg'

const MAIN_TOOL_BAR_SCHEMA: TToolBarSchema = [
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
  {
    UNDO: { svgId: svgUndo },
    REDO: { svgId: svgRedo },
  },
]

export function MainToolBar() {
  return <ToolBar schema={MAIN_TOOL_BAR_SCHEMA} />
}
