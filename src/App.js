import './App.scss';
import { FullPage, Slide } from 'react-full-page';
import First from './First/First';
import Second from './Second/Second';
import Second2 from './Second/Second2';
import Third from './Third/Third';
import Fourth from './Fourth/Fourth';
import useMedia from 'use-media';

function App() {
  const isWide = useMedia({minWidth: '768px'});

  return (
    <div>


{isWide ? 

<FullPage controls controlsProps={{className: 'controls'}} scrollMode={isWide ? "full-page" : "normal"}>
      <Slide>
        <First />
      </Slide>
      <Slide>
        <Second />
      </Slide>
      <Slide>
        <Second2 />
      </Slide>
      <Slide>
        <Third />
      </Slide>
      <Slide>
        <Fourth />
      </Slide>
    </FullPage>


:
      <>
        <First />
        <Second />
        <Second2 />
        <Third />
        <Fourth />
        </>

}

    


    </div>


  );
}

export default App;
