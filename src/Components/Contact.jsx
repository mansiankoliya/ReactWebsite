import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phno: "",
        email: "",
        msg: ""
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phno}  and email is  ${data.email} , Here is what i want to say ${data.msg}. `)
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    FullName
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name='fullname'
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name='phno'
                                    value={data.phno}
                                    onChange={InputEvent}
                                    placeholder="Mobile Number"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name='email'
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter Email"
                                    required
                                    autoComplete='off'
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    rows="3"
                                    name='msg'
                                    value={data.msg}
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className='col-12'>
                                <button className="btn btn-outline-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact