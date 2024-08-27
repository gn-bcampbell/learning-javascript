// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const img1 = 'img/img-1.jpg'
const img2 = 'img/img-2.jpg'
const img3 = 'img/img-3.jpg'
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const image = document.createElement('img');
        image.src = imgPath;
        image.addEventListener('load', function () {
            imgContainer.append(image);
            resolve(image);
        })

        image.addEventListener('error', function () {
            reject(new Error('Failed to load image'))
        })
    })

}

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img))
        const imgsEl = await Promise.all(imgs);
        // console.log(imgsEl)
        // console.log(imgs)
        imgsEl.forEach(img => img.classList.add('parallel'))
    } catch (err) {
        console.error(err)
    }
}
loadAll([img1, img2, img3])


const wait = function (seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, seconds * 1000)
    })
}

const loadNPause = async function () {
    try {
        let currentImage = await createImage(img1)
        await wait(2);
        currentImage.style.display = 'none'

        currentImage = await createImage(img2);
        await wait(2);
        currentImage.style.display = 'none'
    } catch (err) {
        console.error(err)
    }
}
// loadNPause();