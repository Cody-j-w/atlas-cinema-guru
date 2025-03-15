'use client';

import { useSearchParams } from "next/navigation";

export default function SearchField() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    function handleSearch(field: string, term: string) {
        if (term) {
            params.set(field, term);
        } else {
            params.delete(field);
        }
        console.log(params.toString());
    }
    return (
        <form className="flex w-full ms-4 justify-between">
            <div className="flex-col">
                <label>
                    <p className="m-1">Search</p>
                    <input
                        id="title"
                        type="text"
                        className="w-80 bg-[#000061] rounded-4xl border border-[#54F4D0] py-1 px-3"
                        placeholder="Search Movies..."
                        onChange={(e) => {
                            handleSearch(e.target.id, e.target.value);
                        }}
                    />
                </label>
                <div className="flex">
                    <div className="flex-col w-36 mt-3 me-7">
                        <label>
                            <span className="m-1">Min Year</span>
                            <input
                                id="minYear"
                                type="text"
                                className="mt-1 w-36 bg-[#000061] rounded-4xl border border-[#54F4D0] p-1"
                                onChange={(e) => {
                                    handleSearch(e.target.id, e.target.value);
                                }} />
                        </label>
                    </div>
                    <div className="flex-col w-36 mt-3">
                        <label>
                            <span className="m-1">Max Year</span>
                            <input id="maxYear" type="text" className="mt-1 w-36 bg-[#000061] rounded-4xl border border-[#54F4D0] p-1" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex-col me-4">
                Genres here
            </div>
        </form>
    )
}