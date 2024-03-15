import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-lists-container">
      {blogsList.map(each => (
        <BlogItem eachBlog={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
