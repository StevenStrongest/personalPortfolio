import HeaderWrapper from "./header.style";
import avatar from "../../assets/images/avatar.jpg";
import { Github, Telegram, Facebook } from "../../assets/svg";
import Image from "next/image";
import Link from "next/link";
import { FACEBOOK_LINK, GITHUB_LINK, TELE_LINK } from "../../constants";

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <div className="logo">
        <div>
          <Image width={50} src={avatar} alt="avatar" />
        </div>
        <p>Steven Strongest</p>
      </div>
      <div className="social">
        <Link href={GITHUB_LINK}>
          <Github />
        </Link>
        <Link href={TELE_LINK}>
          <Telegram />
        </Link>
        <Link href={FACEBOOK_LINK}>
          <Facebook />
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
