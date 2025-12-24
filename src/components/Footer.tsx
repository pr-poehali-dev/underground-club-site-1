import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] border-t border-lime-500/20 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon name="Gamepad2" className="text-lime-500" size={24} />
          <span className="text-xl font-bold text-lime-500">АНДЕРГРАУНД</span>
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 Компьютерный клуб "Андерграунд". Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
