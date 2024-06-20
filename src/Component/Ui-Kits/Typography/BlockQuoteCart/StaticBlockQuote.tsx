import { P } from '../../../../AbstractElements'

const StaticBlockQuote = () => {
  return (
    <div className="figure d-block dark-blockquote">
      <blockquote className="blockquote light-card mb-2">
        <P className="mb-0">The only impossible journey is the one you never begin.</P>
        <span className="blockquote-footer pt-3">Tony Robbins</span>
      </blockquote>
    </div>
  )
}

export default StaticBlockQuote