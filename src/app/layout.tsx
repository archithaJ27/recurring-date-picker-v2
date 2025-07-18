import './globals.css'

import "../styles/globals.css";

export const metadata = {
  title: "Recurring Date Picker",
  description: "A reusable date picker with recurrence logic",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
