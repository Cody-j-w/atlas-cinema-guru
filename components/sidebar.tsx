import { fetchActivities } from "@/lib/data"
import { FolderClosed, Star, Clock } from "lucide-react"
import { auth } from "@/auth"
import ActivityFeed from "./activityFeed";

//w-18 hover: - add before w-44 in Sidebar div

export default async function Sidebar() {

    return (
        <div className="flex flex-col min-h-screen h-full w-18 hover:w-64 bg-[#1dd2af] place-self-start group">
            <div className="justify-center group-hover:justify-start w-full text-center">
                <div className="my-2 group-hover:mx-4">
                    <a className="flex justify-center group-hover:justify-start" href="/">
                        <FolderClosed fill="white" color="#1dd2af" /> <span className="hidden group-hover:inline">Home</span>
                    </a>
                </div>
                <div className="my-2 group-hover:mx-4">
                    <a className="flex justify-center group-hover:justify-start" href="/favorites">
                        <Star fill="white" /> <span className="hidden group-hover:inline">Favorites</span>
                    </a>
                </div>
                <div className="my-2 group-hover:mx-4">
                    <a className="flex justify-center group-hover:justify-start" href="watch-later">
                        <Clock fill="white" color="#1dd2af" /> <span className="hidden group-hover:inline">Watch Later</span>
                    </a>
                </div>
            </div>
            <ActivityFeed />
        </div>
    )
}