import React, { useState, createContext, useContext, useEffect } from "react";

const NavigationContext = createContext({});
const useNavigation = () => useContext(NavigationContext);

function NavigationProvider(props: any) {
  const [navigationData, setNavigationData] = useState({});

  return (
    <NavigationContext.Provider
      value={{ navigationData, setNavigationData }}
      {...props}
    />
  );
}

function withNavigationWatcher(Component: any) {
  return function (props: any) {
    const { path } = props.match;
    const { setNavigationData } = useNavigation() as any;

    useEffect(() => {
      setNavigationData({ currentPath: path });
    }, [path, setNavigationData]);

    return React.createElement(Component, props);
  };
}

export { NavigationProvider, useNavigation, withNavigationWatcher };
