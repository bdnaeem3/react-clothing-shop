import { Container } from "../theme"
import Profile from "../components/Profile"
import Favorites from "../components/Favorites"
import PurchasedItems from "../components/PurchasedItems"
import Orders from "../components/Orders"
import NotificationSetting from "../components/NotificationSetting"
import { useState } from "react"
import { user_tabs } from "../../data"

const User = props => {
    const { className = "", ...rest } = props
    const [activeTab, setActiveTab] = useState('profile')

    const activeContent = () => {
        switch (activeTab) {
            case 'favorites':
                return <Favorites />
            case 'purchased_items':
                return <PurchasedItems />
            case 'order':
                return <Orders />
            case 'settings':
                return <NotificationSetting />
            case 'profile':
            default:
                return <Profile />
        }
    }

    const onTabChangeHandler = tab => {
        // console.log(e.target.innerText)
        setActiveTab(tab.key)
    }

    return (
        <section id="user" className={`${className}`} {...rest}>
            <Container>
                <div className="grid grid-cols-4 my-[50px]">
                    <div className="col-span-1">
                        <div className="flex flex-col sticky top-[20px]">
                            {
                                user_tabs.map(item => {
                                    return (
                                        <div
                                            className={`${item.key == activeTab ? 'relative bg-white rounded-l-[4px] p-[25px_15px] shadow-[-3px_0px_3px_0px_rgba(0,0,0,0.17)] transition-all duration-[150ms] ease-linear text-[#2b2e32] cursor-pointer' : 'relative p-[12px_15px_12px_0] transition-all duration-[150ms] ease-linear text-[#2b2e32] cursor-pointer hover:pl-[15px]'}                `}
                                            onClick={() => onTabChangeHandler(item)}
                                            key={item.id}
                                        >
                                            {item.value}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="p-[30px] bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)]">
                            <div className="pb-[20px] mb-[15px] border-b border-[#c8cbcf]">
                                <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <div className="w-[70px] h-[70px] rounded-full overflow-hidden mr-[10px]">
                                            <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/4586fbf9fe14-newfile.jpeg" alt="" />
                                        </div>

                                        <div>
                                            <h4 className="text-[24px]">Naeem Ahmed</h4>
                                            <p className="self-center">
                                                Balance :
                                                <span className="text-[#d73977]"> 132</span>
                                                | Points :
                                                <span className="text-[#d73977]">97</span>
                                            </p>
                                        </div>
                                    </div>

                                    <p className="self-center text-right">
                                        Upload photo of your NID to get <br />
                                        <span className="text-[#d73977]">50%-100%</span>
                                        discount on your birthday.
                                    </p>
                                </div>
                            </div>

                            {activeContent()}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default User
