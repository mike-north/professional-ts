import * as React from 'react';

const Loading: React.FunctionComponent<any> = ({ message = 'Loading...', children }) => (
  <h1>
    {message}...
    {children}
  </h1>
);
export default Loading;
