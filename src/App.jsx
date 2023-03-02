import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WordDisplay from './components/WordDisplay';
import { useGlobalContext } from './context';
import tw, { styled, css } from 'twin.macro';

function App() {
  const { font } = useGlobalContext();
  return (
    <Main font={font}>
      <Wrapper>
        <Navbar />
        <WordDisplay />
        <Footer />
      </Wrapper>
    </Main>
  );
}

export default App;

// Styled Components
const fonts = {
  sans: `sans-serif`,
  serif: `serif`,
  mono: `Roboto Mono`,
};

const Wrapper = styled.div(() => [
  tw`p-4 md:p-8 max-w-4xl mx-auto dark:bg-black`,
]);

const Main = styled.main(({ font }) => [
  tw`min-h-screen dark:bg-black dark:text-white`,
  css`
    font-family: ${fonts[font] || `sans-serif`};
  `,
]);
