import { addParameters } from '@storybook/react'
import React from 'react';

addParameters({
  darkMode: {
    // Set the initial theme
    current: 'light',
  },
  layout: 'fullscreen',
});

export const parameters = {
  options: {
    storySort: {
      order: ['Plugins', 'Layout', 'Navigation'],
    },
  },
}
