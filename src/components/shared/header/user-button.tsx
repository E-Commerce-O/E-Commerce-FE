
import { Button, buttonVariants } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import {auth, logOut} from "@/lib/api/user";

// export default async function UserButton() {
//     const session = await auth()
//     return (
//         <div className='flex gap-2 items-center'>
//             <DropdownMenu>
//                 <DropdownMenuTrigger className='header-button' asChild>
//                     <div className='flex items-center'>
//                         <div className='flex flex-col text-xs text-left'>
//                             <span>Hello, {session ? session.fullName : 'sign in'}</span>
//                             <span className='font-bold'>Account & Orders</span>
//                         </div>
//                         <ChevronDown />
//                     </div>
//                 </DropdownMenuTrigger>
//                 {session ? (
//                     <DropdownMenuContent className='w-56' align='end' forceMount>
//                         <DropdownMenuLabel className='font-normal'>
//                             <div className='flex flex-col space-y-1'>
//                                 <p className='text-sm font-medium leading-none'>
//                                     {session.username}
//                                 </p>
//                                 <p className='text-xs leading-none text-muted-foreground'>
//                                     {session.username}
//                                 </p>
//                             </div>
//                         </DropdownMenuLabel>
//                         <DropdownMenuGroup>
//                             <Link className='w-full' href='/account'>
//                                 <DropdownMenuItem>Your account</DropdownMenuItem>
//                             </Link>
//                             <Link className='w-full' href='/account/orders'>
//                                 <DropdownMenuItem>Your orders</DropdownMenuItem>
//                             </Link>
//
//                             {session.role === 'Admin' && (
//                                 <Link className='w-full' href='/admin/overview'>
//                                     <DropdownMenuItem>Admin</DropdownMenuItem>
//                                 </Link>
//                             )}
//                         </DropdownMenuGroup>
//                         <DropdownMenuItem className='p-0 mb-1'>
//                             <form action={logOut} className='w-full'>
//                                 <Button
//                                     className='w-full py-4 px-2 h-4 justify-start'
//                                     variant='ghost'
//                                 >
//                                     Sign out
//                                 </Button>
//                             </form>
//                         </DropdownMenuItem>
//                     </DropdownMenuContent>
//                 ) : (
//                     <DropdownMenuContent className='w-56' align='end' forceMount>
//                         <DropdownMenuGroup>
//                             <DropdownMenuItem>
//                                 <Link
//                                     className={cn(buttonVariants(), 'w-full')}
//                                     href='/sign-in'
//                                 >
//                                     Sign in
//                                 </Link>
//                             </DropdownMenuItem>
//                         </DropdownMenuGroup>
//                         <DropdownMenuLabel>
//                             <div className='font-normal'>
//                                 New Customer? <Link href='/sign-up'>Sign up</Link>
//                             </div>
//                         </DropdownMenuLabel>
//                     </DropdownMenuContent>
//                 )}
//             </DropdownMenu>
//         </div>
//     )
// }