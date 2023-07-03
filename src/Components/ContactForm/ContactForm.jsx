
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from 'react-hot-toast';

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
        if (form.name.length > 0 && form.email.length > 0 && form.message.length > 0) {
            setLoading(true);
            emailjs
                .send(
                    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: form.name,
                        to_name: "Robin",
                        from_email: form.email,
                        to_email: "mohammadrobin636@gmail.com",
                        message: form.message || 'Best of luck',
                    },
                    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
                )
                .then(
                    () => {
                        setLoading(false);
                        toast.success("Thank you. I will get back to you as soon as possible.");
                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    },
                    (error) => {
                        setLoading(false);
                        console.error(error);
                        toast.error("Ahh, something went wrong. Please try again.");
                    }
                );
        } else {
            toast.error('Sorry dear! Please, write something');
        }
    };
    return (
        <section>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col w-full gap-5 rounded-xl shadow-lg shadow-gray-600 p-5 md:p-10'
            >
                <div className="md:flex justify-between items-center gap-5">
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
                    disabled={loading}
                    type='submit'
                    className='text-base sm:text-lg lg:text-lg py-[6px] px-4 hover:bg-gray-300 hover:text-[#140233] border border-gray-400 rounded-lg bg-[#140233] duration-500 text-gray-100 whitespace-pre disabled:cursor-not-allowed 
                    disabled:hover:bg-[#140233] disabled:hover:text-white'
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;