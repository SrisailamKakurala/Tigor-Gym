import { useEffect } from 'react';
import { Dumbbell, Users, Calendar, Trophy, ArrowRight, Star, Clock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-fade').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, value: "2000+", label: "Active Members" },
    { icon: <Dumbbell className="h-8 w-8 text-primary" />, value: "50+", label: "Equipment Types" },
    { icon: <Calendar className="h-8 w-8 text-primary" />, value: "100+", label: "Classes Monthly" },
    { icon: <Trophy className="h-8 w-8 text-primary" />, value: "15+", label: "Expert Trainers" }
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Professional Athlete",
      comment: "Best gym I've ever been to. The trainers are exceptional!",
      rating: 5
    },
    {
      name: "Sarah Smith",
      role: "Fitness Enthusiast",
      comment: "Transformed my life in just 6 months. Amazing community!",
      rating: 5
    },
    {
      name: "Mike Johnson",
      role: "Business Executive",
      comment: "Perfect balance of equipment and classes. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            UNLEASH YOUR <span className="text-primary">POTENTIAL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">Transform your body. Transform your life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/membership"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors animate-fade-in"
            >
              Join Now
            </Link>
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors animate-fade-in"
            >
              Explore Classes <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary/30 section-fade">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 section-fade">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            WHY CHOOSE <span className="text-primary">TIGER GYM</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-2">
              <Dumbbell className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
              <p className="text-gray-300">State-of-the-art facilities for optimal training</p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-2">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-gray-300">Professional guidance for your fitness journey</p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-2">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Classes</h3>
              <p className="text-gray-300">Wide range of classes to fit your schedule</p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-2">
              <Trophy className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
              <p className="text-gray-300">Achieve your fitness goals with our proven methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-4 section-fade bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            FEATURED <span className="text-primary">PROGRAMS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Strength Training"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Strength Training</h3>
                  <p className="text-gray-300">Build muscle and increase strength</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Cardio Classes"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Cardio Classes</h3>
                  <p className="text-gray-300">Improve endurance and burn fat</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Personal Training"
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Personal Training</h3>
                  <p className="text-gray-300">Customized workout plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 section-fade">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            SUCCESS <span className="text-primary">STORIES</span>
          </h2>
          <ScrollArea className="h-[400px] w-full rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-secondary/50 p-8 rounded-lg hover:bg-secondary/70 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-primary text-sm">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 section-fade bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            START YOUR <span className="text-primary">JOURNEY</span> TODAY
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of fitness enthusiasts and transform your life with expert guidance and state-of-the-art facilities.
          </p>
          <Link 
            to="/membership"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;