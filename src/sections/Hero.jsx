import { Carousel } from '@material-tailwind/react'
import Button from '../components/Button'
import sliderImg from '../assets/slider-img.svg'

const Hero = () => {
  return (
    <section className='bg-neutral-silver'>
      <div className='container'>
        <Carousel
          className='w-full md:h-screen'
          prevArrow={() => {}}
          nextArrow={() => {}}
          autoplay={true}
          autoplayDelay={5000}
          transition={{ duration: 0.5 }}
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? 'w-8 bg-brand-primary'
                      : 'w-4 bg-brand-primary opacity-50'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className='w-full h-full pt-44 pb-24 sm:pt-28 sm:pb-14 lg:flex lg:items-center lg:justify-center'>
            <div className='flex justify-between items-center'>
              <div className='lg:text-center lg:flex lg:flex-col lg:items-center'>
                <h2 className='text-neutral-d-grey font-semibold text-7xl font-inter leading-tight max-w-[740px] md:text-6xl xsm:text-5xl'>
                  Lessons and insights
                  <br className='lg:nidden' />
                  <span className='text-brand-primary'>from 8 years</span>
                </h2>
                <p className='mt-3 sm:max-w-[350px] md:mt-6 mb-8 font-inter font-normal text-neutral-grey leading-normal'>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button label={'Register'} iconURL={''} isFilled={true} />
              </div>
              <div className='lg:hidden'>
                <img src={sliderImg} alt='slider-img' />
              </div>
            </div>
          </div>
          <div className='w-full h-full pt-44 pb-24 sm:pt-28 sm:pb-14 lg:flex lg:items-center lg:justify-center'>
            <div className='flex justify-between items-center'>
              <div className='lg:text-center lg:flex lg:flex-col lg:items-center'>
                <h2 className='text-neutral-d-grey font-semibold text-7xl font-inter leading-tight max-w-[740px] md:text-6xl xsm:text-5xl'>
                  Lessons and insights
                  <br className='lg:nidden' />
                  <span className='text-brand-primary'>from 8 years</span>
                </h2>
                <p className='mt-3 sm:max-w-[350px] md:mt-6 mb-8 font-inter font-normal text-neutral-grey leading-normal'>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button label={'Register'} iconURL={''} isFilled={true} />
              </div>
              <div className='lg:hidden'>
                <img src={sliderImg} alt='slider-img' />
              </div>
            </div>
          </div>
          <div className='w-full h-full pt-44 pb-24 sm:pt-28 sm:pb-14 lg:flex lg:items-center lg:justify-center'>
            <div className='flex justify-between items-center'>
              <div className='lg:text-center lg:flex lg:flex-col lg:items-center'>
                <h2 className='text-neutral-d-grey font-semibold text-7xl font-inter leading-tight max-w-[740px] md:text-6xl xsm:text-5xl'>
                  Lessons and insights
                  <br className='lg:nidden' />
                  <span className='text-brand-primary'>from 8 years</span>
                </h2>
                <p className='mt-3 sm:max-w-[350px] md:mt-6 mb-8 font-inter font-normal text-neutral-grey leading-normal'>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <Button label={'Register'} iconURL={''} isFilled={true} />
              </div>
              <div className='lg:hidden'>
                <img src={sliderImg} alt='slider-img' />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Hero
