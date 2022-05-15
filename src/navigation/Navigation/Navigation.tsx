import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import {AppNavigation} from "../AppNavigation"
import {AuthNavigation} from "../AuthNavigation"

import { useAuth } from "../../context/AuthContext/AuthContext";

const Navigation : React.FC = () => {
  const {isSignedIn} = useAuth();
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);


  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      {isSignedIn ? <AppNavigation/> : <AuthNavigation/>}
    </NavigationContainer>
  );
};

export default Navigation;