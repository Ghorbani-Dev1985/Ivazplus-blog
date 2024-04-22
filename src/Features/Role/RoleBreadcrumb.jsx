import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { GoCommit } from "react-icons/go";

const RoleBreadcrumb = () => {
    return ( 
        <Breadcrumbs
        variant="solid"
        separator={<GoCommit className="fill-primary" />}
        className="mb-5 font-extrabold text-3xl"
      >
        <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
        <BreadcrumbItem>قوانین و مقررات</BreadcrumbItem>
      </Breadcrumbs>
     );
}
 
export default RoleBreadcrumb;