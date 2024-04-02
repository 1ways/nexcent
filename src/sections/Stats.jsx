import stats1 from '../assets/stats-1.svg'
import stats2 from '../assets/stats-2.svg'
import stats3 from '../assets/stats-3.svg'
import stats4 from '../assets/stats-4.svg'
import StatsCard from '../components/StatsCard'

const Stats = () => {
  return (
    <section className='bg-neutral-silver py-16'>
      <div className='container flex justify-between items-center lg:flex-col'>
        <div>
          <h3 className='text-neutral-d-grey font-bold font-inter text-4xl mb-2 lg:text-center'>
            Helping a local
            <br />{' '}
            <span className='text-brand-primary'>business reinvent itself</span>
          </h3>
          <p className='font-inter text-base lg:text-center'>
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className='grid grid-rows-2 grid-cols-2 sm:grid-rows-4 sm:grid-cols-1 sm:gap-4'>
          <StatsCard imgURL={stats1} text='2,245,341' subtext='Members' />
          <StatsCard imgURL={stats2} text='46,328' subtext='Clubs' />
          <StatsCard imgURL={stats3} text='828,867' subtext='Event Bookings' />
          <StatsCard imgURL={stats4} text='1,926,436' subtext='Payments' />
        </div>
      </div>
    </section>
  )
}

export default Stats
