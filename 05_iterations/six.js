const coding = ["js", "ruby", "java", "python", "cpp"]

/*
const values = coding.forEach( (item) => {
     console.log(item);
     return item
 } )

 console.log(values);
*/
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


  const facultyObj=[
    {faculty:"Deshpande mam",subject:"Computer Graphics",Year:1995},
    {faculty:"Phadke mam",subject:"Processor Architecture",Year:1990},
    {faculty:"Singh sir",subject:"M-3",Year:2009},
    {faculty:"Sonawane sir",subject:"DBMS",Year:2005}
  ];

  let getFacultyObj=facultyObj.filter((fy)=>{
    return fy.subject==="DBMS";
  });

   getFacultyObj=facultyObj.filter((fy)=>{
    return fy.Year>=1995;
  });
  console.log(getFacultyObj)
    

  getFacultyObj=facultyObj.forEach((item)=>{
        return item.Year>=2000;
  }
   );
  