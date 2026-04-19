import { LightningElement } from 'lwc';
import PROFILE_IMAGE from '@salesforce/resourceUrl/Profile';
import bgImg from '@salesforce/resourceUrl/bgImg';


export default class Portfolio extends LightningElement {
    profileImg = PROFILE_IMAGE;
    bgImg = bgImg;
    
    get backgroundStyle() {
    return `background-image: url(${this.bgImg});
            background-size: cover;
            background-position: center`;
}
}