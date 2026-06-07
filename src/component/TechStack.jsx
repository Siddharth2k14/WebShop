import { Code2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';

const TechStack = () => {
    const technologies = {
        static: [
            {
                logo: FaHtml5,
                name: 'HTML5', 
                color: 'from-orange-500 to-red-500' 
            },
            { 
                logo: FaCss3,
                name: 'CSS3', 
                color: 'from-blue-500 to-blue-600' 
            },
            { 
                logo: FaJs,
                name: 'JavaScript', 
                color: 'from-yellow-400 to-yellow-500' 

            }
        ],
        fullStack: [
            { 
                logo: SiMongodb,
                name: 'MongoDB', 
                color: 'from-green-500 to-green-600' 
            },
            { 
                logo: SiExpress,
                name: 'Express.js', 
                color: 'from-gray-600 to-gray-700' 
            },
            { 
                logo: RiReactjsFill,
                name: 'React', 
                color: 'from-cyan-400 to-blue-500' 
            },
            { 
                logo: FaNodeJs,
                name: 'Node.js', 
                color: 'from-green-600 to-green-700' 
            },
            {
                logo: TbBrandNextjs,
                name: 'Next.js',
                color: 'from-gray-800 to-gray-900'
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Tech Stack Website | WebShop Agency</title>

                <meta
                    name="description"
                    content="WebShop Agency builds websites using modern technologies including HTML5, CSS3, JavaScript and the MERN stack (MongoDB, Express, React, Node.js)."
                />

                <link
                    rel="canonical"
                    href="https://web-shop-olive.vercel.app/techstack"
                />
            </Helmet>

            <section className="relative py-24 overflow-hidden bg-slate-950 text-slate-100">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute top-24 right-16 w-80 h-80 rounded-full bg-violet-500/15 blur-3xl" />
                    <div className="absolute bottom-10 left-1/2 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl -translate-x-1/2" />
                </div>

                <div className="relative container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="inline-flex items-center rounded-full bg-slate-800/80 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-300 mb-4">
                            Future-Ready Website Technology
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">A modern stack for rental websites that scale</h1>
                        <p className="text-slate-300 text-lg sm:text-xl">
                            From static landing pages to full-stack dashboards, we build rental-ready websites with performance, security, and ease-of-use in mind.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
                        {/* Static Website Tech */}
                        <div className="glass-card border-slate-700/70 p-8 backdrop-blur-xl shadow-2xl shadow-slate-900/30">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="rounded-2xl bg-slate-900/80 p-4 shadow-inner shadow-cyan-500/10">
                                    <Code2 className="w-7 h-7 text-cyan-300" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold">Static Website</h3>
                                    <p className="text-slate-400 mt-1">Fast, beautiful rental landing pages for local businesses.</p>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                {technologies.static.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-base font-semibold transition-all hover:-translate-y-1 hover:border-cyan-400/25"
                                    >
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-3xl bg-linear-to-br ${tech.color}`}>
                                            {tech.logo && <tech.logo className="w-6 h-6 text-white" />}
                                        </div>
                                        <span className="text-slate-100">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-400 mt-8">
                                Ideal for brochure-style businesses, service providers, and rental storefronts that need a polished online presence quickly.
                            </p>
                        </div>

                        {/* Full Stack Tech */}
                        <div className="glass-card border-slate-700/70 p-8 backdrop-blur-xl shadow-2xl shadow-slate-900/30">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="rounded-2xl bg-slate-900/80 p-4 shadow-inner shadow-violet-500/10">
                                    <Code2 className="w-7 h-7 text-violet-300" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold">Full-Stack (MERN)</h3>
                                    <p className="text-slate-400 mt-1">A powerful stack for dynamic platforms and recurring rental workflows.</p>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                {technologies.fullStack.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-base font-semibold transition-all hover:-translate-y-1 hover:border-violet-400/25"
                                    >
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-3xl bg-linear-to-br ${tech.color}`}>
                                            {tech.logo && <tech.logo className="w-6 h-6 text-white" />}
                                        </div>
                                        <span className="text-slate-100">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-400 mt-8">
                                Built for secure admin dashboards, real-time product management, and rental systems that keep growing with your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TechStack;
