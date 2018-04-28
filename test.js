const test = {
  obj1: {
    str1: 'value1',
    obj1: {
      str1: 'value2',
      arr1: [
        {arr1: [
          {str1: 'value3'},
          {str2: 'value4'},
          
          {arr1: [
           {str1: 'value5',
           str2: 'value6'}
          ]}
        ]},
        {
          arr2: [
            'value7',
            'value8',
            'value9',
            'value10'
          ],
        }
      ]
    } 
  }
}

// logs, for helping in building the test.
logg(test.obj1.str1, test.obj1.obj1.str1)
logg(test.obj1.obj1.arr1[0].arr1[0].str1)
logg(test.obj1.obj1.arr1[0].arr1[1].str2)
logg(test.obj1.obj1.arr1[0].arr1[2].arr1[0].str1)
logg(test.obj1.obj1.arr1[0].arr1[2].arr1[0].str2)
  logg(test.obj1.obj1.arr1[1].arr2[0])
  logg(test.obj1.obj1.arr1[1].arr2[1])
  logg(test.obj1.obj1.arr1[1].arr2[2])
  logg(test.obj1.obj1.arr1[1].arr2[3])

function logg([args]) { // dummy values are put into the parameters for readablility purposes.
 var arguments = logg.arguments; // arguements passes all of the parameters by value.
  for (let i = 0; i < arguments.length; i++) {
    console.log(JSON.stringify(arguments[i]))
  }
}

function get_if_exist(str) {
  try { return eval(str) }
  catch(e) { return {} }
} 
let testp1 = get_if_exist('test.obj1.obj1.arr1[1].arr2[3]')
let testp2 = get_if_exist('test.obj1.obj1.arr1[7].arr2[3]')
console.log('implementing test1', testp1, testp2)

function index(obj,i) {return obj[i] || {}}
let testy1 = 'test.obj1.obj1.arr1[1].arr2[3]'.split('.').reduce(index, test)
let testy2 = 'test.obj1.obj1.arr1[3].arr2[3]'.split('.').reduce(index, test)
let testy3 = 'test.obj5.obj1.arr1[1].arr2[3]'.split('.').reduce(index, test)
console.log('implementing test3', testy1, testy2, testy3)

// test_1
// SHOULD return the value because there is a value there.
// undf_check(test,'test.obj1.obj1.arr1[0].arr1[2].arr1[0].str1')

// test_2
// SHOULD return empty and not break with an error because previous keys do not have values. But that should be caught early.
// undf_check(test,'test.obj1.obj1.arr1[0].arr1[2].arr1[0].str1.foo.bas.blah')

// test_3
// total junk ... should return empty and not break.
// undf_check(object, 'test.blah.whoa.frog.be.dragon')

// I want to send the logg ... an array of values.
// I need to wrap the function logg parameters around an array.
