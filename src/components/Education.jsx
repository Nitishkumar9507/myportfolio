import React, { useState } from "react";

const Education = () => {
  const [selectedTab, setSelectedTab] = useState("Education");

  const technologies = [
    { technology: "HTML", percentage: 80, experience: "1 year" },
    { technology: "CSS", percentage: 80, experience: "1 year" },
    { technology: "JavaScript", percentage: 80, experience: "1 year" },
    { technology: "React", percentage: 80, experience: "1 year" },
  ];
  const programmingLanguages = [
    { language: "JavaScript", skillLevel: 80, experience: "1 year" },
    { language: "Java", skillLevel: 60, experience: "1 year" },
    { language: "CPP", skillLevel: 75, experience: "1 year" },
    { language: "C Language", skillLevel: 65, experience: "1 year" },
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    
  };

  return (
    <div className="container hidden sm:grid ">
      <div className="education-container bg-gray-400  text-black p-4 rounded-br-[200px] rounded-tl-[200px] flex m-4  pl-20 h-[500px]">
        <div className="education-container p-4 flex m-4 w-full ">
          {/* Sidebar */}
          <div className="sidebar flex flex-col justify-around w-1/3 ">
            <h3 onClick={() => handleTabClick("Education")}>Education</h3>
            <h3 onClick={() => handleTabClick("Web Dev")}>Web Dev</h3>
            <h3 onClick={() => handleTabClick("Programming Skill")}>
              Programming Skill
            </h3>
            <h3 onClick={() => handleTabClick("Projects")}>Projects</h3>
          </div>

          {/* Content */}
          <div className="content w-2/3">

            {selectedTab === "Programming Skill" && (
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Programming Language</th>
                    <th>Skill Level</th>
                    <th>Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {programmingLanguages.map((lang, index) => (
                    <tr key={index}>
                      <td>{lang.language}</td>
                      <td>
                        <div
                          style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "4px",
                          }}
                        >
                          <div
                            style={{
                              width: `${lang.skillLevel}%`,
                              backgroundColor: "#4caf50",
                              borderRadius: "4px",
                              padding: "2px",
                              boxSizing: "border-box",
                            }}
                          >
                            {lang.skillLevel}%
                          </div>
                        </div>
                      </td>
                      <td>{lang.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {selectedTab === "Web Dev" && (
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Technology</th>
                    <th>Percentage</th>
                    <th>Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {technologies.map((tech, index) => (
                    <tr key={index}>
                      <td>{tech.technology}</td>
                      <td>
                        <div
                          style={{
                            width: "100%",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "4px",
                          }}
                        >
                          <div
                            style={{
                              width: `${tech.percentage}%`,
                              backgroundColor: "#4caf50",
                              borderRadius: "4px",
                              padding: "2px",
                              boxSizing: "border-box",
                            }}
                          >
                            {tech.percentage}%
                          </div>
                        </div>
                      </td>
                      <td>{tech.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {selectedTab === "Education" && (
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ width: "50%" }}>Degree/Course</th>
                    <th style={{ width: "20%" }}>Board/University</th>
                    <th style={{ width: "20%" }}>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BCA</td>
                    <td>IGNOU</td>
                    <td>2024</td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td>BSEB</td>
                    <td>2021</td>
                  </tr>
                  <tr>
                    <td>Matriculation</td>
                    <td>CBSE</td>
                    <td>2019</td>
                  </tr>
                </tbody>
              </table>
            )}
            {selectedTab === "Projects" && (
              <h1>Coming soon..</h1>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
