
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface DoctorCardProps {
  id: string;
  name: string;
  image: string;
  specialization: string;
  rating: number;
  reviewCount: number;
  availableToday: boolean;
  experience: number;
  price: number;
}

export function DoctorCard({
  id,
  name,
  image,
  specialization,
  rating,
  reviewCount,
  availableToday,
  experience,
  price
}: DoctorCardProps) {
  return (
    <Card className="medical-card h-full overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={`Dr. ${name}`}
            className="w-full h-48 object-cover"
          />
          {availableToday && (
            <Badge
              className="absolute top-3 right-3 bg-green-500 hover:bg-green-600"
            >
              Available Today
            </Badge>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-1">Dr. {name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{specialization}</p>
          
          <div className="flex items-center space-x-1 mb-3">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">({reviewCount})</span>
          </div>
          
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{experience} Years Exp.</span>
            <span>${price}/consultation</span>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" asChild className="w-1/2">
              <Link to={`/doctors/${id}`}>View Profile</Link>
            </Button>
            <Button asChild className="w-1/2">
              <Link to={`/appointments/book/${id}`}>Book Now</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
