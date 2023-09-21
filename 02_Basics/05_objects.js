const course = {
  coursename: 'cse',
  price: 199999,
  courseInstructor: 'Jignesh',
};

// course.courseInstructor;
const { courseInstructor: instructor, price, coursename } = course;
console.log(instructor);
console.log(price);
console.log(coursename);

// --json api----------//
console.log('--');
console.log('Json API');
console.log('--');

/*{
"name":"Jignesh Sharma"
}*/
