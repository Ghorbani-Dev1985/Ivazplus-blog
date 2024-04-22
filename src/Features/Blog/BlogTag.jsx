import { Chip } from "@nextui-org/react";

const BlogTag = ({tags}) => {
    return ( 
        <div className="flex items-center flex-wrap gap-2 my-5">
        <h2 className="text-2xl">تگ‌ها:</h2>
        {tags.map((tag) => (
          <Chip key={tag} color="primary" variant="flat">
            {tag}
          </Chip>
        ))}
      </div>
     );
}
 
export default BlogTag;