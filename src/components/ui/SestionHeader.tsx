import React from 'react'


interface HeaderProps {
    title: string
    button?: React.ReactNode
  }

export default function SectionHeader({title, button}: HeaderProps) {
  return (
    <div className="flex justify-between">
          <h4 className="flex text-xl font-semibold items-center gap-2 mb-3">
            <span className="w-4 rounded-sm bg-primary h-7"></span>
            {title}
          </h4>
          {button ? button : ''}
        </div>
  )
}
