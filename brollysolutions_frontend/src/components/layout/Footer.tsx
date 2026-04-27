// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 bg-gray-50">
      <p>&copy; {new Date().getFullYear()} Brolly Solutions. All rights reserved.</p>
    </footer>
  );
}