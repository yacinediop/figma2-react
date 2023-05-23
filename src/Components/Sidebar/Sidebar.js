import React from 'react'
import {
    BsFillGridFill, BsCartFill,
    BsFillStarFill,
    BsFillCreditCard2FrontFill,
    BsPersonCircle, BsGraphUpArrow,
    BsGearFill, BsBoxArrowRight
} from "react-icons/bs";
import './Sidebar.css'
import logo from "../../medias/logo.png"
function Sidebar() {
    return (
        <>

            {/*  ne touche pas cette partie !!!!
                travail juste sur tes parties concernés */}
            <div className='fixed-top sideBar'>
                <ul className='list-unstyled text-muted'>

                    <li className='logo'>
                        <img src={logo} className='' alt="" />
                    </li>
                    <li className='fw-bold text-uppercase text-black  mx-3 d-none d-sm-inline'>
                        Marketplace
                    </li>
                    <li>
                        <a href='/' className='nav-link active my-3' aria-current="page">
                            <BsFillGridFill />
                            <span className='mx-2 d-none d-sm-inline'>
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='nav-link my-3'>
                            <BsCartFill />
                            <span className='mx-2 d-none d-sm-inline'>
                                Maarket
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='nav-link my-3'>
                            <BsFillStarFill />
                            <span className='mx-2 d-none d-sm-inline'>
                                Favorites
                            </span>
                        </a>
                    </li>
                    <br />
                    <li className='fw-bold text-uppercase text-black title m-3 d-none d-sm-inline'>
                        My Profile
                    </li>
                    <li>
                        <a href='/' className='nav-link my-3'>
                            <BsGraphUpArrow />
                            <span className='mx-2 d-none d-sm-inline'>
                                Insight
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='nav-link my-3'>
                            <BsFillCreditCard2FrontFill />
                            <span className='mx-2 d-none d-sm-inline'>
                                Wallet
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='nav-link my-3'>
                            <BsPersonCircle />
                            <span className='mx-2 d-none d-sm-inline'>
                                Profile
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='nav-link my-3'>
                            <BsGearFill />
                            <span className='mx-2 d-none d-sm-inline'>
                                Setting
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='py-4 fixed-bottom'>
                <button class="btn fw-bold d-flex align-items-center">
                    <span className='m-2 d-none d-sm-inline'>
                        Log out
                    </span>
                    <BsBoxArrowRight className='fw-bold fs-3' />
                </button>
            </div>
        </>
    )
}

export default Sidebar