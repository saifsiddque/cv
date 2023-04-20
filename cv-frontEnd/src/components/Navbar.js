import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [number, setNumber] = useState('')
    const handleInputBlur = event =>{
        const value = event.target.value;
        setNumber(value)
        console.log(value) 
    }
    return (
        <div className="navbar bg-base-100 bg-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box w-52">
                    <div className="form-control">
                        <div className="input-group">
                        <input onBlur={handleInputBlur} type="text" placeholder="01721…" className="input input-bordered" />
                        <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        </div>
                    </div>
                </ul>
                </div>
                <Link to={'/'}><a className="btn btn-ghost normal-case text-xl">CVmaker</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="form-control">
                    <div className="input-group ">
                        <input onBlur={handleInputBlur} type="text" placeholder="01721…" className="input input-bordered" />
                        <Link to={`/cvInfos/${number}`}>
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <Link to={'/form'}><a className="btn ">Add a CV</a></Link>
            </div>
        </div>
        
        );
};

export default Navbar;