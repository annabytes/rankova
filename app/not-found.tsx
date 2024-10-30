import Link from "next/link";
import "./not-found.css";

import Image from "next/image";

import notFound from "@/app/img/not-found.png";

const NotFound = () => {
    return (
        <main className="not-found">
            <h1 className="not-found-title">
                Здається, щось пішло не по плану
            </h1>

            <Image className="not-found-img" src={notFound} alt="404" />

            <Link className="not-found-link" href="/">
                Повернутись до головної
            </Link>
        </main>
    );
};

export default NotFound;
