import {
Search,
Mic
} from "lucide-react";

import { useState } from "react";

import { courses } from "../data/dummy";

export default function SearchPage(){

const [query,setQuery]=useState("");

const categories=[
"Praja Info",
"English Speaking",
"Youtube",
"Instagram",
"Business",
"Part Time Income",
"Mobile Tricks",
"View All"
];


const filtered=courses.filter(course=>
course.title
.toLowerCase()
.includes(
query.toLowerCase()
)
);

return(

<div className="
bg-black
text-white
min-h-screen
p-5
pb-24
">

{/* SEARCH */}

<div className="flex gap-3">

<div className="
flex-1
bg-[#1e1e1e]
rounded-2xl
p-4
flex
items-center
gap-3
border
border-gray-700
focus-within:border-purple-600
">

<Search/>

<input
value={query}
onChange={(e)=>
setQuery(e.target.value)
}
placeholder="Search Here"

className="
bg-transparent
outline-none
flex-1
"
/>

</div>


<button className="
bg-[#1e1e1e]
rounded-2xl
p-4
">

<Mic/>

</button>

</div>



{/* CATEGORIES */}

<div className="
grid
grid-cols-4
gap-6
mt-8
text-center
">

{categories.map(cat=>(

<div key={cat}>

<div className="
w-16
h-16
rounded-full
bg-[#1e1e1e]
mx-auto
mb-2
"/>

<p className="text-sm">

{cat}

</p>

</div>

))}

</div>



{/* TOP VIDEOS */}

<h2 className="
text-3xl
font-bold
mt-12
mb-5
">

Top Videos

</h2>


<div className="
grid
grid-cols-3
gap-3
">

{filtered.slice(0,6).map(course=>(

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
h-[150px]
object-cover
"
/>

<div className="p-2">

<p className="
text-xs
font-semibold
line-clamp-2
">

{course.title}

</p>

</div>

</div>

))}

</div>



{/* RECOMMENDATIONS */}

<h2 className="
text-3xl
font-bold
mt-12
mb-5
">

Recommended

</h2>


<div className="
flex
gap-4
overflow-x-auto
">

{courses.map(course=>(

<div
key={course.id}
className="
min-w-[130px]
bg-[#111]
rounded-xl
overflow-hidden
"
>

<img
src={course.image}
className="
w-full
h-[150px]
object-cover
"
/>

<p className="p-2 text-xs">

{course.title}

</p>

</div>

))}

</div>

</div>

)

}