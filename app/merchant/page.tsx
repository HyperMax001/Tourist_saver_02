import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Merchant() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Merchant
          </h1>
          <p className="text-gray-600 text-lg">
            This page is coming soon. Check back later!
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
