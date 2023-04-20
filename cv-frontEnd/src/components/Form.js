import React, { useState } from 'react';

const Form = () => {
    const [cv, setCv] = useState([])
    
    const handleInputBlur = (event) =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...cv};
        newService[field] = value;
        setCv(newService) 
    }
    const handleAddUser = (event) =>{
        event.preventDefault();
        console.log(cv);
        fetch('http://localhost:5000/cvInfos', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cv)
        } )
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Product Added Successfully ')
                event.target.reset()

            }
        })
    }
    return (
        <div>
            <form onSubmit={handleAddUser} className='p-5 m-5 bg-gray-300'>
                <h2 className=' text-center text-2xl border-b-4 pb-3 border-black mb-5'>Personal Information</h2>
                <div className="mb-6">
                    <label for="productName" className="block mb-2 text-sm font-medium  ">1. Candidate Name</label>
                    <input onBlur={handleInputBlur} name='candidateName' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="productName" className="block mb-2 text-sm font-medium  ">2. Father's Name</label>
                    <input onBlur={handleInputBlur} name='fatherName' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="productName" className="block mb-2 text-sm font-medium  ">3. Mother's Name</label>
                    <input onBlur={handleInputBlur} name='motherName' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium  ">4. Address </label>
                    <div className='grid grid-cols-2 gap-4'>
                        <input onBlur={handleInputBlur} placeholder='Village' name='village' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                        <input onBlur={handleInputBlur} placeholder='Post Office' name='postOffice' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                        <input onBlur={handleInputBlur} placeholder='Sub District' name='subdistrict' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                       <input onBlur={handleInputBlur} placeholder='District' name='district' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                    </div>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium  ">5. Date Of Birth</label>
                    <input onBlur={handleInputBlur} name='dateOfBirth' type='date'  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                        <label className="label"><span className="block mb-2 text-sm font-medium  ">6. Gender</span></label>
                        <select onBlur={handleInputBlur} name='gender' className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                </div>
                <div className="mb-6">
                    <label for="productName" className="block mb-2 text-sm font-medium  ">7. Nationality</label>
                    <input onBlur={handleInputBlur} name='nationality' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="productName" className="block mb-2 text-sm font-medium  ">8. Religion</label>
                    <input onBlur={handleInputBlur} name='religion' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                        <label className="label"><span className="block mb-2 text-sm font-medium  ">9. Marital Status</span></label>
                        <select onBlur={handleInputBlur} name='maritalStatus' className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none">
                            <option>Married</option>
                            <option>Unmarried</option>
                        </select>
                </div>
                <div className="mb-6">
                    <label for="productName" className="block mb-2 text-sm font-medium  ">10. NID Number</label>
                    <input onBlur={handleInputBlur} name='nid'  type='text'  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <div className="mb-6">
                    <label for="productName" className="block mb-2 text-sm font-medium  ">11. Phone Number</label>
                    <input onBlur={handleInputBlur} name='phoneNumber'  type='text'  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                </div>
                <h2 className=' text-center text-2xl border-b-4 pb-3 border-black mb-5'>Educational Information</h2>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium  ">1. SSC </label>
                    <div className='grid grid-cols-2 gap-4'>
                        <input onBlur={handleInputBlur} placeholder='Department' name='sscDepartment' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                        <input onBlur={handleInputBlur} placeholder='GPA' name='sscGPA' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                        <input onBlur={handleInputBlur} placeholder='Year' name='sscYear' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                        <input onBlur={handleInputBlur} placeholder='Board' name='sscBoard' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                    </div>
                </div>
                <div className="mb-6">
                    <label for="serviceName" className="block mb-2 text-sm font-medium  ">2. HSC </label>
                    <div className='grid grid-cols-2 gap-4'>
                        <input onBlur={handleInputBlur} placeholder='Department' name='hscDepartment' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                        <input onBlur={handleInputBlur} placeholder='GPA' name='hscGPA' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                        <input onBlur={handleInputBlur} placeholder='Year' name='hscYear' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                        <input onBlur={handleInputBlur} placeholder='Board' name='hscBoard' type="text"  className=" border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"  required/>
                    </div>
                </div>
                
                <button type="submit" className="   border border-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center">Submit</button>
            </form>
        </div>
    ); 
};

export default Form;