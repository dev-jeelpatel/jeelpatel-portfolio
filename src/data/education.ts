export interface EducationEntry {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  startYear: number;
  endYear: number | null; // null = present
  description: string;
  achievements: string[];
  courses: string[];
  gpa?: string;
  website?: string;
  logo?: string;
}

export const education: EducationEntry[] = [
  {
    id: "undergrad",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering (IoT)",
    institution: "G H Patel College of Engineering & Technology",
    location: "Anand, Gujarat",
    period: "2023 – 2026",
    startYear: 2023,
    endYear: 2026,
    description:
      "Focused on software engineering, algorithms, and distributed systems. Participated in multiple hackathons and led the college coding club.",
    achievements: [
      "Graduated with Distinction",
      "Best Final Year Project Award",
      "2× Hackathon Winner",
      "College Coding Club President",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
      "Machine Learning",
      "Web Technologies",
    ],
    gpa: "8.5 / 10",
    website: "https://example.edu",
  },

  {
    id: "minor-robotics",
    degree: "Minor in Robotics",
    field: "Robotics",
    institution: "G H Patel College of Engineering & Technology",
    location: "Anand, Gujarat",
    period: "2023 – 2025",
    startYear: 2020,
    endYear: 2023,
    description:
      "Completed senior secondary education with specialisation in Science and Mathematics. Consistently ranked in the top percentile of the class.",
    achievements: [
      "School Topper in Mathematics",
      "State Level Science Olympiad — Finalist",
      "Merit Scholarship Recipient",
    ],
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    gpa: "7.5 / 10",
  },
  {
    id: "diploma",
    degree: "Diploma of Engineering",
    field: "Computer Engineering",
    institution: "Shri K J Polytechnic",
    location: "Bharuch, Gujarat",
    period: "2020 – 2023",
    startYear: 2020,
    endYear: 2023,
    description:
      "Built a strong academic foundation across Science, Mathematics and the Arts. First exposure to programming through school computer science classes.",
    achievements: [
      "School Rank 3 — Board Exams",
      "Best Student Award (2018–19)",
    ],
    courses: ["Mathematics", "Science", "Social Studies", "Computer Basics"],
    gpa: "92.8%",
  },
  {
    id: "highschool",
    degree: "Secondary School Certificate",
    field: "General Studies",
    institution: "Shree K.S.K.P Highschool",
    location: "Surat, Gujarat",
    period: "2019 – 2020",
    startYear: 2019,
    endYear: 2020,
    description:
      "Description of your studies, projects, and other relevant academic activities.",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
    courses: ["Course 1", "Course 2"],
    gpa: "Your GPA",
  },
];
