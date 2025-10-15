import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Hospitality",
      description: "We welcome guests with genuine warmth and traditional hospitality that reflects our cultural roots.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing world-class service and maintaining the highest standards in every aspect.",
    },
    {
      icon: Users,
      title: "Cultural Heritage",
      description: "Preserving and celebrating our rich cultural traditions through immersive guest experiences.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Protecting our environment and supporting local communities for future generations.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
            Our Story
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in">
            A legacy of luxury, culture, and exceptional hospitality since 1985
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6 text-center">Our Heritage</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Heritage Grand Hotel was founded with a vision to create a sanctuary where luxury meets tradition. 
                For over three decades, we have been the premier destination for travelers seeking an authentic cultural 
                experience combined with world-class hospitality.
              </p>
              <p>
                Our hotel stands as a testament to architectural elegance, featuring traditional design elements 
                harmoniously blended with modern amenities. Every corner tells a story, from the hand-carved artwork 
                adorning our walls to the carefully curated cultural performances that grace our halls.
              </p>
              <p>
                We take pride in our commitment to preserving local traditions while providing guests with contemporary 
                comfort. Our partnerships with local artisans, performers, and cultural organizations ensure authentic 
                experiences that connect visitors to the rich heritage of our region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="shadow-luxury animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To provide an unparalleled hospitality experience that celebrates cultural heritage while 
                  delivering luxury and comfort. We strive to create memorable moments that connect our guests 
                  to the traditions and warmth of our culture.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-luxury animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be recognized globally as the leading destination for culturally immersive luxury hospitality, 
                  setting the standard for authentic experiences while contributing to the preservation and promotion 
                  of cultural heritage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center animate-fade-in">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-luxury transition-smooth animate-scale-in">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 animate-fade-in">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our commitment to excellence has been recognized by prestigious organizations worldwide
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="text-6xl font-serif font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-6xl font-serif font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Guest Satisfaction</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-6xl font-serif font-bold text-accent mb-2">35+</div>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
