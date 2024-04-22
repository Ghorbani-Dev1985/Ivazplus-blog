import DOMPurify from "isomorphic-dompurify";
const BlogBody = ({text}) => {
    return ( 
        <div className="flex-center">
        <article
          className="prose prose-xl md:prose-2xl prose-slate prose-p:text-justify prose-headings:text-orange-500 prose-headings:text-2xl prose-headings:md:text-4xl prose-h1:text-3xl prose-h1:font-extrabold my-16 prose-img:rounded-xl prose-img:mx-auto prose-img:shadow-lg prose-img:hover:scale-105 prose-img:transition-all prose-img:ease-linear prose-img:duration-300"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
        ></article>
      </div>
     );
}
 
export default BlogBody;