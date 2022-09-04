// importing components 
import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (

    // main app content 
    <div className="App">
      
      {/* all different buttons mentioned  for showing different tooltip placement  */}
      <Tooltip position="top" content="tooltip on top">
        <button>Top</button>
      </Tooltip>
      <Tooltip position="bottom" content="tooltip on bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip position="left" content="tooltip on left">
        <button>Left</button>
      </Tooltip>
      <Tooltip position="right" content="tooltip on right">
        <button>Right</button>
      </Tooltip>
      <Tooltip position="top-left" content="tooltip on top-left">
        <button>Top left</button>
      </Tooltip>
      <Tooltip position="top-right" content="tooltip on top-right">
        <button>Top right</button>
      </Tooltip>
      <Tooltip position="bottom-left" content="tooltip on bottom-left">
        <button>Bottom left</button>
      </Tooltip>
      <Tooltip position="bottom-right" content="tooltip on bottom-right">
        <button>Bottom right</button>
      </Tooltip>
      <Tooltip position="left-top" content="tooltip on left-top">
        <button>Left top</button>
      </Tooltip>
      <Tooltip position="left-bottom" content="tooltip on left-bottom">
        <button>Left bottom</button>
      </Tooltip>
      <Tooltip position="right-top" content="tooltip on right-top">
        <button>Right top</button>
      </Tooltip>
      <Tooltip position="right-bottom" content="tooltip on right-bottom">
        <button>Right bottom</button>
      </Tooltip>
    </div>
  );
}
// exportig the app 
export default App;
