import React, { useState, useEffect } from 'react'
import { FaCaretDown } from "react-icons/fa"
import { FaCaretUp } from "react-icons/fa"
import Coat_of_arms_of_Nigeria from "../../src/images/Coat_of_arms_of_Nigeria.png"
import axios from "axios"

function Index() {
    const [userdata, setUserData] = useState([])
    const [viewMore, setViewMore] = useState(false)
    console.log("from state", userdata)
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://ministrybackend.herokuapp.com/api/v1`,
        }).then((res) => {
            console.log("CREATE SUCESSFULLY FETCHED", res.status);
            console.log("FROM TEST", res.data.ministries)
            setUserData(res.data.ministries);

        }).catch((err) => {
            if (err.response) {
                console.log("ERROR CREATING", err.message);
            } else if (err.request) {
                console.log("ERROR CREATING CHECK YOUR NETWORK");
            } else {
                console.log("SOME THING WENT WORNG");
            }
        });
    }, [])

    return (
        <>
            {userdata.map((e) =>
                <div className="card">

                    <div className="roleCard">
                        <img className="coatOfArms" src={Coat_of_arms_of_Nigeria} alt="Coat of arms" />
                        <span className="role" >{e.name}</span>
                    </div>
                    <div className="infoCard">
                        <span className="body1">Minsiter: </span>
                        <span className="bodyContent">{e.minister}</span> <span className="bodyContent"> - </span> <span className="bodyContent">{e.origin}</span>
                    </div>
                    <div className="marginBottom">
                        {viewMore &&
                            <div>
                                <div className="extra-content">
                                    <div className="body1">Address:</div>

                                    <div className="body2">
                                        {e.address}
                                    </div>
                                    <a className="web" target="_blank" rel="noopener noreferrer" href={e.website}>
                                        <span className="body1">Web:</span> {e.website}
                                    </a>
                                </div>
                            </div>}
                        <span className="read-more" onClick={() => { setViewMore(!viewMore) }}>
                            <div>{viewMore ?
                                <span className="read">Read Less<FaCaretUp className="icon" /></span> :
                                <span className="read">More Info<FaCaretDown className="icon" /></span>}
                            </div>
                        </span>
                    </div>

                </div>
            )}

        </>
    )
}


export default Index