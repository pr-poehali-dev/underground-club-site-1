import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-bold text-lime-500 glow-lime-strong mb-6">
          АНДЕРГРАУНД
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Компьютерный клуб нового поколения. Мощное железо, киберспортивная атмосфера, 
          профессиональные турниры
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            onClick={() => scrollToSection('equipment')}
            size="lg" 
            className="bg-lime-500 text-[#1A1F2C] hover:bg-lime-600 font-bold uppercase"
          >
            <Icon name="Monitor" className="mr-2" size={20} />
            Наше оборудование
          </Button>
          <Button 
            onClick={() => scrollToSection('prices')}
            size="lg" 
            variant="outline" 
            className="border-lime-500 text-lime-500 hover:bg-lime-500/10 font-bold uppercase"
          >
            <Icon name="Clock" className="mr-2" size={20} />
            Посмотреть цены
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-[#2A2F3C] p-6 rounded-lg border border-lime-500/30 border-lime-glow">
            <Icon name="Zap" className="text-lime-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-lime-500 mb-2">Топовое железо</h3>
            <p className="text-gray-400">RTX 4090, i9-13900K, 240Hz мониторы</p>
          </div>
          <div className="bg-[#2A2F3C] p-6 rounded-lg border border-lime-500/30 border-lime-glow">
            <Icon name="Trophy" className="text-lime-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-lime-500 mb-2">Турниры</h3>
            <p className="text-gray-400">Еженедельные соревнования с призами</p>
          </div>
          <div className="bg-[#2A2F3C] p-6 rounded-lg border border-lime-500/30 border-lime-glow">
            <Icon name="Users" className="text-lime-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-lime-500 mb-2">Комьюнити</h3>
            <p className="text-gray-400">Сообщество профессиональных игроков</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
