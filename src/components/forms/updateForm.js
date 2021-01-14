import React, { useState } from 'react'
import Navs from '../navs/Navs'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateForm(props) {
    const [values, setValues] = useState({
        name: "",
        minister: "",
        origin: "",
        address: "",
        website: "",
        button: "Update"
    })


    const { name, minister, origin, address, website, button } = values;

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const getParams = props.match.params.id

    console.log("GET PARAMS OUTSIDERR", getParams)


    const onSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, button: "updating..." })
        console.log(name, minister, origin, address, website)
        axios({
            method: "PUT",
            url: `https://ministrybackend.herokuapp.com/api/v1/ministry/${getParams}`,
            data: { name, minister, origin, address, website },
        }).then((res) => {
            toast("PROFILE SUCESSFULLY UPDATED");
            setValues({
                ...values,
                name: "",
                minister: "",
                origin: "",
                address: "",
                website: "",
                button: "Updated"
            });
        }).catch((err) => {
            if (err.response) {
                toast.error("UPDATE ERROR");
                setValues({
                    ...values,
                    button: "Update Error"
                })
            } else if (err.request) {
                toast.error("ERROR CREATING CHECK YOUR NETWORK");
                setValues({
                    ...values,
                    button: "Try again"
                });
            } else {
                toast.error("SOME THING WENT WORNG");
                setValues({
                    ...values,
                    button: "Try again"
                });
            }
        });
    };

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
                    <div className="Header2">Update Ministries data</div>
                    <form>
                        <label for="role" className="subHeader">Role/ minister:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleChange("name")}
                            value={name}
                        /><br />
                        <label for="name" className="subHeader">Name:</label>
                        <input
                            type="text"
                            id="minister"
                            name="minister"
                            onChange={handleChange("minister")}
                            value={minister}
                        /><br />
                        <label for="Origin" className="subHeader">Origin:</label>
                        <input
                            type="text"
                            id="origin"
                            name="origin"
                            onChange={handleChange("origin")}
                            value={origin}
                        /><br />
                        <label for="address" className="subHeader">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            onChange={handleChange("address")}
                            value={address}
                        /><br />
                        <label for="web" className="subHeader">Website:</label>
                        <input
                            type="text"
                            id="web"
                            name="web"
                            onChange={handleChange("website")}
                            value={website}
                        /><br />
                        <button className="createButton" onClick={onSubmit}>{button}</button>
                    </form>

                </div>
            </Navs>
        </>
    )
}

export default UpdateForm