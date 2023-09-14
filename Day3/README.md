### Simple Value incrementer using Hooks in ReactJS
  In this I learned about the Hooks in ReactJS which are basically used to deal with the state behaviour changes in ReactJS in order to manage the state.
  In this we used usestate function which basically gives the array with the two values in it [oldState , function] where function contains the updated state.
  Also in this we used array destructuring (i.e. assinging the names to the values in that array in order access it directly by that names)

  ## Process
  We used the usestate and initialized it with 0
  Then we use event onClick to call the increment function , when the function is called we passes count++ value to the setCount i.e. count will contains the old value and setCount function will contains tge new value
  When the SetCount value is change the old value is stored in count and new value in setCount and continues.

NOTE : Only the component file is added
