
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";

const Doctors = () => {
  const [filter, setFilter] = useState("all");

  const filteredDoctors = filter === "all" 
    ? doctors 
    : doctors.filter(doctor => doctor.department === filter);
  
  return (
    <MainLayout>
      <section className="py-16 container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-700 dark:text-teal-500">
            Our Doctors
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Meet our team of experienced medical professionals dedicated to providing exceptional care.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <FilterButton 
              label="All" 
              active={filter === "all"} 
              onClick={() => setFilter("all")} 
            />
            <FilterButton 
              label="Cardiology" 
              active={filter === "Cardiology"} 
              onClick={() => setFilter("Cardiology")} 
            />
            <FilterButton 
              label="Neurology" 
              active={filter === "Neurology"} 
              onClick={() => setFilter("Neurology")} 
            />
            <FilterButton 
              label="Orthopedics" 
              active={filter === "Orthopedics"} 
              onClick={() => setFilter("Orthopedics")} 
            />
            <FilterButton 
              label="Pediatrics" 
              active={filter === "Pediatrics"} 
              onClick={() => setFilter("Pediatrics")} 
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden bg-teal-50 dark:bg-teal-900/30">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-sm text-white bg-teal-500 px-2 py-1 rounded-md">
                    {doctor.department}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-700 dark:text-teal-400">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {doctor.specialization}
                </p>
                <div className="flex items-center mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < doctor.rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({doctor.reviewCount} reviews)</span>
                </div>
                
                <motion.button 
                  className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

const FilterButton = ({ label, active, onClick }) => (
  <motion.button
    className={`px-4 py-2 rounded-full ${
      active 
        ? 'bg-teal-500 text-white' 
        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
    } transition-colors`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);

// Sample doctors data
const doctors = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    specialization: "Senior Cardiologist",
    department: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    rating: 5,
    reviewCount: 27
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    department: "Neurology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    rating: 4,
    reviewCount: 18
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    specialization: "Pediatric Specialist",
    department: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
    rating: 5,
    reviewCount: 32
  },
  {
    id: 4,
    name: "Dr. James Rodriguez",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    rating: 4,
    reviewCount: 15
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialization: "Cardiologist",
    department: "Cardiology",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=600",
    rating: 5,
    reviewCount: 24
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialization: "Neurologist",
    department: "Neurology",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    rating: 4,
    reviewCount: 19
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    specialization: "Pediatrician",
    department: "Pediatrics",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600",
    rating: 5,
    reviewCount: 28
  },
  {
    id: 8,
    name: "Dr. Thomas Wright",
    specialization: "Orthopedic Specialist",
    department: "Orthopedics",
    image: "https://images.unsplash.com/photo-1612531385446-f7e6d600b85c?auto=format&fit=crop&q=80&w=600",
    rating: 4,
    reviewCount: 22
  }
];

export default Doctors;
