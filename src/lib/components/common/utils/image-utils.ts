/**
 * fruits
 */
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

/**
 * Mcdonalds
 */
import applepie from "$lib/images/mcdonalds/applepie.png";
import bigmac from "$lib/images/mcdonalds/bigmac.png";
import cola from "$lib/images/mcdonalds/cola.png";
import corncup from "$lib/images/mcdonalds/corncup.png";
import fishburger from "$lib/images/mcdonalds/fishburger.png";
import fries from "$lib/images/mcdonalds/fries.png";
import hashbrown from "$lib/images/mcdonalds/hashbrown.png";
import icecream from "$lib/images/mcdonalds/icecream.png";
import mcnuggets from "$lib/images/mcdonalds/mcnuggets.png";
import mcwings from "$lib/images/mcdonalds/mcwings.png";
import milkshake from "$lib/images/mcdonalds/milkshake.png";
import orangejuice from "$lib/images/mcdonalds/orangejuice.png";

export const mcdonaldsImg = [applepie, bigmac, cola, fishburger, fries, icecream, mcnuggets, mcwings, milkshake, orangejuice];



export const defaultImgCategoriesArr = [
    { category: 'fruits',  arr : fruitImgs},
    { category: 'mcdonalds', arr : mcdonaldsImg }
];



export const getRandomCategory = (): string => defaultImgCategoriesArr[getRandomIndex(defaultImgCategoriesArr)].category;

export const getRandomIndexByCategory = (category: string): number => getRandomIndex(getCategory(category));

const getCategory = (category: string)  => defaultImgCategoriesArr.filter((record) => record.category == category).at(0)?.arr;

export const getImageByCategory = (category: string, index: number) => getCategory(category)?.at(index);

export const getRandomIndex = (arr): number => Math.floor(Math.random() * arr.length);