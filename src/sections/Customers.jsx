import customersImg from '../assets/customers-img.jpg'
import Button from '../components/Button'
import customerComp1 from '../assets/client-logo-1.svg'
import customerComp2 from '../assets/client-logo-2.svg'
import customerComp3 from '../assets/client-logo-3.svg'
import customerComp4 from '../assets/client-logo-4.svg'
import customerComp5 from '../assets/client-logo-5.svg'
import customerComp6 from '../assets/client-logo-6.svg'
import rightArrow from '../assets/right-arrow.svg'

const Customers = () => {
  return (
    <section className='py-8 bg-neutral-silver' id='customers'>
      <div className='container flex items-center justify-between lg:flex-col '>
        <div className='rounded-lg shadow mr-5 lg:mr-0 lg:mt-5 lg:order-1'>
          <img src={customersImg} alt='customer' />
        </div>
        <div className='flex-1 max-w-[748px] lg:flex lg:flex-col lg:items-center'>
          <p className='font-inter text-neutral-grey text-base font-normal mb-4'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h4 className='font-inter font-medium text-2xl text-brand-primary mb-2'>
            Tim Smith
          </h4>
          <p className='font-inter font-normal text-base text-neutral-l-grey xsm:text-center'>
            British Dragon Boat Racing Association
          </p>
          <div className='mt-8 flex items-center gap-10 xl:gap-5 sm:flex-col'>
            <div className='flex items-center gap-10 xl:gap-5 xsm:flex-wrap xsm:justify-center'>
              <img src={customerComp1} alt='company' />
              <img src={customerComp2} alt='company' />
              <img src={customerComp3} alt='company' />
              <img src={customerComp4} alt='company' />
              <img src={customerComp5} alt='company' />
              <img src={customerComp6} alt='company' />
            </div>
            <Button
              label='Meet all customers'
              iconURL={rightArrow}
              isFilled={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customers
