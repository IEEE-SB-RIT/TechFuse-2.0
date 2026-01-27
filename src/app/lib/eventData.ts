interface Speaker {
    name: string;
    description: string;
}

interface Partner {
    name: string;
    role: string;
}

interface EventData {
    id: number;
    title?: string;
    eventName: string;
    type: string;
    venue: string;
    date: string;
    salutaion?: string;
    eventDescription?: string;

    speakers?: Speaker[];
    partners?: Partner[];
    culturals?: boolean;
    culturalDetails?: Speaker[];
    location?: string;
    
    

    price?: string[];
    form?: boolean;
    free?: boolean;
    formLink?: string;

    src: string;
}
const eventData: EventData[] = [
    {
        id: 8,
        title: "Workshop | Registrations Open",
        eventName: "Virtual Reality",
        type: "Workshop",
        venue: "RIT Kottayam",
        date: "30 Jan – 1 Feb 2026",
        salutaion: "Unlock the world of interactive and immersive digital environments with Virtual Reality.",
        eventDescription:
            "Workshop on Virtual Reality (VR) focusing on immersive and interactive digital environments.",
        speakers: [
            {
                name: "Muhammad Ajas A S",
                description: "AR/VR Trainer, ASAP Kerala"
            }
        ],
        location: "RIT Kottayam",
        free: false,
        src: "/techFuseEvents/events08.webp"
    },
    {
        id: 7,
        title: "Workshop | Registrations Open",
        eventName: "Introduction to ADAS",
        type: "Workshop",
        venue: "RIT Kottayam",
        date: "30 Jan – 1 Feb 2026",
        salutaion: "Step into Advanced Driver Assistance Systems (ADAS), redefining intelligent driving!",
        eventDescription:
            "Introduction to Advanced Driver Assistance Systems (ADAS) workshop.",
        speakers: [
            {
                name: "Vyasan J",
                description: "Solopreneur, Angel Investor, Founder: TransEduverse, DataiX3 | Freelance Corporate and Academic Data Engineering Technical Trainer"
            }
        ],
        location: "RIT Kottayam",
        free: false,
        src: "/techFuseEvents/events07.webp"
    },
    {
        id: 6,
        title: "Workshop | Registrations Open",
        eventName: "Edge AI & IoT",
        type: "Workshop",
        venue: "RIT Kottayam",
        date: "30 Jan – 1 Feb 2026",
        salutaion: "The automation of work is the defining story of our time.",
        eventDescription:
            " Workshop on Edge AI & IoT.",
        speakers: [
            {
                name: "Abhijith Benny",
                description: "Hardware Design Engineer, Digital Core Technologies Pvt. Ltd"
            },
            {
                name: "Richu Bini",
                description: "Software Design Engineer, Digital Core Technologies Pvt. Ltd"
            }
        ],
        location: "RIT Kottayam",
        free: false,
        src: "/techFuseEvents/events06.webp"
    },
    {
        id: 9,
        title: "Cultural Night",
        eventName: "TechFuse 2.0 – Cultural Night",
        type: "Cultural",
        venue: "RIT Kottayam",
        date: "30 January 2026",
        salutaion: "The Saga of Signals comes alive!",
        eventDescription:
            "Get ready for a night where music meets energy and signals turn into sound. TechFuse 2.0 Cultural Night, organised by IEEE SPS SBC RIT in collaboration with IEEE SPS Kerala Chapter, features RITM performing LIVE on stage for an electrifying experience.",
        culturals: true,
        culturalDetails: [
            {
                name: "RITM",
                description: "Live band performance"
            }
        ],
        location: "RIT Kottayam",
        free: true,
        src: "/techFuseEvents/events09.webp"
    },
    {
        id: 5,
        title: "Talk Session | Registrations Open",
        eventName: "Getting to Know IEEE",
        type: "Talk Session",
        venue: "RIT Kottayam",
        date: "30 Jan – 1 Feb 2026",
        salutaion: "Getting to Know IEEE",
        eventDescription:
            "Discover how IEEE can open global opportunities, build leadership skills, and connect you with the international tech community.",
        speakers: [
            {
                name: "Mrudul John Mathews",
                description: "WebMaster, IEEE Sensors Council Kerala Chapter"
            }
        ],
        location: "RIT Kottayam",
        free: true,
        src: "/techFuseEvents/events05.webp"
    },

    {
        id: 2,
        title: "Talk Session | Registrations Open",
        eventName: "Cyberworld Exposed",
        type: "Talk Session",
        venue: "RIT Kottayam",
        date: "30 Jan – 1 Feb 2026",
        salutaion: "Explore the Hidden Side of Cybersecurity",
        eventDescription: "Cyberworld Exposed offers a beginner-to-pro cybersecurity roadmap. The session covers ethical hacking, phishing techniques, RAT attacks, and hardware hacking basics, followed by an exclusive live Q&A with industry experts.",
        speakers: [
            {
                name: "Mohammed Fizal",
                description: "Cyber Security Trainer"
            },
            {
                name: "Noorul Ameen N",
                description: "Cyber Security Trainer"
            }
        ],
        location: "RIT Kottayam",
        price: [
            "IEEE SPS Members – ₹799",
            "IEEE Members – ₹999",
            "Non-IEEE Members – ₹1199"
        ],
        free: false,
        form: true,
        formLink: "https://www.yepdesk.com/techfuse1",
        src: "/techFuseEvents/events03.webp"
    },
    {
        id: 1,
        title: "Registrations Now Open",
        eventName: "TechFuse 2.0",
        type: "Tickets",
        venue: "RIT Kottayam",
        date: "30 Jan – 1 Feb 2026",
        salutaion: "Explore the World of Signals and Circuits",
        eventDescription: "IEEE SPS SBC RIT, in collaboration with IEEE SPS Kerala Chapter, presents TechFuse 2.0 — a three-day technical extravaganza focused on signals and circuits. Early bird registrations are now open.",
        speakers: [],
        location: "RIT Kottayam",
        price: [
            "IEEE SPS Members – ₹799",
            "IEEE Members – ₹999",
            "Non-IEEE Members – ₹1199"
        ],
        free: false,
        // formLink: "https://www.yepdesk.com/techfuse1",
        src: "/techFuseEvents/events01.webp"
    },

    {
        id: 3,
        title: "Pre-Event | Registrations Open",
        eventName: "E-Football Showdown",
        type: "Gaming",
        venue: "RIT Kottayam",
        date: "8 January 2026",
        salutaion: "Kick Off the TechFuse 2.0 Excitement",
        eventDescription: "As a pre-event of TechFuse 2.0, IEEE SPS SBC RIT in collaboration with IEEE SPS Kerala Chapter and RESPAWN – the Gaming Club of RIT presents an electrifying E-Football Showdown. Experience fast-paced gameplay, intense matches, and fierce competition as players battle it out for glory.",
        // partners: [
        //     {
        //         name: "RESPAWN – The Gaming Club of RIT"
        //     }
        // ],
        location: "RIT Kottayam",
        price: [
            "Registration Fee – ₹10",
            "Prize Pool – ₹500"
        ],
        form: true,
        free: false,
        formLink: "https://tinyurl.com/EfootballTechfuse2",
        src: "/techFuseEvents/events02.webp"
    },
    {
        id: 4,
        title: "Registrations Open",
        eventName: "CrossSignal",
        type: "Quiz / Crossword",
        venue: "RIT Kottayam",
        date: "12 January 2026",
        salutaion: "Test Your Logic and Signal Skills",
        eventDescription: "CrossSignal is an engaging crossword-style challenge designed to test your analytical thinking and signal-processing knowledge. Compete with peers, solve clues, and win exciting prizes.",
        location: "RIT Kottayam",
        price: [
            "Prize Pool – ₹300"
        ],
        form: true,
        free: true,
        formLink: "https://tinyurl.com/crosswordTechfuse",
        src: "/techFuseEvents/events04.webp"
    },


    // {
    //     id: 8,
    //     title: "event 7",
    //     eventName: "DRONEVERSE",
    //     type: "Workshop",
    //     venue: "Rit Kottayam",
    //     date: "2025-09-26 to 2025-09-28",
    //     salutaion: "Rise of the Machines",
    //     speakers: [
    //         {
    //             name: "Anfil Shajo",
    //             description: "Avionics and Robotics Integration Lead, Rovonize System Pvt.Ltd",
    //         },
    //     ],
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking."
    // },
    // {
    //     id: 15,
    //     title: "",
    //     eventName: "Skies in Motion",
    //     type: "",
    //     venue: "Rit Kottayam",
    //     date: "2025-09-26 to 2025-09-28",
    //     salutaion: "Rise of the Machines",
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking.",
    //     partners: [
    //         {
    //             name: "Rit Kottayam",
    //             role: "Drone Show by Drone Racers Kerala",
    //         },
    //     ],
    // },
    // {
    //     id: 14,
    //     title: "event 4",
    //     eventName: "ICE BREAKING",
    //     type: "Talk session",
    //     venue: "Rit Kottayam",
    //     date: "2025-09-26 to 2025-09-28",
    //     salutaion: "Rise of the Machines",
    //     speakers: [
    //         {
    //             name: "Adil A",
    //             description: "Technical Coordinator, IEEE SPS Kerala Chapter",
    //         },
    //     ],
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking."
    // },
    // {
    //     id: 13,
    //     title: "Cultural Announcement",
    //     eventName: "Culturals Of RoboIgnite",
    //     type: "Cultural",
    //     venue: "Rit Kottayam",
    //     date: "2025-09-26 to 2025-09-28",
    //     salutaion: "🤖 RoboIgnite – Ignite your passion for Robotics",
    //     culturals: true,
    //     culturalDetails: [
    //         { name: "Anvaya", description: "The sensational band led by Sreerag Menon" },
    //     ],
    //     formLink: "",
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking."
    // },
    // {
    //     id: 12,
    //     title: "Tickets Out",
    //     eventName: "Bulk Registerations",
    //     type: "Tickets",
    //     venue: "Rit Kottayam",
    //     date: "2025-09-26 to 2025-09-28",
    //     salutaion: "🤖 RoboIgnite – Ignite your passion for Robotics",
    //     price: ["Tickets of 5 at 20% off"],
    //     formLink: "",
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking."
    // },
    // {
    //     id: 1,
    //     title: "Tickets Out",
    //     eventName: "Registrations Open",
    //     type: "Tickets",
    //     venue: "Rit Kottayam",
    //     date: "2025-09-26 to 2025-09-28",
    //     salutaion: "🤖 RoboIgnite – Ignite your passion for Robotics",
    //     price: [
    //         "IEEE RAS Members - 1000",
    //         "IEEE Members - 1200",
    //         "Non-IEEE Members - 1450",
    //     ],
    //     formLink: "",
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking."
    // },
    // {
    //     id: 2,
    //     title: "Venue Partner Announced",
    //     eventName: "Venue Partner",
    //     type: "Venue",
    //     venue: "Kottayam",
    //     date: "2025-09-26 to 2025-09-28",
    //     partners: [
    //         {
    //             name: "Hotel Floral Park",
    //             role: "Venue Partner for RoboIgnite 2025",
    //         },
    //     ],
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking."
    // },
    // {
    //     id: 3,
    //     title: "Expert Talk – The Growing Field of Robotics and Its Opportunities",
    //     eventName: "Expert Talk",
    //     type: "Talk Session",
    //     venue: "Online",
    //     date: "2025-09-15",
    //     salutaion: "🧠 Topic: The Growing Field of Robotics and Its Opportunities",
    //     speakers: [
    //         {
    //             name: "Sethulakshmi S Nair",
    //             description: "Executive Manager at IHub Research and Robotics Pvt Ltd",
    //         },
    //     ],
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking.",
    //     form: true,
    //     formLink: "https://bit.ly/Talksession_1",
    // },
    // {
    //     id: 4,
    //     title: "Expert Talk – Human-Robot Interaction",
    //     eventName: "Expert Talk",
    //     type: "Talk Session",
    //     venue: "Online (Google Meet)",
    //     date: "2025-09-16",
    //     salutaion: "🧠 Topic: Human-Robot Interaction",
    //     speakers: [
    //         {
    //             name: "Devasena Pasupuleti",
    //             description:
    //                 "PhD Researcher in Human-Robot Interaction, ISHIGURO Lab, Osaka University",
    //         },
    //     ],
    //     src: "/coming_soon.webp",
    //     location:"Rit Kottayam",
    //     eventDescription:"A gathering of developers, innovators, and tech enthusiasts featuring keynotes, workshops, and networking.",
    //     form: true,
    //     formLink: "https://bit.ly/Talksession_2",
    // },
];


export default eventData;