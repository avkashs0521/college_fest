import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [activeDay, setActiveDay] = useState("day1");

  // Timeline events data
  const scheduleEvents = {
    day1: [
      {
        id: 1,
        time: "09:00 AM",
        title: "Opening Ceremony",
        venue: "Main Auditorium",
        category: "ceremony",
      },
      {
        id: 2,
        time: "10:30 AM",
        title: "Tech Talk: AI & Machine Learning",
        venue: "Hall A",
        category: "tech",
      },
      {
        id: 3,
        time: "12:00 PM",
        title: "Lunch Break",
        venue: "Cafeteria",
        category: "break",
      },
      {
        id: 4,
        time: "01:00 PM",
        title: "Coding Competition Round 1",
        venue: "Computer Lab",
        category: "competition",
      },
      {
        id: 5,
        time: "03:30 PM",
        title: "Live Music Performance",
        venue: "Open Ground",
        category: "performance",
      },
    ],
    day2: [
      {
        id: 6,
        time: "10:00 AM",
        title: "Workshop: Web Development",
        venue: "Hall B",
        category: "workshop",
      },
      {
        id: 7,
        time: "01:00 PM",
        title: "Coding Competition Finals",
        venue: "Computer Lab",
        category: "competition",
      },
      {
        id: 8,
        time: "03:00 PM",
        title: "Cultural Dance Performance",
        venue: "Main Stage",
        category: "performance",
      },
      {
        id: 9,
        time: "06:00 PM",
        title: "Networking Dinner",
        venue: "Grand Dining Hall",
        category: "social",
      },
    ],
    day3: [
      {
        id: 10,
        time: "09:00 AM",
        title: "Startup Pitch Competition",
        venue: "Hall C",
        category: "competition",
      },
      {
        id: 11,
        time: "12:00 PM",
        title: "Panel Discussion: Future of Tech",
        venue: "Auditorium",
        category: "talk",
      },
      {
        id: 12,
        time: "02:00 PM",
        title: "DJ Night & Closing Ceremony",
        venue: "Open Ground",
        category: "performance",
      },
    ],
  };

  const speakers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "AI Researcher",
      company: "Tech Innovations Inc",
      image: "🧠",
      social: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      role: "Web Developer",
      company: "Digital Solutions Co",
      image: "💻",
      social: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Product Manager",
      company: "StartUp Labs",
      image: "📱",
      social: { twitter: "#", linkedin: "#", instagram: "#" },
    },
    {
      id: 4,
      name: "James Park",
      role: "Music Producer",
      company: "Sound Studios",
      image: "🎵",
      social: { twitter: "#", linkedin: "#", instagram: "#" },
    },
  ];

  const currentEvents = scheduleEvents[activeDay as keyof typeof scheduleEvents];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      ceremony: "bg-primary/10 text-primary border-primary/20",
      tech: "bg-secondary/10 text-secondary border-secondary/20",
      competition: "bg-accent/10 text-accent border-accent/20",
      performance: "bg-primary/10 text-primary border-primary/20",
      workshop: "bg-secondary/10 text-secondary border-secondary/20",
      break: "bg-muted text-muted-foreground border-border",
      talk: "bg-secondary/10 text-secondary border-secondary/20",
      social: "bg-primary/10 text-primary border-primary/20",
    };
    return colors[category] || colors.ceremony;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-12 pb-20 md:pt-24 md:pb-32">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-foreground mb-6">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-semibold">Welcome to the Experience</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                CollegeFest 2026
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The biggest cultural & tech celebration of the year. Experience unforgettable moments, discover new talents, and connect with 5,000+ students from across the region.
            </p>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm md:text-base">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Calendar className="w-5 h-5 text-primary" />
                <span>March 14-16, 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted"></div>
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>University Campus</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted"></div>
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Users className="w-5 h-5 text-accent" />
                <span>5,000+ Attendees</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-base gap-2 shadow-lg hover:shadow-xl"
              >
                Register Now
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/schedule"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-base"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Event Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore the full fest schedule by day and time
              </p>
            </div>

            {/* Day Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["day1", "day2", "day3"].map((day, idx) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeDay === day
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  Day {idx + 1}
                </button>
              ))}
            </div>

            {/* Events Timeline */}
            <div className="space-y-4">
              {currentEvents.map((event, idx) => (
                <div key={event.id} className="flex gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    {idx < currentEvents.length - 1 && (
                      <div className="w-0.5 h-20 bg-border mt-2"></div>
                    )}
                  </div>

                  {/* Event Card */}
                  <div className="pb-4 flex-grow pt-1">
                    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                        <div>
                          <p className="text-sm font-bold text-primary">
                            {event.time}
                          </p>
                          <h3 className="text-lg font-bold text-foreground">
                            {event.title}
                          </h3>
                        </div>
                        <span
                          className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(event.category)}`}
                        >
                          {event.category.charAt(0).toUpperCase() +
                            event.category.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin size={14} />
                        {event.venue}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Stars
            </h2>
            <p className="text-lg text-muted-foreground">
              Our amazing speakers, artists, and performers
            </p>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Avatar */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {speaker.image}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {speaker.company}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={speaker.social.twitter}
                      className="flex-1 py-2 px-3 rounded-lg bg-muted hover:bg-primary/20 text-center text-xs font-semibold transition-colors"
                      title="Twitter"
                    >
                      𝕏
                    </a>
                    <a
                      href={speaker.social.linkedin}
                      className="flex-1 py-2 px-3 rounded-lg bg-muted hover:bg-primary/20 text-center text-xs font-semibold transition-colors"
                      title="LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href={speaker.social.instagram}
                      className="flex-1 py-2 px-3 rounded-lg bg-muted hover:bg-primary/20 text-center text-xs font-semibold transition-colors"
                      title="Instagram"
                    >
                      📷
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Be Part of the Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't miss out on the most exciting fest of the year.
              </p>
            </div>

            {/* Registration Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  General Admission
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">Free</p>
                <p className="text-sm text-muted-foreground">
                  Access to all events and activities
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-secondary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  VIP Pass
                </h3>
                <p className="text-3xl font-bold text-secondary mb-2">$15</p>
                <p className="text-sm text-muted-foreground">
                  Front row seating & exclusive meet & greet
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  3-Day Pass
                </h3>
                <p className="text-3xl font-bold text-accent mb-2">$25</p>
                <p className="text-sm text-muted-foreground">
                  All-access for the entire fest
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Quick Registration
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    College Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your University"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Ticket Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>General Admission (Free)</option>
                    <option>VIP Pass ($15)</option>
                    <option>3-Day Pass ($25)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-base flex items-center justify-center gap-2"
                >
                  Join the Fest
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>

            {/* Trust Info */}
            <p className="text-center text-sm text-muted-foreground">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8">
            PROUDLY SUPPORTED BY
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {[1, 2, 3, 4].map((sponsor) => (
              <div
                key={sponsor}
                className="flex items-center justify-center h-16 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <span className="text-muted-foreground font-semibold">
                  Sponsor {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
