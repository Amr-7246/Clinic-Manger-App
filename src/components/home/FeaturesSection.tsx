
import { CheckCircle } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Easy Doctor Appointments",
      description: "Book appointments with top specialists with just a few clicks, anytime, anywhere."
    },
    {
      title: "Video Consultations",
      description: "Connect with doctors virtually through secure video calls from the comfort of your home."
    },
    {
      title: "Specialist Referrals",
      description: "Get referred to the right specialists based on your health needs and medical history."
    },
    {
      title: "Digital Health Records",
      description: "Access your complete medical history, test results, and prescriptions in one place."
    },
    {
      title: "Medication Reminders",
      description: "Never miss a dose with personalized medication reminders and refill alerts."
    },
    {
      title: "Insurance Management",
      description: "Easily manage and verify your insurance coverage for appointments and treatments."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose ClinicNexus</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide a comprehensive healthcare platform designed to simplify your medical journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="text-medical-primary mr-3 h-6 w-6 flex-shrink-0" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 ml-9">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
