import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const [menButtonActive, setMenButtonActive] = useState(true);
  const [womenButtonActive, setWomenButtonActive] = useState(false);

  const handleMenButtonClick = () => {
    setMenButtonActive(true);
    setWomenButtonActive(false);
    navigate('/men')
  };

  const handleWomenButtonClick = () => {
    setMenButtonActive(false);
    setWomenButtonActive(true);
    navigate('/women')

  };

  return (
    <div className='HeaderContainer'>
      
        <button
          onClick={handleMenButtonClick}
          className={menButtonActive ? 'activeHeaderButton' : 'inactiveHeaderButton'}
        >
          Men
        </button>
      
        <button
          onClick={handleWomenButtonClick}
          className={womenButtonActive ? 'activeHeaderButton' : 'inactiveHeaderButton'}
        >
          Women
        </button>
    </div>
  );
};

export default Header;
