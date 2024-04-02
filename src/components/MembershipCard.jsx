const MembershipCard = ({ imgURL, title, text }) => {
  return (
    <div className='rounded-md shadow p-6 flex flex-col items-center lg:w-full'>
      <div className='flex flex-col items-center justify-center'>
        <img className='mb-4' src={imgURL} alt='membership' />
        <h4 className='text-3xl font-inter font-bold text-neutral-d-grey max-w-[260px] lg:max-w-[100%] text-center mb-2 sm:text-xl'>
          {title}
        </h4>
      </div>
      <p className='text-base max-w-[240px] lg:max-w-[100%] text-center text-neutral-grey font-inter'>
        {text}
      </p>
    </div>
  )
}

export default MembershipCard
