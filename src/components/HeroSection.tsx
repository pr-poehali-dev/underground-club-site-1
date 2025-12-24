import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gamepad-pattern opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-lime-500 glow-lime-strong mb-4">
            UNDERGROUND
          </h1>
          <p className="text-gray-400 text-lg uppercase tracking-widest mb-8">Computer Club</p>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Компьютерный клуб нового поколения. Мощное железо, киберспортивная атмосфера, 
            профессиональные турниры
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => scrollToSection('equipment')}
              size="lg" 
              className="bg-lime-500 text-black hover:bg-lime-600 font-bold uppercase tracking-wider"
            >
              <Icon name="Monitor" className="mr-2" size={20} />
              Оборудование
            </Button>
            <Button 
              onClick={() => scrollToSection('prices')}
              size="lg" 
              variant="outline" 
              className="border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black font-bold uppercase tracking-wider"
            >
              <Icon name="Clock" className="mr-2" size={20} />
              Цены
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg border-2 border-lime-500/30 hover:border-lime-500 transition-all group">
            <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 rounded-lg transition-all"></div>
            <Icon name="Zap" className="text-lime-500 mx-auto mb-4 relative z-10" size={48} />
            <h3 className="text-xl font-bold text-lime-500 mb-2 relative z-10 uppercase tracking-wider">Топовое железо</h3>
            <p className="text-gray-300 relative z-10">RTX 4090, i9-13900K, 240Hz мониторы</p>
          </div>
          <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg border-2 border-lime-500/30 hover:border-lime-500 transition-all group">
            <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 rounded-lg transition-all"></div>
            <Icon name="Trophy" className="text-lime-500 mx-auto mb-4 relative z-10" size={48} />
            <h3 className="text-xl font-bold text-lime-500 mb-2 relative z-10 uppercase tracking-wider">Турниры</h3>
            <p className="text-gray-300 relative z-10">Еженедельные соревнования с призами</p>
          </div>
          <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg border-2 border-lime-500/30 hover:border-lime-500 transition-all group">
            <div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 rounded-lg transition-all"></div>
            <Icon name="Users" className="text-lime-500 mx-auto mb-4 relative z-10" size={48} />
            <h3 className="text-xl font-bold text-lime-500 mb-2 relative z-10 uppercase tracking-wider">Комьюнити</h3>
            <p className="text-gray-300 relative z-10">Сообщество профессиональных игроков</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;