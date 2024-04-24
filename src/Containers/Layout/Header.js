import { useAuth } from "@/Context/AuthContext";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowLeftEndOnRectangle, HiOutlineUser } from "react-icons/hi2";

const Header = () => {
    const {user} = useAuth()
    console.log(user)
    return ( <div>header


        {
            user ?   <Dropdown placement="bottom-start">
            <DropdownTrigger>
            <Image
                  width={56}
                  height={56}
                  alt="ghorbani-dev.ir"
                  src="/images/user/user.jpg"
                  className="size-14 object-cover cursor-pointer"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-8 gap-2">
                <p className="font-bold text-primary">{user.name}</p>
              </DropdownItem>
              <DropdownItem key="settings">
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">
                Analytics
              </DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger" >
                <div className="flex items-center gap-1">
              <HiMiniArrowLeftEndOnRectangle className="size-5"/>
              خروج
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> : <Link href="/login" className="flex-center gap-1 hover:text-primary">
                <HiOutlineUser className="size-6"/>
                حساب کاربری
            </Link>
        }
    </div> );
}
 
export default Header;