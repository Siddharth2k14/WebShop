import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name');
        const businessName = formData.get('businessName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const websiteType = formData.get('websiteType');
        const message = formData.get('message');

        // Create mailto link with form data
        const subject = encodeURIComponent(`New Website Inquiry from ${businessName}`);
        const body = encodeURIComponent(
            `Name: ${name}\nBusiness Name: ${businessName}\nEmail: ${email}\nPhone: ${phone}\nWebsite Type: ${websiteType}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:sid.webd.singh.04@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Website Today</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Ready to take your business online? Let's discuss your needs and get started!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">Email</p>
                                        <a href="mailto:sid.webd.singh.04@gmail.com" className="text-slate-600 hover:text-blue-600">
                                            sid.webd.singh.04@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">Phone</p>
                                        <p className="text-slate-600">+91 8354878525</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-1">Location</p>
                                        <p className="text-slate-600">Serving local businesses across India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                            <h4 className="font-semibold mb-3">What to prepare:</h4>
                            <ul className="space-y-2 text-slate-700">
                                <li>• List of products/services you offer</li>
                                <li>• Your business logo (if available)</li>
                                <li>• Product photos</li>
                                <li>• Any specific features you need</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-slate-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 mb-2">Business Name</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    placeholder="Your shop/business name"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 mb-2">Website Type</label>
                                <select
                                    name="websiteType"
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option>Static Website (₹1,000/month)</option>
                                    <option>Full-Stack Website (₹2,000/month)</option>
                                    <option>Not sure yet</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-slate-700 mb-2">Tell us about your business</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    placeholder="What do you sell? What makes your business special?"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;