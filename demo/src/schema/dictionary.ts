export const DICTIONARY = {
  __proto__: null,

  // main menubar
  FILE: 'File',
  EDIT: 'Edit',
  TOOLS: 'Tools',
  GROUP: 'Group',
  VIEWS: 'Views',
  CREATE: 'Create',
  MODIFIERS: 'Modifiers',
  ANIMATION: 'Animation',
  GRAPH_EDITORS: 'Graph Editors',
  RENDERING: 'Rendering',
  CUSTOMIZE: 'Customize',
  SCRIPTING: 'Scripting',
  HELP: 'Help',

  // file
  NEW: 'New',
  RESET: 'Reset',
  OPEN: 'Open',
  SAVE: 'Save',
  SAVE_AS: 'Save As',
  IMPORT: 'Import',
  EXPORT: 'Export',

  // edit
  UNDO: 'Undo',
  REDO: 'Redo',

  HOLD: 'Hold',
  FETCH: 'Fetch',

  DELETE: 'Delete',
  CLONE: 'Clone',

  MOVE: 'Move',
  ROTATE: 'Rotate',
  SCALE: 'Scale',
  PLACEMENT: 'Placement',

  SELECT_ALL: 'Select All',
  SELECT_NONE: 'Select None',
  SELECT_INVERT: 'Select Invert',

  SELECT_SIMILAR: 'Select Similar',
  SELECT_INSTANCES: 'Select instances',
  SELECT_BY: 'Select by',
  NAME: 'Name',
  LAYER: 'Layer',
  LAYER_WITH_DOTS: 'Layer...',
  COLOR: 'Color',

  SELECTION_REGION: 'Selection region',
  RECTANGULAR_REGION: 'Rectangular region',
  CIRCULAR_REGION: 'Circular region',
  FENCE_REGION: 'Fence region',
  LASSO_REGION: 'Lasso region',
  PAINT_SELECTION_REGION: 'Paint lasso region',
  WINDOW: 'Window',
  CROSSING: 'Crossing',

  MANAGE_SELECTION_SETS_WITH_DOTS: 'Manage selection sets...',
  
  OBJECT_PROPERTIES_WITH_DOTS: 'Object Properties...',

  // tools
  SCENE_EXPORTER_WITH_DOTS: 'Scene Exporter...',
  LAYER_EXPORTER_WITH_DOTS: 'Layer Exporter...',
  CREASE_EXPORTER_WITH_DOTS: 'Crease Exporter...',
  ALL_GLOBAL_EXPORTERS: 'All Global Exporters',

  CONTAINERS: 'Containers',
  INHERIT_CONTAINER: 'Inherit Container',
  CREATE_CONTAINER_FROM_SELECTION: 'Create Container from Selection',
  LOAD_CONTAINER: 'Load Container',
  UNLOAD_CONTAINER: 'Unload Container',
  OPEN_CONTAINER: 'Open Container',
  CLOSE_CONTAINER: 'Close Container',
  UPDATE_CONTAINER: 'Update Container',
  EDIT_CONTAINER: 'Edit Container',
  LOCAL_CONTENT: 'Local Content',
  ADD_SELECTED_TO_CONTAINER: 'Add Selected to Container',
  REMOVE_SELECTED_FROM_CONTAINER: 'Remove Selected from Container',
  SAVE_CONTAINER: 'Save Container',
  RELOAD_CONTAINER: 'Reload Container',
  INHERITED_CONTENT: 'Inherited Content',
  MERGE_CONTAINER_SOURCE: 'Merge Container Source',

  ISOLATE_SELECTION: 'Isolate selection',
  END_ISOLATE: 'End Isolate',

  DISPLAY_FLOATER_WITH_DOTS: 'Display Floater...',

  MIRROR_WITH_DOTS: 'Mirror...',
  ARRAY_WITH_DOTS: 'Array...',
  ALIGN: 'Align',
  ALIGN_WITH_DOTS: 'Align...',
  QUICK_ALIGN: 'Quick Align',
  SPACING_TOOL_WITH_DOTS: 'Spacing tool...',
  CLONE_AND_ALIGN_WITH_DOTS: 'Clone and Align...',
  ALIGN_TO_VIEW_WITH_DOTS: 'Align to View...',
  NORMAL_ALIGN_WITH_DOTS: 'Normal Align...',
  ALIGN_CAMERA: 'Align Camera',
  PLACE_HIGHLIGHT: 'Place Highlight',
  SNAPSHOT_WITH_DOTS: 'Snapshot...',

  RENAME_OBJECTS_WITH_DOTS: 'Rename Objects...',

  ASSIGN_VERTEX_COLORS_WITH_DOTS: 'Assign Vertex Colors...',
  COLOR_CLIPBOARD_WITH_DOTS: 'Color Clipboard...',
  PERSPECTIVE_MATCH_WITH_DOTS: 'Perspective Match...',

  VIEWPORT_CANVAS_WITH_DOTS: 'Viewport canvas...',

  GRIDS_AND_SNAPS: 'Grids and Snaps',
  GRID_AND_SNAP_SETTINGS_WITH_DOTS: 'Grid and Snap Settings...',
  SHOW_HOME_GRID: 'Show Home Grid',
  ACTIVATE_HOME_GRID: 'Activate Home Grid',
  ACTIVATE_GRID_OBJECT: 'Activate Grid Object',
  ALIGN_GRID_TO_VIEW: 'Align Grid to View',
  SNAPS_TOGGLE: 'Snaps Toggle',
  ANGLE_SNAP_TOGGLE: 'Angle Snap Toggle',
  PERCENT_SNAP_TOGGLE: 'Percent Snap Toggle',
  ENABLE_AXIS_CONSTRAINTS_IN_SNAPS: 'Enable Axis Constraints in Snaps',
  MEASURE_DISTANCE_WITH_DOTS: 'Measure Distance...',

  CHANNEL_INFO_WITH_DOTS: 'Channel Info...',
  MESH_INSPECTOR: 'Mesh Inspector',
  ACTIVATE_MESH_INSPECTOR: 'Activate Mesh Inspector',
  MESH_AUTO_REPAIR: 'Mesh Auto Repair',

  // group
  GROUP_WITH_DOTS: 'Group...',
  UNGROUP: 'Ungroup',
  OPEN_RECURSIVELY: 'Open Recursively',
  CLOSE: 'Close',

  ATTACH: 'Attach',
  DETACH: 'Detach',

  EXPLODE: 'Explode',

  ASSEMBLE: 'Assemble',
  DISASSEMBLE: 'Disassemble',

  // views
  UNDO_VIEW_CHANGE: 'Undo View Change',
  REDO_VIEW_CHANGE: 'Redo View Change',

  VIEWPORT_CONFIGURATION_WITH_DOTS: 'Viewport Configuration...',
  REDRAW_ALL_VIEWS: 'Redraw All Views',

  SET_ACTIVE_VIEWPORT: 'Set Active Viewport',
  PERSPECTIVE: 'Perspective',
  ORTHOGRAPHIC: 'Orthographic',
  FRONT: 'Front',
  BACK: 'Back',
  TOP: 'Top',
  BOTTOM: 'Bottom',
  LEFT: 'Left',
  RIGHT: 'Right',
  SAVE_ACTIVE_PERSPECTIVE_VIEW: 'Save Active Perspective View',
  RESTORE_ACTIVE_PERSPECTIVE_VIEW: 'Restore Active Perspective View',

  CREATE_CAMERA_FROM_VIEW: 'Create Camera from View',

  SHOW_TRANSFORM_GIZMO: 'Show Transform Gizmo',
  SHOW_GHOSTING: 'Show Ghosting',
  SHOW_KEY_TIMES: 'Show Key Times',
  SHADE_SELECTED: 'Shade Selected',
  SHOW_DEPENDENCIES: 'Show Dependencies',

  UPDATE_DURING_SPINNER_DRAG: 'Update During Spinner Drag',
  ADAPTIVE_DEGRADATION: 'Adaptive Degradation',

  EXPERT_MODE: 'Expert Mode',

  // create
  STANDARD_PRIMITIVES: 'Standard Primitives',
  BOX: 'Box',
  CONE: 'Cone',
  SPHERE: 'Sphere',
  CYLINDER: 'Cylinder',
  TUBE: 'Tube',
  TORUS: 'Torus',
  PYRAMID: 'Pyramid',
  PLANE: 'Plane',
  EXTENDED_PRIMITIVES: 'Extended Primitives',

  LIGHTS: 'Lights',
  CAMERAS: 'Cameras',

  HELPERS: 'Helpers',
  SYSTEMS: 'Systems',
} as const

export type TDictionaryKey = keyof typeof DICTIONARY
