import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const RootLayout = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
                <Navbar />
                <main className="flex-1 flex flex-col">
                    <Outlet />
                </main>
            </div>
        </ThemeProvider>
    );
};

export default RootLayout;
