import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSections from '@/components/ContentSections';
import Footer from '@/components/Footer';

interface Computer {
  id: number;
  name: string;
  specs: string;
  status: 'free' | 'busy';
  price: number;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedComputer, setSelectedComputer] = useState<Computer | null>(null);
  const [selectedTime, setSelectedTime] = useState('');

  const computers: Computer[] = [
    { id: 1, name: 'PC-01 ULTRA', specs: 'RTX 4090 | i9-13900K | 32GB', status: 'free', price: 350 },
    { id: 2, name: 'PC-02 PRO', specs: 'RTX 4080 | i7-13700K | 32GB', status: 'busy', price: 300 },
    { id: 3, name: 'PC-03 PRO', specs: 'RTX 4080 | i7-13700K | 32GB', status: 'free', price: 300 },
    { id: 4, name: 'PC-04 PLUS', specs: 'RTX 4070Ti | i5-13600K | 16GB', status: 'free', price: 250 },
    { id: 5, name: 'PC-05 PLUS', specs: 'RTX 4070Ti | i5-13600K | 16GB', status: 'busy', price: 250 },
    { id: 6, name: 'PC-06 STANDARD', specs: 'RTX 4060Ti | i5-12600K | 16GB', status: 'free', price: 200 },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBooking = () => {
    if (selectedComputer && selectedTime) {
      alert(`Компьютер ${selectedComputer.name} забронирован на ${selectedTime}!`);
      setSelectedComputer(null);
      setSelectedTime('');
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        computers={computers}
        selectedComputer={selectedComputer}
        setSelectedComputer={setSelectedComputer}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        handleBooking={handleBooking}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <ContentSections computers={computers} />
      <Footer />
    </div>
  );
};

export default Index;
