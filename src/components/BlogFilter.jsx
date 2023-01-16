import {useState, useEffect} from 'react'
import {FaCss3Alt , FaReact , FaSass , FaCode,FaNodeJs} from 'react-icons/fa'
import {TbBrandJavascript,TbBrandNextjs} from 'react-icons/tb'
import {BsArrowRightCircle} from 'react-icons/bs'
const items = [
    
    {
      name : 'css',
      icon : <FaCss3Alt />
    },
    {
      name : 'javascript',
      icon : <TbBrandJavascript />
    },
    {
      name : 'react',
      icon : <FaReact />
    },
    // {
    //   name : 'nextjs',
    //   icon : < TbBrandNextjs />
    // },
    {
      name : 'sass',
      icon : < FaSass />
    },
    
    {name: 'nodejs',
    icon : <FaNodeJs />
    },
    {name : 'All',
     icon : <FaCode />
    }
  ]

const BlogFilter = (props) => {
    const {posts} = props
    
  const [filterBlog, setFilterBlog] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')

    const handleBlogFilter = (item) => {
        
        setActiveFilter(item)
        setTimeout(() => {
          if (item === 'All') {
            setFilterBlog(posts)
          }
          else {
            setFilterBlog(posts.filter(post => {
                post.tags.includes(item)
  console.log(post.tags)

            }))
    
          }
        }, 500)
      }
    
      useEffect(() => {
        setFilterBlog(posts)
    
      }, [posts])

  return (
    <>
    <div
      className="blogFilter">
       {items.map((item,index) => (
         <div
          key={index}
         className={`filterItem ${activeFilter === item.name ? 'active' : ''}`} 
         onClick={() => handleBlogFilter(item.name)}
         >
          <span> {item.icon && item.icon} </span>
          <span>{item.name}</span>
         </div>
       ))}
      </div>

      <section className="grid">
			{
			filterBlog.map((post) => (
					
				<article className="article" key={post.url}>
					<div className="container">
						<div className="title">
							<h3>
								<a href={post.url}>{post.frontmatter.title}</a>
							</h3>

							<p className="time">
							<time>
								
								{new Date(post.frontmatter.pubDate).toLocaleDateString('en-us', {
									year: 'numeric',
									month: 'short',
									day: 'numeric',
								})}
							</time>
							| {post.frontmatter.readingTime}
							</p> 
						<p>{post.frontmatter.description}</p>

						<p style={{color : 'var(--secondary-color)'}}><a href={post.url}> Read More <BsArrowRightCircle /></a></p>

						</div>

					</div>
			
				</article>
				
			))
			}
		</section>
    </>
  )
}

export default BlogFilter