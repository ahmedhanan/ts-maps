import { User } from './User';
import { Company } from './Company';
import { CustomMaps } from './CustomMaps';

const user = new User();
console.log(user);
const company = new Company();
console.log(company);

const userMap = new CustomMaps('map', 1, 0, 0);
userMap.addMarker(user);
userMap.addMarker(company);
