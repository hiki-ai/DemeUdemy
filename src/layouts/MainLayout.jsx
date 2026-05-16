import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import {
  Search,
  ShoppingCart,
  Globe,
  Menu,
  X,
  UserCircle,
  LayoutDashboard,
  Settings,
  Heart,
  Bell,
  Home,
  PlayCircle
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import Button from '../components/Button';
import CategoriesMenu from '../components/CategoriesMenu';

const MainLayout = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const globeRef = useRef(null);

  useEffect(() => {

    const handleScroll = () =>
      setIsScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);

  }, []);


  useEffect(() => {

    setActiveDropdown(null);
    setIsMenuOpen(false);

    window.scrollTo(0, 0);

  }, [location]);


  const portals = [

    {
      name: 'Student Portal',
      path: '/dashboard/student',
      icon: <UserCircle className="w-5 h-5" />,
      color: 'text-primary'
    },

    {
      name: 'Instructor Portal',
      path: '/dashboard/instructor',
      icon: <LayoutDashboard className="w-5 h-5" />,
      color: 'text-secondary'
    },

    {
      name: 'Admin Portal',
      path: '/dashboard/admin',
      icon: <Settings className="w-5 h-5" />,
      color: 'text-accent'
    },

  ];


  return (

    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">

      {/* NAVBAR */}

      <nav
        className={`
        fixed
        top-0
        left-0
        right-0
        z-[1000]
        border-b
        transition-all
        duration-300

        ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
            : 'bg-white py-3'
          }
        `}
      >

        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-2"
          >

            <div className="
            w-9
            h-9
            rounded-lg
            bg-purple-700
            flex
            items-center
            justify-center
            text-white
            font-black
            ">

              U

            </div>

            <span className="
            hidden
            sm:block
            text-xl
            font-black
            ">

              UAcademy

            </span>

          </Link>



          {/* DESKTOP NAV */}

          <div className="
          hidden
          lg:flex
          items-center
          gap-4
          flex-1
          ">

            <CategoriesMenu />

            {/* SEARCH */}

            <div className="flex-1 relative">

              <Search
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                w-5
                h-5
                text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search courses..."
                className="
                w-full
                border
                rounded-full
                py-3
                pl-12
                pr-6
                outline-none
                "
              />

            </div>



            <div className="flex items-center gap-5">

              <Link to="/business">
                Business
              </Link>

              <Link to="/teach">
                Teach
              </Link>


              <button className="relative">
                <Heart className="w-6 h-6" />
              </button>


              <button className="relative">

                <ShoppingCart className="w-6 h-6" />

                <span className="
                absolute
                -top-1
                -right-1
                bg-purple-700
                text-white
                text-[10px]
                rounded-full
                w-4
                h-4
                flex
                items-center
                justify-center
                ">

                  0

                </span>

              </button>


              <button>
                <Bell className="w-6 h-6" />
              </button>


              <Link to="/login">

                <Button variant="outline">

                  Log in

                </Button>

              </Link>


              <Link to="/signup">

                <Button>

                  Sign up

                </Button>

              </Link>

            </div>

          </div>



          {/* MOBILE RIGHT */}

          <div className="
          flex
          lg:hidden
          items-center
          gap-3
          ">

            <button>
              <Search className="w-6 h-6" />
            </button>


            <button className="relative">

              <ShoppingCart className="w-6 h-6" />

              <span className="
              absolute
              -top-1
              -right-1
              bg-purple-700
              text-white
              text-[10px]
              rounded-full
              w-4
              h-4
              flex
              items-center
              justify-center
              ">

                0

              </span>

            </button>


            <button
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
            >

              {isMenuOpen
                ? <X className="w-7 h-7" />
                : <Menu className="w-7 h-7" />
              }

            </button>

          </div>

        </div>



        {/* MOBILE DRAWER */}

        <AnimatePresence>

          {isMenuOpen && (

            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="
                fixed
                inset-0
                bg-black/30
                z-[998]
                "
              />

              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                className="
                fixed
                top-0
                left-0
                bottom-0
                w-[280px]
                bg-white
                z-[999]
                shadow-2xl
                "
              >

                <div className="
                p-5
                border-b
                flex
                justify-between
                items-center
                ">

                  <span className="font-black text-xl">
                    UAcademy
                  </span>

                  <button
                    onClick={() =>
                      setIsMenuOpen(false)
                    }
                  >

                    <X className="w-6 h-6" />

                  </button>

                </div>


                <div className="p-5 space-y-5">

                  <Link to="/business">
                    Business
                  </Link>

                  <Link to="/teach">
                    Teach
                  </Link>

                  <Link to="/pricing">
                    Pricing
                  </Link>

                </div>

              </motion.div>

            </>

          )}

        </AnimatePresence>

      </nav>



      {/* PAGE CONTENT */}

      <main className="
      flex-1
      pt-[72px]
      lg:pt-[80px]

      pb-[80px]
      lg:pb-0
      ">

        <Outlet />

      </main>



      {/* DESKTOP FOOTER */}

      <footer className="
      hidden
      lg:block
      bg-[#071126]
      text-white
      pt-20
      pb-10
      ">

        <div className="container mx-auto px-8">

          <div className="
          grid
          grid-cols-4
          gap-10
          ">

            <div>

              <h3 className="font-bold mb-5">
                Platform
              </h3>

              <p>Business</p>
              <p>Teach</p>
              <p>Pricing</p>

            </div>


            <div>

              <h3 className="font-bold mb-5">
                Resources
              </h3>

              <p>Blog</p>
              <p>Support</p>

            </div>


            <div>

              <h3 className="font-bold mb-5">
                Legal
              </h3>

              <p>Terms</p>
              <p>Privacy</p>

            </div>

          </div>

        </div>

      </footer>



      {/* MOBILE FIXED NAVBAR */}

      <div className="
fixed bottom-0 left-0 right-0
bg-white border-t h-[65px]
flex justify-around items-center
shadow-lg z-[1000] lg:hidden
">

<Link
to="/"
className={`flex flex-col items-center text-xs
${location.pathname==="/"?"text-purple-700":"text-gray-600"}
`}
>
<Home size={20}/>
<span>Featured</span>
</Link>


{/* <Link
to="/search"
className={`flex flex-col items-center text-xs
${location.pathname==="/search"
?"text-purple-700"
:"text-gray-600"}
`}
>

<Search size={20}/>
<span>Search</span>

</Link> */}


<Link
to="/learning"
className={`flex flex-col items-center text-xs
${location.pathname==="/learning"
?"text-purple-700"
:"text-gray-600"}
`}
>

<PlayCircle size={20}/>
<span>Learning</span>

</Link>


<Link
to="/wishlist"
className={`flex flex-col items-center text-xs
${location.pathname==="/wishlist"
?"text-purple-700"
:"text-gray-600"}
`}
>

<Heart size={20}/>
<span>Wishlist</span>

</Link>


<Link
to="/account"
className={`flex flex-col items-center text-xs
${location.pathname==="/account"
?"text-purple-700"
:"text-gray-600"}
`}
>

<UserCircle size={20}/>
<span>Account</span>

</Link>

</div>
    </div>

  );

};

export default MainLayout;