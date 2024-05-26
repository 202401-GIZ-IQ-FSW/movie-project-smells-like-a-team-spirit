import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
  );
}
