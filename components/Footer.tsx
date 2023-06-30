import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"


interface ColumnProps {
    title: string;
    links: string[];
}

const FooterColum = ({title,links}: ColumnProps) => (
    <div className="flex flex-col gap-4">
        <h1 className="text-lg font-bold">{title}</h1>
        <ul className="flex flex-col gap-2">
            {links.map((link) => (
                <Link href={link} key={link}>
                    {link}
                </Link>
            ))
            }
        </ul>
    </div>
)


const Footer = () => {

  return (
    <footer className="flex-start footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo-purple.svg" alt="logo" width={115} height={38} />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColum
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          <FooterColum
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <FooterColum
            title={footerLinks[2].title}
            links={footerLinks[2].links}
          />
          <FooterColum
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />

          <FooterColum
            title={footerLinks[4].title}
            links={footerLinks[4].links}
          />
          <FooterColum
            title={footerLinks[5].title}
            links={footerLinks[5].links}
          />
          <FooterColum
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p className="text-sm font-normal text-center">
            © 2021 Flexibble. All rights reserved.
        </p>
        <p className="text-gray">
            <span className="text-black font-semibold">10,241</span>
            projects submitted
        </p>
      </div>
    </footer>
  );
}

export default Footer