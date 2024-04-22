import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { GoCommit } from "react-icons/go";

const BlogBreadcrumb = ({category , title}) => {
    return ( 
        <Breadcrumbs
        variant="solid"
        separator={<GoCommit className="fill-primary" />}
        className="mb-5 font-extrabold text-3xl"
      >
        <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
        <BreadcrumbItem href="/blogs">همه مقاله‌ها</BreadcrumbItem>
        <BreadcrumbItem href={`/blogs/${category.englishTitle}`}>
          {category.title}
        </BreadcrumbItem>
        <BreadcrumbItem>{title}</BreadcrumbItem>
      </Breadcrumbs>
     );
}
 
export default BlogBreadcrumb;