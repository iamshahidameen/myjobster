import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import { useDispatch } from 'react-redux';

const BigSidebar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      BigSidebar
      <NavLinks toggleSidebar={toggle} />
    </Wrapper>
  );
};

export default BigSidebar;
