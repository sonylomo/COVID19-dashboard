import React, {useState, useEffect} from 'react';

interface Covid {
    Countries: Country[];
    Global?: GlobalInfo;
    Date: any;
}

interface GlobalInfo {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: Date;
  Premium: Premium;
}

interface Premium {
}
/*interface LocalInfo {
    Country: string;
    CountryCode: string;
    NewConfirmed: number;
    Slug: string;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
}*/


function Local() {

  const [countries, setCountries] = useState<Country[]>([]);
  const [data, setData] = useState<any[]>([]);


  useEffect(() => {
    const fetchcountries = async() => {
      await fetch ("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(res => {
          setCountries(res.Countries)
         
        }
      )
    }

    fetchcountries()
  }, [])

  /**
   * enter country name in search bar
   * function should accept a parameter of what is on the input field
   * filter countries to what is on the input field against the countries hood
   * display only the country searched
   * 
   */
  
 
  
  const searcher = (event: any) => {
    event.preventDefault();
    let matches = countries.filter((country) => {
      const regex = new RegExp(`^${event.target.value}`, 'gi');
      return country.Country.match(regex);
    })
    setData(matches)
    
  }
  
  let mapper:any[] = countries;

  if(data.length > 0){
    mapper = data
  }
  
 
  const countryTitle:any = {marginTop: "30px", fontWeight: "700"}

  return (
    <div className="Local container ">
      
      <form className="d-none d-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 w-50 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" id="searchEntry" className="form-control bg-light border-5" placeholder="Enter Country..." aria-label="Search" aria-describedby="basic-addon2" onChange={searcher}/>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
      
      
      {mapper.map((country:any) => (
        <div key={country.Slug}>
        <h2 style={countryTitle}>{country?.Country}</h2>
        <div className="row">
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Cases</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"> {country?.TotalConfirmed}</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Deaths</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800"> {country?.TotalDeaths}</div>
                  </div> 
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-12 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Total Recoveries</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{country.TotalRecovered}</div>
                  </div>  
                </div>
              </div>
            </div>
          </div>  
          </div>
          </div> 
        ))}
    </div>
  );
}

export default Local;