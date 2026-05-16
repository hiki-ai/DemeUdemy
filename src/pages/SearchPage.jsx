import { Search, Mic } from "lucide-react";
import { useState } from "react";

export default function SearchPage() {

const [query,setQuery]=useState("");

const items=[
{name:"Youtube",link:"https://youtube.com"},
{name:"Instagram",link:"https://instagram.com"},
{name:"English Speaking",link:"/english"},
{name:"Praja Info",link:"/praja"},
{name:"Business",link:"/business"},
{name:"Part Time Income",link:"/income"},
{name:"Mobile Tricks",link:"/mobile"},
{name:"Courses",link:"/courses"}
];


const filtered=
items.filter(item=>
item.name
.toLowerCase()
.includes(query.toLowerCase())
);

return(

<div className="
bg-black
min-h-screen
text-white
p-5
">

{/* SEARCH */}

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



{/* RESULTS */}

<div className="mt-8 space-y-4">

{filtered.map(item=>(

<a
key={item.name}
href={item.link}

className="
block
bg-[#1e1e1e]
rounded-xl
p-4
hover:bg-[#2a2a2a]
"
>

{item.name}

</a>

))}

</div>

</div>

)

}