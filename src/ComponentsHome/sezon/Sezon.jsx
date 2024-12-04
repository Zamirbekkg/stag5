import React from 'react';
import "./sezon.scss"
const Sezon = () => {
    return (
        <div className='Sezon'>
             
        <div className=''>
            <div className='h3div'>
                <h3 className='h3text'>СЕЗОН 2020/21</h3>
            </div>
            <div className='Linediv'>
                {/* <img className='LineLogo' src={LineLogo} alt="" /> */}
            </div>
            <div className='Time'>
                <div className='Timecol1'>
                </div>
                <div className='Timecol2'>
                </div>
                <div className='Timecol3'>
                </div>
            </div>
        </div>
        <div className='imgKatalog'></div>
                <button className='Catalogbtn'></button>
        </div>
        
    );
}

export default Sezon;
