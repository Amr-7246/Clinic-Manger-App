
import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <MainLayout>
      <section className="py-16 container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-700 dark:text-teal-500">
            About ClinicNexus
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Leading the way in modern healthcare solutions with technology and compassion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800" 
              alt="Medical Team" 
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-teal-600 dark:text-teal-400">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              At ClinicNexus, we are committed to providing exceptional healthcare services that improve the quality of life for our patients. 
              Our mission is to deliver compassionate, personalized care through innovative medical practices and cutting-edge technology.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe that everyone deserves access to high-quality healthcare. That's why we've built a network of specialized 
              departments and expert medical professionals who are dedicated to addressing the diverse needs of our community.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8 md:p-12 shadow-lg mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-teal-700 dark:text-teal-500">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="text-teal-500 mb-4">
                  <value.icon className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-teal-600 dark:text-teal-400">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-teal-700 dark:text-teal-500">Our History</h2>
          <div className="space-y-12">
            {history.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col md:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-teal-100 dark:bg-teal-800 rounded-full px-4 py-2">
                    <span className="text-teal-700 dark:text-teal-300 font-bold">{item.year}</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2 text-teal-600 dark:text-teal-400">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
};

// Values data
const values = [
  {
    title: "Excellence",
    description: "We are committed to the highest standards of medical care and patient service.",
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Compassion",
    description: "We treat each patient with empathy, dignity, and respect.",
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and approaches to improve healthcare delivery.",
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our actions and decisions.",
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
];

// History data
const history = [
  {
    year: "2005",
    title: "Foundation",
    description: "ClinicNexus was founded by Dr. Robert Anderson with a vision to create a healthcare system that combines advanced medical technology with personalized patient care."
  },
  {
    year: "2010",
    title: "Expansion",
    description: "We opened our first major medical complex, featuring specialized departments and state-of-the-art equipment to serve our growing patient community."
  },
  {
    year: "2015",
    title: "Innovation",
    description: "Launched our digital healthcare platform, allowing patients to access medical records, book appointments, and consult with doctors remotely."
  },
  {
    year: "2020",
    title: "Growth",
    description: "Expanded our network to include multiple clinics across the region, bringing our high-quality healthcare services to more communities."
  }
];

export default About;
