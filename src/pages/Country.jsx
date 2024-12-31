import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/PostApi'
import Loader from '../components/UI/Loader'
import CountryCard from '../components/layout/CountryCard'
import SearchFilter from '../components/UI/SearchFilter'

const Country = () => {
  
  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState()
  const [filter, setFilter] = useState("all")


  useEffect(() => {
    startTransition(async()=>{
      const res = await getCountryData()
      setCountries(res.data)
    })
  
  }, [])

  if(isPending) return <Loader/>

// Here is an important logic

  const searchCountry = (country) => {
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country
  }

  const filterRegion = (country) => {
    if(filter === "all") return country
    return country.region === filter
  }

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  // console.log(countries, filterCountries)
  
  return (
    <section className='country-section'>
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
      <ul className='grid grid-four-cols container'>
        {
          filterCountries.map((curCountry, index)=>{
            return <CountryCard country={curCountry} key={index} />
          })
        }
      </ul>

    </section>
  )
}

export default Country
