import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
 
const Cv = () => {
    const cv = useLoaderData()  
    console.log(cv);
    return (
        <div>
            <h2 className=' text-center text-2xl border-b-4 pb-3 border-black mb-5'>
            Curriculum Vita of <span className='font-bold'>{cv.candidateName}</span> 
                </h2>
            
            <table className="table table-zebra p-20 w-5/6 mx-auto  ">
           
            <tbody className='bg-gray-300 '>
                <tr>
                    <th>1</th>
                    <th >Candidate Name</th>
                    <td >:</td>
                    <td>{cv.candidateName}</td>
                </tr>
                <tr>
                <th>2</th>
                    <th>Father's Name</th>
                    <td>:</td>
                    <td>{cv.fatherName}</td>
                </tr>
                <tr>
                    <th>3</th>
                    <th>Mother's Name</th>
                    <td>:</td>
                    <td>{cv.motherName}</td>
                </tr>
                <tr>
                    <th>4</th>
                    <th className='whitespace-nowrap'>Current Address</th>
                    <td></td>
                    <td></td>
                    
                </tr>
                <tr >
                    <td>Village      </td>
                    <td>: {cv.village}</td>
                    <td>PostOffice   </td>
                    <td>: {cv.postOffice}</td>
                </tr>
                <tr className='bg-black'>
                    <td >Sub District </td>
                    <td >: {cv.subdistrict}</td>
                    <td >District    </td>
                    <td >: {cv.district}</td>
                </tr>
                <tr>
                    <th>5</th>
                    <th className='whitespace-nowrap'>Permanent Address</th>
                    <td></td>
                    <td></td>
                    
                </tr>
                <tr >
                    <td>Village      </td>
                    <td>: {cv.village}</td>
                    <td>PostOffice   </td>
                    <td>: {cv.postOffice}</td>
                </tr>
                <tr className='bg-black'>
                    <td >Sub District </td>
                    <td >: {cv.subdistrict}</td>
                    <td >District    </td>
                    <td >: {cv.district}</td>
                </tr>
                <tr>
                    <th>6</th>
                    <th>Date Of Birth</th>
                    <td>:</td>
                    <td>{cv.dateOfBirth}</td>
                </tr>
                <tr>
                    <th>7</th>
                    <th>Gender</th>
                    <td>:</td>
                    <td>{cv.gender}</td>
                </tr>
                <tr>
                    <th>8</th>
                    <th>Nationality</th>
                    <td>:</td>
                    <td>{cv.nationality}</td>
                </tr>
                <tr>
                    <th>9</th>
                    <th>Religion</th>
                    <td>:</td>
                    <td>{cv.religion}</td>
                </tr>
                <tr>
                    <th>10</th>
                    <th>Marital Status</th>
                    <td>:</td>
                    <td>{cv.maritalStatus}</td>
                </tr>
                <tr>
                    <th>11</th>
                    <th>NID Number</th>
                    <td>:</td>
                    <td>{cv.nid}</td>
                </tr>
                <tr>
                    <th>12</th>
                    <th>Phone Number</th>
                    <td>:</td>
                    <td>{cv.phoneNumber}</td>
                </tr>
                <tr>
                    <th>13</th>
                    <th>Educational Information</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
        </table>
        <table className="table w-5/6 m-auto  border">
            {/* head */}
            <tbody>
                <tr className='boarder'>
                    <th className='boarder'>Exam</th>
                    <th className='boarder'>Department</th>
                    <th className='boarder'>GPA</th>
                    <th className='boarder'>Passing Year</th>
                    <th className='boarder'>Board</th>
                </tr>
            </tbody>
            <tbody>
                <tr className='boarder'>
                    <th className='boarder'>SSC</th>
                    <td className='boarder'>{cv.sscDepartment}</td>
                    <td className='boarder'>{cv.sscGPA}</td>
                    <td className='boarder'>{cv.sscYear}</td>
                    <td className='boarder'>{cv.sscBoard}</td>
                </tr>
                <tr className='boarder' >
                    <th className='boarder'>HSC</th>
                    <td className='boarder'>{cv.hscDepartment}</td>
                    <td className='boarder'>{cv.hscGPA}</td>
                    <td className='boarder'>{cv.hscYear}</td>
                    <td className='boarder'>{cv.hscBoard}</td>
                </tr>
                
            </tbody>
        </table>
        <div className='px-24 p-5'>
            <Link to={'/updateCv'}><button className='btn m-auto w-full '>Update CV</button></Link>
        </div>
        </div>
    );
};

export default Cv;