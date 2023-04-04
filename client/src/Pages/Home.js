import Navbar from '../Components/Navbar';
import '../CSS/Home.css';

function Home() {
  return (
    <div className='home-cont'>
      <div className='home-top'>
        <Navbar />
      </div>
      <div className='home-bot' id='home-bot'>
        <div className='home-bot-left' id='home-bot-left'></div>
        <div className='home-bot-right'>
          RIGHT
          <div className='home-bot-right-1'></div>
          <div className='home-bot-right-2'></div>
          <div className='home-bot-right-2'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
