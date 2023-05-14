import React, {useState, useEffect, useContext} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Fieldset } from "primereact/fieldset";
import { ProgressSpinner } from "primereact/progressspinner";
import axios from "axios";
import {Context} from "../../contexts/Context";
import Button from "../Button";
import '../../styles/StudentProfile.css'
export default function StudentProfile() {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState({});

    console.log(user);
    let authorName, token;
    if (user) {
        authorName = user.data.user.name;
        token = user.data.token;
    }
    const path = user.data.user.id;
    useEffect(() => {
        console.log(`XXXXaxios er age`);
        const fetchStudentProfile = async () => {
            console.log(`fetchloan app er vitore`);
            setLoading(true);
            const instance = axios.create({
                headers: {
                    'Acess-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(`axios er age`);
            const res = await instance.get('http://127.0.0.1:3005/api/v1/students/' + path);
            console.log('axios er por');
            console.log(`loan status `);
            //console.log(res.data);
            console.log(res.data.data);
            setStudent(res.data.data);
            setLoading(false);
        };
        fetchStudentProfile();
    }, []);

    const renderLoader = () => (
        <div className="p-d-flex p-ai-center p-jc-center" style={{ height: "250px" }}>
            <ProgressSpinner />
        </div>
    );

    const renderDataTable = () => (
        <body>
        <table className="table-fill">
            <thead>
            <tr>
                <th className="text-left">Attributes</th>
                <th className="text-left" colSpan="2">
                    Value
                </th>
            </tr>
            </thead>
            <tbody className="table-hover">
            <tr>
                <td className="text-left">Name</td>
                <td className="text-left" colSpan="2">
                    {student.name}
                </td>
            </tr>
            <tr>
                <td className="text-left">Class Roll</td>
                <td className="text-left" colSpan="2">
                    {student.roll}
                </td>
            </tr>
            <tr>
                <td className="text-left">Email</td>
                <td className="text-left" colSpan="2">
                    {student.email}
                </td>
            </tr>
            <tr>
                <td className="text-left">Registration No.</td>
                <td className="text-left" colSpan="2">
                    {student.registrationNo}
                </td>
            </tr>
            <tr>
                <td className="text-left">Department</td>
                <td className="text-left" colSpan="2">
                    {student.department}
                </td>
            </tr>
            <tr>
                <td className="text-left">Semester</td>
                <td className="text-left" colSpan="2">
                    {student.semester}
                </td>
            </tr>
            <tr>
                <td className="text-left">Gender</td>
                <td className="text-left" colSpan="2">
                    {student.gender}
                </td>
            </tr>
            <tr>
                <td className="text-left">SSC Result</td>
                <td className="text-left" colSpan="2">
                    {student.sscResult}
                </td>
            </tr>
            <tr>
                <td className="text-left">HSC Result</td>
                <td className="text-left" colSpan="2">
                    {student.hscResult}
                </td>
            </tr>
            <tr>
                <td className="text-left">Father Education</td>
                <td className="text-left" colSpan="2">
                    {student.fatherEducation}
                </td>
            </tr>
            <tr>
                <td className="text-left">Father Job</td>
                <td className="text-left" colSpan="2">
                    {student.fatherJob}
                </td>
            </tr>
            <tr>
                <td className="text-left">Mother Education</td>
                <td className="text-left" colSpan="2">
                    {student.motherEducation}
                </td>
            </tr>
            <tr>
                <td className="text-left">Mother Job</td>
                <td className="text-left" colSpan="2">
                    {student.motherJob}
                </td>
            </tr>
            <tr>
                <td className="text-left">Major Illness</td>
                <td className="text-left" colSpan="2">
                    {student.majorIllness}
                </td>
            </tr>
            <tr>
                <td className="text-left">Attendance in Class</td>
                <td className="text-left" colSpan="2">
                    {student.attendance}
                </td>
            </tr>
            <tr>
                <td className="text-left">Study Hour</td>
                <td className="text-left" colSpan="2">
                    {student.studyHour}
                </td>
            </tr>
            <tr>
                <td className="text-left">Internet Facilities</td>
                <td className="text-left" colSpan="2">
                    {student.internetFacilities}
                </td>
            </tr>
            <tr>
                <td className="text-left">Group Study</td>
                <td className="text-left" colSpan="2">
                    {student.groupStudy}
                </td>
            </tr>
            <tr>
                <td className="text-left">Cultural Involvement</td>
                <td className="text-left" colSpan="2">
                    {student.culturalInvolvement}
                </td>
            </tr>
            <tr>
                <td className="text-left">Political Involvement</td>
                <td className="text-left" colSpan="2">
                    {student.politicalInvolvement}
                </td>
            </tr>
            <tr>
                <td className="text-left">Hostel Staying</td>
                <td className="text-left" colSpan="2">
                    {student.hostelStaying}
                </td>
            </tr>
            <tr>
                <td className="text-left">Getting Any Scholarship</td>
                <td className="text-left" colSpan="2">
                    {student.gettingScholarship}
                </td>
            </tr>
            <tr>
                <td className="text-left">Self Income</td>
                <td className="text-left" colSpan="2">
                    {student.selfIncome}
                </td>
            </tr>
            <tr>
                <td className="text-left">Relational Status</td>
                <td className="text-left" colSpan="2">
                    {student.relationalStatus}
                </td>
            </tr>
            <tr>
                <td className="text-left">Communication Skill</td>
                <td className="text-left" colSpan="2">
                    {student.communicationSkill}
                </td>
            </tr>
            <tr>
                <td className="text-left">Confidence</td>
                <td className="text-left" colSpan="2">
                    {student.confidence}
                </td>
            </tr>
            <tr>
                <td className="text-left">Predicted Semester Result</td>
                <td className="text-left" colSpan="2">
                    {student.predictedSemesterResult}
                </td>
            </tr>
            </tbody>
        </table>
        </body>
    );

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h1>
                        { (student.predictedSemesterResult > 0) ? `Your Predicted CGPA is ${student.predictedSemesterResult}!`: ''}</h1>
                    <h1>Student Profile</h1>
                    {loading ? renderLoader() : renderDataTable()}
                </div>
            </div>
        </div>
    );
};
