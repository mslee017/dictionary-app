import Navbar from './components/Navbar';
import WordDisplay from './components/WordDisplay';
import { useFont } from './context/FontContext';
import tw, { styled, css } from 'twin.macro';

function App() {
  const { font } = useFont();

  return (
    <Main font={font}>
      <Wrapper>
        <Navbar />
        <WordDisplay />
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
