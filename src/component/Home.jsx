import { ArrowRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 md:py-32 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-md">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-slate-700">Professional Websites for Local Businesses</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                        Your Digital Storefront,
                        <br />Hassle-Free & Affordable
                    </h1>

                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Get a stunning website for your shop on a rental basis. We handle everything - design, hosting, and maintenance. You focus on your business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <NavLink
                            to="/pricing"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            View Pricing
                            <ArrowRight className="w-5 h-5" />
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-lg border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all"
                        >
                            Contact Us
                        </NavLink>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>No Upfront Cost</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Monthly Rental</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Free Maintenance</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;