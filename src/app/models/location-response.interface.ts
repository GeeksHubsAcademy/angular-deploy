import { Location } from './location.model';
import { Info } from './info.interface';

export interface LocationResponse {
  info: Info;
  results: Location[];
}
