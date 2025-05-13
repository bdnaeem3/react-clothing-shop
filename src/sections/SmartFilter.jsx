import { Container } from "../theme"

const SmartFilter = props => {
    const { className = "", ...rest } = props

    return (
        <section id="filter" className={`bg-[#ddd] py-[30px] mb-[20px] ${className}`} {...rest}>
            <Container>
                <div className="flex items-center">
                    <h3 className="text-[24px] mr-[20px]">Filter By :</h3>
                    <ul className="flex">
                        <li className="mr-[20px] text-[#d73977] text-[1.25rem] cursor-pointer">
                            Men
                        </li>
                        <li className="mr-[20px] text-[#d73977] text-[1.25rem] cursor-pointer">
                            Watch
                        </li>
                        <li className="mr-[20px] text-[#d73977] text-[1.25rem] cursor-pointer">
                            10-12
                        </li>
                        <li className="mr-[20px] text-[#d73977] text-[1.25rem] cursor-pointer">
                            White
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default SmartFilter