import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import React, {useContext, useState} from 'react';
import {Context} from '../../contexts/Context';
import {InputText} from "primereact/inputtext";
import Button from "../Button";
import {Dropdown} from "primereact/dropdown";
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

export default function StudentForm() {

    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [regNo, setRegNo] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [semester, setSemester] = useState("");
    const [gender, setGender] = useState("");
    const [sscResult, setSscResult] = useState("");
    const [hscResult, setHscResult] = useState("");
    const [fatherEducation, setFatherEducation] = useState("");
    const [fatherJob, setFatherJob] = useState("");
    const [motherEducation, setMotherEducation] = useState("");
    const [motherJob, setMotherJob] = useState("");
    const [majorIllness, setMajorIllness] = useState("");
    const [attendance, setAttendance] = useState("");
    const [studyHour, setStudyHour] = useState("");
    const [internetFacilities, setInternetFacilities] = useState("");
    const [groupStudy, setGroupStudy] = useState("");
    const [culturalInvolvement, setCulturalInvolvement] = useState("");
    const [politicalInvolvement, setPoliticalInvolvement] = useState("");
    const [hostelStaying, setHostelStaying] = useState("");
    const [gettingScholarship, setGettingScholarship] = useState("");
    const [selfIncome, setSelfIncome] = useState("");
    const [relationalStatus, setRelationalStatus] = useState("");
    const [communicationSkill, setCommunicationSkill] = useState("");
    const [confidence, setConfidence] = useState("");
    const [previousSemesterResult, setPreviousSemesterResult] = useState("");

    // options
    const departmentOptions = [
        'Accounting',
        'Anthropology',
        'Archaeology',
        'BICLC',
        'Bangla',
        'Biochemistry and Molecular Biology',
        'Biotechnology and Genetic Engineering',
        'Botany',
        'CSE',
        'Chemistry',
        'Drama & Dramatics',
        'Economics',
        'English',
        'Environmental Science',
        'Finance & Banking',
        'Fine Arts',
        'Geography & Environment',
        'Government & Politics',
        'History',
        'IIT',
        'Institute of Business Administration',
        'International Relations',
        'JMS',
        'Law & Justice',
        'Management',
        'Marketing',
        'Master of Business Administration',
        'Mathematics',
        'Microbiology',
        'PHI',
        'Pharmacy',
        'Philosophy',
        'Physics',
        'Public Administration',
        'Statistics',
        'Zoology'
    ];
    const genderOptions = [
        'Female',
        'Male',
        'Non-binary'
    ];
    const fatherJobOptions = [
        'Business',
        'Govt. Job',
        'Private Job',
        'Self-employed',
        'Unemployed',
    ];
    const motherJobOptions = [
        'Business',
        'Govt. Job',
        'Private Job',
        'Unemployed',
    ]
    const majorIllnessOptions = [
        'No',
        'Yes',
    ]

    const attendanceOptions = [
        '60-75%',
        '75-100%',
        'less than 60%',
    ];

    const studyHourOptions = [
        '10-14 hour',
        '3-9 hour',
        'less than 3 hour',
        'more than 14 hour',
    ];

    const internetFacilitiesOptions = [
        'Available',
        'Available but not sufficient',
        'Not Available',
    ];

    const groupStudyOptions = [
        'Not participate',
        'Participate',
    ]

    const sportCulturalInvolvementOptions = [
        'No',
        'Yes',
    ];

    const politicalInvolvementOptions = [
        'No',
        'Yes',
    ]

    const hostelStayingOptions = [
        'Irregular',
        'No',
        'Regular',
    ];

    const gettingScholarshipOptions = [
        'No',
        'Yes',
    ];

    const selfIncomeOptions = [
        '3000-5000',
        '6000-10000',
        'Less than 3000',
        'More than 10000',
        'None',
    ]
    const relationalStatusOptions = [
        'In a relationship',
        'Married',
        'Single',
    ]

    const communicationSkillOptions = [
        'Average',
        'Good',
        'Not Good',
    ]

    const confidenceOptions = [
        'Confident about curricular activity',
        'Confident about decision making',
        'Confident about public speaking',
        'Confident about study',
        'Not enough confident in any activity',
        'pretty much confident',
    ];
    const [error, setError] = useState('');

    const {user} = useContext(Context);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {};
        if (department) newPost.department = department;
        if (semester) newPost.semester = semester;
        if (gender) newPost.gender = gender;
        if (sscResult) newPost.sscResult = sscResult;
        if (hscResult) newPost.hscResult = hscResult;
        if (fatherEducation) newPost.fatherEducation = fatherEducation;
        if (fatherJob) newPost.fatherJob = fatherJob;
        if (motherEducation) newPost.motherEducation = motherEducation;
        if (motherJob) newPost.motherJob = motherJob;
        if (majorIllness) newPost.majorIllness = majorIllness;
        if (attendance) newPost.attendance = attendance;
        if (studyHour) newPost.studyHour = studyHour;
        if (internetFacilities) newPost.internetFacilities = internetFacilities;
        if (groupStudy) newPost.groupStudy = groupStudy;
        if (culturalInvolvement) newPost.culturalInvolvement = culturalInvolvement;
        if (politicalInvolvement) newPost.politicalInvolvement = politicalInvolvement;
        if (hostelStaying) newPost.hostelStaying = hostelStaying;
        if (gettingScholarship) newPost.gettingScholarship = gettingScholarship;
        if (selfIncome) newPost.selfIncome = selfIncome;
        if (relationalStatus) newPost.relationalStatus = relationalStatus;
        if (communicationSkill) newPost.communicationSkill = communicationSkill;
        if (confidence) newPost.confidence = confidence;
        if (previousSemesterResult) newPost.previousSemesterResult = previousSemesterResult;

        if (Object.keys(newPost).length === 0) {
            // No fields are filled, return without updating
            return;
        }
        const token = user.data.token;
        try {
            setError('');
            const instance = axios.create({
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${token}`,
                },
            });

            const res = await instance.patch(
                'http://127.0.0.1:3005/api/v1/students/' + user.data.user.id,
                newPost
            );
            navigate('/students/' + user.data.user.id);
            window.location.reload();
        } catch (err) {
            setError('Something went wrong!');
            console.log(err);
        }
    };
    return <div className="grid">
        <div className="col-12">
            <div className="card">
                {error && <p className="error">{error}</p>}
                <h4 className="card-head">{'Student Information'}</h4>
                <form onSubmit={handleSubmit}>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="department">Department</label>
                            {/*<InputText id="department" value={department}*/}
                            {/*           onChange={(e) => setDepartment(e.target.value)}/>*/}
                            <Dropdown
                                id="department"
                                options={departmentOptions}
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                placeholder={department? department: 'Select a department'}
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="semester">Semester</label>
                            <InputText id="semester" value={semester}
                                       onChange={(e) => setSemester(e.target.value)}
                                       placeholder="Enter 1-10 for Undergraduate, 11-13 for postgradute"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="gender">Gender</label>
                            {/*<InputText id="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>*/}
                            <Dropdown
                                id="gender"
                                options={genderOptions}
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                placeholder="Select your gender"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="sscresult">SSC Result (GPA)</label>
                            <InputText id="sscresult" value={sscResult}
                                       onChange={(e) => setSscResult(e.target.value)}
                                       placeholder="Example: 4.88"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="hscresult">HSC Result (GPA)</label>
                            <InputText id="hscresult" value={hscResult}
                                       onChange={(e) => setHscResult(e.target.value)}
                                       placeholder="Example: 5.00"/>
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="fathereducation">Father's Education</label>
                            <InputText id="fathereducation" value={fatherEducation}
                                       onChange={(e) => setFatherEducation(e.target.value)}
                                        placeholder={"Enter a number. Example: 12 Being graduated from college/HSC"}
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="fatherjob">Father's Job</label>
                            {/*<InputText id="fatherjob" value={fatherJob}*/}
                            {/*           onChange={(e) => setFatherJob(e.target.value)}/>*/}
                            <Dropdown
                                id="fatherjob"
                                options={fatherJobOptions}
                                value={fatherJob}
                                onChange={(e) => setFatherJob(e.target.value)}
                                placeholder="Select a job"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="motherducation">Mother's Education</label>
                            <InputText id="mothereducation" value={motherEducation}
                                       onChange={(e) => setMotherEducation(e.target.value)}
                                       placeholder={"Enter a number. Example: 12 Being graduated from college/HSC"}
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="motherjob">Mother's Job</label>
                            <Dropdown
                                id="motherjob"
                                options={motherJobOptions}
                                value={motherJob}
                                onChange={(e) => setMotherJob(e.target.value)}
                                placeholder="Select a job"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="majorIllness">Major Illness</label>
                            {/*<InputText id="majorIllness" value={majorIllness}*/}
                            {/*           onChange={(e) => setMajorIllness(e.target.value)}/>*/}
                            <Dropdown
                                id="majorIllness"
                                options={majorIllnessOptions}
                                value={majorIllness}
                                onChange={(e) => setMajorIllness(e.target.value)}
                                placeholder="Select an option"
                            />

                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="attendance">Attendance</label>
                            {/*<InputText id="attendance" value={attendance}*/}
                            {/*           onChange={(e) => setAttendance(e.target.value)}/>*/}
                            <Dropdown
                                id="attendance"
                                options={attendanceOptions}
                                value={attendance}
                                onChange={(e) => setAttendance(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="studyhour">Study Hour</label>
                            {/*<InputText id="studyhour" value={studyHour}*/}
                            {/*           onChange={(e) => setStudyHour(e.target.value)}/>*/}
                            <Dropdown
                                id="studyhour"
                                options={studyHourOptions}
                                value={studyHour}
                                onChange={(e) => setStudyHour(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="internetFacilities">Internet Facilities</label>
                            {/*<InputText id="internetFacilities" value={internetFacilities}*/}
                            {/*           onChange={(e) => setInternetFacilities(e.target.value)}/>*/}
                            <Dropdown
                                id="internetFacilities"
                                options={internetFacilitiesOptions}
                                value={internetFacilities}
                                onChange={(e) => setInternetFacilities(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="groupStudy">Group Study</label>
                            {/*<InputText id="groupStudy" value={groupStudy}*/}
                            {/*           onChange={(e) => setGroupStudy(e.target.value)}/>*/}
                            <Dropdown
                                id="groupStudy"
                                options={groupStudyOptions}
                                value={groupStudy}
                                onChange={(e) => setGroupStudy(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="culturalInvolvement">Sports/Cultural Involvement</label>
                            {/*<InputText id="culturalInvolvement" value={culturalInvolvement}*/}
                            {/*           onChange={(e) => setCulturalInvolvement(e.target.value)}/>*/}
                            <Dropdown
                                id="culturalInvolvement"
                                options={sportCulturalInvolvementOptions}
                                value={culturalInvolvement}
                                onChange={(e) => setCulturalInvolvement(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="politicalInvolvement">Political Involvement</label>
                            {/*<InputText id="politicalInvolvement" value={politicalInvolvement}*/}
                            {/*           onChange={(e) => setPoliticalInvolvement(e.target.value)}/>*/}
                            <Dropdown
                                id="politicalInvolvement"
                                options={politicalInvolvementOptions}
                                value={politicalInvolvement}
                                onChange={(e) => setPoliticalInvolvement(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="hostelStaying">Hostel Staying</label>
                            {/*<InputText id="hostelStaying" value={hostelStaying}*/}
                            {/*           onChange={(e) => setHostelStaying(e.target.value)}/>*/}
                            <Dropdown
                                id="hostelStaying"
                                options={hostelStayingOptions}
                                value={hostelStaying}
                                onChange={(e) => setHostelStaying(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="gettingScholarship">Scholarship</label>
                            {/*<InputText id="gettingScholarship" value={gettingScholarship}*/}
                            {/*           onChange={(e) => setGettingScholarship(e.target.value)}/>*/}
                            <Dropdown
                                id="gettingScholarship"
                                options={gettingScholarshipOptions}
                                value={gettingScholarship}
                                onChange={(e) => setGettingScholarship(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="selfIncome">Self Income</label>
                            {/*<InputText id="selfIncome" value={selfIncome}*/}
                            {/*           onChange={(e) => setSelfIncome(e.target.value)}/>*/}
                            <Dropdown
                                id="selfIncome"
                                options={selfIncomeOptions}
                                value={selfIncome}
                                onChange={(e) => setSelfIncome(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="relationalStatus">Relational Status</label>
                            {/*<InputText id="relationalStatus" value={relationalStatus}*/}
                            {/*           onChange={(e) => setRelationalStatus(e.target.value)}/>*/}
                            <Dropdown
                                id="relationalStatus"
                                options={relationalStatusOptions}
                                value={relationalStatus}
                                onChange={(e) => setRelationalStatus(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="communicationSkill">Communication Skill</label>
                            {/*<InputText id="communicationSkill" value={communicationSkill}*/}
                            {/*           onChange={(e) => setCommunicationSkill(e.target.value)}/>*/}
                            <Dropdown
                                id="communicationSkill"
                                options={communicationSkillOptions}
                                value={communicationSkill}
                                onChange={(e) => setCommunicationSkill(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="confidence">Confidence</label>
                            {/*<InputText id="confidence" value={confidence}*/}
                            {/*           onChange={(e) => setConfidence(e.target.value)}/>*/}
                            <Dropdown
                                id="confidence"
                                options={confidenceOptions}
                                value={confidence}
                                onChange={(e) => setConfidence(e.target.value)}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="flex flex-row-reverse">
                            <Button type="submit">Predict!</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        ;
}
