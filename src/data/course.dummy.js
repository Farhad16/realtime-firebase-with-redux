const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: "Advanced Web Development",
    instructor: "Jane Smith",
    description:
      "Master advanced web development techniques and create dynamic web applications.",
    enrollmentStatus: "Open",
    thumbnail: "your.another.image.here",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "In-Person",
    prerequisites: ["Intermediate JavaScript knowledge", "HTML/CSS skills"],
    syllabus: [
      {
        week: 1,
        topic: "Modern Web Technologies",
        content:
          "Introduction to cutting-edge web development tools and technologies.",
      },
      {
        week: 2,
        topic: "Creating Responsive Layouts",
        content:
          "Designing and building responsive web layouts with CSS and Flexbox.",
      },
      {
        week: 3,
        topic: "JavaScript Frameworks",
        content:
          "Exploration of popular JavaScript frameworks like React and Vue.js.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 201,
        name: "Ella Williams",
        email: "ella@example.com",
      },
      {
        id: 202,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: "Mobile App Design",
    instructor: "Sarah Anderson",
    description:
      "Learn the principles of mobile app design and create user-friendly interfaces.",
    enrollmentStatus: "Open",
    thumbnail: "your.yet.another.image.here",
    duration: "6 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic design concepts", "Familiarity with UI/UX"],
    syllabus: [
      {
        week: 1,
        topic: "User-Centered Design",
        content:
          "Understanding the importance of user-centered design in app development.",
      },
      {
        week: 2,
        topic: "Wireframing and Prototyping",
        content:
          "Creating wireframes and interactive prototypes for mobile apps.",
      },
      {
        week: 3,
        topic: "Visual Design",
        content: "Exploring visual design principles for mobile applications.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 301,
        name: "David Wilson",
        email: "david@example.com",
      },
      {
        id: 302,
        name: "Eva Davis",
        email: "eva@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 4,
    name: "Data Science Fundamentals",
    instructor: "Michael Smith",
    description:
      "Dive into the world of data science and gain insights from data analysis.",
    enrollmentStatus: "Open",
    thumbnail: "your.data.science.image.here",
    duration: "12 weeks",
    schedule: "Mondays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge", "Statistics background"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science, tools, and its applications.",
      },
      {
        week: 2,
        topic: "Data Analysis with Python",
        content:
          "Using Python for data manipulation, analysis, and visualization.",
      },
      {
        week: 3,
        topic: "Machine Learning Basics",
        content: "Understanding machine learning algorithms and concepts.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 401,
        name: "Grace Johnson",
        email: "grace@example.com",
      },
      {
        id: 402,
        name: "Henry Brown",
        email: "henry@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 5,
    name: "Digital Marketing Strategies",
    instructor: "Emma Davis",
    description:
      "Explore digital marketing techniques to reach and engage your target audience.",
    enrollmentStatus: "Open",
    thumbnail: "your.digital.marketing.image.here",
    duration: "10 weeks",
    schedule: "Wednesdays and Fridays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic marketing knowledge",
      "Understanding of online platforms",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Digital Marketing Fundamentals",
        content: "Introduction to digital marketing channels and strategies.",
      },
      {
        week: 2,
        topic: "Social Media Marketing",
        content:
          "Leveraging social media platforms for marketing and engagement.",
      },
      {
        week: 3,
        topic: "Search Engine Optimization (SEO)",
        content: "Optimizing websites for search engines and organic traffic.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 501,
        name: "Isabella Smith",
        email: "isabella@example.com",
      },
      {
        id: 502,
        name: "James Wilson",
        email: "james@example.com",
      },
      // Additional enrolled students...
    ],
  },

  {
    id: 6,
    name: "Artificial Intelligence Basics",
    instructor: "Olivia Johnson",
    description:
      "An introduction to the fundamentals of artificial intelligence and machine learning.",
    enrollmentStatus: "Open",
    thumbnail: "your.ai.image.here",
    duration: "9 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic math and programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to AI",
        content: "Understanding AI, its history, and its applications.",
      },
      {
        week: 2,
        topic: "Machine Learning Algorithms",
        content: "Exploring machine learning algorithms and their use cases.",
      },
      {
        week: 3,
        topic: "AI in Real-World Applications",
        content:
          "How AI is used in various industries like healthcare and finance.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 601,
        name: "Liam Anderson",
        email: "liam@example.com",
      },
      {
        id: 602,
        name: "Sophia Davis",
        email: "sophia@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 7,
    name: "Front-End Web Development",
    instructor: "Noah Miller",
    description:
      "Learn how to create interactive and responsive web applications with HTML, CSS, and JavaScript.",
    enrollmentStatus: "Open",
    thumbnail: "your.frontend.dev.image.here",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "In-Person",
    prerequisites: ["Basic HTML and CSS knowledge", "JavaScript fundamentals"],
    syllabus: [
      {
        week: 1,
        topic: "HTML and CSS Basics",
        content: "Fundamentals of HTML and CSS for web development.",
      },
      {
        week: 2,
        topic: "JavaScript and DOM Manipulation",
        content: "Working with JavaScript for interactive web applications.",
      },
      {
        week: 3,
        topic: "Responsive Design and CSS Frameworks",
        content: "Creating responsive and mobile-friendly web pages.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 701,
        name: "Mia Smith",
        email: "mia@example.com",
      },
      {
        id: 702,
        name: "William Brown",
        email: "william@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 8,
    name: "Digital Photography Fundamentals",
    instructor: "Lucas Wilson",
    description:
      "Master the art of digital photography and enhance your photography skills.",
    enrollmentStatus: "Open",
    thumbnail: "your.photography.image.here",
    duration: "6 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "In-Person",
    prerequisites: ["Basic knowledge of camera operation"],
    syllabus: [
      {
        week: 1,
        topic: "Understanding Camera Settings",
        content: "Mastering camera settings, exposure, and focus.",
      },
      {
        week: 2,
        topic: "Composition and Lighting",
        content:
          "Creating compelling compositions and using natural light effectively.",
      },
      {
        week: 3,
        topic: "Photo Editing and Post-Processing",
        content: "Enhancing photos using digital editing software.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 801,
        name: "Ava Johnson",
        email: "ava@example.com",
      },
      {
        id: 802,
        name: "Benjamin Davis",
        email: "benjamin@example.com",
      },
      // Additional enrolled students...
    ],
  },
];

export default courseModel;
