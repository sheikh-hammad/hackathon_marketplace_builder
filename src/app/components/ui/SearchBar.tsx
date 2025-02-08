import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
    const [searchText, setSearchText] = useState("")
  return (
    <form action="" className="relative mx-auto w-max">
    <input
    value={searchText}
    onChange={(e) => setSearchText( e.target.value)}
      type="search"
      onBlur={() => setSearchText("")}
      className="peer  pl-12  border-2 text-gray-400 placeholder-shown:w-12 border-transparent cursor-pointer relative z-10 h-10 w-12 bg-transparent px-1 outline-none  ease-in-out transition-all duration-300 focus:w-full focus:cursor-text focus:border-gray-400 rounded-lg focus:pl-16"
    />
    <Search
        className="absolute inset-y-0 my-auto h-8 w-12 stroke-gray-500 px-3.5 peer-focus:stroke-gray-400 cursor-pointer transition-all duration-1000"
        />
  </form>  )
}

export default SearchBar