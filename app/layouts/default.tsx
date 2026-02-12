import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
