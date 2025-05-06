
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-900/60 to-teal-900/40 dark:from-stone-950 dark:via-stone-900/90 dark:to-teal-950/60 z-0"></div>
      
      {/* Circle decorations */}
      <motion.div 
        className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-teal-500 opacity-10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-teal-400 opacity-10 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Dot grid overlay */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-12 md:grid-cols-20 lg:grid-cols-30 h-full">
          {Array.from({ length: 300 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-teal-500/20 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() > 0.7 ? 0.8 : 0.2 }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-teal-400">Healthcare</span> Made Simple for Everyone
            </motion.h1>
            <motion.p 
              className="text-xl text-stone-200 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with top specialists, book appointments, and manage your health journey all in one place.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" asChild className="bg-teal-500 hover:bg-teal-600">
                <Link to="/doctors">Find a Doctor</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
                <Link to="/appointments">Book Appointment</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
<<<<<<< HEAD
                <p className="text-3xl font-bold text-teal-400">102010+</p>
=======
                <p className="text-3xl font-bold text-teal-400">200+</p>
>>>>>>> d433c81ec1d01b177979befb7e5ea8322a9ae0a7
                <p className="text-sm text-stone-300">Expert Doctors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-400">50+</p>
                <p className="text-sm text-stone-300">Specializations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-400">10k+</p>
                <p className="text-sm text-stone-300">Happy Patients</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-teal-400/20 rounded-xl blur-xl opacity-70"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1638202993928-7d113cdf04b1?q=80&w=1200&auto=format&fit=crop" 
                alt="Medical professionals"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
