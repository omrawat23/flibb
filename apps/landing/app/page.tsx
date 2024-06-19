import { Icons } from '../components/Icons'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Phone from '../components/Phone'
import { Reviews } from '../components/Reviews'
import { buttonVariants } from '../components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'
import YO from '../components/anime'
import Testimonials from '../components/Testimonials';
import Catalogue from '../components/Catalogue';
import Why from '../components/why'

export default function Home() {
  return (
    <div className='grainy-light mt-[-64px]'>
      <section className='flex flex-col items-center text-center py-24'>
        <h1 className='relative tracking-tight display-4'>
          Making your swag process
          <br />
          <span className='px-2 text-[#2C9F59]'>Hassle free</span>
        </h1>
        <p className='mt-8 text-xl leading-[1.625rem] font-normal text-[#979E9A]'>
          Welcome to Flib, where we create the perfect swag box for every budget for you.
        </p>

        <div className='mt-8 flex flex-col sm:flex-row items-center gap-5'>
          <Link href='/api/auth/login'>
            <button className='bg-green-600 text-[#FFFFFF] px-6 py-3 rounded-lg body-12 hover:bg-green-700 transition duration-300'>
              Create your Swagbox
            </button>
          </Link>
          <Link href='/contact'>
            <button className='bg-gray-200 text-[#217C45] px-6 py-3 rounded-lg body-12 hover:bg-gray-300 transition duration-300'>
              Contact Us
            </button>
          </Link>
        </div>

        <div className='relative w-full max-w-xl mt-24 ml-64'>
          <Phone className='w-64' imgSrc='https://i.pinimg.com/736x/b6/6d/22/b66d22a8b57900e75cbab27192cd58a3.jpg' />
        </div>
      </section>

      <div><Why /></div>
      <div className='pt-16'><Testimonials /></div>

      <div className='pt-16'><Reviews /></div>
      <div className='pt-32'><Catalogue /></div>

      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center header-1'>
                Upload your photo and get your own
               <br/> <span className='relative px-2  text-green-600'>
                swag box
                </span>
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
              <img
                src='/arrow.png' alt=''
                className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />

              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='https://i.postimg.cc/504kd74k/flib-illustration-2.png' alt=''
                  className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <Phone className='w-60' imgSrc='https://i.postimg.cc/504kd74k/flib-illustration-2.png' />
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              High-quality material
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Scratch- and fingerprint resistant coating
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Flexible and stretchable material  
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />5 year
              print warranty
            </li>

            <div className='flex justify-center'>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-8',
                })}
                href='/configure/upload'>
                Create your swag now <ArrowRight className='h-4 w-4 ml-1.5' />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
