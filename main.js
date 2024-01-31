// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan

// const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];

// Massivni yaratamiz
// const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];

// // Eng katta sonni topish uchun o'zgaruvchini yaratamiz va massivning birinchi elementiga tenglashtiramiz
// let engKatta = numbers[0];

// // For loop orqali massivni tekshiramiz
// for (let i = 1; i < numbers.length; i++) {
//     // Agar hozirgi element eng katta bo'lsa, engKatta ni yangilaymiz
//     if (numbers[i] > engKatta) {
//         engKatta = numbers[i];
//     }
// }

// // Natijani consolega chiqaramiz
// console.log("Arraydagi eng katta son: " + engKatta);



// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

// const fruites = ["Olma", "Nok", "Anor", "Chegara"];

// Massivni yaratamiz
// const fruites = ["Olma", "Nok", "Anor", "Chegara"];

// // Eng uzun so'zni va undan bir harfini saqlash uchun o'zgaruvchilarni yaratamiz
// let engUzunSoz = "";
// let oxirgiOlinganHarf = "";

// // Massivni tekshiramiz
// for (let i = 0; i < fruites.length; i++) {
//     // Agar hozirgi so'z eng uzun so'zdan uzunroq bo'lsa, yangilaymiz
//     if (fruites[i].length > engUzunSoz.length) {
//         engUzunSoz = fruites[i];
        
//         // Oxirgi harfin indeksini hisoblaymiz va o'zgaruvchiga saqlaymiz
//         oxirgiOlinganHarf = engUzunSoz[engUzunSoz.length - 2];
//     }
// }

// // Natijani consolega chiqaramiz
// console.log("Eng uzun so'z: " + engUzunSoz);
// console.log("Eng uzun so'zning oxirgisidan bitta oldingi harfi: " + oxirgiOlinganHarf);


// // Masala - 3 (umumiy uzunlik)

// // Arraydagi barcha stringning lengthini topish

// // const fruites = ["Olma", "anor", "Nok"];

// // Massivni yaratamiz
// const fruites = ["Olma", "anor", "Nok"];

// // Umumiy uzunlikni saqlash uchun o'zgaruvchini yaratamiz
// let umumiyUzunlik = 0;

// // Massivni tekshiramiz
// for (let i = 0; i < fruites.length; i++) {
//     // Har bir so'zning uzunligini umumiy uzunlikga qo'shamiz
//     umumiyUzunlik += fruites[i].length;
// }

// // Natijani ekranga chiqaramiz
// console.log("Barcha stringlarning umumiy uzunligi: " + umumiyUzunlik);

// // Masala - 4

// // Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

// // const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];

// // Massivni yaratamiz
// const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];

// // Juft sonlarni saqlash uchun yangi massiv yaratamiz
// const juftlar = [];

// // Massivni tekshiramiz
// for (let i = 0; i < numbers.length; i++) {
//     // Agar hozirgi son juft bo'lsa, uning yarmini juftlar massiviga qo'shamiz
//     if (numbers[i] % 2 === 0) {
//         juftlar.push(numbers[i] / 2);
//     }
// }

// // Natijani ekranga chiqaramiz
// console.log("Juft sonlarning yarmlari: " + juftlar);


// // Masala - 5

// // Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin

// // const fruites = ["olma", "o'rik", "Nok", "avacado"];

// // Massivni yaratamiz
// const fruites = ["olma", "o'rik", "Nok", "avacado"];

// // Massivni yangilash uchun yangi massiv
// const yangiFruites = [];

// // Massivni tekshiramiz
// for (let i = 0; i < fruites.length; i++) {
//     // Har bir so'zni birinchi harfini ajratib olish
//     const birinchiHarf = fruites[i][0];

//     // Agar katta harf bilan boshlansa, birinchi harfni kichik qilish
//     if (birinchiHarf === birinchiHarf.toUpperCase()) {
//         yangiFruites.push(birinchiHarf.toLowerCase() + fruites[i].slice(1));
//     }
//     // Agar kichik harf bilan boshlansa, birinchi harfni katta qilish
//     else {
//         yangiFruites.push(birinchiHarf.toUpperCase() + fruites[i].slice(1));
//     }
// }

// // Natijani ekranga chiqaramiz
// console.log("Yangi fruites massivi: " + yangiFruites);

// // Masala - 6

// // Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// // Foydalanuvchidan so'zni kiritish
// const kiritilganSoz = prompt("Iltimos, bir so'z kiriting:");

// // 3 marta chiqarish uchun yangi so'z yaratamiz
// let chiqarilganSoz = "";

// // For loop orqali so'zni 3 marta chiqaramiz
// for (let i = 0; i < 3; i++) {
//     // Har bir bosqichda so'zni qo'shamiz va agar oxirgi bosqich bo'lmasa, probel qo'shamiz
//     chiqarilganSoz += kiritilganSoz;
//     if (i < 2) {
//         chiqarilganSoz += " ";
//     }
// }

// // Natijani ekranga chiqaramiz
// console.log(chiqarilganSoz);

// // Masala - 7

// // Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// // const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"]];

// // Massivni yaratamiz
// const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"]];

// // Birinchi harflarni saqlash uchun yangi string
// let birlashtirilganHarflar = "";

// // Massivni tekshiramiz
// for (let i = 0; i < fruitesArray.length; i++) {
//     // Agar hozirgi ichki massiv juft bo'lsa, uning birinchi elementining birinchi harfini qo'shamiz
//     if (i % 2 === 1) {
//         const birinchiElement = fruitesArray[i][0];
//         birlashtirilganHarflar += birinchiElement[0];
//     }
// }

// // Natijani ekranga chiqaramiz
// console.log("Juft arraylarning birinchi harflari: " + birlashtirilganHarflar);
