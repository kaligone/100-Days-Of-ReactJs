## Developing a simple digital clock
    
  In this project , concepts of hooks and setinterval is used to develop a simple digital clock.
    
#### Process
In this I used the Javascript Date object to get the local time of the system i.e.

    const time = new Date().getLocalTimeString();

Then I passed this time as a initial value of the useState() function i.e. Hooks in ReactJs and used array destructuring to get the old time and the updated time
i.e. when the time will updated then it will passed to the old time variable.

    const [time , updateTime] =  useState(new Date().getLocalTimeString());

Then we created a fat arrow function where each time we fetched the new current time and passed it to the updateTime function in Hooks

    const chnageTime = () =>{
        updateTime(new Date().getLocalStringTime());
    }

Then we use setInterval function in the javascript in order to call the function after every 1 sec and get the updated value on screen after the every 1 sec similar to the digital clock

    setInterval(updateTime, 1000)   // 1000 millisec = 1sec

Demo :
![image](https://github.com/kaligone/100-Days-Of-ReactJs/assets/61344302/157074fd-1b3e-4bdb-b434-8ce2c505de3a)


    
