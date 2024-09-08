import i18n from "../utils/i18n";

export default function switchLanguage(lng?: string) {
  const currentLng = i18n.language;
  if (!lng) {
    if (currentLng === "ar") {
      i18n.changeLanguage("en");
      localStorage.setItem("locale", "en");
    } else {
      i18n.changeLanguage("ar");
      localStorage.setItem("locale", "ar");
    }
    return;
  }
  localStorage.setItem("locale", lng);
  i18n.changeLanguage(lng);
}
