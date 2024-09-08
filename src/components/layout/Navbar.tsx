import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import switchLanguage from "../../lib/switchLanguage";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 py-6 container flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold">
        {t("logo")}
      </Link>

      <button onClick={() => switchLanguage()}>
        change
      </button>
    </header>
  );
}
