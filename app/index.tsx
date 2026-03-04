import PokemonCard from "@/components/pokemonCard";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("Entre en pantalla2);");
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        console.log("Request ok");
        const data = await response.json();
        setResults(data.results);
        console.log(data);
      } else {
        console.log("Bard Requesr");
      }
    } catch (error) {
      console.log("Ocurrio un erro");
    }
  };

  return (
    <View>
      {results.map((item) => {
        return (
          <PokemonCard
            key={item.card}
            name={item.name}
            url={item.url}
          ></PokemonCard>
        );
      })}
    </View>
  );
}
