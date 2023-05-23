import React from 'react'
import NavBar from "../Navbar/Navbar"
import SideBar from "../Sidebar/Sidebar"
import SectionOne from "../Dashboard/SectionOne/SectionOne"
import SectionTwo from "../Dashboard/SectionTwo/SectionTwo"


function Home() {
    return (

        //     ne touche pas cette partie !!!!
        //    travail juste sur tes parties concernés

        <div className='container-fluid' >
            <div className='row'>
                <div className='col-2 min-vh-100 bg-white'>
                    <SideBar />
                </div>
                <div className='col-10'>
                    <div className='row bg-primary-subtle '>
                        <NavBar />
                        <div className='col-8 min-vh-100 '>
                            <SectionOne />
                        </div>
                        <div className='col-4 '>
                            <SectionTwo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home