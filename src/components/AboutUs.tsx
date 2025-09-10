import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section id="about" className="py-12 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">About Our Calculator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've helped thousands of homeowners and contractors estimate carpet installation costs accurately since 2018.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">50,000+</h3>
              <p className="text-sm text-muted-foreground">Happy Users</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">95%</h3>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Industry</h3>
              <p className="text-sm text-muted-foreground">Leading Tool</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Instant</h3>
              <p className="text-sm text-muted-foreground">Results</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Our free tool provides accurate estimates based on real market data from major retailers and regional pricing variations. 
            <span className="text-primary font-medium"> Updated for 2025 pricing trends!</span>
          </p>
        </div>
      </div>
    </section>
  );
};