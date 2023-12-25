import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {  

  const [name , setName ] = useState("") ; 
  const [email , setEmail] = useState("") ;  
  const [password , setPassword] = useState("") ; 
  const [isRegisted , setIsRegistered] = useState(false) ;


  const refName = useRef() ;   

  

  function handleSubmit(e) { 

       e.preventDefault() ;  

       if(!name || !password || !email) {
          alert("All Details are mandatory") ;
       }else { 
         setIsRegistered(true) ;
       }
  } 

  // useEffect( ()=> {

  //    console.log("registered"+ Math.random()) ;  

  // }, [isRegisted]) ;
   
   useEffect( ()=> { 
     
      console.log("registered") ;

   }, [isRegisted])
  
  

  return (
    <>  

    {isRegisted ? (<p> Hello, {refName.current.value}, you have registered successfully </p>) : ""} 

    <h3> Registration Form : </h3>

    <form onSubmit={handleSubmit}>

       <label htmlFor='name'> Name : </label> 
       <input 
        id='name'
        type='text'
        value={name}
        onChange={ (e) => setName(e.target.value)}  
        ref={refName} 
        placeholder='enter your name'

        /> 
        <br/>
        <br/> 

        <label htmlFor="email"> Email :</label> 
        <input
         type='email' 
         value={email} 
         onChange={ (e)=> setEmail(e.target.value)} 
         placeholder='enter email'
         /> 

        <br/>
        <br/>  

        <label htmlFor="password"> Password :</label> 
        <input
          type='password' 
          value={password} 
          onChange={ (e)=> setPassword(e.target.value)}
          placeholder='password'
        />  

        <br/>
        <br/>
        <button> Register </button> 

        
    </form>  
 </>
  )
}

export default App


