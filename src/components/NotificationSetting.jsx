const NotificationSetting = props => {
    const { className = "", ...rest } = props

    return (
        <div className={className} {...rest}>
            <h4 className="flex items-center justify-between mb-[20px] text-black align-middle text-[24px]">Notification Setting</h4>

            <div className="p-[20px] mb-[30px] relative bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)] items-center flex">
                <button className="absolute right-0 top-0 bg-black text-white text-[0.775rem] px-[15px] py-[2px] rounded-[2px] cursor-pointer">Edit</button>

                <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/4586fbf9fe14-newfile.jpeg" alt="" className="max-w-[200px] mr-5" />

                <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/4586fbf9fe14-newfile.jpeg" alt="" className="max-w-[200px] mr-5" />

                <table className="border-collapse">
                    <tbody>
                        <tr>
                            <td className="py-[5px] pr-[15px]">Name</td>
                            <td className="py-[5px] pr-[15px]">Naeem Ahmed</td>
                        </tr>
                        <tr>
                            <td className="py-[5px] pr-[15px]">Email</td>
                            <td className="py-[5px] pr-[15px]">bdnaeem3@gmail.com</td>
                        </tr>
                        <tr>
                            <td className="py-[5px] pr-[15px]">Phone</td>
                            <td className="py-[5px] pr-[15px]">01780-093899</td>
                        </tr>
                        <tr>
                            <td className="py-[5px] pr-[15px]">Date of Birth</td>
                            <td className="py-[5px] pr-[15px]">29th Aug 1994</td>
                        </tr>
                        <tr>
                            <td className="py-[5px] pr-[15px]">NID No</td>
                            <td className="py-[5px] pr-[15px]">19942617239000851</td>
                        </tr>
                        <tr>
                            <td className="py-[5px] pr-[15px]">Address</td>
                            <td className="py-[5px] pr-[15px]">169 Nahar Vila, Kawlar, Airport, Dhaka-1229</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NotificationSetting
