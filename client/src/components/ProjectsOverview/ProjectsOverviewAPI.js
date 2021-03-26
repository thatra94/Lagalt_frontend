import { API_BASE_URL } from "../../constants/API";
export const fetchProjects = () => {  
  const res = fetch(`${ API_BASE_URL }/projects`)
        .then(response => response.json())
        .then(response => response.data)
  console.log(res)
  return res;
}


export const fetchProjectsBySearchString = (searchString) => {
  const res = fetch(`${ API_BASE_URL }/projects/search/project=${ searchString }`)
        .then(response => response.json())
        .then(response => response.data)
  return res;
};

export const fetchProjectsByIndustry = (industry) => {
  const res = fetch(`${ API_BASE_URL }/projects/filter/industry=${ industry }`)
        .then(response => response.json())
        .then(response => response.data)
  return res;
};


export const fetchIndustries = () => {
  const res = fetch(`${ API_BASE_URL }/industries`)
        .then(response => response.json())
        .then(response => response.data)
  return res;
}
     /*
export const fetchProjects = () => {
    return [
        {
          "id": 1,
          "name": "Lagalt",
          "description": "Webapplikasjon hvor man opprette prosjekter og finne prosjektmedlemmer",
          "imageUrl": "https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2",
          "status": "Under utvikling",
          "industryId": 1
        },
        {
          "id": 2,
          "name": "Valheim",
          "description": "Sandkassespill satt til vikingtiden. Litt som minecraft",
          "imageUrl": "https://img.gfx.no/2652/2652343/ss_758a730d41536d195249fe87b81ea26400c6b56e.956x539.png",
          "status": "Opprettet",
          "industryId": 3
        },
        {
          "id": 3,
          "name": "The Sentinel",
          "description": "Er et space exploration spill satt i nær fremtid",
          "imageUrl": "https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/d4mmmwmkthezbqmwtvxy.jpg",
          "status": "Opprettet",
          "industryId": 3
        },
        {
          "id": 4,
          "name": "Buggy",
          "description": "Et sporingssystem for programvarefeil. Holder orden på rapporte programvarefeil i et uviklingsprosjekt.",
          "imageUrl": "https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/d4mmmwmkthezbqmwtvxy.jpg",
          "status": "På vent",
          "industryId": 1
        },
        {
          "id": 5,
          "name": "Fronter 2.0",
          "description": "Alles favorittplattform skal pusses opp!",
          "imageUrl": "https://wiki.usn.no/ewiki/images/a/a8/Fronter.jpg",
          "status": "Under utvikling",
          "industryId": 1
        },
        {
          "id": 6,
          "name": "2061",
          "description": "Spillefilm satt til 2061. Sjangeren er sci-fi. Trenger fotografer, set-designere, og kostymedesignere",
          "imageUrl": "https://cdn.pixabay.com/photo/2019/10/08/14/24/futuristic-4535174_960_720.jpg",
          "status": "Ferdig",
          "industryId": 4
        },
        {
          "id": 7,
          "name": "UnderRail",
          "description": "Turbasert rollespill satt i en dystopisk fremtid",
          "imageUrl": "https://cdn.akamai.steamstatic.com/steam/apps/250520/header.jpg?t=1588072489",
          "status": "Under utvikling",
          "industryId": 3
        },
        {
          "id": 8,
          "name": "Deep Sky Derelicts",
          "description": "Turbasert strategispill og RPG",
          "imageUrl": "https://cdn.akamai.steamstatic.com/steam/apps/698640/header.jpg?t=1613491211",
          "status": "Under utvikling",
          "industryId": 3
        }
      ];  
}*/