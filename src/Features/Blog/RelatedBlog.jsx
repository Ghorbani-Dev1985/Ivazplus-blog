import BlogList from "../Blogs/BlogList";

const RelatedBlog = ({related}) => {
    return ( 
        <section className="flex flex-col my-5">
        <h2 className="text-2xl">مقاله‌های مرتبط</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BlogList blogsList={related} />
        </div>
      </section>
     );
}
 
export default RelatedBlog;