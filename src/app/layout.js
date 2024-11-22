import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Cool Tees Shop",
  description: "Find your new cool tee today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
