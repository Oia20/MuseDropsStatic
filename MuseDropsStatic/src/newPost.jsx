import React, { useState, useEffect } from 'react';
import "./tailindex.css"
import { useNavigate, Link } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96'>
        
        <h2 className='text-2xl font-bold mb-4'>New MuseDrop</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='postContent'>
              Droplet Content
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='postContent'
              rows='4'
              placeholder='Enter your muse here...'
              maxLength={255}
              onChange={(e) => setContent(e.target.value)} 
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type="button"
            >
              Post Drop
            </button>
          </div>
          <img src="water-drop-svgrepo-com.svg" className=" h-5 w-5 absolute"/>

        </form>
        <Link to="/MuseDropsStatic/">
        <p className='underline text-center'>Return to drops</p>
        </Link>
      </div>
    </div>
  );
}

export default NewPost;