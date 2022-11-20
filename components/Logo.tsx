import React from 'react'

function Logo({
  color,
  width,
  height,
}: {
  color?: string
  width?: string
  height?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '146'}
      height={height || '40'}
      fill="none"
      viewBox="0 0 146 40"
    >
      <path
        fill={color || '#34296B'}
        d="M33.378 31.765V8.735H44.16c1.215 0 2.318.196 3.308.59 1 .393 1.816.927 2.446 1.601a6.907 6.907 0 011.468 2.36c.349.888.523 1.844.523 2.867a7.726 7.726 0 01-.523 2.849 7.128 7.128 0 01-1.468 2.36c-.641.675-1.457 1.208-2.447 1.602-.99.393-2.092.59-3.307.59H38.29v8.21h-4.91zm4.91-12.527h5.18c.99 0 1.806-.281 2.447-.843.653-.562.979-1.31.979-2.242 0-.945-.326-1.698-.979-2.26-.641-.562-1.457-.843-2.447-.843h-5.18v6.188zm15.524 4.164c0-1.607.365-3.074 1.097-4.4a8.153 8.153 0 013.087-3.153c1.328-.787 2.813-1.18 4.455-1.18 2.497 0 4.51.849 6.04 2.546 1.541 1.686 2.312 3.889 2.312 6.609v1.028H58.401c.158 1.08.658 1.973 1.502 2.68.844.709 1.946 1.063 3.307 1.063.743 0 1.536-.146 2.38-.438.854-.304 1.535-.703 2.041-1.197l1.957 2.9c-.81.741-1.828 1.314-3.054 1.72a11.989 11.989 0 01-3.813.606c-2.576 0-4.708-.804-6.395-2.41-1.676-1.62-2.514-3.744-2.514-6.374zm4.556-1.585h8.217a3.877 3.877 0 00-.304-1.23 4.276 4.276 0 00-.726-1.13c-.303-.36-.725-.646-1.265-.86-.54-.225-1.153-.337-1.84-.337-.652 0-1.237.107-1.754.32-.517.214-.934.5-1.249.86a4.263 4.263 0 00-.742 1.13c-.18.393-.292.809-.337 1.247zm15.607 9.948V15.09h4.387v2.243c.641-.765 1.44-1.4 2.396-1.905.968-.506 1.946-.76 2.936-.76v4.283c-.303-.067-.709-.1-1.215-.1-.742 0-1.524.19-2.345.572-.821.371-1.412.815-1.772 1.332v11.01h-4.387zm10.276 0l5.94-8.565-5.603-8.11h4.91l3.46 5.109 3.425-5.109h4.91l-5.568 8.11 5.939 8.565h-4.91l-3.797-5.631-3.83 5.63h-4.876zm18.527-8.363c0-1.607.365-3.074 1.096-4.4a8.162 8.162 0 013.088-3.153c1.328-.787 2.812-1.18 4.455-1.18 2.497 0 4.511.849 6.04 2.546 1.541 1.686 2.311 3.889 2.311 6.609v1.028h-12.401a4.183 4.183 0 001.502 2.68c.844.709 1.946 1.063 3.307 1.063.742 0 1.535-.146 2.379-.438.855-.304 1.536-.703 2.042-1.197l1.957 2.9c-.81.741-1.828 1.314-3.054 1.72a11.989 11.989 0 01-3.813.606c-2.576 0-4.708-.804-6.395-2.41-1.676-1.62-2.514-3.744-2.514-6.374zm4.555-1.585h8.218a3.877 3.877 0 00-.304-1.23 4.286 4.286 0 00-.726-1.13c-.303-.36-.725-.646-1.265-.86-.54-.225-1.153-.337-1.839-.337-.653 0-1.238.107-1.755.32-.517.214-.934.5-1.249.86a4.262 4.262 0 00-.742 1.13c-.18.393-.293.809-.338 1.247zm15.609 9.948V8.735h4.387v23.03h-4.387zm7.288-2.175l1.907-3.17c.652.618 1.524 1.158 2.615 1.618 1.102.461 2.155.692 3.156.692.922 0 1.62-.158 2.092-.472.472-.326.709-.759.709-1.298 0-.36-.186-.658-.557-.894-.36-.236-.833-.421-1.418-.556a33.934 33.934 0 00-1.924-.388 18.72 18.72 0 01-2.108-.54 9.359 9.359 0 01-1.924-.86c-.574-.348-1.046-.842-1.417-1.483-.36-.652-.54-1.422-.54-2.31 0-1.472.607-2.714 1.822-3.726 1.216-1.023 2.885-1.534 5.012-1.534 2.564 0 4.802.759 6.716 2.276l-1.772 3.119c-.529-.55-1.244-1.012-2.143-1.383a7.204 7.204 0 00-2.801-.556c-.788 0-1.424.152-1.907.455-.473.304-.708.692-.708 1.164 0 .292.14.54.421.741.281.192.652.343 1.114.456.472.1 1.001.219 1.586.354.596.135 1.203.27 1.822.404.63.124 1.237.326 1.822.607.597.27 1.126.585 1.586.944.473.36.85.849 1.131 1.467.281.619.422 1.332.422 2.141 0 1.574-.648 2.855-1.94 3.844-1.283.99-3.055 1.484-5.315 1.484-1.452 0-2.841-.23-4.168-.691-1.317-.461-2.413-1.096-3.291-1.905z"
      ></path>
      <path
        fill={color || '#34296B'}
        fillRule="evenodd"
        d="M10.765 22.575v11.332h-1.45v1.56H1.45v-1.56H0V8.944h15.697v1.505h2.45v2.12h1.934v6.738h-1.934v1.765h-2.45v1.504h-4.932z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color || '#34296B'}
        fillRule="evenodd"
        d="M21.158 7.557V4.375H17.44v-.846H4.382v3.115H17.44v.926h2.377v3.238h3.508v-3.25h-2.167z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color || '#34296B'}
        d="M10.765 22.575v11.332h-1.45v1.56H1.45v-1.56H0V8.944h15.697v1.505h2.45v2.12h1.934v6.738h-1.934v1.765h-2.45v1.504h-4.932z"
      ></path>
      <path
        fill={color || '#34296B'}
        d="M21.158 7.557V4.375H17.44v-.846H4.382v3.115H17.44v.926h2.377v3.238h3.508v-3.25h-2.167z"
      ></path>
    </svg>
  )
}

export default Logo
