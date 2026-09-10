export interface EducationItem {
  degree: string;
  institution: string;
  studyPeriod: string;
  expectedGraduation: string;
  gpa?: string;
}

export const educationData: EducationItem = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University",
  studyPeriod: "2024 — Present",
  expectedGraduation: "Expected 2028"
};
