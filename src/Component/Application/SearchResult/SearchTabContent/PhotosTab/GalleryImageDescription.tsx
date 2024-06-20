import React from 'react'
import { galleryImagePath } from '../../../../../Data/Application/SearchResult/SearchResult'
import { Link } from 'react-router-dom'
import { Href, MyPortfolioTitle } from '../../../../../utils/Constant'
import { H4, P } from '../../../../../AbstractElements'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { dynamicImage } from '../../../../../Service'

const GalleryImageDescription = () => {
  return (
    <Gallery withCaption>
      {galleryImagePath.map((item, index) => (
        <figure key={index} className="col-xl-3 col-sm-6 ">
          <Item original={dynamicImage(`${item}`)} width="1024" height="768" caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.">
            {({ ref, open }) => (
              <Link to={Href} onClick={open}>
                <img className="img-thumbnail" ref={ref} src={dynamicImage(`${item}`)} alt="thumbnail"/>
                <div className="caption">
                  <H4>{MyPortfolioTitle}</H4>
                  <P>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</P>
                </div>
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  )
}

export default GalleryImageDescription