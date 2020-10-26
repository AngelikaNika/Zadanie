import { DanceOverview } from './dance-overview';
import { Category } from 'src/app/shared/models/category';
import { Status } from './status';

export interface Dance extends DanceOverview {
  id?: number;
  title: string;
  categories: Category[];
  image: string;
  name: string;
  address: string;
  date: string;
  price: number;
  description: string;
  type: string;
  phone: number;
  rank: number;
  status: Status;
 
}
