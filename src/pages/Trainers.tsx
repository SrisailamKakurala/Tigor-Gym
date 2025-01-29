import { useEffect } from 'react';

const Trainers = () => {
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

  const trainers = [
    {
      name: "John Doe",
      specialty: "Power Lifting",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      experience: "10+ years"
    },
    {
      name: "Sarah Smith",
      specialty: "HIIT & Cardio",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      experience: "8+ years"
    },
    {
      name: "Mike Johnson",
      specialty: "CrossFit",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      experience: "12+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 text-center">
          ELITE <span className="text-primary">TRAINERS</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="section-fade relative group overflow-hidden rounded-lg"
            >
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-2">{trainer.specialty}</p>
                <p className="text-gray-300">Experience: {trainer.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;