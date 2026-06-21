/**
 * These declarations tell TypeScript that we allow import of images, e.g.
 * ```
    <script lang='ts'>
      import successkid from 'images/successkid.jpg';
    </script>

    <img src="{successkid}">
   ```
 */
declare module '*.gif' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}

declare module '*.sql' {
  const value: string
  export default value
}

declare module '*.yml' {
  const value: { [key: string]: any }
  export default value
}

type Style = { [key: `_${string}`]: string }

declare module '*.css' {
  const value: Style
  export default value
}
declare module '*.less' {
  const value: Style
  export default value
}
declare module '*.scss' {
  const value: Style
  export default value
}
declare module '*.sass' {
  const value: Style
  export default value
}
