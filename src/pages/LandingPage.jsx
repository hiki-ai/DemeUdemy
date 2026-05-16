import { Link } from "react-router-dom";
import {
  Search,
  Home,
  Heart,
  User,
  PlayCircle,
  Star,
} from "lucide-react";

import CourseCard from "../components/CourseCard";
import { courses, companies } from "../data/dummy";

const categories = [
  "Development",
  "Design",
  "Marketing",
  "Business",
  "Lifestyle",
  "Photography",
];

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen pb-24">

      {/* TOP BANNER */}

      <div className="bg-yellow-100 text-center py-3 text-sm font-medium">
        Get skills that boost careers
      </div>

      {/* HERO */}

      <section className="p-4">

        <div className="bg-gray-100 rounded-lg p-6">

          <h1 className="text-3xl font-bold mb-3">
            Thrive in your career
          </h1>

          <p className="text-gray-600 mb-5">

            Access curated courses designed for demand roles.

          </p>

          <button className="bg-purple-700 text-white w-full py-3 rounded font-semibold">

            Try Personal Plan

          </button>

        </div>
      </section>



{/* SECTION COMPONENT */}

<section className="px-4">

<h2 className="text-2xl font-bold mb-4">

Top courses in

<span className="text-purple-700">

 Development

</span>

</h2>


<div className="flex overflow-x-auto gap-4 no-scrollbar">

{courses.slice(0,6).map((course)=>(

<div
key={course.id}
className="min-w-[180px]"
>

<CourseCard course={course}/>

</div>

))}

</div>

</section>



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

{categories.map((cat)=>(

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



{/* BUSINESS */}

<section className="px-4 mt-12">

<h2 className="text-2xl font-bold">

Top courses in

<span className="text-purple-700">

 Business

</span>

</h2>


<div className="flex overflow-x-auto gap-4 mt-5">

{courses.slice(2,8).map(course=>(

<div
key={course.id}
className="min-w-[180px]"
>

<CourseCard course={course}/>

</div>

))}

</div>

</section>



{/* DEVELOPMENT */}

<section className="px-4 mt-12">

<h2 className="text-2xl font-bold">

Top courses in

<span className="text-purple-700">

 Development

</span>

</h2>


<div className="flex overflow-x-auto gap-4 mt-5">

{courses.slice(1,8).map(course=>(

<div
key={course.id}
className="min-w-[180px]"
>

<CourseCard course={course}/>

</div>

))}

</div>

</section>



{/* COMPANY TRUST */}

<section className="px-4 mt-10">

<div className="border rounded-lg p-5">

<h2 className="font-semibold text-lg text-center">

Top companies trust us

</h2>


<div className="flex justify-center gap-10 mt-5">

{companies.map(company=>(

<div key={company.name}>

{company.logo}

</div>

))}

</div>

</div>

</section>



{/* TRENDING */}

<section className="px-4 mt-12">

<h2 className="text-2xl font-bold">

Trending courses

</h2>


<div className="flex gap-4 overflow-x-auto mt-5">

{courses.slice(0,8).map(course=>(

<div
key={course.id}
className="min-w-[180px]"
>

<CourseCard course={course}/>

</div>

))}

</div>

</section>



{/* PERSONAL DEVELOPMENT */}

<section className="px-4 mt-12">

<h2 className="text-2xl font-bold">

Top courses in

<span className="text-purple-700">

 Personal Development

</span>

</h2>


<div className="flex overflow-x-auto gap-4 mt-5">

{courses.slice(0,8).map(course=>(

<div
key={course.id}
className="min-w-[180px]"
>

<CourseCard course={course}/>

</div>

))}

</div>

</section>



{/* IT */}

<section className="px-4 mt-12">

<h2 className="text-2xl font-bold">

Top courses in

<span className="text-purple-700">

 IT & Software

</span>

</h2>


<div className="flex overflow-x-auto gap-4 mt-5">

{courses.slice(0,8).map(course=>(

<div
key={course.id}
className="min-w-[180px]"
>

<CourseCard course={course}/>

</div>

))}

</div>

</section>



{/* MOBILE NAVBAR */}

<div
className="
fixed
bottom-0
left-0
right-0
bg-white
border-t
flex
justify-around
items-center
py-3
z-50
lg:hidden
"
>

<div className="flex flex-col items-center">

<Home size={20}/>
<span className="text-xs">

Featured

</span>

</div>


<div className="flex flex-col items-center">

<Search size={20}/>
<span className="text-xs">

Search

</span>

</div>


<div className="flex flex-col items-center">

<PlayCircle size={20}/>
<span className="text-xs">

Learning

</span>

</div>


<div className="flex flex-col items-center">

<Heart size={20}/>
<span className="text-xs">

Wishlist

</span>

</div>


<div className="flex flex-col items-center">

<User size={20}/>
<span className="text-xs">

Account

</span>

</div>

</div>

</div>

);
}