import { Links } from "@/lib/links";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DNavbar() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav>
            <div className="flex items-center justify-between p-4">
                <div className="text-2xl font-bold">J. R. Masias</div>
                <div className="flex gap-4">
                    {Links.map((link, index) => {
                        return (
                            <Link href={link.href} key={index} className={clsx('flex items-center gap-2 text-xl text-gray-400', pathname == link.href ? "!text-primary" : "")}>
                                {link.icon}
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}