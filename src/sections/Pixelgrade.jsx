import pixelImg from '../assets/pixelgrade-img.svg'
import Button from '../components/Button'

const Pixelgrade = () => {
  return (
    <section className='py-10'>
      <div className='container flex justify-between items-center lg:flex-col'>
        <div className='lg:order-1'>
          <img src={pixelImg} alt='Pixelgrade' width={440} height={430} />
        </div>
        <div className='flex-1 max-w-[660px] lg:text-center'>
          <h3 className='section-title max-w-[600px]'>
            The unseen of spending three years at Pixelgrade
          </h3>
          <p className='section-subtitle max-w-[630px] mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className='lg:flex lg:justify-center'>
            <Button label='Learn More' iconURL='' isFilled={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pixelgrade
