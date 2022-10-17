import { BsArrowClockwise } from 'react-icons/bs';
import { useContext } from 'react';
import { Container } from './styles';
import { ReloadContext } from '../../context/ReloadContext';

export default function Header() {
  const { handleToggleState } = useContext(ReloadContext);
  return (
    <Container>
      <h1>Dev</h1>
      <h1 className="second">Currency</h1>
      <button type="submit" onClick={handleToggleState}>
        <BsArrowClockwise size={20} />
      </button>
    </Container>
  );
}
