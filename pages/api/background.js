const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'AIMT College Lucknow',
                degree: 'B.Tech, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from AIMT College.",
                year: '2021-2025'
            },
            {
                id: 1,
                title: 'Oxford Senior Secondary School',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed 12th .",
                year: '2018-2020'
            },
           
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'Treetor',
                role: 'Frontend Developer',
                url: 'https://treetor.in/',
                desc: 'As a junior frontend developer, I use React, Node.js & JavaScript to build user interfaces for web applications.',
                year: '06/2023 - Present',
                location: 'Gurgaon, Indiaa'
            },
            {
                id: 1,
                title: 'Freelancing',
                role: 'Full Stack Web Developer',
                url: 'no website',
                desc: 'As a Freelancer, I learned how to use React & JavaScript to build interactive websites and worked with many clients and done so many projects..',
                year: '02/2022 - Present',
                location: 'Lucknow, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
