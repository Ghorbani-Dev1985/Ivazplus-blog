import BlogList from "../Blogs/BlogList";

const RelatedBlog = ({related}) => {
  console.log(related)
    return ( 
      related.length > 0 &&
        <section className="flex flex-col my-5">
        <h2 className="text-2xl">مقاله‌های مرتبط</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <BlogList blogsListDocs={related} /> 
        </div>
      </section>
     );
}
 
export default RelatedBlog;