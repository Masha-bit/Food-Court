import afang_soup from '/public/food/AfangSoup.png'
import bbq_chicken_wings from '/public/food/BBQChickenWings.png'
import beef_chilli_cheese_fries  from '/public/food/BeefChilliCheeseFries.png'
import beef_fried_rice  from '/public/food/BeefFriedRice.png'
import breakfast_Burger  from '/public/food/BreakfastBurger.png'
import buffalo_chicken_fries from '/public/food/BuffaloChickenFries.png'
import chicken_club_sandwich from '/public/food/ChickenClubSandwich.png'
import chicken_singapore_noodles from '/public/food/ChickenSingaporeNoodles.png'
import egusi_soup from '/public/food/EgusiSoup.png'
import ewa_agoyin from '/public/food/EwaAgoyin.png'
import full_lagos_breakfast from '/public/food/FullLagosBreakfast.png'
import grilled_chicken_salad from '/public/food/GrilledChickenSalad.png'
import loaded_hot_dog from '/public/food/LoadedHotDog.png'
import ofada_rice from '/public/food/OfadaRice.png'
import og_burger from '/public/food/OGBurger.png'
import peri_peri_chicken_toastie from '/public/food/PeriPeriChickenToastie.png'
import prawn_mayo_spring_roll from '/public/food/PrawnMayoSpringRolls.png'
import sea_food_okra from '/public/food/SeafoodOkra.png'
import smoked_chicken_wings_spicy_chicken_sandwich from '/public/food/SmokedChickenWingsSpicyChickenSandwich.png'
import special_chow_mein_noodles from '/public/food/SpecialChowMeinNoodles.png'
import special_fried_rice from '/public/food/SpecialFriedRice.png'
import suya_chicken_fries from '/public/food/SuyaChickenFries.png'
import top_dog from '/public/food/TopDog.png'
import wing_king from '/public/food/WingKing.png'
import yam_potato_porridge from '/public/food/Yam&PotatoPorridge.png'

