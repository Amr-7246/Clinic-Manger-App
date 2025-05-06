
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/departments", label: "Departments" },
    { path: "/doctors", label: "Doctors" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/admin", label: "Admin" }
  ];

  return (
    <motion.nav 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-stone-900/80 dark:bg-stone-950/80 shadow-md backdrop-blur-md' 
          : 'bg-stone-900 dark:bg-stone-950'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500 bg-clip-text text-transparent">
              ClinicNexus
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative ${
                  isActive(link.path)
                    ? 'text-teal-400 dark:text-teal-300 font-medium'
                    : 'text-stone-200 dark:text-stone-300 hover:text-teal-400 dark:hover:text-teal-300'
                } transition-colors`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 dark:bg-teal-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" asChild className="hover:bg-stone-800 dark:hover:bg-stone-700 border-stone-700 text-stone-200">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-3 text-stone-200 dark:text-stone-300"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-stone-900 dark:bg-stone-950 px-4 py-3 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 ${
                  isActive(link.path)
                    ? 'text-teal-400 dark:text-teal-300 font-medium'
                    : 'text-stone-200 dark:text-stone-300 hover:text-teal-400 dark:hover:text-teal-300'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" asChild className="w-full justify-center border-stone-700 text-stone-200">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild className="w-full justify-center bg-teal-500 hover:bg-teal-600">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
