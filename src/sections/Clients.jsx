import client1 from '../assets/client-logo-1.svg'
import client2 from '../assets/client-logo-2.svg'
import client3 from '../assets/client-logo-3.svg'
import client4 from '../assets/client-logo-4.svg'
import client5 from '../assets/client-logo-5.svg'
import client6 from '../assets/client-logo-6.svg'
import client7 from '../assets/client-logo-3.svg'

const Clients = () => {
  return (
    <section className='pt-10' id='clients'>
      <div className='container text-center'>
        <h3 className='section-title'>
          Our Clients
        </h3>
        <p className='section-subtitle mb-10'>
          We have been working with some Fortune 500+ clients
        </p>
        <div className='grid grid-cols-7 w-full gap-5 md:grid-cols-3'>
          <div className='flex items-center justify-center'>
            <img src={client1} alt='client' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client2} alt='client' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client3} alt='client' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client4} alt='client' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client5} alt='client' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client6} alt='client' />
          </div>
          <div className='flex items-center justify-center'>
            <img src={client7} alt='client' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
