const StatsCard = ({ imgURL, text, subtext }) => {
  return (
    <div className='flex items-center mx-7 mt-8'>
      <img className='mr-4' src={imgURL} alt='stats' width={48} height={48} />
      <div>
        <h4 className='font-inter text-3xl font-bold text-neutral-d-grey'>
          {text}
        </h4>
        <p className='font-inter text-neutral-grey'>{subtext}</p>
      </div>
    </div>
  )
}

export default StatsCard
