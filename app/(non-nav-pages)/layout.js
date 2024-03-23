import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Footer from "../components/Footer/footer";

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
          {children}
          <div className="pt-36"></div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
