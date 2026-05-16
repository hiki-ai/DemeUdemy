import { motion } from "framer-motion";
import {
  Play,
  Award,
  Clock,
  Flame,
  Target,
  ArrowRight,
  Zap,
  Info,
  Calendar,
} from "lucide-react";

import { courses } from "../data/dummy";
import Button from "../components/Button";

const StudentDashboard = () => {
  const continueCourses = courses.slice(0, 2);

  const stats = [
    {
      label: "Learning Streak",
      value: "12 Days",
      icon: <Flame />,
    },
    {
      label: "Courses Done",
      value: "08",
      icon: <Award />,
    },
    {
      label: "Hours Watched",
      value: "45h",
      icon: <Clock />,
    },
    {
      label: "Points",
      value: "2450",
      icon: <Target />,
    },
  ];

  const demoVideos = [
    {
      title: "React Full Course",
      duration: "18 mins",
      progress: 65,
      thumbnail:
        "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
      video:
        "https://www.youtube.com/embed/w7ejDZ8SWv8",
    },

    {
      title: "Tailwind CSS",
      duration: "22 mins",
      progress: 30,
      thumbnail:
        "https://img.youtube.com/vi/lCxcTsOHrjo/maxresdefault.jpg",
      video:
        "https://www.youtube.com/embed/lCxcTsOHrjo",
    },

    {
      title: "AI Development",
      duration: "40 mins",
      progress: 80,
      thumbnail:
        "https://img.youtube.com/vi/JMUxmLyrhSk/maxresdefault.jpg",
      video:
        "https://www.youtube.com/embed/JMUxmLyrhSk",
    },
  ];

  return (
    <div className="px-3 sm:px-5 md:px-8 py-5 space-y-8">

      {/* STATS */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

        {stats.map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl p-4 border shadow-sm"
          >

            <div className="flex gap-3 items-center">

              <div className="bg-purple-100 p-2 rounded-lg">
                {item.icon}
              </div>

              <div>

                <p className="text-xs text-gray-500">
                  {item.label}
                </p>

                <h2 className="font-bold text-lg">
                  {item.value}
                </h2>

              </div>

            </div>

          </motion.div>

        ))}

      </div>



      {/* FEATURED VIDEOS */}

      <div>

        <div className="flex justify-between mb-4">

          <h2 className="font-bold text-xl">

            🔥 Featured Videos

          </h2>

          <div className="hidden md:flex items-center gap-1">

            <Zap size={15} />

            Premium

          </div>

        </div>



        <div className="grid md:grid-cols-2 gap-5">

          {demoVideos.map((video, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="
              bg-white
              rounded-2xl
              overflow-hidden
              border
              shadow"
            >

              <a
                href={video.video}
                target="_blank"
                rel="noreferrer"
              >

                <div className="relative">

                  <img
                    src={video.thumbnail}
                    className="
                    w-full
                    h-[190px]
                    object-cover"
                    alt=""
                  />


                  {/* play */}

                  <div
                    className="
                    absolute
                    inset-0
                    flex
                    justify-center
                    items-center"
                  >

                    <div
                      className="
                      bg-white/90
                      p-4
                      rounded-full
                      shadow-lg"
                    >

                      <Play
                        size={28}
                        className="
                        fill-black
                        text-black"
                      />

                    </div>

                  </div>

                </div>

              </a>


              <div className="p-4">

                <h3 className="font-bold">

                  {video.title}

                </h3>


                <div className="flex justify-between text-sm mt-2">

                  <span>

                    {video.progress}%

                  </span>

                  <span>

                    {video.duration}

                  </span>

                </div>



                <div
                  className="
                  bg-gray-200
                  h-2
                  rounded-full
                  mt-2"
                >

                  <div
                    style={{
                      width:
                        `${video.progress}%`
                    }}

                    className="
                    bg-purple-600
                    h-2
                    rounded-full"
                  />

                </div>



                <Button
                  className="
                  w-full
                  mt-4"
                >

                  Watch Now

                  <ArrowRight
                    size={15}
                  />

                </Button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>



      {/* CONTINUE LEARNING */}

      <div>

        <h2 className="font-bold text-xl mb-4">

          Continue Learning

        </h2>


        <div className="space-y-4">

          {continueCourses.map((course) => (

            <div
              key={course.id}

              className="
              bg-white
              border
              rounded-xl
              p-3
              flex
              gap-3"
            >

              <img
                src={course.thumbnail}

                className="
                w-20
                h-20
                rounded-lg
                object-cover"
              />


              <div className="flex-1">

                <h3 className="font-semibold text-sm">

                  {course.title}

                </h3>


                <p className="text-xs text-gray-500">

                  {course.progress}%
                  Complete

                </p>


                <div
                  className="
                  bg-gray-200
                  h-2
                  mt-2
                  rounded-full"
                >

                  <div
                    style={{
                      width:
                        `${course.progress}%`
                    }}

                    className="
                    bg-purple-500
                    h-2
                    rounded-full"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>



      {/* EXTRA CARDS */}

      <div className="space-y-4">

        <div
          className="
          bg-white
          p-5
          rounded-xl
          shadow"
        >

          <Calendar
            className="mx-auto"
          />

          <h3
            className="
            text-center
            font-bold
            mt-3"
          >

            Daily Goal

          </h3>

          <p className="text-center text-sm">

            2 hrs left

          </p>

        </div>



        <div
          className="
          bg-white
          p-5
          rounded-xl"
        >

          <h3 className="font-bold">

            Recent Badges

          </h3>

        </div>



        <div
          className="
          bg-black
          text-white
          p-5
          rounded-xl"
        >

          <Info />

          <h3
            className="
            font-bold
            mt-3"
          >

            Pro Tip

          </h3>

          <p className="opacity-70 text-sm">

            Study 45 mins + break
            improves retention.

          </p>

        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;