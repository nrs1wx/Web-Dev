import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  protected productsList: Product[] = [
    {
      id: 0,
      name: 'Монитор 24.5" BenQ ZOWIE XL2546K 9H.LJNLB.QBE ',
      image: 'assets/images/BenQ-XL2566X-Puls-Zowie-Europe-FHD-Gaming-Monitor.png',
      description: 'Игровые мониторы XL от ZOWIE обеспечивают бескомпромиссную производительность и гибкую систему регулировки для киберспортивных игр в жанре FPS.',
      price: 279800 ,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/24-5-benq-zowie-xl2546k-9h-ljnlb-qbe-chernyi-103796623/?0&c=431010000&ref=shared_link'
    },
    {
      id: 1,
      name: 'Игровая приставка Sony PlayStation 5 белый',
      image: 'assets/images/63948652249118.jpg',
      'description': 'PlayStation 5 – консоль от Sony, которую долго ждали все геймеры. Еще бы: она быстрее, поддерживает разрешение 8K, снабжена твердотельным накопителем и выглядит как космический корабль, особенно Digital-версия.',
      'price': 313911,
      'rating': 4.9,
      'link': 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=431010000&sr=19&qid=55b91256cd3f6f56e61851d5ae7ff7c8&ref=shared_link',
    },
    {
      "id": 2,
      "name": "Игровая приставка SEGA Mega Drive 300 Game",
      "image": "assets/images/84577687765022.jpg",
      "description": "«Sega MD» - это приставка четвертого поколения 16-бит, разработанная и выпущенная в продажу в 1988 году японской компанией «Sega».",
      "price": 4694,
      "rating": 4.1,
      "link": "https://kaspi.kz/shop/p/sega-mega-drive-300-game-114863302/?c=431010000&sr=4&qid=7246223bd9a3b9caccb6234f929e62a5&ref=shared_link"
    },
    {
      "id": 3,
      "name": "Очки виртуальной реальности Meta Quest 3 512 Gb",
      "image": "assets/images/84023738925086.jpg",
      "description": "Quest 3 сочетает в себе дисплей с самым высоким разрешением на сегодняшний день и оптику pancake, чтобы контент выглядел лучше, чем когда-либо. Для усиления этих дополнительных пикселей это будет первая гарнитура с чипсетом Snapdragon следующего поколения, разработанным в сотрудничестве с Qualcomm Technologies.",
      "price": 316856,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/meta-quest-3-512-gb-113525753/?c=431010000&sr=18&qid=1708c62bdafe5a8ef34a771d063f322f&ref=shared_link"
    },
    {
      "id": 4,
      "name": "Видеоигра FC 25 PS5",
      "image": "assets/images/86668363497502.jpg",
      "description": "FC 25",
      "price": 23998,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/fc-25-ps5-rus-121979365/?c=431010000&sr=2&qid=05a694f52a455b13d175c68d7098e89e&ref=shared_link"
    },
    {
      "id": 5,
      "name": "Ноутбук ASUS ROG Strix G16 ",
      "image": "assets/images/85732590944286.jpg",
      "description": "Получите больше кадров в секунду и добейтесь больше побед в играх – с ноутбуком ROG Strix G16. Он готов доминировать на полях виртуальных сражений за счет мощной конфигурации, скоростной накопитель и передовая оперативная память. Дисплейный мультиплексор в сочетании с технологией NVIDIA Advanced Optimus обеспечивает автоматическое переключение между режимами повышенной графической производительности и экономии заряда аккумулятора.",
      "price": 899989,
      "rating": 4.9,
      "link":"https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4190-90nr0c61-m00yz0-118376617/?c=431010000&sr=1&qid=b4803f0580179ac0c9d979e036682e6b&ref=shared_link"
    },
    {
      "id": 6,
      "name": "Смартфон Samsung Galaxy S24 Ultra 5G DS 12 ГБ/512 ГБ серый",
      "image": "assets/images/51LF4xSuZqL.jpg",
      "description": "amsung Galaxy S24 Ultra — это очередной флагман семейства смартфонов корейского производителя. Аппарат получил минимальное количество внешних изменений, но приобрел еще больше производительной мощи и новые функциональные возможности за счет расширенного внедрения ИИ.",
      "price": 639990 ,
      "rating": 5,
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-ds-12-gb-512-gb-seryi-116534733/?c=431010000&sr=10&qid=6ea122cbbdac1b55403fb890a0c4b045&ref=shared_link"
    },
    {
      "id": 7,
      "name": "Logitech G Pro X Superlight 2",
      "image": "assets/images/pro2-lightspeed-feature1b.jpg",
      "description": "Максимальный DPI 32000 (против 25000) Частота опроса 2000 Гц (против 1000 Гц) Отклик 0.5 мс (против 1 мс) Батарейку держит с одного заряда до 95 часов (против 70 часов)",
      "price": 74924,
      "rating": 5,
      "link": "https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-rozovyi-113957944/?c=431010000&sr=1&qid=1d3f053147a6ae369d2d4f1bc5dfb65b&ref=shared_link"
    },
    {
      "id": 8,
      "name": "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      "image": "assets/images/Apple-iPhone-16-Pro-256GB-Black-Titanium.webp",
      "description": "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой.",
      "price": 651723,
      "rating": 5,
      "link": "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=431010000&sr=1&qid=9aaef7c291e8c90c8078ace03249c316&ref=shared_link"
    },
    {
      "id": 9,
      "name": "Наушники Sony WH-1000XM4 черный",
      "image": "assets/images/406fdd3cc9e49e28002ad8baef9185c8.avif",
      "description": "Узнайте, как наушники WH-1000XM4 совмещают в себе нашу лучшую технологию шумоподавления, исключительное качество звука и целый ряд интеллектуальных функций.",
      "price": 112498,
      "rating": 4.9,
      "link": "https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471997/?c=431010000&sr=2&qid=03ea649a04d33bebe7df1923f77b6fca&ref=shared_link"
    }
  ];
  constructor() { }
  getAllProducts(): Product[] {
    return this.productsList;
  }

  getProductById(id: number): Product | undefined {
    return this.productsList.find((product) => product.id === id);
  }
}
