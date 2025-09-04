
"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function PortfolioBusiness() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-4">
          Hi, I'm Mousumi Ara Ahmed
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl mb-6">
          Developer | Entrepreneur | Problem Solver
        </motion.p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow-lg">
          Get in Touch
        </Button>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-center text-gray-600">
          I am a passionate developer and entrepreneur focused on building impactful digital solutions. My mission is to combine creativity and technology to deliver business value.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Web Development", "Business Consulting", "UI/UX Design"].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600">High-quality {service.toLowerCase()} services tailored to your needs.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <motion.div whileHover={{ scale: 1.05 }} key={project} className="rounded-2xl overflow-hidden shadow-md bg-white">
              <img src={`https://via.placeholder.com/400x250?text=Project+${project}`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-600">Short description of project {project}.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6 text-gray-600">Let's build something amazing together!</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:you@example.com" className="text-blue-600 hover:text-blue-800"><Mail /></a>
          <a href="https://github.com/yourprofile" className="text-blue-600 hover:text-blue-800"><Github /></a>
          <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:text-blue-800"><Linkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}
