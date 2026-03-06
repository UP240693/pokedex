import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

interface PokemonsCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonsCardProps) {
  //agregamos la url para colocar imagenes en variable
  //split: arreglo y se divide entre cada uno de los elementos
  //at: retorna la posicion que se indica
  const id = props.url.split("/").filter(Boolean).at(-1);
  console.log(id);
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Pressable
      onPress={() => router.push("/new-screen")}
      style={({ pressed }) => [
        styles.PressableStyle,
        pressed && {
          //cambio de precioanrlo
          opacity: 0.5,
        },
      ]}
    >
      <Image
        source={{ uri: pokemonImageURL }} //se manda a llamar el url de la imagen
        style={{ width: 100, height: 100 }}
      ></Image>
      <Text>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  PressableStyle: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#ec0d0d",
  },
});
