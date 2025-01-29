import { useEffect } from 'react';
import { Dumbbell, Clock, Users, Star } from 'lucide-react';

const Classes = () => {
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

  const classes = [
    {
      title: "Power Lifting",
      icon: <Dumbbell className="h-12 w-12 text-primary" />,
      time: "Mon, Wed, Fri - 6:00 AM",
      trainer: "John Doe",
      description: "Build strength and power with professional guidance"
    },
    {
      title: "HIIT Training",
      icon: <Clock className="h-12 w-12 text-primary" />,
      time: "Tue, Thu - 7:00 AM",
      trainer: "Sarah Smith",
      description: "High-intensity interval training for maximum results"
    },
    {
      title: "Group Training",
      icon: <Users className="h-12 w-12 text-primary" />,
      time: "Mon-Fri - 5:00 PM",
      trainer: "Mike Johnson",
      description: "Motivating group sessions for all fitness levels"
    },
    {
      title: "Elite Program",
      icon: <Star className="h-12 w-12 text-primary" />,
      time: "Sat - 8:00 AM",
      trainer: "Lisa Anderson",
      description: "Advanced training for experienced athletes"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 text-center">
          OUR <span className="text-primary">CLASSES</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem, index) => (
            <div 
              key={index}
              className="section-fade bg-secondary/50 p-8 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{classItem.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{classItem.title}</h3>
              <p className="text-gray-400 mb-2">{classItem.time}</p>
              <p className="text-primary mb-4">Trainer: {classItem.trainer}</p>
              <p className="text-gray-300">{classItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;