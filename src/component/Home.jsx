import { ArrowRight, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Affordable Websites for Local Shops | WebShop Agency
                </title>

                <meta
                    name="description"
                    content="Get a professional website for your shop with no upfront cost. WebShop Agency provides affordable website rental service with design, hosting, and maintenance included."
                />

                <link rel="canonical" href="https://web-shop-olive.vercel.app/" />

                <meta property="og:title" content="WebShop Agency - Websites for Local Businesses" />
                <meta property="og:description" content="Affordable website rental service for local businesses. No upfront cost, monthly plans, and full maintenance." />
                <meta property="og:type" content="website" />

                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "WebShop Agency",
                        "url": "https://web-shop-olive.vercel.app",
                        "logo": "https://res.cloudinary.com/dhgojtmbf/image/upload/v1772568298/logo_lnrgcs.avif",
                        "email": "webshopagency04@gmail.com",
                        "telephone": "+91 9555204672",
                        "sameAs": [
                        "https://www.linkedin.com/company/web-shop-agency/"
                        ]
                        }
                    `}
                </script>

                <script type="application/ld+json">
                    {`
{
 "@context": "https://schema.org",
 "@type": "WebSite",
 "name": "WebShop Agency",
 "url": "https://web-shop-olive.vercel.app"
}
`}
                </script>

            </Helmet>

            <section className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <div className="absolute top-10 left-8 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="absolute top-32 right-10 w-80 h-80 rounded-full bg-violet-500/15 blur-3xl" />
                    <div className="absolute bottom-10 left-1/2 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 glass-card px-5 py-3 rounded-full mb-6 shadow-xl">
                            <Sparkles className="w-4 h-4 text-cyan-300" />
                            <span className="text-sm text-slate-200 font-medium">Rent a Modern Website, Pay Monthly</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                            Rent Your Shop Website,
                            <br />Leave the Tech to Us
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                            Launch a polished online presence for your business with our website rental model. No large upfront cost, just a simple monthly plan.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <NavLink
                                to="/pricing"
                                className="inline-flex items-center justify-center gap-2 btn-accent px-8 py-4 rounded-2xl shadow-2xl shadow-cyan-500/20 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
                            >
                                View Rental Plans
                                <ArrowRight className="w-5 h-5" />
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 btn-accent-outline px-8 py-4 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all"
                            >
                                Start Now
                            </NavLink>
                        </div>

                        <div className="mt-12 grid gap-4 sm:grid-cols-3">
                            <div className="glass-card p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 mb-3">Launch in days</p>
                                <h3 className="text-xl font-semibold text-white">Quick Setup</h3>
                                <p className="mt-3 text-slate-300">Your site goes live fast with a ready-to-run rental package.</p>
                            </div>
                            <div className="glass-card p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 mb-3">All-in-one</p>
                                <h3 className="text-xl font-semibold text-white">Design + Hosting</h3>
                                <p className="mt-3 text-slate-300">We handle design, hosting, maintenance and updates for one monthly fee.</p>
                            </div>
                            <div className="glass-card p-6">
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 mb-3">Grow anytime</p>
                                <h3 className="text-xl font-semibold text-white">Flexible Scale</h3>
                                <p className="mt-3 text-slate-300">Start simple and upgrade to larger plans as your business grows.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;
