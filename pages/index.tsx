import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return <main>NOT LOGGED IN. (We must redirect to /api/auth/signin.)</main>;
  } else {
    return <main>Hello</main>;
  }
}
