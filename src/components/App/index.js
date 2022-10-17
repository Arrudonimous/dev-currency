import GlobalStyle from '../../assets/themes/global';
import { ReloadProvider } from '../../context/ReloadContext';
import Content from '../Content';
import Header from '../Header';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ReloadProvider>
          <Header />
          <Content />
        </ReloadProvider>
      </Container>
    </>
  );
}

export default App;
