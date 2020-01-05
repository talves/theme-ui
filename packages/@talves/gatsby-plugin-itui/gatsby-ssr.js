import { jsx, InitializeColorMode } from '@talves/itui'

export { wrapRootElement } from './src/wrap-root-element'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([jsx(InitializeColorMode, { key: 'theme-ui-no-flash' })])
}
