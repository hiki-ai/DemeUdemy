import { motion } from "framer-motion";
import {
DollarSign,
Users,
Video,
Star,
Plus,
BarChart3,
TrendingUp,
MessageSquare,
Edit3,
Eye,
Trash2
} from "lucide-react";

import Button from "../components/Button";

const InstructorDashboard=()=>{

const stats=[

{
label:"Revenue",
value:"$12.4k",
change:"+12%",
icon:<DollarSign/>
},

{
label:"Students",
value:"1240",
change:"+8%",
icon:<Users/>
},

{
label:"Rating",
value:"4.9",
change:"+0.1",
icon:<Star/>
},

{
label:"Watch Time",
value:"450h",
change:"+15%",
icon:<Video/>
}

];


return(

<div className="px-3 sm:px-5 md:px-8 py-5 space-y-8">

{/* HEADER */}

<div className="flex flex-col md:flex-row gap-4 justify-between">

<div>

<h1 className="text-2xl md:text-4xl font-bold">

Instructor Studio

</h1>

<p className="text-sm text-gray-500">

Manage courses & analytics

</p>

</div>


<Button
className="
h-10
px-4
text-sm
w-full
md:w-auto"
>

<Plus size={18}/>

Create Course

</Button>

</div>



{/* STATS */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

{stats.map((s,i)=>(

<motion.div
key={i}
initial={{opacity:0}}
animate={{opacity:1}}
className="
bg-white
border
rounded-xl
p-4
shadow-sm"
>

<div className="flex justify-between">

<div className="bg-purple-100 p-2 rounded-lg">

{s.icon}

</div>


<div className="
text-xs
bg-green-100
px-2
rounded-full">

{s.change}

</div>

</div>


<h2 className="mt-3 text-xl font-bold">

{s.value}

</h2>

<p className="text-xs text-gray-500">

{s.label}

</p>

</motion.div>

))}

</div>



<div className="grid lg:grid-cols-3 gap-6">


{/* COURSES */}

<div className="lg:col-span-2">

<h2 className="font-bold text-xl mb-4">

Your Courses

</h2>


<div className="space-y-4">

{[1,2,3].map(id=>(

<div
key={id}
className="
bg-white
border
rounded-xl
p-4"
>

<div className="flex justify-between">

<div>

<h3 className="font-semibold text-sm">

Next.js Course {id}

</h3>

<p className="text-xs text-gray-500">

4520 Students

</p>

</div>


<span
className="
bg-green-100
text-green-600
px-2
py-1
rounded-full
text-xs">

Published

</span>

</div>



<div className="
flex
justify-between
items-center
mt-4">

<div className="flex gap-1">

<Star
size={15}
fill="currentColor"
/>

4.9

</div>


<div className="flex gap-2">

<button
className="
w-8
h-8
bg-gray-100
rounded-lg
flex
justify-center
items-center">

<Edit3 size={16}/>

</button>


<button
className="
w-8
h-8
bg-gray-100
rounded-lg
flex
justify-center
items-center">

<Eye size={16}/>

</button>


<button
className="
w-8
h-8
bg-red-100
rounded-lg
flex
justify-center
items-center">

<Trash2 size={16}/>

</button>

</div>

</div>

</div>

))}

</div>

</div>



{/* ACTIVITY */}

<div>

<h2 className="font-bold text-xl mb-4">

Recent Activity

</h2>


<div className="
bg-white
border
rounded-xl
p-5
space-y-5"
>

{[
"New enrollment",
"5 star review",
"New question"

].map((x,i)=>(

<div
key={i}
className="flex gap-3"
>

<div className="
bg-purple-100
p-2
rounded-lg">

<MessageSquare/>

</div>


<div>

<h3 className="text-sm font-semibold">

{x}

</h3>

<p className="text-xs text-gray-500">

2 hrs ago

</p>

</div>

</div>

))}


<Button
variant="outline"
className="w-full h-10"
>

View Activity

</Button>

</div>



{/* Growth Tip */}

<div
className="
bg-purple-50
rounded-xl
p-5
mt-5"
>

<TrendingUp/>

<h2 className="font-bold mt-3">

Growth Tip

</h2>

<p className="text-sm text-gray-500">

Add subtitles for more students.

</p>

</div>

</div>

</div>

</div>

)

}

export default InstructorDashboard;