import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Computer {
  id: number;
  name: string;
  specs: string;
  status: 'free' | 'busy';
  price: number;
}

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  computers: Computer[];
  selectedComputer: Computer | null;
  setSelectedComputer: (computer: Computer | null) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  handleBooking: () => void;
}

const Header = ({
  activeSection,
  scrollToSection,
  computers,
  selectedComputer,
  setSelectedComputer,
  selectedTime,
  setSelectedTime,
  handleBooking
}: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b-2 border-lime-500/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
              <Icon name="Gamepad2" className="text-black" size={24} />
            </div>
            <h1 className="text-xl font-bold text-lime-500 glow-lime uppercase tracking-wider">UNDERGROUND</h1>
          </div>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'equipment', 'tournaments', 'prices', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-xs uppercase tracking-widest font-bold transition-colors relative ${
                  activeSection === section ? 'text-lime-500' : 'text-gray-400 hover:text-lime-500'
                }`}
              >
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime-500"></span>
                )}
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О клубе'}
                {section === 'equipment' && 'Оборудование'}
                {section === 'tournaments' && 'Турниры'}
                {section === 'prices' && 'Цены'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-lime-500 text-black hover:bg-lime-600 font-bold uppercase tracking-wider border-2 border-lime-500">
                Забронировать
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border-2 border-lime-500/50">
              <DialogHeader>
                <DialogTitle className="text-lime-500 text-2xl uppercase tracking-wider">Бронирование</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Выберите компьютер и время для бронирования
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="text-sm text-lime-500 mb-2 block uppercase tracking-wider font-bold">Компьютер</label>
                  <Select onValueChange={(value) => setSelectedComputer(computers.find(c => c.id === parseInt(value)) || null)}>
                    <SelectTrigger className="bg-black border-2 border-lime-500/30 hover:border-lime-500 text-gray-300">
                      <SelectValue placeholder="Выберите ПК" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-2 border-lime-500/50">
                      {computers.filter(pc => pc.status === 'free').map((pc) => (
                        <SelectItem key={pc.id} value={pc.id.toString()} className="text-gray-300 focus:text-lime-500">
                          {pc.name} - {pc.specs} ({pc.price} ₽/час)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-lime-500 mb-2 block uppercase tracking-wider font-bold">Время</label>
                  <Select onValueChange={setSelectedTime}>
                    <SelectTrigger className="bg-black border-2 border-lime-500/30 hover:border-lime-500 text-gray-300">
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-2 border-lime-500/50">
                      <SelectItem value="10:00" className="text-gray-300 focus:text-lime-500">10:00 - 12:00</SelectItem>
                      <SelectItem value="12:00" className="text-gray-300 focus:text-lime-500">12:00 - 14:00</SelectItem>
                      <SelectItem value="14:00" className="text-gray-300 focus:text-lime-500">14:00 - 16:00</SelectItem>
                      <SelectItem value="16:00" className="text-gray-300 focus:text-lime-500">16:00 - 18:00</SelectItem>
                      <SelectItem value="18:00" className="text-gray-300 focus:text-lime-500">18:00 - 20:00</SelectItem>
                      <SelectItem value="20:00" className="text-gray-300 focus:text-lime-500">20:00 - 22:00</SelectItem>
                      <SelectItem value="22:00" className="text-gray-300 focus:text-lime-500">22:00 - 00:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={handleBooking}
                  disabled={!selectedComputer || !selectedTime}
                  className="w-full bg-lime-500 text-black hover:bg-lime-600 font-bold uppercase tracking-wider border-2 border-lime-500"
                >
                  Подтвердить
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Header;
