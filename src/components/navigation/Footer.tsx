
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-medical-primary mb-4">ClinicNexus</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Global Medical Clinics Manager providing comprehensive healthcare
              solutions for patients, doctors, and administrators.
            </p>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/departments" className="text-gray-600 dark:text-gray-400 hover:text-medical-primary dark:hover:text-medical-secondary transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-600 dark:text-gray-400 hover:text-medical-primary dark:hover:text-medical-secondary transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-600 dark:text-gray-400 hover:text-medical-primary dark:hover:text-medical-secondary transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-medical-primary dark:hover:text-medical-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4">For Doctors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/doctor/login" className="text-gray-600 dark:text-gray-400 hover:text-medical-primary dark:hover:text-medical-secondary transition-colors">
                  Doctor Login
                </Link>
              </li>
              <li>
                <Link to="/doctor/register" className="text-gray-600 dark:text-gray-400 hover:text-medical-primary dark:hover:text-medical-secondary transition-colors">
                  Join Our Network
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 dark:text-gray-400 hover:text-medical-primary dark:hover:text-medical-secondary transition-colors">
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>123 Medical Plaza</p>
              <p>New York, NY 10001</p>
              <p>Email: info@clinicnexus.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} ClinicNexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
