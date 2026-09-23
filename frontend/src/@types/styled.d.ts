import 'styled-components'
import type { DefaultTheme as AppTheme } from '../styles/themes/default'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppTheme {}
}
