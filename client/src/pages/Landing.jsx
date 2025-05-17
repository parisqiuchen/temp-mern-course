import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from '../assets/images/main.svg';
import { Logo } from "../components";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
     <Logo/>
      </nav>
      <div className="containerpage">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I hate to break it to ya girl, but we're breaking up.  
            I've put up with your drama just about long enough.  
            And now you wanna know if there's somebody else?  
            Well, if I'm being honest, then the answer is yes.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn register-link">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
};

export default Landing;
