"use client"


import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Loader, LogOut } from "lucide-react"

import { useLogout } from "@/features/auth/api/use-logout"
import { useCurrent } from "@/features/auth/api/use-current"
import { DottedSeparator } from "@/components/ui/dotted-separater"

export const UserButton = () => {
    const { data: user, isLoading } = useCurrent()
    const { mutate: logout } = useLogout()
    if (isLoading) {
        return (
            <div className="size-5 rounded-full elx items-center justify-center bg-neutral-200 border border-neutral-300">
                <Loader className="size-4 animate-spin text-muted-foreground" />
            </div>
        )
    }

    if (!user) {
        return null
    }

    const { name, email } = user

    const avatarFallback = name ? name.charAt(0).toUpperCase() : email.charAt(0).toUpperCase() ?? "U"
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-75 transitions border border-neutral-300">
                    <AvatarFallback className="bg-neutral-100 font-medium text-neutral-500 items-center">
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom" className="w-60" sideOffset={10}>
                <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
                    <Avatar className="size-[50px] hover:opacity-75 transitions border border-neutral-300">
                        <AvatarFallback className="bg-neutral-100 text-xl font-medium text-neutral-500 items-center">
                            {avatarFallback}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="test-sm font-medium text-neutral-900">
                        {name || "User"}
                    </p>
                    <p className="tex-xs text-neutral-500">{email}</p>
                </div>
                <DottedSeparator clasName="mb-1" />
                <DropdownMenuItem
                    onClick={() => logout()}
                    className="h-10 flex items-center justify-center text-amber-700 font-medium cursor-pointer">
                    <LogOut className="size-4 mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

