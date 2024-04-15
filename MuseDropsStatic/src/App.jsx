import React, { useState, useEffect } from 'react';
import './App.css';
import "./tailindex.css";

function App() {
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([{"id":1,"title":"Dino Nuggets","content":"Dinosaurs went extinct except for the few of them that evolved into birds, which turned into chickens. Humans then kill the chicken and turn them into dinosaurs (dino nuggets)."},{"id":3,"title":"Communication","content":"We live in a world where we can communicate instantly with someone on the other side of the planet, yet sometimes struggle to have a conversation with the person sitting next to us."},{"id":4,"title":"books","content":"Life is like a book where we're all simultaneously readers and authors, flipping through pages of experiences while writing our own unique story with every decision we make."},{"id":6,"title":"Time","content":"Time is the ultimate currency of life. We spend it without hesitation, yet we cannot save it or earn it back. The value of each moment lies in how we choose to invest it."},{"id":7,"title":"Stars","content":"Stars shine brightest in the darkest of nights, teaching us that even in our lowest moments, there's potential for brilliance."},{"id":8,"title":"","content":"Life is like a book where we're all simultaneously readers and authors, flipping through pages of experiences while writing our own unique story with every decision we make."},{"id":9,"title":"title","content":"The brain named itself."},{"id":10,"title":"title","content":"If you're waiting for the waiter, aren't you the waiter?"},{"id":11,"title":"title","content":"When you think about it, mirrors are just real-life portals to parallel universes."},{"id":12,"title":"title","content":"Every time you clean your vacuum cleaner, you become the vacuum cleaner."},{"id":13,"title":"title","content":"If two mind readers are reading each other's minds, whose mind are they actually reading?"},{"id":14,"title":"title","content":"The \"snooze\" button on alarm clocks is like a \"temporary denial\" button for reality."},{"id":15,"title":"title","content":"We are all time travelers, moving forward at a rate of one second per second."},{"id":16,"title":"title","content":"In the future, there will be old people listening to rap music and saying, \"Back in my day, music had real lyrics.\""},{"id":17,"title":"title","content":"The word \"bed\" looks like a bed."},{"id":18,"title":"title","content":"When you're a kid, you want to be an adult. When you're an adult, you want to be a kid again."},{"id":19,"title":"title","content":"If two vegans are arguing, is it still considered beef?"},{"id":20,"title":"title","content":"Your stomach thinks all potatoes are mashed."},{"id":21,"title":"title","content":"The word \"lisp\" has an \"s\" sound in it, making it difficult for people with lisps to say."},{"id":22,"title":"title","content":"We are all just ghosts driving meat-coated skeletons made from stardust, riding a rock hurtling through space."},{"id":23,"title":"title","content":"The fact that we can't tickle ourselves is proof that our brains are constantly monitoring and filtering sensory information."},{"id":24,"title":"title","content":"Somewhere out there, there's a person who has eaten the exact same number of Skittles as you, but they have a completely different favorite color."},{"id":25,"title":"title","content":"If your shirt isn't tucked into your pants, then your pants are tucked into your shirt."},{"id":26,"title":"title","content":"When you drink alcohol, you're just borrowing happiness from tomorrow."},{"id":27,"title":"title","content":"Water is just ghost ice."},
    {"id": 28, "title": "title", "content": "The sound of waves crashing is like nature's symphony."},
    {"id": 29, "title": "title", "content": "If our pets could talk, they'd probably have some interesting stories to tell."},
    {"id": 30, "title": "title", "content": "We're all just ghosts driving meat-coated skeletons made from stardust, riding a rock through space."},
    {"id": 31, "title": "title", "content": "If aliens are out there, they're probably just as curious about us as we are about them."},
    {"id": 32, "title": "title", "content": "The feeling of nostalgia is like a warm blanket for the soul."},
    {"id": 33, "title": "title", "content": "In a parallel universe, you're probably doing the exact same thing you're doing right now."},
    {"id": 34, "title": "title", "content": "If we could see air, the sky would be a lot more cluttered."},
    {"id": 35, "title": "title", "content": "When we yawn, it's like our body's way of saying 'low battery'."},
    {"id": 36, "title": "title", "content": "Life is like a video game; each day presents new challenges and opportunities to level up."},
    {"id": 37, "title": "title", "content": "The smell of freshly baked bread is the universe's way of giving us a hug."},
    {"id": 38, "title": "title", "content": "We're all just stories in the end, so let's make ours worth telling."},
    {"id": 39, "title": "title", "content": "Rainbows are like nature's way of showing off."},
    {"id": 40, "title": "title", "content": "If plants could talk, they'd probably have some fascinating insights about life on Earth."},
    {"id": 41, "title": "title", "content": "The concept of 'beauty' is subjective; what one person finds beautiful, another may not."},
    {"id": 42, "title": "title", "content": "We're all just star stuff, trying to find our place in the cosmos."},
    {"id": 43, "title": "title", "content": "Every time we inhale, we're breathing in atoms that were once part of someone or something else."},
    {"id": 44, "title": "title", "content": "If our pets could understand us, they'd probably wonder why we spend so much time staring at glowing rectangles."},
    {"id": 45, "title": "title", "content": "The universe is under no obligation to make sense to us, yet we strive to understand it anyway."},
    {"id": 46, "title": "title", "content": "The sound of waves crashing is nature's symphony."},
    {"id": 47, "title": "title", "content": "We're all just grains of sand in the hourglass of time."},
    {"id": 48, "title": "title", "content": "When we look up at the night sky, we're peering into the past."},
    {"id": 49, "title": "title", "content": "Life is like a box of chocolates; you never know what you're gonna get."},
    {"id": 50, "title": "title", "content": "If we could see the air around us, it would probably look like a chaotic dance of molecules."},
    {"id": 51, "title": "title", "content": "The feeling of déjà vu is like a glitch in the matrix of reality."},
    {"id": 52, "title": "title", "content": "We're all just passengers on Spaceship Earth, hurtling through the cosmos at incredible speeds."},
    {"id": 53, "title": "title", "content": "The concept of 'tomorrow' is both exciting and terrifying; it holds the promise of new beginnings but also the uncertainty of what's to come."},
    {"id": 54, "title": "title", "content": "If we could taste words, conversations would be a lot more flavorful."},
    {"id": 55, "title": "title", "content": "Every time you clean a vacuum cleaner, you become a vacuum cleaner."},
    {"id": 56, "title": "title", "content": "Saying 'I slept like a baby' implies that you woke up crying every two hours."},
    {"id": 57, "title": "title", "content": "The fact that we yawn when we're tired and when we're bored shows just how sleepy and bored we really are."},
    {"id": 58, "title": "title", "content": "Cereal is just cold soup with little crunch croutons."},
    {"id": 59, "title": "title", "content": "If two mind readers are reading each other's minds, whose mind are they actually reading?"},
    {"id": 60, "title": "title", "content": "A vending machine is just a giant metal lunchbox."},
    {"id": 61, "title": "title", "content": "Water bottles are just portable lakes."},
    {"id": 62, "title": "title", "content": "Sneezing is like your nose's way of high-fiving your face."},
    {"id": 63, "title": "title", "content": "When you think about it, saying 'I see' is really just confirming that you have functioning eyes."},
    {"id": 64, "title": "title", "content": "The first person to milk a cow was probably really, really thirsty."},
    {"id": 65, "title": "title", "content": "A doorbell is just a person who knocks louder."},
    {"id": 66, "title": "title", "content": "Life is like a camera; focus on the good times, develop from the negatives, and if things don't work out, take another shot."},
    {"id": 67, "title": "title", "content": "If you replace 'W' with 'T' in 'What, Where, and When,' you get the answer to each of them."},
    {"id": 68, "title": "title", "content": "The word 'bed' looks like a bed."},
    {"id": 69, "title": "title", "content": "If Cinderella's shoe fit perfectly, why did it fall off in the first place?"},
    {"id": 70, "title": "title", "content": "Waking up is the second hardest thing in the morning."},
    {"id": 71, "title": "title", "content": "The concept of 'infinity' is mind-boggling; it's like a never-ending journey with no destination."},
    {"id": 72, "title": "title", "content": "The word 'alphabet' is just the first two letters of the Greek alphabet."},
    {"id": 73, "title": "title", "content": "If you're waiting for the waiter, aren't you the waiter?"},
    {"id": 74, "title": "title", "content": "When you're born, you're simultaneously the youngest person in the world and the oldest you've ever been."},
    {"id": 75, "title": "title", "content": "The concept of 'nothing' is something that humans struggle to comprehend."},
    {"id": 76, "title": "title", "content": "If we could see the air around us, the world would probably look a lot more crowded."},
    {"id": 77, "title": "title", "content": "Every time you clean your vacuum cleaner, you become the vacuum cleaner."},
    {"id": 78, "title": "title", "content": "The brain named itself."},
    {"id": 79, "title": "title", "content": "When you think about it, the word 'bed' actually looks like a bed."},
    {"id": 80, "title": "title", "content": "Every book you've ever read is just a different combination of 26 letters."},
    {"id": 81, "title": "title", "content": "If our fingers had fingertips, would we still call them fingertips?"},
    {"id": 82, "title": "title", "content": "If you try to fail and succeed, which one did you actually do?"},
    {"id": 83, "title": "title", "content": "When you're a kid, you want to grow up. When you're an adult, you wish you could be a kid again."},
    {"id": 84, "title": "title", "content": "If two vegans are arguing, is it still considered beef?"},
    {"id": 85, "title": "title", "content": "Your stomach thinks all potatoes are mashed."},
    {"id": 86, "title": "title", "content": "The word 'lisp' has an 's' sound in it, making it difficult for people with lisps to say."},
    {"id": 87, "title": "title", "content": "We are all just ghosts driving meat-coated skeletons made from stardust, riding a rock hurtling through space."},
    {"id": 88, "title": "title", "content": "The fact that we can't tickle ourselves is proof that our brains are constantly monitoring and filtering sensory information."},
    {"id": 89, "title": "title", "content": "Somewhere out there, there's a person who has eaten the exact same number of Skittles as you, but they have a completely different favorite color."},
    {"id": 90, "title": "title", "content": "If your shirt isn't tucked into your pants, then your pants are tucked into your shirt."},
    {"id": 91, "title": "title", "content": "When you drink alcohol, you're just borrowing happiness from tomorrow."},
    {"id": 92, "title": "title", "content": "Water is just ghost ice."},
    {"id": 93, "title": "title", "content": "Every time you clean a vacuum cleaner, you become a vacuum cleaner."},
    {"id": 94, "title": "title", "content": "Saying 'I slept like a baby' implies that you woke up crying every two hours."},
    {"id": 95, "title": "title", "content": "The fact that we yawn when we're tired and when we're bored shows just how sleepy and bored we really are."},
    {"id": 96, "title": "title", "content": "Cereal is just cold soup with little crunch croutons."},
    {"id": 97, "title": "title", "content": "If two mind readers are reading each other's minds, whose mind are they actually reading?"},
    {"id": 98, "title": "title", "content": "A vending machine is just a giant metal lunchbox."},
    {"id": 99, "title": "title", "content": "Water bottles are just portable lakes."},
    {"id": 100, "title": "title", "content": "Sneezing is like your nose's way of high-fiving your face."}
]);
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
      <u><p className="text-center font-bold "><a target="_blank" href='https://oia20.github.io/personalPortfolio/'>*Click to View More Of My Work*</a></p></u>
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
