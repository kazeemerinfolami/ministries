export default {
    ministries: [{
        _id: 1,
        name: "Ministry of Justices",
        minister: "Abubakar Malami",
        origin: "Lagos",
        address: "Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.justice.gov.ng"
    }, {
        _id: 2,
        name: "Ministry of education",
        minister: "lekan oggz",
        origin: "ondo",
        address: "Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.lusti.gov.ng"
    }, {
        _id: 3,
        name: "Ministry of Electricity",
        minister: "rachard richard",
        origin: "ibadun",
        address: "Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.pustic.gov.ng"
    }, {
        _id: 4,
        name: "Ministry of Education",
        minister: "gondelline hunnan",
        origin: "Kebbi",
        address: "Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.kustice.gov.ng"
    }, {
        _id: 5,
        name: "Ministry of Human Right",
        minister: "baBARAYA USMAN",
        origin: "abakaliki",
        address: "Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.wustice.gov.ng"
    }, {
        _id: 6,
        name: "Ministry of Young Bloods",
        minister: "kaeem hokim",
        origin: "sokoto",
        address: "Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.vustice.gov.ng"
    }, {
        _id: 7,
        name: "Ministry of Finance",
        minister: "derele dangote",
        origin: "edo",
        address: "Federal Ministry of Justice, Federal Secretariat (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.qustice.gov.ng"
    }, {
        _id: 8,
        name: "Ministry of Malians",
        minister: "HOME johusa",
        origin: "Kano",
        address: "Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.eustice.gov.ng"
    }, {
        _id: 9,
        name: "Ministry of Food and Agriculture",
        minister: "john Akinm",
        origin: "Kebbi",
        address: "Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria. ",
        website: "www.xustice.gov.ng"
    }]
}





// import React, { useState, useEffect } from 'react'

// export default function Data() {
//     const [userdata, setUserData] = useState([])

//     useEffect(() => {
//         const fetchData = () => {
//             axios({
//                 method: "GET",
//                 url: `http://localhost:9000/api/v1/`,
//             }).then((res) => {
//                 console.log("CREATE SUCESSFULLY FETCHED", res.status);
//                 console.log("FROM TEST", res.data.ministries)
//                 setUserData(res.data.ministries);

//             }).catch((err) => {
//                 if (err.response) {
//                     console.log("ERROR CREATING", err.message);
//                 } else if (err.request) {
//                     console.log("ERROR CREATING CHECK YOUR NETWORK");
//                 } else {
//                     console.log("SOME THING WENT WORNG");
//                 }
//             });
//         }
//         fetchData()
//     }, [])

//     return (
//         <div>
//             {userdata.map((e) => (
//                 ""
//             ))}

//         </div>
//     )
// }