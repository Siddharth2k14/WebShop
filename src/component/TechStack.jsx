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

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Modern Tech Stack</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We use industry-standard technologies to build fast, secure, and scalable websites
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Static Website Tech */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="w-6 h-6 text-blue-600" />
                                <h3 className="text-2xl font-bold">Static Website</h3>
                            </div>
                            <div className="space-y-4">
                                {technologies.static.map((tech, index) => (
                                    <div
                                        key={index}
                                        className={`bg-gradient-to-r ${tech.color} text-white px-6 py-4 rounded-lg font-bold text-center transform hover:scale-105 transition-all shadow-md flex flex-row justify-center gap-2`}
                                    >
                                        {tech.logo && <tech.logo className="w-6 h-6" />}
                                        {tech.name}
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 mt-6">
                                Perfect for informational websites, portfolios, and simple business sites.
                            </p>
                        </div>

                        {/* Full Stack Tech */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="w-6 h-6 text-purple-600" />
                                <h3 className="text-2xl font-bold">Full-Stack (MERN)</h3>
                            </div>
                            <div className="space-y-4">
                                {technologies.fullStack.map((tech, index) => (
                                    <div
                                        key={index}
                                        className={`bg-gradient-to-r ${tech.color} text-white px-6 py-4 rounded-lg font-bold text-center transform hover:scale-105 transition-all shadow-md flex flex-row justify-center gap-2`}
                                    >
                                        {tech.logo && <tech.logo className="w-6 h-6" />}
                                        {tech.name}
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 mt-6">
                                Powerful stack for complex applications with databases, user management, and dynamic content.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TechStack;