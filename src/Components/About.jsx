import React from "react";
const About = () => {
    return (
        <>
            <h1 align="center" ><b>WELCOME TO MY PROFILE</b></h1>
            <h3 align="center"><u>MY KEY SKILLS </u></h3>
            <div className="m-3 row row-cols-1 row-cols-md-3 g-5 text-bg-white p-5" align="center" >
                <div className="col g-1 ">
                    <div className="card">
                        <img src="/img.jpg/javascript.jpg.jpg" height={'200px'} width='50px' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">JAVASCRIPT</h5>
                            <p className="card-text">JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.
                             While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.</p>
                        </div>
                    </div>
                </div>
                <div className="col g-1" >
                    <div className="card g-1">
                        <img src="/img.jpg/react.jpg.png" height={'200px'} width={'50px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">REACT.JS</h5>
                            <p className="card-text">React is a JavaScript library for building user interfaces. React is used to build single-page applications. 
                            React allows us to create reusable UI .</p>
                        </div>
                    </div>
                </div>
                <div className="col g-1">
                    <div className="card g-1" >
                        <img src="/img.jpg/html.jpg.jpg" height={'200px'} width={'50px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HTML5</h5>
                            <p className="card-text">HTML 5 is the fifth and current version of HTML. It has improved the markup available for documents and has
                             introduced application programming interfaces (API) and Document Object Model (DOM)..</p>
                        </div>
                    </div>
                </div>
                <div className="col g-1">
                    <div className="card g-1">
                        <img src="/img.jpg/css.jpg.png" height={'200px'} width={'100px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CSS3</h5>
                            <p className="card-text">HTML 5 is the fifth and current version of HTML. It has improved the markup available for documents and has introduced
                             application programming interfaces (API) and Document Object Model (DOM)..</p>
                        </div>
                    </div>
                </div>
                <div className="col g-1">
                    <div className="card g-1">
                        <img src="/img.jpg/bootstrap.jpg.jpg" height={'200px'} width={'100px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">BOOTSTRAP</h5>
                            <p className="card-text">Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows</p>
                        </div>
                    </div>
                </div>
                <div className="col g-1">
                    <div className="card g-1">
                        <img src="/img.jpg/jquery.jpg.png" height={'200px'} width={'100px'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">J-QUERY</h5>
                            <p className="card-text">jQuery is a fast, small, and feature-rich JavaScript library. 
                            It makes things like HTML document traversal and manipulation, event handling, animation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;