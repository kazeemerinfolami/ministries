import React, { useState, useEffect } from 'react'
import Navs from '../navs/Navs'
import { Link } from "react-router-dom";
// import data from "../Data/data"
import axios from "axios"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateData() {


    const [values, setValues] = useState({
        name: "",
        minister: "",
        origin: "",
        address: "",
        website: "",
        button: "Create",
    })

    const { name, minister, origin, address, website, button } = values;

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };


    const [userdata, setUserData] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://ministrybackend.herokuapp.com/api/v1`,
        }).then((res) => {
            console.log("CREATE SUCESSFULLY FETCHED", res.status);
            // console.log("FROM TEST", res.data.ministries)
            setUserData(res.data.ministries);

        }).catch((err) => {
            if (err.response) {
                console.log("ERROR GETTING", err.message);
            } else if (err.request) {
                console.log("ERROR GETTING CHECK YOUR NETWORK");
            } else {
                console.log("SOME THING WENT WORNG");
            }
        });
    }, [])

    const onSubmit = (e) => {

        setValues({ ...values, button: "Creating..." })
        axios({
            method: "POST",
            url: `https://ministrybackend.herokuapp.com/api/v1/ministry`,
            data: { name, minister, origin, address, website },
            //    console.log( role, name, origin, address, website)
        }).then((res) => {
            toast("SUCCESSFULY CREATED", res.data.message);
            setValues({
                ...values,
                name: "",
                minister: "",
                origin: "",
                address: "",
                website: "",
                button: "Created",
            });
            window.location.reload(false)
            toast(res);
        }).catch((err) => {
            if (err.response) {
                toast("ERROR CREATING", err.message);
                setValues({
                    ...values,
                    button: "Try again"
                })
            } else if (err.request) {
                toast("ERROR CREATING CHECK YOUR NETWORK");
                setValues({
                    ...values,
                    button: "Try again"
                });
            } else {
                toast("SOME THING WENT WORNG");
                setValues({
                    ...values,
                    button: "Try again"
                });
            }
        });
    };

    const { handleSubmit, register, errors } = useForm();


    const handleClick = (userId) => {
        console.log("FROM DELETE", userId)
        axios({
            method: "DELETE",
            url: `https://ministrybackend.herokuapp.com/api/v1/ministry/${userId}`,
        }).then((res) => {
            toast("DELETED SUCESSFULLY");
            window.location.reload(false)
        }).catch((err) => {
            if (err.response) {
                toast.error("ERROR DELETING", err.message);
            } else if (err.request) {
                toast.error("ERROR DELETING CHECK YOUR NETWORK");
            } else {
                toast.error("ERROR DELETING");
            }
        });
    }

    return (
        <>
            <Navs>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                />
                <div>
                    <div className="Header2">Create Ministries info</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label for="role" className="subHeader">Role/ minister:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange("name")}
                            ref={register({ required: true })}
                            placeholder={errors.name && "Role is required."}
                            value={name}
                        /><br />
                        <label for="name" className="subHeader">Name:</label>
                        <input
                            type="text"
                            id="minister"
                            name="minister"
                            ref={register({ required: true })}
                            placeholder={errors.minister && "Name is required."}
                            onChange={handleChange("minister")}
                            value={minister}
                        /><br />
                        <label for="Origin" className="subHeader">Origin:</label>
                        <input
                            type="text"
                            id="origin"
                            name="origin"
                            ref={register({ required: true })}
                            placeholder={errors.origin && "Origin is required."}
                            onChange={handleChange("origin")}
                            value={origin}
                        /><br />
                        <label for="address" className="subHeader">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            ref={register({ required: true })}
                            placeholder={errors.address && "Address is required."}
                            onChange={handleChange("address")}
                            value={address}
                        /><br />
                        <label for="web" className="subHeader">Website:</label>
                        <input
                            type="text"
                            id="web"
                            name="web"
                            ref={register({ required: true })}
                            placeholder={errors.web && "Web is required."}
                            onChange={handleChange("website")}
                            value={website}
                        /><br />
                        <button className="createButton" >{button}</button>
                    </form>

                    <div className="main">
                        {userdata.map((e) => (
                            <div className="card2">
                                <div className="">
                                    <div><span className="adminTitle">Role: </span ><span className="bodyContent2">{e.minister}</span> </div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <div>
                                            <span className="adminTitle">Name: </span>
                                            <span className="bodyContent2"><span className="bodyContent2" >{e.name}</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span >
                                        <Link to={`/updateuser/${e._id}`} ><button className="editButton"><span className="edit">edit</span></button></Link>
                                    </span>
                                    <button className="deleteButton" onClick={() => { handleClick(e._id) }}>DELETE</button>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>

            </Navs>
        </>
    )
}

export default CreateData