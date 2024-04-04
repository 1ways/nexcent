import footerLogo from '../assets/footer-logo.svg'
import inst from '../assets/instagram.svg'
import dribble from '../assets/dribble.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import sendIcon from '../assets/send-icon.svg'

const Footer = () => {
  return (
    <footer className='py-16 bg-neutral-black '>
      <div className='container flex items-start justify-between lg:flex-col lg:items-center'>
        <div className='lg:flex lg:flex-col lg:items-center lg:mb-10'>
          <a className='cursor-pointer' href='#'>
            <img className='mb-10' src={footerLogo} alt='logo' />
          </a>
          <p className='font-inter font-normal text-base text-neutral-silver mb-10 lg:text-center'>
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
          <div className='flex items-center gap-5'>
            <img className='cursor-pointer' src={inst} alt='instagram' />
            <img className='cursor-pointer' src={dribble} alt='dribble' />
            <img className='cursor-pointer' src={twitter} alt='twitter' />
            <img className='cursor-pointer' src={youtube} alt='youtube' />
          </div>
        </div>

        <div className='lg:text-center lg:mb-10'>
          <h3 className='font-inter font-medium text-white text-xl mb-6'>
            Company
          </h3>
          <ul className='text-white font-inter font-normal flex flex-col gap-3 text-base'>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Contact us</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Testimonials</a>
            </li>
          </ul>
        </div>

        <div className='lg:text-center lg:mb-10'>
          <h3 className='font-inter font-medium text-white text-xl mb-6'>
            Support
          </h3>
          <ul className='text-white font-inter font-normal flex flex-col gap-3'>
            <li>
              <a href='#'>Help center</a>
            </li>
            <li>
              <a href='#'>Terms of service</a>
            </li>
            <li>
              <a href='#'>Legal</a>
            </li>
            <li>
              <a href='#'>Privacy policy</a>
            </li>
            <li>
              <a href='#'>Status</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-inter font-medium text-white text-xl mb-6 lg:text-center'>
            Stay up to date
          </h3>
          <div className='bg-white rounded-md p-3'>
            <form className='flex items-center'>
              <input
                className='w-full outline-none border-none text-black font-inter pr-4 placeholder:text-black placeholder:font-inter'
                type='email'
                placeholder='Your email address'
                required
              />
              <button type='submit'>
                <img src={sendIcon} alt='send' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
