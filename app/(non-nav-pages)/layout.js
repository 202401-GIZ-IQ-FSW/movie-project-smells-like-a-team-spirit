import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Footer from "../components/Footer/Footer";

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
          <div className="pb-24"></div>
          {children}
          <div className="pt-96"></div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
