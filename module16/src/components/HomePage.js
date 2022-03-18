import * as React from  'react';
import axios from 'axios';

const HomePage = ()=> { 

    const [data, setData] = React.useState();
   
    // React.useEffect(() => {

    //     axios.get('http://localhost:3005/courses').then((response)=>{
    //     setData(response.data);    
    //     console.log(response);
    //     })

    // }, []) 

     return(
        < div>
            <h1>Im in the Home Page</h1>
            {/* <pre> {JSON.stringify(data,null,2)}</pre> */}
        </div>
         );
    
}

export default HomePage;