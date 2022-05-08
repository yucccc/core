export const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1, // 10 = 2
  STATEFUL_COMPONENT = 1 << 2, // 100 = 4
  TEXT_CHILDREN = 1 << 3, // 1000 = 8
  ARRAY_CHILDREN = 1 << 4, // 10000 = 16
  SLOTS_CHILDREN = 1 << 5, // 100000 = 32
  TELEPORT = 1 << 6, // 1000000 = 64
  SUSPENSE = 1 << 7, // 10000000 = 128
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8, // 100000000 = 256
  COMPONENT_KEPT_ALIVE = 1 << 9, // 1000000000 = 512
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT // 110 = 6
}
