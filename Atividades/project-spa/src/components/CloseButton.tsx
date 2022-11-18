import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton() {
    return(
        <Popover.Button className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 ' title="Fechar formulário de feedback">
            <X weight='bold' className="w-4 h-4 transition ease-in-out delay-150 hover:scale-150 hover:animate-pulse duration-300"/>
        </Popover.Button>

    )
}