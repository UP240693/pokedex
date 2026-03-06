import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function PokemonDetailsScreen() {
  const params = useLocalSearchParams();
  return (
    <View>
      <text>{params.name}</text>
    </View>
  );
}
