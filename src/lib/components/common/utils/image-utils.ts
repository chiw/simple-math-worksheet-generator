import apple from "$lib/images/fruits/apple.png";
import banana from "$lib/images/fruits/banana.png";
import blueberry from "$lib/images/fruits/blueberry.png";
import cherry from "$lib/images/fruits/cherry.png";
import lemon from "$lib/images/fruits/lemon.png";
import orange from "$lib/images/fruits/orange.png";
import pear from "$lib/images/fruits/pear.png";
import pinapple from "$lib/images/fruits/pineapple.png";
import strawberry from "$lib/images/fruits/strawberry.png";
import watermelon from "$lib/images/fruits/watermelon.png";

export const fruitImgs = [apple, banana, blueberry, cherry, lemon, orange, pear, pinapple, strawberry, watermelon];

export const getRandomImgIndex = (imgArray) => {
    return Math.floor(Math.random() * imgArray.length);
}

export const getRandomFruitImgIndex = () => {
    return getRandomImgIndex(fruitImgs);
}