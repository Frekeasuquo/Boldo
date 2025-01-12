import Navbar from "@/src/components/Navbar";

export default function CustomPage() {
  return (
    <>
      <Navbar className="bg-yellow-500 text-black" />
      <main className="content">Page Content</main>
    </>
  );
}