import main from '../assets/images/main.svg';
import { Logo } from '../components/index';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I am baby anim chicharrones minim deep v letterpress try-hard,
              ennui XOXO qui chartreuse incididunt vibecession. Butcher whatever
              cardigan incididunt. Elit tonx lo-fi fanny pack tacos pok pok
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
