import Category from "./Category";
import Sort from "./Sort";

const Blogs = () => {
    return ( 
        <section className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-3">
            <Category />
        </div>
        <div className="col-span-12 md:col-span-9 row-span-2">
            <Sort />
            <div>2</div>
        </div>
        </section>
     );
}
 
export default Blogs;