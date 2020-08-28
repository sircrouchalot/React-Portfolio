import React from "react";
import PortfolioCarousel from "../components/Carousel/index";
import "./Portfolio.css";

function Portfolio() {
  return (
    <PortfolioCarousel />
    // <Row>
    //   <div className="card-transparent col-10 col-xl-8" id="portfolio">
    //     <div className="card-body">
    //       <h4 className="card-title">Portfolio</h4>
    //       <Row>
    //         <div className="col-12">
    //           <div
    //             id="carouselExampleIndicators"
    //             className="carousel slide"
    //             data-ride="carousel"
    //             style={{ color: "white" }}
    //           >
    //             <ol className="carousel-indicators">
    //               <li
    //                 data-target="#carouselExampleIndicators"
    //                 data-slide-to="0"
    //                 className="active"
    //               ></li>
    //               <li
    //                 data-target="#carouselExampleIndicators"
    //                 data-slide-to="1"
    //               ></li>
    //               <li
    //                 data-target="#carouselExampleIndicators"
    //                 data-slide-to="2"
    //               ></li>
    //               <li
    //                 data-target="#carouselExampleIndicators"
    //                 data-slide-to="3"
    //               ></li>
    //               <li
    //                 data-target="#carouselExampleIndicators"
    //                 data-slide-to="4"
    //               ></li>
    //               <li
    //                 data-target="#carouselExampleIndicators"
    //                 data-slide-to="5"
    //               ></li>
    //             </ol>
    //             <div className="carousel-inner">
    //               <div className="carousel-item active">
    //                 <a
    //                   href="https://github.com/sircrouchalot/To-Cook-Or-Not-To-Cook"
    //                   rel="noopener noreferrer"
    //                   target="_blank"
    //                   style={{ color: "white" }}
    //                 >
    //                   <img
    //                     className="d-block w-100"
    //                     src="../../../Images/ToCookorNot.png"
    //                     alt="First slide"
    //                   />
    //                 </a>
    //                 <div className="carousel-caption d-none d-md-block caption">
    //                   <h5>To Cook or Not To Cook</h5>
    //                   <p>
    //                     An app that returns the top 5 restaurants in your area,
    //                     as well as the top 5 recipes containing what you search
    //                     for.
    //                   </p>
    //                   <a
    //                     href="https://github.com/sircrouchalot/To-Cook-Or-Not-To-Cook"
    //                     rel="noopener noreferrer"
    //                     target="_blank"
    //                     style={{ color: "white" }}
    //                   >
    //                     <i
    //                       className="fab fa-github icon"
    //                       style={{ color: "white" }}
    //                     ></i>
    //                     Github
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="carousel-item">
    //                 <a
    //                   href="https://github.com/sircrouchalot/Virtual-Library"
    //                   rel="noopener noreferrer"
    //                   target="_blank"
    //                   style={{ color: "white" }}
    //                 >
    //                   <img
    //                     className="d-block w-100"
    //                     src="../../../Images/mylibrary.png"
    //                     alt="Second slide"
    //                   />
    //                 </a>
    //                 <div className="carousel-caption d-none d-md-block caption">
    //                   <h5>Virtual Library</h5>
    //                   <p>
    //                     A web application that uses MySQL relational databases
    //                     to maintain a collection of books for a user.
    //                   </p>
    //                   <a
    //                     href="https://github.com/sircrouchalot/Virtual-Library"
    //                     rel="noopener noreferrer"
    //                     target="_blank"
    //                     style={{ color: "white" }}
    //                   >
    //                     <i
    //                       className="fab fa-github icon"
    //                       style={{ color: "white" }}
    //                     ></i>
    //                     Github
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="carousel-item">
    //                 <a
    //                   href="https://github.com/sircrouchalot/Employee-Tracker"
    //                   rel="noopener noreferrer"
    //                   target="_blank"
    //                   style={{ color: "white" }}
    //                 >
    //                   <img
    //                     className="d-block w-100"
    //                     src="../../../Images/Employee_Tracker.PNG"
    //                     alt="Second slide"
    //                   />
    //                 </a>
    //                 <div className="carousel-caption d-none d-md-block caption">
    //                   <h5>Employee Tracker</h5>
    //                   <p>
    //                     A CLI application that takes user input to build a
    //                     database of employees.
    //                   </p>
    //                   <a
    //                     href="https://github.com/sircrouchalot/Employee-Tracker"
    //                     rel="noopener noreferrer"
    //                     target="_blank"
    //                     style={{ color: "white" }}
    //                   >
    //                     <i
    //                       className="fab fa-github icon"
    //                       style={{ color: "white" }}
    //                     ></i>
    //                     Github
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="carousel-item">
    //                 <a
    //                   href="https://github.com/sircrouchalot/UT-HW5-Day-Scheduler"
    //                   rel="noopener noreferrer"
    //                   target="_blank"
    //                   style={{ color: "white" }}
    //                 >
    //                   <img
    //                     className="d-block w-100"
    //                     src="../../../Images/scheduler.png"
    //                     alt="Third slide"
    //                   />
    //                 </a>
    //                 <div className="carousel-caption d-none d-md-block caption">
    //                   <h5>Work Day Scheduler</h5>
    //                   <p>
    //                     A work-day scheduler that stores your tasks for the day
    //                     and To Do items.
    //                   </p>
    //                   <a
    //                     href="https://github.com/sircrouchalot/UT-HW5-Day-Scheduler"
    //                     rel="noopener noreferrer"
    //                     target="_blank"
    //                     style={{ color: "white" }}
    //                   >
    //                     <i
    //                       className="fab fa-github icon"
    //                       style={{ color: "white" }}
    //                     ></i>
    //                     Github
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="carousel-item">
    //                 <a
    //                   href="https://github.com/sircrouchalot/Note-Taking-App"
    //                   rel="noopener noreferrer"
    //                   target="_blank"
    //                   style={{ color: "white" }}
    //                 >
    //                   <img
    //                     className="d-block w-100"
    //                     src="../../../Images/note-taker.PNG"
    //                     alt="Third slide"
    //                   />
    //                 </a>
    //                 <div className="carousel-caption d-none d-md-block caption">
    //                   <h5>Note Taking App</h5>
    //                   <p>
    //                     A simple note app, that uses MySQL databases to
    //                     persistently store the user's notes.
    //                   </p>
    //                   <a
    //                     href="https://github.com/sircrouchalot/Note-Taking-App"
    //                     rel="noopener noreferrer"
    //                     target="_blank"
    //                     style={{ color: "white" }}
    //                   >
    //                     <i
    //                       className="fab fa-github icon"
    //                       style={{ color: "white" }}
    //                     ></i>
    //                     Github
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="carousel-item">
    //                 <a
    //                   href="https://github.com/sircrouchalot/UT-HW4-Code-Quiz"
    //                   rel="noopener noreferrer"
    //                   target="_blank"
    //                   style={{ color: "white" }}
    //                 >
    //                   <img
    //                     className="d-block w-100"
    //                     src="../../../Images/quiz.PNG"
    //                     alt="Fourth slide"
    //                   />
    //                 </a>
    //                 <div className="carousel-caption d-none d-md-block caption">
    //                   <h5>Code Quiz</h5>
    //                   <p>
    //                     A short coding quiz that records high scores using MySQL
    //                     and Sequelize
    //                   </p>
    //                   <a
    //                     href="https://github.com/sircrouchalot/UT-HW4-Code-Quiz"
    //                     rel="noopener noreferrer"
    //                     target="_blank"
    //                     style={{ color: "white" }}
    //                   >
    //                     <i
    //                       className="fab fa-github icon"
    //                       style={{ color: "white" }}
    //                     ></i>
    //                     Github
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //             <a
    //               className="carousel-control-prev"
    //               href="#carouselExampleIndicators"
    //               role="button"
    //               data-slide="prev"
    //             >
    //               <span
    //                 className="carousel-control-prev-icon"
    //                 aria-hidden="true"
    //               ></span>
    //               <span className="sr-only">Previous</span>
    //             </a>
    //             <a
    //               className="carousel-control-next"
    //               href="#carouselExampleIndicators"
    //               role="button"
    //               data-slide="next"
    //             >
    //               <span
    //                 className="carousel-control-next-icon"
    //                 aria-hidden="true"
    //               ></span>
    //               <span className="sr-only">Next</span>
    //             </a>
    //           </div>
    //         </div>
    //       </Row>
    //     </div>
    //   </div>
    // </Row>
  );
}

export default Portfolio;