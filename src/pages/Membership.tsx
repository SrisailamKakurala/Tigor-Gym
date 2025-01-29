import { useEffect } from 'react';
import { Check } from 'lucide-react';

const Membership = () => {
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

  const plans = [
    {
      name: "Basic",
      price: "$29",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "2 group classes per month"
      ]
    },
    {
      name: "Premium",
      price: "$59",
      features: [
        "All Basic features",
        "Unlimited group classes",
        "1 personal training session/month",
        "Nutrition consultation",
        "Access to spa facilities"
      ]
    },
    {
      name: "Elite",
      price: "$99",
      features: [
        "All Premium features",
        "4 personal training sessions/month",
        "Monthly body composition analysis",
        "Priority class booking",
        "Guest passes",
        "Custom workout plans"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 text-center">
          MEMBERSHIP <span className="text-primary">PLANS</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="section-fade bg-secondary/50 p-8 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary mb-6">
                {plan.price}
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;