import PokemonCard from "@/components/pokemonCard";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function Index() {
  //any: cualquier valor
  const [results, setResults] = useState<any[]>([]);

  //function getPokemons2 () {}
  useEffect(() => {
    console.log("entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    //parametro
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, { method: "GET" });

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        setResults(data.results); //guardar data en el setResult para utilizar el valor de data
      } else {
        console.log("bard request");
      }
    } catch (error) {
      console.log("ocurrio un error");
    }
  };
  //item: valores de arreglos
  //map: retornar algun areglo ya hecho
  return (
    <ScrollView>
      {results.map((item) => {
        return (
          <PokemonCard
            key={item.name}
            name={item.name}
            url={item.url}
          ></PokemonCard>
        );
      })}
    </ScrollView>
  );
}
