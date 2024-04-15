import React, { useState } from 'react';
import "./tailindex.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='h-screen flex justify-center items-center flex-col pb-40'>
        <img src="Muse.png" alt="Musedrops Logo" className=" h-28 w-28 border-2 border-blue-900 mb-4" />
        <p className="text-center font-bold">The server for this site is currently down, heres a video demo of what the full app looks like.</p>
      <u><p className="text-center font-bold "><a target="_blank" href='https://www.youtube.com/watch?v=T3d1-iLRyFY'>*Video Demo*</a></p></u>
        <h2 className='text-center font-bold text-4xl'>Log in to post Musedrops</h2>
        <form className='flex flex-col items-center mt-8'>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className=' border-2 border-blue-900 w-80 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className=' border-2 border-blue-900 w-80 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
            <button type="button" className='w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-2 border-blue-900'>Login</button>
        </form>
        <Link to="/MuseDropsStatic/Register">
        <p className=' mt-4 underline'>Create An Account</p>
        </Link>
        <p>or</p>
        <Link to="/MuseDropsStatic/">
        <p className='underline'>Return to drops</p>
        </Link>
        
    </div>
  );
}

export default Login;