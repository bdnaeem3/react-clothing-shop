
// theme
import { Container } from '../theme'
import Icon from '../theme/icons'

const TopBar = props => {
    const { className = {}, ...rest } = props

    return (
        <section id="top-bar" className={`bg-[#f5f5f5] py-[5px] ${className}`} {...rest}>
            <Container>
                <div className='flex justify-between items-center'>
                    <ul className='flex'>
                        <li>
                            <a href="#" className='text-[#757575] text-sm'>
                                <Icon name="facebook" className="w-[0.875em] inline-block text-inherit h-[1em] align-[-0.125em] mr-[6px]" />
                                Facebook
                            </a>
                        </li>

                        <li className="ml-[1rem]">
                            <a href="#" className='text-[#757575] text-sm'>
                                <Icon name="instagram" className="w-[0.875em] inline-block text-inherit h-[1em] align-[-0.125em] mr-[6px]" />
                                Instagram
                            </a>
                        </li>
                    </ul>

                    <ul className='flex'>
                        <li>
                            <a href="tel:01790-003132" className='text-[#757575] text-sm'>
                                <Icon name="phone" className="w-[0.875em] inline-block text-inherit h-[1em] align-[-0.125em] mr-[6px]" />
                                01790-003132
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default TopBar