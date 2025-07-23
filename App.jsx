
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function WrapifyHome() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-tight">Wrapify</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#gallery" className="hover:text-black">Gallery</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </header>

      <section className="bg-[#e0dfdc] text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Wrap it like a brand.</h2>
        <p className="text-lg max-w-2xl mx-auto">Premium, reusable cotton packaging that turns small businesses into big experiences. Sustainable. Aesthetic. Brand-defining.</p>
        <Button className="mt-6 bg-black text-white hover:bg-gray-900">Get a Quote</Button>
      </section>

      <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">About Wrapify</h3>
        <p className="text-lg text-gray-600">We're a boutique brand packaging company helping small businesses wrap their products with elegance and purpose. From reusable cotton bags to custom-designed kits, we bring a premium touch to every order, no matter the size.</p>
      </section>

      <section id="services" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Reusable Cotton Bags</h4>
              <p className="text-gray-600">Eco-friendly and stylish cotton bags for boutiques and D2C brands, available in multiple sizes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Custom Logo Printing</h4>
              <p className="text-gray-600">Add your logo to our bags and packaging elements to elevate your brand’s unboxing experience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Packaging Bundles</h4>
              <p className="text-gray-600">Full kits including bags, thank-you cards, sleeves, and stickers—tailored to your product line.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-16 px-6 bg-[#f3f2f0] text-center">
        <h3 className="text-3xl font-semibold mb-6">Gallery</h3>
        <p className="text-gray-600 mb-10">A sneak peek into our recent wraps and packaging styles.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="bg-gray-300 h-40 rounded-lg"></div>
          <div className="bg-gray-300 h-40 rounded-lg"></div>
          <div className="bg-gray-300 h-40 rounded-lg"></div>
          <div className="bg-gray-300 h-40 rounded-lg"></div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-white max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-6">Get in Touch</h3>
        <form className="grid gap-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" />
          <Textarea placeholder="Tell us what you're looking for..." />
          <Button className="bg-black text-white hover:bg-gray-900">Send Message</Button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8 bg-[#fdfbf7]">
        © {new Date().getFullYear()} Wrapify. All rights reserved.
      </footer>
    </div>
  );
}
