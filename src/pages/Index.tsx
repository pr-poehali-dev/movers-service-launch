import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в течение 30 минут",
    });
    setFormData({ name: '', phone: '', address: '', message: '' });
  };

  const services = [
    {
      icon: 'Package',
      title: 'Квартирный переезд',
      description: 'Быстрая упаковка, погрузка и перевозка вещей',
      price: 'от 2500₽'
    },
    {
      icon: 'Building2',
      title: 'Офисный переезд',
      description: 'Профессиональная перевозка офисной мебели и техники',
      price: 'от 4000₽'
    },
    {
      icon: 'Truck',
      title: 'Грузоперевозки',
      description: 'Доставка грузов любого объема по городу и области',
      price: 'от 1500₽'
    },
    {
      icon: 'Hammer',
      title: 'Сборка мебели',
      description: 'Разборка и сборка мебели любой сложности',
      price: 'от 800₽'
    },
    {
      icon: 'PackageOpen',
      title: 'Упаковка вещей',
      description: 'Профессиональная упаковка с материалами',
      price: 'от 500₽'
    },
    {
      icon: 'Box',
      title: 'Вывоз мусора',
      description: 'Быстрый вывоз строительного и бытового мусора',
      price: 'от 1000₽'
    }
  ];

  const prices = [
    {
      title: 'Базовый',
      workers: '2 грузчика',
      time: '2 часа работы',
      price: '2500₽',
      features: ['Погрузка/разгрузка', 'Перенос вещей', 'Без упаковки']
    },
    {
      title: 'Стандарт',
      workers: '3 грузчика',
      time: '4 часа работы',
      price: '5500₽',
      features: ['Погрузка/разгрузка', 'Упаковка вещей', 'Разборка мебели', 'Транспорт включен'],
      popular: true
    },
    {
      title: 'Премиум',
      workers: '4 грузчика',
      time: '8 часов работы',
      price: '12000₽',
      features: ['Все включено', 'Упаковочные материалы', 'Сборка/разборка мебели', 'Уборка после переезда']
    }
  ];

  const reviews = [
    {
      name: 'Александр М.',
      rating: 5,
      text: 'Отличная команда! Переезжали быстро и аккуратно. Все вещи доставили целыми.',
      date: '15 октября 2024'
    },
    {
      name: 'Елена К.',
      rating: 5,
      text: 'Заказывала грузчиков для офисного переезда. Ребята приехали точно в срок, работали профессионально.',
      date: '8 октября 2024'
    },
    {
      name: 'Дмитрий П.',
      rating: 5,
      text: 'Вызвал грузчиков срочно, приехали через 25 минут! Цены адекватные, работой доволен.',
      date: '1 октября 2024'
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Срочный выезд за 30 минут',
      description: 'Приедем к вам в течение получаса после звонка'
    },
    {
      icon: 'Shield',
      title: 'Гарантия сохранности',
      description: 'Несем полную ответственность за ваше имущество'
    },
    {
      icon: 'Users',
      title: 'Опытные грузчики',
      description: 'Все работники с опытом работы от 3 лет'
    },
    {
      icon: 'Wallet',
      title: 'Прозрачные цены',
      description: 'Никаких скрытых платежей и доплат'
    },
    {
      icon: 'Calendar',
      title: 'Работаем 24/7',
      description: 'Принимаем заказы круглосуточно без выходных'
    },
    {
      icon: 'Award',
      title: 'Лучшие на рынке',
      description: 'Более 5000 успешных переездов за 10 лет работы'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">ГрузСервис</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href="tel:+79991234567" className="flex items-center gap-2 font-semibold text-lg hover:text-primary transition-colors">
            <Icon name="Phone" size={20} />
            +7 (999) 123-45-67
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Грузчики за <span className="text-primary">30 минут</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Профессиональные услуги грузчиков и грузоперевозок по доступным ценам. Работаем круглосуточно!
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span>Без выходных</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span>Опытные грузчики</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span>Гарантия качества</span>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8 py-6 animate-scale-in">
                <Icon name="Phone" className="mr-2" />
                Заказать сейчас
              </Button>
            </div>

            <Card className="animate-slide-up shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Быстрый заказ</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним через 2 минуты</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Адрес"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите задачу (необязательно)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр услуг для вашего комфортного переезда
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={service.icon} size={28} className="text-secondary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите подходящий вариант для вашего переезда
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all ${
                  price.popular ? 'border-primary border-2 scale-105' : ''
                }`}
              >
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{price.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-4">{price.price}</div>
                  <CardDescription className="text-base">{price.workers}</CardDescription>
                  <CardDescription>{price.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={price.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <a href="tel:+79991234567" className="text-primary hover:underline">
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@gruzservice.ru" className="text-primary hover:underline">
                        info@gruzservice.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Есть вопросы?</CardTitle>
                  <CardDescription>Напишите нам и мы ответим в течение 5 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input placeholder="Ваше имя" required />
                    <Input type="email" placeholder="Email" required />
                    <Textarea placeholder="Ваше сообщение" rows={4} required />
                    <Button type="submit" className="w-full">
                      <Icon name="Send" className="mr-2" size={18} />
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} className="text-primary" />
                <span className="text-xl font-bold">ГрузСервис</span>
              </div>
              <p className="text-background/70">
                Профессиональные услуги грузчиков с 2014 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#services" className="hover:text-primary transition-colors">Квартирный переезд</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Офисный переезд</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Грузоперевозки</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Сборка мебели</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#prices" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79991234567" className="hover:text-primary transition-colors">+7 (999) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@gruzservice.ru" className="hover:text-primary transition-colors">info@gruzservice.ru</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 ГрузСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
