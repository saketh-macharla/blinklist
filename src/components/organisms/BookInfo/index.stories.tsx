import BookInfo from './Index'
import beyondEntrepreneur from '../../../assets/BookCovers/beyondentrepreneurship.png';

export default {
    title: "organisms/BookInfo",
    component: BookInfo,
  }
  
  export const card = () => {
    // const classes=customStyles();
    return (
      <BookInfo children='Beyond Entrepreneur 2.0' imgPath={beyondEntrepreneur}/>
  );}