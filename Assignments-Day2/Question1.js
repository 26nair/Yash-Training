function primeOrNot(num)
{

    for(var i = 2; i < num; i++)
    {
      if(num % i === 0)
      {
        console.log("The number is not prime" );

        return false;
      }
    }
    console.log("The Number is prime");
    return true;
  }

primeOrNot(4)
