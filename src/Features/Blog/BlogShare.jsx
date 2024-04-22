import { Button } from "@nextui-org/react";
import Link from "next/link";
import { BiLogoInstagramAlt, BiLogoTelegram, BiLogoWhatsappSquare } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
const BlogShare = ({slug}) => {
    const [copied, setCopied] = useState(false);
    const CopyHandler = () => {
        setCopied(true);
        toast.success("لینک کپی شد");
      };
    return ( 
        <div className="flex items-center justify-end flex-wrap gap-2 mb-4">
        <Button
          as={Link}
          href={`https://www.instagram.com/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${slug}`}
          isIconOnly
          color="warning"
          variant="faded"
          className="border-none w-12 h-12 min-w-12 hover:bg-slate-200 rounded-lg"
        >
          <BiLogoInstagramAlt className="size-10 fill-pink-500" />
        </Button>
        <Button
          as={Link}
          href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${slug}`}
          isIconOnly
          color="warning"
          variant="faded"
          className="border-none w-12 h-12 min-w-12 hover:bg-slate-200 rounded-lg"
        >
          <BiLogoTelegram className="size-10 fill-sky-500" />
        </Button>
        <Button
          as={Link}
          href={`whatsapp://send/?text=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${slug}`}
          isIconOnly
          color="warning"
          variant="faded"
          className="border-none w-12 h-12 min-w-12 hover:bg-slate-200 rounded-lg"
        >
          <BiLogoWhatsappSquare className="size-10 fill-emerald-500" />
        </Button>
        <CopyToClipboard
          text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${slug}`}
          onCopy={CopyHandler}
        >
          <p className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-2 text-slate-600 cursor-pointer py-3 rounded-lg transition-colors">
            <MdContentCopy className="size-6" /> کپی لینک
          </p>
        </CopyToClipboard>
      </div>
     );
}
 
export default BlogShare;