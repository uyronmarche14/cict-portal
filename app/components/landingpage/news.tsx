import Image from "next/image";
import React from "react";
import {
  ArrowRight,
  Newspaper,
  ReceiptPoundSterling,
  School,
} from "lucide-react";
import cict1 from "@/public/CICT1.jpg";
import cict2 from "@/public/CICT2.jpg";
import cict3 from "@/public/CICT3.jpg";
import cict4 from "@/public/CICT4.jpg";

const cardData = [
  {
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: cict1,
    link: "#",
  },
  {
    title: "AI's Impact on Modern Software",
    description:
      "Explore how artificial intelligence is reshaping the world of software engineering and development.",
    image: cict2,
    link: "#",
  },
  {
    title: "Top 10 Programming Trends in 2025",
    description:
      "Discover the most promising programming trends you need to watch for in the coming years.",
    image: cict3,
    link: "#",
  },
  {
    title: "Top 10 Programming Trends in 2025",
    description:
      "Discover the most promising programming trends you need to watch for in the coming years.",
    image: cict4,
    link: "#",
  },
];

const News = () => {
  return (
    <div className="flex items-center justify-center bg-base px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <a href={card.link}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 space-y-4">
              <a href={card.link} className="block">
                <h5 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {card.title}
                </h5>
              </a>

              <p className="text-gray-600 leading-relaxed line-clamp-3">
                {card.description}
              </p>

              <div className="pt-2 justify-between items-center flex flex-row ">
                <a
                  href={card.link}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent rounded-xl hover:from-accent/90 hover:to-accent hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <div className="flex flex-row items-center justify-center">
                  <Newspaper />
                  <ReceiptPoundSterling />
                  <School />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
