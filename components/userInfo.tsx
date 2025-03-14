import { auth } from "@/auth";

export default async function UserInfo() {
    const session = await auth();
    if (!session?.user) return null;

    return (
        <div className="text-[#00003c]">
            Welcome, {session.user.email}
        </div>
    )
}