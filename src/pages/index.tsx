import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}