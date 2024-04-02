import { useState } from 'react'
import logo from '../assets/logo.svg'
import close from '../assets/close.svg'
import burger from '../assets/burger.svg'

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const menuHandle = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <>
      <header className='absolute top-0 left-0 right-0 py-6 bg-neutral-silver z-30 flex items-center justify-between'>
        <nav className='container flex justify-between items-center'>
          <a href='#'>
            <img src={logo} alt='logo' />
          </a>
          <ul className='font-inter font-normal text-base flex items-center leading-normal gap-12 lg:gap-6 lg:hidden'>
            <li>
              <a
                className='hover:text-brand-primary transition-all delay-75'
                href='#'
              >
                Home
              </a>
            </li>
            <li>
              <a
                className='hover:text-brand-primary transition-all delay-75'
                href='#'
              >
                Service
              </a>
            </li>
            <li>
              <a
                className='hover:text-brand-primary transition-all delay-75'
                href='#'
              >
                About
              </a>
            </li>
            <li>
              <a
                className='hover:text-brand-primary transition-all delay-75'
                href='#'
              >
                Product
              </a>
            </li>
            <li>
              <a
                className='hover:text-brand-primary transition-all delay-75'
                href='#'
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                className='hover:text-brand-primary transition-all delay-75'
                href='#'
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className='flex lg:hidden items-center gap-8'>
            <button className='font-inter font-normal text-base leading-normal text-brand-primary active:text-brand-primary-light'>
              Login
            </button>
            <button className='font-inter font-normal text-base leading-normal text-white py-2.5 px-5 bg-brand-primary rounded-md active:ring-brand-primary-light active:ring'>
              Sign up
            </button>
          </div>
          <button
            className='hidden cursor-pointer lg:block'
            onClick={menuHandle}
          >
            {activeMenu ? (
              <img src={close} alt='close' />
            ) : (
              <img src={burger} alt='burger' />
            )}
          </button>
        </nav>
      </header>
      <div
        className={`hidden lg:flex lg:flex-col lg:items-center absolute z-10 right-0 left-0 bg-brand-primary p-5 transition-all delay-75 ease-in-out ${
          activeMenu ? 'top-[72px]' : 'top-[-100%]'
        }`}
      >
        <ul className='font-inter font-normal text-base leading-normal text-white text-center flex flex-col gap-2'>
          <li>
            <a className='' href='#'>
              Home
            </a>
          </li>
          <li>
            <a className='' href='#'>
              Service
            </a>
          </li>
          <li>
            <a className='' href='#'>
              About
            </a>
          </li>
          <li>
            <a className='' href='#'>
              Product
            </a>
          </li>
          <li>
            <a className='' href='#'>
              Testimonial
            </a>
          </li>
          <li>
            <a className='' href='#'>
              FAQ
            </a>
          </li>
        </ul>
        <hr className='my-4 w-full' />
        <div className='lg:flex hidden items-center gap-8'>
          <button className='font-inter font-normal text-base leading-normal text-white active:text-brand-primary-light'>
            Login
          </button>
          <button className='font-inter font-normal text-base leading-normal text-brand-primary py-2.5 px-5 bg-white rounded-md active:ring-brand-primary-light active:ring'>
            Sign up
          </button>
        </div>
      </div>
    </>
  )
}

export default NavBar
