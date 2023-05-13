const Departments = {
    'Accounting': 0,
    'Anthropology': 1,
    'Archaeology': 2,
    'BICLC': 3,
    'Bangla': 4,
    'Biochemistry and Molecular Biology': 5,
    'Biotechnology and Genetic Engineering': 6,
    'Botany': 7,
    'CSE': 8,
    'Chemistry': 9,
    'Drama & Dramatics': 10,
    'Economics': 11,
    'English': 12,
    'Environmental Science': 13,
    'Finance & Banking': 14,
    'Fine Arts': 15,
    'Geography & Environment': 16,
    'Government & Politics': 17,
    'History': 18,
    'IIT': 19,
    'Institute of Business Administration': 20,
    'International Relations': 21,
    'JMS': 22,
    'Law & Justice': 23,
    'Management': 24,
    'Marketing': 25,
    'Master of Business Administration': 26,
    'Mathematics': 27,
    'Microbiology': 28,
    'PHI': 29,
    'Pharmacy': 30,
    'Philosophy': 31,
    'Physics': 32,
    'Public Administration': 33,
    'Statistics': 34,
    'Zoology': 35
};
const Gender = {
    'Female': 0,
    'Male': 1,
};
const FatherJob = {
    'Business': 0,
    'Govt. Job': 1,
    'Private Company Job': 2,
    'Private Job': 3,
    'Self-employed': 4,
    'Unemployed': 5,
};
const MotherJob = {
    'Business': 0,
    'Govt. Job': 1,
    'Private Job': 3,
    'Unemployed': 5,
};
const MajorIllness = {
    'No': 0,
    'Yes': 1,
};

const Attendance = {
    '60-75%': 0,
    '75-100%': 1,
    'less than 60%': 2,
};

const StudyHour = {
    '10-14 hour': 0,
    '3-9 hour': 1,
    'less than 3 hour': 2,
    'more than 14 hour': 3,
};

const InternetFacilities = {
    'Available': 0,
    'Available but not sufficient': 1,
    'Not Available': 2,
};

const GroupStudy = {
    'Not participate': 0,
    'Participate': 1,
    'participate': 2,
};

const SportCulturalInvolvement = {
    'No': 0,
    'Yes': 1,
};

const PoliticalInvolvement = {
    'No': 0,
    'Yes': 1,
};

const HostelStaying = {
    'Irregular': 0,
    'No': 1,
    'Regular': 2,
};

const GettingScholarship = {
    'No': 0,
    'Yes': 1,
};

const SelfIncome = {
    '3000-5000': 0,
    '6000-10000': 1,
    'Less than 3000': 2,
    'More than 10000': 3,
    'None': 4,
};
const RelationalStatus = {
    'In a relationship': 0,
    'Married': 1,
    'Single': 2,
};

const CommunicationSkill = {
    'Average': 0,
    'Good': 1,
    'Not Good': 2,
};

const Confidence = {
    'Confident about curricular activity': 0,
    'Confident about decision making': 1,
    'Confident about public speaking': 2,
    'Confident about study': 3,
    'Not enough confident in any activity': 4,
    'pretty much confident': 5,
};

module.exports = {
    Departments,
    Gender,
    FatherJob,
    MotherJob,
    MajorIllness,
    Attendance,
    StudyHour,
    InternetFacilities,
    GroupStudy,
    SportCulturalInvolvement,
    PoliticalInvolvement,
    HostelStaying,
    GettingScholarship,
    SelfIncome,
    RelationalStatus,
    CommunicationSkill,
    Confidence,
};
