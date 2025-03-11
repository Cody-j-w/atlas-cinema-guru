import Logo from "./logo";
import UserInfo from "./userInfo";

export default function Header() {
    return (
        <div className=" flex justify-between w-full bg-[#54F4D0] h-12">
            <div className="inline content-center">
                <Logo />
            </div>
            <div className="flex flex-row ">
                <div className="me-3 inline content-center">
                    <UserInfo />
                </div>
                <div className="me-3 inline content-center">
                    <p className="">Logout goes here</p>
                </div>
            </div>
        </div>
    )
}