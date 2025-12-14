import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import { Mic } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="border-b p-4 flex justify-between items-center backdrop-blur-md bg-background/80 sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition">
                <div className="bg-primary text-primary-foreground p-1 rounded-lg">
                    <Mic className="h-6 w-6" />
                </div>
                <span>BGCE-Stream</span>
            </Link>

            <div className="flex items-center gap-4">
                <ModeToggle />
            </div>
        </nav>
    );
}

export default Navbar;
