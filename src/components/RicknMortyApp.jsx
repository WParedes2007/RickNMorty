import React, { useState } from 'react'
import SearchRick from './SearchRick'
import { GridRick } from './GridRick'
import useRick from '../hooks/useRick'
import { FilterRick } from './FilterRick'
import { PaginationRick } from './PaginationRick'

export const RicknMortyApp = () => {
    const [page, setPage] = useState(1)
    const [search,setSearch] = useState("")
    const [species, setSpecies] = useState("")

    const {character, info, speciesOptions} = useRick(page, search, species)

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleNextPage = () => {
        if (info && page < info.pages) {
            setPage(page + 1)
        }
    }
  
    
    return (
        <>
        <div className='container d-flex flex-row justify-content-center align-items-center mt-3 w-50'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRituBykJDfbBMeNym2UaQ9awQ1HgbN-JfQ&s'/>
        </div>
        <br></br>
        <div className='container d-flex flex-row justify-content-center align-items-center mt-3 w-50'>
            <SearchRick  setSearch={setSearch} setPage={setPage}/>
        </div>
            <br></br>

        <FilterRick species={species} setSpecies={setSpecies} setPage={setPage} speciesOptions={speciesOptions}/>

        <div>
        <GridRick char={character} />
        </div>
        
        <PaginationRick page={page} info={info} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage}/>
        </>
    )



}