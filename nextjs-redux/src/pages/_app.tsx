import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { wrapper } from '../../redux/store'
import { Provider } from 'react-redux'
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default App;
