
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "JavaScript Mastery",
                    from_email: form.email,
                    to_email: "sujata@jsmastery.pro",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <section>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-5 rounded-xl shadow-lg shadow-gray-600 p-10'
            >
                <div className="md:flex justify-between items-center gap-3 md:gap-5">
                    <label className='flex flex-col md:w-1/2'>
                        <span className='text-gray-100 font-medium mb-4 whitespace-pre'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium placeholder:text-sm placeholder:tracking-[2px] placeholder:font-extralight'
                        />
                    </label>
                    <label className='flex flex-col md:w-1/2'>
                        <span className='text-gray-100 font-medium mb-4 whitespace-pre'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium placeholder:text-sm placeholder:tracking-[2px] placeholder:font-extralight'
                        />
                    </label>
                </div>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Message</span>
                    <textarea
                        rows={7}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder='What you want to say?'
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-100 rounded-lg outline-none border-none font-medium placeholder:text-sm placeholder:tracking-[2px] placeholder:font-extralight'
                    />
                </label>

                <button
                    type='submit'
                    className='text-base sm:text-lg lg:text-lg py-1 px-4 hover:bg-gray-300 hover:text-[#140233] border border-gray-400 rounded-xl bg-[#140233] duration-500 text-gray-100 whitespace-pre'
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;