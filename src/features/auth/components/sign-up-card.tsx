"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DottedSeparator } from '@/components/ui/dotted-separater'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"


const formSchema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimmum of 8 characters required"),
})


const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return (
        <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
            <CardHeader className='flex items-center justify-center text-center p-7'>
                <CardTitle className='text-2xl'>
                    Sign Up                </CardTitle>
                <CardDescription>By signing up, you agree to our{" "}
                    <Link href="/privacy">
                        <span className='text-blue-700'>Privacy Policy</span>
                    </Link>{" "}and {" "}
                    <Link href="/terms">
                        <span className='text-blue-700'>Terms of service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                        <FormField
                            name="name"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        < Input {...field} type="text" placeholder='Enter your name' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        < Input {...field} type="email" placeholder='Enter your email' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        < Input {...field} type="password" placeholder='Enter your password' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button disabled={false} size="lg" className='w-full'>Sign Up</Button>
                    </form>
                </Form>
            </CardContent>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7 flex flex-col gap-y-4'>
                <Button disabled={false} variant="secondary" size="lg" className='w-full'>
                    <FcGoogle className='mr-2 size-5' />
                    Login with Google
                </Button>
                <Button disabled={false} variant="secondary" size="lg" className='w-full'>
                    <FaGithub className='mr-2 size-5' />
                    Login with Github
                </Button>
            </CardContent>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7 flex items-center justify-center'>
                <p>
                    Already have an account?
                    <Link href="/sign-in">
                        <span className='text-blue-700'>&nbsp;Sign In</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}

export default SignUpCard