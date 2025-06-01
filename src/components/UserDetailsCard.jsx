const UserDetailsCard = props => {
    const { className = "", title = "", onEditHanlder = () => { }, data = [], ...rest } = props

    return (
        <div className={className} {...rest}>
            <h4 className={`flex items-center justify-between mb-[20px] text-black align-middle text-[24px]`}>
                {title}
            </h4>

            <div className="p-[20px] relative bg-white rounded-[4px] shadow-[0_1px_4px_0_rgba(0,0,0,0.17)] items-center flex">
                <button className="absolute right-0 top-0 bg-black text-white text-[0.775rem] px-[15px] py-[2px] rounded-[2px] cursor-pointer" onClick={onEditHanlder}>Edit</button>

                {/* <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/4586fbf9fe14-newfile.jpeg" alt="" className="max-w-[200px] mr-5" />

                <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/4586fbf9fe14-newfile.jpeg" alt="" className="max-w-[200px] mr-5" /> */}

                <table className="border-collapse">
                    <tbody>
                        {
                            data.length &&
                            data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="py-[5px] pr-[15px]">{item.key}</td>
                                        <td className="py-[5px] pr-[15px]">{item.value}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserDetailsCard
