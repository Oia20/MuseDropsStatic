import React, { useState, useEffect } from 'react';
import './App.css';
import "./tailindex.css";

function App() {
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([{"id":1,"title":"Dino Nuggets","content":"Dinosaurs went extinct except for the few of them that evolved into birds, which turned into chickens. Humans then kill the chicken and turn them into dinosaurs (dino nuggets)."},{"id":3,"title":"Communication","content":"We live in a world where we can communicate instantly with someone on the other side of the planet, yet sometimes struggle to have a conversation with the person sitting next to us."},{"id":4,"title":"books","content":"Life is like a book where we're all simultaneously readers and authors, flipping through pages of experiences while writing our own unique story with every decision we make."},{"id":6,"title":"Time","content":"Time is the ultimate currency of life. We spend it without hesitation, yet we cannot save it or earn it back. The value of each moment lies in how we choose to invest it."},{"id":7,"title":"Stars","content":"Stars shine brightest in the darkest of nights, teaching us that even in our lowest moments, there's potential for brilliance."},{"id":8,"title":"","content":"Life is like a book where we're all simultaneously readers and authors, flipping through pages of experiences while writing our own unique story with every decision we make."},{"id":9,"title":"title","content":"The brain named itself."},{"id":10,"title":"title","content":"If you're waiting for the waiter, aren't you the waiter?"},{"id":11,"title":"title","content":"When you think about it, mirrors are just real-life portals to parallel universes."},{"id":12,"title":"title","content":"Every time you clean your vacuum cleaner, you become the vacuum cleaner."},{"id":13,"title":"title","content":"If two mind readers are reading each other's minds, whose mind are they actually reading?"},{"id":14,"title":"title","content":"The \"snooze\" button on alarm clocks is like a \"temporary denial\" button for reality."},{"id":15,"title":"title","content":"We are all time travelers, moving forward at a rate of one second per second."},{"id":16,"title":"title","content":"In the future, there will be old people listening to rap music and saying, \"Back in my day, music had real lyrics.\""},{"id":17,"title":"title","content":"The word \"bed\" looks like a bed."},{"id":18,"title":"title","content":"When you're a kid, you want to be an adult. When you're an adult, you want to be a kid again."},{"id":19,"title":"title","content":"If two vegans are arguing, is it still considered beef?"},{"id":20,"title":"title","content":"Your stomach thinks all potatoes are mashed."},{"id":21,"title":"title","content":"The word \"lisp\" has an \"s\" sound in it, making it difficult for people with lisps to say."},{"id":22,"title":"title","content":"We are all just ghosts driving meat-coated skeletons made from stardust, riding a rock hurtling through space."},{"id":23,"title":"title","content":"The fact that we can't tickle ourselves is proof that our brains are constantly monitoring and filtering sensory information."},{"id":24,"title":"title","content":"Somewhere out there, there's a person who has eaten the exact same number of Skittles as you, but they have a completely different favorite color."},{"id":25,"title":"title","content":"If your shirt isn't tucked into your pants, then your pants are tucked into your shirt."},{"id":26,"title":"title","content":"When you drink alcohol, you're just borrowing happiness from tomorrow."},{"id":27,"title":"title","content":"Water is just ghost ice."},{"id":28,"title":"title","content":"Every photo taken of you is a picture of you when you were younger."}]);
  }, []); // Empty dependency array ensures this runs only once on component mount

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Hide after 3 seconds
      })
      .catch(err => {
        console.error('Could not copy text to clipboard: ', err);
      });
  }

  return (
    <div className="">
      <h1 className="text-center p-10 text-5xl font-bold">Most Recent Droplets</h1>
      <p className="text-center font-bold">*Click a muse to copy it to clipboard*</p>
      <p className="text-center font-bold">The server for this site is currently down, heres a video demo of what the full app looks like.</p>
      <u><p className="text-center font-bold "><a target="_blank" href='https://www.youtube.com/watch?v=T3d1-iLRyFY'>*Video Demo*</a></p></u>

      {data.slice().reverse().map(item => (
        <div
          key={item.id}
          className="border-2 border-blue-900 shadow-2xl flex p-5 justify-center m-10 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg w-auto relative cursor-pointer overflow-hidden water-effect hover:border-blue-600"
          onClick={() => copyToClipboard(item.content)}
        >
          <img
            className="h-5 w-5 m-1 absolute left-0 top-0"
            src="water-drop-svgrepo-com.svg"
            alt="Water Drop"
          />
          <img
            className="h-5 w-5 m-1 absolute right-0 bottom-0"
            src="water-drop-svgrepo-com.svg"
            alt="Water Drop"
          />
          <p className="text-white">{item.content}</p>
        </div>
      ))}
      {copied && <div className="fixed bottom-5 right-5 bg-blue-900 text-white p-2 rounded">
        Copied to clipboard!
      </div>}
    </div>
  );
}

export default App;
