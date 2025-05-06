
import { useState } from "react";
import { DoctorCard } from "./DoctorCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for doctors
const doctors = [
  {
    id: "dr-smith",
    name: "Sarah Smith",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop",
    specialization: "Cardiology",
    rating: 4.8,
    reviewCount: 124,
    availableToday: true,
    experience: 12,
    price: 150
  },
  {
    id: "dr-johnson",
    name: "Michael Johnson",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500&auto=format&fit=crop",
    specialization: "Neurology",
    rating: 4.7,
    reviewCount: 98,
    availableToday: false,
    experience: 15,
    price: 180
  },
  {
    id: "dr-patel",
    name: "Ravi Patel",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop",
    specialization: "Pediatrics",
    rating: 4.9,
    reviewCount: 156,
    availableToday: true,
    experience: 10,
    price: 130
  },
  {
    id: "dr-williams",
    name: "Jessica Williams",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop",
    specialization: "Dermatology",
    rating: 4.6,
    reviewCount: 87,
    availableToday: true,
    experience: 8,
    price: 160
  }
];

export function FeaturedDoctorsSection() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredDoctors = filter 
    ? doctors.filter(doctor => doctor.specialization === filter)
    : doctors;
  
  const specializations = Array.from(
    new Set(doctors.map(doctor => doctor.specialization))
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Meet Our Expert Doctors</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our team of highly qualified and experienced doctors is dedicated to providing the best healthcare services.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            className="rounded-full"
          >
            All
          </Button>
          {specializations.map(specialization => (
            <Button
              key={specialization}
              variant={filter === specialization ? "default" : "outline"}
              onClick={() => setFilter(specialization)}
              className="rounded-full"
            >
              {specialization}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {filteredDoctors.map(doctor => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              image={doctor.image}
              specialization={doctor.specialization}
              rating={doctor.rating}
              reviewCount={doctor.reviewCount}
              availableToday={doctor.availableToday}
              experience={doctor.experience}
              price={doctor.price}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild>
            <Link to="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
