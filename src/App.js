import { QueryClient, QueryClientProvider } from 'react-query';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import ArticlesView from './components/ArticlesView';

const client = new QueryClient();

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export function Providers({ children }) {
  return (
    <QueryClientProvider client={client}>
      <GlobalStyle />
      {children}
    </QueryClientProvider>
  );
}

function App() {
  return (
    <Providers>
      <ArticlesView />
    </Providers>
  );
}

export default App;
