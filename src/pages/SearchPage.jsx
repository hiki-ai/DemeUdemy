import {
  Search,
  Mic
} from "lucide-react";

import { useState } from "react";
import { courses } from "../data/dummy";

export default function SearchPage() {

  const [query, setQuery] = useState("");

  const categories = [
    "Praja Info",
    "English Speaking",
    "Youtube",
    "Instagram",
    "Business",
    "Part Time Income",
    "Mobile Tricks",
    "View All"
  ];


  const filtered = courses.filter(course =>
    course.title
      ?.toLowerCase()
      .includes(query.toLowerCase())
  );


  return (

    <div className="
    bg-black
    text-white
    min-h-screen
    p-4
    pb-24
    ">


      {/* SEARCH BAR */}

      <div className="
      flex
      gap-2
      items-center
      ">

        <div
          className="
          flex-1
          min-w-0

          bg-[#1e1e1e]

          rounded-2xl

          px-3
          py-3

          flex
          items-center
          gap-2

          border
          border-gray-700

          focus-within:border-purple-600
          transition
          "
        >

          <Search
            className="
            w-5
            h-5
            text-gray-400
            shrink-0
            "
          />

          <input
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }

            placeholder="Search Here"

            className="
            bg-transparent
            outline-none

            flex-1
            min-w-0

            text-sm

            placeholder:text-gray-500
            "
          />

        </div>



        <button
          className="
          bg-[#1e1e1e]

          p-3

          rounded-2xl

          border
          border-gray-700

          hover:border-purple-600

          shrink-0
          "
        >

          <Mic className="w-5 h-5" />

        </button>

      </div>



      {/* CATEGORY ICONS */}

      <div className="
      grid
      grid-cols-4
      gap-5

      mt-8

      text-center
      ">

        {categories.map(cat => (

          <div key={cat}>

            <div
              className="
              w-14
              h-14

              sm:w-16
              sm:h-16

              rounded-full

              bg-[#1e1e1e]

              mx-auto
              mb-2
              "
            />

            <p className="
            text-[11px]
            sm:text-sm
            ">

              {cat}

            </p>

          </div>

        ))}

      </div>



      {/* TOP VIDEOS */}

      <h2 className="
      text-2xl
      font-bold

      mt-10
      mb-5
      ">

        Top Videos

      </h2>



      <div className="
      grid
      grid-cols-2
      sm:grid-cols-3

      gap-3
      ">

        {filtered.slice(0, 6).map(course => (

          <div
            key={course.id}

            className="
            bg-[#111]

            rounded-xl

            overflow-hidden
            "
          >

            <img
              src={course.image}

              className="
              w-full

              h-[130px]
              sm:h-[150px]

              object-cover
              "
            />

            <div className="p-2">

              <p
                className="
                text-xs
                font-semibold

                line-clamp-2
                "
              >

                {course.title}

              </p>

            </div>

          </div>

        ))}

      </div>



      {/* RECOMMENDED */}

      <h2 className="
      text-2xl
      font-bold

      mt-10
      mb-5
      ">

        Recommended

      </h2>


      <div className="
      flex
      gap-4

      overflow-x-auto

      no-scrollbar
      ">

        {courses.map(course => (

          <div
            key={course.id}

            className="
            min-w-[140px]

            bg-[#111]

            rounded-xl

            overflow-hidden
            "
          >

            <img
              src={course.image}

              className="
              w-full

              h-[140px]

              object-cover
              "
            />


            <p
              className="
              text-xs

              p-2

              line-clamp-2
              "
            >

              {course.title}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}