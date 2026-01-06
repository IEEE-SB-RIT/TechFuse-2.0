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
        id: 7,
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
        id: 9,
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
        id: 8,
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
    }
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