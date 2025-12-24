import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const frames = [
    {
      title: 'Frame 1',
      image: 'https://cdn.poehali.dev/files/Скриншот 25-12-2025 005211.jpg',
      labels: ['О НАС', 'КЛУБ', 'ЦЕНЫ']
    },
    {
      title: 'Frame 2',
      image: 'https://cdn.poehali.dev/files/Скриншот 25-12-2025 005211.jpg',
      labels: ['АКЦИИ', 'НОВОСТИ', 'РАБОТА']
    }
  ];

  return (
    <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gamepad-pattern opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-lime-500/30 hover:border-lime-500 transition-all">
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${frames[0].image})` }}>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute top-4 left-4">
                <div className="text-lime-500 font-bold text-sm mb-2">{frames[0].title}</div>
                <div className="flex gap-2">
                  {frames[0].labels.map((label, idx) => (
                    <span key={idx} className="text-lime-500 text-xs uppercase tracking-wider">{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-lime-500/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-lime-500 to-lime-700 rounded-full flex items-center justify-center border-4 border-lime-500/50">
                  <img 
                    src="https://cdn.poehali.dev/files/Скриншот 25-12-2025 005211.jpg" 
                    alt="UNDERGROUND Logo" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-lime-500 glow-lime-strong mb-2">
                UNDERGROUND
              </h1>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Computer Club</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-lime-500/30 hover:border-lime-500 transition-all">
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${frames[1].image})` }}>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute top-4 left-4">
                <div className="text-lime-500 font-bold text-sm mb-2">{frames[1].title}</div>
                <div className="flex gap-2">
                  {frames[1].labels.map((label, idx) => (
                    <span key={idx} className="text-lime-500 text-xs uppercase tracking-wider">{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
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
