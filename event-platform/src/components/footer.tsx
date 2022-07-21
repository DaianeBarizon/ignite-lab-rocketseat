import { LogoFooter } from "../assets/icons/logo-footer";

export function Footer() {
  return (
    <footer className="w-full pt-6 mt-5 flex items-center justify-between bg-gray-700 border-t border-gray-600">
      <div className="flex items-center">
        <LogoFooter />
        <span className="text-gray-300 leading-relaxed ml-5">Rocketseat - Todos os direitos reservados</span>
      </div>
      <span className="text-gray-300 leading-relaxed">Políticas de privacidade</span>
    </footer>
  );
}
