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
