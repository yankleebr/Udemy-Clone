import { Category, Course } from "@prisma/client";

type CourseWithProgressWithCategory = Course & {
  category:Category | null
  chapters:{id: string} []
  progress:number | null
}

type GetCourses = {
  userId:string
  title?:string
  categoryId?:string
}

export const getCourses = async ({
  userId,
  title,
  categoryId
}:GetCourses): Promise<CourseWithProgressWithCategory[]> =>{
  try {
    
  } catch (error) {
    
  }
}