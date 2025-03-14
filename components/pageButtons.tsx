"use client"

import Link from "next/link"
import { useState } from "react"

type buttonProps = {
    previousPage: number,
    nextPage: number
}

export default function PageButtons(props: buttonProps) {


    return (
        <div className="flex w-full justify-center my-5">
            <Link href={`/${props.previousPage}`}>
                <button className="p-4 w-32 bg-[#54F4D0] me-2 rounded-l-4xl text-[#000061]">
                    Previous
                </button>
            </Link>
            <Link href={`/${props.nextPage}`}>
                <button className="p-4 w-32 bg-[#54F4D0] rounded-r-4xl text-[#000061]">
                    Next
                </button>
            </Link>
        </div>
    )
}