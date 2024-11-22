import "./globals.css";

export const metadata = {
  title: "Buy a cool Tee",
  description: "Find your new tee today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="py-10 bg-[var(--background)] drop-shadow-lg cursor-default">
          <h1 className="text-4xl font-extrabold">Cool Tees Shop</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
