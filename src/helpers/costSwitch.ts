export const costSwitch: (param: string) => string | null = (param) => {
  switch (param) {
    case "Wood":
      return "https://cdn-icons-png.flaticon.com/512/2933/2933661.png";
      break;
    case "Stone":
      return "https://cdn-icons-png.flaticon.com/512/2206/2206663.png";
      break;
    case "Gold":
      return "https://cdn-icons-png.flaticon.com/512/2933/2933116.png";
      break;
    case "Food":
      return "https://cdn-icons-png.flaticon.com/512/3076/3076058.png";
      break;
    default:
      return null;
  }
};
