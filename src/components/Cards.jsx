import React from 'react';
import CircularProgressBar from './CircularProgressBar';
import logo_html from "../assets/html.svg";
import logo_css from "../assets/css.svg";
import logo_js from "../assets/javascript.svg";
import logo_react from "../assets/react.svg";

const Cards = () => {
  const languages = [
    { name: 'HTML', image: logo_html, description: 'HyperText Markup Language' },
    { name: 'CSS', image: logo_css, description: 'Cascading Style Sheets' },
    { name: 'JavaScript', image: logo_js, description: 'JavaScript programming language' },
    { name: 'React', image: logo_react, description: 'JavaScript library for building user interfaces' },
  ];

  const skills = [
    { name: 'HTML', percentage: 85 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 75 },
  ];

  return (
    <div className="container mx-auto p-6 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {languages.map((language, index) => (
          <div
            key={index}
            className="bg-gray-400 h-60 p-4 rounded-md shadow-md text-center transition-transform transform hover:scale-105"
          >
            <img src={language.image} alt={language.name} className="h-1/2 mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-2">{language.name}</h2>
            <p className="font-semibold">{language.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {skills.map((skill, index) => (
          <div key={index} className="text-white p-4 rounded-md shadow-md text-center">
            <CircularProgressBar percentage={skill.percentage} gradientColors={['#4F46E5', 'cyan']} />
            <h2 className="text-lg font-semibold mb-2">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
