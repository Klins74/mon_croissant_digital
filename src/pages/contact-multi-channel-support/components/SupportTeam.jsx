import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SupportTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Aida Nazarbayeva",
      role: "Customer Service Manager",
      languages: ["Kazakh", "Russian", "English"],
      specialties: ["Order Management", "Quality Assurance"],
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      availability: "Mon-Fri: 8:00-18:00",
      contact: "aida@moncroissant.kz"
    },
    {
      id: 2,
      name: "Dmitri Volkov",
      role: "Technical Support Lead",
      languages: ["Russian", "English"],
      specialties: ["Online Orders", "App Support"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      availability: "Mon-Sun: 9:00-21:00",
      contact: "dmitri@moncroissant.kz"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "International Relations",
      languages: ["English", "French", "Russian"],
      specialties: ["Catering", "Corporate Orders"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      availability: "Mon-Fri: 10:00-19:00",
      contact: "sarah@moncroissant.kz"
    },
    {
      id: 4,
      name: "Arman Bekmuratov",
      role: "Delivery Coordinator",
      languages: ["Kazakh", "Russian"],
      specialties: ["Delivery Issues", "Route Planning"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      availability: "Mon-Sun: 7:00-22:00",
      contact: "arman@moncroissant.kz"
    }
  ];

  const getLanguageFlag = (language) => {
    const flags = {
      'Kazakh': '🇰🇿',
      'Russian': '🇷🇺',
      'English': '🇬🇧',
      'French': '🇫🇷'
    };
    return flags?.[language] || '🌐';
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Meet Our Support Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated multilingual team combines local expertise with international service standards to provide you with exceptional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="bg-card rounded-xl border border-border shadow-warm overflow-hidden group hover:shadow-warm-lg transition-all duration-300"
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member?.avatar}
                    alt={member?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-heading font-semibold text-card-foreground mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member?.role}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Languages */}
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2 flex items-center">
                      <Icon name="Languages" size={16} className="mr-2" />
                      Languages
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member?.languages?.map((language) => (
                        <span
                          key={language}
                          className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {getLanguageFlag(language)} {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2 flex items-center">
                      <Icon name="Star" size={16} className="mr-2" />
                      Specialties
                    </h4>
                    <div className="space-y-1">
                      {member?.specialties?.map((specialty) => (
                        <span
                          key={specialty}
                          className="block text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-2 flex items-center">
                      <Icon name="Clock" size={16} className="mr-2" />
                      Available
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {member?.availability}
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="pt-2 border-t border-border">
                    <button
                      onClick={() => window.location.href = `mailto:${member?.contact}`}
                      className="w-full flex items-center justify-center space-x-2 py-2 px-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <Icon name="Mail" size={16} />
                      <span>Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-card rounded-xl border border-border p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">15+</h3>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Languages" size={28} className="text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">5</h3>
              <p className="text-muted-foreground">Languages Supported</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">&lt;2h</h3>
              <p className="text-muted-foreground">Average Response</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ThumbsUp" size={28} className="text-success-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">98%</h3>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportTeam;