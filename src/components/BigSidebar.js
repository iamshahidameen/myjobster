import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import Logo from './Logo';

const BigSidebar = ({ toggleSidebar }) => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className={`sidebar-container ${!isSidebarOpen && 'show-sidebar'}`}>
        <div className="content"> </div>
        <header>
          <Logo />
        </header>
        <NavLinks />
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
