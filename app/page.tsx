"use client";

import { Button } from "@/components/ui/button";
import { TowerControl as GameController, Youtube, Stamp as Steam, Trophy, Film, Users, Calendar, Globe2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img width={80} height={80} src="/playpal.png"></img>
            <span className="text-2xl font-bold text-white">PlayPal</span>
          </div>
          <div className="space-x-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-purple-400">Home</Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline" className="text-purple border-purple-500 hover:bg-purple-500">Profile</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="container mx-auto px-6 py-24 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-6xl font-bold text-white mb-6">
          Find Your Perfect <span className="text-purple-500">Gaming Squad</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join the elite community of gamers, find teammates, and compete in tournaments worldwide.
        </p>
        <Link href="/profile">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
            Get Started Now
          </Button>
        </Link>
      </motion.section>

      {/* Features */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Trophy className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Pro Statistics</h3>
            <p className="text-gray-400">Track your performance across multiple games and platforms</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Youtube className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Content Creator</h3>
            <p className="text-gray-400">Share your gaming content and grow your audience</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Steam className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Game Library</h3>
            <p className="text-gray-400">Connect and showcase your gaming achievements</p>
          </motion.div>
        </div>
      </section>

      {/* Find Teammates Section */}
      <motion.section 
        className="container mx-auto px-6 py-24 bg-gray-800/50 rounded-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <Users className="h-16 w-16 text-purple-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Find Your Dream Team</h2>
          <p className="text-xl text-gray-300">Connect with players who match your skill level and gaming style</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Casual', 'Competitive', 'Professional'].map((type, index) => (
            <motion.div 
              key={type}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{type} Players</h3>
              <p className="text-gray-400 mb-4">Find {type.toLowerCase()} teammates for your favorite games</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Browse Players</Button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tournaments Section */}
      <motion.section 
        className="container mx-auto px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <Calendar className="h-16 w-16 text-purple-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Tournaments</h2>
          <p className="text-xl text-gray-300">Compete in tournaments across various skill levels</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'PlayPal Pro League', prize: '$10,000', date: 'March 15, 2025' },
            { name: 'Community Cup', prize: '$5,000', date: 'March 20, 2025' },
            { name: 'Rookie Challenge', prize: '$2,500', date: 'March 25, 2025' }
          ].map((tournament, index) => (
            <motion.div 
              key={tournament.name}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
              <p className="text-purple-500 font-bold mb-2">Prize Pool: {tournament.prize}</p>
              <p className="text-gray-400 mb-4">Starting: {tournament.date}</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 PlayPal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}