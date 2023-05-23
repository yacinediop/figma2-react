import React from 'react'
import { BsSearch, BsSliders, BsFillBellFill, BsFillFilterCircleFill } from "react-icons/bs";
import avatar from "../../medias/avatar.jpg"
import './Navbar.css'
// import { BsCaretDownFill } from "react-icons/bs";


function Navbar() {
    return (
        <>
            {/*  ne touche pas cette partie !!!!
                travail juste sur tes parties concernés */}

            <nav class="navbar bg-primary-subtle">
                <div class="container-fluid ">
                    <form className='navForm'>
                        <div class="input-group">
                            <span class="input-group-text bg-white rounded-start-4" id="basic-addon1">
                                <BsSearch />
                            </span>
                            <input type="text" class="form-control " placeholder="Search..." />
                            <span class="input-group-text rounded-end-4 bg-white" id="basic-addon1">
                                <BsSliders />
                            </span>
                        </div>
                    </form>
                    <ul class="ms-auto list-unstyled  d-flex align-items-center navList">
                        <li>
                            <a href="/">
                                <BsFillBellFill className='fs-4 text-black' />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <BsFillFilterCircleFill className='fs-4 text-black' />
                            </a>
                        </li>
                        <li >
                            <div className='d-flex align-items-center'>
                                <img src={avatar} class="rounded-4 " alt="" width="50" />
                                <p className='d-none d-sm-inline'>
                                    <br />
                                    <span>Bb Yacine</span>
                                    <br />
                                    <span>ydk@gmail.com</span>
                                </p>
                                <div class="dropdown d-lg-none d-md-none">
                                    <a class="btn dropdown-toggle fs-4" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {/* <BsCaretDownFill/> */}
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="/">Bb Yacine</a></li>
                                        <li><a class="dropdown-item" href="/">ydk@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto flex-sm-row float-sm-end d-flex align-items-center navList">

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">
                                    <BsFillBellFill className='fs-3' />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <BsFillFilterCircleFill className='fs-3 mx-3' />
                                </a>
                            </li>
                            <li class="nav-item me-3">
                                <div className='d-flex align-items-center'>
                                    <img src={avatar} class="rounded-4 mx-3" alt="" width="50" />
                                    <p>
                                        <br />
                                        <span>Latyr Sene</span>
                                        <br />
                                        <span>latyr0503@gmail.com</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav >
        </>
    )
}

export default Navbar