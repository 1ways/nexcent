import howtoImg from '../assets/howto-img.svg'
import Button from '../components/Button'

const Howto = () => {
  return (
    <section className='py-10'>
      <div className='container flex justify-between items-center lg:flex-col'>
        <div className='lg:order-1'>
          <img
            className='lg:mt-6'
            src={howtoImg}
            alt='Howto'
            width={440}
            height={430}
          />
        </div>
        <div className='flex-1 max-w-[660px] lg:text-center'>
          <h3 className='section-title max-w-[600px]'>
            How to design your site footer like we did
          </h3>
          <p className='section-subtitle max-w-[630px] mb-8'>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <div className='lg:flex lg:justify-center'>
            <Button label='Learn More' iconURL='' isFilled={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Howto
