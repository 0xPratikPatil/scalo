"use client"
import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const { data, isLoading } = useCurrent()
  const { mutate } = useLogout()
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in")
    }
  }, [data])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button onClick={() => mutate()}>
        Logout
      </Button>
    </div>
  );
}