// created a function hat checks if our search input is empty


 
  const foodDes = {
    foodPlates: [

      {
        id:'snack',
        url: breakfast_Burger,
        name: 'Breakfast Burger',
        slug: 'breakfast-burger',
        description: 'Loaded breakfast burger. Beef patty, sausages, eggs & lettuce. (Specify if you want onions',
        price: '2, 900'
      },
  {
     id:'food',
     url: special_fried_rice,
     name: 'Special Fried Rice',
     slug: 'special-fried-rice',
     description: 'Delicious fully loaded fried rice with bits of chicken, prawn, sausages & mixed veg. Served with your choice of sauce.',
     price: '3, 900'
  
  },
  {
     id:'food',
     url: beef_fried_rice,
     name: 'Beef Fried Rice',
     slug: 'beef-fried-rice',
     description: 'Fried rice with minced beef & mixed veg. Served with your choice of sauce',
     price: '3, 100'
  },
  {
    id:'food',
    url: special_chow_mein_noodles ,
    name: 'Special ChowMein Noodles',
    slug: 'special-chowmein-noodles',
    description: 'Fully loaded chow mein noodles with chicken, prawn, sausages & mixed veg. Served with choice of sauce.',
    price: '3, 900'
  },
  {
    id:'snack',
    url: prawn_mayo_spring_roll,
    name: 'Prawn MayoSpring Rolls',
    slug: 'prawn-mayospring-rolls',
    description: 'Crispy deep fried spring rolls stuffed with prawn & mayonnaise + dipping sauce of choice',
    price: '1, 600'
  },
  {
    id:'food',
    url: chicken_singapore_noodles ,
    name: 'Chicken Singapore Noodles',
    slug: 'chicken-singapore-noodles',
    description: 'Singapore stir fried noodles with bits of chicken and mixed veg. Served with your choice of sauce.',
    price: '3, 400'
  },
  {
    id:'sides',
    url: wing_king,
    name: 'Wing King',
    slug: 'wing-king',
    description: 'Grilled Chicken heavily seasoned with morterella and veg mix.',
    price: '1, 800'
  },
  {
    id:'snack',
    url: smoked_chicken_wings_spicy_chicken_sandwich,
    name: 'Smoked Chicken Sandwich',
    slug: 'smoked-chicken-sandwich',
    description: 'Crispy fried chicken with purple cabbage sauce, sour cream & hot sauce in a toasted bun. Served with choice of fries.',
    price: '1, 900'
  },
  {
    id:'sides',
    url: grilled_chicken_salad,
    name: 'Grilled Chicken Salad',
    slug: 'grilled-chicken-salad',
    description: 'Grilled chicken breast in a garden salad bed.',
    price: '1, 300'
  },
  {
    id:'snack',
    url: peri_peri_chicken_toastie,
    name: 'Peri Peri Chicken Toastie',
    slug: 'peri-peri-chicken-toastie',
    description: 'Peri-peri chicken, cheese & special sauce toastie. Served with choice of fries.',
    price: '1, 200'
  },
  {
    id:'snack',
    url: chicken_club_sandwich,
    name: 'Chicken Club Sandwich',
    slug: 'chicken-club-sandwich',
    description: 'Classic chicken club sandwich with all the trimmings. Served with choice of sides.',
    price: '1, 200'
  },
  {
    id:'sides',
    url: suya_chicken_fries,
    name: 'Suya Chicken Fries',
    slug: 'suya-chicken-fries',
    description: 'French fries topped with chopped suya chicken, veg, chili mayo & sauces',
    price: '2, 300'
  },
  {
    id:'sides',
    url: beef_chilli_cheese_fries,
    name: 'Beef Chili Cheese Fries',
    slug: 'beef-chilli-cheese-fries',
    description: 'French fries topped with minced meat, chopped sausages, veg, cheese & sauces.',
    price: '2, 400'
  },
  {
    id:'food',
    url: full_lagos_breakfast,
    name: 'Full Lagos Breakfast',
    slug: 'full-lagos-breakfast',
    description: 'Naija breakfast. Choice of yam, potatoes or plantain, sauteed vegtables, egg sauce & sausage.',
    price: '2, 000'
  },
  {
    id:'sauce',
    url: egusi_soup,
    name: 'Egusi Soup',
    slug: 'egusi-soup',
    description: 'Mama\'s special egusi recipe. Served with choice of swallow & protein.',
    price: '3, 200'
  },
  {
    id:'sauce',
    url: afang_soup,
    name: 'Afang Soup',
    slug: 'afang-soup',
    description: 'Classic afang soup, Served with choice of swallow & protein',
    price: '3, 200'
  },
  {
    id:'sauce',
    url: sea_food_okra,
    name: 'Seafood Okra',
    slug: 'seafood-okra',
    description: '',
    price: '3, 200'
  },
  {
    id:'sauce',
    url: yam_potato_porridge,
    name: 'Yam & Potato Porridge',
    slug: 'yam-potato-porridge',
    description: 'Delicious native yam and potato porridge. Served with choice of protein.',
    price: '3, 200'
  },
  {
    id:'sauce',
    url: ewa_agoyin,
    name: 'Ewa Agoyin',
    slug: 'ewa-agoyin',
    description: 'Delicious classic ewa agoyin, Served with choice of protein & sides',
    price: '3, 100'
  },
  {
    id:'food',
    url: ofada_rice,
    name: 'Ofada Rice',
    slug: 'ofada-rice',
    description: 'Mama\'s native ofada with rich ayamase sauce. Served with choice of protein & sides.',
    price: '3, 200'
  },
  {
    id:'snack',
    url: og_burger,
    name: 'OG Burger',
    slug: 'og-burger',
    description: 'Premium beef patty with egg, sausage, lettuce & special sauce. (specify if you don\'t want onions).',
    price: '2, 100'
  },
  {
    id:'snack',
    url: loaded_hot_dog,
    name: 'Loaded Hot Dog',
    slug: 'loaded-hot-dog',
    description: 'Minced brisket, sausage, bacon bits, onions, jalapeño with special sauce topped with parsley crumbs.',
    price: '2, 400'
  },
  {
    id:'snack',
    url: buffalo_chicken_fries,
    name: 'Buffalo Chicken Fries',
    slug: 'buffalo-chicken-fries',
    description: 'French fries with chopped buffalo chicken, cheese & sauce.',
    price: '2, 400'
  },
  {
    id:'snack',
    url: top_dog,
    name: 'Top Dog',
    slug: 'top-dog',
    description: 'Loaded Hot dog with chopped cajun chicken, peppers & chilli mayo.',
    price: '2 ,800'
  },
  {
    id:'snack',
    url: bbq_chicken_wings,
    name: 'BBQ Chicken Wings',
    slug: 'bbq-chicken-wings',
    description: 'Smokey BBQ chicken wings (6 pc)',
    price: '2, 890'
  }
    ]
}
export default foodDes