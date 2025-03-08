const jsonData = `
{
  "personalInformation": {
    "name": "Raja Sodani",
    "email": "raja.sodani@gmail.com",
    "github": null,
    "linkedin": "linkedin.com/in/raja-sodani",
    "portfolio": null
  },
  "education": [
    {
      "university": "LNM Institute of Information Technology",
      "degree": "B.Tech. in Computer Science Engineering",
      "location": "Jaipur, Rajasthan",
      "dates": "Aug 2021 – Present",
      "cgpa": "7.15"
    },
    {
      "university": "Central Academy Sr. Sec. School",
      "degree": "XII",
      "location": "Bhilwara, Rajasthan",
      "dates": "2019–20",
      "percentage": "97%"
    }
  ],
  "workHistory": [
    {
      "title": "React Intern",
      "company": "Celebal Technologies",
      "location": null,
      "dates": "Jun 2024 - Aug 2024",
      "description": [
        "Developed an e-commerce platform using React, integrating Razorpay for payments and NodeMailer for email automation.",
        "Utilized React Hooks, Context API, React Router, Redux, and Axios for efficient state management and API interactions.",
        "Collaborated with designers, backend developers, and QA teams to deliver high-quality features and improvements.",
        "Maintained version control using Git and GitHub, contributing to a cohesive and productive work environment."
      ]
    }
  ],
  "projects": [
    {
      "name": "Real-Time Stock Portfolio Tracker",
      "technologies": [
        "React.js",
        "Node.js",
        "MongoDb",
        "WebSockets",
        "Expres.js"
      ],
      "description": [
        "Developed a comprehensive web app using React, Node.js, and MongoDB, integrating financial APIs for live market data.",
        "Enhanced investment analysis capabilities with real-time news updates via WebSocket technology and reduced API call latency using caching.",
        "Implemented robust user authentication and authorization for secure data management.",
        "Focused on creating a seamless user experience through efficient backend and frontend development."
      ]
    },
    {
      "name": "Anonymous Feedback",
      "technologies": [
        "Nextjs",
        "Reactjs",
        "MongoDB",
        "Typescript"
      ],
      "description": [
        "Developed a secure web application with user registration, verification code integration, and JWT-based session management.",
        "Implemented multi-factor authentication (MFA) for enhanced security and used bcrypt for password encryption and decryption.",
        "Designed a dynamic dashboard using Next.js and advanced React hooks for efficient state management.",
        "Utilized MongoDB for robust and scalable data management.",
        "Deployed the application on Vercel, leveraging cloud infrastructure for high availability and scalability."
      ]
    }
  ],
  "achievements": [
    {
      "name": "TEDxLNMIIT’24 Core Member",
      "details": [
        "Planning and Coordination: Oversaw coordination with speakers and planned their visit.",
        "Leadership and Management: Led a team of 7 members, delegated responsibilities, optimizing event preparation efficiency, and established clear communication channels."
      ]
    },
    {
      "name": "Media Cell LNMIIT Core Member",
      "details": [
        "Managed and designed events such as Open Mics and Podcasts, ensuring cohesive branding and boosting the club’s visibility.",
        "Helped create engaging experiences and strengthened the club’s presence within the campus community."
      ]
    }
  ],
  "technicalSkills": {
    "languages": [
      "C++",
      "React.js",
      "Next.js",
      "Javascript",
      "Node.js",
      "Express.js",
      "Tailwind Css",
      "Mongodb",
      "SQL",
      "Python"
    ],
    "courses": [
      "OOPs",
      "Git"
    ]
  }
}
`;

    const data = JSON.parse(jsonData);

    function displayEducation(data){
      const educationList = document.querySelector("#education ul");
      data.education.forEach(edu => {
        const li = document.createElement("li");
        li.innerHTML = `${edu.degree}, ${edu.university} (${edu.dates}), CGPA: ${edu.cgpa || edu.percentage}%`;
        educationList.appendChild(li);
      });
    }


    function displayWorkHistory(data){
      const workList = document.querySelector("#work ul");
      data.workHistory.forEach(work => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${work.title}</strong> at ${work.company} (${work.dates})<br> ${work.description.join("<br>")}`;
        workList.appendChild(li);
      })
    }


    function displayProjects(data){
      const projectsList = document.querySelector("#projects ul");
      data.projects.forEach(project => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${project.name}</strong><br>Technologies: ${project.technologies.join(", ")}<br>${project.description.join("<br>")}`;
        projectsList.appendChild(li);
      })
    }

    function displayAchievements(data){
      const achievementsList = document.querySelector("#achievements ul");
      data.achievements.forEach(achievement => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${achievement.name}</strong><br>${achievement.details.join("<br>")}`;
        achievementsList.appendChild(li);
      })
    }


    function displaySkills(data){
      const languageList = document.querySelector("#skills ul:first-of-type");
      const courseList = document.querySelector("#skills ul:last-of-type");

      data.technicalSkills.languages.forEach(lang => {
        const li = document.createElement("li");
        li.textContent = lang;
        languageList.appendChild(li);
      });

      data.technicalSkills.courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        courseList.appendChild(li);
      });
    }

    displayEducation(data);
    displayWorkHistory(data);
    displayProjects(data);
    displayAchievements(data);
    displaySkills(data);