import { Component } from 'react';
import './MemoryCard.css';
import logo from '../images/digitalcrafts-logo-white-y.png';

class MemoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    }
  }

  handleClick = () => {
    console.log('clicked')
    this.setState({
      isFlipped: !this.state.isFlipped
    })
    this.props.pickCard(this.props.index);
  }

  render() {
    // let memoryCardCSS = 'MemoryCardInner';
    // if (this.state.isFlipped) {
    //   memoryCardCSS = 'MemoryCardInner flipped';
    // }
    // let memoryCardCSS = this.state.isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner'
    return (
      <div className='MemoryCard'>
        <div className={`MemoryCardInner ${this.state.isFlipped ? 'flipped' : ''}`} onClick={this.handleClick}>
          <div className='MemoryCardBack'>
            <img src={logo} />
          </div>
          <div className='MemoryCardFront'>
            <br />
            {this.props.symbol}
          </div>
        </div>
      </div>
    )
  }
}

export default MemoryCard;