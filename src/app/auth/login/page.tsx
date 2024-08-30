"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import googleLogo from '../../../../public/assets/icons/google.svg'
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"



const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Minimum 3 character required")
})

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    // 1. Define your form.
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "john@doe.com",
            password: "123456"
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {

        const result = await signIn('credentials', {
            redirect: true,
            callbackUrl: '/',
            email: values.email,
            password: values.password,
        });
        if (result && result.status === 200) {
            router.push('/')
        }
    }

    const handleLoginWithGoogle = async () => {
        signIn("google", {
            redirect: true,
            callbackUrl: "/",
        });

    }
    return (
        <section className="container mx-auto h-screen pt-20">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <div className="bg-white p-4 sm:p-8 rounded-lg border border-black mt-6 max-w-[450px] mx-auto">
                <h1 className="text-xl sm:text-2xl font-bold">Welcome Back 👋</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email address" {...field} className="outline-none" />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl className="flex items-center justify-between border rounded-md pr-2">
                                        <div>
                                            <Input type={showPassword ? "password" : "text"} placeholder="password" {...field} className="border-none outline-none" />
                                            <Button className="w-fit p-0 h-0" variant={'ghost'} onClick={() => setShowPassword((prev) => !prev)}> {!showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <p className="text-xs">
                            New here ? <Link href={'/auth/register'} className="underline text-blue-800">Register now</Link>
                        </p>
                        <Button type="submit" className="bg-blue-900 hover:bg-blue-900 hover:opacity-80 w-full">Submit</Button>
                        <Button type="button" className=" w-full flex items-center justify-center bg-white hover:bg-gray-50 text-black gap-2 rounded-md border font-semibold border-black" onClick={handleLoginWithGoogle}>
                            <Image src={googleLogo} width={24} height={24} alt="google" />
                            <span>Login with Google</span>
                        </Button>
                    </form>
                </Form >
            </div >
        </section >
    )
}
