"use client"

import React from 'react'
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
import { useRouter } from "next/navigation"
import FileUploader from '../FileUploader'
import { toast } from 'sonner'

const formSchema = z.object({
  resume: z.custom<File[]>()
})
const ResumeForm = ({ id }: { id: string }) => {
  const router = useRouter();
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resume: undefined
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.resume) {
      return toast("Please add your resume")
    }
    let formData;
    if (values.resume && values.resume.length > 0) {
      const blobFile = new Blob([values.resume[0]], {
        type: values.resume[0].type
      })
      formData = new FormData();
      formData.append('blobFile', blobFile)
      formData.append('fileName', values.resume[0].name)
    }

    router.push(`/form/${id}/questions`)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className='border-2 rounded-lg border-dashed p-10 flex justify-center'>
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FileUploader files={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        <Button type="submit" className="bg-[#2557A7] text-white w-full" variant={"ghost"}>Submit</Button>
      </form>
    </Form>
  )
}

export default ResumeForm