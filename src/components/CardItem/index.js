// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails

  return (
    <li className="card">
      <h1 className="role-name">{title}</h1>
      <p className="role-des">{description}</p>
      <img src={imgUrl} alt="snap" className="image-size" />
    </li>
  )
}

export default CardItem
