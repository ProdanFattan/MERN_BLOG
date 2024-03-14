import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/index";
export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
