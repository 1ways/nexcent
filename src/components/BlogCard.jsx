import Button from './Button'
import rightArrow from '../assets/right-arrow.svg'

const BlogCard = ({ imgURL, title }) => {
  return (
    <div className='relative'>
      <div>
        <img src={imgURL} alt='blog' />
      </div>
      <div className='absolute bg-neutral-silver rounded-lg p-4 flex flex-col items-center drop-shadow-2xl bottom-[-50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[320px] xsm:w-[280px]'>
        <h4 className='font-inter text-neutral-grey mb-4 text-center max-w-[285px] text-[20px] font-medium xsm:text-[18px]'>
          {title}
        </h4>
        <Button label='Readmore' iconURL={rightArrow} isFilled={false} />
      </div>
    </div>
  )
}

export default BlogCard
