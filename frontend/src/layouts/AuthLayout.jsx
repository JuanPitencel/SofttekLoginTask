import { Outlet } from 'react-router-dom'
import logo from '../assets/LogoCompleto-Website-20.webp'

const AuthLayout = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url("https://www.softtek.com/hubfs/Softtek/images/Photos/StkDigitalEnablers-StkHome.jpg")`
      }}
    >
      <div className='absolute top-0 left-0 w-1/5'>
      <img src={logo}
      className='w-full'
      alt='logo'/>
      </div>
      
      <main className="relative z-10 container mx-auto p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-1/2 bg-gray-700 bg-opacity-75 p-12 rounded-3xl text-white">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
