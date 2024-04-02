import Button from '../components/Button'
import rightArrow from '../assets/right-arrow-white.svg'

const Demo = () => {
  return (
    <section className='bg-neutral-silver py-8' id='demo'>
      <div className='container flex flex-col items-center'>
        <h2 className='text-6xl max-w-[820px] mb-8 text-center font-inter font-medium leading-tight text-neutral-black xsm:text-4xl'>
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <Button label='Get a Demo' iconURL={rightArrow} isFilled={true} />
      </div>
    </section>
  )
}

export default Demo
