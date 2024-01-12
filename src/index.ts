import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

var customMap = new CustomMap('map');

const user = new User();

const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
