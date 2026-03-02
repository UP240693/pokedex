import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    console.log("Entre en pantalla2);");
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=02";
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        console.log("Request ok");
      } else {
        console.log("Bard Requesr");
      }
    } catch (error) {
      console.log("Ocurrio un erro");
    }
  };

  return (
    <View
    /*style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}*/
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
