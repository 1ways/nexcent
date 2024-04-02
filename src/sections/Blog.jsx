import blogImg1 from '../assets/blog-img-1.jpg'
import blogImg2 from '../assets/blog-img-2.jpg'
import blogImg3 from '../assets/blog-img-3.jpg'
import BlogCard from '../components/BlogCard'

const Blog = () => {
  return (
    <section className='pt-12 pb-32' id='blog'>
      <div className='container'>
        <h3 className='section-title text-center'>
          Caring is the new marketing
        </h3>
        <p className='section-subtitle text-center max-w-[628px] mx-auto mb-4 sm:max-w-[350px] sm:mx-auto'>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
        <div className='flex items-center justify-between gap-5 lg:flex-col lg:gap-24'>
          <BlogCard
            imgURL={blogImg1}
            title='Creating Streamlined Safeguarding Processes with OneRen'
          />
          <BlogCard
            imgURL={blogImg2}
            title='What are your safeguarding responsibilities and how can you manage them?'
          />
          <BlogCard
            imgURL={blogImg3}
            title='Revamping the Membership Model with Triathlon Australia'
          />
        </div>
      </div>
    </section>
  )
}

export default Blog
