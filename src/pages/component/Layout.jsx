import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div>
        {/* header */}
        <Header />
        {/* Navbar */}
        {/* searchBox */}
        {children}
      </div>
    </>
  );
}
