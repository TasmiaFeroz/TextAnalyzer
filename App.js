import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Alert from './components/Alert';
function App() {
 const [mode, setMode]=useState('light');
//  const [alert, setAlert] = useState('null');
//  const showAlert = (message, type)=>{
//   setAlert({
//     msg:message,
//     type:type,
//   })
//  }
//  setTimeout(() => {
//  setAlert('null');
  
//  }, 1500);
  const toggleMode= () =>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      // showAlert("Dark mode has been enabled", "success")
    }else{
       setMode('light')
      document.body.style.backgroundColor='white';
      // showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* <Alert alert={alert}/> */}
    <div className='container my-3'>
      <Textform heading="Enter Text to Analyze" mode={mode} />
      {/* <About  mode={mode} /> */}
    </div>
    </>
  );
}
export default App;

