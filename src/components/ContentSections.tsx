import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Computer {
  id: number;
  name: string;
  specs: string;
  status: 'free' | 'busy';
  price: number;
}

interface ContentSectionsProps {
  computers: Computer[];
}

const ContentSections = ({ computers }: ContentSectionsProps) => {
  const [selectedTime, setSelectedTime] = useState('');

  const tournaments = [
    { name: 'CS2 Championship', date: '15 января 2025', prize: '100 000 ₽', status: 'Регистрация открыта' },
    { name: 'Dota 2 Winter Cup', date: '22 января 2025', prize: '150 000 ₽', status: 'Скоро' },
    { name: 'Valorant Weekly', date: 'Каждую субботу', prize: '25 000 ₽', status: 'Активен' },
  ];

  const prices = [
    { title: 'Утренний тариф', time: '10:00 - 15:00', price: '150 ₽/час', discount: '-25%' },
    { title: 'Дневной тариф', time: '15:00 - 20:00', price: '200 ₽/час', discount: '' },
    { title: 'Вечерний тариф', time: '20:00 - 02:00', price: '250 ₽/час', discount: '' },
    { title: 'Ночной тариф', time: '02:00 - 10:00', price: '100 ₽/час', discount: '-50%' },
  ];

  return (
    <>
      <section id="about" className="py-20 px-4 bg-[#222833]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-500 glow-lime mb-8 text-center">О клубе</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                <span className="text-lime-500 font-bold">АНДЕРГРАУНД</span> — это не просто компьютерный клуб. 
                Это место, где собираются настоящие киберспортсмены и любители игр.
              </p>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                Мы создали пространство с новейшим оборудованием, профессиональной периферией 
                и атмосферой, которая мотивирует на победы.
              </p>
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-lime-500" size={24} />
                  <span className="text-gray-300">Работаем 24/7 без выходных</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-lime-500" size={24} />
                  <span className="text-gray-300">30+ игровых мест</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-lime-500" size={24} />
                  <span className="text-gray-300">Высокоскоростной интернет 1 Гбит/с</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-lime-500" size={24} />
                  <span className="text-gray-300">Кухня с напитками и снеками</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-lime-500" size={24} />
                  <span className="text-gray-300">VIP-комнаты для команд</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-500 glow-lime mb-12 text-center">Оборудование</h2>
          <Tabs defaultValue="pcs" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-[#2A2F3C] border border-lime-500/30">
              <TabsTrigger value="pcs" className="data-[state=active]:bg-lime-500 data-[state=active]:text-[#1A1F2C]">
                Компьютеры
              </TabsTrigger>
              <TabsTrigger value="peripherals" className="data-[state=active]:bg-lime-500 data-[state=active]:text-[#1A1F2C]">
                Периферия
              </TabsTrigger>
              <TabsTrigger value="furniture" className="data-[state=active]:bg-lime-500 data-[state=active]:text-[#1A1F2C]">
                Мебель
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pcs" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {computers.map((pc) => (
                  <Card key={pc.id} className="bg-[#2A2F3C] border-lime-500/30 border-lime-glow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lime-500">{pc.name}</CardTitle>
                        <Badge variant={pc.status === 'free' ? 'default' : 'secondary'} 
                               className={pc.status === 'free' ? 'bg-lime-500 text-[#1A1F2C]' : 'bg-gray-600'}>
                          {pc.status === 'free' ? 'Свободен' : 'Занят'}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400">{pc.specs}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-lime-500">{pc.price} ₽/час</span>
                        {pc.status === 'free' && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" className="bg-lime-500 text-[#1A1F2C] hover:bg-lime-600">
                                Забронировать
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-[#2A2F3C] border-lime-500/30">
                              <DialogHeader>
                                <DialogTitle className="text-lime-500">Бронирование {pc.name}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
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
                                  </SelectContent>
                                </Select>
                                <Button 
                                  onClick={() => {
                                    if (selectedTime) {
                                      alert(`${pc.name} забронирован на ${selectedTime}!`);
                                      setSelectedTime('');
                                    }
                                  }}
                                  className="w-full bg-lime-500 text-[#1A1F2C] hover:bg-lime-600"
                                >
                                  Подтвердить
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="peripherals" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-[#2A2F3C] border-lime-500/30">
                  <CardHeader>
                    <Icon name="Mouse" className="text-lime-500 mb-2" size={32} />
                    <CardTitle className="text-lime-500">Мышки</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">Logitech G Pro X Superlight</p>
                    <p className="text-gray-400 text-sm">25600 DPI, беспроводная</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A2F3C] border-lime-500/30">
                  <CardHeader>
                    <Icon name="Keyboard" className="text-lime-500 mb-2" size={32} />
                    <CardTitle className="text-lime-500">Клавиатуры</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">SteelSeries Apex Pro TKL</p>
                    <p className="text-gray-400 text-sm">Механика, RGB подсветка</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A2F3C] border-lime-500/30">
                  <CardHeader>
                    <Icon name="Headphones" className="text-lime-500 mb-2" size={32} />
                    <CardTitle className="text-lime-500">Наушники</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">HyperX Cloud Alpha</p>
                    <p className="text-gray-400 text-sm">7.1 звук, шумоподавление</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="furniture" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <Card className="bg-[#2A2F3C] border-lime-500/30">
                  <CardHeader>
                    <Icon name="Armchair" className="text-lime-500 mb-2" size={32} />
                    <CardTitle className="text-lime-500">Кресла</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">DXRacer Formula Series</p>
                    <p className="text-gray-400 text-sm">Эргономичные геймерские кресла с поддержкой спины</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#2A2F3C] border-lime-500/30">
                  <CardHeader>
                    <Icon name="Monitor" className="text-lime-500 mb-2" size={32} />
                    <CardTitle className="text-lime-500">Мониторы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">ASUS ROG Swift 27" 240Hz</p>
                    <p className="text-gray-400 text-sm">QHD разрешение, 1ms отклик, G-Sync</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tournaments" className="py-20 px-4 bg-[#222833]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-500 glow-lime mb-12 text-center">Турниры</h2>
          <div className="space-y-6">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="bg-[#2A2F3C] border-lime-500/30 border-lime-glow">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl text-lime-500 mb-2">{tournament.name}</CardTitle>
                      <CardDescription className="text-gray-400 flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        {tournament.date}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-lime-500 mb-2">{tournament.prize}</div>
                      <Badge className={
                        tournament.status === 'Регистрация открыта' 
                          ? 'bg-lime-500 text-[#1A1F2C]' 
                          : tournament.status === 'Активен'
                          ? 'bg-lime-600 text-white'
                          : 'bg-gray-600 text-white'
                      }>
                        {tournament.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="bg-lime-500 text-[#1A1F2C] hover:bg-lime-600 font-bold">
                    <Icon name="Trophy" className="mr-2" size={18} />
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-500 glow-lime mb-12 text-center">Цены</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prices.map((tariff, index) => (
              <Card key={index} className="bg-[#2A2F3C] border-lime-500/30 border-lime-glow relative">
                {tariff.discount && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-lime-500 text-[#1A1F2C] text-lg px-3 py-1">
                      {tariff.discount}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lime-500">{tariff.title}</CardTitle>
                  <CardDescription className="text-gray-400 flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    {tariff.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-lime-500">{tariff.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-[#2A2F3C] p-8 rounded-lg border border-lime-500/30 text-center">
            <h3 className="text-2xl font-bold text-lime-500 mb-4">Абонементы</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-lime-500 mb-2">10 часов</div>
                <div className="text-xl text-gray-300 mb-1">1 800 ₽</div>
                <div className="text-sm text-gray-400">Экономия 10%</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-500 mb-2">25 часов</div>
                <div className="text-xl text-gray-300 mb-1">4 200 ₽</div>
                <div className="text-sm text-gray-400">Экономия 15%</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-500 mb-2">50 часов</div>
                <div className="text-xl text-gray-300 mb-1">7 500 ₽</div>
                <div className="text-sm text-gray-400">Экономия 25%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-[#222833]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-500 glow-lime mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#2A2F3C] border-lime-500/30">
              <CardHeader>
                <CardTitle className="text-lime-500">Адрес</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-lime-500 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300">г. Москва, ул. Киберспортивная, д. 42</p>
                    <p className="text-gray-400 text-sm">3 минуты от метро "Технопарк"</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-lime-500" size={20} />
                  <a href="tel:+79991234567" className="text-gray-300 hover:text-lime-500 transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-lime-500" size={20} />
                  <a href="mailto:info@underground-club.ru" className="text-gray-300 hover:text-lime-500 transition-colors">
                    info@underground-club.ru
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#2A2F3C] border-lime-500/30">
              <CardHeader>
                <CardTitle className="text-lime-500">Режим работы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-lime-500" size={20} />
                  <div>
                    <p className="text-gray-300 font-bold">24/7</p>
                    <p className="text-gray-400 text-sm">Работаем круглосуточно без выходных</p>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-lime-500" size={16} />
                    Бронирование по телефону
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-lime-500" size={16} />
                    Онлайн-бронирование на сайте
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-lime-500" size={16} />
                    Доставка еды и напитков
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-lime-500 text-[#1A1F2C] hover:bg-lime-600 font-bold">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-lime-500 text-lime-500 hover:bg-lime-500/10 font-bold">
              <Icon name="Share2" className="mr-2" size={20} />
              Мы в соцсетях
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;
