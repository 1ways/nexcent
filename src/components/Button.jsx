const Button = ({ label, iconURL, isFilled }) => {
  return (
    <button
      className={`font-inter font-medium flex items-center ${
        isFilled
          ? 'text-white bg-brand-primary rounded-md py-4 px-8 active:ring-brand-primary-light active:ring'
          : 'text-brand-primary active:text-brand-primary-light'
      }`}
    >
      {label}
      {iconURL && <img className='ml-2' src={iconURL} />}
    </button>
  )
}

export default Button
