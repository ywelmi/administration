import { LI } from '../../../../../AbstractElements'
import { ShowRatingProps } from '../../../../../Types/Application/SearchResult/SearchResult'

const ShowRating = ({item}:ShowRatingProps) => {
  return (
    <LI>
      {item.map((data, index) =>
        data === true ? (
          <i className="icofont icofont-ui-rating" key={index} />
        ) : (
          <i className="icofont icofont-ui-rate-blank" key={index}/>
        )
      )}
    </LI>
  )
}

export default ShowRating