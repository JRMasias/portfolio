import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Links } from "@/lib/links";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MNavbar() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-between w-full p-4">
                <div className="text-2xl font-bold">J. R. Masias</div>
                <div className="flex flex-col justify-evenly items-center h-10 w-10">
                    <div className="w-7 h-[3px] bg-primary rounded-lg"></div>
                    <div className="w-7 h-[3px] bg-primary rounded-lg"></div>
                    <div className="w-7 h-[3px] bg-primary rounded-lg"></div>
                </div>
            </SheetTrigger>
            <SheetContent side="top">
                <VisuallyHidden asChild><SheetTitle>Nothing</SheetTitle></VisuallyHidden>
                <SheetDescription>
                    {Links.map((link, index) => {
                        return (
                            <SheetClose asChild key={index}>
                                <Link href={link.href} className={clsx('flex p-3 items-center gap-2 text-xl text-gray-400', pathname == link.href ? "!text-primary" : "")}>
                                    {link.icon}
                                    {link.name}
                                </Link>
                            </SheetClose>);
                    })}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}