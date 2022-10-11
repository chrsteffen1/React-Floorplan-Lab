import './App.css';
import Bath from './Bath';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';


function App(props) {
  return (
    <>
    <div>
      <div>
        <Bedroom bedNum={'1'} />
      </div>
      <div>
        <Kitchen />
      </div>
      <div>
        <Bath size='Full' />
      </div>
      <div>
      <Bedroom bedNum={'2'} />
      </div>
      <div>
        <LivingRoom />
      </div>
      <div>
        <Bath size='Half' />
      </div>
      <div>
      <Bedroom bedNum={'3'} />
      </div>
    </div>
    </>
  )
}

export default App;
