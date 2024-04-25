import { useAuth, useAuthActions } from "@/Context/AuthContext";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowLeftEndOnRectangle, HiOutlineUser } from "react-icons/hi2";

const Header = () => {
  const dispatch = useAuthActions();
  const { user , loading} = useAuth();
  return (
    <div className={`${loading ? "opacity-0" : "opacity-100"} transition-all`}>
        
      header
      {user ? (
        <Dropdown placement="bottom" backdrop="blur">
          <DropdownTrigger>
            <Image
              width={56}
              height={56}
              alt="ghorbani-dev.ir"
              src="/images/user/user.jpg"
              className="size-14 object-cover cursor-pointer"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="faded" closeOnSelect={false}>
            <DropdownItem
              isReadOnly
              key="profile"
              showDivider
              className="h-16 gap-2 px-3 select-none"
            >
              <p className="font-bold text-primary">{user.name}</p>
              <p className="text-left">{user.email}</p>
            </DropdownItem>
            <DropdownItem>Team Settings</DropdownItem>
            <DropdownItem>Analytics</DropdownItem>
            <DropdownItem>System</DropdownItem>
            <DropdownItem>Configurations</DropdownItem>
            <DropdownItem>Help & Feedback</DropdownItem>
            <DropdownItem
            key="logout"
              onPress={() => dispatch({ type: "LOGOUT" })}
              color="danger"
              startContent={
                <HiMiniArrowLeftEndOnRectangle className="size-5" />
              }
            >
              خروج
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Link href="/login" className="flex-center gap-1 hover:text-primary">
          <HiOutlineUser className="size-6" />
          حساب کاربری
        </Link>
      )}
    </div>
  );
};

export default Header;
