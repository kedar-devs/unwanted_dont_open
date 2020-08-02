import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet'
import Inline from './components/Inline';
import './components/appStyle.css'
import style from './components/appStyle.module.css'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA';
import FregmentDemo from './components/FregmentDemo';
import Tables from './components/Tables'
import PureComp from './components/PureComp';
import ParentComp from './components/PerentComp'
import Refsdemo from './components/Refsdemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ErrorHandlink from './components/ErrorHandlink';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCountertwo from './components/ClickCountertwo';
import HoverCount2 from './components/HoverCount2'
import User from './components/User'
import Counter2 from './components/Counter2'
import C from './components/C'
import { userProvide } from './components/UserContext';
function App() {
  return (
    <div className="App">
      <userProvide  value='kedar'>
      <C />
      </userProvide>
      {/*<Counter2
        render ={(count,increament)=>(
          <ClickCountertwo count={count} increament={increament} />
        )} />
        <Counter2
        render ={(count,increament)=>(
          <HoverCount2 count={count} increament={increament} />
        )} />*/}
      {/*<ClickCountertwo />
      <HoverCount2 />
      <User render={(isLoggedIn)=>isLoggedIn?'kedar':'guest'}/>*/}

      {/*<ClickCounter />
      <HoverCounter />*/}
     {/* <ErrorBoundry>
      <ErrorHandlink heroname='Batman'/>
      </ErrorBoundry>
      <ErrorBoundry>
      <ErrorHandlink heroname='Diana'/>
      </ErrorBoundry>
      <ErrorBoundry>
      <ErrorHandlink heroname='joker'/>
     </ErrorBoundry>*/}

      {/*<PortalDemo />*/}
      {/*<FRParentInput />*/}
      {/*<FocusInput />*/}
      {/*<Refsdemo />*/}
     {/*<ParentComp />*/}
      {/*<Tables />*/}
      {/*<FregmentDemo />*/}
      {/*<LifeCycleA />*/}
      {/*<Form />*/}
      {/*<h1 className='error'>Error</h1>
      <h1 className={style.success}>Sucess</h1>*/}
      {/*<Inline />
      <StyleSheet primary={true} />*/}

      {/*<NameList />*/}
      {/*<UserGreeting />*/}

      {/*<ParentComponent />*/}
      {/* <EventBind />*/}

      {/*<FunctionClick />
      <ClassClick />*/}
     {/* <Counter />*/}

     {/* <Message />/*}
     {/*<Greet name="Bruce" heroName="BatMan">
       <p>The greatest off all time</p>
     </Greet>
     <Greet name="Diana" heroName="Wonder Women"/>
  <button>justice league</button>*/}
    {/* <Greet name="Berry" heroName="Flash"/>

      <Welcome name="Bruce" heroName="BatMan"/>*/}
      {/* <Welcome name="Diana" heroName="Wonder women"/>
  <Welcome name="Berry" heroName="Flash"/>*/}
        {/*<Hello />*/}
    </div>
  );
}

export default App;
