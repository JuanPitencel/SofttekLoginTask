import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return 'Cargando...';

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {auth._id ? (
        <>
          <Header />

          <div className="md:flex md:min-h-screen">
            <Sidebar />

            <main
              className="p-10 flex-1"
              style={{
                backgroundImage:
                  'url(https://www2.softtek.com/hubfs/Landing%20pages%202022/FUTURE%20TOGETHER%20BACK%20IMAGES/FT-back3.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Outlet />
            </main>
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default RutaProtegida;
