"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ViewModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
    footer?: React.ReactNode
}

export default function ViewModal({ isOpen, onClose, title, children, footer }: ViewModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
                        {/* Close button is handled by Dialog primitive usually, but we can add custom if needed */}
                    </div>
                </DialogHeader>
                <div className="py-4">
                    {children}
                </div>
                {footer && (
                    <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
                        {footer}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
