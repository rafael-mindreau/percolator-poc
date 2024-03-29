import TopDefault from '../components/percolator-parts/3D/tops/TopDefault';
import TopPinholed from '../components/percolator-parts/3D/tops/TopPinholed';

import SpreaderBasic from '../components/percolator-parts/3D/spreaders/SpreaderBasic';
import SpreaderRough from '../components/percolator-parts/3D/spreaders/SpreaderRough';
import SpreaderFine from '../components/percolator-parts/3D/spreaders/SpreaderFine';
import SpreaderVersatile from '../components/percolator-parts/3D/spreaders/SpreaderVersatile';
import SpreaderOpen from '../components/percolator-parts/3D/spreaders/SpreaderOpen';

import BasketBasic from '../components/percolator-parts/3D/baskets/BasketBasic';
import BasketWide from '../components/percolator-parts/3D/baskets/BasketWide';
import BasketPro from '../components/percolator-parts/3D/baskets/BasketPro';
import BasketSupreme from '../components/percolator-parts/3D/baskets/BasketSupreme';

import BottomDefault from '../components/percolator-parts/3D/bottoms/BottomDefault';

const options = {
  tops: {
    basic: {
      name: 'Basic top',
      component: TopDefault,
      perspectiveComponent: '',
      description: 'Comes with a basic, robust diffuser, the top lid, and a threaded collar.',
      price: 15.55,
    },
    pinholed: {
      name: 'Pinhole design collar top',
      component: TopPinholed,
      perspectiveComponent: '',
      description: 'Special pinholed collar to better dissipate the heat.',
      price: 18.99,
    },
  },
  spreaders: {
    basic: {
      name: 'Basic spreader',
      component: SpreaderBasic,
      perspectiveComponent: '',
      description: 'Robust basic spreader',
      price: 5.99,
    },
    rough: {
      name: 'Rough blend spreader',
      component: SpreaderRough,
      perspectiveComponent: '',
      description: 'Spreader with wider openings to allow through larger grain. If you like your dark and strong, then this is just for you.',
      price: 7.99,
    },
    fine: {
      name: 'Fine spreader',
      component: SpreaderFine,
      perspectiveComponent: '',
      description: 'Spreader that comes with a much finer pitch, and needle-point pierced holes. This ensures a much longer brew, with a smoother texture, and great in taste.',
      price: 9.99,
    },
    versatile: {
      name: 'Versatile spreader',
      component: SpreaderVersatile,
      perspectiveComponent: '',
      description: 'Comes with rubber stops that allow you to choose which openings are used. This allows you to select a finer or rough texture in your blend.',
      price: 11.55,
    },
    open: {
      name: 'Open spreader',
      component: SpreaderOpen,
      perspectiveComponent: '',
      description: 'Very high pitch spreader that enables you to leave the brew on for a lot longer. This ensures a much richer and deep taste.',
      price: 8.50,
    },
  },
  baskets: {
    basic: {
      name: 'Basic basket',
      component: BasketBasic,
      perspectiveComponent: '',
      description: 'The standard basket has the default funnel and pitch.',
      price: 5.99,
    },
    wide: {
      name: 'Wide funnel basket',
      component: BasketWide,
      perspectiveComponent: '',
      description: 'This basket is ideal for espresso coffe, as its wider funnel allows you to brew your coffee a lot quicker.',
      price: 5.99,
    },
    pro: {
      name: 'Professional basket',
      component: BasketPro,
      perspectiveComponent: '',
      description: 'Standard basket found in all professional sets of coffee makers. The lowered diffuser allows for the blend to be richer in taste.',
      price: 8.99,
    },
    supreme: {
      name: 'Supreme pump basket',
      component: BasketSupreme,
      perspectiveComponent: '',
      description: 'This basket features a pump stem to better control the flow into the spreader and funnel. Has some adjustable parts to better control the type of brew. When selecting this basket, be sure to get a through-hole spreader.',
      price: 15.99,
    },
  },
  bottoms: {
    basic: {
      name: 'Basic boiler',
      component: BottomDefault,
      perspectiveComponent: '',
      description: 'A basic boiler, but watch out though, it sometimes explodes like a grenade, hah! Good luck with it, lol.',
      price: 12.99,
    },
  },
};

export default options;
