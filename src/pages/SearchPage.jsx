import { Search, Mic } from "lucide-react";

export default function SearchPage() {

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

return(

<div className="bg-black min-h-screen text-white p-5">

{/* Search */}

<div className="flex gap-3">

<div className="
flex-1
bg-[#1e1e1e]
rounded-2xl
px-4
py-4
flex
items-center
gap-3
">

<Search/>

<input
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
p-4
rounded-2xl
">

<Mic/>

</button>

</div>



{/* Categories */}

<div className="
grid
grid-cols-4
gap-6
mt-10
">

{categories.map(item=>(

<div
key={item}
className="text-center"
>

<div className="
w-20
h-20
bg-[#1e1e1e]
rounded-full
mx-auto
mb-2
"/>

<p className="text-sm">

{item}

</p>

</div>

))}

</div>

</div>

)

}