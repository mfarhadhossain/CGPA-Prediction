import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import './StudentProfile.css';

const StudentProfile = () => {
    const [department, setDepartment] = useState(null);
    const [semester, setSemester] = useState(null);
    const [gender, setGender] = useState(null);
    const [sscResult, setSscResult] = useState(null);
    const [hscResult, setHscResult] = useState(null);
    const [fatherEducation, setFatherEducation] = useState(null);
    const [fatherJob, setFatherJob] = useState(null);
    const [motherEducation, setMotherEducation] = useState(null);
    const [motherJob, setMotherJob] = useState(null);
    const [majorIllness, setMajorIllness] = useState(null);
    const [attendanceInClass, setAttendanceInClass] = useState(null);
    const [studyHour, setStudyHour] = useState(null);
    const [internetFacilities, setInternetFacilities] = useState(false);
    const [groupStudy, setGroupStudy] = useState(false);
    const [culturalInvolvement, setCulturalInvolvement] = useState(false);
    const [politicalInvolvement, setPoliticalInvolvement] = useState(false);
    const [hostelStaying, setHostelStaying] = useState(false);
    const [gettingAnyScholarship, setGettingAnyScholarship] = useState(false);
    const [selfIncome, setSelfIncome] = useState(null);
    const [relationalStatus, setRelationalStatus] = useState(null);
    const [communicationSkill, setCommunicationSkill] = useState(null);
    const [confidence, setConfidence] = useState(null);
    const [previousSemesterResult, setPreviousSemesterResult] = useState(null);

    const departmentOptions = [
        { label: 'Computer Science', value: 'Computer Science' },
        { label: 'Electrical Engineering', value: 'Electrical Engineering' },
        { label: 'Mechanical Engineering', value: 'Mechanical Engineering' },
        { label: 'Civil Engineering', value: 'Civil Engineering' },
    ];
    const semesterOptions = Array.from(Array(10), (_, i) => ({
        label: `Semester ${i + 1}`,
        value: i + 1,
    }));

    const genderOptions = [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" },
    ];
    const handleSave = () => {
        // TODO: handle save logic
        console.log({
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
            attendanceInClass,
            studyHour,
            internetFacilities,
            groupStudy,
            culturalInvolvement,
            politicalInvolvement,
            hostelStaying,
            gettingAnyScholarship,
            selfIncome,
            relationalStatus,
            communicationSkill,
            confidence,
            previousSemesterResult,
        });
    };

    return (
        <div className="student-profile">
            <h1>Student Profile</h1>
            <div className="p-fluid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="department">Department</label>
                    <Dropdown
                        id="department"
                        options={departmentOptions}
                        value={department}
                        onChange={(e) => setDepartment(e.value)}
                        placeholder="Select a department"
                        filter
                        show
                    />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="semester">Semester</label>
                    <Dropdown
                        id="semester"
                        options={semesterOptions}
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        placeholder="Enter semester"
                    />
                </div>
            </div>
            <div className="p-fluid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="gender">Gender</label>
                    <Dropdown
                        id="gender"
                        options={genderOptions}
                        value={gender}
                        onChange={(e) => setGender(e.value)}
                        placeholder="Select a gender"
                        filter
                        show
                    />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="sscResult">S.S.C Result (GPA)</label>
                    <InputText
                        id="sscResult"
                        type="number"
                        value={sscResult}
                        onChange={(e) => setSscResult(e.target.value)}
                        placeholder="Enter S.S.C Result (GPA)"
                    />
                </div>
            </div>
            <div className="p-fluid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="hscResult">H.S.C Result (GPA)</label>
                    <InputText
                        id="hscResult"
                        type="number"
                        value={hscResult}
                        onChange={(e) => setHscResult(e.target.value)}
                        placeholder="Enter H.S.C Result (GPA)"
                    />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="fatherEducation">Father's Education (In Year)</label>
                    <InputText
                        id="fatherEducation"
                        type="number"
                        value={fatherEducation}
                        onChange={(e) => setFatherEducation(e.target.value)}
                        placeholder="Enter father's education in years"
                    />
                </div>
            </div>
            {/* Add remaining input fields here */}
        </div>
    );
}