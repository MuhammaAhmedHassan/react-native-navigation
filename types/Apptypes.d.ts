import { NavigatorScreenParams } from "@react-navigation/core";

export type RootStackParamList = {
  App: undefined;
  Auth: undefined;
};

export type DrawerParamList = {
  Home: BottomTabsParamList;
  Profile: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type BottomTabsParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  SearchTab: NavigatorScreenParams<SearchStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  Details: { name: string };
};

export type SearchStackParamList = {
  Search: undefined;
  Search2: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
};
