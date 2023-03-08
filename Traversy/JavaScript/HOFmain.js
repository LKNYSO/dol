const companies = [
    {name: "Company One", Category:"Finance", start:1991, end: 2003},
    {name: "Company Two", Category:"Retail", start:1992, end: 2008},
    {name: "Company Three", Category:"Auto", start:1999, end: 2007},
    {name: "Company Four", Category:"Retail", start:1989, end: 2010},
    {name: "Company Five", Category:"Technology", start:2009, end: 2014},
    {name: "Company Six", Category:"Finance", start:1987, end: 2010},
    {name: "Company Seven", Category:"Auto", start:1986, end: 1996},
    {name: "Company Eight", Category:"Technology", start:2011, end: 2016},
    {name: "Company Nine", Category:"Retail", start:1981, end: 1989}
    ];

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    //for
            /* for(let i = 0; i < companies.length; i++) {
                console.log(companies[i]);
            } */

    //forEach()
            /* companies.forEach(function(company){
                console.log(company.name);
            }); */

    //.filter()
            /*  let canDrink = [];
                for(let i=0; i<ages.length; i++) {
                    if(ages[i] >= 21) {
                        canDrink.push(ages[i]);
                    }
                } */
                //arrow function
            /*  const canDrink = ages.filter(age => age >= 21); */
                //TRADITIONAL USE OF Function()
                /*const canDrink  = ages.filter(function(age){
                    if(age >= 21) {
                        return true;
                    }
                }) */

            //filter retail companies
            const retailCompanies = companies.filter(
                company => company.Category === 'Retail');

                console.log(retailCompanies);