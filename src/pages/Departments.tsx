
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const Departments = () => {
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
            Our Departments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Specialized medical departments with state-of-the-art facilities and expert healthcare professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {departments.map((department, index) => (
            <motion.div
              key={department.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">{department.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{department.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {department.doctorCount} Specialist{department.doctorCount !== 1 ? 's' : ''}
                  </span>
                  <motion.button
                    className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

// Sample department data
const departments = [
  {
    id: 1,
    name: "Cardiology",
    description: "Specialized care for heart-related conditions with advanced diagnostic and treatment facilities.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    doctorCount: 8
  },
  {
    id: 2,
    name: "Neurology",
    description: "Expert diagnosis and treatment for conditions affecting the nervous system and brain.",
    image: "https://images.unsplash.com/photo-1559757175-7b21671636f6?auto=format&fit=crop&q=80&w=600",
    doctorCount: 6
  },
  {
    id: 3,
    name: "Orthopedics",
    description: "Comprehensive care for bones, joints, ligaments, tendons, muscles, and nerves.",
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?auto=format&fit=crop&q=80&w=600",
    doctorCount: 10
  },
  {
    id: 4,
    name: "Pediatrics",
    description: "Child-focused healthcare from birth through adolescence with specializations in various conditions.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600",
    doctorCount: 12
  },
  {
    id: 5,
    name: "Dermatology",
    description: "Diagnosis and treatment for conditions related to skin, hair, nails, and cosmetic concerns.",
    image: "https://images.unsplash.com/photo-1610452220299-5edf90b8a6ed?auto=format&fit=crop&q=80&w=600",
    doctorCount: 5
  },
  {
    id: 6,
    name: "Ophthalmology",
    description: "Medical and surgical eye care with treatments for glaucoma, cataracts, and refractive errors.",
    image: "https://images.unsplash.com/photo-1580281657702-257584239a42?auto=format&fit=crop&q=80&w=600",
    doctorCount: 7
  }
];

export default Departments;
