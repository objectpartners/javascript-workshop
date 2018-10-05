import TravisMartensen from "./images/travis-martensen.jpeg";
import JakePartusch from "./images/jake-partusch.jpg";
import MikePlummer from "./images/mike-plummer.jpg";

const People = {
  Travis_Martensen: {
    name: "Travis Martensen",
    avatar: TravisMartensen,
    twitter: "tmartensen",
    title: "Chief Technologist"
  },
  Jake_Partusch: {
    name: "Jake Partusch",
    avatar: JakePartusch,
    twitter: "JakePartusch",
    title: "Principal Technologist"
  },
  Mike_Plummer: {
    name: "Mike Plummer",
    avatar: MikePlummer,
    twitter: "plummer_mike",
    title: "Principal Technologist"
  }
};

const Presenters = [People.Mike_Plummer, People.Jake_Partusch];

export default Presenters;
