import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();

    const selectedPlan = location.state?.selectedPlan;
    const selectedAddOns = location.state?.selectedAddOns || [];
    const selectedPlanPrice = selectedPlan?.selectedPrice || selectedPlan?.price;
    const selectedMonthlyPrice = selectedPlan?.selectedMonthlyPrice || selectedPlan?.monthlyPrice;
    const selectedAddOnsLabel = selectedAddOns.length
        ? selectedAddOns.map(a => a.quantity > 1 ? `${a.name} x${a.quantity}` : a.name).join(', ')
        : 'None';

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
        const addOnsText = selectedAddOns.length
            ? selectedAddOns.map(a => {
                const qty = a.quantity || 1;
                const price = a.selectedPrice || a.price;
                const line = qty > 1
                    ? `- ${a.name} x${qty} (₹${price} each, ₹${parseInt(price.replace(",", "")) * qty})`
                    : `- ${a.name} (₹${price})`;
                return line;
            }).join('\n')
            : "None";

        const body = encodeURIComponent(
            `Name: ${name}
Business Name: ${businessName}
Email: ${email}
Phone: ${phone}

Selected Plan: ${selectedPlan?.name || websiteType}
Selected Price: ₹${selectedPlanPrice || 'N/A'}
Selected Monthly Price: ₹${selectedMonthlyPrice || 'N/A'}

Add-ons:
${addOnsText}

Message:
${message}`
        );

        window.location.href = `mailto:webshopagency04@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <>
            <Helmet>
                <title>Contact WebShop Agency | Website for Local Businesses</title>

                <meta
                    name="description"
                    content="Contact WebShop Agency to get an affordable website for your business. Launch your professional website with monthly pricing and full maintenance included."
                />

                <link
                    rel="canonical"
                    href="https://webshopagency.in/contact"
                />

                <script type="application/ld+json">
                    {`
{
 "@context": "https://schema.org",
 "@type": "ContactPoint",
 "telephone": "+91 9555204672",
 "contactType": "customer service",
 "email": "webshopagency04@gmail.com",
 "areaServed": "IN"
}
`}
                </script>
            </Helmet>
            <section className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get Your Website Today</h1>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            Ready to take your business online? Let's discuss your needs and get started!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-linear-to-br from-cyan-500 to-violet-600 shadow-lg shadow-cyan-500/20">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-1 text-slate-100">Email</p>
                                            <a href="mailto:webshopagency04@gmail.com" className="text-cyan-300 hover:text-cyan-100">
                                                webshopagency04@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-linear-to-br from-cyan-500 to-violet-600 shadow-lg shadow-cyan-500/20">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-1 text-slate-100">Phone</p>
                                            <p className="text-slate-300">+91 9555204672</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-linear-to-br from-cyan-500 to-violet-600 shadow-lg shadow-cyan-500/20">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold mb-1 text-slate-100">Location</p>
                                            <p className="text-slate-300">Serving local businesses across India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-6 rounded-3xl border border-slate-800">
                                <h4 className="font-semibold mb-3 text-white">What to prepare:</h4>
                                <ul className="space-y-2 text-slate-300">
                                    <li>• List of products/services you offer</li>
                                    <li>• Your business logo (if available)</li>
                                    <li>• Product photos</li>
                                    <li>• Any specific features you need</li>
                                </ul>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border border-slate-800 shadow-2xl shadow-slate-950/40">
                            <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-slate-200 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full px-4 py-3 bg-slate-950 text-slate-100 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-200 mb-2">Business Name</label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        placeholder="Your shop/business name"
                                        required
                                        className="w-full px-4 py-3 bg-slate-950 text-slate-100 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-200 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        required
                                        className="w-full px-4 py-3 bg-slate-950 text-slate-100 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-200 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        required
                                        className="w-full px-4 py-3 bg-slate-950 text-slate-100 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-200 mb-2">Website Type</label>
                                    <select
                                        name="websiteType"
                                        defaultValue={selectedPlan?.name || "Not sure yet"}
                                        className="w-full px-4 py-3 bg-slate-950 text-slate-100 border border-slate-700 rounded-lg"
                                    >
                                        <option>Basic Website Plan</option>
                                        <option>Business Website / Full Stack Plan</option>
                                        <option>Not sure yet</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-slate-200 mb-2">Add-ons</label>
                                    <input
                                        type="text"
                                        name="addOns"
                                        readOnly
                                        value={selectedAddOnsLabel}
                                        className="w-full px-4 py-3 bg-slate-950 text-slate-100 border border-slate-700 rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-200 mb-2">Tell us about your business</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        placeholder="What do you sell? What makes your business special?"
                                        required
                                        className="w-full px-4 py-3 bg-slate-950 text-slate-100 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-accent px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
