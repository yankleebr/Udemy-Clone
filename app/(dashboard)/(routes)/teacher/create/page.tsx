'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import axios from 'axios'

const formSchema = z.object({
  title:z.string().min(1,{
    message:'Title is required'
  })
})

const CreatePage = () =>{
  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      title:''
    },
  })

  const {isSubmitting, isValid} = form.formState

  const onSubmit = (values:z.infer<typeof formSchema>) =>{
    console.log(values)
  }
  return(
    <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
      <div>
        <h1>
          Name your course
        </h1>
      </div>
    </div>
  )
}

export default CreatePage