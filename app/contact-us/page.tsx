import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-6 max-w-3xl mx-auto w-full">
        <div>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
              Have a question or need assistance? Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-3.5 px-6 rounded-xl bg-[#2350AA]/10 hover:bg-[#2350AA]/20 text-[#2350AA] font-bold text-lg transition-colors active:scale-[0.98] flex justify-center items-center gap-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}

