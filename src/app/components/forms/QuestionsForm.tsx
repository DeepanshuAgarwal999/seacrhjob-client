"use client"

import { Questions } from '@/constants/questions'
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
import { useRouter } from "next/navigation"
import { axiosInstance } from '@/lib/axios.instance'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

// Create a schema dynamically based on the number of questions
const formSchema = z.object(
    Questions.reduce((acc, question) => {
        if (question.isOptional) {
            acc[question.id] = z.string().optional()
        } else {
            acc[question.id] = z.string().min(1, "This field is required")
        }
        return acc
    }, {} as Record<string, z.ZodString | z.ZodOptional<z.ZodString>>)
)

const QuestionsForm = ({ id }: { id: string }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: Questions.reduce((acc, question) => {
            acc[question.id] = ""
            return acc
        }, {} as Record<string, string>)
    })

    const session = useSession()
    const router = useRouter();

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        if (!session.data) {

            toast("Please login before submitting")
            router.push('/auth/login')
        }
        try {
            const { data } = await axiosInstance.post('/applications/create', {
                companyId: id,
                // @ts-ignore
                userId: session.data?.user.id
            })
            if (data) {
                toast("Application submitted successfully")
                router.push('/success')
            }
        } catch (error) {
            console.log(error)
        }
        // router.push(`/form/${id}/resume`)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className='border-2 rounded-lg border-dashed p-10 space-y-4'>
                    {Questions.map((question) => (
                        <FormField
                            key={question.id}
                            control={form.control}
                            name={question.id}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{question.question} <span className='text-red-500'>{!question.isOptional && "*"}</span></FormLabel>
                                    <FormControl>
                                        <Input type='text' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
                <Button type="submit" className="bg-[#2557A7] text-white w-full" variant={"ghost"}>Submit</Button>
            </form>
        </Form>
    )
}

export default QuestionsForm
