import { Button } from "../theme"

const Login = props => {
    const { className = "", ...rest } = props

    return (
        <section id="login">
            <div className="max-w-[500px] p-[30px] my-[100px] mx-auto bg-white rounded shadow-[0_1px_4px_rgba(0,0,0,0.17)]">

                <h4 className="text-[1.5rem] mb-[20px]">Login to Checkout</h4>
                <p className="mb-[20px]">You can update product cart there too</p>

                <form action="#" method="post">
                    <input
                        type="email"
                        placeholder="Your Email Please"
                        className="p-[10px_15px] leading-[1.857] text-[0.875rem] border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                    />
                    <input
                        type="password"
                        placeholder="Password: Please check your CapsLock button first"
                        className="p-[10px_15px] leading-[1.857] text-[0.875rem] border border-[rgba(181,181,181,0.5)] rounded w-full mb-[20px]"
                    />
                    <div className="flex items-center justify-between mb-[20px]">
                        <a href="#">Forget your password?</a>
                        <Button type="submit" className="!m-0 min-w-[120px]">Login</Button>
                    </div>
                    <p>
                        Don't have an account! No problem.<br />
                    </p>
                    <p className="mb-[20px] flex items-center">
                        Welcome to aatghar family
                        <svg className="mx-1" width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#d73977" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                        <a href="registration.html">Register Here</a>
                    </p>
                </form>

            </div>
        </section>
    )
}

export default Login
