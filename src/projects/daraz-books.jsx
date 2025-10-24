import React from 'react'
import './Daraz-books.css'

import { CiStar } from "react-icons/ci";

let booksData = [
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/6d2f865bb23ec0c315a29c539a919437.jpg_200x200q80.avif",
title:"Pakistan: A Personal History Imran Khan English Novel - KS",
price:"Rs. 307",
disc:"580 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/bc916388e98ac634026e564707884737.jpg_200x200q90.avif",
title:"The Murder of History A critique of history textbooks used in Pakistan",
price:"Rs. 769",
disc:"580 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/a66eaccf25e659b36d0250bb6b29dd77.jpg_200x200q90.avif",
title:"Maala Novel / Maala Novel / Maala Urdu Novel By Nimra Ahmed",
price:"Rs. 939",
disc:"580 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/62cab182ae46eb41a56b413cd875f7df.jpg_200x200q90.avif",
title:"Rich Dad, Poor Dad by Robert T. Kiyosaki",
price:"Rs. 140",
disc:"3.8K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/bbe6760280d0e27cbd8e195f640701ca.jpg_200x200q90.avif",
title:"Jannat Ke Patty By Nimra Ahmed Besdt Selling Urdu Book ANB",
price:"Rs. 569",
disc:"1.3K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/S3d82b08ef24745ddaaf2edc067fe175cV.jpg_200x200q90.avif",
title:"Jannat Ke Patty By Nimra Ahmed Best Selling Urdu Book ANB",
price:"Rs. 569",
disc:"1.3K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/Sd94597aad3c24f90b6173a06f1532e35M.jpg_200x200q90.avif",
title:"Peer e Kamil By umer Ahmed Best Selling Urdu Book",
price:"Rs. 388",
disc:"5.0K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/7668102eca5bd80e1808747e924ed301.jpg_200x200q90.avif",
title:"Peer E Kamil Urdu Book By Umera Ahmad",
price:"Rs. 399",
disc:"1.3K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/bbe901bd49d06d6bb479efa865e1b01a.jpg_200x200q90.avif",
title:"Rich Dad, Poor Dad by Robert T. Kiyosaki",
price:"Rs. 250",
disc:"1.6K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/S42d3eba4e2e44dce89c1145c07ef1d186.jpg_200x200q90.avif",
title:"the psychology of money",
price:"Rs. 185",
disc:"942 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/b29fbd8f1db797d7467aa4686f5ccfa1.jpg_200x200q90.avif",
title:"Hurf Say Lafz Tak Novel By Umaira Ahmad Hurf Harf Se Lafz Tak By Umera Ahmed",
price:"Rs. 164",
disc:"2.4K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/f9d804295a6e1d12062edfd740f59325.jpg_200x200q90.avif",
title:"Atomic Habits Book By James Clear Urdu Translation / Atimi Adaatein ",
price:"Rs. 299",
disc:"209K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/57f6b2729e5cefa4a17e05864a15845b.jpg_200x200q90.avif",
title:"ISHQ E YARAM Novel / Ishq e Yaram Urdu Novel / Ishq E Yaram",
price:"Rs. 699",
disc:"1.1K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/f6d959fe5458a9f9a913df363566e3c5.jpg_200x200q90.avif",
title:"Khud Say Kh_uda Tak by Muhammad Nasir Iftekhar Khud sy kuda ta",
price:"Rs. 689",
disc:"482 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/35c1aa2ba9718a12226cabd61e103022.png_200x200q90.avif",
title:"The Forty Rules of Love Novel by Elif Shafak",
price:"Rs. 250",
disc:"1.3K sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/767f22ba58adc51a91120c9073505dc2.jpg_200x200q90.avif",
title:"Magical Tracing Workbook Set,Reusable Calligraphy ",
price:"Rs. 579",
disc:"402 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/558b3572b2b6bd92307985177aa474f0.jpg_200x200q90.avif",
title:"To Kill a Mockingbird Novel by Harper Lee Best Selling English Novel - KS ",
price:"Rs. 252",
disc:"483 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/77351a1b94bf18586dea501347ea8946.jpg_200x200q90.avif",
title:"Amar Bail by Umera Ahmad Best selling urdu reading book Amar ",
price:"Rs. 649",
disc:"642 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/1f4f562f82fd4c258ab1f28dcf8c822d.jpg_200x200q90.avif",
title:"(Cat and Mouse Duet ) HAunting Adeline by H.D. Carlton English ",
price:"Rs. 307",
disc:"1.5k sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/dabc679cd77dd5b6be629290fc8c61de.jpg_200x200q90.avif",
title:"Allah Loves by Omar Suleiman ",
price:"Rs. 189",
disc:"2.1k sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/Sc9f66533c12143c19548d3aefec555f6K.jpg_200x200q90.avif",
title:"Haalim Part 1 And Part 2 Complete Novel By Nimra Ahmed ",
price:"Rs. 1,598",
disc:"160 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/c6a394c00fc799fbb5dbb4c3dfac1d10.jpg_200x200q90.avif",
title:"And The Mountains Echoed Novel by Khaled Hosseini ",
price:"Rs. 250",
disc:"147 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/56397e71dd4f07c7ec69dd66cf1da101.jpg_200x200q90.avif",
title:"Fourth Wing by Rebecca Yarros Best Selling English Novel",
price:"Rs. 439",
disc:"364 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/a01b34fc33f3b3f8ad2d408097c8ab52.jpg_200x200q90.avif",
title:"Yaaram Yaram Novel by Sumaira Hameed Best selling urdu reading book-(KBS)x ",
price:"Rs. 599",
disc:"524 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/8536e2003484184a300e26ca81b22c4a.jpg_200x200q90.avif",
title:"King of Wrath By Ana Huang Novel English Novel English Novel - KC ",
price:"Rs. 274",
disc:"392 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/Sd9c26e3f84ac4c8b8f886af8ea55e24b3.jpg_200x200q90.avif",
title:"Maala Novel By Nemra nimra Ahmed || Mala urdu novel by Nimra Ahmed ",
price:"Rs. 388",
disc:"143 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/e8d2f0f2c75c5bb4dcfe80bacaa84bd8.png_200x200q90.avif",
title:"High School English Grammar and Composition by Wren and Martin",

price:"Rs. 995",
disc:" 43 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/f00e88f130b46480245563538cfd570c.jpg_200x200q90.avif",
title:"Yaani Urdu Poetry Book By John Elia Best Urdu Literature book",
price:"Rs. 388",
disc:"143 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/474fac961054e47dec0b2a62317a03a2.jpg_200x200q90.avif",
title:"The Power of Self Confidence by Brian Tracy Urdu Edition ",
price:"Rs. 390",
disc:"142 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/8ad15fd397854adf2c16cc8e856caccd.jpg_200x200q90.avif",
title:"The Inheritance Games Book by Jennifer Lynn Barnes English Novel",
price:"Rs. 329",
disc:"443 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/00190b246f95fe282ddd31b91e8b3c0f.jpg_200x200q90.avif",
title:"Urdu Aks novel By Umaira Ahmed Best Selling Urdu Novel ",
price:"Rs. 649",
disc:"18 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/c067d3594cad42553402e1c29709032e.jpg_200x200q90.avif",
title:"Maala Novel / Maala Novel / Maala Urdu Novel By Nimra Ahmed / Mala ",
price:"Rs. 849",
disc:"229 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/c0e263443cba79bde76aaf3e0f8de23d.jpg_200x200q90.avif",
title:"Aab-E-Hayat urdu novel by Umera Ahmad Aab-E-Hayat urdu novel By ",
price:"Rs. 539",
disc:"548 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/348d7f1e4edd880583fcbb80babeb4c8.jpg_200x200q90.avif",
title:"Lekin By Jon Elia in urdu Poetry Book ",
price:"Rs. 479",
disc:"1.7k sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/35c1aa2ba9718a12226cabd61e103022.png_200x200q90.avif",
title:"The Forty Rules of Love Novel by Elif Shafak ",
price:"Rs. 250",
disc:"1.3k sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/474fac961054e47dec0b2a62317a03a2.jpg_200x200q90.avif",
title:"The Power of Self Confidence by Brian Tracy Urdu Edition ",
price:"Rs. 390",
disc:"142 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/9dfcf5e0c04aced72359ea322d725765.jpg_200x200q90.avif",
title:"A Good Girl’s Guide to Murder A Novel By Holly Jacks",
price:"Rs. 239",
disc:"616 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/S5334daa5ae2444dda37e1cd1e401653at.jpg_200x200q90.avif",
title:"Ishq Aatish by sadia Rajput ",
price:"Rs. 577",
disc:"1.3k sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/e8d2f0f2c75c5bb4dcfe80bacaa84bd8.png_200x200q90.avif",
title:"High School English Grammar and Composition by Wren and Martin ",
price:"Rs. 995",
disc:"43 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/bc407e00e5fd5f1e82c1ba5a324e56f8.jpg_200x200q90.avif",
title:"verity by Colleen Hoover ",
price:"Rs. 216",
disc:"716 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/9920cd235bf361ab50fa820dd765d18f.jpg_200x200q90.avif",
title:"verity by Colleen Hoover ",
price:"Rs. 274",
disc:"243 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/f58e5151a5ec24dfe53b2acfec945a71.jpg_200x200q90.avif",
title:"Read people like a book by patrick king ",
price:"Rs. 249",
disc:"175 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/c6a394c00fc799fbb5dbb4c3dfac1d10.jpg_200x200q90.avif",
title:"And The Mountains Echoed Novel by Khaled Hosseini ",
price:"Rs. 250",
disc:"147 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/S5ce9ca74ccbd455c92f3b979e4efe2585.jpg_200x200q90.avif",
title:"THE ART OF READING MINDS BY HENRIK FEXEUS ",
price:"Rs. 236",
disc:"816 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/56397e71dd4f07c7ec69dd66cf1da101.jpg_200x200q90.avif",
title:"Fourth Wing by Rebecca Yarros Best Selling English Novel KS ",
price:"Rs. 439",
disc:"364 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/Sed7f2680fd0941a2b68a05ba449f6684W.jpg_200x200q90.avif",
title:"Who is Who and What is What For CSS, PCS, PMS, NTS, PPSC and All ",
price:"Rs. 900",
disc:"81 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/g/kf/Sf8911bd775ae4c1e88b3cff24d58ca37F.jpg_200x200q90.avif",
title:"Atomic Habits by James Clear - Urdu Translation ",
price:"Rs. 990",
disc:"148 sold",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/54ce3419fc8c1ee7fb0dffecbf3c97eb.png_200x200q90.avif",
title:"The Girl Who Fell Beneath the Sea by Axie Oh (Author)",
price:"Rs. 605",
disc:"816 40",

},
  {
bookImage:"https://img.drz.lazcdn.com/static/pk/p/8465d345de57e72c65ce79c150c98d90.jpg_200x200q90.avif",
title:"HAunting Adeline Book by H. D. Carlton ",
price:"Rs. 289",
disc:"238 sold",

},


]



    
    

    
    


function Darazbooks(meribook) {
  return (
    <div className='books'>{
      booksData.map((meribook)=>{
        return <  Book {...meribook} />

      })
      }
    </div>
  )
}

export default Darazbooks

function Book(props) {
  let star = <CiStar /> 
return(
  <div className='Book'>

  <img src={props.bookImage} alt="" />
  <h5>{props.title}</h5>
  <span>{props.price}</span>
  <p>{props.disc} <span>{star}{star}{star}{star}{star}{star}</span></p>
  </div>
)  
}
