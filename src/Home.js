import './Home.css'
import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Typed from 'typed.js';


function Home() {

  const body = document.querySelector("body");
  body.style.background = "white";
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Find new recipes.', 'Explore unique cuisines.', 'Discover new flavours.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='App'>

      <h1 className='heading'>Welcome to <span>RecipeHunt</span></h1>
      <div className='description'>
        <h2 className='typingAnimation'><span ref={el} /></h2>
      </div>

      <div className='sup'>
        <Link to="/recipes"><Button className='huntBtn text-light' ><strong>Search for Recipes</strong></Button></Link>
        <Link to="/filrecipe"><Button className='huntBtn text-light' ><strong>Explore Cuisines</strong></Button></Link>
        <Link to="/randrecipe"><Button className='huntBtn text-light' ><strong>Browse Randome Recipes</strong></Button></Link>
      </div>
    </div>

  );
}

export default Home;