import React from 'react'

const schedules = [
    {
        id: 'schedulelist-reveal1',
        day: 'Day 1',
        class: '',
        listClass: 'schedule-list__box',
        date: 'Nov 18th',
        items: [
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            }
        ]
    },
    {
        id: 'schedulelist-reveal2',
        class: 'schedule-list--lower',
        listClass: 'schedule-list__box schedule-list__box--lower',
        day: 'Day 2',
        date: 'Nov 18th',
        items: [
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
            {
                title: 'Badge Pickup / Breakfast',
                time: '8:30am',
            },
        ]
    }
]

export default function Schedule() {
    return (
        <section id="schedule">
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
                                <div id = { schedule.id } className = "col-lg-6" key={schedule.id} >
                                <h2 className={schedule.class}>{schedule.day}</h2>
                                <div className={schedule.listClass}>
                                    <h3>{schedule.date}</h3>
                                    <ul className="min-list">
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
