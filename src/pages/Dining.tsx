import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, ChefHat, Award } from "lucide-react";
import restaurant from "@/assets/restaurant.jpg";

const Dining = () => {
  const restaurants = [
    {
      name: "Heritage Restaurant",
      cuisine: "Traditional & Contemporary Fusion",
      hours: "6:00 AM - 11:00 PM",
      description: "Our signature restaurant offers an exquisite blend of traditional recipes and modern culinary techniques. Chef curated menus featuring locally sourced ingredients and authentic spices.",
      highlights: [
        "Award-winning chef",
        "Farm-to-table ingredients",
        "Traditional cooking methods",
        "Private dining available",
      ],
    },
    {
      name: "Rooftop Bar & Lounge",
      cuisine: "International Tapas & Cocktails",
      hours: "5:00 PM - 1:00 AM",
      description: "Enjoy panoramic city views while savoring artisanal cocktails and international small plates. Live music on weekends creates the perfect ambiance.",
      highlights: [
        "Signature cocktails",
        "Live entertainment",
        "Skyline views",
        "Late-night menu",
      ],
    },
    {
      name: "Garden Café",
      cuisine: "Light Fare & Specialty Coffee",
      hours: "7:00 AM - 6:00 PM",
      description: "A serene setting perfect for breakfast, lunch, or afternoon tea. Featuring fresh pastries, sandwiches, and the finest selection of teas and coffees.",
      highlights: [
        "Outdoor seating",
        "Fresh baked goods",
        "Afternoon tea service",
        "Vegan options",
      ],
    },
  ];

  const specialties = [
    "Traditional slow-cooked lamb with ancient spices",
    "Seafood platter with daily fresh catch",
    "Vegetarian tasting menu celebrating local produce",
    "Signature desserts inspired by cultural heritage",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Culinary Excellence
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            Experience a gastronomic journey through tradition and innovation
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <img
            src={restaurant}
            alt="Restaurant"
            className="w-full rounded-lg shadow-luxury animate-scale-in"
          />
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center animate-fade-in">
            Our Dining Venues
          </h2>
          
          <div className="space-y-8">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="shadow-luxury animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-serif font-bold mb-2">{restaurant.name}</h3>
                      <p className="text-primary font-medium">{restaurant.cuisine}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Clock size={20} className="mr-2" />
                      <span>{restaurant.hours}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6">{restaurant.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {restaurant.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center">
                        <ChefHat size={20} className="text-primary mr-2" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="gradient-hero">Make a Reservation</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Award size={48} className="text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-serif font-bold mb-4">Signature Specialties</h2>
            <p className="text-muted-foreground text-lg">
              Dishes that celebrate our culinary heritage and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {specialties.map((dish, index) => (
              <Card key={index} className="shadow-soft animate-scale-in">
                <CardContent className="p-6">
                  <p className="text-lg">{dish}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 animate-fade-in">The Complete Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <h3 className="font-semibold text-xl mb-3">Cultural Dining Events</h3>
              <p className="text-muted-foreground">
                Monthly themed dinners celebrating traditional festivals and cuisines
              </p>
            </div>
            <div className="animate-fade-in">
              <h3 className="font-semibold text-xl mb-3">Cooking Classes</h3>
              <p className="text-muted-foreground">
                Learn authentic recipes from our master chefs
              </p>
            </div>
            <div className="animate-fade-in">
              <h3 className="font-semibold text-xl mb-3">Wine Pairings</h3>
              <p className="text-muted-foreground">
                Curated selections from local and international vineyards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;
