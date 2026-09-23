import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FitLogContextProvider from "@/context/FitLogContext";

export const metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense workout library and planning companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0d0f] text-white">
        <FitLogContextProvider>
          <Navbar />

          {children}

          <Footer />
        </FitLogContextProvider>
      </body>
    </html>
  );
}