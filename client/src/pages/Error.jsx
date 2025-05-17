import { useRouteError, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from '../assets/images/not-found.svg'


const Error = () => {
    const error = useRouteError();
    if (error.status === 404 ){
     return (
    <div>
      <img src={img} alt="not found" />
      <h3>Ohh! Page not Found</h3>
      <p>We seem to be unable to find the page you are looking for</p>
      <Link to='/dashboard'>Back home</Link>
    </div>
  );
    }
    return (
    <Wrapper>
         <div>
          <h3>something went wrong</h3>
         </div>
    </Wrapper>
    );

  };
  
  export default Error;
  