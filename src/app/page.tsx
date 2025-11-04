"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="The Roastery"
          button={{
            text: "Order Now",
            href: "https://order.theroastery.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Crafted with passion, served with love"
          description="Experience the perfect blend of artisanal coffee and warm hospitality. From our carefully selected beans to our expertly trained baristas, every cup tells a story of quality and craftsmanship."
          tag="Welcome to The Roastery"
          tagIcon={Coffee}
          imageSrc="https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee shop interior"
          buttons={[
            { text: "Explore Menu", href: "product" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 2018, The Roastery began as a passion project to bring exceptional coffee to our community.",
            "We source our beans directly from farmers, ensuring fair trade practices and the highest quality in every cup.",
            "Today, we're proud to serve thousands of coffee lovers who appreciate the art of perfect brewing."
          ]}
          buttons={[
            { text: "Learn More", href: "team" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Signature Blends"
          description="Discover our carefully curated selection of premium coffee blends, each crafted to perfection"
          tag="Menu"
          products={[
            {
              id: "1",
              brand: "The Roastery",
              name: "Signature Espresso Blend",
              price: "$18.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/33682396/pexels-photo-33682396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Signature espresso blend"
            },
            {
              id: "2",
              brand: "The Roastery",
              name: "Artisan Cappuccino Mix",
              price: "$16.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino blend"
            },
            {
              id: "3",
              brand: "The Roastery",
              name: "Premium Cold Brew",
              price: "$22.99",
              rating: 4,
              reviewCount: "987",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Master Roasters"
          description="The passionate team behind every perfect cup"
          tag="Our Team"
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Head Roaster",
              imageSrc: "https://images.pexels.com/photos/1058064/pexels-photo-1058064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Coffee Sommelier",
              imageSrc: "https://images.pexels.com/photos/34164498/pexels-photo-34164498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Rodriguez portrait"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who visit us daily"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Emily Watson",
              role: "Marketing Director",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Watson portrait"
            },
            {
              id: "2",
              name: "David Kim",
              role: "Freelance Designer",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            },
            {
              id: "3",
              name: "Lisa Johnson",
              role: "Business Owner",
              company: "Local Boutique",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Johnson portrait"
            },
            {
              id: "4",
              name: "Alex Thompson",
              role: "Software Developer",
              company: "Tech Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3808842/pexels-photo-3808842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee and services"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday through Friday from 6:00 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM. We're closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer coffee subscriptions?",
              content: "Yes! We offer monthly coffee subscriptions with free delivery. Choose from our signature blends or create a custom selection based on your preferences."
            },
            {
              id: "3",
              title: "Can I host events at your coffee shop?",
              content: "Absolutely! We have a private event space that can accommodate up to 50 people. Contact us to discuss your event needs and booking availability."
            },
            {
              id: "4",
              title: "Do you offer barista training?",
              content: "We offer weekend barista workshops for coffee enthusiasts. Our classes cover everything from espresso pulling to latte art. Check our website for upcoming dates."
            },
            {
              id: "5",
              title: "What brewing methods do you use?",
              content: "We use various brewing methods including espresso machines, pour-over, French press, and cold brew systems. Each method is chosen to bring out the best in our specific bean varieties."
            }
          ]}
          textPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Join our coffee community"
          description="Get the latest updates on new blends, brewing tips, and exclusive offers delivered to your inbox"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and promotional emails. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="The Roastery"
          columns={[
            {
              items: [
                { label: "Menu", href: "product" },
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "https://maps.google.com" },
                { label: "Hours", href: "hours" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}