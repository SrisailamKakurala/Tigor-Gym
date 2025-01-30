import { useEffect } from 'react';
import { Dumbbell, Clock, Users, Star, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      description: "Build strength and power with professional guidance",
      videoUrl: "https://example.com/powerlifting.mp4"
    },
    {
      title: "HIIT Training",
      icon: <Clock className="h-12 w-12 text-primary" />,
      time: "Tue, Thu - 7:00 AM",
      trainer: "Sarah Smith",
      description: "High-intensity interval training for maximum results",
      videoUrl: "https://example.com/hiit.mp4"
    },
    {
      title: "Group Training",
      icon: <Users className="h-12 w-12 text-primary" />,
      time: "Mon-Fri - 5:00 PM",
      trainer: "Mike Johnson",
      description: "Motivating group sessions for all fitness levels",
      videoUrl: "https://example.com/group.mp4"
    },
    {
      title: "Elite Program",
      icon: <Star className="h-12 w-12 text-primary" />,
      time: "Sat - 8:00 AM",
      trainer: "Lisa Anderson",
      description: "Advanced training for experienced athletes",
      videoUrl: "https://example.com/elite.mp4"
    }
  ];

  const glossaryImages = [
    "/gym-1.jpg",
    "/gym-2.jpg",
    "/gym-3.jpg",
    "/gym-4.jpg",
    "/gym-5.jpg"
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 text-center">
          OUR <span className="text-primary">CLASSES</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {classes.map((classItem, index) => (
            <div 
              key={index}
              className="section-fade bg-secondary/50 p-8 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="mb-6">{classItem.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{classItem.title}</h3>
              <p className="text-gray-400 mb-2">{classItem.time}</p>
              <p className="text-primary mb-4">Trainer: {classItem.trainer}</p>
              <p className="text-gray-300 mb-6">{classItem.description}</p>
              <div className="mt-auto">
                <button 
                  onClick={() => console.log('Play video:', classItem.videoUrl)}
                  className="w-full bg-primary py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Play className="h-5 w-5" />
                  Watch Class Preview
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="section-fade mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            GYM <span className="text-primary">GALLERY</span>
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {glossaryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <div className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    index === Math.floor(glossaryImages.length / 2) ? 'scale-110 z-10' : 'scale-90'
                  }`}>
                    <img
                      src={image}
                      alt={`Gym image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Classes;