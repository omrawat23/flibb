import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isLoggedIn = true;

  return (
    <nav className='sticky z-[100] inset-x-0 top-0 w-[1512px] h-[104px] .grainy-light transition-all  '>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between py-1 sm:py-1 relative w-[1512px]'>
        <div className='flex space-x-16'>
          <Link href='/'>
          <span className="relative top-[24px] text-6xl font-bold leading-[56px] text-[#2d9f5a] font-montserrat-alternates">flib</span>

          </Link>


          <div className='flex space-x-16 mt-[40px]'>
            <Link href='http://localhost:3001/' className='text-[#6D736F] h-[24px] flex items-center font-Poppins leading-none'>
              Products
            </Link>
            <Link href='/api/company' className='text-[#6D736F] h-[24px] flex items-center font-Poppins leading-none'>
              Company
            </Link>
            <Link href='/pages/catalogue' className='text-[#6D736F] h-[24px] flex items-center font-Poppins leading-none'>
              Catalogue
            </Link>
            <Link href='/about' className='text-[#6D736F] h-[24px] flex items-center font-Poppins leading-none'>
              About Us
            </Link>
          </div>
          </div>

        

          <div className='relative flex items-center space-x-4 mt-[30px] '>
            {user ? (
              <>
                <Link href='/api/auth/logout'
                   className='px-4 py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-600 hover:bg-gray-100'>
                    Sign out
                </Link>
                <Link href='/configure/dash'
                   className='px-4 py-2 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-600'>
                    Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link href='/api/auth/login'
                   className='px-4 py-2 border border-gray-300 rounded-md body-22-regular text-[#707070] hover:bg-gray-100'>
                    Log in
                </Link>
                <Link href='/api/auth/register' className=" px-4 py-2 text-white rounded-md text-sm font-semibold p-[10px_24px] gap-10 bg-[#2C9F59]">
                  Sign up
                </Link>

              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
