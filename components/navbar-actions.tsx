'use client'

import { ShoppingBag } from 'lucide-react'
import Button from './ui/button'

const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center ga-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">



        <ShoppingBag size={20} color="white" />
      </Button>
    </div>
  )
}

export default NavbarActions
