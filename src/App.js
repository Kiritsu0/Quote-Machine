import {useState, useEffect} from 'react'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaQuoteLeft} from 'react-icons/fa'

function App() {
  let quote_list = ["When I let go of what I am, I become what I might be.",
  "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
  "The best revenge is massive success.",
  "I didn’t fail the test. I just found 100 ways to do it wrong.",
  "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
  "The two most important days in your life are the day you are born and the day you find out why.",
  "You can never cross the ocean until you have the courage to lose sight of the shore.",
  "Nothing is impossible, the word itself says, “I’m possible!”",
  "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
  "Change your thoughts and you change your world.",
  "We become what we think about."
  ]
  let author_list = ["Lao Tzu",
  "Maimonides", 
  "Frank Sinatra", 
  "Benjamin Franklin", 
  "Jesse Owens", 
  "Mark Twain", 
  "Christopher Columbus",
  "Audrey Hepburn",
  "Leonardo da Vinci",
  "Norman Vincent Peale",
  "Earl Nightingale"
]

  const [number, setNumber] = useState(0)
  const [quote, setQuote] = useState(quote_list[number])
  const [author, setAuthor] = useState(author_list[number])

  const [opacity, setOpacity] = useState(1)

  const [color, setColor] = useState("#874e4")
  const letters = '0123456789ABCDEF';

  let quoteHandler = () => {
    setOpacity(0)

    setTimeout(() => {
      setOpacity(1)}, 600);

    const nextNumber = (number + 1) % quote_list.length;
    setNumber(nextNumber);
    setQuote(quote_list[nextNumber]);
    setAuthor(author_list[nextNumber]);

    let calc = "#"
    for (let i = 0; i < 6; i++) {
      calc += letters[Math.floor(Math.random() * 16)];
    }
    setColor(calc)
  };

  useEffect(() => {
    let calc = "#";
    for (let i = 0; i < 6; i++) {
      calc += letters[Math.floor(Math.random() * 16)];
    }
    setColor(calc);
  }, []);

  return (
    <div className="body" style={{backgroundColor: color}}>
      <div id="quote-box">
        <p id="text" style={{color: color, opacity: opacity}}><span id="quote-icon"><FaQuoteLeft /></span>{quote}</p>
        <i id="author" style={{color: color, opacity: opacity}}>{author}</i>
        <div id="links_button">
          <a className='share' href='twitter.com/intent/tweet' target="_blank" style={{backgroundColor: color}}><FaTwitter /></a>
          <a className='share' href='facebook.com' target="_blank" style={{backgroundColor: color}}><FaFacebook /></a>
          <button id="new-quote" onClick={quoteHandler} style={{backgroundColor: color}}>New quote</button>
        </div>
      </div>

    </div>
  );
}

export default App;
