import React from "react";
const Service = (props) => {
    return (
        <>
            <div style={{ height: '58rem', backgroundColor: '#353539', color: 'white' }}>
                <div className="container">
                    <h1>Text Form</h1>
                    <div className="accordion" >
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>Analyze Your text </strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body" >
                                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or, clear extra spaces, copy text, convert your text in uppercase, convert your text in lower case it is very beneficial for user and easy to use.

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Service;