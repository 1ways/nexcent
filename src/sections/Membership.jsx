import membership1 from '../assets/membership-1.svg'
import membership2 from '../assets/membership-2.svg'
import membership3 from '../assets/membership-3.svg'
import MembershipCard from '../components/MembershipCard'

const Membership = () => {
  return (
    <section className='pt-16'>
      <div className='container'>
        <h3 className='section-title text-center mx-auto'>
          Manage your entire community
          <br /> in a single system
        </h3>
        <p className='section-subtitle text-center mb-5'>
          Who is Nextcent suitable for?
        </p>
        <div className='flex items-center justify-between gap-4 lg:flex-col'>
          <MembershipCard
            imgURL={membership1}
            title='Membership Organisations'
            text='Our membership management software provides full automation of membership renewals and payments'
          />
          <MembershipCard
            imgURL={membership2}
            title='National Associations'
            text='Our membership management software provides full automation of membership renewals and payments'
          />
          <MembershipCard
            imgURL={membership3}
            title='Clubs And Groups'
            text='Our membership management software provides full automation of membership renewals and payments'
          />
        </div>
      </div>
    </section>
  )
}

export default Membership
