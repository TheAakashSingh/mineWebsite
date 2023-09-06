const portfolio = [
    {
        id: 0,
        projectName: "Jibon Sangani",
        url: "https://jibonsongoni.netlify.app/",
        image: "projects/jmm.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Node.Js"
            },
            {
                tech: "CSS"
            },
            {
                tech: "MaterialUi"
            },
        ]
    },
    {
        id: 1,
        projectName: "Coaching IAS",
        url: "https://coaching-ias.vercel.app/",
        image: "projects/otawix.png",
        projectDetail: "Coaching IAS is a FULL STACK Coaching website-Different different pages here to view Current Affairs- Give Mock Test- Give Mock Interviews- Daily current affairs data will be showing- User's Login and Signup and can Download Study Materials from here.",
        technologiesUsed: [
            {
                tech: "React.Js"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "MUI"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Vedic Tea",
        url: "https://vedic-tea2.vercel.app/",
        image: "projects/spatay.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "MUI"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 3,
        projectName: "ConnectIn social website",
        url: "https://theaakashsingh.github.io/ConnectIn-Social-App-web-/",
        image: "projects/culyte.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "MUI Design"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 4,
        projectName: "Filmy Own House",
        url: "https://flymyown.com/",
        image: "projects/filmy.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "MUI Design"
            },
            {
                tech: "NodeJs"
            },
            {
                tech: "CSS"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
