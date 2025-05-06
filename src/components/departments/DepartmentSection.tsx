
import { useRef } from "react";
import { DepartmentCard } from "./DepartmentCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for departments
const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "/placeholder.svg",
    description: "Diagnosis and treatment of heart disorders",
    doctorCount: 12
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "/placeholder.svg",
    description: "Disorders of the nervous system",
    doctorCount: 8
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "/placeholder.svg",
    description: "Conditions involving the musculoskeletal system",
    doctorCount: 15
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "/placeholder.svg",
    description: "Medical care of infants, children, and adolescents",
    doctorCount: 10
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "/placeholder.svg",
    description: "Skin, hair, nails, and related disorders",
    doctorCount: 6
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: "/placeholder.svg",
    description: "Diagnosis and treatment of eye disorders",
    doctorCount: 7
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    icon: "/placeholder.svg",
    description: "Disorders of the endocrine system",
    doctorCount: 5
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    icon: "/placeholder.svg",
    description: "Digestive system and its disorders",
    doctorCount: 9
  }
];

export function DepartmentSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Medical Departments</h2>
            <p className="text-gray-600 dark:text-gray-400">Specialized care for all your health needs</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-6 scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {departments.map((department) => (
            <div key={department.id} className="flex-shrink-0 w-64">
              <DepartmentCard
                id={department.id}
                name={department.name}
                icon={department.icon}
                description={department.description}
                doctorCount={department.doctorCount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
