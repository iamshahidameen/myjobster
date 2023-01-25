import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const SmallSidebar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className={`sidebar-container sidebar-container show-sidebar`}>
        <div className="content">
          <button className="close-btn" onClick={() => console.log('toggle')}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">Nav Links</div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
