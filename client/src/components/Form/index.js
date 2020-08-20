import React from 'react';

function EmailForm() {
    return (
        <form name="contact" method="POST" data-netlify="true" style={{display: "block", position: "relative", top: "120px"}}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Full Name</label>
                <input type="name" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default EmailForm;