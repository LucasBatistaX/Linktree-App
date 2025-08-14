import { Linking } from "react-native";
import { Stacks } from "../screens/VitaeScreen/Vitae";

export function LinkGitHub() {
  return Linking.openURL("https://github.com/LucasBatistaX");
}

export function LinkLinkedin() {
  return Linking.openURL(
    "https://www.linkedin.com/in/lucas-batista-327704221/"
  );
}

export function LinkWhatsApp() {
  return Linking.openURL(
    "https://wa.me/5511946338557?text=Ol%C3%A1%20Lucas,%20podemos%20conversar?"
  );
}

export function LinkInstagram() {
  return Linking.openURL("https://www.instagram.com/Lucasbatista.dev/#");
}
