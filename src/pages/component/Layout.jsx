import Provider from "../Provider";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Provider>
          {/* header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* searchBox */}
          {children}
        </Provider>
      </div>
    </>
  );
}
