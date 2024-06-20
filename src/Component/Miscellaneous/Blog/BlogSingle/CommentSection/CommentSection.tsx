import { H4, LI, UL } from '../../../../../AbstractElements'
import { blogSingleData } from '../../../../../Data/Miscellaneous/Blog/BlogDetails'
import { Comments } from '../../../../../utils/Constant'
import BlogComment from './BlogComment'

const CommentSection = () => {
  return (
    <section className="comment-box">
      <H4>{Comments}</H4>
      <hr />
      <UL className='simple-list'>
        {blogSingleData.map((data,i)=>(
          <LI key={i}>
            {data.id !== 2 ?
              <BlogComment data={data} /> : 
              <UL className='simple-list flex-row'>
                <LI>
                  <BlogComment data={data} />
                </LI>
              </UL>
            }
          </LI>
        ))}
    </UL>
    </section>
  )
}

export default CommentSection