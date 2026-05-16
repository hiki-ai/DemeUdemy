import { motion } from "framer-motion";
import {
Settings,
Users,
ShieldAlert,
Activity,
BarChart3,
CheckCircle2,
XCircle,
Server,
Calendar
} from "lucide-react";

import Button from "../components/Button";

const AdminDashboard = ()=>{

const stats=[
{
label:"System Health",
value:"99.9%",
status:"Operational",
icon:<Server/>
},

{
label:"Users",
value:"45.2k",
status:"+1.2k",
icon:<Users/>
},

{
label:"Revenue",
value:"$842k",
status:"+15%",
icon:<Activity/>
},

{
label:"Alerts",
value:"02",
status:"Need action",
icon:<ShieldAlert/>
}
];


const pending=[
{
id:1,
name:"Machine Learning",
instructor:"Sarah"
},

{
id:2,
name:"Blockchain",
instructor:"James"
},

{
id:3,
name:"UI Design",
instructor:"Elena"
}

];

return(

<div className="px-3 sm:px-5 md:px-8 py-5 space-y-8">

{/* HEADER */}

<div className="flex flex-col md:flex-row justify-between gap-4">

<div>

<h1 className="text-2xl md:text-4xl font-bold">

Admin Dashboard

</h1>

<p className="text-gray-500 text-sm">

Manage users & platform

</p>

</div>


<div className="flex gap-2 flex-wrap">

<Button
variant="outline"
className="h-10 px-4 text-sm"
>

<Settings size={16}/>

Settings

</Button>


<Button
className="h-10 px-4 text-sm"
>

<ShieldAlert size={16}/>

Audit

</Button>

</div>

</div>



{/* STATS */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

{stats.map((s,i)=>(

<motion.div
key={i}
initial={{opacity:0}}
animate={{opacity:1}}
className="bg-white border rounded-xl p-4 shadow-sm"
>

<div className="flex gap-3 items-center">

<div className="bg-purple-100 p-2 rounded-lg">

{s.icon}

</div>


<div>

<p className="text-xs text-gray-500">

{s.label}

</p>

<h2 className="font-bold text-lg">

{s.value}

</h2>

<p className="text-xs text-green-500">

{s.status}

</p>

</div>

</div>

</motion.div>

))}

</div>



{/* APPROVALS + ACTIVITY */}

<div className="grid lg:grid-cols-2 gap-6">


{/* approvals */}

<div>

<div className="flex justify-between mb-4">

<h2 className="font-bold text-xl">

Pending Approvals

</h2>

<span className="text-red-500 text-sm">

3 pending

</span>

</div>


<div className="space-y-4">

{pending.map(item=>(

<div
key={item.id}
className="bg-white border rounded-xl p-4"
>

<div className="flex justify-between">

<div className="flex gap-3">

<div className="bg-purple-100 p-3 rounded-lg">

<BarChart3/>

</div>


<div>

<h3 className="font-semibold text-sm">

{item.name}

</h3>

<p className="text-xs text-gray-500">

{item.instructor}

</p>

</div>

</div>



<div className="flex gap-2">

<button
className="
w-9 h-9
rounded-lg
bg-green-100
flex
justify-center
items-center"
>

<CheckCircle2 size={18}/>

</button>


<button
className="
w-9 h-9
rounded-lg
bg-red-100
flex
justify-center
items-center"
>

<XCircle size={18}/>

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

System Activity

</h2>


<div className="bg-white rounded-xl border p-5">

<div className="space-y-5">

{[
"Database backup done",
"Security rule updated",
"Payment API migrated"

].map((x,i)=>(

<div
key={i}
className="border-l-2 pl-4"
>

<h3 className="font-semibold text-sm">

{x}

</h3>

<p className="text-xs text-gray-500">

2 hrs ago

</p>

</div>

))}

</div>


<Button
variant="outline"
className="w-full mt-5 h-10"
>

View Logs

</Button>

</div>

</div>

</div>



{/* QUICK CARD */}

<div
className="
bg-black
text-white
rounded-xl
p-5"
>

<Calendar/>

<h2 className="font-bold mt-3">

Admin Reminder

</h2>

<p className="opacity-70 text-sm">

Review security alerts daily.

</p>

</div>


</div>

)

}

export default AdminDashboard;