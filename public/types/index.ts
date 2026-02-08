export interface Category {
  id: number;
  name: string;
  categoryImage?: string;
}

export interface Template {
  id: number;
  name: string;
  price: number;
  templateImage?: string;
  category: Category;
  slug?: string;
}

export interface TemplateDesign {
  id: number;
  bodyBackgroundImage?: string;
  templateLayoutWidth?: number;
  maleName?: string;
  femaleName?: string;
  placeName?: string;
  placeLink?: string;
  placeImage?: string;
  introBgImage?: string[];
  introTitle?: string;
  introDescription?: string;
  introShort?: string;
  eventDate?: Date;
  churchName?: string;
  churchImage?: string;
  churchLink?: string;
  hasDesignedDate: boolean;
  hasCountdown: boolean;
  phoneNumber?: string;
  hasPhoneButton: boolean;
  eventProgram?: IEventProgram[];
  sheduleSectionBgImage?: string;
  sheduleSectionDescription?: string;
  templateSkeletonId: number;
  templateSkeleton: Template;
  hasDressCode: boolean;
  dressCodeColors?: ColorItem[];
  dressCodeImage?: string[];
  isOrder: boolean;
  hasMusic: boolean;
  musicSource?: string;
  hasForm: boolean;
  slug: string;
  locations: ILocation[];
}

interface IEventProgram {
  eventName: string;
  eventTime: string;
  eventPlace: string;
}

export interface ColorItem {
  color: string;
}

export interface ILocation {
  map: any;
  locationName: string;
  locationImage: string;
  locationAddress: string;
  mapLink: string;
}

// export interface Template {
//   id: number;
//   name: string;
//   slug?: string;
// }
