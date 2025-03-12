"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
// import { TowerControl as GameController, Youtube, Stamp as Steam, ArrowLeft, Film, Trophy, Globe2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Sample image URLs for the content cards
  const contentImages = [
    "/1.avif",
    "/3.avif",
    "/3.avif"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <GameController className="h-8 w-8 text-purple-500" /> */}
            <span className="text-2xl font-bold text-white">PlayPal</span>
          </div>
          <div className="space-x-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-purple-400">
                 Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <Card className="bg-gray-800 p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <motion.div 
                className="relative w-48 h-48 mx-auto md:mx-0"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/src.avif"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-purple-500 p-2 rounded-full">
                  {/* <Trophy className="h-6 w-6 text-white" /> */}
                </div>
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-white">Pro Gamer</h1>
                  <div className="flex items-center text-gray-400">
                    {/* <Globe 2 className="h-4 w-4 mr-1" /> */}
                    <span>United States</span>
                  </div>
                  <div className="text-purple-500 font-semibold">
                    Languages: English, Spanish
                  </div>
                </div>
                <p className="text-gray-400 mb-4">Professional Esports Player & Content Creator</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <motion.div 
                    className="bg-gray-700 p-4 rounded-lg text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {/* <Youtube className="h-6 w-6 text-red-500" /> */}
                      <Image src="/youtube.png" alt="YouTube" width={50} height={50} />
                    </div>
                    <p className="text-xl font-bold text-white">1.2M</p>
                    <p className="text-gray-400">Subscribers</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-700 p-4 rounded-lg text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {/* <Steam className="h-6 w-6 text-blue-500" /> */}
                      <Image src="/clock.jpeg" alt="Steam" width={50} height={50} />
                    </div>
                    <p className="text-xl font-bold text-white">2.5K</p>
                    <p className="text-gray-400">Hours Played</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-700 p-4 rounded-lg text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                    <Image src="/insta.jpeg" alt="Steam" width={50} height={50} />
                    </div>
                   
                    <p className="text-xl font-bold text-white">150+</p>
                    <p className="text-gray-400">Reels</p>
                  </motion.div>
                </div>

                {/* Game Stats */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Valorant</span>
                      <div>
                        <span className="text-purple-500 mr-4">Diamond II</span>
                        <span className="text-gray-400">Win Rate: 65% (420 matches)</span>
                      </div>
                    </div>
                    <Progress value={75} className="h-2 bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">CS:GO</span>
                      <div>
                        <span className="text-purple-500 mr-4">Global Elite</span>
                        <span className="text-gray-400">Win Rate: 72% (856 matches)</span>
                      </div>
                    </div>
                    <Progress value={90} className="h-2 bg-gray-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Apex Legends</span>
                      <div>
                        <span className="text-purple-500 mr-4">Master</span>
                        <span className="text-gray-400">Win Rate: 58% (340 matches)</span>
                      </div>
                    </div>
                    <Progress value={85} className="h-2 bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Recent Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Recent Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={contentImages[i]}
                      alt={`Content ${i+1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-2">Epic Gaming Moment #{i+1}</h3>
                    <p className="text-gray-400 text-sm">1.2K views • 2 days ago</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}