import {
  Home,
  Search,
  PlayCircle,
  Heart,
  User
} from "lucide-react";

import CourseCard from "../components/CourseCard";
import { courses } from "../data/dummy";

const categories = [
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Lifestyle",
  "Photography",
];

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden pb-24">

      {/* MOBILE TOP BAR */}

      <div className="bg-yellow-100 py-3 text-center text-sm font-medium">
        Get skills that boost careers
      </div>


      {/* HERO */}

      <section className="p-4">

        <div className="bg-gray-100 rounded-lg p-6">

          <h1 className="text-3xl font-bold mb-3">
            Thrive in your career
          </h1>

          <p className="text-gray-600 mb-5">
            Access curated courses for demand roles.
          </p>

          <button
            className="
            bg-purple-700
            text-white
            rounded
            w-full
            py-3
            "
          >
            Try Personal Plan
          </button>

        </div>

      </section>



      <Section
        title="Top courses in"
        highlight="Development"
      />


      {/* CATEGORIES */}

      <section className="px-4 mt-10">

        <div className="flex justify-between">

          <h2 className="text-2xl font-bold">
            Categories
          </h2>

          <span className="text-purple-700">
            See all
          </span>

        </div>


        <div className="flex gap-3 overflow-x-auto mt-5 no-scrollbar">

          {categories.map((cat) => (

            <button
              key={cat}
              className="
              border
              rounded-full
              px-5
              py-2
              whitespace-nowrap
              "
            >

              {cat}

            </button>

          ))}

        </div>

      </section>



      <Section
        title="Top courses in"
        highlight="Business"
      />

      <Section
        title="Trending"
        highlight="Courses"
      />

      <Section
        title="Top courses in"
        highlight="IT & Software"
      />



      {/* FOOTER DESKTOP ONLY */}

      <footer
        className="
        hidden
        lg:block
        bg-[#071126]
        text-white
        mt-20
        p-12
        "
      >

        <div className="grid grid-cols-4 gap-10">

          <div>

            <h3 className="font-bold mb-4">
              Platform
            </h3>

            <p>Business</p>
            <p>Pricing</p>
            <p>About</p>

          </div>


          <div>

            <h3 className="font-bold mb-4">
              Resources
            </h3>

            <p>Blog</p>
            <p>Support</p>

          </div>


          <div>

            <h3 className="font-bold mb-4">
              Legal
            </h3>

            <p>Terms</p>
            <p>Privacy</p>

          </div>

        </div>

      </footer>



      {/* MOBILE FIXED NAVBAR */}

      <div
        className="
        fixed
        bottom-0
        left-0
        right-0

        bg-white
        border-t
        h-[65px]

        flex
        justify-around
        items-center

        shadow-md
        z-50

        lg:hidden
        "
      >

        <NavItem
          icon={<Home size={20} />}
          text="Featured"
          active
        />

        <NavItem
          icon={<Search size={20} />}
          text="Search"
        />

        <NavItem
          icon={<PlayCircle size={20} />}
          text="Learning"
        />

        <NavItem
          icon={<Heart size={20} />}
          text="Wishlist"
        />

        <NavItem
          icon={<User size={20} />}
          text="Account"
        />

      </div>

    </div>
  );
}



/* SECTION */

function Section({
  title,
  highlight
}) {

  return (

    <section className="px-4 mt-12">

      <h2 className="text-2xl font-bold mb-5">

        {title}

        <span className="text-purple-700">

          {" "}
          {highlight}

        </span>

      </h2>


      <div className="flex gap-4 overflow-x-auto no-scrollbar">

        {courses.slice(0, 8).map(course => (

          <div
            key={course.id}
            className="min-w-[180px]"
          >

            <CourseCard
              course={course}
            />

          </div>

        ))}

      </div>

    </section>

  );
}



/* NAV ITEM */

function NavItem({
  icon,
  text,
  active = false
}) {

  return (

    <button
      className={`
      flex
      flex-col
      items-center
      text-xs

      ${active
        ? "text-purple-700"
        : "text-gray-600"}
      `}
    >

      {icon}

      <span>

        {text}

      </span>

    </button>

  );

}