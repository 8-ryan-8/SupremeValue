import { useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
    const session = useSession();
    const user = session.data?.user;
    // make profile dependent on if logged in
    // get user id with user.id for navigating to profile component
    // utilize nextAuth signIn and signOut


    return (
        <nav className="sticky top-0 px-2 py-4">
            <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href={`/addProduct`}>Add Product</Link>
                </li>
                {
                    user != null &&
                    <li>
                        <Link href={`/profiles/${user.id}`}>Profile</Link>
                    </li>
                }
                {
                    user == null ? (
                    <li>
                        <button onClick={() => console.log("sign in clicked")}>Log In</button>
                    </li>
                    ) : (
                    <li>
                        <button onClick={() => console.log("sign out clicked")}>Sign Out</button>
                    </li> )
                }
            </ul>
        </nav>
    )
}