import React, { useState, useEffect } from 'react';
import './App.css';
import "./tailindex.css";

function App() {
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([{"id":1,"title":"Dino Nuggets","content":"Dinosaurs went extinct except for the few of them that evolved into birds, which turned into chickens. Humans then kill the chicken and turn them into dinosaurs (dino nuggets)."},{"id":3,"title":"Communication","content":"We live in a world where we can communicate instantly with someone on the other side of the planet, yet sometimes struggle to have a conversation with the person sitting next to us."},{"id":4,"title":"books","content":"Life is like a book where we're all simultaneously readers and authors, flipping through pages of experiences while writing our own unique story with every decision we make."},{"id":6,"title":"Time","content":"Time is the ultimate currency of life. We spend it without hesitation, yet we cannot save it or earn it back. The value of each moment lies in how we choose to invest it."},{"id":7,"title":"Stars","content":"Stars shine brightest in the darkest of nights, teaching us that even in our lowest moments, there's potential for brilliance."},{"id":8,"title":"","content":"Life is like a book where we're all simultaneously readers and authors, flipping through pages of experiences while writing our own unique story with every decision we make."},{"id":9,"title":"title","content":"The brain named itself."},{"id":10,"title":"title","content":"If you're waiting for the waiter, aren't you the waiter?"},{"id":11,"title":"title","content":"When you think about it, mirrors are just real-life portals to parallel universes."},{"id":12,"title":"title","content":"Every time you clean your vacuum cleaner, you become the vacuum cleaner."},{"id":13,"title":"title","content":"If two mind readers are reading each other's minds, whose mind are they actually reading?"},{"id":14,"title":"title","content":"The \"snooze\" button on alarm clocks is like a \"temporary denial\" button for reality."},{"id":15,"title":"title","content":"We are all time travelers, moving forward at a rate of one second per second."},{"id":16,"title":"title","content":"In the future, there will be old people listening to rap music and saying, \"Back in my day, music had real lyrics.\""},{"id":17,"title":"title","content":"The word \"bed\" looks like a bed."},{"id":18,"title":"title","content":"When you're a kid, you want to be an adult. When you're an adult, you want to be a kid again."},{"id":19,"title":"title","content":"If two vegans are arguing, is it still considered beef?"},{"id":20,"title":"title","content":"Your stomach thinks all potatoes are mashed."},{"id":21,"title":"title","content":"The word \"lisp\" has an \"s\" sound in it, making it difficult for people with lisps to say."},{"id":22,"title":"title","content":"We are all just ghosts driving meat-coated skeletons made from stardust, riding a rock hurtling through space."},{"id":23,"title":"title","content":"The fact that we can't tickle ourselves is proof that our brains are constantly monitoring and filtering sensory information."},{"id":24,"title":"title","content":"Somewhere out there, there's a person who has eaten the exact same number of Skittles as you, but they have a completely different favorite color."},{"id":25,"title":"title","content":"If your shirt isn't tucked into your pants, then your pants are tucked into your shirt."},{"id":26,"title":"title","content":"When you drink alcohol, you're just borrowing happiness from tomorrow."},{"id":27,"title":"title","content":"Water is just ghost ice."},
    {"id": 28, "title": "title", "content": "If cats could text you back, they wouldn’t."},
    {"id": 29, "title": "title", "content": "Watermelon candy is often green but with real watermelon, we never eat the green part"},
    {"id": 30, "title": "title", "content": "if a fly loses its wings, is it now called a walk?"},
    {"id": 31, "title": "title", "content": "There are two E’s in bee, but they’re both silent."},
    {"id": 32, "title": "title", "content": "If life were a video game, I wonder what kind of stats I’d have."},
    {"id": 33, "title": "title", "content": "You will never stand backward on a staircase."},
    {"id": 34, "title": "title", "content": "The number of people older than you never goes up."},
    {"id": 35, "title": "title", "content": "One day, you’ll be someone’s ancestor. "},
    {"id": 36, "title": "title", "content": "Therapists talk you into brainwashing yourself."},
    {"id": 37, "title": "title", "content": "Having a toddler in their “Why?” phase makes you realize how much you know and don’t know about things."},
    {"id": 38, "title": "title", "content": "We go to work by car each day, taking the same route, but almost never encounter the same cars along the way."},
    {"id": 39, "title": "title", "content": "It’s likely that over 99% of the trees that you look at will be still here when you’re dead"},
    {"id": 40, "title": "title", "content": "You see people every single day that you’ll never see again."},
    {"id": 41, "title": "title", "content": "I wonder if there are any time combinations on the clock that I’ve never seen."},
    {"id": 42, "title": "title", "content": "Someone out there vividly remembers something you said that you have completely forgotten."},
    {"id": 43, "title": "title", "content": "A different version of you exists in the minds of everyone that knows you."},
    {"id": 44, "title": "title", "content": "Heat, Pressure and Time. The three things that make a diamond are also the three things that make a waffle. "},
    {"id": 45, "title": "title", "content": "Black Friday and Cyber Monday deals really put into perspective how much companies could sell items for."},
    {"id": 46, "title": "title", "content": "The sinking of the Titanic must have been a miracle to the lobsters in the kitchen."},
    {"id": 47, "title": "title", "content": "Remember when teachers used to say, “You’ll never be walking around with a calculator in your pocket.” Well, look at us now!"},
    {"id": 48, "title": "title", "content": "We’ll never really know what it smells like underwater."},
    {"id": 49, "title": "title", "content": "When you give someone food, you’re feeding them. But when you give them water, you aren’t watering them."},
    {"id": 50, "title": "title", "content": "Most people pull their phones out of their pockets to check the time. We are reverting to the era of pocket watches."},
    {"id": 51, "title": "title", "content": "Every broken clock tells you the exact time it passed away. "},
    {"id": 52, "title": "title", "content": "Social anxiety is basically conspiracy theories about yourself. "},
    {"id": 53, "title": "title", "content": "Making a typo in an online argument is the equivalent of voice cracking in a verbal argument."},
    {"id": 54, "title": "title", "content": "Teenagers drive like they’re on borrowed time. Meanwhile, elderly people drive like they’ve got all the time in the world."},
    {"id": 55, "title": "title", "content": "Watching a graduation ceremony is like sitting through a movie that’s entirely end credits."},
    {"id": 56, "title": "title", "content": "The object of golf is to play the least amount of golf."},
    {"id": 57, "title": "title", "content": "Turtles can never have sleepovers because they always sleep at home."},
    {"id": 58, "title": "title", "content": "Maybe urinals were invented when a tall guy walked by the sinks and asked, “Why not?”"},
    {"id": 59, "title": "title", "content": "While we sleep, our brains make up stories and then get scared of them."},
    {"id": 60, "title": "title", "content": "Muffins are to cupcakes as smoothies are to milkshakes. "},
    {"id": 61, "title": "title", "content": "Are those who sneeze a lot the most blessed?"},
    {"id": 62, "title": "title", "content": "Searching for a new laptop online is basically forcing your current computer to dig its own grave."},
    {"id": 63, "title": "title", "content": "Pregnant women are the only true bodybuilders. "},
    {"id": 64, "title": "title", "content": "Teeth are the only problem where if you ignore them, they will go away."},
    {"id": 65, "title": "title", "content": "Once you have a Ph.D., every meeting you go to becomes a doctor’s appointment."},
    {"id": 66, "title": "title", "content": "Batman would look ridiculous trying to solve crimes outside on a sunny day."},
    {"id": 67, "title": "title", "content": "Clapping your hands is just high-fiving yourself. "},
    {"id": 68, "title": "title", "content": "If tomatoes are fruit, then ketchup is jam."},
    {"id": 69, "title": "title", "content": "Why aren’t iPhone chargers called Apple juice?"},
    {"id": 70, "title": "title", "content": "Which orange came first – the color, or the fruit?"},
    {"id": 71, "title": "title", "content": "Someone’s mom probably used you as a bad example for her kids."},
    {"id": 72, "title": "title", "content": "In order to fall asleep, we have to pretend to be asleep."},
    {"id": 73, "title": "title", "content": "Math is the only place where someone would buy 60 watermelons and 40 cantaloupes, and no one asks any questions."},
    {"id": 74, "title": "title", "content": "If they mounted garbage trucks with cameras, you could update Google Maps street view every week."},
    {"id": 75, "title": "title", "content": "When we’re young, we sneak out of our houses to go to parties. When we’re old, we sneak out of parties to go home."},
    {"id": 76, "title": "title", "content": "Beans bags are just boneless sofas. "},
    {"id": 77, "title": "title", "content": "Fire trucks are really water trucks."},
    {"id": 78, "title": "title", "content": "I wonder what my dog named me. "},
    {"id": 79, "title": "title", "content": "Your first birthday is technically your second birthday."},
    {"id": 80, "title": "title", "content": "Crabs probably think that fish can fly."},
    {"id": 82, "title": "title", "content": "Peer pressure as an adult is seeing your neighbor mow their lawn."},
    {"id": 83, "title": "title", "content": "If James Bond is the most famous spy, wouldn’t that also make him the worst spy?"},
    {"id": 84, "title": "title", "content": "How do our brains remember that we forgot something, but we can’t remember what that thing was?"},
    {"id": 85, "title": "title", "content": "Nothing is on fire. Fire is on things."},
    {"id": 86, "title": "title", "content": "At one point in your life, you were exactly pi years old."},
    {"id": 87, "title": "title", "content": "Millions of people are doing the exact same thing as you are right now."},
    {"id": 88, "title": "title", "content": "Someday, someone will mention your name for the last time."},
    {"id": 89, "title": "title", "content": "Our alarm clocks are the theme songs of our own daily sitcom."},
    {"id": 90, "title": "title", "content": "Does a straw have one hole, or two?"},
    {"id": 91, "title": "title", "content": "It won't be long before people use 'the '20s, the '30s, and the '40s' to describe the 2020s, the 2030s, and the 2040s."},
    {"id": 92, "title": "title", "content": "Even when a balloon is half inflated, it is completely full."},
    {"id": 93, "title": "title", "content": "There are almost 7 billion smartphones in the world and we have yet to see a truly unexplainable phenomenon caught on video"},
    {"id": 94, "title": "title", "content": "Calling yourself an AI artist is almost exactly the same as calling yourself a cook for heating readymade meals in a microwave"},
    {"id": 95, "title": "title", "content": "Since spaceships aren’t available to everyone yet, the golden age of piracy hasn’t happened"},
    {"id": 96, "title": "title", "content": "All Voldemort needed to do to track Harry down was address a letter to him, give it to an owl, and follow the owl on broomstick."},
    {"id": 97, "title": "title", "content": "Percentage tipping is weird because a customer buying a more expensive meal had nothing to do with the server"},
    {"id": 98, "title": "title", "content": "It’s likely that at least one person’s Tinder date never showed up because they died first, but the person just thinks they got ghosted"},
    {"id": 99, "title": "title", "content": "In the 30 years since Pulp Fiction was released a $5 milkshake has gone from ridiculously expensive to incredibly cheap."},
    {"id": 100, "title": "title", "content": "Zombies having extra durability makes no sense"}
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
