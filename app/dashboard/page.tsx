"use client"


import { useState } from "react"
import DashboardLayout from "@/app/components/Dashboard"
import CreateTaskModal from "@/app/components/CreateTaskModal"
import { PlusIcon } from "@heroicons/react/24/solid"
import EmptyState from "@/app/components/EmptyState"

export default function Dashboard() {
    const [open, setOpen] = useState<boolean>(false)
    const [tasks, setTasks] = useState<any[] | null>(null)
    
    return (
        <DashboardLayout>
            <div className="flex-1 flex flex-col w-full justify-start gap-y-10 py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex w-full items-center justify-between mt-10">
                    <h1 className="flex items-center justify-center text-lg text-slate-600 font-semibold">
                    Recent Tasks 
                    <p className="ml-2 text-sm font-light">({ tasks ? tasks.length : 0 })</p>
                    </h1>
                    {
                    tasks && tasks.length > 0 && 
                    <button 
                        onClick={() => setOpen(true)}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm text-white bg-blue-700 rounded-sm"
                    >
                        <PlusIcon className="stroke-2 w-4 h-4 mr-2"/>
                        New Task
                    </button>
                    }
                </div>
                <div>
                {
                    tasks && tasks.length ?
                    <></>
                    : <EmptyState setOpen={setOpen}/>
                }
                </div>
                {
                    open && 
                    <CreateTaskModal open={open} setOpen={setOpen}/>
                }
            </div>
        </DashboardLayout>
    )
}