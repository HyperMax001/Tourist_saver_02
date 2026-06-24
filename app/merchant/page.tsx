import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MerchantRegistration() {
  const categories = [
    "Activities", "Amusement", "Bar", "Beauty", "Cafe", "Club", "Dining", 
    "Experiences", "Entertainment", "Fashion", "Gifts", "Health", 
    "Kids Stuff", "Museum", "Wellness", "Restaurant", "Services", 
    "Tours", "Transport"
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Information */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2350AA] tracking-tight">
              Merchant Registration
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              It's great to have you joining <span className="font-semibold text-gray-900">TouristSaver</span> App!
              <br />
              Just fill in and send back the quick registration form below, and we'll take care of the rest; including helping with photos and arranging your <span className="font-semibold text-gray-900">QR stickers</span> for display at your store and counter.
            </p>

            <ul className="space-y-3 text-gray-600 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#2350AA] mt-1">•</span>
                <span><span className="font-semibold text-gray-900">Free for merchants</span> — no joining fees or hidden costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2350AA] mt-1">•</span>
                <span>Attract new customers (interstate & overseas visitors).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2350AA] mt-1">•</span>
                <span>Update your offers in real time via online — any day, any hour.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2350AA] mt-1">•</span>
                <span>Get signage & QR stickers for your store counter/window.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2350AA] mt-1">•</span>
                <span>Receive 10 complimentary TouristSaver memberships.</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <form className="space-y-8">
              
              {/* Business Details Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Business Details</h2>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="tradingName" className="text-sm font-semibold text-[#2350AA]">
                    Merchant Trading Name for the App *
                  </label>
                  <input
                    type="text"
                    id="tradingName"
                    placeholder="Merchant Trading Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contactName" className="text-sm font-semibold text-[#2350AA]">
                    Contact Name for the Merchant Application *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    placeholder="Contact name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contactPhone" className="text-sm font-semibold text-[#2350AA]">
                    Contact Phone for the Application *
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    placeholder="Contact Phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contactEmail" className="text-sm font-semibold text-[#2350AA]">
                    Contact Email for the Application *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="businessAddress" className="text-sm font-semibold text-[#2350AA]">
                    Business Address *
                  </label>
                  <input
                    type="text"
                    id="businessAddress"
                    placeholder="Business Address or suburb if business is mobile"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="businessPhone" className="text-sm font-semibold text-[#2350AA]">
                    Business Phone for the App (optional)
                  </label>
                  <input
                    type="tel"
                    id="businessPhone"
                    placeholder="Business phone to display on the App"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="businessEmail" className="text-sm font-semibold text-[#2350AA]">
                    Business Email for the App (optional)
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    placeholder="Business email to display on the App"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="website" className="text-sm font-semibold text-[#2350AA]">
                    Website (optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    placeholder="e.g. www.myretailshop.com.au"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="socialMedia" className="text-sm font-semibold text-[#2350AA]">
                    Social Media Listings (optional)
                  </label>
                  <input
                    type="text"
                    id="socialMedia"
                    placeholder="Social Media e.g @facebookusername, @instagramusername etc"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>
              </div>

              {/* Category Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Category (select one or more)</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-[#2350AA] focus:ring-[#2350AA]"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Referrer Section */}
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="referrer" className="text-sm font-semibold text-[#2350AA]">
                    Referrer (optional)
                  </label>
                  <input
                    type="text"
                    id="referrer"
                    placeholder="Referrer name or source"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all"
                  />
                </div>
              </div>

              {/* Brand Assets Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Brand Assets</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-[#2350AA]">Upload App Slider Images (up to 4)</h3>
                    <p className="text-xs text-gray-500 mt-1 italic">
                      2:1 ratio preferred (e.g., 1024x512). ~500 KB - 1 MB each. You may leave any field blank.
                    </p>
                  </div>

                  {[1, 2, 3, 4].map((num) => (
                    <div key={`slider-${num}`} className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-gray-700">App slider {num}</label>
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2350AA]/10 file:text-[#2350AA] hover:file:bg-[#2350AA]/20 focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4">
                  <div>
                    <h3 className="text-sm font-semibold text-[#2350AA]">Upload Logo (optional)</h3>
                    <p className="text-xs text-gray-500 mt-1 italic">
                      1:1 square preferred. ~500 KB - 1 MB.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2350AA]/10 file:text-[#2350AA] hover:file:bg-[#2350AA]/20 focus:outline-none focus:ring-2 focus:ring-[#2350AA]/20 focus:border-[#2350AA] transition-all cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Confirmation Checkbox */}
              <div className="pt-4 border-t">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    required
                    className="w-5 h-5 mt-0.5 rounded border-gray-300 text-[#2350AA] focus:ring-[#2350AA]"
                  />
                  <span className="text-sm md:text-base text-gray-700 group-hover:text-gray-900">
                    * I confirm I'm authorised to submit this application and agree to be contacted.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  className="w-full md:w-auto min-w-[200px] py-4 px-8 rounded-xl bg-[#2350AA] hover:bg-[#2350AA]/90 text-white font-bold text-lg transition-colors active:scale-[0.98] flex justify-center items-center gap-2 shadow-lg shadow-[#2350AA]/20"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

