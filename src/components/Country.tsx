import React, {useState, useEffect} from 'react';

interface Covid {
    Countries: any[];
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

/*interface LocalInfo {
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
}*/


function Local() {

  const [Data, setData] = useState<Covid>();
  

  useEffect(() => {
    const fetchData = async() => {
      await fetch ("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(res => {
          setData(res)
          console.log(res.Countries[0]);
         
        }
      )
    }

    fetchData()
  }, [])
  
  const countryTitle:any = {marginTop: "30px", fontWeight: "700"}

  return (
    <div className="Local container ">
      
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 w-50 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light border-5" placeholder="Enter Country" aria-label="Search" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
      
      <h2 style={countryTitle}>{Data?.Countries[0].Country}</h2>

      <div className="row">
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Cases</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800"> {Data?.Countries[0]?.TotalConfirmed}</div>
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
                      <div className="h5 mb-0 font-weight-bold text-gray-800"> {Data?.Countries[0]?.TotalDeaths}</div>
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
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{Data?.Countries[0]?.TotalRecovered}</div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>    

        {/*<p>Country: {Data?.Countries[0].Country}</p>
        <p>Total Cases: {Data?.Countries[0]?.TotalConfirmed}</p>
        <p>Total Deaths: {Data?.Countries[0]?.TotalDeaths}</p>
        <p>Total Recoveries: {Data?.Countries[0]?.TotalRecovered}</p>*/}
      
    
    </div>
  );
}

export default Local;