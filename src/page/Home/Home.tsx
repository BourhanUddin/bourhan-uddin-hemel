import NavBar from "../../shared/NavBar";
import Banner from "./Banner";
import MyWork from "./MyWork";

const Home = () => {
  return (
    <div>
    <div className="h-screen">
    <NavBar />
      <Banner />
    </div>
      <MyWork></MyWork>
    </div>
  );
};

export default Home;
