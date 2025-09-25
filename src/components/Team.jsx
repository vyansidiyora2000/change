import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  Monitor,
  Heart,
  BarChart2,
  Cpu,
  Settings,
  UserCheck,
} from "lucide-react";

export default function Team() {
  const skills = [
    {
      name: "Organizational Change Management",
      icon: ClipboardList,
      color: "bg-purple-200 text-purple-700",
    },
    {
      name: "Project Management",
      icon: Users,
      color: "bg-purple-200 text-purple-700",
    },
    {
      name: "Business Process Optimization",
      icon: Monitor,
      color: "bg-purple-200 text-purple-700",
    },
    {
      name: "Specialized Healthcare Services",
      icon: Heart,
      color: "bg-pink-200 text-pink-700",
    },
    {
      name: "Healthcare Analytics",
      icon: BarChart2,
      color: "bg-indigo-200 text-indigo-700",
    },
    {
      name: "Strategic Consulting",
      icon: Cpu,
      color: "bg-yellow-200 text-yellow-700",
    },
    {
      name: "Process Optimization",
      icon: Settings,
      color: "bg-green-200 text-green-700",
    },
    {
      name: "Leadership Training",
      icon: UserCheck,
      color: "bg-teal-200 text-teal-700",
    },
  ];

  return (
    <section className="relative py-24 bg-[#5C1BD9] overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
          alt="World Map"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#5C1BD9]/40"></div> {/* subtle overlay */}
      </div>

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Change Architects Advantage
        </motion.h2>
        <p className="mt-4 text-gray-200 text-lg md:text-xl">
       Change Architects Inc. is a Nova Scotian company providing consulting and advisory services for Life Sciences and Healthcare organizations globally.

Our mission is to architect successful human-centric digital and cultural change in these ever-evolving times of AI transformation.

With a blend of highly skilled business and technical resources across the globe, we offer comprehensive expertise to guide your organization through complex transformations.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={idx}
              className="flex flex-col items-center p-6 bg-white/90 backdrop-blur-md border border-purple-300 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`p-4 rounded-full mb-4 shadow-md ${skill.color}`}>
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="text-gray-900 font-semibold text-center">{skill.name}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
