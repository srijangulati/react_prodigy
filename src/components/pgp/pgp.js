import React from 'react';

export default class Pgp extends React.Component{
  render(){
    const style = {
      marginTop:'5%'
    };
    return(
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='animated fadeInDown'>
            <h1 style={style}>Post-graduate programs</h1>
            <h2>
              Coming Soon
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
