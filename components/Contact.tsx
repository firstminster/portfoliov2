import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
            <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">04. What's Next?</p>
            <h2 className='font-titleFont text-5xl font-semibold' >Get In Touch</h2>
            <p className="max-w-[600px] text-center text-textDark">
                Let's connect! Whether you're seeking a collaborator on an exciting project or just want to geek out about the latest in tech. Looking forward to connecting with fellow creators and innovators! 🚀
                {/* Let’s have a conversation! I’d love to hear about what you’re working on and find a way to contribute. */}
                {/* Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! */}
            </p>
            <a href="mailto:promiseharrycyber@gmail.com">
                <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300' >Say Hello</button>
            </a>
        </section>
    )
}

export default Contact