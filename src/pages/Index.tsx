
import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { DepartmentSection } from "@/components/departments/DepartmentSection";
import { FeaturedDoctorsSection } from "@/components/doctors/FeaturedDoctorsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <DepartmentSection />
      <FeaturedDoctorsSection />
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 medical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join thousands of patients who have simplified their healthcare journey with ClinicNexus.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-medical-primary">
            <Link to="/signup">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
