export const costSwitch = (param: string) => {
  switch (param) {
    case "Wood":
      return "https://cdn-icons-png.flaticon.com/512/2933/2933661.png";
      break;
    case "Stone":
      return "https://cdn-icons-png.flaticon.com/512/2206/2206663.png";
      break;
    case "Gold":
      return "https://cdn-icons.flaticon.com/png/512/2806/premium/2806459.png?token=exp=1648146783~hmac=e53aafb3e4d139e6510dfd86b03b6426";
      break;
    case "Food":
      return "https://cdn-icons-png.flaticon.com/512/3076/3076058.png";
      break;
    default:
      return null;
  }
};
