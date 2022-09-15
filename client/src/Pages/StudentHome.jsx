import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'

const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

    return (
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8 mt-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.student.student.student.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.student.student.student.name}</h5>
                                            <h5 className="card-title">{store.student.student.student.registrationNumber}</h5>
                                            <Link to='/student/updateProfile'> Profil Yangilash</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 bg-dark  text-white">
                                    <table className="table ">
                                        <tbody className="text-white">
                                            <tr>
                                                <td>Ism</td>
                                                <td>{store.student.student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registratsiya raqami</td>
                                                <td>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Tugilgan sanasi</td>
                                                <td>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Kursi</td>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td>Bo`lim</td>
                                                <td>{store.student.student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Korpus</td>
                                                <td>{store.student.student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <td>Kirgan yili</td>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <td>Jinsi</td>
                                                <td>{store.student.student.student.gender ? store.student.student.student.gender : 
                                                
                                                   "Yozilmagan"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Telefon raqami</td>
                                                <td>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "Yozilmagan"}</td>
                                            </tr>
                                            {/* <tr>
                                                <td>Aadhar Card</td>
                                                <td>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"} </td>
                                            </tr> */}
                                            <tr>
                                                <td>Otasi ismi</td>
                                                <td>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "Yozilmagan" }</td>
                                            </tr>
                                            <tr>
                                                <td>Oatsi tel raqami</td>
                                                <td>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "Yozilmagan"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>

                    </div>
                </div>

            </> : (history.push('/'))}
        </div>

    )
}

export default Home
