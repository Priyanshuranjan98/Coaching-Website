const { useState, useEffect } = React;

function CoachingCenter() {
  const achievements = [
    { year: "2021 Results", detail: "95% students scored above 80% in board exams." },
    { year: "2022 Results", detail: "10 students secured above 90% marks." },
    { year: "2023 Results", detail: "100% pass result with excellence awards." },
  ];

  const testimonials = [
    {
      name: "Ananya, Class 9",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback: "The teachers here explain concepts so clearly. My marks improved a lot in just a few months!",
    },
    {
      name: "Rohan, Class 8",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      feedback: "I love the online classes. Even from home, I feel connected and confident in my studies.",
    },
    {
      name: "Priya, Class 10",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback: "Bright Future Coaching not only helped me score better but also motivated me to aim higher.",
    },
  ];

  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevAchievement = () => setCurrentAchievement((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  const nextAchievement = () => setCurrentAchievement((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));

  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  // Auto slide for achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const buttonClasses =
    "bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-2xl font-bold transition transform hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,1)] hover:bg-blue-700";

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-purple-700 via-pink-600 to-red-600 bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-70">
        {/* SEO Head Section */}
        <head>
          <title>Bright Future Coaching - Coaching for 10th Std Students</title>
          <meta
            name="description"
            content="Bright Future Coaching provides expert coaching for students up to 10th standard with online and offline classes, results, testimonials, and achievements."
          />
          <meta
            name="keywords"
            content="Coaching for 10th, Online Coaching Classes, Best Coaching Center, Bright Future Coaching, Student Achievements, Tutor Mr. Govind Roy"
          />
          <meta name="author" content="Bright Future Coaching" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

        {/* Header */}
        <header className="bg-gradient-to-r from-yellow-500 to-red-500 py-4 md:py-6 shadow-xl">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">Bright Future Coaching</h1>
            <p className="text-xs md:text-sm font-light">For Students upto 10th Standard</p>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="text-center py-16 md:py-20 px-4 md:px-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=50')",
          }}
        >
          <div className="bg-white bg-opacity-20 p-6 md:p-10 rounded-3xl inline-block w-full md:w-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 drop-shadow-lg">
              Unlock Your True Potential
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">
              Join our coaching classes designed for students up to 10th standard. We provide <b>online and offline learning</b> options to help you excel in academics.
            </p>
            <a
              href="https://wa.me/917759074059"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 md:mt-8 inline-block ${buttonClasses}`}
            >
              Enroll Now
            </a>
          </div>
        </section>

        {/* Motivational Quote */}
        <section className="py-12 md:py-16 px-4 md:px-6 text-center">
          <blockquote className="p-6 md:p-8 rounded-3xl shadow-xl bg-gradient-to-r from-pink-500 to-orange-500 text-lg md:text-xl max-w-3xl mx-auto italic font-semibold">
            “Education is the most powerful weapon which you can use to change the world.”
          </blockquote>
        </section>

        {/* Online Classes Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 text-center bg-gradient-to-r from-green-600 to-teal-500">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Online Classes Available</h3>
          <p className="max-w-2xl mx-auto mb-6 md:mb-8 opacity-90 text-sm md:text-base">
            Attend live interactive online classes from the comfort of your home. Get access to study material, practice tests, and doubt-solving sessions.
          </p>
          <a
            href="https://wa.me/917759074059"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 md:mt-8 inline-block ${buttonClasses}`}
          >
            Join Online Batch
          </a>
        </section>

        {/* Achievements Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Our Achievements</h3>
          <div className="relative w-full max-w-xl mx-auto">
            <div className="p-4 md:p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-700">
              <h4 className="font-bold mb-2 text-xl md:text-2xl">{achievements[currentAchievement].year}</h4>
              <p className="text-sm md:text-base">{achievements[currentAchievement].detail}</p>
            </div>
            <button
              onClick={prevAchievement}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 md:px-5 py-3 md:py-5 rounded-full shadow-2xl transition transform hover:scale-125 hover:shadow-[0_0_25px_rgba(59,130,246,1)] hover:bg-blue-700 text-xl md:text-2xl"
            >
              ⟨
            </button>
            <button
              onClick={nextAchievement}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 md:px-5 py-3 md:py-5 rounded-full shadow-2xl transition transform hover:scale-125 hover:shadow-[0_0_25px_rgba(59,130,246,1)] hover:bg-blue-700 text-xl md:text-2xl"
            >
              ⟩
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-cyan-500 to-blue-600">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What Our Students Say</h3>
          <div className="relative w-full max-w-xl mx-auto text-center">
            <div className="p-6 md:p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-3xl shadow-lg transition-all duration-700">
              <img
                src={testimonials[currentTestimonial].img}
                alt={testimonials[currentTestimonial].name}
                loading="lazy"
                className="mx-auto rounded-full mb-4 border-2 md:border-4 border-yellow-400 w-24 h-24 md:w-32 md:h-32 object-cover"
              />
              <p className="italic mb-4 text-sm md:text-base">“{testimonials[currentTestimonial].feedback}”</p>
              <h4 className="font-semibold text-base md:text-lg">– {testimonials[currentTestimonial].name}</h4>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 md:px-5 py-3 md:py-5 rounded-full shadow-2xl transition transform hover:scale-125 hover:shadow-[0_0_25px_rgba(59,130,246,1)] hover:bg-blue-700 text-xl md:text-2xl"
            >
              ⟨
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 md:px-5 py-3 md:py-5 rounded-full shadow-2xl transition transform hover:scale-125 hover:shadow-[0_0_25px_rgba(59,130,246,1)] hover:bg-blue-700 text-xl md:text-2xl"
            >
              ⟩
            </button>
          </div>
        </section>

        {/* Tutor Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 text-center bg-gradient-to-r from-orange-600 to-pink-600">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Meet Our Tutor</h3>
          <img
            src="./Govind_roy.jpg"
            alt="Tutor Mr. Govind Roy - Bright Future Coaching"
            loading="lazy"
            className="mx-auto rounded-full mb-4 md:mb-6 shadow-xl border-2 md:border-4 border-yellow-400 w-28 h-28 md:w-36 md:h-36 object-cover"
          />
          <h4 className="text-xl md:text-2xl font-semibold">Mr. Govind Roy</h4>
          <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base">
            Experienced educator with 10+ years of teaching students up to 10th standard.
          </p>
          <p className="text-sm md:text-base">
            📞 Call/WhatsApp: <span className="font-semibold">+91 7759074059</span>
          </p>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 px-4 md:px-6 text-center bg-gradient-to-r from-teal-600 to-green-600">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Contact Us</h3>
          <p className="mb-2 md:mb-3 text-sm md:text-base">
            📞 Call/WhatsApp: <span className="font-semibold">+91 7759074059</span>
          </p>
          <p className="text-sm md:text-base">📍 Location: Near City Center, YourTown</p>
        </section>

        {/* Footer */}
        <footer className="bg-black bg-opacity-80 text-gray-300 py-6 md:py-8 text-center text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Bright Future Coaching. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CoachingCenter />);
