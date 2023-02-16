// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  changeRight = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState({count: count + 1})
    } else {
      this.setState({count: 3})
    }
  }

  changeLeft = () => {
    const {count} = this.state
    if (count <= 0) {
      this.setState({count: 0})
    } else {
      this.setState({count: count - 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div>
          <button
            type="button"
            onClick={this.changeLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div>
            <img
              src={reviewsList[count].imgUrl}
              alt={reviewsList[count].username}
            />
            <p>{reviewsList[count].username}</p>
            <p>{reviewsList[count].companyName}</p>
          </div>
          <button
            type="button"
            onClick={this.changeRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p>{reviewsList[count].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
