import { MenuItemCard } from '../ui/menu-item/menu-item';

export const MENU_JOURNALS_ICONS: MenuItemCard[] = [
  {
    id: 1,
    type: 'Межотраслевой научно-технический журнал',
    title: 'Оборонный комплекс',
    routerLink: '/journals/defense-enterprise',
    iconName: 'top-models',
    disabled: false,
  },
  {
    id: 2,
    type: 'Межотраслевой научно-технический журнал',
    title: 'Композиционные материалы',
    routerLink: '/journals/composite-materials',
    iconName: 'composite-materials',
    disabled: false,
  },
  {
    id: 3,
    type: 'Научно-технический журнал',
    title: 'Информационные технологии',
    routerLink: '/journals/information-technology',
    iconName: 'informations-technology',
    disabled: false,
  },
  {
    id: 4,
    type: 'Научно-технический журнал',
    title: 'Защита информации',
    routerLink: '/journals/data-protection',
    iconName: 'security-information',
    disabled: false,
  },
  {
    id: 5,
    type: 'Межотраслевой научно-практический журнал',
    title: 'Экология',
    routerLink: '/journals/ecology',
    iconName: 'ecology',
    disabled: false,
  },
];

export const MENU_DIGESTS_ICONS: MenuItemCard[] = [
  {
    id: 1,
    type: 'Дайджест',
    title: 'Машиностроение',
    routerLink: '/digests/ground-troops',
    iconName: 'tank',
    disabled: true,
  },
  {
    id: 2,
    type: 'Дайджест',
    title: 'Кораблестроение',
    routerLink: '/digests/naval-forces',
    iconName: 'ship',
    disabled: false,
  },
  {
    id: 3,
    type: 'Дайджест',
    title: 'Робототехника',
    routerLink: '/digests/robotics',
    iconName: 'roboto',
    disabled: false,
  },
  {
    id: 4,
    type: 'Дайджест',
    title: 'Авиастроение',
    routerLink: '/digests/aviation',
    iconName: 'plane',
    disabled: false,
  },
  {
    id: 5,
    type: 'Дайджест',
    title: 'Ракетостроение',
    routerLink: '/digests/space-forces',
    iconName: 'space',
    disabled: false,
  },
];

export const MENU_ANALITICS_JOURNALS_ICONS: MenuItemCard[] = [
  {
    id: 1,
    type: 'Аналитика',
    title: 'Робототехника',
    routerLink: '/analytics/robotics-analitics',
    iconName: 'roboto',
    disabled: false,
  },
  {
    id: 2,
    type: 'Аналитика',
    title: 'Искусственный интеллект',
    routerLink: '/analytics/artificial-intelligence',
    iconName: 'ai',
    disabled: false,
  },
  {
    id: 3,
    type: 'Аналитика',
    title: 'Радиоэлектроника',
    routerLink: '/analytics/radio-electronics',
    iconName: 'radio-electronics',
    disabled: false,
  },
];
