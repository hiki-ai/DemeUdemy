import { Link } from "react-router-dom";
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
    <div className="bg-white min-h-screen pb-24 overflow-x-hidden">

      {/* TOP OFFER BAR */}
      <div className="bg-yellow-100 py-3 text-center text-sm font-medium">
        Get skills that boost careers
      </div>


      {/* HERO */}
      <section className="p-4">

        <div className="bg-gray-100 rounded-lg p-6">

          <h1 className="text-3xl font-bold mb-3">
            Thrive in your career
          </h1>

          <p className="text-gray-600 mb-6">
            Access curated courses for in-demand roles.
          </p>

          <button
            className="
            bg-purple-700
            text-white
            w-full
            py-3
            rounded
            font-semibold
            "
          >
            Try Personal Plan
          </button>

        </div>

      </section>



      {/* SECTION COMPONENT */}

      <Section
        title="Top courses in"
        highlight="Development"
      />


      {/* CATEGORIES */}

      <section className="px-4 mt-10">

        <div className="flex justify-between">

          <h2 className="font-bold text-2xl">

            Categories

          </h2>

          <span className="text-purple-700">

            See all

          </span>

        </div>


        <div className="flex gap-3 overflow-x-auto mt-5 no-scrollbar">

          {categories.map((item) => (

            <button
              key={item}
              className="
              border
              rounded-full
              px-5
              py-2
              whitespace-nowrap
              "
            >

              {item}

            </button>

          ))}

        </div>

      </section>



      <Section
        title="Top courses in"
        highlight="Business"
      />

      <Section
        title="Top courses in"
        highlight="Development"
      />

      <Section
        title="Trending"
        highlight="Courses"
      />

      <Section
        title="Top courses in"
        highlight="Personal Development"
      />

      <Section
        title="Top courses in"
        highlight="IT & Software"
      />



      {/* FIXED BOTTOM NAVBAR */}

      <div
        className="
        fixed
        bottom-0
        left-0
        right-0
        h-[65px]
        bg-white
        border-t
        flex
        justify-around
        items-center
        shadow-md
        z-50
        "
      >

        <NavItem
          icon={<Home size={22} />}
          text="Featured"
          active
        />

        <NavItem
          icon={<Search size={22} />}
          text="Search"
        />

        <NavItem
          icon={<PlayCircle size={22} />}
          text="Learning"
        />

        <NavItem
          icon={<Heart size={22} />}
          text="Wishlist"
        />

        <NavItem
          icon={<User size={22} />}
          text="Account"
        />

      </div>

    </div>
  );
}



/* SECTION */

function Section({ title, highlight }) {
  return (

    <section className="px-4 mt-12">

      <h2 className="font-bold text-2xl mb-5">

        {title}

        <span className="text-purple-700">

          {" "} {highlight}

        </span>

      </h2>


      <div className="flex overflow-x-auto gap-4 no-scrollbar">

        {courses.slice(0, 8).map((course) => (

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
          : "text-gray-600"
        }
      `}
    >

      {icon}

      <span>

        {text}

      </span>

    </button>

  );
}