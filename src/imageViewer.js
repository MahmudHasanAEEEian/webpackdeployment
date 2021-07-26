import small from './img/small.jpg'
import large from './img/big.jpg'
export const loadSmallImage = () => {
    const smallImg = document.createElement('img')
    smallImg.src = small;
    document.body.appendChild(smallImg);
}
export const loadLargeImage = () => {
    const LargeImg = document.createElement('img')
    LargeImg.src = large;
    document.body.appendChild(LargeImg);
}
