// Helper to add unique IDs to any array
const withIds = (arr) =>
  arr.map(item => ({ ...item, id: crypto.randomUUID() }));


const cvContent = {
  personal: {
    name: "Alex Rivera",
    email: "alex.rivera@example.com",
    phone: "+1 555 123 4567",
    address: "New York, USA",
    about:
      "Motivated software engineer with a passion for front-end development, user experience, and creating efficient, maintainable code. Enjoys learning new frameworks and building web applications that solve real problems."
  },

  education: withIds([
    {
      title: "Bachelor of Science in Computer Science",
      from: "2020-09-01",
      to: "2024-06-01",
      institution: "Metro University",
      location: "New York, USA",
      description:
        "Studied programming, algorithms, data structures, and web development. Completed multiple projects in full-stack development."
    },
    {
      title: "Web Development Bootcamp",
      from: "2022-03-01",
      to: "2022-09-01",
      institution: "CodeCraft Academy",
      location: "Online",
      description:
        "Intensive training in HTML, CSS, JavaScript, and React. Built several responsive websites and single-page applications."
    }
  ]),

  work: withIds([
    {
      title: "Front-End Developer Intern",
      from: "2024-06-01",
      to: "2024-12-01",
      institution: "BrightTech Solutions",
      location: "Remote",
      description:
        "Developed reusable UI components, collaborated with the design team, and optimized web pages for performance and accessibility."
    },
    {
      title: "Freelance Web Developer",
      from: "2023-11-01",
      to: "2024-05-01",
      institution: "Self-Employed",
      location: "Remote",
      description:
        "Created custom websites for local businesses, implemented responsive designs, and improved SEO and load times."
    }
  ])
};

export default cvContent;

