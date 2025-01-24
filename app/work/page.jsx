"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import "../../styles/fetchPage.scss";
import { GalleryItem } from "@/components";
export default function FetchPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    handleGetBanners();
  }, []);

  const handleGetBanners = useCallback(async () => {
    try {
      const response = await fetch(
        // `${process.env.NEXT_PUBLIC_API_URL}/promotional-banner?position=profile`,
        `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`,
        {
          method: "GET",
          // headers: {
          //   Authorization: `Bearer ${Cookies.get('token')}`,
          // },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const detailPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonDetailsResponse = await fetch(pokemon.url);
            const pokemonDetails = await pokemonDetailsResponse.json();

            return {
              name: pokemon.name,
              image: pokemonDetails.sprites.other.dream_world.front_default,
            };
          })
        );
        setPokemons(detailPokemon);
        console.log("detailPokemon", detailPokemon);
      }
    } catch (error) {
      console.log("error fetching banners", error);
    }
  }, [pokemons]);

  return (
    <div className="container-wrapper">
      <div className="gallery">
        {pokemons.map((pokemon, index) => (
          <div key={index}>
            {/* <p>YUDA</p> */}
            <GalleryItem name={pokemon.name} image={pokemon.image} />
          </div>
        ))}
      </div>
      <div className="lg-title">
        <span>Pokemon name i hover</span>
      </div>
    </div>
  );
}
