import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Star } from "lucide-react";
import cultural from "@/assets/cultural-performance.jpg";
import { BookingDialog } from "@/components/BookingDialog";

const CulturalExperiences = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);
  const experiences = [
    {
      title: "Traditional Dance Performances",
      schedule: "Every Friday & Saturday, 8:00 PM",
      duration: "90 minutes",
      capacity: "Up to 150 guests",
      description: "Witness the beauty of authentic cultural dances performed by professional troupe in traditional costumes. Experience centuries-old stories told through graceful movements and vibrant music.",
      price: "Complimentary for hotel guests",
    },
    {
      title: "Artisan Workshop Series",
      schedule: "Tuesday & Thursday, 2:00 PM",
      duration: "2 hours",
      capacity: "15 participants",
      description: "Learn traditional crafts from local master artisans. Create your own handcrafted souvenirs including pottery, textile weaving, and traditional painting techniques.",
      price: "$75 per person",
    },
    {
      title: "Heritage Walking Tours",
      schedule: "Daily at 10:00 AM",
      duration: "3 hours",
      capacity: "20 participants",
      description: "Explore the historic district with our knowledgeable guides. Visit ancient temples, traditional markets, and meet local artisans in their workshops.",
      price: "$50 per person",
    },
    {
      title: "Cultural Cooking Experience",
      schedule: "Wednesday & Sunday, 4:00 PM",
      duration: "3 hours",
      capacity: "12 participants",
      description: "Join our chefs for an immersive cooking class featuring traditional recipes passed down through generations. Learn authentic techniques and enjoy your creations.",
      price: "$95 per person",
    },
    {
      title: "Traditional Tea Ceremony",
      schedule: "Daily at 3:00 PM",
      duration: "60 minutes",
      capacity: "8 participants",
      description: "Experience the meditative art of traditional tea ceremony. Learn the history, significance, and proper etiquette while enjoying premium teas.",
      price: "$40 per person",
    },
    {
      title: "Music & Storytelling Evenings",
      schedule: "Monday & Wednesday, 7:00 PM",
      duration: "75 minutes",
      capacity: "50 guests",
      description: "Enjoy an evening of traditional music and folklore storytelling. Local musicians perform on authentic instruments while storytellers share ancient legends.",
      price: "Complimentary for hotel guests",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Cultural Experiences
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Immerse yourself in authentic traditions and create unforgettable memories
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <img
            src={cultural}
            alt="Cultural Performance"
            className="w-full rounded-lg shadow-luxury animate-scale-in"
          />
          <p className="text-center text-muted-foreground mt-6 text-lg">
            Experience the richness of our cultural heritage through curated programs
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center animate-fade-in">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="shadow-luxury animate-scale-in hover:scale-105 transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3">{experience.title}</h3>
                  
                  <div className="space-y-2 mb-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2 text-primary" />
                      <span>{experience.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={18} className="mr-2 text-primary" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={18} className="mr-2 text-primary" />
                      <span>{experience.capacity}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{experience.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-accent">{experience.price}</span>
                    <Button 
                      className="gradient-hero"
                      onClick={() => {
                        setSelectedExperience(experience);
                        setBookingDialogOpen(true);
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-luxury animate-scale-in">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Star size={48} className="text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-serif font-bold mb-4">Why Choose Our Experiences</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">Authentic</h3>
                  <p className="text-muted-foreground">
                    Programs designed with cultural experts and local communities
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">Intimate</h3>
                  <p className="text-muted-foreground">
                    Small group sizes ensure personal attention and meaningful interaction
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">Enriching</h3>
                  <p className="text-muted-foreground">
                    Take home new skills, knowledge, and unforgettable memories
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Dialog */}
      {selectedExperience && (
        <BookingDialog
          open={bookingDialogOpen}
          onOpenChange={setBookingDialogOpen}
          experience={selectedExperience}
        />
      )}
    </div>
  );
};

export default CulturalExperiences;
