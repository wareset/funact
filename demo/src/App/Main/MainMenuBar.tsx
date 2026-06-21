import { MenuBar, TMenuBarSchema } from '@/ui/MenuBar'

const MAIN_MENU_BAR_SCHEMA: TMenuBarSchema = [
  {
    FILE: [
      { NEW: null, OPEN: null },
      { SAVE: null, SAVE_AS: null },
      { IMPORT: null, EXPORT: null },
    ],
    EDIT: [
      { UNDO: null, REDO: null },
      { HOLD: null, FETCH: null },
      { DELETE: null, CLONE: null },
      { MOVE: null, ROTATE: null, SCALE: null, PLACEMENT: null },
      { SELECT_ALL: null, SELECT_NONE: null, SELECT_INVERT: null },
      {
        SELECT_SIMILAR: null,
        SELECT_INSTANCES: null,
        SELECT_BY: [{ NAME: null, LAYER_WITH_DOTS: null, COLOR: null }],
      },

      {
        SELECTION_REGION: [
          {
            RECTANGULAR_REGION: null,
            CIRCULAR_REGION: null,
            FENCE_REGION: null,
            LASSO_REGION: null,
            PAINT_SELECTION_REGION: null,
          },
          { WINDOW: null, CROSSING: null },
        ],
      },
      { MANAGE_SELECTION_SETS_WITH_DOTS: null },
      { OBJECT_PROPERTIES_WITH_DOTS: null },
    ],
  },
  {
    CREATE: null,
    MODIFIERS: null,
    ANIMATION: null,
    GRAPH_EDITORS: null,
    RENDERING: null,
  },
  {
    TOOLS: [
      {
        SCENE_EXPORTER_WITH_DOTS: null,
        LAYER_EXPORTER_WITH_DOTS: null,
        CREASE_EXPORTER_WITH_DOTS: null,
      },
      {
        CONTAINERS: [
          { INHERIT_CONTAINER: null, CREATE_CONTAINER_FROM_SELECTION: null },
          { LOAD_CONTAINER: null, UNLOAD_CONTAINER: null },
          {
            OPEN_CONTAINER: null,
            CLOSE_CONTAINER: null,
            UPDATE_CONTAINER: null,
            EDIT_CONTAINER: null,
          },
          {
            LOCAL_CONTENT: [
              {
                ADD_SELECTED_TO_CONTAINER: null,
                REMOVE_SELECTED_FROM_CONTAINER: null,
                SAVE_CONTAINER: null,
                RELOAD_CONTAINER: null,
              },
            ],
            INHERITED_CONTENT: [{ MERGE_CONTAINER_SOURCE: null }],
          },
        ],
      },
      { ISOLATE_SELECTION: null, END_ISOLATE: null },
      { DISPLAY_FLOATER_WITH_DOTS: null },
      {
        MIRROR_WITH_DOTS: null,
        ARRAY_WITH_DOTS: null,
        ALIGN: [
          {
            ALIGN_WITH_DOTS: null,
            QUICK_ALIGN: null,
            SPACING_TOOL_WITH_DOTS: null,
            CLONE_AND_ALIGN_WITH_DOTS: null,
          },
          {
            ALIGN_TO_VIEW_WITH_DOTS: null,
            NORMAL_ALIGN_WITH_DOTS: null,
            ALIGN_CAMERA: null,
            PLACE_HIGHLIGHT: null,
          },
        ],
      },
      { SNAPSHOT_WITH_DOTS: null },
      { RENAME_OBJECTS_WITH_DOTS: null },
      {
        ASSIGN_VERTEX_COLORS_WITH_DOTS: null,
        COLOR_CLIPBOARD_WITH_DOTS: null,
        PERSPECTIVE_MATCH_WITH_DOTS: null,
      },
      { VIEWPORT_CANVAS_WITH_DOTS: null },
      {
        GRIDS_AND_SNAPS: [
          { GRID_AND_SNAP_SETTINGS_WITH_DOTS: null },
          {
            SHOW_HOME_GRID: null,
            ACTIVATE_HOME_GRID: null,
            ACTIVATE_GRID_OBJECT: null,
            ALIGN_GRID_TO_VIEW: null,
          },
          {
            SNAPS_TOGGLE: null,
            ANGLE_SNAP_TOGGLE: null,
            PERCENT_SNAP_TOGGLE: null,
            ENABLE_AXIS_CONSTRAINTS_IN_SNAPS: null,
          },
        ],
        MEASURE_DISTANCE_WITH_DOTS: null,
      },
      {
        CHANNEL_INFO_WITH_DOTS: null,
        MESH_INSPECTOR: [
          { ACTIVATE_MESH_INSPECTOR: null, MESH_AUTO_REPAIR: null },
        ],
      },
    ],
    GROUP: [
      { GROUP_WITH_DOTS: null, UNGROUP: null },
      { OPEN: null, OPEN_RECURSIVELY: null, CLOSE: null },
      { ATTACH: null, DETACH: null },
      { EXPLODE: null },
      {
        ASSEMBLE: [
          { ASSEMBLE: null, DISASSEMBLE: null },
          { OPEN: null, CLOSE: null },
          { ATTACH: null, DETACH: null },
          { EXPLODE: null },
        ],
      },
    ],
    VIEWS: null,
  },

  {
    CUSTOMIZE: null,
    SCRIPTING: null,
    HELP: null,
  },
]

export function MainMenuBar() {
  return <MenuBar schema={MAIN_MENU_BAR_SCHEMA}></MenuBar>
}
