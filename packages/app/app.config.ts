const appName = "green";

const configs = {
  green: {
    name: "green",
    icon: "assets/green/icon.png",
    splash: {
      image: "assets/green/splash.png",
    },
    android: {
      package: "com.green",
    },
    ios: {
      bundleIdentifier: "com.green",
    },
  },
  orbitall: {
    name: "orbitall",
    icon: "assets/orbitall/icon.png",
    splash: {
      image: "assets/orbitall/splash.png",
    },
    android: {
      package: "com.orbitall",
    },
    ios: {
      bundleIdentifier: "com.orbitall",
    },
  },
};

export default ({ config }) => {
  return {
    ...configs[appName],
  };
};