import { Category } from 'src/app/shared/models/category';
import { Status } from './status';

export interface DanceOverview {
  id?: number;
  title: string;
  categories: Category[];
  image?: string;
  status: Status;
}
