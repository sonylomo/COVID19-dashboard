import React, {useState, useEffect} from 'react';


interface GlobalInfo {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
interface Covid {
  Countries: any[];
  Global?: GlobalInfo;
  Date: any;
}


function Global() {

  const [data, setData] = useState<Covid>();

  useEffect(() => {
    const fetchData = async() => {
      await fetch ("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(res => {
          setData(res)
          console.log(res);
        }
      )
      //setData(result);
    }

    fetchData()
  }, [])

  const Title:any = {fontWeight: '700'};
  const globally:any = {marginBottom: "50px"};

  return (
    <div className="Global container" style={globally}>
       
      {data ?
        <>
        <h1 style={Title}>Global Data</h1>
        <div className="row">
          <div className="col-xl-4 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Cases</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{data?.Global?.TotalConfirmed}</div>
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
                      <div className="h5 mb-0 font-weight-bold text-gray-800"> {data?.Global?.TotalDeaths}</div>
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
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{data?.Global?.TotalRecovered}</div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>        
       </>: 
      <> Loading...</>
      }
    </div>
  );
}

export default Global;
