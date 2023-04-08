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
        <div className='home-bot-right' id='home-bot-right'>
          <Events className='event-cont' />
          <Announcements />
          <div className='home-bot-right-2'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
