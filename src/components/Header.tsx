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
    <nav className="fixed top-0 w-full z-50 bg-[#1A1F2C]/95 backdrop-blur-sm border-b border-lime-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" className="text-lime-500" size={32} />
            <h1 className="text-2xl font-bold text-lime-500 glow-lime">АНДЕРГРАУНД</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'equipment', 'tournaments', 'prices', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider transition-colors hover:text-lime-500 ${
                  activeSection === section ? 'text-lime-500 glow-lime' : 'text-gray-400'
                }`}
              >
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
              <Button className="bg-lime-500 text-[#1A1F2C] hover:bg-lime-600 font-bold uppercase">
                Забронировать
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#2A2F3C] border-lime-500/30">
              <DialogHeader>
                <DialogTitle className="text-lime-500 text-xl">Бронирование компьютера</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Выберите компьютер и время для бронирования
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Выберите компьютер</label>
                  <Select onValueChange={(value) => setSelectedComputer(computers.find(c => c.id === parseInt(value)) || null)}>
                    <SelectTrigger className="bg-[#1A1F2C] border-lime-500/30">
                      <SelectValue placeholder="Выберите ПК" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2A2F3C] border-lime-500/30">
                      {computers.filter(pc => pc.status === 'free').map((pc) => (
                        <SelectItem key={pc.id} value={pc.id.toString()}>
                          {pc.name} - {pc.specs} ({pc.price} ₽/час)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Выберите время</label>
                  <Select onValueChange={setSelectedTime}>
                    <SelectTrigger className="bg-[#1A1F2C] border-lime-500/30">
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2A2F3C] border-lime-500/30">
                      <SelectItem value="10:00">10:00 - 12:00</SelectItem>
                      <SelectItem value="12:00">12:00 - 14:00</SelectItem>
                      <SelectItem value="14:00">14:00 - 16:00</SelectItem>
                      <SelectItem value="16:00">16:00 - 18:00</SelectItem>
                      <SelectItem value="18:00">18:00 - 20:00</SelectItem>
                      <SelectItem value="20:00">20:00 - 22:00</SelectItem>
                      <SelectItem value="22:00">22:00 - 00:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={handleBooking}
                  disabled={!selectedComputer || !selectedTime}
                  className="w-full bg-lime-500 text-[#1A1F2C] hover:bg-lime-600 font-bold"
                >
                  Подтвердить бронирование
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
