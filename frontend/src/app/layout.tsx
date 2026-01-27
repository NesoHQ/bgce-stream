import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import "@/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
