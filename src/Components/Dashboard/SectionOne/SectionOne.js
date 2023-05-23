import React from 'react'
import './SectionOne.css'

function SectionOne() {
    return (
        <>
            {/*  Ce bout de code je l'ai juste mis pour que tu vois la structure de l'app quand
            tu lance le serveur, pour cette partie si tu veux tu peux tout supprimer
            ou bien essayer d'adapté c'est à toi de voir
            j'ai créé un ficher css unique pour cette page c'est pour éviter les conflits
            et tache de bien choisir tes classe et id  */}

            <div className='bg-white rounded-4 p-4'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className='container '>

                <div className='row my-5 ms-5'>
                    <div className='col-3 rounded-4 bg-white'>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className='col-3 mx-5 rounded-4 p-5 bg-white'>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className='col-3 rounded-4 bg-white'>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className='row ms-5'>
                    <div className='col-3 rounded-4 bg-white'>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className='col-3 mx-5 rounded-4 p-5 bg-white'>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className='col-3 rounded-4 bg-white'>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOne