import main from "../assets/images/logo1.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Track <span>Your Job</span> Applications
          </h1>
          <p>
            In today's competitive world we know you are required to make
            applications at many places and sometimes it become difficult to
            track your the progress of your applications.
          </p>
          <p>
            Sp here we come up with our Track-J solution. We provide you
            simplest way for managing your applications. We are happy to serve
            you.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
