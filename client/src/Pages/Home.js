import Navbar from '../Components/Navbar';
import '../CSS/Home.css';

function Home() {
  return (
    <div className='home-cont'>
      <div className='home-top'>
        <Navbar />
      </div>
      <div className='home-bot'>HOME</div>
    </div>
  );
}

export default Home;
