import { House, Globe, Music, Image, User2, Mail } from "lucide-react";
import { JSX } from "react";

interface Link {
    name: string;
    href: string;
    icon: JSX.Element;
}

export const Links = [
    { name: "Home", href: "/", icon: <House /> },
    { name: "Web Apps", href: "/development", icon: <Globe /> },
    { name: "Music", href: "/music", icon: <Music /> },
    { name: "Photography", href: "/photography", icon: <Image /> },
    { name: "Acting", href: "/acting", icon: <User2 /> },
    { name: "Contact", href: "/contact", icon: <Mail /> },
];