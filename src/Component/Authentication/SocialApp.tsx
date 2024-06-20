import { Facebook, Linkedin, Twitter } from 'react-feather'
import { Link } from 'react-router-dom'
import { FacebookHeading, LinkedInHeading, TwitterHeading } from '../../utils/Constant'

const SocialApp = () => {
  return (
    <div className="social mt-4">
      <div className="btn-showcase">
        <Link
          className="btn btn-light"
          to="https://www.linkedin.com/login"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="txt-linkedin" /> {LinkedInHeading}
        </Link>
        <Link
          className="btn btn-light"
          to="https://twitter.com/login?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="txt-twitter" />
          {TwitterHeading}
        </Link>
        <Link
          className="btn btn-light"
          to="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook className="txt-fb" />
          {FacebookHeading}
        </Link>
      </div>
    </div>
  )
}

export default SocialApp