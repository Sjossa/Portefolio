import Image from "next/image";
import Link from "next/link";
import Images from "../asset/Images/logo.png";

export default function Header() {
  return (
    <header>
    <div className="navbarre">
      <ul>
        <li>
            <Link href="/">
          <Image src={Images} alt="Logo" width={100} height={100} /></Link>
        </li>
        <li>
          <Link href="/about"></Link>
        </li>

        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </div>
    </header>
  );
}
