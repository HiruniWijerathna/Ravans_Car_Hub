"use client";

import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { fuels, manufacturers, yearsOfProduction } from "@constants";
import { ShowMore, SearchBar, CustomFilter, Hero, CarCard } from "@components";


export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2024,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 20,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1|| !allCars;

 

  return (
    <main className='overflow-hidden '>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width dark:bg-gray-800 dark:text-blue-100' id='discover' >
        <div className='home__text-container dark:text-blue-100'>
          <h1 className='text-4xl font-extrabold dark:text-blue-100'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
           <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            
             <ShowMore
               pageNumber={searchParams.limit ? Number(searchParams.limit) / 10 : 2}
               isNext={allCars.length < (searchParams.limit ? Number(searchParams.limit) : 20)}
             />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-xl font-bold text-black'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
