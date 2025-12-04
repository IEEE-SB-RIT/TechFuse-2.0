interface EventData {
    eventId: Number;
    eventName: string;
    eventType: string;
    location:string;
    description?:string;
    date:string;
    form?:string;
    free?:boolean;
    ticket?:string;
    time?:string;
    src:string;
}
const eventData: EventData[] = [
    {
        eventId: 1,
        eventName: "Tech Expo 2025",
        eventType: "Technology",
        location: "Bangalore",
        description: "A showcase of the latest tech innovations.",
        date: "2025-12-10",
        form: "offline",
        free: false,
        ticket: "https://tickets.example.com/tech-expo",
        time: "10:00 AM",
        src: "/temp.jpeg"
    },
    {
        eventId: 2,
        eventName: "AI Workshop",
        eventType: "Workshop",
        location: "Hyderabad",
        description: "Hands-on workshop on building AI models.",
        date: "2025-12-12",
        form: "online",
        free: true,
        time: "2:00 PM",
        src: "/temp.jpeg"
    },
    {
        eventId: 3,
        eventName: "Startup Pitch Fest",
        eventType: "Business",
        location: "Chennai",
        description: "Pitch your ideas to investors.",
        date: "2025-12-15",
        form: "offline",
        free: false,
        ticket: "https://tickets.example.com/pitchfest",
        time: "4:00 PM",
        src: "/temp.jpeg"
    },
    {
        eventId: 4,
        eventName: "Music Fiesta",
        eventType: "Concert",
        location: "Mumbai",
        description: "A night of live music & performances.",
        date: "2025-12-20",
        form: "offline",
        free: false,
        ticket: "https://tickets.example.com/music-fiesta",
        time: "7:00 PM",
        src: "/temp.jpeg"
    },
    {
        eventId: 5,
        eventName: "Coding Marathon",
        eventType: "Hackathon",
        location: "Kochi",
        date: "2025-12-22",
        form: "offline",
        free: true,
        time: "9:00 AM",
        src: "/temp.jpeg"
    },
    {
        eventId: 6,
        eventName: "Photography Walk",
        eventType: "Outdoor",
        location: "Pune",
        description: "Explore scenic spots and learn photography.",
        date: "2025-12-25",
        form: "offline",
        free: true,
        time: "6:00 AM",
        src: "/temp.jpeg"
    },
    {
        eventId: 7,
        eventName: "Entrepreneur Meetup",
        eventType: "Meetup",
        location: "Delhi",
        date: "2025-12-27",
        form: "offline",
        free: false,
        ticket: "https://tickets.example.com/entre-meet",
        time: "5:00 PM",
        src: "/temp.jpeg"
    },
    {
        eventId: 8,
        eventName: "Blockchain Summit",
        eventType: "Conference",
        location: "Ahmedabad",
        description: "Learn the future of decentralized tech.",
        date: "2025-12-28",
        form: "online",
        free: true,
        time: "11:00 AM",
        src: "/temp.jpeg"
    },
    {
        eventId: 9,
        eventName: "Yoga Retreat",
        eventType: "Wellness",
        location: "Mysore",
        description: "A peaceful weekend retreat with yoga.",
        date: "2025-12-30",
        form: "offline",
        free: false,
        ticket: "https://tickets.example.com/yoga-retreat",
        time: "6:00 AM",
        src: "/temp.jpeg"
    },
    {
        eventId: 10,
        eventName: "New Year Bash",
        eventType: "Party",
        location: "Goa",
        description: "Celebrate New Year with music & fireworks.",
        date: "2025-12-31",
        form: "offline",
        free: false,
        ticket: "https://tickets.example.com/new-year-bash",
        time: "9:00 PM",
        src: "/temp.jpeg"
    }
];

export default eventData;