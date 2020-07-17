//Feet to Mile conversion 
function feetToMile(feet){
    if (typeof(feet)!=typeof(1))
    {
        return "You did not type any number!" ;
    }   
    else if (feet<0)
    {
        return "Feet can not be negative value!";
    }
    else
    {
        var mile =feet/5280;
        return mile.toFixed(5);
    }
}


//Wood calculator
function woodCalculator(chair,table,bed)
    {   if(typeof(chair)!=typeof(1) || typeof(table)!=typeof(1)|| typeof(bed)!=typeof(1))
        {
            return "All the argument must be in number type!"
        }
        else if(chair<0 || table<0 || bed<0)
        {
            return "Chair,Table or Bed can not be negative value!"
        }
        else
        {
        var woodForChair= chair*1; //for each chair 1 cubic feet wood needed
        var woodForTable= table*3; //for each table 3 cubic feet wood needed
        var woodForBed= bed*5;     //for each bed 5 cubic feet wood needed
        var totalWood= woodForChair+woodForTable+woodForBed;
        return totalWood;
        }
    }


//Brick Calculator
function brickCalculator(howManyFloors)
{
    if(typeof(howManyFloors)!=typeof(1))
    {
        return "You did not type any number!"
    }
    else if(howManyFloors<0)
    {
        return "Number of floor can not be negative!"
    }
    else
    { if(howManyFloors<=10)
        {
            var totalBrick=15*howManyFloors*1000; //for 1st 10 floor each floor is 15 feets in height,and for each floor 1000 bricks needed
            return totalBrick;
        }
      else if(howManyFloors>10 && howManyFloors<=20)
        {
            var totalBrick=15*10*1000+(howManyFloors-10)*12*1000; //for 2nd 10 floor each floor is 12 feets in height,and for each floor 1000 bricks needed
            return totalBrick;
        } 
      else
      {
          var totalBrick=15*10*1000+12*10*1000+10*(howManyFloors-20)*1000; //for each floor higher than 20 is 10 feet in height,and for each feet 1000 bricks is needed 
          return totalBrick;
      } 
    }
}


//Finding Tiny Friend
function tinyFriend(names)
{
    var smallestName=names[0];
    for(var i=0;i<names.length;i++)
    {   if(typeof(names[i])!=typeof("a"))
        {
            return "Please Type Names!"
        }
        else
        {
            if(smallestName.length>names[i].length)
        {
            smallestName=names[i];
        }
        }
    }
    return smallestName;
}

