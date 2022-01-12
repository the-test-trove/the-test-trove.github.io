import React from 'react'
import { schedules, dates } from '../Constants/Constants';
import Experience5 from '../../assets/images/uploads/experience/experience5.png'


export default function Schedule() {
    return (
        <section id="schedule">
            <div className="extra-container">
                <div className="experience__tittle">
                    {dates.map((date) => {
                        return (
                            <>
                                <div className="experience__tittle1"><h1>{date.location}</h1></div>
                                    <h3 id="counting" class="tittle-eff2">{date.date}</h3>
                                <div className="experience__tittle2"><h1>{date.monthYear}</h1></div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="experience">
                <div className="extra-container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-6">
                            <a href="https://source.redhat.com/groups/public/workflow_and_integration_qe/the_test_trove/the_test_trove_conferencet3con_q4_nov_18_2021" class="experience__thumb movein-ex--1">
                                <img src={Experience5} alt="experience1" style={{cursor: 'pointer'}} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra-container">
                <div className="schedule-list__tittle">
                    <h1>Conference Schedule</h1>
                </div>
            </div>
            <div className="schedule-list">
                <div className="container">
                    <div className="row">
                        {schedules.map((schedule) => {
                            return(
                                <div id = { schedule.id } className = "col-lg-12" key={schedule.id} >
                                <h2 className={schedule.class}>{schedule.day}</h2>
                                <div className={schedule.listClass}>
                                    <h3>{schedule.date}</h3>
                                    <ul className="min-list">
                                            <li><span><strong>Session</strong></span><span><strong>Timing</strong></span></li>
                                            {schedule.items.map((item) => {
                                                return (
                                                    <li><span>{item.title}</span><span>{item.time}</span></li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </div>
                    );
                        })}
                    </div>
                </div>
            </div>


        </section>
    )
}
