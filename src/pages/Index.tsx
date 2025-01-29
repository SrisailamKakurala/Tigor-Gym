import { useEffect } from 'react';
import { Dumbbell, Users, Calendar, Trophy } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            UNLEASH YOUR <span className="text-primary">POTENTIAL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">Transform your body. Transform your life.</p>
          <button className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors animate-fade-in">
            Join Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 section-fade">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-colors">
            <Dumbbell className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
            <p className="text-gray-300">State-of-the-art facilities for optimal training</p>
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-colors">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
            <p className="text-gray-300">Professional guidance for your fitness journey</p>
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-colors">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Classes</h3>
            <p className="text-gray-300">Wide range of classes to fit your schedule</p>
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-colors">
            <Trophy className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
            <p className="text-gray-300">Achieve your fitness goals with our proven methods</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;