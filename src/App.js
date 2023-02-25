// import logo from './logo.svg';
// showing some error that logo is not showing fix it 
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';


// import {
//   BrowserRouter as Router,
//  Routes,
//   Route
// } from "react-router-dom"; 



// let name='saurabh';f  

function App() {

  const[mode,setMode] = useState("light") //whether darkmode is enabled or not
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null)
    },1500);
  }
 
// const removeBodyClasses = ()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')


// }

  const togglemode = (cls)=>{
    console.log(cls);
  // you(saurabh) were getting error on function on switch it wasn't working cause you didn't write in the navbar title learn little bit more how this function works and it's pros and cons
// removeBodyClasses();
// document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");

      // document.title='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils - Dark Mode'
      // },2000);
      
      // setInterval(()=>{
      //   document.title='Utils Now'
      // },1500);

      // first if you select 1000 than secound will overwrite it so 1500

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='Utils - Light Mode';
    }
  }
  return ( 
    <>
 
{/* <Navbar title="Textutils" aboutText="About TextUtils" /> */}
{/* <Navbar  /> */} 


{/* <Router> */}

<Navbar title="Textutils" mode={mode}  togglemode={togglemode} />
<Alert alert={alert}/> 
{/* alert is state varible like of above declare */}
<div className="container my-3">
  
  
{/* <Routes> */}

{/* <Route path="/about" element={<About  mode={mode}/>} >  </Route> */}

{/* <Route path="/"  element={<TextForm showAlert={showAlert} heading="Try Textutis - Word counter, Character Counter,Remove Extra Spaces   " mode={mode}/> }> </Route> */}
{/* if you use normal <TextForm/> than nightmode is not enabled it's some error that i have to fix */}
<TextForm showAlert={showAlert} heading="Enter the text to analyze below   " mode={mode}/>
{/* <About/> */}

{/* </Routes> */}
</div>
{/* </Router> */}
    
   </>
  );
}

export default App;
