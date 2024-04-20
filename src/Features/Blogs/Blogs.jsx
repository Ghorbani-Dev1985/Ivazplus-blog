import Category from "./Category";
import MobileFilterSort from "./MobileFilterSort";
import Sort from "./Sort";

const Blogs = ({ children }) => {
  return (
    <section className="grid md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] gap-5">
      <div className="md:col-span-3 row-span-1">
        <Category />
      </div>
      <div className="md:col-span-9 md:row-span-2 row-span-2">
        <Sort />
        <MobileFilterSort />
        {children}
      </div>
    </section>
  );
};

export default Blogs;
