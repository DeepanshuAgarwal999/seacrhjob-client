"use client"
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from 'next/link'

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3, "Minimum 3 character required"),
    name: z.string().min(3, "Minimum 3 character required")
})
const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "john@doe.com",
            password: "john",
            name: "john"
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <section className="container mx-auto h-screen pt-20">
            <h1 className="text-4xl font-bold text-center">Register</h1>
            <div className="bg-white p-4 sm:p-8 rounded-lg border border-black mt-6 max-w-[450px] mx-auto">
                <h1 className="text-xl sm:text-2xl font-bold">Explore Endless Opportunity 🙂</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email address" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email address" {...field} />
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
                                            <Input type={showPassword ? "password" : "text"} placeholder="password" {...field} className="border-none" />
                                            <Button className="w-fit p-0 h-0" variant={'ghost'} onClick={() => setShowPassword((prev) => !prev)}> {!showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</Button>
                                        </div>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <p className="text-xs">
                            Already have an Account ? <Link href={'/auth/login'} className="underline text-blue-800">Login now</Link>
                        </p>
                        <Button type="submit" className="bg-blue-900 hover:bg-blue-900 hover:opacity-80 w-full">Submit</Button>

                    </form>
                </Form >
            </div >
        </section >
    )
}

export default Register