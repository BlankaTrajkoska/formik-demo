import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Link to="/form">Form</Link>
      <Link to="/table">Table</Link>
    </div>
  );
};

export default Home;
