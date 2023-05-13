const {
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
} = require('./enums');
const { go } = require('./mlService');
exports.preprocess = async (object) => {
  const {
    department,
    semester,
    gender,
    sscResult,
    hscResult,
    fatherEducation,
    fatherJob,
    motherEducation,
    motherJob,
    majorIllness,
    attendance,
    studyHour,
    internetFacilities,
    groupStudy,
    culturalInvolvement,
    politicalInvolvement,
    hostelStaying,
    gettingScholarship,
    selfIncome,
    relationalStatus,
    communicationSkill,
    confidence,
  } = object;
  const weights = [];
  weights.push(Departments[department]);
  weights.push(semester);
  weights.push(Gender[gender]);
  weights.push(sscResult);
  weights.push(hscResult);
  weights.push(fatherEducation);
  weights.push(FatherJob[fatherJob]);
  weights.push(motherEducation);
  weights.push(MotherJob[motherJob]);
  weights.push(MajorIllness[majorIllness]);
  weights.push(Attendance[attendance]);
  weights.push(StudyHour[studyHour]);
  weights.push(InternetFacilities[internetFacilities]);
  weights.push(GroupStudy[groupStudy]);
  weights.push(SportCulturalInvolvement[culturalInvolvement]);
  weights.push(PoliticalInvolvement[politicalInvolvement]);
  weights.push(HostelStaying[hostelStaying]);
  weights.push(GettingScholarship[gettingScholarship]);
  weights.push(SelfIncome[selfIncome]);
  weights.push(RelationalStatus[relationalStatus]);
  weights.push(CommunicationSkill[communicationSkill]);
  weights.push(Confidence[confidence]);

  return await go(weights);
};
