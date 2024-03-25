import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "../components/NavBar/NavBar";
import { ThemeProvider } from "../components/theme-provider";
import MobileNav from "../components/NavBar/MobileNav";
import Footer from "../components/Footer/Footer";
import MovieDetails from "../components/SingleMoviePage/MovieDetails";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LateNight",
  description: "Latest movies and TV shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* dark mode context */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pb-12"></div>
          
          <NavBar />
          <MobileNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
