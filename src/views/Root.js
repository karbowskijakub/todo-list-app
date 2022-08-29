import React from 'react';
import { Wrapper } from './Root.styles';
import { theme } from '../assets/styles/theme';
import TodoView from './TodoView';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux/es/exports';
import { store } from '../store';

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <TodoView />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
