import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

// Pages
import HomeScreen from "./index";
import SettingsScreen from "./settings";
import EmotionsScreen from "./emotions";
import FoodScreen from "./food";
import FruitScreen from "./fruit";
import VegetableScreen from "./vegetables";
import DessertScreen from "./dessert";
import ClothingScreen from "./clothing";
import ColorScreen from "./colors";
import ShapeScreen from "./shapes";
import TransportationScreen from "./transportation";
import WeatherScreen from "./weather";
import BodyScreen from "./body";
import HobbiesScreen from "./hobbies";
import HolidaysScreen from "./holidays";
import AnimalsScreen from "./animals";
import BirdScreen from "./bird";
import BugScreen from "./bug";
import FarmScreen from "./farm";
import ForestScreen from "./forest";
import JungleScreen from "./jungle";
import MythologicalScreen from "./mythological";
import WaterScreen from "./ocean-water";
import OtherScreen from "./other";
import PetScreen from "./pet";
import PrehistoricScreen from "./prehistoric";
import ReptileScreen from "./reptile-amphibian";

type TabParamList = {
  Home: undefined;
  Settings: undefined;
  Emotions: undefined;
  Food: undefined;
  Fruit: undefined;
  Vegetable: undefined;
  Dessert: undefined;
  Clothing: undefined;
  Colors: undefined;
  Shapes: undefined;
  Transportation: undefined;
  Weather: undefined;
  Body: undefined;
  Hobbies: undefined;
  Holidays: undefined;
  Animals: undefined;
  Bird: undefined;
  Bug: undefined;
  Farm: undefined;
  Forest: undefined;
  Jungle: undefined;
  Mythological: undefined;
  Water: undefined;
  Other: undefined;
  Pet: undefined;
  Prehistoric: undefined;
  Reptile: undefined;
};

type FoodParamList = {
  Fruit: undefined;
  Vegetable: undefined;
  Dessert: undefined;
};

type AnimalsParamList = {
  Bird: undefined;
  Bug: undefined;
  Farm: undefined;
  Forest: undefined;
  Jungle: undefined;
  Mythological: undefined;
  Water: undefined;
  Other: undefined;
  Pet: undefined;
  Prehistoric: undefined;
  Reptile: undefined;
}

const TabParamListValues = [
  "Home",
  "Emotions",
  "Food",
  "Clothing",
  "Colors",
  "Shapes",
  "Transportation",
  "Weather",
  "Body",
  "Hobbies",
  "Holidays",
];
const FoodParamListValues = ["Fruit", "Vegetable", "Dessert"];
const AnimalsParamListValues = ["Bird", "Bug", "Farm", "Forest", "Jungle", "Mythological", "Water", "Other", "Pet", "Prehistoric", "Reptile"];

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Emotions"
        component={EmotionsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Fruit"
        component={FruitScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Vegetable"
        component={VegetableScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Dessert"
        component={DessertScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Clothing"
        component={ClothingScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Colors"
        component={ColorScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Shapes"
        component={ShapeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Transportation"
        component={TransportationScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Body"
        component={BodyScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Hobbies"
        component={HobbiesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Holidays"
        component={HolidaysScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Animals"
        component={AnimalsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Bird"
        component={BirdScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Bug"
        component={BugScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Farm"
        component={FarmScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Forest"
        component={ForestScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Jungle"
        component={JungleScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Mythological"
        component={MythologicalScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Water"
        component={WaterScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Pet"
        component={PetScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Prehistoric"
        component={PrehistoricScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Reptile"
        component={ReptileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Other"
        component={OtherScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

export { TabParamList, TabParamListValues, FoodParamList, FoodParamListValues, AnimalsParamList, AnimalsParamListValues };
