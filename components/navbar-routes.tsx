'use client'

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, Search } from "lucide-react"
import Link from "next/link"
import { SearchInput } from "./searchInput"

export const NavbarRoutes = () =>{
  const pathnme = usePathname()
  
  const isTeacherPage = pathnme?.startsWith('/teacher')
  const isPlayerPage = pathnme?.includes('/chapter')
  const isSearchPage = pathnme === '/search'


  return(
    <>
      {isSearchPage &&(
        <div className="hidden md:block">
          <SearchInput/>
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isPlayerPage ?(
          <Link href={'/'}>
            <Button size={'sm'} variant={'ghost'}>
              <LogOut className="h-4 w-4 mr-2"/>
                Exit
            </Button>
          </Link>
          
        ):(
          <Link href={'/teacher/courses'}>
            <Button size={'sm'} variant={'ghost'}>
              Teacher Mode
            </Button>
          </Link>
        )}
        <UserButton
          afterSignOutUrl="/"
        />
      </div>
    </>
  )

}