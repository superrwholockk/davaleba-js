// Challenge 1:
// მოცემულია ობიექტი car. ამოიღეთ brand და model ცვლადებად, ხოლო დანარჩენი თვისებები მოათავსეთ ახალ ობიექტში others.
const car = {
    model: "audi",
    brand: "R8",
    year: "2018",
    color: "Black"
};

const {model, brand, ...others} = car;
console.log(model);
console.log(brand);
console.log(others);

// Challenge 2
// გაქვთ ორი ობიექტი: defaultSettings და userSettings. შექმენით მესამე ობიექტი, რომელიც აერთიანებს ორივეს ისე, რომ მომხმარებლის
// პარამეტრებმა გადაფაროს დეფოლტური.

const defaultSettings= {
    location: "GE",
    fontSize: "16px",
    showSideBar:false
};

const userSettings = {
    location: "USA",
    fontSize: "19px",
    showSideBar:true,
    theme:"dark"
};

const mergedSettings = { ...defaultSettings, ...userSettings };
console.log(mergedSettings);


//დავალება 1
function calculateTotal(...theArgs) {
    let total = 0;
    for( const arg of theArgs ) {
        total += arg;
    }
    return total;
}

console.log(calculateTotal(1, 2, 3));

//დავალება 2

const students=[
    {name: "luka", grades:[81, 91, 99]},
    {name: "nini", grades:[95, 90, 97]},
    {name: "nika", grades:[81, 78, 56]},
    {name: "anano",grades:[100, 93, 97]},
    {name: "saba", grades:[87, 73, 61]}
];

students.forEach((students)=>{
    const {name, grades:[firstGrade]}=students;
    console.log(`სტუდენტ ${name}-ს პირველი ნიშანი არის ${firstGrade}`);
    // console.log(students);
});

// 1. "სუპერმარკეტის ინვენტარი" (Array Destructuring)
//
// პირობა: მოცემულია ხილის მასივი: const fruits = ["ვაშლი", "ბანანი", "ალუბალი", "ატამი", "საზამთრო"];
// დავალება:
//     ამოიღეთ პირველი ორი ხილი ცალკე ცვლადებში.
//     მესამე ხილი გამოტოვეთ.
//     დანარჩენი ხილი (მეოთხედან ბოლომდე) შეაგროვეთ ერთ ახალ მასივში სახელად
//     otherFruits (Rest ოპერატორის გამოყენებით).დაბეჭდეთ მიღებული შედეგები.

const fruits = ["ვაშლი", "ბანანი", "ალუბალი", "ატამი", "საზამთრო"];
const [firstFruit , secondFruit , , ...otherFruits] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(otherFruits);

// 2. "მომხმარებლის პროფილი" (Object Destructuring)
//
// პირობა: მოცემულია ობიექტი:
//     const user = {
//     id: 5,
//         username: "gio_dev",
//         personalInfo: {
//         firstName: "გიორგი",
//             lastName: "ბერიძე",
//             city: "თბილისი"
//     }
// };
// დავალება:
//     დესტრუქტურიზაციის გამოყენებით ამოიღეთ id და username.
//     ამოიღეთ firstName და city პირდაპირ personalInfo ობიექტიდან.
//     ცვლადს username გადაარქვით სახელი და დაარქვით loginName.

const user = {
    id: 5,
    username: "gio_dev",
    personalInfo: {
        firstName: "გიორგი",
        lastName: "ბერიძე",
        city: "თბილისი"
    }
};

const {id, username} = user;
console.log(id);
console.log(username);

const {personalInfo: {firstName, city}} = user;
console.log(firstName);
console.log(city);

const {username: loginName} = user;
console.log(loginName);

// "პარამეტრების შერწყმა" (Spread Operator)
//
// პირობა: გაქვთ ორი ობიექტი:
//
//     laptopModel = { brand: "Lenovo", model: "ThinkPad", year: 2022 }
//     laptopUpgrade = { ram: "32GB", year: 2024 }
// დავალება:
//     შექმენით ახალი ობიექტი finalLaptop, რომელიც აერთიანებს ამ ორ ობიექტს.
//     ყურადღება: year თვისება ორივეშია. დარწმუნდით, რომ საბოლოო ობიექტში წელი იყოს 2024.
// დაამატეთ ახალი თვისება price: 1500 პირდაპირ შერწყმის პროცესში.

laptopModel = {
    brand: "Lenovo",
    model: "ThinkPad",
    year: 2022
}
laptopUpgrade = {
    ram: "32GB",
    year: 2024
}

const finalLaptop = {
    ...laptopModel, ...laptopUpgrade,  price: 1500
}
console.log(finalLaptop);

//
// 4. "მაქსიმალური რიცხვი" (Spread in Functions)
// პირობა: მოცემულია რიცხვების მასივი: const nums = [45, 89, 23, 7, 99, 12];
// დავალება:
//     გამოიყენეთ JavaScript-ის ჩაშენებული ფუნქცია Math.max().
//     მასივი nums ფუნქციას გადაეცით Spread ოპერატორის გამოყენებით, რათა იპოვოთ ყველაზე დიდი რიცხვი.

const nums = [45, 89, 23, 7, 99, 12];
console.log(Math.max(...nums));

// 5. "სტუდენტების სია" (Rest in Functions)
// დავალება:
//     დაწერეთ ფუნქცია listStudents(className, ...students).
//     პირველი არგუმენტი იყოს კლასის სახელი, ხოლო დანარჩენი (Rest) — სტუდენტების სახელები.
//     ფუნქციამ უნდა დააბრუნოს ტექსტი: "კლასში [className] არიან სტუდენტები: [სახელების სია მძიმით გამოყოფილი]".
//
   function listStudents(className, ...students){
    console.log(`კლასში ${className} არიან სტუდენტები: ${students.join(", ")}`);
   }

listStudents("12A", "Teo", "Luka", "Saba", "Mari", "Keti", "Gvantsa", "Ani");