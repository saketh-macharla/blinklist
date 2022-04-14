import {addDecorator} from '@storybook/react';
import customTheme from '../src/theme/index'
import { ThemeProvider } from "emotion-theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => (
  <ThemeProvider theme={customTheme}>
    {story()}
  </ThemeProvider>
));