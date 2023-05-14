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
exports.preprocess = (ar) => {
  // console.log(typeof ar);
  // console.log(ar);
  // console.log(ar[0]);
  const weights = [];
  weights.push(Departments[ar[0]]);
  weights.push(ar[1]);
  weights.push(Gender[ar[2]]);
  weights.push(ar[3]);
  weights.push(ar[4]);
  weights.push(ar[5]);
  weights.push(FatherJob[ar[6]]);
  weights.push(ar[7]);
  weights.push(MotherJob[ar[8]]);
  weights.push(MajorIllness[ar[9]]);
  weights.push(Attendance[ar[10]]);
  weights.push(StudyHour[ar[11]]);
  weights.push(InternetFacilities[ar[12]]);
  weights.push(GroupStudy[ar[13]]);
  weights.push(SportCulturalInvolvement[ar[14]]);
  weights.push(PoliticalInvolvement[ar[15]]);
  weights.push(HostelStaying[ar[16]]);
  weights.push(GettingScholarship[ar[17]]);
  weights.push(SelfIncome[ar[18]]);
  weights.push(RelationalStatus[ar[19]]);
  weights.push(CommunicationSkill[ar[20]]);
  weights.push(Confidence[ar[21]]);

  return weights;
};
