import { Container } from "../theme"

const Newsletter = props => {
    const { className = "", ...rest } = props

    return (
        <section id="newsletter" className={`bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.04)] py-[15px] ${className}`} {...rest}>
            <Container>
                <div className="flex items-center">
                    <div className="grid grid-cols-3 gap-[20px]">
                        <div className="flex items-center">
                            <h3 className="text-[1.75rem] leading-[1.2]">
                                Subscribe to our Newsletter!
                            </h3>
                        </div>

                        <div>
                            <p className="text-center text-[#008000] whitespace-nowrap">
                                You can specify newsletter category from your customer panel.
                            </p>
                            <p className="text-center text-[#008000]">
                                Just login with the same email and customize it there.
                            </p>
                        </div>

                        <div>
                            <form action="#" method="post">
                                <div className="w-full flex justify-between">
                                    <input type="email" placeholder="Your email please" className="border border-[rgba(181,181,181,0.5)] border-r-0 rounded-l-[4px] rounded-r-none w-[calc(100%-115px)] px-[15px] py-[10px] text-[0.875rem] leading-[1.857]" />
                                    <button type="submit" className="px-[15px] py-[10px] self-stretch w-[115px] cursor-pointer bg-[#d73977] text-white rounded-r-[4px] rounded-l-none">
                                        Subscribe!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Newsletter