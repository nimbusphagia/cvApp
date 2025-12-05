// Helper to add unique IDs to any array
const withIds = (arr) =>
  arr.map(item => ({ ...item, id: crypto.randomUUID() }));

const cvContent = {
  personal: {
    //id: crypto.randomUUID(),
    name: "Ignacio Machuca",
    email: "ignacio.machuca@example.com",
    phone: "+51 987 654 321",
    address: "Lima, Perú",
    about:
      "Aspiring software developer with a strong interest in web technologies, clean UI design, and building practical tools. Currently studying Computación e Informática and continuously improving through personal projects."
  },

  education: withIds([
    {
      title: "Computación e Informática",
      from: "2024-04-01",
      to: "Today",
      institution: "Cibertec",
      location: "Lima, Perú",
      description:
        "Currently studying software development fundamentals, database management, and web technologies."
    },
    {
      title: "Front-End Development Bootcamp",
      from: "2023-01-01",
      to: "2023-06-01",
      institution: "CodeWave Academy",
      location: "Online",
      description:
        "Hands-on training in HTML, CSS, JavaScript, and introductory React. Built several small web projects."
    }
  ]),

  work: withIds([
    {
      title: "Front-End Developer Intern",
      from: "2025-01-01",
      to: "2025-06-01",
      institution: "TechNova Solutions",
      location: "Remote",
      description:
        "Implemented UI components, helped maintain the design system, and supported the development of client dashboards."
    },
    {
      title: "Junior Web Developer (Freelance)",
      from: "2024-07-01",
      to: "2024-10-01",
      institution: "IndieWeb Studio",
      location: "Lima, Perú",
      description:
        "Developed landing pages for small businesses, optimized loading performance, and improved accessibility and SEO."
    }
  ])
};

export default cvContent;

