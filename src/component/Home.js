import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <Link to="about">Click here to see our about page</Link><br/>
            <Link to="contact">Click here to see our contact page</Link><br/>
        </div>
    );
}

export default Home;