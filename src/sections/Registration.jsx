import { Button } from "../theme"

const Registration = props => {
    const { className = "", ...rest } = props

    return (
        <section id="login">
            <div className="max-w-[500px] p-[30px] my-[100px] mx-auto bg-white rounded shadow-[0_1px_4px_rgba(0,0,0,0.17)]">

                <h4 className="text-[1.5rem] mb-[20px]">Register for surprise</h4>
                <p className="flex items-center mb-[20px]">
                    Let's spend some good time together <svg className="ml-2" width="16" height="16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="grin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="#d73977" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"></path></svg>
                </p>

                <form action="#" method="post">
                    <input
                        type="text"
                        placeholder="Your full name please"
                        className="p-[10px_15px] leading-[1.857] text-[0.875rem] border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                    />
                    <input
                        type="email"
                        placeholder="Email here"
                        className="p-[10px_15px] leading-[1.857] text-[0.875rem] border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                    />
                    <input
                        type="tel"
                        placeholder="Mobile number"
                        className="p-[10px_15px] leading-[1.857] text-[0.875rem] border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                    />
                    <input
                        type="password"
                        placeholder="Password: Please check your CapsLock button first"
                        className="p-[10px_15px] leading-[1.857] text-[0.875rem] border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                    />
                    <input
                        type="password"
                        placeholder="Confirm the password again"
                        className="p-[10px_15px] leading-[1.857] text-[0.875rem] border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                    />
                    <div className="flex items-center justify-between mb-[20px]">
                        <Button type="submit" className="!m-0 w-full">Complete Registration</Button>
                    </div>
                    <p>
                        
                    </p>
                    <p className="flex items-center">
                        Already have an account! That's great 
                        <svg width="16" height="16" className="ml-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbs-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#d73977" d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path></svg>
                    </p>
                    <a href="registration.html" className="mb-[20px]">Just click here for Login</a>
                </form>

            </div>
        </section>
    )
}

export default Registration
