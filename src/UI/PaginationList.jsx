import RouterPush from "@/Utils/RouterPush";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/router";
const PaginationList = ({ page, totalPages }) => {
  const router = useRouter();
  const PageHandler = (e) => {
    router.query.page = e;
    RouterPush(router);
  };
  return (
    totalPages > 1 && (
      <div className="flex-center my-4">
        <Pagination
          isCompact
          showControls
          total={totalPages}
          initialPage={page}
          onChange={PageHandler}
          classNames={{
            prev: "rotate-180",
            next: "rotate-180",
            forwardIcon: "rotate-180",
          }}
        />
      </div>
    )
  );
};

export default PaginationList;
