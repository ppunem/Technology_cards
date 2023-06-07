// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <div className="container">
      <li className={className}>
        <h1 className="role-name">{title}</h1>
        <p className="role-des">{description}</p>
        <img src={imgUrl} alt="snap" className="image-size" />
      </li>
    </div>
  )
}

export default CardItem
