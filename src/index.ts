// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 10,
  center: {
    lat: 41,
    lng: 29,
  },
});
