import Navbar from '../Components/Navbar';
import '../CSS/Home.css';
import Events from './Events';
import Announcements from './Announcements';

function Home() {
  return (
    <div className='home-cont'>
      <div className='home-top'>
        <Navbar />
      </div>
      <div className='home-bot' id='home-bot'>
        <div className='home-bot-left' id='home-bot-left'></div>
        <div className='home-bot-right'>
          <div className='home-bot-right-1'>
            <Events />
          </div>
          <div className='home-bot-right-2'>
            <Announcements />
          </div>
          <div className='home-bot-right-2'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
