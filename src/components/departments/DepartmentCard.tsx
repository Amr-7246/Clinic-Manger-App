
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface DepartmentCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  doctorCount: number;
}

export function DepartmentCard({ id, name, icon, description, doctorCount }: DepartmentCardProps) {
  return (
    <Link to={`/departments/${id}`}>
      <Card className="medical-card h-full transition-transform hover:scale-105">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-medical-light dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <img src={icon} alt={name} className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-medical-primary">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
              {doctorCount} {doctorCount === 1 ? 'Doctor' : 'Doctors'}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
