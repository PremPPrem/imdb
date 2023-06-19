import Provider from "../Provider";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Provider>
          {/* header */}
          <Header />
          {/* Navbar */}
          {/* searchBox */}
          {children}
        </Provider>
      </div>
    </>
  );
}
