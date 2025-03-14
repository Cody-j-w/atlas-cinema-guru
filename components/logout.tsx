import { LogOut } from "lucide-react"
import { signOut } from "@/auth"

export default function Logout() {

    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}>
            <button type="submit" className="flex items-center ms-4 text-[#00003c]">
                <LogOut size={16} /> <p className="ms-2">Logout</p>
            </button>
        </form>
    )
}