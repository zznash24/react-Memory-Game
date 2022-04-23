import './MemoryCard.css';
import logo from '../images/digitalcrafts-logo-white-y.png';
import { useState } from 'react';


const MemoryCard = () => {
  const [isFlipped, setFlipped] = useState(false)

  let handleClick = () => {
    setFlipped(!isFlipped)
  }

  return (
    <div className='MemoryCard'>
      <div className={`MemoryCardInner ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className='MemoryCardBack'>
          <img src={logo} />
        </div>
        <div className='MemoryCardFront'>
          🤮
        </div>
      </div>
    </div>
  )
}

export default MemoryCard;